# ContextGate Prompt Playbook

This guide shows how to prompt agents so ContextGate, exposed by the current TokenOpt MCP tools, and native narrow search/read are used only when they reduce context cost.

## Core Rule

Do not force TokenOpt first for every task.

Use the cheapest evidence path:

```text
Broad repo/business/planning task -> ContextGate cost gate.
Exact code/call flow task -> native narrow search/read.
Known file/class task -> native narrow search/read.
Review current diff -> diff/review context first.
Never repeat the same evidence acquisition with ContextGate + shell/search/read.
```

## Natural Lifecycle Pattern

Use normal developer prompts. The user should not need to say "use TokenOpt", "use CodeGraph", or name MCP tools. Agent/repo instructions should classify the evidence need and choose the cheapest route.

```text
PBI / requirement investigation:
- If there is no PBI, requirement body, ticket URL, acceptance criteria, or attachment summary, ask for it.
- If Given/When/Then, How, Why, Jira, Confluence, or attachment text is present, treat it as the business artifact.
- Use broker/graph evidence only to fill missing repo slots: current behavior, impacted files, symbols, tests, validation, risks.

Plan:
- If the owner is unknown, use one compact context/evidence pass to find owner files, symbols, existing tests, and constraints.
- If the prompt already names a file, symbol, endpoint, field, or diff, go exact first.
- Keep acceptance criteria, compatibility, test coverage, unknowns, and validation explicit.

Implement:
- Make the smallest compatible change.
- Add or update unit/regression tests that prove business behavior, not only method coverage.
- Run the narrowest relevant validation command and report changed files.

Review:
- Start from the net diff/PR/changed files, not a broad repo scan.
- For Jira, Confluence, or direct attachments, use them as requirement evidence in the business/test coverage phase.
- Technical defects and business/test coverage gaps are separate outputs.
```

Spec Kit prompts stay basic. A prompt such as `/speckit.specify Add a natural TokenOpt + CodeGraph benchmark mode that reduces token burn while preserving output quality` should be enough. The agent should infer whether compact repo evidence is useful during specify, plan, tasks, and implement from evidence slots: domain context, owner files, impacted symbols, tests, validation, risks, and unknowns.

## Setup Pattern

ContextGate needs two things to route normal prompts reliably:

1. The `tokenopt` MCP server must be available to the agent.
2. Repo or agent instructions must explain when to use ContextGate as a cost gate.

For Copilot-style setup in a target repo:

```powershell
cd <target-repo>
node <tokenopt-repo>\dist\cli.js setup copilot --scope both
node <tokenopt-repo>\dist\cli.js doctor copilot
```

For a strict Codex MCP-only benchmark or session, disable the host shell tool and expose TokenOpt:

```toml
[features]
shell_tool = false

[mcp_servers.tokenopt]
command = "node"
args = ["<tokenopt-repo>/dist/cli.js", "mcp", "--mode", "lite"]
required = true
default_tools_approval_mode = "approve"
```

Lite mode exposes:

```text
contextgate_get_context
tokenopt_compile_evidence
tokenopt_search
tokenopt_read_file
```

The normal user prompt should stay natural. The setup instructions, not the user prompt, should contain the tool contract. For Copilot UI, `tokenopt setup copilot` also installs native prompt files under `.github/prompts`, so repeated tasks can be launched with slash prompts instead of copying playbook text.

Good normal prompt after setup:

```text
Investigate the primary learning/recall flow and return files, symbols, risks, and evidence.
```

Good Copilot slash prompts after setup:

```text
/business-deep-dive checkout payments
/investigate-flow checkout payments
/flow-trace checkout API flow
/e2e-trace-flow checkout API flow
/trace-bug failing checkout authorization test
/bug-trace failing checkout authorization test
/write-unittest OrderService payment authorization
/write-unittest-class OrderService payment authorization
/security-audit <diff or PR scope>
/review-code <diff>
/investigate-pbi <PBI or acceptance criteria>
/pbi-plan <requirement text or ticket URL>
/refactor-scope OrderService validation extraction
/refactor-code OrderService validation extraction
/performance-analysis checkout latency
/build-handoff
```

Prompt pack coverage against the 37-prompt benchmark:

| Benchmark prompts | Reusable Copilot prompt | Notes |
| --- | --- | --- |
| `U1` | `/investigate-flow` or `/flow-trace` | Exact entrypoint/endpoint/class means native narrow search/read first; unknown broad flow may use TokenOpt/CodeGraph once. |
| `U7`, `J4` | `/e2e-trace-flow` or `/flow-trace` | Use ordered flow evidence and mark inferred edges. |
| `U2`, `U6` | `/pbi-plan` or `/investigate-pbi` | Requires concrete PBI/requirement/ticket/acceptance criteria; otherwise ask and do not inspect repo. |
| `U3`, `S8` | `/write-unittest` or `/write-unittest-class` | Requires concrete class/module/file/behavior; full mode may use coding coverage once. |
| `U4` | `/requirement-analysis` | Requires requirement text or URL; missing artifact is `needs_input_bypass`. |
| `U5` | `/repo-benchmark-analysis` | Broad repo benchmark/readiness task; TokenOpt-first is appropriate. |
| `U8`, `S4`, `J6`, `J10`, `J11` | `/trace-bug` or `/bug-trace` | Use `tokenopt_failure_packet` for long logs; otherwise native narrow search/read from failing test, stack frame, or repro. |
| `U9`, `J14` | `/performance-analysis` | Measurement-first; exact endpoint/query/module uses narrow reads. |
| `U10` | `/security-audit` | Requires concrete diff/scope/risky surface and security coverage dimensions. |
| `U11` | `/dependency-analysis` | Use broad build facts only when needed; avoid lockfiles unless the dependency question requires them. |
| `U12` | `/onboarding-guide` | Broad repo setup/map/verification guide; TokenOpt-first is appropriate. |
| `S1` | `/spec-autorun` | SpecKit phase/checkpoint planning with evidence reuse. |
| `S2`, `S6`, `J5` | `/implement-feature` | Use for feature implementation planning; known target bypasses broad ContextGate. |
| `S3`, `J2`, `J9`, `J12`, `J13`, `J15` | `/review-code` | Diff-first review; no diff/scope means ask instead of exploring. Use `/security-audit` only for security-focused review. |
| `S5`, `J3`, `J7`, `J8` | `/refactor-scope` or `/refactor-code` | Scope definitions/usages/config/tests/contracts before edits. |
| `S7` | `/spec-feature-plan` | Feature specification and acceptance criteria from repo/domain evidence. |
| `S9` | `/promote-review-memory` | Requires completed-task summary/diff/transcript/review outcome. |
| `S10` | `/context-budget` | Context budget and compaction checkpoint planning. |

Additional reusable prompts outside the 37-prompt suite: `/business-deep-dive`, `/build-handoff`, `/field-impact`, plus daily aliases such as `/investigate-flow`, `/write-unittest-class`, `/investigate-pbi`, `/e2e-trace-flow`, `/bug-trace`, and `/refactor-code`.

Good explicit smoke-test prompt:

```text
Use ContextGate as a cost gate.
Investigate the primary learning/recall flow.
If the packet is answerable, answer from it and do not call shell/search again.
```

Avoid pasting setup or benchmark artifacts into normal prompts. Do not paste fields such as `injectedInstruction`, `actualPromptSentToCodex`, or `Project instruction injected by TokenOpt setup:` into chat.

## Production Prompt vs Benchmark Harness

Use the playbook prompts for day-to-day work. Use benchmark prompts only for measurement.

| Prompt/source | Reuse in normal work? | Purpose | Notes |
| --- | --- | --- | --- |
| Native `.github/prompts/*.prompt.md` files | Yes | UI-native repeated tasks | Prefer slash prompts for common tasks so users do not copy this playbook. |
| Standard Cost Router Prefix in this playbook | Fallback | Production prompt policy | Use only when repo instructions or prompt files are unavailable. |
| Installed repo/agent instructions | Yes | Persistent routing setup | Put tool names and routing rules here, not in every user prompt. |
| Explicit smoke-test prompt | Sometimes | Verify the agent sees TokenOpt MCP | Use only when checking setup or debugging routing. |
| Benchmark suite prompt | No | A/B measurement and deterministic scoring | It includes constraints, repo paths, output contracts, and shell/MCP controls that can increase tokens in normal use. |
| Raw benchmark report prompt fields | No | Audit trail | Do not paste `codexPrompt`, `injectedInstruction`, or `Benchmark constraints` into chat. |

When converting a benchmark task into a reusable prompt, keep only the task intent and optionally the short cost-router prefix.

Benchmark harness prompt:

```text
Investigate the primary user/business flow in this repository. Return JSON with files, symbols, terms, risks, and evidence.

Benchmark constraints:
- Preserve the requested output format exactly.
- Repository root: D:\Personal\Projects\doughnut
- TokenOpt router selected strict acquisition for this task.
- Call contextgate_get_context with cwd=...
```

Reusable production prompt:

```text
Choose the cheapest evidence path first.

Use ContextGate as an evidence broker if this can replace broad exploration.
If answerable=true, answer from the packet and do not call shell/search again.

Task:
Investigate the primary user/business flow in this repository. Return files, symbols, terms, risks, and evidence.
```

## Large-Repo Daily Prompt Matrix

For repositories in the 10k-70k file range, the main cost problem is not one expensive answer. It is repeated broad acquisition during investigate, planning, implementation, unit-test writing, and review. Use the prompt contract to force one evidence path and one synthesis path.

Before using CodeGraph-heavy prompts or benchmark modes on a large repo, verify readiness:

```powershell
node <code-graph-repo>\dist\cli.js doctor --root <target-repo>
node <code-graph-repo>\dist\cli.js setup --root <target-repo> --workspace-key <target-repo>
node <code-graph-repo>\dist\cli.js index --root <target-repo> --workspace-key <target-repo> --quiet
```

If the SQLite graph/artifacts are missing, setup/index fails, or the repo has no current snapshot for the same workspace key, do not treat CodeGraph benchmark results as valid. Fix readiness first or use the bounded hybrid fallback route.

Hybrid fallback contract:

```text
Use TokenOpt as the slot checklist and CodeGraph as the preferred evidence provider.

If CodeGraph returns an error/timeout/unavailable index, or if required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls:
- Run one exact bounded rg query from the named anchors in the task.
- Batch all selected reads into one shell command and read only small slices around at most 4 selected hits.
- Optionally run one targeted test search for a concrete owner symbol or behavior term.
- Do not run rg --files, broad directory listings, broad whole-file reads, or repo-wide exploration.
- Hard stop after 3 shell calls; if evidence is still incomplete, mark the gap instead of continuing exploration.
- Mark fallback usage in risks/notes/missing_coverage/open_questions.

Then answer only from evidence gathered by TokenOpt, CodeGraph, and that bounded fallback.
```

Recommended default:

| Daily use case | Best first route | Why | Avoid |
| --- | --- | --- | --- |
| Broad investigate / unknown owner | `tokenopt-codegraph-adaptive` when CodeGraph is ready; `tokenopt-codegraph-hybrid` only for resilience tests | TokenOpt supplies the quality slots; CodeGraph supplies compact file/symbol/test evidence; adaptive disables shell fallback to avoid double spend | TokenOpt packet plus repo-wide shell fallback |
| Exact flow trace with known endpoint/class/symbol | CodeGraph-only or native narrow search/read | Needs concrete path proof, not broad summaries | Broad TokenOpt first when exact target is already named |
| E2E trace flow | CodeGraph-only or TokenOpt+CodeGraph | Needs ordered flow edges, tests, and inferred-edge marking | Candidate-file lists presented as definitive flow proof |
| Investigate PBI | TokenOpt+CodeGraph or hybrid fallback when CodeGraph is not ready | Requirement needs business slots, impacted files, unknowns, risks, and validation | Planning from generic business text without code anchors |
| Plan PBI / implementation handoff | TokenOpt+CodeGraph using change-pack evidence; hybrid fallback for missing anchors | Must map acceptance criteria to edit surfaces and tests | Full implementation before impact scope is known |
| Implement code + unit tests | CodeGraph change pack or narrow reads first; TokenOpt as coverage checklist for unknown owners | Edits need exact files, tests, and validation commands | Accepting `answerable=true` without owner symbol/test coverage |
| Unit-test planning / write-unittest-class | CodeGraph change pack + symbol/test search | Existing tests and owner methods matter more than prose | Listing generic test ideas |
| Performance analysis | TokenOpt+CodeGraph | TokenOpt enforces cost model; CodeGraph grounds hotspots and validation | Optimizations without measurement plan |
| Security audit | Diff/scope-first TokenOpt or CodeGraph review packet | Requires concrete security scope and explicit boundaries | Broad vulnerability hunting without scope |
| Code review | Diff-first, then CodeGraph review evidence, TokenOpt review checklist | Review must cover technical bugs, business fit, similar logic, and missing tests | Per-commit review or no-diff repo exploration |
| Field/schema impact | CodeGraph/native references first | Impact is usually exact symbol/reference work | Broad repo overview before references |
| Runtime/tracebug with stack/failing test | Failure packet or native narrow read | Start from failure artifact | Asking the agent to rediscover the repo |

Production route prompt:

```text
Choose exactly one evidence route first.

For a large repo:
- If this is broad investigate, PBI investigation, PBI planning, implementation handoff, or unknown-owner implementation, use TokenOpt+CodeGraph when both are available.
- If this is an exact endpoint/class/symbol/field trace, use CodeGraph or native narrow search/read directly.
- If this is code review, start from the net diff/patch, then use CodeGraph review evidence or narrow reads for unclear impact.
- If TokenOpt says answerable=true, do not repeat the same evidence acquisition with shell/search/read.
- If evidence is incomplete, use only one named exact followup for the weakest missing slot.

Return:
- acquisition_path
- evidence_complete: yes/no
- files
- symbols
- business_or_behavior_invariants
- tests_or_validation
- risks_or_unknowns
- final_answer

Task:
<your real task>
```

## Daily Prompt Contracts

### Investigate Unknown Owner

```text
Choose the cheapest evidence route.
If the owner is unknown, use a compact broker/graph evidence pass if available.
Use exact followups only for the named missing slot; do not duplicate the same evidence through shell.

Task:
Investigate <symptom/business area/behavior>.

Return valid compact JSON only with:
summary, flow, likely_root_causes, files, symbols, tests_to_run, implementation_plan, risks.
```

### Trace Flow

```text
This is a trace-flow task.
Use CodeGraph or native narrow search/read directly.
Start from <endpoint/class/symbol>, follow controller/API, service/domain, repository/storage, and caller/UI paths.
Do not run broad repo exploration.

Return valid compact JSON only with:
entrypoint, sequence, invariants, files, symbols, tests_to_run, risks.
```

### E2E Trace Flow

```text
Use CodeGraph flow evidence first for <endpoint/UI action/job/message/class/behavior>.
Trace entrypoint, domain/service, storage/dependency, caller/UI, tests, and inferred edges.
Use TokenOpt only as a completeness checklist for invariants, tests, and risks.

Return valid compact JSON only with:
entrypoint, sequence, invariants, files, symbols, tests_to_run, inferred_edges, risks.
```

### Investigate PBI

```text
Treat the PBI as the requirement artifact and the repo as evidence. Separate known behavior, unknowns, and proposed scope.
If the PBI includes Given/When/Then, How, Why, acceptance criteria, Jira/Confluence text, or attachment summaries, treat that as business evidence.
If ownership is unknown, use a compact broker/graph evidence pass. If files/symbols/endpoints/diffs are named, go exact first.

PBI:
<paste PBI and acceptance criteria>

Return valid compact JSON only with:
pbi_summary, given_when_then, how, why, current_behavior, impacted_files, symbols, tests, unknowns, risks, next_steps.
```

### Plan PBI

```text
Choose the cheapest evidence route.
Use broker/graph evidence for unknown-owner plans; use exact source/test evidence for named files, symbols, endpoints, fields, or diffs.
Plan business behavior coverage before edits: acceptance paths, negative paths, compatibility, tests, and validation commands.
Do not edit files.

PBI:
<paste PBI and acceptance criteria>

Return valid compact JSON only with:
scope, out_of_scope, given_when_then, impacted_files, symbols, implementation_steps, business_coverage, tests, validation_commands, risks.
```

### Write Unittest Class

```text
Use CodeGraph change/test evidence for <class/module/file and behavior>.
Use TokenOpt as a coverage checklist if existing tests, assertions, fixtures, or validation commands are incomplete.
If the target is missing, ask for it instead of searching the repo to guess.

Return valid compact JSON only with:
target_class, behavior, existing_coverage, missing_coverage, test_location, test_cases, fixtures_or_mocks, assertions, targeted_command, risks.
```

### Implementation Handoff

```text
Prepare an implementation handoff, not code edits.
Use broker/graph evidence if the owner area is not already known.
Every implementation step must name a file, symbol, or test surface.

Task:
<feature/change request>

Return valid compact JSON only with:
owner_flow, files_to_change, symbols, implementation_steps, business_coverage, test_plan, validation_commands, compatibility_risks, open_questions.
```

### Implement Code + Unit Tests

```text
This is an implementation task.

Choose the cheapest evidence path first:
- Known owner file/module -> native narrow read/search and targeted validation.
- Unknown owner in a large repo -> compact broker/graph evidence pass, then exact source/test reads only for one missing slot.
- Do not accept evidence as complete unless owner symbol, edit surface, related tests, invariants, and validation command are known.

Task:
Implement <PBI/change>.

Requirements:
- Smallest scoped code change.
- Unit/regression tests prove business behavior and acceptance criteria, not only method coverage.
- Add/update targeted unit tests.
- Preserve compatibility and existing behavior outside the PBI.
- Run the narrowest relevant tests.
- Report changed files and validation result.
```

### Code Review

```text
Review the net diff/patch, not individual commits.
Use CodeGraph review evidence or narrow reads for changed call flow, similar logic, and tests.
Use TokenOpt as the review checklist when available.

Check all of:
- syntax/runtime bugs
- correctness and regressions
- business requirement coverage
- edge cases and state transitions
- similar logic that may need the same change
- missing tests and risky untested behavior
- security, performance, compatibility, and resource lifecycle

Return valid compact JSON only with:
findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.
Findings must be actionable and introduced by the diff.
```

### Performance Analysis

```text
Use TokenOpt+CodeGraph.
TokenOpt supplies the cost-model and validation slots; CodeGraph grounds the code path, likely hotspots, tests, and benchmark commands.
Do not propose fixes before measurement points and correctness risks are named.

Return valid compact JSON only with:
target, suspected_hotspots, cost_model, measurements, optimization_options, validation_commands, risks, evidence_used.
```

### Security Audit

```text
Review the concrete diff/scope/risky surface first.
Use TokenOpt security_audit or CodeGraph review_patch evidence. Do not run broad vulnerability hunting.
Separate exploitable findings, non-findings, and missing security coverage.

Return valid compact JSON only with:
status, findings, evidence_used, missing_coverage, non_findings, next_steps.
```

## Benchmark-Backed Routing Table

This table summarizes the route behavior from the 37-prompt real Codex benchmark on the Doughnut repository. Token deltas compare `router-best` against baseline.

| Use case | Route setup | Broker route? | Benchmark result | Practical rule |
| --- | --- | --- | --- | --- |
| Broad repo flow, onboarding, context inspection, dependency/build analysis | MCP-first strict, shell off | Usually | `broad_flow`: `-82.3%` total tokens, quality improved from `0.845` to `0.905` | Use one compact broker/evidence pass, then answer or refill one named missing slot. |
| Runtime/debug/build failure/root cause | Failure packet or exact trace | Usually for long failure output | `debug_runtime`: `-78.1%` total tokens, quality improved from `0.778` to `0.944` | Compress failure evidence and keep followups exact. For already exact stack frames, use narrow reads. |
| Coding implementation/unit-test with concrete target | Coding coverage or exact source/test evidence | Only when owner/test discovery is broad | New coverage layer; benchmark pending | Require exact owner, dependencies/usages, existing test style, and validation before edits. |
| PBI/requirement/unit-test/review-memory prompt missing its artifact | Missing-artifact bypass | No repo acquisition | New guardrail | Return bounded JSON asking for the missing artifact. Do not scan the repo. |
| Refactor, migration, implementation planning | Impact scope | Usually when owner is unknown | `refactor_scope`: `-74.4%` total tokens, same average quality `0.938` | Use broker/graph evidence for impact scope unless the owning file/class is already known. |
| Unit-test planning or unknown owning test area | Test coverage scope | Usually for planning | `exact_symbol`: `-61.4%` total tokens, quality improved from `0.750` to `1.000` | For planning, broker evidence is useful. For tests against a known class, use narrow reads directly. |
| Security audit | Security coverage route | Only with concrete scope | New guardrail | Require concrete scope and security dimensions before findings; otherwise ask for scope or exact followups only. |
| Review with a concrete diff or patch | Review evidence route | Use when it replaces broad source exploration | Worktree PR benchmark: `-83.6%` input tokens overall, but recall still needs review-specific safeguards | Give the net diff, read requirement evidence when available, and run technical plus business/test coverage checks. |
| Review without a concrete diff | Missing-artifact bypass | No repo acquisition | Previously expensive; now guarded | Ask for the diff, changed files, PR, or exact target. Do not use shell fallback. |
| Small repo plus exact file/symbol | Bypass | No | Router marks this as negative control | Use native narrow read/search. |
| Exact class/method/line-level flow trace | Native narrow search/read | Usually no | Hybrid double-spend risk | Use narrow search/read directly unless you need a broad context summary first. |
| Exact bug trace / tracebug with known target | Native narrow search/read | No | Hybrid double-spend risk | Start from failing test, stack frame, file, symbol, or repro path. Use `tokenopt_failure_packet` only for long failure output. |
| Simple non-repo question or tiny command | Bypass | No | Not a TokenOpt workload | Answer directly or run the tiny command. |

## Code Review Playbook

Use this shape for normal PR/code review prompts, including `/review-code`.

```text
Review this PR/diff in two phases:
1. Technical review: correctness, regressions, security, performance, reliability, compatibility, and maintainability.
2. Business/test coverage review: requirement coverage, edge cases, and ISTQB-style test design.

When a concrete review artifact exists, choose the cheapest review-shaped evidence path that covers changed files, changed symbols, impacted tests, similar logic, and business requirements. Use a broker only when it replaces broad source exploration; otherwise use exact diff/source/test reads or graph evidence.
Use the net PR diff and PR merge/head worktree for any follow-up reads/searches.
For branch-pair review, treat target/base branch and feature/head branch as the final PR scope and review the merge-base net diff.
If the user attaches or references Jira tickets, Confluence pages, or direct attachment summaries, use available connectors or the supplied attachment text before business/test coverage review. Do not ask the user to paste the full ticket/page content when a connector can read it. These are requirement artifacts, not a substitute for the code diff/PR/branch pair.
If the user provides a review checklist, treat it as a required review rubric and return checklist coverage item by item.
Do not review per-commit patch output as the final PR state.
Return compact JSON with:
technical_review, business_review, attachment_evidence, istqb_checks, user_checklist, review_status, evidence_contract_pass, acquisition_mode, notes.
```

Technical review rules:

- Do not skip required review evidence silently. If a broker or connector is unavailable, say so in `notes` and continue with native net-diff review.
- Report only introduced, actionable defects.
- If TokenOpt evidence includes `recall_probe` facts, adjudicate each checked probe as a technical finding, coverage gap, or explicit non-issue with contrary evidence. Promote P1/P2 `technical_finding_candidate=true` probes unless contrary evidence disproves them.
- Before returning no findings, explicitly check changed invariants, effective config/policy math, parser/encoding boundaries, backwards compatibility, concurrency/async behavior, resource lifecycle, null/error paths, and call replacements.
- Do not downgrade a proven regression into a missing-test or business coverage gap.
- Security/domain words such as `security`, `auth`, `privilege`, or `permission` do not by themselves mean `/security-audit`; use security-audit only when the user explicitly asks for a security audit/review or vulnerability scan.

Business/test coverage rules:

- Keep coverage gaps separate from technical findings.
- Ground requirement coverage in Jira/Confluence/direct attachment evidence when the user provides those artifacts. If Jira/Confluence connectors are unavailable or unreadable, say so in `notes` and mark requirement-backed coverage as missing or assumption-based.
- Apply ISTQB-style dimensions where relevant: boundary values, equivalence partitions, negative/error cases, state transitions, concurrency/async, and compatibility/backward compatibility.
- Tie every suggested test to the changed behavior and expected business rule.
- Missing tests are usually `comment`, not `request_changes`, unless the risky behavior is untested enough to make the patch unsafe.

User checklist rules:

- Preserve the user's checklist items as explicit review obligations.
- For each item, return `pass`, `fail`, `gap`, or `not_applicable` plus evidence or a short reason.
- A checklist item can raise a technical finding only when the diff introduces an actionable defect; otherwise report it as coverage/commentary.
- User checklist items add coverage, but they do not suppress higher-severity defects found outside the checklist.

Review benchmark lessons:

- Hadoop #8511: both baseline and TokenOpt found a real exceptional-path resource lifecycle issue; the review checklist should keep async/resource lifecycle explicit.
- Hadoop #8541: TokenOpt missed a stale-interval config invariant regression; review prompts must force invariant/effective-policy checks before "no findings".
- Elasticsearch #151093: Unicode/surrogate language-equivalence was a plausible miss; parser/encoding boundary checks matter for security/authorization code.

Aggregate from that benchmark:

| Setup | Tasks | Correct | Token effect | Avg MCP | Avg shell |
| --- | ---: | ---: | ---: | ---: | ---: |
| `mcp-first-strict(shell-off)` | 28 | 23/28 | `-82.6%` total tokens | 4.1 | 0 |
| `hybrid-review-fallback(shell-on)` | 9 | 9/9 | `+47.2%` total tokens | 0 | 39 |

The main lesson is that strict MCP-first works when it replaces broad exploration. It loses when the agent pays both costs: TokenOpt or route setup plus broad shell fallback. Current router guidance treats missing-artifact review and planning prompts as ask/bounded-answer cases instead of shell fallback cases.

## What The Agent Should Report

Add this contract when you want to audit whether the agent chose the right path:

```text
Start your answer with:
Acquisition path: ContextGate MCP | native narrow search/read | tokenopt_failure_packet + narrow read | diff context | needs_input_bypass
Reason:
Fallback used: yes/no
```

If the answer says `Acquisition path: ContextGate MCP` and then performs broad shell/search/read for the same evidence, that is a failed run.

## Standard Cost Router Prefix

Use this prefix for most natural tasks:

```text
Choose the cheapest evidence path first.

If this is a broad repo/business/PBI/planning task and a context broker is available:
- Use one compact evidence pass when it can replace broad exploration.
- If answerable=true, answer from the packet and do not call shell/search/read again for the same evidence.
- If answerable=false, use only one named exact followup for the weakest missing slot.

If this is an implementation, unit-test, fix, or debug task:
- Use broker/graph evidence only when owner/test/failure discovery is broad or unknown.
- Treat evidence as complete only when coding coverage includes exact target symbol, edit surface, dependencies/usages, business behavior, test neighbor/style, build/test command, and failure context when relevant.
- If owner files/symbols/tests are already named, use narrow source/test evidence directly.

If this is an exact code-flow/class/method/PBI task that needs line-level proof, do not call ContextGate first. Use narrow search/read directly.

If this is an exact bug trace with a known file, class, function, line, failing test, stack frame, repro path, or exact behavior, do not call ContextGate first. Use native narrow search/read directly. Use tokenopt_failure_packet only when long failure output needs compression into exact files/lines.

Never do ContextGate first and then repeat the same exploration with shell, search, or read.

Start the answer with:
Acquisition path:
Reason:
Fallback used:

Task:
<your real task>
```

## When To Mention TokenOpt

| Situation | Mention TokenOpt? | Prompt guidance |
| --- | --- | --- |
| Broad repo overview, handoff, business summary | Optional after setup; mention if Copilot ignores MCP | `Use TokenOpt as a cost gate if it can replace broad exploration.` |
| Benchmarking TokenOpt | Yes | `Use TokenOpt as the first acquisition path for this benchmark.` |
| Copilot does not call MCP naturally | Yes | `Use the tokenopt-cost-gate agent if available.` |
| Exact flow/class/method trace | Usually no | Use narrow search/read directly. |
| Exact bug trace with known target/failing test/stack frame | No | Use native narrow search/read directly; use `tokenopt_failure_packet` only for long failure output. |
| Unknown-owner implementation, unit-test, fix, or failure task | Optional after setup; mention if the agent does not choose a broker naturally | Use broker/graph evidence for owner/test/failure discovery, then only exact followups. |
| Known file/module implementation | Usually no | Start from the known file/module and run narrow validation. |
| Review current diff | Usually no | Use net diff first; use broker/graph/source evidence only for unclear changed symbols, tests, similar logic, or business requirements. |

## When To Bypass ContextGate

Bypass ContextGate when exact code structure is already the task:

- Owning class/function/module discovery.
- Call flow or dependency impact around a known symbol.
- API/service/domain flow with line-level proof.
- Impact analysis from a specific symbol or field.
- Implementation where the owning file/symbol is already known.

Use native narrow search/read with bounded queries for those cases. Do not run a second exploration path after ContextGate already returned `answerable=true`.

## Prompt Samples

### 1. Business Deep Dive

Use this when the user wants business understanding, glossary, and business flow.

```text
Choose the cheapest evidence path first.

This is a broad business/domain understanding task. If a context broker is available, use one compact evidence pass as a cost gate.
If answerable=true, answer from the packet and do not call shell/search/read again.
If answerable=false, use only one named exact followup for the weakest missing slot.

Task:
Study the <business area> business in this repo.
Explain the business flow, business concepts, glossary, actors, states, and evidence-backed gaps.
Cite concrete repo evidence.

Start with:
Acquisition path:
Reason:
Fallback used:
```

### 2. Business Deep Dive When Copilot Ignores MCP

```text
Use the tokenopt-cost-gate agent if available.

Choose the cheapest evidence path first:
- Broad business/domain task -> compact broker evidence when available.
- Exact code-flow task -> narrow search/read directly.
- Never broker first plus shell fallback for the same evidence.

Task:
Study the <business area> business in this repo.
Explain business flow, concepts, glossary, actors, states, and cite evidence.
```

### 3. Exact Existing Flow Trace

Use this when line-level code proof is required. Do not force TokenOpt first.

```text
This is an exact code-flow trace that needs line-level proof.
Do not call TokenOpt first.
Use narrow search/read only for call flow and symbol ownership.
Avoid broad repo scans.

Task:
Trace the <flow name> flow end to end.
Start from the likely entrypoint, follow service/domain/storage/external calls, cite files and symbols, and produce a Mermaid sequence diagram.

Start with:
Acquisition path:
Reason:
Fallback used:
```

### 3b. Trace Bug / Exact Bug Investigation

Use this when the bug has a concrete failing test, stack frame, file, class, function, line, repro path, or exact behavior. This is a standard bypass workflow: do not call ContextGate first for line-level bug tracing.

```text
This is an exact bug trace.

Choose the cheapest evidence path first:
- If the prompt names a file, class, function, line, failing test, stack frame, or repro path, use native narrow search/read directly.
- Do not call ContextGate first for exact bug tracing; it usually double-spends.
- If stack trace/build/test output is long, use tokenopt_failure_packet first, then narrow read the suggested slices.
- If no concrete bug artifact is provided, ask for failing test, stack trace/error output, repro steps, expected vs actual behavior, or target symbol.

Task:
Trace this bug:
<paste bug, failure output, failing test, target file/symbol, or repro>

Return:
- Bug summary
- Evidence chain
- Suspected root cause
- Affected files/symbols
- Targeted fix location
- Targeted verification
- Missing items

Start with:
Acquisition path:
Reason:
Fallback used:
```

### 4. Investigate PBI

```text
Choose the cheapest evidence path first.

For this PBI, first decide:
- Broad requirement/business understanding or unknown owner -> use one compact broker/graph evidence pass.
- Exact affected classes/functions/call flow -> use native narrow search/read.
- Known files/classes -> native narrow search/read.
- Do not use ContextGate and native exploration for the same evidence unless the first path cannot answer.

PBI:
<paste PBI>

Return:
1. What the PBI is asking
2. Why it matters
3. Given/When/Then, How, and Why when present
4. Impacted business flow
5. Likely impacted code areas
6. Existing tests or validation
7. Risks and unknowns
8. Acceptance criteria
9. Recommended next investigation steps

Start with:
Acquisition path:
Reason:
Fallback used:
```

### 5. Implementation Plan

```text
Choose the cheapest evidence path first.

Use a compact broker/graph evidence pass for broad implementation planning if it can identify owner files, symbols, tests, and validation cheaply.
Use narrow search/read when exact owning modules/classes/call flow are already named.
Avoid ContextGate + shell/search/read double-spend.

Task:
Create an implementation plan for this requirement:
<paste requirement>

Return:
- Scope
- Out of scope
- Impacted files/modules
- Step-by-step implementation
- Business behavior coverage
- Unit/regression test plan
- Risks
- Rollback/compatibility notes
```

### 6. WHAT / WHY / WHEN / HOW / Scenarios

```text
Choose the cheapest evidence path first.

This is requirement analysis. Use broker evidence if broad repo/business context is needed.
Use narrow search/read for exact flow or symbol ownership.

Requirement:
<paste requirement>

Explain:
- WHAT needs to change
- WHY it is needed
- WHEN it applies
- HOW the system should behave
- Main scenarios
- Edge cases
- Acceptance criteria
- Evidence from repo/code/docs

Start with:
Acquisition path:
Reason:
Fallback used:
```

### 7. Implement Code + Unit Tests

Use this for actual code changes. Do not force a broker first if the owning file/module is known.

```text
This is an implementation task.

Choose the cheapest evidence path first:
- If the owning area is unknown, use one compact broker/graph evidence pass to identify owner source, symbols, existing tests, business rules, and validation.
- If the owning file/module is known, use narrow search/read and targeted validation directly.
- Do not accept implementation evidence as complete unless exact target symbol, edit surface, dependencies/usages, test neighbor/style, business behavior coverage, and build/test command are known.
- Do not use ContextGate first and then repeat the same evidence acquisition with shell/search/read.

Task:
Implement this PBI:
<paste PBI>

Requirements:
- Implement the smallest safe code change.
- Add unit/regression tests for all new business behavior and acceptance paths.
- Cover boundary, negative/error, state transition, compatibility, and regression cases when relevant.
- Follow existing test style.
- Run only the narrowest relevant tests.
- Report changed files and validation result.

Start with:
Acquisition path:
Reason:
Fallback used:
```

### 8. Write Unit Tests For A Class Or Module

```text
This is a specific test-writing task.

Do not call a broker first if the target class/module is known.
Use narrow search/read to find the class, related tests, and existing test style.
Avoid broad scans and full-suite tests.

If the target class/module is unknown, use one compact broker/graph evidence pass and follow only one named missing owner/test slot.

Task:
Write unit tests for <class/module/function>.
Cover core business behavior, acceptance criteria, edge cases, and error handling.
Follow existing test style.
Run only the relevant test file or narrow test command.

Start with:
Acquisition path:
Reason:
Fallback used:
```

### 9. Unit Test Planning Only

```text
Choose the cheapest evidence path first.

If this is only test planning, use TokenOpt MCP as a cost gate.
If exact class/test files are needed, use narrow search/read.

Task:
Plan unit tests for <class/module>.
Identify behaviors, edge cases, existing test style, and narrow validation command.
Do not edit files yet.
```

### 10. Code Review

```text
Review the current net diff, PR, changed files, or exact review target.

Choose the cheapest review evidence path:
- If the diff is enough for a finding, report it directly.
- If changed symbols, tests, similar logic, or business rules are unclear, use one bounded review/source evidence pass.
- If Jira, Confluence, or direct attachments are provided, use them as requirement evidence for the business/test coverage phase.
- If no diff/PR/changed files/exact target is provided, ask for the review artifact and do not scan the repo.

Focus on correctness, regressions, security, performance, compatibility, business requirement coverage, and missing tests.

Return:
1. Findings first, ordered by severity
2. File/line evidence
3. Business/test coverage against Jira/Confluence/attachment/checklist evidence
4. Missing tests
5. Open questions
6. Short summary only after findings
```

### 11. Field / Schema Impact

```text
Choose the cheapest evidence path first.

This is an exact impact analysis task. Start with narrow search/read around the field/schema for symbol/dependency impact.
Use TokenOpt only if broad business/context summary is needed first.

Task:
Analyze the impact of changing field/schema <field name>.
Find producers, consumers, validation, persistence, API contracts, tests, and migration risks.

Return:
- Impacted business flow
- Impacted files/symbols
- Risk areas
- Test plan
- Migration/compatibility notes
```

### 12. Startup / Bootstrap Flow

```text
This is an exact startup flow trace.

Do not call TokenOpt first unless a broad repo overview is needed.
Use narrow search/read to identify entrypoints and initialization order.

Task:
Trace application startup/bootstrap flow.
Identify entrypoint, config loading, dependency initialization, background jobs, external connections, and failure points.
Cite concrete files and symbols.
```

### 13. Build / Daily Handoff

This is a good broker-first task when the repo shape is broad.

```text
Choose the cheapest evidence path first.

This is a broad repo handoff task, so use one compact broker evidence pass as a cost gate if available.
If answerable=true, answer from the packet with no extra exploration.

Task:
Prepare a daily handoff for this repo: build tool, package manager, important scripts, test/lint commands, risky areas, and recommended narrow validation.
```

### 14. Benchmark TokenOpt

Use this only for benchmark runs.

```text
Use TokenOpt as the first acquisition path for this benchmark.

Call tokenopt_compile_evidence with the inferred task_type.
If answerable=true, answer from the packet and do not call more tools.
If answerable=false, use only allowed TokenOpt followups.

Task:
<actual task>

Report:
- input tokens
- output tokens
- tool calls
- MCP calls
- shell calls
- fallback after answerable
- answer quality
```

### 15. ContextGate-Only Router

Use this when ContextGate MCP is available and you want one optimized acquisition route.

```text
Choose the cheapest evidence path first.

Use ContextGate MCP only as a cost gate for broad repo/business/planning tasks.
Use native narrow search/read directly when exact code ownership, call flow, dependency impact, or symbol flow is needed.
Do not call ContextGate and then repeat the same evidence acquisition with shell/search/read.
Do not repeat the same evidence acquisition after MCP.

Start the answer with:
Acquisition path:
Reason:
Fallback used:

Task:
<your task>
```

### 16. Spec Kit Implementation Planning

Use this for `github/spec-kit` or a project initialized by Spec Kit when you want an implementation plan before editing files. This is a good TokenOpt-first workload when the owning integration, command, template, or test area is not already known.

```text
Choose the cheapest evidence path first.

Use TokenOpt MCP as a cost gate if this can replace broad exploration.
If answerable=true, answer from the packet and do not call shell/search again.
If missing exists, use only exact TokenOpt followups.

Task:
Use the Spec Kit implementation workflow to plan this change:
<describe the desired Spec Kit change>

Return valid compact JSON only with:
- files
- symbols
- implementation_steps
- tests
- risks
- evidence
```

Example:

```text
Choose the cheapest evidence path first.

Use TokenOpt MCP as a cost gate if this can replace broad exploration.
If answerable=true, answer from the packet and do not call shell/search again.
If missing exists, use only exact TokenOpt followups.

Task:
Use the Spec Kit implementation workflow to plan a small code change:
add validation so integration keys cannot contain whitespace before integrations are registered or used by the Specify CLI.

Return valid compact JSON only with files, symbols, implementation_steps, tests, risks, and evidence.
```

### 17. Spec Kit Actual Implementation

Use this when the agent should edit files. Keep TokenOpt as a planning gate only; after the owner files are known, switch to narrow file reads and targeted tests.

```text
Choose the cheapest evidence path first.

Use broker evidence once only if it can identify the owning Spec Kit integration, command, template, tests, or workflow cheaper than broad shell exploration.
If TokenOpt returns answerable=true, use the packet as the implementation map and do not repeat exploration with broad shell/search.
After ownership is known, edit only the narrow files needed.

Task:
Implement this Spec Kit change:
<describe the change>

Requirements:
- Keep the change minimal and compatible with existing Spec Kit workflows.
- Add or update targeted pytest coverage.
- Run the narrowest relevant pytest command.
- Report changed files, validation command, and remaining risks.

Start with:
Acquisition path:
Reason:
Fallback used:
```

### 18. Spec Kit A/B Benchmark Prompt

Use this only when measuring cost with `tokenopt benchmark suite`, not for normal development. The benchmark prompt should be stricter than a production prompt so quality can be scored deterministically.

```text
Use the Spec Kit implementation workflow to plan a small code change:
<describe the desired change>.

Return valid compact JSON only with files, symbols, implementation_steps, tests, risks, and evidence.
```

Recommended suite fields:

```json
{
  "class": "refactor_scope",
  "qualityRubric": [
    "identifies owning command or integration path",
    "identifies relevant metadata or registry symbol",
    "has implementation steps",
    "has targeted tests",
    "states compatibility risks"
  ],
  "maxBudget": {
    "mcpCallsCompiled": 4,
    "targetedShellCalls": 0,
    "shellCallsAfterAnswerable": 0,
    "packetTokens": 1600
  }
}
```

In a one-task Spec Kit benchmark against `github/spec-kit`, a planning prompt for integration-key whitespace validation measured `router-best` at `297,166` total tokens versus `927,192` baseline tokens, a `67.9%` reduction. That result applies to broad implementation planning, not necessarily to every exact code-edit task.

## Anti-Patterns

Do not paste benchmark/report instructions into a normal prompt:

```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available...
```

Do not use this for exact flow/class work:

```text
Always use TokenOpt first.
Trace <specific class or flow> line by line.
```

Do not ask for all acquisition paths:

```text
Use ContextGate first, then shell search, then read all relevant files.
```

Those prompts commonly cause input tokens to increase.

## Troubleshooting

### Copilot Does Not Call TokenOpt

Check:

```text
/mcp show tokenopt
/mcp show codegraph
/agent
```

Expected setup files:

```text
.github/copilot-instructions.md
.github/instructions/tokenopt.instructions.md
.github/agents/tokenopt-cost-gate.agent.md
AGENTS.md
```

If `codegraph` is missing, configure it without changing the daily prompt:

```powershell
node dist\cli.js setup copilot --scope both --include-codegraph --codegraph-root D:\Personal\Projects\code-graph
node dist\cli.js doctor copilot
```

If Copilot still does not call MCP for broad tasks, mention the agent as a setup/debug hint, not as a permanent daily prompt requirement:

```text
Use the tokenopt-cost-gate agent if available.
Task: <actual broad task>
```

For code review, a normal prompt such as `review this PR` is enough when the diff/PR/branch target is visible. The installed review instructions should map it to `tokenopt_compile_evidence` for review slots and `codegraph_context` or exact source reads only for missing changed-code evidence.

### Token Count Increased

Likely causes:

- TokenOpt was called and then the agent repeated the same work with shell/search.
- The prompt pasted benchmark fields such as `injectedInstruction` or `actualPromptSentToCodex`.
- The task was exact code-level work where TokenOpt-first was not the cheapest path.

Fix:

```text
Choose the cheapest evidence path first.
Never do ContextGate first and then repeat the same exploration with shell, search, or read.
Start your answer with Acquisition path, Reason, and Fallback used.
```

### Need Stronger Enforcement

Instructions and Copilot custom agents are soft routing signals. For strict TokenOpt acquisition, run a mode where the host shell tool is disabled and TokenOpt MCP is the only acquisition path. Use strict mode for benchmarks, not for every day-to-day exact-code task.

## Sources

- GitHub Copilot repository instructions: <https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions>
- GitHub Copilot custom agents: <https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents>
- GitHub Copilot custom agent configuration: <https://docs.github.com/en/copilot/reference/custom-agents-configuration>
- GitHub Copilot MCP setup: <https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers>
