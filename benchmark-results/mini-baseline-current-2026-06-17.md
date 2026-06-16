# Context Governor Suite Benchmark

Generated: 2026-06-16T22:58:16.986Z
Suite: mini-tokenopt-natural-comparison 2026-06-16
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: baseline
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M1-cli-commands | baseline | coding_coverage | coding_coverage | no | no | yes | 0.833 | 0.375 | 1 | yes | 147920 | 130048 | saved 0.0% | 6647 | saved 0.0% | saved 0.0% | 5599 | 160166 | 30118 | 0.000 | 0.277 | 10 | 0 | 10 | 18180 | 209989 |
| tokenopt | M2-benchmark-modes | baseline | compile_evidence | overview_contract | no | no | no | 0.667 | 0.250 | 2 | no | 660982 | 565248 | saved 0.0% | 14638 | saved 0.0% | saved 0.0% | 11095 | 686715 | 121467 | 0.000 | 0.055 | 22 | 0 | 22 | 702845 | 112698 |
| tokenopt | M3-router-safety | baseline | direct_narrow | trace_proof | no | no | no | 0.600 | 0.500 | 4 | yes | 671532 | 557440 | saved 0.0% | 15571 | saved 0.0% | saved 0.0% | 12559 | 699662 | 142222 | 0.000 | 0.042 | 28 | 0 | 28 | 756897 | 100861 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| baseline | 3 | 1/3 | 0/3 | 660982 | 493478 | 12285 | 515514 | 97936 | 0.700 | 0.375 | 0.125 | 2.33 | 0.0 | 20.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| build_handoff | baseline | 1 | 1/1 | 0/1 | 147920 | 147920 | 6647 | 160166 | 30118 | 0.833 | 0.375 | 0.277 | 1.00 | 0.0 | 10.0 | 209989 |
| investigate | baseline | 2 | 0/2 | 0/2 | 666257 | 666257 | 15105 | 693189 | 131845 | 0.633 | 0.375 | 0.049 | 3.00 | 0.0 | 25.0 | 106780 |

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
| tokenopt | M1-cli-commands | baseline | coding_coverage | coding_coverage | no | no | yes | 0.833 | 0.375 | 1 | yes | 147920 | 130048 | saved 0.0% | 6647 | saved 0.0% | saved 0.0% | 5599 | 160166 | 30118 | 0.000 | 0.277 | 10 | 0 | 10 | 18180 | 209989 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-baseline-current-2026-06-17\tokenopt-M1-cli-commands-baseline.jsonl

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

- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```json
{"project_overview":"TokenOpt is a TypeScript CLI that initializes config, installs/handles Codex/Copilot hooks, runs wrapped commands, executes benchmark suites, manages instruction packs, launches MCP, generates reports, and runs doctor checks through a single dispatcher in `src/cli.ts`, delegating work to specialized modules in `src/`.","commands":[{"name":"help","aliases":["--help","-h"]},{"name":"init"},{"name":"install","subcommands":["codex","copilot"]},{"name":"setup","subcommands":["copilot"]},{"name":"hook","subcommands":["codex","copilot"]},{"name":"exec"},{"name":"mcp"},{"name":"benchmark","subcommands":["workflow-ab","suite","codex-daily","daily","(default-to-runBenchmarkCommand)"]},{"name":"instructions","subcommands":["audit","emit","graph","prompts","install-graph","install-prompts","install"]},{"name":"report"},{"name":"doctor","subcommands":["codex-hooks","copilot","(default)"]}],"files":["src/cli.ts","src/config.ts","src/install.ts","src/copilot-setup.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/exec.ts","src/mcp.ts","src/benchmark.ts","src/codex-benchmark.ts","src/suite-benchmark.ts","src/workflow-ab-benchmark.ts","src/instruction-audit.ts","src/report.ts","src/doctor.ts","src/observability.ts"],"risks":["Manual string-based dispatch in `src/cli.ts` can silently drift from user-facing help and is prone to argument edge-case regressions when commands are renamed or expanded.","The `benchmark` branch forwards most subcommands to `runBenchmarkCommand`, so top-level validation and discoverability of supported `benchmark` forms are partially delegated and not fully explicit in the dispatcher.","`mcp` mode parsing supports `lite|full|broker` while help text only advertises `lite|full`, creating documentation/runtime contract mismatch.","Hook subcommands are hard-coded to exactly four event names, so any new hook event type requires code+docs changes together or runtime errors.","`init` checks file existence and exits success on already-existing config, which is safe but may hide configuration drift if users expect initialization to overwrite." ]}
```

Idea checks: 3/8 (0.375)

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
| tokenopt | M2-benchmark-modes | baseline | compile_evidence | overview_contract | no | no | no | 0.667 | 0.250 | 2 | no | 660982 | 565248 | saved 0.0% | 14638 | saved 0.0% | saved 0.0% | 11095 | 686715 | 121467 | 0.000 | 0.055 | 22 | 0 | 22 | 702845 | 112698 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-baseline-current-2026-06-17\tokenopt-M2-benchmark-modes-baseline.jsonl

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

- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```
{
  "command_list": [
    "MCP surface: `tokenopt mcp --mode <lite|full|broker>` (legacy help text also mentions lite/full, but parser accepts broker in CLI code) -> `src/cli.ts` + `src/mcp.ts`.",
    "Daily acquisition benchmark: `tokenopt benchmark --task <task> --mode <baseline|compiled-packet|compiled-shadow-gate|compiled-packet+gate|router-best|router-shadow-gate|router-shadow-gate+compressors|gold-packet|oracle-packet|all>` via `src/benchmark.ts` (`runBenchmarkCommand`, `parseBenchmarkOptions`).",
    "Codex-integrated benchmark: `tokenopt benchmark codex-daily --repo <repo> --mode <baseline|tokenopt-mcp|tokenopt-mcp+gate|tokenopt-mcp-instructed|all>` via `src/codex-benchmark.ts`.",
    "Suite benchmark (where CodeGraph modes are exposed): `tokenopt benchmark suite --suite <json> --repo <repo> --mode <baseline|codegraph|codegraph-only|tokenopt-only|tokenopt-codegraph|tokenopt-codegraph-natural|tokenopt-codegraph-adaptive|tokenopt-codegraph-hybrid|natural|contextgate|contextgate-natural|mcp-first|mcp-only|compiled-hard-gate|router-strict|router-best|all>` via `src/suite-benchmark.ts`."
  ],
  "setup_flow": [
    {
      "step": "Mode selection is command-anchored. `src/cli.ts` parses mcp mode flags and benchmark subcommands; benchmark suites and Codex daily benchmarks each have their own mode parsers in `src/suite-benchmark.ts` and `src/codex-benchmark.ts`.",
      "sources": ["[src/cli.ts](src/cli.ts)", "[src/suite-benchmark.ts](src/suite-benchmark.ts)", "[src/codex-benchmark.ts](src/codex-benchmark.ts)"]
    },
    {
      "step": "For MCP runtime, `--mode` is mapped to `lite|full|broker`, stored in `TOKENOPT_MCP_MODE`, and normalized in `src/mcp.ts` to one of those modes (defaulting to `lite` when unset/invalid/omitted).",
      "sources": ["[src/cli.ts](src/cli.ts)", "[src/mcp.ts](src/mcp.ts)"]
    },
    {
      "step": "Suite benchmark mode parsing applies explicit aliases (`tokenopt+codegraph` → `tokenopt-codegraph`, `compiled-packet`/`compiled-packet+gate` are legacy, etc.), then `usesCodeGraph`, `usesTokenOpt`, and `shouldDisableShell` decide which MCP servers and shell controls are injected for each task.",
      "sources": ["[src/suite-benchmark.ts](src/suite-benchmark.ts)"]
    },
    {
      "step": "CodeGraph MCP source is selected from explicit env (`TOKENOPT_CODEGRAPH_CLI`), `TOKENOPT_CODEGRAPH_ROOT`, local sibling checkout (`../code-graph` or `../codegraph`), then `codegraph` PATH fallback; suite mode controls whether this MCP is active and whether shell is disabled.",
      "sources": ["[src/suite-benchmark.ts](src/suite-benchmark.ts)", "[README.md](README.md)"]
    },
    {
      "step": "Codex daily benchmark modes (`tokenopt-mcp*`) explicitly disable Codex shell (`--disable shell_tool`) and inject `tokenopt` MCP args; baseline leaves normal behavior.",
      "sources": ["[src/codex-benchmark.ts](src/codex-benchmark.ts)"]
    }
  ],
  "quality_focus": {
    "benchmark_modes": [
      {
        "mode": "baseline",
        "selection_signal": "no extra evidence gate; direct tool use.",
        "cost_signal_tradeoff": "maximizes raw flexibility/coverage but pays for broad exploration by default. This is the cost-heavy control point used as reference in rows and deltas.",
        "source": "[src/benchmark.ts](src/benchmark.ts)"
      },
      {
        "mode": "router-best / compiled* / tokenopt-*",
        "selection_signal": "TokenOpt packet first (compiled evidence + routing contract), then bounded followups only.",
        "cost_signal_tradeoff": "intended to cut repeated broad evidence replay and lower answer synthesis cost; tradeoff is extra compile-and-gate step and stricter output contract.",
        "source": "[src/benchmark.ts](src/benchmark.ts), [src/codex-benchmark.ts](src/codex-benchmark.ts), [PROMPT_PLAYBOOK.md](PROMPT_PLAYBOOK.md)"
      },
      {
        "mode": "suite modes `mcp-first`, `mcp-only`, `compiled-hard-gate`, `router-strict`, `router-best`",
        "selection_signal": "route control in suite runner (`shouldDisableShell`, `routeTask`, `adaptivePlan` in suite logic) determines whether shell fallback is allowed.",
        "cost_signal_tradeoff": "`router-best` and strict modes can disable shell for many tasks to prevent double-spend; this is the mechanism to recover from TokenOpt-first overhead.",
        "source": "[src/suite-benchmark.ts](src/suite-benchmark.ts)"
      }
    ],
    "mcp_modes": [
      {
        "mode": "lite",
        "selection_signal": "compact evidence-first entrypoint with broker + bounded search/read primitives.",
        "cost_signal_tradeoff": "smallest MCP schema overhead and token footprint; lower signal depth than full.",
        "source": "[src/mcp.ts](src/mcp.ts)", "[README.md](README.md)"
      },
      {
        "mode": "full",
        "selection_signal": "same core evidence tools + command execution/project facts/JVM+review helpers/symbol/test/impact/failure tools.",
        "cost_signal_tradeoff": "higher potential signal for commanding and coding/review tasks, at extra token/schema cost; intended for workflows that need those helpers.",
        "source": "[src/mcp.ts](src/mcp.ts)", "[README.md](README.md)"
      },
      {
        "mode": "broker",
        "selection_signal": "ContextGate-only natural entrypoint (`contextgate_get_context`) with no low-level TokenOpt primitives.",
        "cost_signal_tradeoff": "lowest context/tool surface; best when caller wants only routed broker-level control and no direct search/read primitives from MCP.",
        "source": "[src/mcp.ts](src/mcp.ts)"
      }
    ],
    "codegraph_modes": [
      {
        "mode": "codegraph-only",
        "selection_signal": "CodeGraph evidence path only, shell off.",
        "cost_signal_tradeoff": "strong structural/code ownership signal from graph evidence, minimal TokenOpt overhead; no TokenOpt routing.
",
        "source": "[src/suite-benchmark.ts](src/suite-benchmark.ts)"
      },
      {
        "mode": "tokenopt-codegraph",
        "selection_signal": "TokenOpt + CodeGraph together, shell off.",
        "cost_signal_tradeoff": "strongest combined routing+graph signal (coverage slots + compact graph evidence), with higher setup/tooling complexity and higher measured cost potential.",
        "source": "[src/suite-benchmark.ts](src/suite-benchmark.ts)", "[PROMPT_PLAYBOOK.md](PROMPT_PLAYBOOK.md)"
      },
      {
        "mode": "tokenopt-codegraph-natural",
        "selection_signal": "TokenOpt broker-first + CodeGraph, route-aware bounded prompt guidance.",
        "cost_signal_tradeoff": "intended as production-like first-pass route with lower risk of double-spend than strict fixed-sequence flows.",
        "source": "[src/suite-benchmark.ts](src/suite-benchmark.ts)", "[PROMPT_PLAYBOOK.md](PROMPT_PLAYBOOK.md)"
      },
      {
        "mode": "tokenopt-codegraph-adaptive",
        "selection_signal": "Task-family policy route: e.g., TokenOpt-only for review/security/missing-artifact, TokenOpt+CodeGraph compact for flow/implement/refactor.",
        "cost_signal_tradeoff": "adaptive attempt to buy signal where needed while avoiding full-mode spend on exact/low-surface tasks.",
        "source": "[src/suite-benchmark.ts](src/suite-benchmark.ts)", "[PROMPT_PLAYBOOK.md](PROMPT_PLAYBOOK.md)"
      },
      {
        "mode": "tokenopt-codegraph-hybrid",
        "selection_signal": "CodeGraph-first with bounded fallback when unavailable or incomplete.",
        "cost_signal_tradeoff": "higher resilience but extra fallback steps/calls; used mainly for robustness checks.",
        "source": "[src/suite-benchmark.ts](src/suite-benchmark.ts)", "[PROMPT_PLAYBOOK.md](PROMPT_PLAYBOOK.md)"
      }
    ]
  },
  "output_shape": {
    "what_to_compare_today": [
      {
        "surface": "suite benchmark",
        "rows": [
          "repo/task/mode",
          "acquisitionMode/evidenceContract/doubleSpend (from decoded packet/route metadata)",
          "usage metrics (input/output/reasoning/raw/fresh)",
          "qualityScore, ideaScore, tool calls, mcpCalls, shellCalls",
          "answerable packet/fallback behavior and raw log paths"
        ],
        "source": "[src/suite-benchmark.ts](src/suite-benchmark.ts)"
      },
      {
        "surface": "codex-daily benchmark",
        "rows": [
          "mode per task",
          "tool calls + mcpCalls + shellCalls",
          "usage (input/cached/output/reasoning)",
          "answerablePackets and fallbackAfterAnswerable"
        ],
        "source": "[src/codex-benchmark.ts](src/codex-benchmark.ts)"
      },
      {
        "surface": "daily acquisition benchmark",
        "rows": [
          "quality/checks/answerable for baseline vs compiled/router variants",
          "toolCalls/mcpCalls/shellCalls",
          "estimated token totals and savings-like deltas"
        ],
        "source": "[src/benchmark.ts](src/benchmark.ts)"
      }
    ],
    "decision_summary": "Use `output_shape` for each mode to verify the requested tradeoff: mode should increase packet/tool evidence quality only if it lowers redundant search/read cost and avoids shell fallback; if a mode keeps asking for broad shell after answerable packets, that is the anti-pattern that these mode choices are trying to avoid in today’s runner setup."
  }
}
```

Idea checks: 2/8 (0.250)

Critical misses: symbol:runSuiteBenchmarkCommand, symbol:buildSuitePrompt

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
| tokenopt | M3-router-safety | baseline | direct_narrow | trace_proof | no | no | no | 0.600 | 0.500 | 4 | yes | 671532 | 557440 | saved 0.0% | 15571 | saved 0.0% | saved 0.0% | 12559 | 699662 | 142222 | 0.000 | 0.042 | 28 | 0 | 28 | 756897 | 100861 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-baseline-current-2026-06-17\tokenopt-M3-router-safety-baseline.jsonl

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

- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```json
{"modes":[{"name":"route_task_classes","kind":"router","items":["needs_input_bypass","small_repo_bypass","review_diff","coding_coverage","debug_runtime","refactor_scope","exact_symbol","security_audit","broad_flow"],"actionValues":["compile","bypass","exact_route"],"safety":"Router emits RouteDecision with both taskClass and RouteAction, and attaches fallbackReason when route cannot proceed normally.","sources":["src/router.ts","src/types.ts"]},{"name":"playbook_modes","kind":"evidence_budgets","items":[{"name":"missing_artifact","maxTotalActions":0},{"name":"ask_or_bypass","maxTotalActions":0},{"name":"coding_coverage","maxMcpCalls":2,"maxShellCalls":0,"maxFileReads":1,"maxFollowups":1,"maxTotalActions":2},{"name":"tracebug_direct","maxMcpCalls":1,"maxShellCalls":0,"maxFileReads":1,"maxFollowups":1,"maxTotalActions":2},{"name":"failure_packet","maxShellCalls":1},{"name":"review_bounded","maxShellCalls":0,"maxFileReads":3,"maxFollowups":3},{"name":"broad_compile","maxShellCalls":0,"maxFileReads":2,"maxTotalActions":3},{"name":"security_audit","maxShellCalls":0,"maxFileReads":2}],"safety":"These mode budgets enforce bounded follow-up behavior in fallback/evidence flows.","sources":["src/playbooks.ts"]},{"name":"suite_modes","kind":"benchmark","items":[{"name":"compiled-hard-gate","shell":"disabled","fallback":"hard no-tool-after-answerable enforced in prompt/policy path"},{"name":"mcp-first","shell":"conditional","fallback":"shell fallback only after exact TokenOpt followups fail"},{"name":"router-strict","shell":"disabled","fallback":"exact followup constraints injected in mode prompt"},{"name":"router-best","shell":"disabled","fallback":"exact followup constraints injected in mode prompt"},{"name":"mcp-only","shell":"disabled","fallback":"mcp-only execution path"},{"name":"codegraph-only","shell":"disabled","fallback":"codegraph-only execution path"},{"name":"tokenopt-codegraph","shell":"disabled","fallback":"tokenopt-codegraph execution path"},{"name":"tokenopt-codegraph-natural","shell":"disabled","fallback":"tokenopt-codegraph-natural execution path"}],"safety":"Mode switches directly change which tools/fallbacks are allowed.","sources":["src/suite-benchmark.ts"]},{"name":"mcp_modes","kind":"tool_surface","items":[{"name":"lite","tools":["contextgate_get_context","tokenopt_compile_evidence","tokenopt_search","tokenopt_read_file"]},{"name":"full","tools":["contextgate_get_context","tokenopt_compile_evidence","tokenopt_search","tokenopt_read_file"],"notes":"adds privileged tools such as run_command/project_facts/impact/searching/trace"},{"name":"broker","tools":["contextgate_get_context","tokenopt_compile_evidence"]}],"safety":"Tool availability and therefore fallback reach is constrained by MCP mode.","sources":["src/mcp.ts"]}],"token_guardrails":[{"name":"policy_defaults","items":{"enabled":true,"maxFileReadBytes":96000,"maxCommandOutputChars":16000,"denyGeneratedReads":true,"denyLockfileReads":true,"broadSearch":{"mode":"deny","maxResults":80},"expensiveTests":{"mode":"rewrite","targetedHint":"configured"},"answerabilityGate":{"mode":"hard","logShadowDecisions":true}},"sources":["src/config.ts"]},{"name":"pre_tool_guardrails","items":["Secrets in prompt are denied","Injected TokenOpt instructions in prompt are denied","Broad search patterns (e.g., recursive rg/find/ls -R/grep -R broad forms) are blocked unless allowed by answerability/shadow mode","Read targets blocked when path is generated, lockfile, or too large for maxFileReadBytes","Expensive tests are rewritten when rewrite mode is set"],"sources":["src/policy-core.ts","src/shell.ts"]},{"name":"post_tool_guardrails","items":["Command output is compressed/truncated by maxCommandOutputChars","Tool output artifacts are persisted for evidence when large"],"sources":["src/policy-core.ts","src/mcp.ts"]}],"fallback_policy":[{"name":"compile_evidence_fallbacks","items":["compileEvidenceTool computes `recommended_next_action` and `max_additional_calls`","answerable packet => max_additional_calls=0","review_diff => max_additional_calls=2","coding_coverage/write_unittest => max_additional_calls=1","others default => up to 3","needs_input_bypass => 0"],"sources":["src/mcp.ts"]},{"name":"answerable_followup_gate","items":["maybeGateAfterAnswerable blocks any follow-up when answerability state active and max_additional_calls <= 0","message directs immediate answer using compiled evidence packet","hard/shadow mode controls deny/context behavior for would-be blocked calls"],"sources":["src/mcp.ts","src/evidence-state.ts","src/hard-gate.ts"]},{"name":"broad_followup_shadow_logic","items":["shadow-gate marks wouldDeny for broad exploratory calls when packet is answerable unless exact-read pattern","hard-gate turns those into deny in production mode"],"sources":["src/shadow-gate.ts","src/hard-gate.ts","test/mvp-router-shadow-compressors.test.mjs"]},{"name":"fallback_metadata","items":["Suite route metadata emits fallback_reason and acquisition_mode","doubleSpend is detected when broad/repo-wide packet acquisition is followed by direct-narrow followup"],"sources":["src/suite-benchmark.ts","src/router.ts","test/suite-benchmark-metadata.test.mjs"]}],"unknowns":[{"item":"Per-task route-to-playbook mapping completeness","reason":"Observed class/limit tables are explicit, but the full exhaustive decision matrix between every user intent and playbook is not fully surfaced in one condensed section.","sources":["src/router.ts","src/playbooks.ts"]},{"item":"Full tool allowlist for MCP full mode","reason":"Only representative/partial names are visible in the inspected excerpts, and extra tool names may exist.","sources":["src/mcp.ts"]},{"item":"Exact per-mode safety in adaptive/edge branches","reason":"Suite mode logic contains conditional paths; not all branches are enumerated in the captured excerpt.","sources":["src/suite-benchmark.ts"]}]}
```

Idea checks: 4/8 (0.500)

Critical misses: file:src/workflow-ab-benchmark.ts, symbol:routeTask, symbol:parseWorkflow, term:fallback_after_answerable
