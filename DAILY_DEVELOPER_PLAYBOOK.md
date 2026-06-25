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

## Session Token Savings

Each `contextgate_get_context` call appends an inline savings line:

```
---
TokenOpt: ~8 400 tokens saved this call vs raw exploration | session: 3 call(s), ~24 000 total tokens saved
```

To see a 30-day dashboard across all sessions:

```bash
tokenopt report
```

Raw stats are persisted per day at `~/.tokenopt/stats/YYYY-MM-DD.jsonl`. Call `tokenopt_session_stats` (full MCP mode) at the end of any task to see accumulated session savings without leaving the agent.

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
| Code review round 1 (business) | 1 `contextgate_get_context` (task_type=review_diff) + 1 CodeGraph get_change_pack | 2 shell calls | Business impact, requirement coverage, impacted files known. |
| Code review round 2 (technical) | No MCPs — direct diff review | 0 shell calls | YAGNI/KISS findings documented. |
| Code review round 3 (checklist) | 1 CodeGraph get_change_pack only | 0 shell calls | Checklist items resolved against changed files. |
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

## Natural Developer Prompts

The prompts below are what a developer types. TokenOpt and CodeGraph routing happens automatically through installed agent instructions — no tool names, no routing directives, no special syntax. Paste the artifact (PBI text, diff, Jira link, etc.) inline or attach it; the agent handles the rest.

---

### Investigate PBI / Requirement

```
Please investigate PBI-123 and create an implementation plan.

[Paste PBI title, description, and acceptance criteria here]
```

Expected output:
- What the PBI requires (summary + acceptance criteria)
- Current behavior in the codebase
- Impacted files, symbols, and tests
- Implementation steps (scope, out-of-scope, risks)
- Open questions and unknowns

---

### Investigate a Bug

```
Please investigate this bug and find the root cause.

Bug: <describe symptom or paste failing test / stack trace>
```

Expected output:
- Reproduction path
- Root cause hypotheses with evidence (files, symbols, line numbers)
- Suggested fix plan
- Tests to run to verify

---

### Implement a Plan

```
Please implement the plan for PBI-123.

[Paste the implementation plan or link to the previous investigation output]
```

Expected output:
- Changed files and implementation summary
- Unit tests added or updated
- Validation command and result
- Residual risks

---

### Write Unit Tests

```
Please write unit tests for <ClassName> / <module> / <behavior>.

[Optional: paste existing test file or describe the behavior under test]
```

Expected output:
- Target class and behavior
- Missing coverage
- Test cases with fixtures, mocks, and assertions
- Exact test command to run

---

### Investigate a Flow / Architecture

```
Please investigate how <feature / endpoint / job / flow> works end to end.
```

Expected output:
- Entrypoint → domain/service → storage/dependency chain
- Invariants and edge cases
- Key files and symbols
- Tests to run

---

### Code Review — Round 1 (Business & Requirement Coverage)

```
Please review PR #11 (branch-a → branch-b) for business and requirement coverage.

Jira: <link or paste ticket>
Confluence: <link or paste spec>
[Optional: paste the unified diff inline]

Output: English markdown file
```

Expected output (markdown):
- Summary of changes
- Requirement coverage: does the diff satisfy the acceptance criteria?
- Business impact and regression risks
- Missing tests or coverage gaps
- Overall assessment

---

### Code Review — Round 2 (Technical Quality)

```
Please do a technical code review of this diff for coding quality.

[Paste the unified diff]

Check: naming, SOLID, YAGNI, KISS, DRY, error handling, edge cases, performance, security.
Output: English markdown file
```

Expected output (markdown):
- Technical findings per file/symbol (actionable, introduced by the diff)
- Similar logic that may need the same change
- Missing tests
- Review status (approve / request changes)

---

### Code Review — Round 3 (Checklist)

```
Please verify the PR #11 checklist items are covered.

[Paste checklist or specify the review standard, e.g. team definition-of-done]
[Paste diff or name changed files]
```

Expected output:
- Checklist item × pass/fail/partial
- Notes per item

---

### Refactor

```
Please plan a refactor of <area/class/module> to <goal>.

Goal: <e.g. extract service layer, reduce duplication, improve readability>
```

Expected output:
- Current flow and behavior invariants
- Safe refactor steps that preserve behavior
- Tests and validation commands
- Risks

---

### Performance Analysis

```
Please analyze performance of <endpoint / query / workflow / module>.

[Optional: paste profiler output, slow query log, or latency trace]
```

Expected output:
- Suspected hotspots with evidence
- Cost model (where time/memory is spent)
- Measurement points and benchmark commands
- Optimization options with risk/effort

---

### Security Audit

```
Please do a security audit of this diff / PR / module.

[Paste the diff or describe the surface: route, input handling, auth flow, etc.]
```

Expected output:
- Exploitable findings (severity, location, reproduction)
- Non-findings (areas checked, no issue found)
- Missing security coverage
- Recommended next steps

---

> **How routing works (transparent to users):** The installed agent instructions (AGENTS.md, `.github/copilot-instructions.md`, `.github/prompts/*.prompt.md`) and MCP `SERVER_INSTRUCTIONS` decide whether to call `contextgate_get_context`, `codegraph_context`, or a narrow read/search. Users never need to mention TokenOpt or CodeGraph by name. If an artifact (PBI, diff, Jira ticket) is missing, the agent will ask for it before touching the repo.

## Benchmark Modes

Use this mapping in reports:

| User label | Suite mode | Meaning |
| --- | --- | --- |
| baseline | `baseline` | Normal Codex CLI tools. |
| tokenopt-only | `mcp-only` | TokenOpt MCP only, shell disabled. |
| codegraph-only | `codegraph-only` | CodeGraph MCP only, shell disabled. |
| tokenopt-codegraph | `tokenopt-codegraph` | TokenOpt + CodeGraph MCP, shell disabled. |
| tokenopt-codegraph-adaptive | `tokenopt-codegraph-adaptive` | TokenOpt broker policy: review/security/missing-artifact uses TokenOpt-only; flow/implement/refactor uses compact TokenOpt+CodeGraph; shell disabled. |
| tokenopt-codegraph-hybrid | `tokenopt-codegraph-hybrid` | TokenOpt + CodeGraph, bounded native fallback when CodeGraph fails or evidence slots remain missing. |

Representative suite:

```powershell
node dist\cli.js benchmark suite `
  --suite benchmark-results\suites\developer-daily-playbook-suite.json `
  --repo D:\Personal\Projects\hadoop `
  --repo D:\Personal\Projects\elasticsearch `
  --repo D:\Personal\Projects\doughnut `
  --mode baseline,tokenopt-only,codegraph-only,tokenopt-codegraph,tokenopt-codegraph-adaptive,tokenopt-codegraph-hybrid `
  --out benchmark-results\developer-daily-playbook-2026-06-14.json `
  --markdown benchmark-results\developer-daily-playbook-2026-06-14.md `
  --raw-dir benchmark-results\raw\developer-daily-playbook-2026-06-14 `
  --show-answers `
  --timeout-ms 300000
```

## Spec Kit Comparison

See `benchmark-results/speckit-tokenopt-comparison-2026-06-16.md`.

Current evidence: Spec Kit can improve quality for ambiguous implementation workflows, especially when paired with TokenOpt, but it has not proven token-burn reduction. Completed and legacy usage runs show plain Spec Kit usually spends more raw/fresh tokens than TokenOpt because it adds spec/plan/tasks structure and more shell/tool calls. Use it when requirement quality matters more than token cost; benchmark daily investigate/review/performance/security prompts separately with `tokenopt-only`, `codegraph-only`, and `tokenopt-codegraph`.
