# Context Governor Suite Benchmark

Generated: 2026-06-16T22:51:03.960Z
Suite: mini-tokenopt-natural-comparison 2026-06-16
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: tokenopt-codegraph-natural
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M1-cli-commands | tokenopt-codegraph-natural | coding_coverage | coding_coverage | no | no | yes | 0.833 | 0.375 | 1 | yes | 64869 | 52096 |  | 5284 |  |  | 4764 | 74917 | 22821 |  | 0.365 | 1 | 1 | 0 | 12667 | 39139 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt-codegraph-natural | 1 | 1/1 | 0/1 | 64869 | 64869 | 5284 | 74917 | 22821 | 0.833 | 0.375 | 0.365 | 1.00 | 1.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| build_handoff | tokenopt-codegraph-natural | 1 | 1/1 | 0/1 | 64869 | 64869 | 5284 | 74917 | 22821 | 0.833 | 0.375 | 0.365 | 1.00 | 1.0 | 0.0 | 39139 |

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
| tokenopt | M1-cli-commands | tokenopt-codegraph-natural | coding_coverage | coding_coverage | no | no | yes | 0.833 | 0.375 | 1 | yes | 64869 | 52096 |  | 5284 |  |  | 4764 | 74917 | 22821 |  | 0.365 | 1 | 1 | 0 | 12667 | 39139 |

#### Output: tokenopt-codegraph-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-M1-tokenopt-codegraph-natural-v7-2026-06-17\tokenopt-M1-cli-commands-tokenopt-codegraph-natural.jsonl

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

- Route policy: coding evidence. Require owner files, symbols, tests, validation, and business behavior coverage before treating the answer as complete.
- Treat this as a normal developer request. The user's prompt, repository instructions, and any active agent instructions remain authoritative.
- Evidence intent for context acquisition only: "\"project_overview\": concise 1-2 line summary of this repository. \"commands\": top-level CLI commands from src/cli.ts. \" \": referenced by commands if inferable. \" \": implementation . Do not modify .". Use this semantic code question for context lookup inputs; keep the original user prompt for the final output shape.
- Do not pass output-schema boilerplate, JSON key names, benchmark harness text, or generic words like return/valid/compact as retrieval intent.
- Required evidence slots before final answer: source_files, symbols, risks, backend_entrypoint_api, service_domain_logic, business_invariants_or_bug_symptom, validation_commands, frontend_state_or_caller_when_present.
- Quality rubric to keep in mind: ["includes project summary","lists command families","references evidence-bearing files","mentions one key risk","contains valid compact JSON"].
- For broad or unknown-owner tasks, a compact context packet around 1200 tokens is usually the cheapest first step when available.
- Because the task already names concrete targets, prefer exact bounded source or graph lookups before broad context gathering.
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
{"project_overview":"TokenOpt is a TypeScript CLI repository for managing repository-local AI-coding workflow tooling (Codex/Copilot), including hook setup, instruction packaging, benchmarking, MCP mode, command wrapping, health checks, and reporting. Its `src/cli.ts` dispatches top-level CLI commands into dedicated command modules.","commands":["help (\"--help\"/\"-h\")","init","install","setup","hook","exec","mcp","benchmark","instructions","report","doctor"],"files":["src/cli.ts","src/config.ts","src/copilot-setup.ts","src/install.ts","src/codex-adapter.ts","src/copilot-adapter.ts","src/doctor.ts","src/exec.ts","src/mcp.ts","src/benchmark.ts","src/codex-benchmark.ts","src/suite-benchmark.ts","src/workflow-ab-benchmark.ts","src/instruction-audit.ts","src/observability.ts","src/report.ts","src/types.ts"],"risks":["The `exec` subcommand delegates directly to wrapped command execution from user args, which can execute arbitrary commands if invoked incorrectly.","`instructions install` and similar subcommands rely on strict positional parsing and exact string matches, so malformed CLI syntax quickly maps to usage/usage-like errors with no structured recovery.","Config/install commands write to filesystem locations with limited conflict handling beyond simple existence checks, so interrupted runs can leave partial generated/instrumented state."]}
```

Idea checks: 3/8 (0.375)

Critical misses: symbol:helpText
