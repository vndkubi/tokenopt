# Context Governor Suite Benchmark

Generated: 2026-06-16T23:14:36.444Z
Suite: mini-tokenopt-natural-comparison 2026-06-16
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: codegraph-only
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M1-cli-commands | codegraph-only | coding_coverage | coding_coverage | no | no | yes | 0.833 | 0.500 | 1 | yes | 71367 | 49920 |  | 9786 |  |  | 8823 | 89976 | 40056 |  | 0.208 | 2 | 2 | 0 | 29092 | 52818 |
| tokenopt | M2-benchmark-modes | codegraph-only | compile_evidence | overview_contract | no | no | no | 0.667 | 0.500 | 3 | yes | 101481 | 71680 |  | 12356 |  |  | 10813 | 124650 | 52970 |  | 0.126 | 3 | 3 | 0 | 58602 | 51497 |
| tokenopt | M3-router-safety | codegraph-only | direct_narrow | trace_proof | yes | no | no | 0.400 | 0.500 | 6 | yes | 50360 | 29696 |  | 11034 |  |  | 9930 | 71324 | 41628 |  | 0.096 | 1 | 1 | 0 | 29714 | 34296 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| codegraph-only | 3 | 1/3 | 0/3 | 71367 | 74403 | 11059 | 95317 | 44885 | 0.633 | 0.500 | 0.143 | 3.33 | 2.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| build_handoff | codegraph-only | 1 | 1/1 | 0/1 | 71367 | 71367 | 9786 | 89976 | 40056 | 0.833 | 0.500 | 0.208 | 1.00 | 2.0 | 0.0 | 52818 |
| investigate | codegraph-only | 2 | 0/2 | 0/2 | 75921 | 75921 | 11695 | 97987 | 47299 | 0.534 | 0.500 | 0.111 | 4.50 | 2.0 | 0.0 | 42897 |

## Task Details

### tokenopt / M1-cli-commands

Class: build_handoff

Prompt:
```
Return valid compact JSON only with keys project_overview, commands, files, risks. "project_overview": concise 1-2 line summary of this repository. "commands": top-level CLI commands from src/cli.ts. "files": files referenced by commands if inferable. "risks": implementation risks. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "src/cli.ts"
  ],
  "symbols": [
    "helpText"
  ],
  "terms": [
    "benchmark",
    "hook",
    "mcp"
  ]
}
```

Quality rubric:
- includes project summary
- lists command families
- references evidence-bearing files
- mentions one key risk
- contains valid compact JSON

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M1-cli-commands | codegraph-only | coding_coverage | coding_coverage | no | no | yes | 0.833 | 0.500 | 1 | yes | 71367 | 49920 |  | 9786 |  |  | 8823 | 89976 | 40056 |  | 0.208 | 2 | 2 | 0 | 29092 | 52818 |

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-codegraph-only-current-2026-06-17\tokenopt-M1-cli-commands-codegraph-only.jsonl

Codex prompt used:
```
Task (do not rephrase):
Return valid compact JSON only with keys project_overview, commands, files, risks. "project_overview": concise 1-2 line summary of this repository. "commands": top-level CLI commands from src/cli.ts. "files": files referenced by commands if inferable. "risks": implementation risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Keep user-provided task wording as the primary requirement; apply any installed AGENTS/agent instructions first.
- Repository root: D:\Personal\Projects\tokenopt

- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call compile_evidence with task as the complete user request above, taskType=investigate, budgetTokens=8000, maxEvidenceItems=20, and qualityRubric=["includes project summary","lists command families","references evidence-bearing files","mentions one key risk","contains valid compact JSON"].
- If compile_evidence returns answerable=false, use at most one listed allowedFollowups tool for the most important missing fact.
- If compile_evidence returns answerable=true but the final JSON still lacks concrete file, symbol, or test names required by the user request, use at most one exact CodeGraph followup for that missing named anchor.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"project_overview":"TokenOpt is a TypeScript CLI-centric repository where `src/cli.ts` dispatches top-level commands into benchmark, install/setup, hook, MCP, and related command modules, backed by shared config and filesystem-backed config state.","commands":[{"name":"help","type":"top-level","files":["src/cli.ts"]},{"name":"init","type":"top-level","files":["src/cli.ts","src/config.ts"]},{"name":"install","type":"top-level","subcommands":["copex","copilot"],"files":["src/cli.ts","src/config.ts","src/install.ts","src/copilot-setup.ts","src/observability.ts"]},{"name":"setup","type":"top-level","subcommands":["copilot"],"files":["src/cli.ts","src/copilot-setup.ts"]},{"name":"benchmark","type":"inferred-top-level-family","files":["src/cli.ts","src/benchmark.ts"]},{"name":"codex-benchmark","type":"inferred-top-level-family","files":["src/cli.ts","src/codex-benchmark.ts"]},{"name":"suite-benchmark","type":"inferred-top-level-family","files":["src/cli.ts","src/suite-benchmark.ts"]},{"name":"workflow-ab-benchmark","type":"inferred-top-level-family","files":["src/cli.ts","src/workflow-ab-benchmark.ts"]},{"name":"mcp","type":"inferred-top-level-family","files":["src/cli.ts","src/mcp.ts"]},{"name":"doctor","type":"inferred-top-level-family","files":["src/cli.ts","src/doctor.ts"]},{"name":"hook","type":"inferred-top-level-family","subcommands":["user-prompt-submit","pre-tool-use","post-tool-use","pre-compact"],"files":["src/cli.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/types.ts"]},{"name":"instruction-audit","type":"inferred-top-level-family","subcommands":["audit","emit","install"],"files":["src/cli.ts","src/instruction-audit.ts"]},{"name":"report","type":"inferred-top-level-family","files":["src/cli.ts","src/report.ts"]}],"files":["src/cli.ts","src/config.ts","src/install.ts","src/copilot-setup.ts","src/benchmark.ts","src/codex-benchmark.ts","src/suite-benchmark.ts","src/workflow-ab-benchmark.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/doctor.ts","src/mcp.ts","src/instruction-audit.ts","src/report.ts","src/types.ts","src/observability.ts","src/exec.ts"],"risks":["`src/cli.ts` evidence is partially inferred from available slices; full top-level command surface may be broader than the explicit branches visible in the retrieved snippet.","The command parser relies on positional `argv` handling with manual subcommand checks, which can be brittle under malformed/ambiguous argument combinations and may route to fallback behavior unexpectedly.","`init` and hook-install commands are filesystem-affecting operations; without explicit confirmation/dry-run controls, automation runs risk unintended repo/config mutation."]}
```

Idea checks: 4/8 (0.500)

Critical misses: symbol:helpText

### tokenopt / M2-benchmark-modes

Class: investigate

Prompt:
```
Return valid compact JSON only with keys command_list, setup_flow, quality_focus, output_shape. Explain how benchmark, mcp, and codegraph modes are selected today and what each mode should buy as signal/cost tradeoff.
```

Expected evidence:
```json
{
  "files": [
    "README.md",
    "src/suite-benchmark.ts"
  ],
  "symbols": [
    "runSuiteBenchmarkCommand",
    "buildSuitePrompt"
  ],
  "terms": [
    "tokenopt",
    "codegraph",
    "quality",
    "benchmark"
  ]
}
```

Quality rubric:
- maps tradeoff between token cost and signal
- covers benchmark and mcp selection
- mentions output shape
- contains valid compact JSON

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M2-benchmark-modes | codegraph-only | compile_evidence | overview_contract | no | no | no | 0.667 | 0.500 | 3 | yes | 101481 | 71680 |  | 12356 |  |  | 10813 | 124650 | 52970 |  | 0.126 | 3 | 3 | 0 | 58602 | 51497 |

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-codegraph-only-current-2026-06-17\tokenopt-M2-benchmark-modes-codegraph-only.jsonl

Codex prompt used:
```
Task (do not rephrase):
Return valid compact JSON only with keys command_list, setup_flow, quality_focus, output_shape. Explain how benchmark, mcp, and codegraph modes are selected today and what each mode should buy as signal/cost tradeoff.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Keep user-provided task wording as the primary requirement; apply any installed AGENTS/agent instructions first.
- Repository root: D:\Personal\Projects\tokenopt

- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call get_flow_pack with target as the complete user request above, taskType=api_flow, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, and profile=full.
- Build the final handoff from flowSteps, files, symbols, evidenceSlices, testsLikelyRelevant, risks, and validation hints.
- If get_flow_pack is missing required rubric coverage (["maps tradeoff between token cost and signal","covers benchmark and mcp selection","mentions output shape","contains valid compact JSON"]), use at most one exact CodeGraph followup from search_code, find_references, find_tests_for, or get_file_slice for that named missing fact.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"command_list":[{"mode":"benchmark","selection":"task-type gates token budget for CodeGraph-assisted runs through adaptiveCodeGraphBudgetForTask() and adaptiveQualityCodeGraphBudgetForTask().","evidence":["src/suite-benchmark.ts:647-659"],"tradeoff":"Higher budget task types buy deeper signal (more token budget), lower-budget entries buy lower cost (e.g., review_diff=4000)."},{"mode":"mcp","selection":"buildCodeGraphMcpServerConfig chooses MCP profile from TOKENOPT_CODEGRAPH_MCP_PROFILE, else codeGraphProfileForTask(taskType), then passes it as --mcp-profile.","evidence":["src/suite-benchmark.ts:569-577"],"tradeoff":"Explicit profile/env gives controllable behavior and can reduce accidental cost by selecting lighter/heavier MCP profiles."},{"mode":"codegraph","selection":"runCodexSuiteBenchmark wiring points to buildCodeGraphMcpServerConfig, and prewarmCodeGraphIfRequested invokes codeGraphIndexInvocation for repository prewarm; prewarm can be disabled via TOKENOPT_CODEGRAPH_MCP_NO_PREWARM.","evidence":["src/suite-benchmark.ts:491","src/suite-benchmark.ts:868-869","src/suite-benchmark.ts:893-899","src/suite-benchmark.ts:579-581"],"tradeoff":"Prewarm provides stronger structural signal for downstream prompts, while no-prewarm and timeout-like controls reduce latency/cost."}],"setup_flow":{"flowSteps":[{"order":1,"summary":"runCodexSuiteBenchmark calls buildCodeGraphMcpServerConfig.","evidence":["src/suite-benchmark.ts:491"],"type":"caller-link"},{"order":2,"summary":"buildCodeGraphMcpServerConfig builds MCP args, applies profile selection and optional flags.","evidence":["src/suite-benchmark.ts:563-581","src/suite-benchmark.ts:584-603"],"type":"definition"},{"order":3,"summary":"prewarmCodeGraphIfRequested calls buildCodeGraphMcpServerConfig then codeGraphIndexInvocation.","evidence":["src/suite-benchmark.ts:868-869"],"type":"caller-link"},{"order":4,"summary":"adaptiveCodeGraphBudgetForTask and adaptiveQualityCodeGraphBudgetForTask map EvidenceTaskType to token budgets.","evidence":["src/suite-benchmark.ts:647-659"],"type":"definition"}],"files":["src/suite-benchmark.ts","src/benchmark.ts","src/codex-benchmark.ts","src/workflow-ab-benchmark.ts","src/config.ts","src/token-estimator.ts"],"symbols":["runCodexSuiteBenchmark","buildCodeGraphMcpServerConfig","prewarmCodeGraphIfRequested","codeGraphIndexInvocation","adaptiveCodeGraphBudgetForTask","adaptiveQualityCodeGraphBudgetForTask","codeGraphProfileForTask","CodeGraphMcpServerConfig"],"evidenceSlices":["src/suite-benchmark.ts:554-604","src/suite-benchmark.ts:638-652","src/suite-benchmark.ts:654-659","src/suite-benchmark.ts:868-869","src/suite-benchmark.ts:893-899","src/benchmark.ts:87-97"],"testsLikelyRelevant":["npm test"],"risks":["src/benchmark.ts:87-97 exposes ALL_MODES but slice text does not include its members, so exact mode taxonomy/selection precedence is partially inferred.","codeGraphProfileForTask() is referenced for default profile resolution but its body is not in returned snippets.","No mode-level CLI/UX docs were retrieved from benchmark config files due follow-up limit; behavior may include additional selectors outside this pack."],"validationHints":["Use file+line citations for every asserted claim.","If this is expanded, request focused get_file_slice on src/benchmark.ts:87-97 and codeGraphProfileForTask() call target to reduce uncertainty."]},"quality_focus":{"benchmark":{"signal":"Task-aware budget mapping is the present gate; it controls how much CodeGraph output budget is consumed for signal capture.","cost":"Lower budgets (e.g., review_diff=4000) reduce token spend.","citations":["src/suite-benchmark.ts:647-652"]},"mcp":{"signal":"Profile-driven MCP args determine model-facing behavior and backend quality knobs via --mcp-profile.","cost":"Environment overrides can force lighter settings and disable expensive actions (no-prewarm).","citations":["src/suite-benchmark.ts:569-577","src/suite-benchmark.ts:579-581"]},"codegraph":{"signal":"Prewarm + index invocation improves structural evidence quality before prompt assembly.","cost":"Prewarm adds process work and can be skipped/managed by env flags and timeouts.","citations":["src/suite-benchmark.ts:868-869","src/suite-benchmark.ts:893-899"]},"risks":["Mode names/selection policy in src/benchmark.ts is known to exist but not fully visible in current slices.","codeGraphProfileForTask defaulting rules are not shown in returned text; potential mismatch if behavior changed."]},"output_shape":{"format":"compact JSON object","required_top_level_keys":["command_list","setup_flow","quality_focus","output_shape"],"citations_policy":"repository-relative file:line references only for claims"}}
```

Idea checks: 4/8 (0.500)

Critical misses: file:README.md, symbol:runSuiteBenchmarkCommand, symbol:buildSuitePrompt

### tokenopt / M3-router-safety

Class: investigate

Prompt:
```
Return valid compact JSON only with keys modes, token_guardrails, fallback_policy, unknowns. Use only information visible in code path references to describe router safety and fallback behavior.
```

Expected evidence:
```json
{
  "files": [
    "src/router.ts",
    "src/suite-benchmark.ts",
    "src/workflow-ab-benchmark.ts"
  ],
  "symbols": [
    "routeTask",
    "parseWorkflow"
  ],
  "terms": [
    "router",
    "fallback",
    "fallback_after_answerable",
    "tool policy"
  ]
}
```

Quality rubric:
- names routing inputs and outputs
- describes fallback policy
- mentions unknowns explicitly
- contains valid compact JSON

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M3-router-safety | codegraph-only | direct_narrow | trace_proof | yes | no | no | 0.400 | 0.500 | 6 | yes | 50360 | 29696 |  | 11034 |  |  | 9930 | 71324 | 41628 |  | 0.096 | 1 | 1 | 0 | 29714 | 34296 |

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-codegraph-only-current-2026-06-17\tokenopt-M3-router-safety-codegraph-only.jsonl

Codex prompt used:
```
Task (do not rephrase):
Return valid compact JSON only with keys modes, token_guardrails, fallback_policy, unknowns. Use only information visible in code path references to describe router safety and fallback behavior.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Keep user-provided task wording as the primary requirement; apply any installed AGENTS/agent instructions first.
- Repository root: D:\Personal\Projects\tokenopt

- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call get_flow_pack with target as the complete user request above, taskType=api_flow, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, and profile=full.
- Build the final handoff from flowSteps, files, symbols, evidenceSlices, testsLikelyRelevant, risks, and validation hints.
- If get_flow_pack is missing required rubric coverage (["names routing inputs and outputs","describes fallback policy","mentions unknowns explicitly","contains valid compact JSON"]), use at most one exact CodeGraph followup from search_code, find_references, find_tests_for, or get_file_slice for that named missing fact.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"modes":{"routing_inputs":["user task","inferred task_type","cwd","required_slots","budget_tokens","quality_rubric"],"routing_outputs":["answerable","packet","followup list"],"mode_variants":["copilot-agent","copilot-path","generic"],"files":["src/instruction-audit.ts","src/policy-core.ts","src/token-estimator.ts","src/coding/test-neighbors.ts"],"symbols":["emitTokenOptInstructions","containsInjectedTokenOptInstructionPaste","BenchmarkUsageTokens","buildNeighborTokens","estimateTokenDetails","DEFAULT_MIN_TOKENS"],"flowSteps":[{"order":1,"summary":"emitTokenOptInstructions emits routing guidance and workflow.","evidence":"src/instruction-audit.ts:51-93"},{"order":2,"summary":"containsInjectedTokenOptInstructionPaste provides injected-instruction detection.","evidence":"src/policy-core.ts:352-361"},{"order":3,"summary":"Benchmark token shape and minimum-token guard are defined in token-estimator.","evidence":"src/token-estimator.ts:28-33, src/token-estimator.ts:37"},{"order":4,"summary":"Token neighborhood construction normalizes target/symbol/source file signals before use.","evidence":"src/coding/test-neighbors.ts:77-83"}],"evidenceSlices":["src/instruction-audit.ts:51-110","src/policy-core.ts:352-361","src/token-estimator.ts:28-33","src/token-estimator.ts:37","src/coding/test-neighbors.ts:77-83"],"testsLikelyRelevant":[],"validation_hints":["expected verification command is `npm test`","no targeted test files were identified by the pack"]},"token_guardrails":{"injection_detection_patterns":["Project instruction injected by TokenOpt setup","The user may ask naturally and does not need to name MCP tools","When TokenOpt MCP tools are available","ContextGate is active as an evidence broker","benchmark oracle classifies the task_type","actualPromptSentToCodex:"],"pattern_check_file":"src/policy-core.ts:352-361","min_token_floor":{"name":"DEFAULT_MIN_TOKENS","value":1,"file":"src/token-estimator.ts:37"},"token_shape":{"type":"BenchmarkUsageTokens","file":"src/token-estimator.ts:28-33","fields":["input_tokens","output_tokens","reasoning_output_tokens","cached_input_tokens?"]},"token_normalization":{"function":"buildNeighborTokens","file":"src/coding/test-neighbors.ts:77-83","notes":"normalizes via tokenizeQuery and stripKnownSuffix before dedupe into Set"},"evidenceSlices":["src/policy-core.ts:352-361","src/token-estimator.ts:28-33","src/token-estimator.ts:37","src/coding/test-neighbors.ts:77-83"],"validation_hints":["expected verification command is `npm test`"],"risks":["safety checks are regex-string based and do not show full execution context in returned slices"]},"fallback_policy":{"primary":"Call `contextgate_get_context` with task metadata, then branch on `answerable` and answer directly from packet when true.","evidence":"src/instruction-audit.ts:88-90","not_answerable":"When `answerable` is false, allowed recovery is only `tokenopt_search` and `tokenopt_read_file` followups from the packet.","evidence_not_answerable":"src/instruction-audit.ts:90","known_file_edit_bypass":"Exact known-file edit tasks are routed to normal narrow search/read outside the broker.","evidence_known_file_edit_bypass":"src/instruction-audit.ts:91","broker_mode":"Instruction explicitly frames TokenOpt as an evidence broker (not always mandatory) and recommends using only when it replaces broad exploration.","evidence":"src/instruction-audit.ts:102-103","flowEvidence":"src/instruction-audit.ts:88-93","fallback_risks":["pack lacks direct runtime router wiring for how these instructions are executed"],"validation_hints":["expected verification command is `npm test`"]},"unknowns":["No direct router implementation function for the actual answer-path decision was retrieved (only instruction and call-graph metadata were provided).","Injected-instruction behavior is evidenced via pattern checks in one guard function, but end-to-end handler flow is not fully visible in returned evidence slices.","The returned `emitTokenOptInstructions` slice is partial; full instruction text may include additional constraints not visible here.","`testsLikelyRelevant` is empty in the pack; only generic verification hint (`npm test`) is available."]}
```

Idea checks: 4/8 (0.500)

Critical misses: file:src/router.ts, file:src/suite-benchmark.ts, file:src/workflow-ab-benchmark.ts, symbol:routeTask, symbol:parseWorkflow, term:fallback_after_answerable
