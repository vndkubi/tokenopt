# Context Governor Suite Benchmark

Generated: 2026-06-16T22:48:37.959Z
Suite: mini-tokenopt-natural-comparison 2026-06-16
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: tokenopt-codegraph-natural
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M2-benchmark-modes | tokenopt-codegraph-natural | compile_evidence | overview_contract | no | no | no | 0.778 | 0.375 | 2 | yes | 117659 | 87936 |  | 13585 |  |  | 12008 | 143252 | 55316 |  | 0.141 | 3 | 3 | 0 | 71166 | 49671 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt-codegraph-natural | 1 | 0/1 | 0/1 | 117659 | 117659 | 13585 | 143252 | 55316 | 0.778 | 0.375 | 0.141 | 2.00 | 3.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| investigate | tokenopt-codegraph-natural | 1 | 0/1 | 0/1 | 117659 | 117659 | 13585 | 143252 | 55316 | 0.778 | 0.375 | 0.141 | 2.00 | 3.0 | 0.0 | 49671 |

## Task Details

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
| tokenopt | M2-benchmark-modes | tokenopt-codegraph-natural | compile_evidence | overview_contract | no | no | no | 0.778 | 0.375 | 2 | yes | 117659 | 87936 |  | 13585 |  |  | 12008 | 143252 | 55316 |  | 0.141 | 3 | 3 | 0 | 71166 | 49671 |

#### Output: tokenopt-codegraph-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-M2-tokenopt-codegraph-natural-v7-2026-06-17\tokenopt-M2-benchmark-modes-tokenopt-codegraph-natural.jsonl

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

- Route policy: context-first. This is broad discovery; use one compact context/gap check, then bounded exact followup only for missing evidence. Router reason: Prompt needs broad repository context; compile a compact evidence packet before further exploration.
- Treat this as a normal developer request. The user's prompt, repository instructions, and any active agent instructions remain authoritative.
- Evidence intent for context acquisition only: "Explain how benchmark, mcp, and codegraph modes are selected today and what each mode should buy as signal/cost tradeoff.". Use this semantic code question for context lookup inputs; keep the original user prompt for the final output shape.
- Do not pass output-schema boilerplate, JSON key names, benchmark harness text, or generic words like return/valid/compact as retrieval intent.
- Required evidence slots before final answer: source_files, symbols, risks, entrypoint_or_owner, flow, validation_commands.
- Quality rubric to keep in mind: ["maps tradeoff between token cost and signal","covers benchmark and mcp selection","mentions output shape","contains valid compact JSON"].
- For broad or unknown-owner tasks, a compact context packet around 1200 tokens is usually the cheapest first step when available.
- Because the task is broad, use one compact discovery step before exact source or graph followups.
- Choose the next action by the missing evidence slot, not by a fixed tool script.
- Hard budget: use at most 3 context/source tool calls total. For exact-target or small CLI/code-reading tasks, aim for 1-2 total calls.
- Do not call a source-slice style tool with only a file path and no line range, symbol, or bounded slice hint; failed or unbounded calls still count against the budget.
- If the first evidence pass covers the required slots well enough, answer from it and stop.
- If one important slot is still weak, make one focused bounded followup for that named file, symbol, route, test, business rule, or attachment.
- If quality still depends on graph/source structure, make at most one final structured source followup and then stop.
- Avoid iterative low-level expansion; do not walk command surfaces, file trees, or symbol neighbors beyond the slots required by the prompt.
- Do not spend a separate call only to find a project overview or README when source, package, or context evidence already supports a concise summary.
- Do not duplicate evidence through another provider when the current slices already cover the same files or symbols.
- Shell fallback is disabled in this benchmark mode; unresolved coverage must be stated in the requested JSON shape.
- Use flat strings and short arrays unless the user explicitly requested nested objects.
- Keep the final output compact, syntactically valid JSON, and preserve the requested output contract exactly.
- Preserve requested output format exactly.
```

Final output:
```json
{
  "command_list": [
    "Benchmark mode input is selected in `parseOptions()` with default `modes = [\"baseline\", \"mcp-first\"]`, `--mode all` expanding to `ALL_SUITE_BENCHMARK_MODES`, and CSV parsing via `parseMode` for custom mode sets. [src/suite-benchmark.ts:253-257, 283-290, 150-164]",
    "Execution flow is per `(task, mode)` in `runSuiteBenchmarkCommand`, so every selected mode is exercised independently for each benchmark task. [src/suite-benchmark.ts:172-183, 181-183]",
    "MCP wiring is injected in `runCodexSuiteBenchmark()` based on `usesCodeGraph(mode, task)` and `usesTokenOpt(mode, task)` and passed as `-c mcp_servers.codegraph.*` and/or `-c mcp_servers.tokenopt.*` flags to `npx ... exec --json`. [src/suite-benchmark.ts:464-516, 846-863]"
  ],
  "setup_flow": "Today, benchmark mode selection is done first (CLI/options), then mode application happens in the runner. `runSuiteBenchmarkCommand` builds `modes` from flags and iterates each mode for each selected task; runtime attachment is determined by `usesCodeGraph`/`usesTokenOpt` checks. [src/suite-benchmark.ts:172-183,253-287,846-863] CodeGraph configuration is itself selected by `buildCodeGraphMcpServerConfig()` (env/CLI/root/profile override + task profile fallback) and used only when `usesCodeGraph` is true. [src/suite-benchmark.ts:558-607,622-630,493-506] TokenOpt MCP mode is `lite` by default and `broker` only for `contextgate-natural` and `tokenopt-codegraph-natural`. [src/suite-benchmark.ts:509,508-516] Prewarm is optional and only triggered if a selected mode requires CodeGraph. [src/suite-benchmark.ts:870-877] Risks to cite: a prewarm failure throws and aborts benchmark execution. [src/suite-benchmark.ts:893-896]",
  "quality_focus": [
    "baseline: cheapest, lowest extra signal; neither TokenOpt nor CodeGraph MCP is attached, so signal is primarily base model + prompt. [src/suite-benchmark.ts:856-864]",
    "codegraph / codegraph-only: adds CodeGraph-only evidence (`usesCodeGraph` true, `usesTokenOpt` false), trading higher tool/token overhead for repository-structure/context signal and index/prewarm cost. [src/suite-benchmark.ts:846-857,493-507,870-899]",
    "tokenopt-codegraph / tokenopt-codegraph-natural / tokenopt-codegraph-hybrid: adds both MCP paths (TokenOpt + CodeGraph), highest signal density and highest MCP/tool cost in this harness; adaptive variants still depend on task-driven plan for some gates. [src/suite-benchmark.ts:846-857,493-507,693-714]",
    "mcp-first / mcp-only / contextgate-natural / compiled-hard-gate / router-strict / router-best: today these are TokenOpt-backed (no CodeGraph in this layer), so cost is lower than dual-stack modes but higher than baseline, with contextgate-natural explicitly requesting `broker` mode. [src/suite-benchmark.ts:8-21,846-863,509]",
    "control dial: signal/cost is further tuned by adaptive budgets: `adaptiveCodeGraphBudgetForTask`/`adaptiveQualityCodeGraphBudgetForTask` increase requested graph token budget for tougher task classes (e.g., review_diff 4000, implement 6000, quality floor 7000/9000 for some flows). [src/suite-benchmark.ts:642-663,1342,1344-1355]"
  ],
  "output_shape": "JSON object with exactly four top-level keys: `command_list`, `setup_flow`, `quality_focus`, `output_shape`; primary repository file is `src/suite-benchmark.ts`, and key symbols are `SuiteBenchmarkMode`, `parseOptions`, `runSuiteBenchmarkCommand`, `runCodexSuiteBenchmark`, `usesCodeGraph`, `usesTokenOpt`, `buildCodeGraphMcpServerConfig`, `adaptivePlanForSuiteTask`, `prewarmCodeGraphIfRequested`, `adaptiveCodeGraphBudgetForTask`. Validation command pattern is the `npx` exec assembled in `runCodexSuiteBenchmark` (`exec --json --ephemeral --skip-git-repo-check -C <repo> ... -` with optional MCP config flags). [src/suite-benchmark.ts:1-21,150-164,253-387,464-531,846-877]"
}
```

Idea checks: 3/8 (0.375)

Critical misses: file:README.md, symbol:buildSuitePrompt
