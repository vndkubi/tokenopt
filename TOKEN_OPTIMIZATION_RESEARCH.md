# Token Optimization Research

Date: 2026-06-16

Scope: daily developer benchmark modes for TokenOpt, CodeGraph, and the combined TokenOpt + CodeGraph hybrid flow.

Implementation status:

- Implemented: `tokenopt-codegraph-adaptive` benchmark mode, task-family routing, compact-first CodeGraph prompt plan, shell-disabled adaptive gate, exact-slice quality escalation for feature-specific Doughnut recall prompts, and detailed raw/fresh token efficiency metrics in suite reports.
- Not yet implemented: prompt-cache prefix reorder and TokenOpt `hybrid_passport` output profile.

Primary evidence:

- `benchmark-results/developer-daily-playbook-2026-06-14.json`
- `benchmark-results/adaptive-v3-baseline-comparison-2026-06-16.md`
- `benchmark-results/adaptive-v3-doughnut-exact-slices-2026-06-16.json`
- `DAILY_DEVELOPER_BENCHMARK_DETAILS.md`
- `src/suite-benchmark.ts`
- `src/mcp.ts`
- `src/router.ts`

## 0. Latest Adaptive V3 Proof

After rerunning a fair baseline on the same current suite, the first adaptive quality attempt was still not good enough: it reduced token burn, but failed all three Doughnut recall prompts that baseline answered correctly. The failure was not insufficient budget. The failure was evidence shape: broad CodeGraph `get_flow_pack` and `get_change_pack` ranked generic JSON key names, CLI recall files, and E2E page objects above exact frontend/backend slices.

Adaptive v3 changes the quality escalator for feature-specific Doughnut recall prompts to use one exact batch CodeGraph `get_file_slice` call. TokenOpt still owns quality/slot gating; CodeGraph supplies exact file evidence; shell remains disabled.

Measured on the same three prompts:

| Mode | Correct | Avg quality | Fresh tokens | Raw tokens | Input tokens | MCP calls | Shell calls |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Baseline rerun | 3/3 | 0.888 | 443,862 | 5,150,422 | 5,097,940 | 0 | 184 |
| Adaptive v2 quality pack | 0/3 | 0.511 | 247,594 | 742,954 | 707,707 | 12 | 0 |
| Adaptive v3 exact slices | 3/3 | 1.000 | 138,453 | 390,997 | 362,516 | 8 | 0 |

Adaptive v3 vs baseline: same correctness, higher measured quality, fresh tokens `-68.8%`, raw tokens `-92.4%`, input tokens `-92.9%`, shell calls `184 -> 0`.

Conclusion: merging TokenOpt and CodeGraph as one always-on broad pack is the wrong optimization. The useful merge is policy-level: TokenOpt decides required evidence slots and answerability, then CodeGraph chooses the cheapest acquisition shape for the prompt family. For feature-specific business/PBI/bug work, exact bounded slices are cheaper and higher quality than broad graph packs.

Caveat: the v3 benchmark exposes a follow-up issue in CodeGraph itself. `.vue` is not listed in `D:\Personal\Projects\code-graph\src\analyzers\language-detector.ts`, so Vue SFC evidence can still be weak even when the benchmark prompt knows the right file path. The next CodeGraph-side optimization should add Vue file support so `get_file_slice` / `search_code` can return `frontend/src/pages/RecallPage.vue` directly.

## 1. System Mental Model

The benchmark runner builds one Codex prompt per task and mode, injects MCP server config when needed, parses Codex JSONL usage events, scores the final answer against task rubrics, and emits JSON/Markdown reports.

The current acquisition modes have different jobs:

| Mode | Mechanism | Strength | Main cost driver |
| --- | --- | --- | --- |
| `baseline` | Shell/search/read through normal Codex behavior | Can recover when unconstrained exploration finds the right files | Many shell calls, frequent timeout, poor JSON stability |
| `mcp-only` / `tokenopt-only` | `tokenopt_compile_evidence` plus exact TokenOpt followups | Good checklist and bounded evidence contract | Multiple packet/followup turns when answerable is false |
| `codegraph-only` | CodeGraph packs and search tools | Lowest nonzero input in most tasks | Weak quality when the pack does not satisfy all rubric slots |
| `tokenopt-codegraph-hybrid` | TokenOpt quality passport + CodeGraph evidence + capped shell fallback | Best quality/correctness in current run | Pays for both MCP systems and usually consumes fallback calls |

TokenOpt owns the quality contract. CodeGraph owns code-structure acquisition. The hybrid mode works because TokenOpt tells the agent what slots must be filled, while CodeGraph gives structured file/symbol/test evidence. The cost problem is that the current hybrid prompt often asks for a full CodeGraph pack and still permits shell fallback, so the transcript accumulates duplicated evidence.

## 2. Execution Pipeline

| Step | Owner | Input | Output | Cost driver |
| --- | --- | --- | --- | --- |
| Select task/mode | `runSuiteBenchmarkCommand` in `src/suite-benchmark.ts` | Suite JSON, repo list, mode list | One run per task/mode | Number of modes and tasks |
| Build prompt | `buildSuitePrompt` in `src/suite-benchmark.ts` | Task prompt, inferred task type, mode | Full Codex prompt | Long repeated benchmark instructions and mode-specific plans |
| Inject MCP servers | `runCodexSuiteBenchmark` in `src/suite-benchmark.ts` | Mode | TokenOpt and/or CodeGraph config | Additional tool schemas and tool transcripts |
| Compile TokenOpt evidence | `compileEvidence` path in `src/mcp.ts` | Task, repo, task type, budget | Evidence packet, coverage, followups | Repo facts, inventory summary, task-specific evidence, packet size |
| Acquire CodeGraph evidence | CodeGraph tools selected by prompt | Task or target, token budget | Flow/change/review packs, symbol/test hits | Full profile, snippets, large max file/symbol limits |
| Hybrid fallback | Shell calls allowed by `tokenopt-codegraph-hybrid` prompt | Missing slot query | `rg` hits and file slices | Tool output becomes subsequent input; current hybrid averages 3 shell calls |
| Score output | `scoreSuiteAnswer` and `scoreSuiteIdeaQuality` | Final JSON | Quality/correctness metrics | No runtime cost; quality feedback loop |

## 3. Step-by-Step Bottleneck Analysis

### Confirmed From Benchmark Data

| Mode | Correct | Avg quality | Avg input | Avg output | Avg fresh tokens |
| --- | ---: | ---: | ---: | ---: | ---: |
| baseline | 2/9 | 0.229 | 122,968 | 1,622 | 26,748 |
| mcp-only | 1/9 | 0.389 | 185,054 | 4,505 | 52,326 |
| codegraph-only | 1/9 | 0.321 | 84,730 | 2,267 | 32,328 |
| tokenopt-codegraph-hybrid | 5/9 | 0.824 | 255,434 | 8,899 | 74,292 |

The hybrid mode is the only mode with strong average quality, but it is also the most expensive mode by raw input, output, and fresh tokens.

`codegraph-only` is the cheapest nonzero-input mode, but average quality is too low. This means CodeGraph should not replace TokenOpt's quality contract yet.

`mcp-only` is excellent for at least one review task: `doughnut-recall-scheduling-code-review` reached quality `0.909` with `56,546` input tokens, while hybrid reached `1.000` with `325,282` input tokens. For review tasks, always-hybrid is not cost-effective.

Hybrid mode averages `5.444` tool calls, `2.444` MCP calls, and `3.000` shell calls. The shell fallback cap is being consumed in practice, not just available as a rare escape hatch.

### Inferred From Code

`buildSuitePrompt` currently puts the task prompt before the stable benchmark/mode instructions. For prompt-cache billing, stable prefixes are usually more reusable when placed before task-specific content. Raw input would not change, but fresh input can decrease in repeated suite runs.

`codeGraphToolPlanLines` uses full CodeGraph profiles for flow/investigation tasks with `includeSnippets=true` and `snippetTokenBudget=5000`. This is high quality but expensive as a first pass.

`tokenOptCodeGraphPlanLines` allows one TokenOpt packet, one full CodeGraph pack, one exact CodeGraph followup, optional gap-refill, and up to three shell calls in hybrid fallback. This stacks acquisition layers instead of escalating only when a slot remains missing.

TokenOpt evidence packets include general repo facts, inventory shape, overview, structure facts, and task-specific evidence. In hybrid mode, some general repo-shape facts overlap with CodeGraph's responsibility and can be thinned.

## 4. Root Cause Hypotheses

1. Hybrid quality is high because it combines a slot checklist with exact structural evidence, not because every run needs full snippets and shell fallback.
2. Hybrid token burn is high because fallback is prompt-gated by qualitative slot weakness instead of machine-readable slot coverage.
3. Review tasks need a cheaper path than implementation/flow tasks. Their useful context is the diff/change packet and tests, not a full TokenOpt + CodeGraph + shell stack.
4. Prompt-cache efficiency is leaving money on the table because task-specific content appears before stable benchmark instructions.
5. Final JSON answers are still too verbose: hybrid output averages `8,899` tokens even though the prompt asks for compact JSON under 7000 characters.

## 5. Evidence From Code, Logs, or Benchmarks

Measured policy simulation on the 9-task run:

| Policy | Correct | Avg quality | Avg input | Avg fresh tokens | Change vs always-hybrid |
| --- | ---: | ---: | ---: | ---: | --- |
| Always hybrid | 5/9 | 0.824 | 255,434 | 74,292 | baseline |
| Cheapest mode with quality >= 0.8, else best quality | 5/9 | 0.814 | 225,575 | 69,692 | input -11.7%, fresh -6.2%, correct unchanged |

The cheapest-quality policy differs from always-hybrid only on the code review task, selecting `mcp-only` instead of hybrid.

Observed per-task pattern:

| Task family | Best current quality behavior | Token implication |
| --- | --- | --- |
| Requirement/flow/refactor/implementation | Hybrid usually best | Keep hybrid, but make it staged |
| Code review | `mcp-only` and `codegraph-only` are already correct | Route reviews away from always-hybrid |
| Business/PBI/bug trace | Hybrid best but below correctness threshold | Need better targeted evidence, not broader fallback |

## 6. Feature or Optimization Ideas

### A. Add Adaptive Mode Routing

Add a benchmark/runtime policy equivalent to `tokenopt-codegraph-adaptive`:

- `review_diff`: start with `mcp-only` or a compact CodeGraph review packet.
- `write_unittest`: start with compact CodeGraph `get_change_pack` plus TokenOpt checklist.
- `api_flow`, `investigate`, `implement`, `refactor`: use hybrid, but staged.
- Missing artifact/security scope: bypass or compile only, no broad CodeGraph pack.

Mechanism: reduce expensive hybrid runs where cheaper modes already satisfy quality.

Validation: same correctness as hybrid on daily suite, average quality >= `0.80`, average input at least `10%` lower.

### B. Make Hybrid Two-Phase Instead Of Full-Stack

Phase 1:

- `tokenopt_compile_evidence`
- compact CodeGraph pack with no snippets or small snippets
- no shell fallback

Phase 2 only if slot coverage is missing:

- one exact CodeGraph slice/search for the missing slot
- shell fallback only on CodeGraph error/timeout/unavailable, not normal uncertainty

Mechanism: remove duplicated acquisition and prevent fallback from becoming a default third evidence provider.

Implementation target: `tokenOptCodeGraphPlanLines` and the CodeGraph call plan in `src/suite-benchmark.ts`.

Validation: hybrid/adaptive shell calls should fall from `3.000` average to <= `1.000` while keeping average quality >= `0.80`.

### C. Lower Initial CodeGraph Budgets By Task Type

Current first-pass CodeGraph budgets are effectively at least `8000`, with `write_unittest` at least `12000`.

Proposed initial budgets:

| Task type | Initial CodeGraph budget | Escalation budget |
| --- | ---: | ---: |
| `review_diff` | 4000 | 8000 only if findings lack evidence |
| `write_unittest` | 6000 | 10000 only if no owner/test anchors |
| `api_flow` / `investigate` | 5000 | 9000 only if entrypoint or tests missing |
| `implement` / `refactor` | 6000 | 10000 only if edit/test plan incomplete |

Mechanism: make broad packs cheaper first, then pay for exact missing slices.

Risk: underfetching can reduce quality on Hadoop/Elasticsearch flow tasks. The escalation gate must be slot-based.

### D. Reorder Benchmark Prompts For Prompt Cache

Move stable benchmark constraints and mode instructions before task-specific text, then put the daily task in a labeled section near the end.

Mechanism: improve cached prefix reuse across runs. This should reduce fresh tokens without changing raw input or final answer quality.

Implementation target: `buildSuitePrompt` in `src/suite-benchmark.ts`.

Validation: compare `cached_input_tokens / input_tokens` before and after on the same task order. Success threshold: fresh input down >= `10%` with quality delta <= `0.02`.

### E. Thin TokenOpt Packets In Hybrid Mode

Add a `hybrid_passport` output profile for `tokenopt_compile_evidence`:

- keep route, answerability, coverage, required slots, missing slots, allowed followups
- keep task-specific evidence
- drop or aggressively summarize generic repo facts when CodeGraph will provide structure
- cap evidence facts per item

Mechanism: TokenOpt becomes a checklist/passport instead of another evidence payload.

Implementation target: `src/mcp.ts`, likely around packet construction and output policy.

Validation: packet `evidence_tokens_est` down >= `25%`; hybrid quality remains >= `0.80`.

### F. Add Machine-Readable Slot Coverage

Make TokenOpt and CodeGraph prompts exchange a compact slot object:

```json
{
  "slots": {
    "files": "covered",
    "symbols": "covered",
    "tests": "partial",
    "risks": "covered",
    "validation": "covered"
  }
}
```

Fallback is allowed only for slots marked `missing`, not for subjective uncertainty.

Mechanism: converts fallback gating from prose to data.

Validation: lower shell calls and fewer repeated searches without more critical misses.

### G. Enforce Output Budgets Per Task Family

Hybrid output is high. Add task-family-specific caps:

- review: max 3 findings, max 2 evidence bullets per finding
- flow/investigation: max 5 flow steps, max 8 files, max 10 symbols
- implementation/test plan: max 5 changes, max 5 tests, max 5 risks

Mechanism: reduce output and future context without removing core evidence.

Validation: average output tokens <= `6000`, JSON validity remains 100%, quality delta <= `0.03`.

## 7. Expected Impact Estimates

| Change | Basis | Expected token impact | Expected quality impact | Confidence |
| --- | --- | --- | --- | --- |
| Adaptive routing for reviews | Measured policy simulation | Avg input -11.7%, fresh -6.2% on current suite | Avg quality -0.010, correctness unchanged | High |
| Prompt-cache prefix reorder | Code-level inference | Fresh input -10% to -30% on repeated suite runs | Neutral | Medium |
| Two-phase hybrid without default shell | Hybrid currently averages 3 shell calls | Raw/fresh input -15% to -35% | Neutral to -0.05 if gate is weak | Medium |
| Lower initial CodeGraph budgets | Current full first pass uses 8000+ budgets | CodeGraph-related input -15% to -40% | Neutral if escalation catches missing slots | Medium |
| Hybrid TokenOpt passport profile | Packet overlap inferred from `src/mcp.ts` | Packet output/input carried forward -20% to -35% | Neutral to slight negative | Medium |
| Output caps | Hybrid avg output 8899 | Output -25% to -40% | Risk if caps hide required rubric evidence | Medium |

## 8. Tradeoffs and Risks

- Cheaper first-pass CodeGraph packs can miss exact tests or owner symbols. Use slot-based escalation rather than a hard low budget.
- Routing reviews to `mcp-only` may miss complex cross-file review findings. Keep an escalation path for large diffs or missing changed-symbol coverage.
- Prompt-cache reorder changes the textual contract. The task must remain clearly labeled so tools receive only the original daily task.
- Thinning TokenOpt packets can hurt broad business/PBI tasks if general repo context was acting as useful grounding.
- Output caps can reduce quality scores if the rubric expects many named artifacts. Caps should be per task family, not global.

## 9. Implementation Plan

1. Add benchmark policy `tokenopt-codegraph-adaptive`. Implemented.
2. Implement task-family routing. Implemented:
   - review -> TokenOpt review packet first
   - write_unittest -> compact CodeGraph change pack plus TokenOpt checklist
   - flow/implement/refactor -> staged hybrid
3. Reorder `buildSuitePrompt` so stable instructions precede task-specific text. Deferred.
4. Add CodeGraph compact-first budgets and explicit escalation budgets. Implemented for adaptive mode.
5. Add hybrid shell fallback gate based on explicit missing slots or CodeGraph failure. Implemented for adaptive mode by disabling shell fallback entirely; hybrid mode remains unchanged for comparison.
6. Add optional `hybrid_passport` profile to TokenOpt evidence packets. Deferred.
7. Add benchmark summary columns. Implemented:
   - `fresh_tokens`
   - `quality_per_10k_fresh_tokens`
   - `tool_calls_by_family`
   - `fallback_used` via shell/MCP call counts and double-spend metadata
8. Re-run the 13-prompt suite with:
   - `baseline`
   - `mcp-only`
   - `codegraph-only`
   - `tokenopt-codegraph-hybrid`
   - `tokenopt-codegraph-adaptive`

## 10. Benchmark and Validation Plan

Primary success thresholds:

- Correctness: adaptive >= hybrid current `5/9` on the 9-task historical suite; target >= `8/13` on the expanded suite.
- Quality: adaptive average quality >= `0.80`.
- Fresh tokens: adaptive average fresh tokens at least `15%` below hybrid.
- Output tokens: adaptive average output tokens <= `6000`.
- Tool calls: adaptive shell calls <= `1.0` average.
- JSON validity: 100%.

Required comparisons:

| Scenario | Purpose |
| --- | --- |
| Historical 9-task suite | Compare against known baseline without changing task mix |
| Expanded 13-task suite | Cover all daily prompt aliases |
| Review-only subset | Validate cheap review route |
| Flow/refactor/implement subset | Validate staged hybrid quality |
| Business/PBI/bug subset | Detect quality regressions in weak families |

## 11. Recommended Priority Order

1. Adaptive routing for review and missing-artifact tasks. It has measured savings and low implementation risk.
2. Prompt-cache prefix reorder. It is cheap, easy to A/B, and should reduce billed fresh tokens.
3. Hybrid fallback hard gate. Current fallback use is too frequent.
4. Compact-first CodeGraph budgets with slot escalation.
5. TokenOpt `hybrid_passport` packet profile.
6. Strict output caps per task family.

The near-term target should be: keep hybrid-level correctness, reduce average fresh tokens by at least `15%`, and keep average quality at or above `0.80`.
