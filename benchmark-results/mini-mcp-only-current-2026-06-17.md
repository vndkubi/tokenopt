# Context Governor Suite Benchmark

Generated: 2026-06-16T23:12:10.310Z
Suite: mini-tokenopt-natural-comparison 2026-06-16
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: mcp-only
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M1-cli-commands | mcp-only | direct_narrow | trace_proof | no | yes | no | 0.333 | 0.500 | 4 | yes | 502372 | 457984 |  | 11603 |  |  | 9406 | 523381 | 65397 |  | 0.051 | 22 | 22 | 0 | 110676 | 237356 |
| tokenopt | M2-benchmark-modes | mcp-only | compile_evidence | overview_contract | no | no | no | 0.667 | 0.375 | 3 | yes | 455023 | 429056 |  | 11034 |  |  | 8154 | 474211 | 45155 |  | 0.148 | 21 | 21 | 0 | 148876 | 145911 |
| tokenopt | M3-router-safety | mcp-only | direct_narrow | trace_proof | no | yes | no | 0.400 | 0.500 | 6 | yes | 590955 | 561024 |  | 13736 |  |  | 11404 | 616095 | 55071 |  | 0.073 | 22 | 22 | 0 | 105790 | 141691 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| mcp-only | 3 | 0/3 | 0/3 | 502372 | 516117 | 12124 | 537896 | 55208 | 0.467 | 0.458 | 0.090 | 4.33 | 21.7 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| build_handoff | mcp-only | 1 | 0/1 | 0/1 | 502372 | 502372 | 11603 | 523381 | 65397 | 0.333 | 0.500 | 0.051 | 4.00 | 22.0 | 0.0 | 237356 |
| investigate | mcp-only | 2 | 0/2 | 0/2 | 522989 | 522989 | 12385 | 545153 | 50113 | 0.534 | 0.438 | 0.110 | 4.50 | 21.5 | 0.0 | 143801 |

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
| tokenopt | M1-cli-commands | mcp-only | direct_narrow | trace_proof | no | yes | no | 0.333 | 0.500 | 4 | yes | 502372 | 457984 |  | 11603 |  |  | 9406 | 523381 | 65397 |  | 0.051 | 22 | 22 | 0 | 110676 | 237356 |

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-mcp-only-current-2026-06-17\tokenopt-M1-cli-commands-mcp-only.jsonl

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

- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\tokenopt, task_type=build_handoff, and budget_tokens around 1200.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{
  "project_overview": "TokenOpt is a TypeScript project providing a Codex-first, reusable context-budget middleware for coding agents, distributed as an `@tokenopt/cli` package (`v0.1.0`) with a core policy engine kept independent from specific repository indexers.",
  "commands": {
    "status": "unresolved",
    "reason": "TokenOpt followups returned repository metadata and file inventory, but did not return `src/cli.ts` contents, so top-level CLI commands could not be extracted from source in this session."
  },
  "files": [
    "src/cli.ts",
    "README.md",
    "package.json",
    "package-lock.json"
  ],
  "risks": [
    "Command inventory is incomplete because `src/cli.ts` line-level evidence could not be read.",
    "Any inferred command list from package scripts alone may be incorrect (`build`, `doctor`, `test` appear as npm scripts, not proven top-level CLI subcommands).",
    "Any follow-up work should re-run exact TokenOpt followups for `src/cli.ts` slices before relying on command coverage."
  ]
}
```

Idea checks: 4/8 (0.500)

Critical misses: symbol:helpText, term:benchmark, term:hook, term:mcp

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
| tokenopt | M2-benchmark-modes | mcp-only | compile_evidence | overview_contract | no | no | no | 0.667 | 0.375 | 3 | yes | 455023 | 429056 |  | 11034 |  |  | 8154 | 474211 | 45155 |  | 0.148 | 21 | 21 | 0 | 148876 | 145911 |

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-mcp-only-current-2026-06-17\tokenopt-M2-benchmark-modes-mcp-only.jsonl

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

- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\tokenopt, task_type=api_flow, and budget_tokens around 1200.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{
  "command_list": [
    "tokenopt_compile_evidence(cwd=D:/Personal/Projects/tokenopt, task_type=api_flow, budget_tokens=1200, task=<full user request>)",
    "tokenopt_search(path=., pattern=benchmark)",
    "tokenopt_read_file(path=README.md, startLine=1, maxLines=80)",
    "tokenopt_read_file(path=src/benchmark.ts, startLine=1, maxLines=220)",
    "tokenopt_read_file(path=src/codex-benchmark.ts, startLine=1, maxLines=240)",
    "tokenopt_search(path=src, pattern=mcp)",
    "tokenopt_search(path=., pattern=rephrase)"
  ],
  "setup_flow": {
    "today_selection_state": "Not fully determinable from packet-grounded evidence; answerable=false because exact source matches for the requested routing/symbol/anchor are missing.",
    "what_is_confirmed_today": "Only repository-shape and candidate files are confirmed (e.g., `package.json`, `README.md`, `src/benchmark.ts`, `src/codex-benchmark.ts`, `src/codex-adapter.ts`, `src/config.ts`) and a summary that this repo is a Codex-first CLI with core policy kept independent from CodeGraph indexers.",
    "how_modes_selected_today": {
      "benchmark": "Selection logic path not found in provided evidence (no exact mode dispatch snippet surfaced).",
      "mcp": "No direct evidence snippet was surfaced for `mcp` mode selection in this packet.",
      "codegraph": "No direct evidence snippet was surfaced for `codegraph` mode selection in this packet."
    },
    "citations": [
      "README.md (evidence claim: mode/positioning context)",
      "package.json (repo packaging context)",
      "src/benchmark.ts (candidate benchmark-related implementation path)",
      "src/codex-benchmark.ts (candidate benchmark-adapter path)",
      "src/codex-adapter.ts (candidate adapter path)",
      "src/config.ts (candidate config path)"
    ],
    "resolution_status": "Unresolved: exact mode-selection behavior requires additional allowed TokenOpt followups against the exact matching symbols/routes/files/tests."
  },
  "quality_focus": [
    {
      "mode": "benchmark",
      "selection_signal_goal": "Should be selected when behavioral ground-truth on end-to-end runs is the priority.",
      "today_confidence": "unknown (unverified in evidence)",
      "signal_benefit": "High confidence in execution-path outcomes, output shape stability, and budget-policy observability.",
      "cost_profile": "Higher token/use cost than lightweight checks due richer traces and output volume."
    },
    {
      "mode": "mcp",
      "selection_signal_goal": "Should be selected when external protocol/tool-call fidelity matters (adapter boundary behavior).",
      "today_confidence": "unknown (unverified in evidence)",
      "signal_benefit": "Good signal for protocol adherence and interaction correctness, typically narrower than full benchmark captures.",
      "cost_profile": "Moderate token/use cost; mostly metadata and contract-facing call evidence."
    },
    {
      "mode": "codegraph",
      "selection_signal_goal": "Should be selected when structural/code-level reachability and symbol-graph evidence is needed.",
      "today_confidence": "unknown (unverified in evidence)",
      "signal_benefit": "High structural signal for architectural risk, cross-file causality, and latent dependency effects.",
      "cost_profile": "Highest precompute/maintenance cost when graph indexes are built; can amortize if reused."
    },
    {
      "overall_tradeoff_summary": "Given current evidence, a pragmatic policy is: default to benchmark for high-signal correctness, fallback to mcp for medium-signal interface/adapter checks, and use codegraph only when graph-level risk/reasoning value exceeds its build/query cost."
    }
  ],
  "output_shape": {
    "requested_format": "Strict JSON with keys command_list, setup_flow, quality_focus, output_shape",
    "mode_object_schema": {
      "mode": "benchmark|mcp|codegraph",
      "selection_gate": "unknown|explicit_rule|config_flag|env_flag|route_name",
      "signal": "what is being gained",
      "cost": "token and runtime burden",
      "evidence": [
        "repository-relative file paths and evidence IDs"
      ]
    }
  }
}
```

Idea checks: 3/8 (0.375)

Critical misses: file:src/suite-benchmark.ts, symbol:runSuiteBenchmarkCommand, symbol:buildSuitePrompt

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
| tokenopt | M3-router-safety | mcp-only | direct_narrow | trace_proof | no | yes | no | 0.400 | 0.500 | 6 | yes | 590955 | 561024 |  | 13736 |  |  | 11404 | 616095 | 55071 |  | 0.073 | 22 | 22 | 0 | 105790 | 141691 |

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-mcp-only-current-2026-06-17\tokenopt-M3-router-safety-mcp-only.jsonl

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

- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\tokenopt, task_type=api_flow, and budget_tokens around 1200.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{"modes":[{"mode":"review","evidence":["test/mvp-router-shadow-compressors.test.mjs:14"]},{"mode":"debug","evidence":["test/mvp-router-shadow-compressors.test.mjs:14"]},{"mode":"refactor","evidence":["test/mvp-router-shadow-compressors.test.mjs:14"]},{"mode":"exact","evidence":["test/mvp-router-shadow-compressors.test.mjs:14"]},{"mode":"small-repo-bypass","evidence":["test/mvp-router-shadow-compressors.test.mjs:14","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:38"]}],"token_guardrails":[{"guard":"Router is rule-based with negative controls","evidence":["TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:38","src/router.ts"]},{"guard":"Router changes are constrained by route-bucket calibration and benchmark evidence","evidence":["TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:463","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:485","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:526","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:507"]}],"fallback_policy":[{"policy":"No explicit fallback branch or default-route behavior is directly surfaced in the retrievable source lines.","evidence":["src/router.ts","test/mvp-router-shadow-compressors.test.mjs"]},{"policy":"Special-case routing path appears in the documented task buckets via the \"small-repo bypass\" route class.","evidence":["test/mvp-router-shadow-compressors.test.mjs:14","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:38","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:463"]},{"policy":"Research evidence references runtime-determined fetches not being pre-fetched, implying no speculative fallback path is used there.","evidence":["research/contextgate-complete-research-synthesis.md:274"]}],"unknowns":[{"item":"Exact router guards, branch conditions, and fallback handler code are not readable with current TokenOpt followups (read calls returned metadata-only headers).","evidence":["src/router.ts","tokenopt read output: no line body returned"]},{"item":"Exact decision order and safety checks across request modes are therefore not fully provable from this packet.","evidence":["src/router.ts","test/mvp-router-shadow-compressors.test.mjs","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md"]}]}
```

Idea checks: 4/8 (0.500)

Critical misses: file:src/suite-benchmark.ts, file:src/workflow-ab-benchmark.ts, symbol:routeTask, symbol:parseWorkflow, term:fallback_after_answerable, term:tool policy
