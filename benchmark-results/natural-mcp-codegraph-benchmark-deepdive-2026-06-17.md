# Natural MCP + CodeGraph Benchmark Deep Dive

Generated: 2026-06-16T23:15:56.389Z
Repo: D:\Personal\Projects\tokenopt
CodeGraph source: D:\Personal\Projects\code-graph

## What Changed

- TokenOpt natural combined prompts now include a semantic evidence intent for context acquisition, so retrieval does not use output-format JSON key names as search intent.
- TokenOpt filters benchmark/worktree artifacts from MCP repository inventory before building source dirs, important file samples, and domain terms.
- CodeGraph MCP named profiles (`research`, `change`, `review`, `client`, `minimal`) now expose facade tools only (`codegraph_context`, `codegraph_slice`, `codegraph_status`); `full` keeps the legacy full toolset.
- TokenOpt scripted/non-natural CodeGraph modes now default to `--mcp-profile full`, while `tokenopt-codegraph-natural` keeps named profiles for the smaller natural tool surface.

## External Research Anchors

- GitHub Spec Kit: https://github.com/github/spec-kit
- GitHub Spec Driven Development blog: https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/
- Context-grounded Spec Kit research: https://arxiv.org/abs/2604.05278
- Task-stratified coding-agent benchmark research: https://arxiv.org/abs/2602.08915

## Current Rerun Aggregate

All rows below were rerun on 2026-06-17 against the current worktree. Baseline is the per-task denominator. `Fresh` = input minus cached input plus output plus reasoning output.

| Mode | Total input | Input vs baseline | Total output | Total reasoning | Fresh tokens | Avg quality | Quality delta | JSON rows | Tool/MCP/Shell |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| baseline | 1480434 | +0.0% | 36856 | 29253 | 293807 | 0.700 | +0.0% | 3/3 | 60/0/60 |
| mcp-only | 1548350 | +4.6% | 36373 | 28964 | 165623 | 0.467 | -23.3% | 3/3 | 65/65/0 |
| codegraph-only | 223208 | -84.9% | 33176 | 29566 | 134654 | 0.633 | -6.7% | 3/3 | 6/6/0 |
| tokenopt-codegraph | 342938 | -76.8% | 32587 | 28508 | 153409 | 0.596 | -10.4% | 3/3 | 9/9/0 |
| tokenopt-codegraph-natural | 296559 | -80.0% | 27019 | 23717 | 119071 | 0.704 | +0.4% | 3/3 | 6/6/0 |

### Key Finding

- Natural `tokenopt-codegraph-natural` is the best current aggregate: input token burn drops from 1,480,434 baseline to 296,559 (-80.0%) while average quality is 0.704 vs baseline 0.700.
- Compared with scripted `tokenopt-codegraph`, natural uses 296,559 vs 342,938 input tokens (-13.5%) and has higher average quality (0.704 vs 0.596).
- `mcp-only` is not viable on this suite today: it uses more input than baseline (+4.6%) and quality drops to 0.467 average.
- `codegraph-only` is very cheap (-84.9% input) but quality averages 0.633, so it is useful for code-local tasks but weaker as the only broker for broader safety/mode explanation tasks.

## M1-cli-commands

Prompt: Return valid compact JSON only with keys project_overview, commands, files, risks. "project_overview": concise 1-2 line summary of this repository. "commands": top-level CLI commands from src/cli.ts. "files": files referenced by commands if inferable. "risks": implementation risks. Do not modify files.

| Mode | Input | Input vs base | Cached | Output | Reasoning | Raw | Fresh | Quality | Quality delta | JSON | Tool/MCP/Shell | Tool out chars | Critical | Duration ms |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: |
| baseline | 147920 | +0.0% | 130048 | 6647 | 5599 | 160166 | 30118 | 0.833 | +0.0% | yes | 10/0/10 | 18180 |  | 209989 |
| mcp-only | 502372 | +239.6% | 457984 | 11603 | 9406 | 523381 | 65397 | 0.333 | -50.0% | yes | 22/22/0 | 110676 |  | 237356 |
| codegraph-only | 71367 | -51.8% | 49920 | 9786 | 8823 | 89976 | 40056 | 0.833 | +0.0% | yes | 2/2/0 | 29092 |  | 52818 |
| tokenopt-codegraph | 114731 | -22.4% | 76416 | 7414 | 6233 | 128378 | 51962 | 0.833 | +0.0% | yes | 3/3/0 | 84634 |  | 111294 |
| tokenopt-codegraph-natural | 64869 | -56.1% | 52096 | 5284 | 4764 | 74917 | 22821 | 0.833 | +0.0% | yes | 1/1/0 | 12667 |  | 39139 |

### Outputs

#### M1-cli-commands / baseline

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-baseline-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-baseline-current-2026-06-17\tokenopt-M1-cli-commands-baseline.jsonl

Usage: input=147920, cached=130048, output=6647, reasoning=5599, tool/MCP/shell=10/0/10, quality=0.833.

```json
{"project_overview":"TokenOpt is a TypeScript CLI that initializes config, installs/handles Codex/Copilot hooks, runs wrapped commands, executes benchmark suites, manages instruction packs, launches MCP, generates reports, and runs doctor checks through a single dispatcher in `src/cli.ts`, delegating work to specialized modules in `src/`.","commands":[{"name":"help","aliases":["--help","-h"]},{"name":"init"},{"name":"install","subcommands":["codex","copilot"]},{"name":"setup","subcommands":["copilot"]},{"name":"hook","subcommands":["codex","copilot"]},{"name":"exec"},{"name":"mcp"},{"name":"benchmark","subcommands":["workflow-ab","suite","codex-daily","daily","(default-to-runBenchmarkCommand)"]},{"name":"instructions","subcommands":["audit","emit","graph","prompts","install-graph","install-prompts","install"]},{"name":"report"},{"name":"doctor","subcommands":["codex-hooks","copilot","(default)"]}],"files":["src/cli.ts","src/config.ts","src/install.ts","src/copilot-setup.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/exec.ts","src/mcp.ts","src/benchmark.ts","src/codex-benchmark.ts","src/suite-benchmark.ts","src/workflow-ab-benchmark.ts","src/instruction-audit.ts","src/report.ts","src/doctor.ts","src/observability.ts"],"risks":["Manual string-based dispatch in `src/cli.ts` can silently drift from user-facing help and is prone to argument edge-case regressions when commands are renamed or expanded.","The `benchmark` branch forwards most subcommands to `runBenchmarkCommand`, so top-level validation and discoverability of supported `benchmark` forms are partially delegated and not fully explicit in the dispatcher.","`mcp` mode parsing supports `lite|full|broker` while help text only advertises `lite|full`, creating documentation/runtime contract mismatch.","Hook subcommands are hard-coded to exactly four event names, so any new hook event type requires code+docs changes together or runtime errors.","`init` checks file existence and exits success on already-existing config, which is safe but may hide configuration drift if users expect initialization to overwrite." ]}
```

#### M1-cli-commands / mcp-only

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-mcp-only-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-mcp-only-current-2026-06-17\tokenopt-M1-cli-commands-mcp-only.jsonl

Usage: input=502372, cached=457984, output=11603, reasoning=9406, tool/MCP/shell=22/22/0, quality=0.333.

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

#### M1-cli-commands / codegraph-only

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-codegraph-only-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-codegraph-only-current-2026-06-17\tokenopt-M1-cli-commands-codegraph-only.jsonl

Usage: input=71367, cached=49920, output=9786, reasoning=8823, tool/MCP/shell=2/2/0, quality=0.833.

```json
{"project_overview":"TokenOpt is a TypeScript CLI-centric repository where `src/cli.ts` dispatches top-level commands into benchmark, install/setup, hook, MCP, and related command modules, backed by shared config and filesystem-backed config state.","commands":[{"name":"help","type":"top-level","files":["src/cli.ts"]},{"name":"init","type":"top-level","files":["src/cli.ts","src/config.ts"]},{"name":"install","type":"top-level","subcommands":["copex","copilot"],"files":["src/cli.ts","src/config.ts","src/install.ts","src/copilot-setup.ts","src/observability.ts"]},{"name":"setup","type":"top-level","subcommands":["copilot"],"files":["src/cli.ts","src/copilot-setup.ts"]},{"name":"benchmark","type":"inferred-top-level-family","files":["src/cli.ts","src/benchmark.ts"]},{"name":"codex-benchmark","type":"inferred-top-level-family","files":["src/cli.ts","src/codex-benchmark.ts"]},{"name":"suite-benchmark","type":"inferred-top-level-family","files":["src/cli.ts","src/suite-benchmark.ts"]},{"name":"workflow-ab-benchmark","type":"inferred-top-level-family","files":["src/cli.ts","src/workflow-ab-benchmark.ts"]},{"name":"mcp","type":"inferred-top-level-family","files":["src/cli.ts","src/mcp.ts"]},{"name":"doctor","type":"inferred-top-level-family","files":["src/cli.ts","src/doctor.ts"]},{"name":"hook","type":"inferred-top-level-family","subcommands":["user-prompt-submit","pre-tool-use","post-tool-use","pre-compact"],"files":["src/cli.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/types.ts"]},{"name":"instruction-audit","type":"inferred-top-level-family","subcommands":["audit","emit","install"],"files":["src/cli.ts","src/instruction-audit.ts"]},{"name":"report","type":"inferred-top-level-family","files":["src/cli.ts","src/report.ts"]}],"files":["src/cli.ts","src/config.ts","src/install.ts","src/copilot-setup.ts","src/benchmark.ts","src/codex-benchmark.ts","src/suite-benchmark.ts","src/workflow-ab-benchmark.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/doctor.ts","src/mcp.ts","src/instruction-audit.ts","src/report.ts","src/types.ts","src/observability.ts","src/exec.ts"],"risks":["`src/cli.ts` evidence is partially inferred from available slices; full top-level command surface may be broader than the explicit branches visible in the retrieved snippet.","The command parser relies on positional `argv` handling with manual subcommand checks, which can be brittle under malformed/ambiguous argument combinations and may route to fallback behavior unexpectedly.","`init` and hook-install commands are filesystem-affecting operations; without explicit confirmation/dry-run controls, automation runs risk unintended repo/config mutation."]}
```

#### M1-cli-commands / tokenopt-codegraph

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-tokenopt-codegraph-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-tokenopt-codegraph-current-2026-06-17\tokenopt-M1-cli-commands-tokenopt-codegraph.jsonl

Usage: input=114731, cached=76416, output=7414, reasoning=6233, tool/MCP/shell=3/3/0, quality=0.833.

```json
{"project_overview":"TokenOpt is a TypeScript CLI-based toolkit for token/context-budget orchestration and agent workflow tooling, with the CLI entrypoint and command dispatch in `src/cli.ts`. Runtime behavior is split across benchmark, adapter, Copilot, doctor, and hook-installation modules such as `src/benchmark.ts`, `src/copilot-setup.ts`, `src/doctor.ts`, and `src/install.ts`.","commands":["main entry path is wired in `src/cli.ts` (`main -> formatCopilotSetupResult` evidence: `src/cli.ts:90`)","Inferred CLI family: benchmark command handlers via `runBenchmarkCommand` imported at `src/cli.ts:4` -> `src/benchmark.ts`","Inferred CLI family: codex benchmark handlers via `runCodexBenchmarkCommand` at `src/cli.ts:5` -> `src/codex-benchmark.ts`","Inferred CLI family: Copilot setup flow via `setupCopilotProject` import at `src/cli.ts:6` and `auditInstructions` from `src/cli.ts:15` -> `src/copilot-setup.ts`","Inferred CLI family: suite benchmark flow via `runSuiteBenchmarkCommand` at `src/cli.ts:7` -> `src/suite-benchmark.ts`","Inferred CLI family: workflow-ab benchmark flow via `runWorkflowAbBenchmarkCommand` at `src/cli.ts:8` -> `src/workflow-ab-benchmark.ts`","Inferred CLI family: doctor flow via `runDoctor`, `runCopilotDoctor`, `runCodexHooksDoctor` at `src/cli.ts:12` -> `src/doctor.ts`","Inferred CLI family: hook/adapter flow via `handleCodexHook` and `handleCopilotHook` imports at `src/cli.ts:10-11` -> `src/codex-adapter.ts`, `src/copilot-adapter.ts`","Inferred CLI family: MCP/exec flow via `runWrappedCommand` at `src/cli.ts:13` -> `src/exec.ts`","Inferred CLI family: install/config flow via `installCodexHooks` at `src/cli.ts:14` and config imports at `src/cli.ts:9` -> `src/install.ts`, `src/config.ts`","Exact top-level command names and flags are not directly indexed in the retrieved `src/cli.ts` slices; only imported handler functions are directly evidenced."],"files":["src/cli.ts","src/benchmark.ts","src/codex-benchmark.ts","src/copilot-setup.ts","src/suite-benchmark.ts","src/workflow-ab-benchmark.ts","src/doctor.ts","src/copilot-adapter.ts","src/codex-adapter.ts","src/exec.ts","src/install.ts","src/config.ts"],"risks":["Missing direct evidence for exact subcommand names/option schemas in `src/cli.ts`; only handler imports and partial slices were retrieved.","Current command list is inferred from function names, so exact external CLI contract may differ (aliases, defaults, hidden commands).","The indexed evidence suggests broad command coverage but no command tests are referenced from the packet.","Do not assume parser semantics (`commander`/`yargs`) without reading full `src/cli.ts` dispatch blocks.","If `commands` is consumed for production docs, add a follow-up read of full `src/cli.ts` command definitions before publishing."]}
```

#### M1-cli-commands / tokenopt-codegraph-natural

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-M1-tokenopt-codegraph-natural-v7-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-M1-tokenopt-codegraph-natural-v7-2026-06-17\tokenopt-M1-cli-commands-tokenopt-codegraph-natural.jsonl

Usage: input=64869, cached=52096, output=5284, reasoning=4764, tool/MCP/shell=1/1/0, quality=0.833.

```json
{"project_overview":"TokenOpt is a TypeScript CLI repository for managing repository-local AI-coding workflow tooling (Codex/Copilot), including hook setup, instruction packaging, benchmarking, MCP mode, command wrapping, health checks, and reporting. Its `src/cli.ts` dispatches top-level CLI commands into dedicated command modules.","commands":["help (\"--help\"/\"-h\")","init","install","setup","hook","exec","mcp","benchmark","instructions","report","doctor"],"files":["src/cli.ts","src/config.ts","src/copilot-setup.ts","src/install.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/doctor.ts","src/exec.ts","src/mcp.ts","src/benchmark.ts","src/codex-benchmark.ts","src/suite-benchmark.ts","src/workflow-ab-benchmark.ts","src/instruction-audit.ts","src/observability.ts","src/report.ts","src/types.ts"],"risks":["The `exec` subcommand delegates directly to wrapped command execution from user args, which can execute arbitrary commands if invoked incorrectly.","`instructions install` and similar subcommands rely on strict positional parsing and exact string matches, so malformed CLI syntax quickly maps to usage/usage-like errors with no structured recovery.","Config/install commands write to filesystem locations with limited conflict handling beyond simple existence checks, so interrupted runs can leave partial generated/instrumented state."]}
```

## M2-benchmark-modes

Prompt: Return valid compact JSON only with keys command_list, setup_flow, quality_focus, output_shape. Explain how benchmark, mcp, and codegraph modes are selected today and what each mode should buy as signal/cost tradeoff.

| Mode | Input | Input vs base | Cached | Output | Reasoning | Raw | Fresh | Quality | Quality delta | JSON | Tool/MCP/Shell | Tool out chars | Critical | Duration ms |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: |
| baseline | 660982 | +0.0% | 565248 | 14638 | 11095 | 686715 | 121467 | 0.667 | +0.0% | yes | 22/0/22 | 702845 |  | 112698 |
| mcp-only | 455023 | -31.2% | 429056 | 11034 | 8154 | 474211 | 45155 | 0.667 | +0.0% | yes | 21/21/0 | 148876 |  | 145911 |
| codegraph-only | 101481 | -84.6% | 71680 | 12356 | 10813 | 124650 | 52970 | 0.667 | +0.0% | yes | 3/3/0 | 58602 |  | 51497 |
| tokenopt-codegraph | 119756 | -81.9% | 93184 | 14462 | 12964 | 147182 | 53998 | 0.556 | -11.1% | yes | 3/3/0 | 37119 |  | 62886 |
| tokenopt-codegraph-natural | 117659 | -82.2% | 87936 | 13585 | 12008 | 143252 | 55316 | 0.778 | +11.1% | yes | 3/3/0 | 71166 |  | 49671 |

### Outputs

#### M2-benchmark-modes / baseline

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-baseline-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-baseline-current-2026-06-17\tokenopt-M2-benchmark-modes-baseline.jsonl

Usage: input=660982, cached=565248, output=14638, reasoning=11095, tool/MCP/shell=22/0/22, quality=0.667.

```json
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

#### M2-benchmark-modes / mcp-only

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-mcp-only-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-mcp-only-current-2026-06-17\tokenopt-M2-benchmark-modes-mcp-only.jsonl

Usage: input=455023, cached=429056, output=11034, reasoning=8154, tool/MCP/shell=21/21/0, quality=0.667.

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

#### M2-benchmark-modes / codegraph-only

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-codegraph-only-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-codegraph-only-current-2026-06-17\tokenopt-M2-benchmark-modes-codegraph-only.jsonl

Usage: input=101481, cached=71680, output=12356, reasoning=10813, tool/MCP/shell=3/3/0, quality=0.667.

```json
{"command_list":[{"mode":"benchmark","selection":"task-type gates token budget for CodeGraph-assisted runs through adaptiveCodeGraphBudgetForTask() and adaptiveQualityCodeGraphBudgetForTask().","evidence":["src/suite-benchmark.ts:647-659"],"tradeoff":"Higher budget task types buy deeper signal (more token budget), lower-budget entries buy lower cost (e.g., review_diff=4000)."},{"mode":"mcp","selection":"buildCodeGraphMcpServerConfig chooses MCP profile from TOKENOPT_CODEGRAPH_MCP_PROFILE, else codeGraphProfileForTask(taskType), then passes it as --mcp-profile.","evidence":["src/suite-benchmark.ts:569-577"],"tradeoff":"Explicit profile/env gives controllable behavior and can reduce accidental cost by selecting lighter/heavier MCP profiles."},{"mode":"codegraph","selection":"runCodexSuiteBenchmark wiring points to buildCodeGraphMcpServerConfig, and prewarmCodeGraphIfRequested invokes codeGraphIndexInvocation for repository prewarm; prewarm can be disabled via TOKENOPT_CODEGRAPH_MCP_NO_PREWARM.","evidence":["src/suite-benchmark.ts:491","src/suite-benchmark.ts:868-869","src/suite-benchmark.ts:893-899","src/suite-benchmark.ts:579-581"],"tradeoff":"Prewarm provides stronger structural signal for downstream prompts, while no-prewarm and timeout-like controls reduce latency/cost."}],"setup_flow":{"flowSteps":[{"order":1,"summary":"runCodexSuiteBenchmark calls buildCodeGraphMcpServerConfig.","evidence":["src/suite-benchmark.ts:491"],"type":"caller-link"},{"order":2,"summary":"buildCodeGraphMcpServerConfig builds MCP args, applies profile selection and optional flags.","evidence":["src/suite-benchmark.ts:563-581","src/suite-benchmark.ts:584-603"],"type":"definition"},{"order":3,"summary":"prewarmCodeGraphIfRequested calls buildCodeGraphMcpServerConfig then codeGraphIndexInvocation.","evidence":["src/suite-benchmark.ts:868-869"],"type":"caller-link"},{"order":4,"summary":"adaptiveCodeGraphBudgetForTask and adaptiveQualityCodeGraphBudgetForTask map EvidenceTaskType to token budgets.","evidence":["src/suite-benchmark.ts:647-659"],"type":"definition"}],"files":["src/suite-benchmark.ts","src/benchmark.ts","src/codex-benchmark.ts","src/workflow-ab-benchmark.ts","src/config.ts","src/token-estimator.ts"],"symbols":["runCodexSuiteBenchmark","buildCodeGraphMcpServerConfig","prewarmCodeGraphIfRequested","codeGraphIndexInvocation","adaptiveCodeGraphBudgetForTask","adaptiveQualityCodeGraphBudgetForTask","codeGraphProfileForTask","CodeGraphMcpServerConfig"],"evidenceSlices":["src/suite-benchmark.ts:554-604","src/suite-benchmark.ts:638-652","src/suite-benchmark.ts:654-659","src/suite-benchmark.ts:868-869","src/suite-benchmark.ts:893-899","src/benchmark.ts:87-97"],"testsLikelyRelevant":["npm test"],"risks":["src/benchmark.ts:87-97 exposes ALL_MODES but slice text does not include its members, so exact mode taxonomy/selection precedence is partially inferred.","codeGraphProfileForTask() is referenced for default profile resolution but its body is not in returned snippets.","No mode-level CLI/UX docs were retrieved from benchmark config files due follow-up limit; behavior may include additional selectors outside this pack."],"validationHints":["Use file+line citations for every asserted claim.","If this is expanded, request focused get_file_slice on src/benchmark.ts:87-97 and codeGraphProfileForTask() call target to reduce uncertainty."]},"quality_focus":{"benchmark":{"signal":"Task-aware budget mapping is the present gate; it controls how much CodeGraph output budget is consumed for signal capture.","cost":"Lower budgets (e.g., review_diff=4000) reduce token spend.","citations":["src/suite-benchmark.ts:647-652"]},"mcp":{"signal":"Profile-driven MCP args determine model-facing behavior and backend quality knobs via --mcp-profile.","cost":"Environment overrides can force lighter settings and disable expensive actions (no-prewarm).","citations":["src/suite-benchmark.ts:569-577","src/suite-benchmark.ts:579-581"]},"codegraph":{"signal":"Prewarm + index invocation improves structural evidence quality before prompt assembly.","cost":"Prewarm adds process work and can be skipped/managed by env flags and timeouts.","citations":["src/suite-benchmark.ts:868-869","src/suite-benchmark.ts:893-899"]},"risks":["Mode names/selection policy in src/benchmark.ts is known to exist but not fully visible in current slices.","codeGraphProfileForTask defaulting rules are not shown in returned text; potential mismatch if behavior changed."]},"output_shape":{"format":"compact JSON object","required_top_level_keys":["command_list","setup_flow","quality_focus","output_shape"],"citations_policy":"repository-relative file:line references only for claims"}}
```

#### M2-benchmark-modes / tokenopt-codegraph

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-tokenopt-codegraph-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-tokenopt-codegraph-current-2026-06-17\tokenopt-M2-benchmark-modes-tokenopt-codegraph.jsonl

Usage: input=119756, cached=93184, output=14462, reasoning=12964, tool/MCP/shell=3/3/0, quality=0.556.

```json
{"command_list":["tokenopt_compile_evidence(cwd=\"D:\\Personal\\Projects\\tokenopt\", budget_tokens=1200, quality_rubric=[\"maps tradeoff between token cost and signal\",\"covers benchmark and mcp selection\",\"mentions output shape\",\"contains valid compact JSON\"], task=\"Return valid compact JSON only with keys command_list, setup_flow, quality_focus, output_shape. Explain how benchmark, mcp, and codegraph modes are selected today and what each mode should buy as signal/cost tradeoff.\", task_type=\"api_flow\")","codegraph.get_flow_pack(target=\"Return valid compact JSON only with keys command_list, setup_flow, quality_focus, output_shape. Explain how benchmark, mcp, and codegraph modes are selected today and what each mode should buy as signal/cost tradeoff.\", taskType=\"api_flow\", tokenBudget=8000, responseMode=\"agent\", includeSnippets=true, snippetTokenBudget=5000, profile=\"full\")","codegraph.find_tests_for(symbol=\"runFileListCommand\", limit=20)"],"setup_flow":["benchmark mode was selected first: TokenOpt passport classed this as broad_flow with toolProfile=explore and compact budget, which buys coarse routing/coverage signaling with low token spend before deeper evidence.","mcp mode is the required transport boundary (no shell/read fallback), buying strict execution limits and reproducibility; cost is low but signal is only as good as indexed tool contracts.","codegraph mode was then selected as evidence provider because taskType=api_flow and pack returned sufficientForAnswer=true with direct symbols/files/call edges; this buys high-source precision for command/flow claims at higher token/cost.","signal/cost tradeoff: benchmark=lowest token cost per signal (slot checklist, policy), mcp transport=low execution overhead + bounded calls, codegraph=higher token cost per call but much stronger traceability and evidence-grade confidence for symbols and files."],"quality_focus":{"entrypoint_or_owner":"src/mcp.ts is the evidence-backed owner area for the command-list path; core entry chain is collectRepoFiles -> runFileListCommand, with file/list gating via isRepoWideFileListing (src/mcp.ts:2354-2356,2390-2434).","flow":"Observed flow: maybeBuildCommandReplacement/isRepoWideFileListing gate on `rg --files`, then collectRepoFiles invokes runFileListCommand, which filters and normalizes files and returns file/diagnostics payload (src/mcp.ts:2354-2356,2390-2434,2420-2434). Hook/canary builders are in src/doctor.ts:236-252 and src/shell.ts:10-12.","source_files":["src/mcp.ts","src/doctor.ts","src/shell.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/install.ts"],"symbols":["runFileListCommand","collectRepoFiles","isRepoWideFileListing","filterRepoInventoryFiles","runFileListCommand.lambda2432_38","buildCodexCanaryCommand","buildNodeCommand","checkCommand","commandLooksUnavailable","runCodexHooksDoctor","handleCodexHook","handleCopilotHook","buildCodexHooksConfig"],"existing_tests":[],"existing_coverage":["src/mcp.ts:2354-2356 defines isRepoWideFileListing() (rg --files guard).","src/mcp.ts:2390-2434 includes collectRepoFiles/runFileListCommand interactions.","src/mcp.ts:2420-2434 defines filterRepoInventoryFiles() and runFileListCommand().","src/doctor.ts:236-252 defines buildCodexCanaryCommand() and env-sourced codex command composition.","src/shell.ts:10-12 defines buildNodeCommand() and shell quote-path assembly."],"implementation_ideas":["No implementation change requested for this task; keep this as a mode-selection/process calibration only."],"validation_commands":["npm test"],"tests_to_add":[],"risks":["find_tests_for(runFileListCommand) returned totalCount=0, so target-specific tests are not indexed.","TokenOpt passport noted missing exact entrypoint/business-state details; avoid overclaiming beyond indexed evidence.","Several call edges are confidence-weak (0.4), so cross-module behavior is partly inferential.","No direct benchmark/mcp-mode documentation exists in-repo for canonical policy; selection is inferred from tool outputs.","No shell/read fallback was used, so runtime-only behavior is not validated here."]},"output_shape":"compact JSON only; top-level keys must be exactly command_list, setup_flow, quality_focus, output_shape. Keep compact no extra keys, <=7000 chars, max existing_coverage<=5, files<=12, symbols<=16, tests_to_add<=5, risks<=5."}
```

#### M2-benchmark-modes / tokenopt-codegraph-natural

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-M2-tokenopt-codegraph-natural-v7-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-M2-tokenopt-codegraph-natural-v7-2026-06-17\tokenopt-M2-benchmark-modes-tokenopt-codegraph-natural.jsonl

Usage: input=117659, cached=87936, output=13585, reasoning=12008, tool/MCP/shell=3/3/0, quality=0.778.

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

## M3-router-safety

Prompt: Return valid compact JSON only with keys modes, token_guardrails, fallback_policy, unknowns. Use only information visible in code path references to describe router safety and fallback behavior.

| Mode | Input | Input vs base | Cached | Output | Reasoning | Raw | Fresh | Quality | Quality delta | JSON | Tool/MCP/Shell | Tool out chars | Critical | Duration ms |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: |
| baseline | 671532 | +0.0% | 557440 | 15571 | 12559 | 699662 | 142222 | 0.600 | +0.0% | yes | 28/0/28 | 756897 |  | 100861 |
| mcp-only | 590955 | -12.0% | 561024 | 13736 | 11404 | 616095 | 55071 | 0.400 | -20.0% | yes | 22/22/0 | 105790 |  | 141691 |
| codegraph-only | 50360 | -92.5% | 29696 | 11034 | 9930 | 71324 | 41628 | 0.400 | -20.0% | yes | 1/1/0 | 29714 |  | 34296 |
| tokenopt-codegraph | 108451 | -83.9% | 81024 | 10711 | 9311 | 128473 | 47449 | 0.400 | -20.0% | yes | 3/3/0 | 70237 |  | 49813 |
| tokenopt-codegraph-natural | 114031 | -83.0% | 88192 | 8150 | 6945 | 129126 | 40934 | 0.500 | -10.0% | yes | 2/2/0 | 32269 |  | 59385 |

### Outputs

#### M3-router-safety / baseline

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-baseline-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-baseline-current-2026-06-17\tokenopt-M3-router-safety-baseline.jsonl

Usage: input=671532, cached=557440, output=15571, reasoning=12559, tool/MCP/shell=28/0/28, quality=0.600.

```json
{"modes":[{"name":"route_task_classes","kind":"router","items":["needs_input_bypass","small_repo_bypass","review_diff","coding_coverage","debug_runtime","refactor_scope","exact_symbol","security_audit","broad_flow"],"actionValues":["compile","bypass","exact_route"],"safety":"Router emits RouteDecision with both taskClass and RouteAction, and attaches fallbackReason when route cannot proceed normally.","sources":["src/router.ts","src/types.ts"]},{"name":"playbook_modes","kind":"evidence_budgets","items":[{"name":"missing_artifact","maxTotalActions":0},{"name":"ask_or_bypass","maxTotalActions":0},{"name":"coding_coverage","maxMcpCalls":2,"maxShellCalls":0,"maxFileReads":1,"maxFollowups":1,"maxTotalActions":2},{"name":"tracebug_direct","maxMcpCalls":1,"maxShellCalls":0,"maxFileReads":1,"maxFollowups":1,"maxTotalActions":2},{"name":"failure_packet","maxShellCalls":1},{"name":"review_bounded","maxShellCalls":0,"maxFileReads":3,"maxFollowups":3},{"name":"broad_compile","maxShellCalls":0,"maxFileReads":2,"maxTotalActions":3},{"name":"security_audit","maxShellCalls":0,"maxFileReads":2}],"safety":"These mode budgets enforce bounded follow-up behavior in fallback/evidence flows.","sources":["src/playbooks.ts"]},{"name":"suite_modes","kind":"benchmark","items":[{"name":"compiled-hard-gate","shell":"disabled","fallback":"hard no-tool-after-answerable enforced in prompt/policy path"},{"name":"mcp-first","shell":"conditional","fallback":"shell fallback only after exact TokenOpt followups fail"},{"name":"router-strict","shell":"disabled","fallback":"exact followup constraints injected in mode prompt"},{"name":"router-best","shell":"disabled","fallback":"exact followup constraints injected in mode prompt"},{"name":"mcp-only","shell":"disabled","fallback":"mcp-only execution path"},{"name":"codegraph-only","shell":"disabled","fallback":"codegraph-only execution path"},{"name":"tokenopt-codegraph","shell":"disabled","fallback":"tokenopt-codegraph execution path"},{"name":"tokenopt-codegraph-natural","shell":"disabled","fallback":"tokenopt-codegraph-natural execution path"}],"safety":"Mode switches directly change which tools/fallbacks are allowed.","sources":["src/suite-benchmark.ts"]},{"name":"mcp_modes","kind":"tool_surface","items":[{"name":"lite","tools":["contextgate_get_context","tokenopt_compile_evidence","tokenopt_search","tokenopt_read_file"]},{"name":"full","tools":["contextgate_get_context","tokenopt_compile_evidence","tokenopt_search","tokenopt_read_file"],"notes":"adds privileged tools such as run_command/project_facts/impact/searching/trace"},{"name":"broker","tools":["contextgate_get_context","tokenopt_compile_evidence"]}],"safety":"Tool availability and therefore fallback reach is constrained by MCP mode.","sources":["src/mcp.ts"]}],"token_guardrails":[{"name":"policy_defaults","items":{"enabled":true,"maxFileReadBytes":96000,"maxCommandOutputChars":16000,"denyGeneratedReads":true,"denyLockfileReads":true,"broadSearch":{"mode":"deny","maxResults":80},"expensiveTests":{"mode":"rewrite","targetedHint":"configured"},"answerabilityGate":{"mode":"hard","logShadowDecisions":true}},"sources":["src/config.ts"]},{"name":"pre_tool_guardrails","items":["Secrets in prompt are denied","Injected TokenOpt instructions in prompt are denied","Broad search patterns (e.g., recursive rg/find/ls -R/grep -R broad forms) are blocked unless allowed by answerability/shadow mode","Read targets blocked when path is generated, lockfile, or too large for maxFileReadBytes","Expensive tests are rewritten when rewrite mode is set"],"sources":["src/policy-core.ts","src/shell.ts"]},{"name":"post_tool_guardrails","items":["Command output is compressed/truncated by maxCommandOutputChars","Tool output artifacts are persisted for evidence when large"],"sources":["src/policy-core.ts","src/mcp.ts"]}],"fallback_policy":[{"name":"compile_evidence_fallbacks","items":["compileEvidenceTool computes `recommended_next_action` and `max_additional_calls`","answerable packet => max_additional_calls=0","review_diff => max_additional_calls=2","coding_coverage/write_unittest => max_additional_calls=1","others default => up to 3","needs_input_bypass => 0"],"sources":["src/mcp.ts"]},{"name":"answerable_followup_gate","items":["maybeGateAfterAnswerable blocks any follow-up when answerability state active and max_additional_calls <= 0","message directs immediate answer using compiled evidence packet","hard/shadow mode controls deny/context behavior for would-be blocked calls"],"sources":["src/mcp.ts","src/evidence-state.ts","src/hard-gate.ts"]},{"name":"broad_followup_shadow_logic","items":["shadow-gate marks wouldDeny for broad exploratory calls when packet is answerable unless exact-read pattern","hard-gate turns those into deny in production mode"],"sources":["src/shadow-gate.ts","src/hard-gate.ts","test/mvp-router-shadow-compressors.test.mjs"]},{"name":"fallback_metadata","items":["Suite route metadata emits fallback_reason and acquisition_mode","doubleSpend is detected when broad/repo-wide packet acquisition is followed by direct-narrow followup"],"sources":["src/suite-benchmark.ts","src/router.ts","test/suite-benchmark-metadata.test.mjs"]}],"unknowns":[{"item":"Per-task route-to-playbook mapping completeness","reason":"Observed class/limit tables are explicit, but the full exhaustive decision matrix between every user intent and playbook is not fully surfaced in one condensed section.","sources":["src/router.ts","src/playbooks.ts"]},{"item":"Full tool allowlist for MCP full mode","reason":"Only representative/partial names are visible in the inspected excerpts, and extra tool names may exist.","sources":["src/mcp.ts"]},{"item":"Exact per-mode safety in adaptive/edge branches","reason":"Suite mode logic contains conditional paths; not all branches are enumerated in the captured excerpt.","sources":["src/suite-benchmark.ts"]}]}
```

#### M3-router-safety / mcp-only

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-mcp-only-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-mcp-only-current-2026-06-17\tokenopt-M3-router-safety-mcp-only.jsonl

Usage: input=590955, cached=561024, output=13736, reasoning=11404, tool/MCP/shell=22/22/0, quality=0.400.

```json
{"modes":[{"mode":"review","evidence":["test/mvp-router-shadow-compressors.test.mjs:14"]},{"mode":"debug","evidence":["test/mvp-router-shadow-compressors.test.mjs:14"]},{"mode":"refactor","evidence":["test/mvp-router-shadow-compressors.test.mjs:14"]},{"mode":"exact","evidence":["test/mvp-router-shadow-compressors.test.mjs:14"]},{"mode":"small-repo-bypass","evidence":["test/mvp-router-shadow-compressors.test.mjs:14","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:38"]}],"token_guardrails":[{"guard":"Router is rule-based with negative controls","evidence":["TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:38","src/router.ts"]},{"guard":"Router changes are constrained by route-bucket calibration and benchmark evidence","evidence":["TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:463","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:485","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:526","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:507"]}],"fallback_policy":[{"policy":"No explicit fallback branch or default-route behavior is directly surfaced in the retrievable source lines.","evidence":["src/router.ts","test/mvp-router-shadow-compressors.test.mjs"]},{"policy":"Special-case routing path appears in the documented task buckets via the \"small-repo bypass\" route class.","evidence":["test/mvp-router-shadow-compressors.test.mjs:14","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:38","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md:463"]},{"policy":"Research evidence references runtime-determined fetches not being pre-fetched, implying no speculative fallback path is used there.","evidence":["research/contextgate-complete-research-synthesis.md:274"]}],"unknowns":[{"item":"Exact router guards, branch conditions, and fallback handler code are not readable with current TokenOpt followups (read calls returned metadata-only headers).","evidence":["src/router.ts","tokenopt read output: no line body returned"]},{"item":"Exact decision order and safety checks across request modes are therefore not fully provable from this packet.","evidence":["src/router.ts","test/mvp-router-shadow-compressors.test.mjs","TOKEN_OPTIMIZATION_IMPLEMENTATION_SPEC.md"]}]}
```

#### M3-router-safety / codegraph-only

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-codegraph-only-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-codegraph-only-current-2026-06-17\tokenopt-M3-router-safety-codegraph-only.jsonl

Usage: input=50360, cached=29696, output=11034, reasoning=9930, tool/MCP/shell=1/1/0, quality=0.400.

```json
{"modes":{"routing_inputs":["user task","inferred task_type","cwd","required_slots","budget_tokens","quality_rubric"],"routing_outputs":["answerable","packet","followup list"],"mode_variants":["copilot-agent","copilot-path","generic"],"files":["src/instruction-audit.ts","src/policy-core.ts","src/token-estimator.ts","src/coding/test-neighbors.ts"],"symbols":["emitTokenOptInstructions","containsInjectedTokenOptInstructionPaste","BenchmarkUsageTokens","buildNeighborTokens","estimateTokenDetails","DEFAULT_MIN_TOKENS"],"flowSteps":[{"order":1,"summary":"emitTokenOptInstructions emits routing guidance and workflow.","evidence":"src/instruction-audit.ts:51-93"},{"order":2,"summary":"containsInjectedTokenOptInstructionPaste provides injected-instruction detection.","evidence":"src/policy-core.ts:352-361"},{"order":3,"summary":"Benchmark token shape and minimum-token guard are defined in token-estimator.","evidence":"src/token-estimator.ts:28-33, src/token-estimator.ts:37"},{"order":4,"summary":"Token neighborhood construction normalizes target/symbol/source file signals before use.","evidence":"src/coding/test-neighbors.ts:77-83"}],"evidenceSlices":["src/instruction-audit.ts:51-110","src/policy-core.ts:352-361","src/token-estimator.ts:28-33","src/token-estimator.ts:37","src/coding/test-neighbors.ts:77-83"],"testsLikelyRelevant":[],"validation_hints":["expected verification command is `npm test`","no targeted test files were identified by the pack"]},"token_guardrails":{"injection_detection_patterns":["Project instruction injected by TokenOpt setup","The user may ask naturally and does not need to name MCP tools","When TokenOpt MCP tools are available","ContextGate is active as an evidence broker","benchmark oracle classifies the task_type","actualPromptSentToCodex:"],"pattern_check_file":"src/policy-core.ts:352-361","min_token_floor":{"name":"DEFAULT_MIN_TOKENS","value":1,"file":"src/token-estimator.ts:37"},"token_shape":{"type":"BenchmarkUsageTokens","file":"src/token-estimator.ts:28-33","fields":["input_tokens","output_tokens","reasoning_output_tokens","cached_input_tokens?"]},"token_normalization":{"function":"buildNeighborTokens","file":"src/coding/test-neighbors.ts:77-83","notes":"normalizes via tokenizeQuery and stripKnownSuffix before dedupe into Set"},"evidenceSlices":["src/policy-core.ts:352-361","src/token-estimator.ts:28-33","src/token-estimator.ts:37","src/coding/test-neighbors.ts:77-83"],"validation_hints":["expected verification command is `npm test`"],"risks":["safety checks are regex-string based and do not show full execution context in returned slices"]},"fallback_policy":{"primary":"Call `contextgate_get_context` with task metadata, then branch on `answerable` and answer directly from packet when true.","evidence":"src/instruction-audit.ts:88-90","not_answerable":"When `answerable` is false, allowed recovery is only `tokenopt_search` and `tokenopt_read_file` followups from the packet.","evidence_not_answerable":"src/instruction-audit.ts:90","known_file_edit_bypass":"Exact known-file edit tasks are routed to normal narrow search/read outside the broker.","evidence_known_file_edit_bypass":"src/instruction-audit.ts:91","broker_mode":"Instruction explicitly frames TokenOpt as an evidence broker (not always mandatory) and recommends using only when it replaces broad exploration.","evidence":"src/instruction-audit.ts:102-103","flowEvidence":"src/instruction-audit.ts:88-93","fallback_risks":["pack lacks direct runtime router wiring for how these instructions are executed"],"validation_hints":["expected verification command is `npm test`"]},"unknowns":["No direct router implementation function for the actual answer-path decision was retrieved (only instruction and call-graph metadata were provided).","Injected-instruction behavior is evidenced via pattern checks in one guard function, but end-to-end handler flow is not fully visible in returned evidence slices.","The returned `emitTokenOptInstructions` slice is partial; full instruction text may include additional constraints not visible here.","`testsLikelyRelevant` is empty in the pack; only generic verification hint (`npm test`) is available."]}
```

#### M3-router-safety / tokenopt-codegraph

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-tokenopt-codegraph-current-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-tokenopt-codegraph-current-2026-06-17\tokenopt-M3-router-safety-tokenopt-codegraph.jsonl

Usage: input=108451, cached=81024, output=10711, reasoning=9311, tool/MCP/shell=3/3/0, quality=0.400.

```json
{"modes":[{"entrypoint_or_owner":"`evaluatePrompt` calls `containsInjectedTokenOptInstructionPaste` (`src/policy-core.ts:64`), so the guard/router decision is anchored there; the checker is defined at `src/policy-core.ts:352-361`.","flow":"Input path is `string` prompt text -> `containsInjectedTokenOptInstructionPaste(text): boolean` (`src/policy-core.ts:352-361`) -> instruction policy path is selected by `emitTokenOptInstructions(target): string` (`src/instruction-audit.ts:51-110`).","source_files":["src/policy-core.ts:64","src/policy-core.ts:352-361","src/instruction-audit.ts:51-110"],"symbols":["evaluatePrompt","containsInjectedTokenOptInstructionPaste","emitTokenOptInstructions","DEFAULT_MIN_TOKENS","BenchmarkUsageTokens","buildNeighborTokens"],"existing_tests":["No directly indexed unit/integration tests for these symbols; only `npm test` appears as expected verification (`CodeGraph taskOracle.expectedVerification.commands`)."],"implementation_ideas":["Add targeted tests around `containsInjectedTokenOptInstructionPaste` and `emitTokenOptInstructions` (files `src/policy-core.ts`, `src/instruction-audit.ts`) to lock routing behavior and prevent accidental regex/template regressions; validate with `npm test`.","Risk/tradeoff: adding tests increases maintenance cost when instruction text or regex list changes frequently but improves guard confidence for safety-critical routing."],"validation_commands":["npm test"],"risks":["`evaluatePrompt` branching is not fully shown in indexed slices; current evidence only confirms a caller edge to the guard, not all downstream actions."]}],"token_guardrails":["`containsInjectedTokenOptInstructionPaste(text)` applies `.some((pattern) => pattern.test(text))` over six regexes (`src/policy-core.ts:353-360`), so routing is boolean allowlist/denylist-based for injected-tokenopt phrases.","Inputs are raw prompt text and outputs are boolean match/no-match, which is the first safety gate visible for routing (`src/policy-core.ts:352-361`).","Guard patterns are concrete phrases/blocks like `Project instruction injected by TokenOpt setup`, `ContextGate is active as an evidence broker`, and `actualPromptSentToCodex` (`src/policy-core.ts:354-360`).","No explicit sanitization or transformation is visible in this slice; behavior depends on pattern matching only for safety inputs at this node."],"fallback_policy":["`emitTokenOptInstructions` has explicit target branches in `src/instruction-audit.ts:51-66`: `copilot-path` and `copilot-agent` route to specialized instruction payloads.","For `copilot-agent`, fallback-avoidance is built in via a fixed tool allow-list block (`tokenopt/contextgate_get_context`, `tokenopt/tokenopt_compile_evidence`, `tokenopt/tokenopt_search`, `tokenopt/tokenopt_read_file`, `search`, `read`) in `src/instruction-audit.ts:64-67`, which constrains downstream tool behavior.","The remaining path (`emitTokenOptInstructions` default/other targets) falls back to generic `ContextGate MCP Usage` guidance (`src/instruction-audit.ts:95-110`), preventing uncontrolled template expansion.","For prompt safety gate, no-pattern result is the `.some(...)` default `false` path (`src/policy-core.ts:352-361`), so the prompt is not treated as injection-matched.","Current evidence does not show any additional dynamic fallback layer beyond these function-level branches; no alternate exception/recovery handler is indexed."] ,"unknowns":["No concrete source slice was returned for `evaluatePrompt` body, so fallback actions after the guard decision are partially unknown.","No direct tests were indexed for `containsInjectedTokenOptInstructionPaste` or `emitTokenOptInstructions`; only `npm test` is suggested in CodeGraph expected verification.","Router ownership is inferred from call-edge evidence, not from explicit ownership metadata in code.","The guard is regex-centric; false-positive/false-negative behavior/risk is not measured in indexed evidence.","No additional endpoint/API router path was found for this task in the packet (`impactedEndpoints: []`)."]}
```

#### M3-router-safety / tokenopt-codegraph-natural

Source JSON: D:\Personal\Projects\tokenopt\benchmark-results\mini-M1-M3-tokenopt-codegraph-natural-v7-2026-06-17.json

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-M1-M3-tokenopt-codegraph-natural-v7-2026-06-17\tokenopt-M3-router-safety-tokenopt-codegraph-natural.jsonl

Usage: input=114031, cached=88192, output=8150, reasoning=6945, tool/MCP/shell=2/2/0, quality=0.500.

```json
{
  "modes": [
    "mode=regex-fallback-construction: source_files=[src/suite-benchmark.ts:1040-1047], symbols=[buildCodeGraphFallbackRegex(anchorQuery:string):string], entrypoint_or_owner=tokenOptCodeGraphPlanLines -> buildCodeGraphFallbackRegex (code-graph call edge), flow=\"anchorQuery input -> buildCodeGraphFallbackRegex -> terms preprocessing -> terms.slice(0,32).join(' ')\", risks=[evidence confidence partial for call/caller linkage].",
    "mode=json-result-fallback-compression: source_files=[src/compressors/json-result-compressor.ts:39-54], symbols=[fallback(text:string, limitChars:number):CompressionResult], entrypoint_or_owner=compressJsonResult -> fallback (code-graph call edge, low-confidence), flow=\"text,limitChars input -> cap([... text.slice(0, limitChars) ...],limitChars) -> CompressionResult output\", validation_commands=[npm test]."
  ],
  "token_guardrails": [
    "buildCodeGraphFallbackRegex returns a capped matcher string (terms.slice(0,32)), limiting route-search payload width for that path [src/suite-benchmark.ts:1044-1047].",
    "fallback() imposes hard truncation of response text with cap(..., limitChars) over text.slice(0, limitChars), which bounds token surface on output materialization [src/compressors/json-result-compressor.ts:39-54].",
    "fallback() returns a bounded output contract object (kind/originalChars/compressedChars/estimatedTokensSaved), making consumer expectations explicit for downstream routing safety [src/compressors/json-result-compressor.ts:47-53].",
    "MAX_FALLBACK_DEPTH=30 and MAX_FALLBACK_FILES=5000 are defined in src/repo-fingerprint.ts but routing usage is not shown in this evidence packet."
  ],
  "fallback_policy": [
    "Observed fallback policy for JSON compression: on fallback activation, replace output with a compact preamble plus a capped text slice and recompute compression metadata, returning CompressionResult [src/compressors/json-result-compressor.ts:39-54].",
    "Observed fallback-regex policy: reduce candidate set before serialization by restricting to first 32 terms in terms.slice(0,32) and joining them [src/suite-benchmark.ts:1044-1047].",
    "Router-path fallback behavior cannot be fully resolved from verified code text; stripRouterOutputContractText is only a ranked symbol hit with no implementation slice exposed [src/router.ts:283-285].",
    "validation_commands=evidence packet proposes npm test as the validation starting point."
  ],
  "unknowns": [
    "Router safety inputs/outputs are not fully provable: endpoint list is empty and we only have a symbol hint for stripRouterOutputContractText(), not its body [src/router.ts:283-285].",
    "Exact route owner boundaries for MAX_FALLBACK_DEPTH/MAX_FALLBACK_FILES are unknown (constants only), so scope/enforcement context is incomplete [src/repo-fingerprint.ts:7-8].",
    "Some flow edges are low-confidence/name-only (e.g., compressJsonResult -> fallback, tokenOptCodeGraphPlanLines -> buildCodeGraphFallbackRegex), so exact end-to-end routing chain remains partially inferred."
  ]
}
```

## Validation

- TokenOpt: `cmd /c "set NODE_OPTIONS=--max-old-space-size=4096&& npm run -s build && npm run -s test -- --runInBand"` passed 98/98.
- CodeGraph: `cmd /c npm run -s build` passed.
- CodeGraph profile test: `cmd /c npx vitest run tests/v2/mcp-client-profile.test.ts` passed 7/7.
- Benchmark reruns: baseline, mcp-only, codegraph-only, tokenopt-codegraph, tokenopt-codegraph-natural current outputs are stored under `benchmark-results/`.
