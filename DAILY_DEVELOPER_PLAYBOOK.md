# Daily Developer Playbook

Goal: choose prompts and evidence routes that keep token burn low without lowering implementation, review, and investigation quality on 10k-70k file repositories.

Audience: developers using Codex/agents for daily codebase work.

Assumption: TokenOpt MCP is available. CodeGraph may or may not be healthy.

## Route Decision

| Situation | Use this route | Why |
| --- | --- | --- |
| CodeGraph doctor passes and repo has a current snapshot | TokenOpt + CodeGraph | Best quality/cost target for broad or unknown-owner tasks. |
| CodeGraph is unavailable, no snapshot, or DB/daemon unstable | TokenOpt + native narrow search/read | Avoid fake CodeGraph evidence and recover quality with bounded fallback. |
| Exact file/class/symbol already known | Native narrow search/read, optionally TokenOpt checklist | No need to pay broad acquisition cost. |
| Review has a concrete diff | Diff-first review, then CodeGraph or narrow reads for impact | Review quality depends on introduced behavior, not repo overview. |
| Missing PBI/requirement/diff/failing test artifact | Ask for the artifact | Do not inspect the repo to invent missing business context. |

## Benchmark-Informed Defaults

Historical source: `benchmark-results/developer-daily-playbook-2026-06-14.json`, 9 real daily prompts x 4 modes across Hadoop, Elasticsearch, and Doughnut. Current benchmark suite coverage is `benchmark-results/suites/developer-daily-playbook-suite.json`, 13 prompt tasks x selected modes.

| Prompt family | Recommended route | Reason from benchmark |
| --- | --- | --- |
| Requirement analyst | Hybrid when quality matters | Hybrid stayed correct with 0.938 quality and ~70% lower input than the successful baseline on Hadoop. |
| Investigate flow | Hybrid | Baseline timed out; hybrid was the only correct mode. |
| Refactor planning | Hybrid | Baseline timed out; hybrid was the only correct mode. |
| Business deepdive | Hybrid, but require explicit owner/feature artifact | Hybrid was far better than other modes, but still missed correctness gate. Prompt needs stricter business slots. |
| PBI investigate | Hybrid, but ask for missing PBI details early | Hybrid had high idea quality but missed correctness gate. Need artifact sufficiency before repo digging. |
| Bug trace | Hybrid with symptom/failing-test gate | Hybrid was best but not correct. Do not run deep search without repro, stack frame, or failing test anchor. |
| Plan implement | Hybrid | Hybrid was the only correct mode and kept tool calls bounded to 5. |
| Implement code + unit tests | Use a real edit/test runner, not this no-edit benchmark route | Hybrid was close but not correct; current suite only measures implementation handoff because it forbids file edits. |
| Code review | Diff-first `codegraph-only` when CodeGraph is healthy; otherwise tokenopt-only diff checklist | Both `codegraph-only` and hybrid reached 1.000 quality, but `codegraph-only` used ~106k input vs hybrid ~325k. TokenOpt-only also passed at ~57k input with 0.909 quality. |
| E2E trace flow | CodeGraph-only or hybrid | Use indexed flow evidence first; TokenOpt is useful as a completeness checklist for invariants/tests/risks. |
| Write unittest class | CodeGraph change/test pack, optionally TokenOpt checklist | Existing tests and owner class matter more than broad repo context. |
| Performance analysis | Hybrid with measurement gate | TokenOpt keeps cost-model slots explicit; CodeGraph grounds hotspots and validation commands. |
| Security audit | Diff/scope-first, usually tokenopt-only or CodeGraph review packet | Requires concrete scope; avoid broad vulnerability hunting without diff/surface. |

Operational rule:

- Use hybrid for broad investigation/planning only when CodeGraph is healthy and the benchmark prompt has concrete anchors.
- Use `codegraph-only` for code review if the diff is concrete and CodeGraph is healthy.
- Use TokenOpt-only for cheap review triage when CodeGraph is unhealthy.
- Do not trust prompt text alone to cap fallback cost; enforce tool-call and shell-call limits in the runner.

## CodeGraph Readiness

Run before CodeGraph-heavy sessions:

```powershell
node D:\Personal\Projects\code-graph\dist\cli.js doctor --root <target-repo>
node D:\Personal\Projects\code-graph\dist\cli.js setup --root <target-repo> --workspace-key <target-repo>
node D:\Personal\Projects\code-graph\dist\cli.js index --root <target-repo> --workspace-key <target-repo> --quiet
```

Ready means:

- `.codegraph/graph.sqlite` exists for the target repo.
- `doctor --root` reports the SQLite graph and artifact paths as usable.
- target repo has a current snapshot for the same `--workspace-key`.

If any check fails, use the no-CodeGraph prompts below or the hybrid route with a strict fallback cap.

When setup/index fails or the snapshot is stale, treat CodeGraph evidence as unavailable. Do not run `codegraph-only` for broad tasks; switch to TokenOpt + native bounded fallback.

## Hard Budgets

Use these as default prompt budgets:

| Work type | MCP calls | Native shell/read fallback | Stop condition |
| --- | ---: | ---: | --- |
| Business deepdive / PBI investigate | 1 TokenOpt + 1 CodeGraph pack + 1 exact followup | 3 shell calls when CodeGraph fails | Required owner files, symbols, tests, risks known. |
| Flow investigation / bug trace | 1 CodeGraph flow pack or native exact search | 3 shell calls | Entrypoint, sequence, invariant, tests known. |
| Plan implement / implement handoff | 1 TokenOpt + 1 CodeGraph change pack + 1 exact followup | 3 shell calls | Edit surfaces, tests, validation known. |
| Write unittest class | 1 CodeGraph change/test pack + optional TokenOpt coverage checklist | 2 shell calls | Target class, existing tests, assertions, command known. |
| E2E trace flow | 1 CodeGraph flow pack + 1 exact missing-edge followup | 3 shell calls | Entrypoint, ordered sequence, tests, inferred edges known. |
| Performance analysis | 1 TokenOpt slot packet + 1 CodeGraph flow/change pack | 3 shell calls | Cost model, measurement points, validation known. |
| Security audit | 1 security/review packet | 2 shell calls | Findings/non-findings, boundary checks, missing coverage known. |
| Code review | 1 review packet or diff-first narrow reads | 2 shell calls | Findings, business impact, similar logic, missing tests known. |
| Refactor planning | 1 CodeGraph change/flow pack + 1 exact followup | 3 shell calls | Behavior invariants and validation plan known. |

Fallback hard stop:

- Run one exact `rg` query from named anchors.
- Batch selected file slices into one shell command.
- Optionally run one targeted test search.
- Do not run `rg --files`, broad directory listings, or whole-repo reads.
- If still incomplete, mark gaps in `risks`, `unknowns`, or `open_questions`.

Runner-level enforcement needed:

- Reject shell fallback after the prompt family budget is exhausted.
- Kill the whole Codex child process tree on timeout, not only the parent wrapper.
- Record whether a result is "quality pass but over budget"; do not count that as a production-ready win.

## Prompts With CodeGraph

Use these when CodeGraph readiness passes.

### Business Deepdive

```text
Use TokenOpt as the slot checklist and CodeGraph as the source-of-truth evidence provider.

Call TokenOpt first for business slots, then CodeGraph get_flow_pack/get_research_pack for source evidence.
Do not use shell unless CodeGraph explicitly misses one named slot.

Task:
Business deepdive <business area/feature>. Explain current behavior, owner flow, core entities, tests, risks, and unknowns.

Return valid compact JSON only with:
summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions.
```

### Investigate Flow

```text
Use CodeGraph get_flow_pack first.
Use the exact endpoint/class/symbol in the target. Follow API/controller, service/domain, storage/repository, caller/UI, and tests.
Do not run broad repo exploration.

Task:
Investigate flow for <endpoint/class/symbol/behavior>.

Return valid compact JSON only with:
summary, flow, invariants, files, symbols, tests_to_run, risks.
```

### E2E Trace Flow

```text
Use CodeGraph get_flow_pack first.
Trace <endpoint/UI action/job/message/class/behavior> end to end through entrypoint, domain/service, storage/dependency, caller/UI, and tests.
Use TokenOpt only as a completeness checklist for invariants, unresolved edges, tests, and risks.
Do not run broad repo exploration.

Return valid compact JSON only with:
entrypoint, sequence, invariants, files, symbols, tests_to_run, inferred_edges, risks.
```

### Requirement Analyst

```text
Use TokenOpt+CodeGraph.
TokenOpt extracts requirement slots; CodeGraph verifies current behavior and impacted code.

Requirement:
<requirement or acceptance criteria>

Return valid compact JSON only with:
requirement_summary, current_behavior, acceptance_criteria, impacted_files, symbols, test_strategy, risks, open_questions.
```

### PBI Investigate

```text
Use TokenOpt+CodeGraph.
Treat the PBI as the requirement artifact. Separate current behavior, impacted files, unknowns, compatibility risks, and next steps.

PBI:
<PBI and acceptance criteria>

Return valid compact JSON only with:
pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps.
```

### Bug Trace

```text
Use CodeGraph flow evidence or exact native trace from the failing artifact.
Start from the symptom, failing test, stack trace, endpoint, or changed behavior. Trace to the smallest owner symbol.

Bug:
<symptom, repro, failing test, or stack trace>

Return valid compact JSON only with:
summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks.
```

### Plan Implement

```text
Use TokenOpt+CodeGraph change-pack evidence.
Do not edit yet. Produce an implementation plan with exact files, symbols, test surfaces, validation commands, and risks.

Task:
Plan implementation for <PBI/change>.

Return valid compact JSON only with:
scope, out_of_scope, impacted_files, symbols, implementation_steps, tests, validation_commands, risks.
```

### Write Unittest Class

```text
Use CodeGraph get_change_pack first with changeType=test for the named class/module/behavior.
Use TokenOpt as a coverage checklist only if existing tests, assertions, fixtures, or validation commands are incomplete.

Target:
<class/module/file and behavior>

Return valid compact JSON only with:
target_class, behavior, existing_coverage, missing_coverage, test_location, test_cases, fixtures_or_mocks, assertions, targeted_command, risks.
```

### Implement Code + Unit Tests

```text
Use CodeGraph change-pack evidence first. Use TokenOpt as a coverage checklist if owner files/tests are not all known.

Task:
Implement <change>.

Requirements:
- Make the smallest scoped code change.
- Add or update targeted unit tests.
- Preserve existing behavior outside the requested change.
- Run the narrowest relevant validation command.

Before editing, identify:
files_to_change, owner_symbols, invariants, existing_tests, tests_to_add, validation_commands, risks.

After editing, return:
changed_files, implementation_summary, tests_added, validation_result, residual_risks.
```

### Code Review

```text
Review the net diff, not individual commits.
Use CodeGraph review evidence for changed flow, similar logic, likely tests, and business impact.
Use TokenOpt as the review checklist.

Check:
- syntax/runtime bugs
- correctness and regressions
- business requirement coverage
- edge cases and state transitions
- similar logic needing the same change
- missing tests
- security, performance, compatibility, resource lifecycle

Return valid compact JSON only with:
findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.
Findings must be actionable and introduced by the diff.
```

### Performance Analysis

```text
Use TokenOpt+CodeGraph.
TokenOpt supplies the cost-model and validation slots; CodeGraph grounds the code path, likely hotspots, tests, and benchmark commands.
Do not propose optimizations until measurement points and correctness risks are named.

Task:
Performance analysis for <workflow/query/endpoint/module>.

Return valid compact JSON only with:
target, suspected_hotspots, cost_model, measurements, optimization_options, validation_commands, risks, evidence_used.
```

### Security Audit

```text
Review the concrete diff/scope/risky surface first.
Use TokenOpt security_audit or CodeGraph review_patch evidence. Do not run broad vulnerability hunting.
Separate exploitable findings, non-findings, and missing security coverage.

Scope:
<diff, PR, changed files, route, symbol, or risky surface>

Return valid compact JSON only with:
status, findings, evidence_used, missing_coverage, non_findings, next_steps.
```

### Refactor Code

```text
Use CodeGraph change-pack or flow-pack evidence.
First name behavior invariants and tests. Then propose refactor steps.
Do not change behavior without an explicit requirement.

Task:
Refactor <area/symbol> to <goal>.

Return valid compact JSON only with:
refactor_goal, current_flow, files, symbols, safe_steps, tests, validation_commands, risks.
```

## Prompts Without CodeGraph

Use these when CodeGraph readiness fails. The route is TokenOpt first for checklist/budget, then exact native search/read.

### No-CodeGraph Shared Prefix

```text
CodeGraph is unavailable. Use TokenOpt as a slot checklist, then use native narrow search/read only for named missing slots.

Native fallback budget:
- At most one exact rg query from task anchors.
- At most one batched small-slice read command.
- At most one targeted test search.
- No rg --files, no broad tree listing, no whole-file reads unless the file is tiny and already selected.
- Stop after 3 shell calls and mark remaining gaps.
```

### Business Deepdive

```text
<No-CodeGraph Shared Prefix>

Task:
Business deepdive <business area/feature>.

Return valid compact JSON only with:
summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions.
```

### Investigate Flow

```text
<No-CodeGraph Shared Prefix>

Start from exact anchors: <endpoint/class/symbol/term>.
Run one rg for these anchors, read small slices around the top owner files, then optionally search tests for the owner symbol.

Return valid compact JSON only with:
summary, flow, invariants, files, symbols, tests_to_run, risks.
```

### E2E Trace Flow

```text
<No-CodeGraph Shared Prefix>

Start from exact anchors: <endpoint/UI action/job/message/class/behavior>.
Run one rg for those anchors, read small slices around the owner files, then optionally search tests for the owner symbol.
Mark any unverified edge as inferred.

Return valid compact JSON only with:
entrypoint, sequence, invariants, files, symbols, tests_to_run, inferred_edges, risks.
```

### Requirement Analyst

```text
<No-CodeGraph Shared Prefix>

Requirement:
<requirement or acceptance criteria>

Find current behavior from exact terms in the requirement. Do not broaden scope after the first anchor search.

Return valid compact JSON only with:
requirement_summary, current_behavior, acceptance_criteria, impacted_files, symbols, test_strategy, risks, open_questions.
```

### PBI Investigate

```text
<No-CodeGraph Shared Prefix>

PBI:
<PBI and acceptance criteria>

Return valid compact JSON only with:
pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps.
```

### Bug Trace

```text
<No-CodeGraph Shared Prefix>

Bug:
<symptom/repro/failing test/stack trace>

Search only the failing test name, stack frame, endpoint, or changed behavior term. Read the owner slice and nearest tests.

Return valid compact JSON only with:
summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks.
```

### Plan Implement

```text
<No-CodeGraph Shared Prefix>

Task:
Plan implementation for <PBI/change>.

Return valid compact JSON only with:
scope, out_of_scope, impacted_files, symbols, implementation_steps, tests, validation_commands, risks.
```

### Write Unittest Class

```text
<No-CodeGraph Shared Prefix>

Target:
<class/module/file and behavior>

Search exact owner symbol and nearby tests only. Do not guess a class when the target is missing.

Return valid compact JSON only with:
target_class, behavior, existing_coverage, missing_coverage, test_location, test_cases, fixtures_or_mocks, assertions, targeted_command, risks.
```

### Implement Code + Unit Tests

```text
<No-CodeGraph Shared Prefix>

Task:
Implement <change>.

Before editing, use exact native search/read to identify owner files, related tests, invariants, and validation commands.
Then implement the smallest change and targeted unit tests.

Return:
changed_files, implementation_summary, tests_added, validation_result, residual_risks.
```

### Code Review

```text
Review the provided diff first.
Use native narrow reads only for changed files, direct callers/callees, similar logic named by the diff, and likely tests.
Do not explore unrelated repo areas.

Return valid compact JSON only with:
findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.
```

### Performance Analysis

```text
<No-CodeGraph Shared Prefix>

Task:
Performance analysis for <workflow/query/endpoint/module>.

Use exact anchor search/read for the named path only. Separate measured facts, hypotheses, measurement plan, and optimization options.

Return valid compact JSON only with:
target, suspected_hotspots, cost_model, measurements, optimization_options, validation_commands, risks, evidence_used.
```

### Security Audit

```text
Review the provided diff/scope first.
Use native narrow reads only for changed files, direct auth/input/data-flow boundaries, and likely tests.
If no concrete security scope exists, ask for the diff, PR, changed files, route, symbol, or risky surface.

Return valid compact JSON only with:
status, findings, evidence_used, missing_coverage, non_findings, next_steps.
```

### Refactor Code

```text
<No-CodeGraph Shared Prefix>

Task:
Refactor <area/symbol> to <goal>.

Search exact owner symbol and tests only. Name behavior invariants before refactor steps.

Return valid compact JSON only with:
refactor_goal, current_flow, files, symbols, safe_steps, tests, validation_commands, risks.
```

## Benchmark Modes

Use this mapping in reports:

| User label | Suite mode | Meaning |
| --- | --- | --- |
| baseline | `baseline` | Normal Codex CLI tools. |
| tokenopt-only | `mcp-only` | TokenOpt MCP only, shell disabled. |
| codegraph-only | `codegraph-only` | CodeGraph MCP only, shell disabled. |
| tokenopt-codegraph | `tokenopt-codegraph` | TokenOpt + CodeGraph MCP, shell disabled. |
| tokenopt-codegraph-hybrid | `tokenopt-codegraph-hybrid` | TokenOpt + CodeGraph, bounded native fallback when CodeGraph fails or evidence slots remain missing. |

Representative suite:

```powershell
node dist\cli.js benchmark suite `
  --suite benchmark-results\suites\developer-daily-playbook-suite.json `
  --repo D:\Personal\Projects\hadoop `
  --repo D:\Personal\Projects\elasticsearch `
  --repo D:\Personal\Projects\doughnut `
  --mode baseline,tokenopt-only,codegraph-only,tokenopt-codegraph,tokenopt-codegraph-hybrid `
  --out benchmark-results\developer-daily-playbook-2026-06-14.json `
  --markdown benchmark-results\developer-daily-playbook-2026-06-14.md `
  --raw-dir benchmark-results\raw\developer-daily-playbook-2026-06-14 `
  --show-answers `
  --timeout-ms 300000
```

## Spec Kit Comparison

See `benchmark-results/speckit-tokenopt-comparison-2026-06-16.md`.

Current evidence: Spec Kit can improve quality for ambiguous implementation workflows, especially when paired with TokenOpt, but it has not proven token-burn reduction. Completed and legacy usage runs show plain Spec Kit usually spends more raw/fresh tokens than TokenOpt because it adds spec/plan/tasks structure and more shell/tool calls. Use it when requirement quality matters more than token cost; benchmark daily investigate/review/performance/security prompts separately with `tokenopt-only`, `codegraph-only`, and `tokenopt-codegraph`.
