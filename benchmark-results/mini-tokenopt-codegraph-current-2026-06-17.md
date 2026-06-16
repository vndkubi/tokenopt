# Context Governor Suite Benchmark

Generated: 2026-06-16T23:03:10.848Z
Suite: mini-tokenopt-natural-comparison 2026-06-16
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: tokenopt-codegraph
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M1-cli-commands | tokenopt-codegraph | direct_narrow | trace_proof | no | yes | yes | 0.833 | 0.500 | 1 | yes | 114731 | 76416 |  | 7414 |  |  | 6233 | 128378 | 51962 |  | 0.160 | 3 | 3 | 0 | 84634 | 111294 |
| tokenopt | M2-benchmark-modes | tokenopt-codegraph | compile_evidence | overview_contract | no | no | no | 0.556 | 0.625 | 4 | yes | 119756 | 93184 |  | 14462 |  |  | 12964 | 147182 | 53998 |  | 0.103 | 3 | 3 | 0 | 37119 | 62886 |
| tokenopt | M3-router-safety | tokenopt-codegraph | direct_narrow | trace_proof | no | yes | no | 0.400 | 0.625 | 6 | yes | 108451 | 81024 |  | 10711 |  |  | 9311 | 128473 | 47449 |  | 0.084 | 3 | 3 | 0 | 70237 | 49813 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt-codegraph | 3 | 1/3 | 0/3 | 114731 | 114313 | 10862 | 134678 | 51136 | 0.596 | 0.583 | 0.116 | 3.67 | 3.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| build_handoff | tokenopt-codegraph | 1 | 1/1 | 0/1 | 114731 | 114731 | 7414 | 128378 | 51962 | 0.833 | 0.500 | 0.160 | 1.00 | 3.0 | 0.0 | 111294 |
| investigate | tokenopt-codegraph | 2 | 0/2 | 0/2 | 114104 | 114104 | 12587 | 137828 | 50724 | 0.478 | 0.625 | 0.094 | 5.00 | 3.0 | 0.0 | 56350 |

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
| tokenopt | M1-cli-commands | tokenopt-codegraph | direct_narrow | trace_proof | no | yes | yes | 0.833 | 0.500 | 1 | yes | 114731 | 76416 |  | 7414 |  |  | 6233 | 128378 | 51962 |  | 0.160 | 3 | 3 | 0 | 84634 | 111294 |

#### Output: tokenopt-codegraph

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-tokenopt-codegraph-current-2026-06-17\tokenopt-M1-cli-commands-tokenopt-codegraph.jsonl

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

- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\tokenopt, task_type=build_handoff, budget_tokens=1200, quality_rubric=["includes project summary","lists command families","references evidence-bearing files","mentions one key risk","contains valid compact JSON"], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: entrypoint_or_owner, flow, source_files, symbols, existing_tests, implementation_ideas, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=investigate, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls. Do not call shell/read fallback.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"project_overview":"TokenOpt is a TypeScript CLI-based toolkit for token/context-budget orchestration and agent workflow tooling, with the CLI entrypoint and command dispatch in `src/cli.ts`. Runtime behavior is split across benchmark, adapter, Copilot, doctor, and hook-installation modules such as `src/benchmark.ts`, `src/copilot-setup.ts`, `src/doctor.ts`, and `src/install.ts`.","commands":["main entry path is wired in `src/cli.ts` (`main -> formatCopilotSetupResult` evidence: `src/cli.ts:90`)","Inferred CLI family: benchmark command handlers via `runBenchmarkCommand` imported at `src/cli.ts:4` -> `src/benchmark.ts`","Inferred CLI family: codex benchmark handlers via `runCodexBenchmarkCommand` at `src/cli.ts:5` -> `src/codex-benchmark.ts`","Inferred CLI family: Copilot setup flow via `setupCopilotProject` import at `src/cli.ts:6` and `auditInstructions` from `src/cli.ts:15` -> `src/copilot-setup.ts`","Inferred CLI family: suite benchmark flow via `runSuiteBenchmarkCommand` at `src/cli.ts:7` -> `src/suite-benchmark.ts`","Inferred CLI family: workflow-ab benchmark flow via `runWorkflowAbBenchmarkCommand` at `src/cli.ts:8` -> `src/workflow-ab-benchmark.ts`","Inferred CLI family: doctor flow via `runDoctor`, `runCopilotDoctor`, `runCodexHooksDoctor` at `src/cli.ts:12` -> `src/doctor.ts`","Inferred CLI family: hook/adapter flow via `handleCodexHook` and `handleCopilotHook` imports at `src/cli.ts:10-11` -> `src/codex-adapter.ts`, `src/copilot-adapter.ts`","Inferred CLI family: MCP/exec flow via `runWrappedCommand` at `src/cli.ts:13` -> `src/exec.ts`","Inferred CLI family: install/config flow via `installCodexHooks` at `src/cli.ts:14` and config imports at `src/cli.ts:9` -> `src/install.ts`, `src/config.ts`","Exact top-level command names and flags are not directly indexed in the retrieved `src/cli.ts` slices; only imported handler functions are directly evidenced."],"files":["src/cli.ts","src/benchmark.ts","src/codex-benchmark.ts","src/copilot-setup.ts","src/suite-benchmark.ts","src/workflow-ab-benchmark.ts","src/doctor.ts","src/copilot-adapter.ts","src/codex-adapter.ts","src/exec.ts","src/install.ts","src/config.ts"],"risks":["Missing direct evidence for exact subcommand names/option schemas in `src/cli.ts`; only handler imports and partial slices were retrieved.","Current command list is inferred from function names, so exact external CLI contract may differ (aliases, defaults, hidden commands).","The indexed evidence suggests broad command coverage but no command tests are referenced from the packet.","Do not assume parser semantics (`commander`/`yargs`) without reading full `src/cli.ts` dispatch blocks.","If `commands` is consumed for production docs, add a follow-up read of full `src/cli.ts` command definitions before publishing."]}
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
| tokenopt | M2-benchmark-modes | tokenopt-codegraph | compile_evidence | overview_contract | no | no | no | 0.556 | 0.625 | 4 | yes | 119756 | 93184 |  | 14462 |  |  | 12964 | 147182 | 53998 |  | 0.103 | 3 | 3 | 0 | 37119 | 62886 |

#### Output: tokenopt-codegraph

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-tokenopt-codegraph-current-2026-06-17\tokenopt-M2-benchmark-modes-tokenopt-codegraph.jsonl

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

- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\tokenopt, task_type=api_flow, budget_tokens=1200, quality_rubric=["maps tradeoff between token cost and signal","covers benchmark and mcp selection","mentions output shape","contains valid compact JSON"], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: entrypoint_or_owner, flow, source_files, symbols, existing_tests, implementation_ideas, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=api_flow, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls. Do not call shell/read fallback.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"command_list":["tokenopt_compile_evidence(cwd=\"D:\\Personal\\Projects\\tokenopt\", budget_tokens=1200, quality_rubric=[\"maps tradeoff between token cost and signal\",\"covers benchmark and mcp selection\",\"mentions output shape\",\"contains valid compact JSON\"], task=\"Return valid compact JSON only with keys command_list, setup_flow, quality_focus, output_shape. Explain how benchmark, mcp, and codegraph modes are selected today and what each mode should buy as signal/cost tradeoff.\", task_type=\"api_flow\")","codegraph.get_flow_pack(target=\"Return valid compact JSON only with keys command_list, setup_flow, quality_focus, output_shape. Explain how benchmark, mcp, and codegraph modes are selected today and what each mode should buy as signal/cost tradeoff.\", taskType=\"api_flow\", tokenBudget=8000, responseMode=\"agent\", includeSnippets=true, snippetTokenBudget=5000, profile=\"full\")","codegraph.find_tests_for(symbol=\"runFileListCommand\", limit=20)"],"setup_flow":["benchmark mode was selected first: TokenOpt passport classed this as broad_flow with toolProfile=explore and compact budget, which buys coarse routing/coverage signaling with low token spend before deeper evidence.","mcp mode is the required transport boundary (no shell/read fallback), buying strict execution limits and reproducibility; cost is low but signal is only as good as indexed tool contracts.","codegraph mode was then selected as evidence provider because taskType=api_flow and pack returned sufficientForAnswer=true with direct symbols/files/call edges; this buys high-source precision for command/flow claims at higher token/cost.","signal/cost tradeoff: benchmark=lowest token cost per signal (slot checklist, policy), mcp transport=low execution overhead + bounded calls, codegraph=higher token cost per call but much stronger traceability and evidence-grade confidence for symbols and files."],"quality_focus":{"entrypoint_or_owner":"src/mcp.ts is the evidence-backed owner area for the command-list path; core entry chain is collectRepoFiles -> runFileListCommand, with file/list gating via isRepoWideFileListing (src/mcp.ts:2354-2356,2390-2434).","flow":"Observed flow: maybeBuildCommandReplacement/isRepoWideFileListing gate on `rg --files`, then collectRepoFiles invokes runFileListCommand, which filters and normalizes files and returns file/diagnostics payload (src/mcp.ts:2354-2356,2390-2434,2420-2434). Hook/canary builders are in src/doctor.ts:236-252 and src/shell.ts:10-12.","source_files":["src/mcp.ts","src/doctor.ts","src/shell.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/install.ts"],"symbols":["runFileListCommand","collectRepoFiles","isRepoWideFileListing","filterRepoInventoryFiles","runFileListCommand.lambda2432_38","buildCodexCanaryCommand","buildNodeCommand","checkCommand","commandLooksUnavailable","runCodexHooksDoctor","handleCodexHook","handleCopilotHook","buildCodexHooksConfig"],"existing_tests":[],"existing_coverage":["src/mcp.ts:2354-2356 defines isRepoWideFileListing() (rg --files guard).","src/mcp.ts:2390-2434 includes collectRepoFiles/runFileListCommand interactions.","src/mcp.ts:2420-2434 defines filterRepoInventoryFiles() and runFileListCommand().","src/doctor.ts:236-252 defines buildCodexCanaryCommand() and env-sourced codex command composition.","src/shell.ts:10-12 defines buildNodeCommand() and shell quote-path assembly."],"implementation_ideas":["No implementation change requested for this task; keep this as a mode-selection/process calibration only."],"validation_commands":["npm test"],"tests_to_add":[],"risks":["find_tests_for(runFileListCommand) returned totalCount=0, so target-specific tests are not indexed.","TokenOpt passport noted missing exact entrypoint/business-state details; avoid overclaiming beyond indexed evidence.","Several call edges are confidence-weak (0.4), so cross-module behavior is partly inferential.","No direct benchmark/mcp-mode documentation exists in-repo for canonical policy; selection is inferred from tool outputs.","No shell/read fallback was used, so runtime-only behavior is not validated here."]},"output_shape":"compact JSON only; top-level keys must be exactly command_list, setup_flow, quality_focus, output_shape. Keep compact no extra keys, <=7000 chars, max existing_coverage<=5, files<=12, symbols<=16, tests_to_add<=5, risks<=5."}
```

Idea checks: 5/8 (0.625)

Critical misses: file:README.md, file:src/suite-benchmark.ts, symbol:runSuiteBenchmarkCommand, symbol:buildSuitePrompt

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
| tokenopt | M3-router-safety | tokenopt-codegraph | direct_narrow | trace_proof | no | yes | no | 0.400 | 0.625 | 6 | yes | 108451 | 81024 |  | 10711 |  |  | 9311 | 128473 | 47449 |  | 0.084 | 3 | 3 | 0 | 70237 | 49813 |

#### Output: tokenopt-codegraph

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-tokenopt-codegraph-current-2026-06-17\tokenopt-M3-router-safety-tokenopt-codegraph.jsonl

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

- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\tokenopt, task_type=api_flow, budget_tokens=1200, quality_rubric=["names routing inputs and outputs","describes fallback policy","mentions unknowns explicitly","contains valid compact JSON"], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: entrypoint_or_owner, flow, source_files, symbols, existing_tests, implementation_ideas, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=api_flow, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls. Do not call shell/read fallback.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"modes":[{"entrypoint_or_owner":"`evaluatePrompt` calls `containsInjectedTokenOptInstructionPaste` (`src/policy-core.ts:64`), so the guard/router decision is anchored there; the checker is defined at `src/policy-core.ts:352-361`.","flow":"Input path is `string` prompt text -> `containsInjectedTokenOptInstructionPaste(text): boolean` (`src/policy-core.ts:352-361`) -> instruction policy path is selected by `emitTokenOptInstructions(target): string` (`src/instruction-audit.ts:51-110`).","source_files":["src/policy-core.ts:64","src/policy-core.ts:352-361","src/instruction-audit.ts:51-110"],"symbols":["evaluatePrompt","containsInjectedTokenOptInstructionPaste","emitTokenOptInstructions","DEFAULT_MIN_TOKENS","BenchmarkUsageTokens","buildNeighborTokens"],"existing_tests":["No directly indexed unit/integration tests for these symbols; only `npm test` appears as expected verification (`CodeGraph taskOracle.expectedVerification.commands`)."],"implementation_ideas":["Add targeted tests around `containsInjectedTokenOptInstructionPaste` and `emitTokenOptInstructions` (files `src/policy-core.ts`, `src/instruction-audit.ts`) to lock routing behavior and prevent accidental regex/template regressions; validate with `npm test`.","Risk/tradeoff: adding tests increases maintenance cost when instruction text or regex list changes frequently but improves guard confidence for safety-critical routing."],"validation_commands":["npm test"],"risks":["`evaluatePrompt` branching is not fully shown in indexed slices; current evidence only confirms a caller edge to the guard, not all downstream actions."]}],"token_guardrails":["`containsInjectedTokenOptInstructionPaste(text)` applies `.some((pattern) => pattern.test(text))` over six regexes (`src/policy-core.ts:353-360`), so routing is boolean allowlist/denylist-based for injected-tokenopt phrases.","Inputs are raw prompt text and outputs are boolean match/no-match, which is the first safety gate visible for routing (`src/policy-core.ts:352-361`).","Guard patterns are concrete phrases/blocks like `Project instruction injected by TokenOpt setup`, `ContextGate is active as an evidence broker`, and `actualPromptSentToCodex` (`src/policy-core.ts:354-360`).","No explicit sanitization or transformation is visible in this slice; behavior depends on pattern matching only for safety inputs at this node."],"fallback_policy":["`emitTokenOptInstructions` has explicit target branches in `src/instruction-audit.ts:51-66`: `copilot-path` and `copilot-agent` route to specialized instruction payloads.","For `copilot-agent`, fallback-avoidance is built in via a fixed tool allow-list block (`tokenopt/contextgate_get_context`, `tokenopt/tokenopt_compile_evidence`, `tokenopt/tokenopt_search`, `tokenopt/tokenopt_read_file`, `search`, `read`) in `src/instruction-audit.ts:64-67`, which constrains downstream tool behavior.","The remaining path (`emitTokenOptInstructions` default/other targets) falls back to generic `ContextGate MCP Usage` guidance (`src/instruction-audit.ts:95-110`), preventing uncontrolled template expansion.","For prompt safety gate, no-pattern result is the `.some(...)` default `false` path (`src/policy-core.ts:352-361`), so the prompt is not treated as injection-matched.","Current evidence does not show any additional dynamic fallback layer beyond these function-level branches; no alternate exception/recovery handler is indexed."] ,"unknowns":["No concrete source slice was returned for `evaluatePrompt` body, so fallback actions after the guard decision are partially unknown.","No direct tests were indexed for `containsInjectedTokenOptInstructionPaste` or `emitTokenOptInstructions`; only `npm test` is suggested in CodeGraph expected verification.","Router ownership is inferred from call-edge evidence, not from explicit ownership metadata in code.","The guard is regex-centric; false-positive/false-negative behavior/risk is not measured in indexed evidence.","No additional endpoint/API router path was found for this task in the packet (`impactedEndpoints: []`)."]}
```

Idea checks: 5/8 (0.625)

Critical misses: file:src/router.ts, file:src/suite-benchmark.ts, file:src/workflow-ab-benchmark.ts, symbol:routeTask, symbol:parseWorkflow, term:fallback_after_answerable
