# TokenOpt Setup Guide

TokenOpt currently has four surfaces:

- MCP server: `tokenopt mcp`, the main optimized path.
- Codex hooks: guardrails for Codex hook events.
- Copilot setup: MCP config plus repository instructions.
- Benchmarks: deterministic acquisition benchmark and real `codex exec --json` benchmark.

For GitHub Copilot setup, see [COPILOT_SETUP.md](COPILOT_SETUP.md).

## Prerequisites

- Node.js `>=20`
- npm
- For agent-level benchmarks: `npx @openai/codex@0.137.0`

Optional:

- `rg` / ripgrep on PATH for faster MCP search. If unavailable or blocked, TokenOpt falls back to `git`, then a bounded built-in Node scanner.

On Windows PowerShell, prefer `.cmd` shims if `npm.ps1` is blocked:

```powershell
npm.cmd install
npm.cmd run build
```

## Local Build

From the TokenOpt repo:

```powershell
cd <tokenopt-repo>
npm.cmd install
npm.cmd run build
node dist\cli.js doctor
```

Initialize per-repo config when needed:

```powershell
node <tokenopt-repo>\dist\cli.js init
```

Config precedence:

```text
built-in defaults -> ~/.tokenopt/config.json -> <repo>/.tokenopt/config.json -> env/CLI flags
```

## Codex MCP Setup

This is the recommended mode for optimization because it makes TokenOpt the acquisition path instead of letting the agent freely alternate between shell and MCP.

Add this to `<home>/.codex/config.toml`:

```toml
[mcp_servers.tokenopt]
command = "node"
args = ["<tokenopt-repo>/dist/cli.js", "mcp", "--mode", "lite"]
```

For strict runs, disable Codex's built-in shell tool and force the agent through TokenOpt MCP:

```powershell
npx.cmd -y @openai/codex@0.137.0 exec `
  --json `
  --ephemeral `
  --skip-git-repo-check `
  --disable shell_tool `
  -C <target-repo> `
  -c "mcp_servers.tokenopt.command='node'" `
  -c "mcp_servers.tokenopt.args=['<tokenopt-repo>/dist/cli.js','mcp','--mode','lite']" `
  "Use ContextGate as an evidence broker when it can replace broad exploration. Keep the user prompt natural, answer from the packet if answerable=true, and refill only named missing slots."
```

TokenOpt MCP defaults to lite mode so the MCP tool schemas do not cost more context than they save. Lite mode exposes:

```text
contextgate_get_context
tokenopt_compile_evidence
tokenopt_search
tokenopt_read_file
```

Full mode adds command execution and standalone project facts:

```text
node <tokenopt-repo>\dist\cli.js mcp --mode full
```

## Agent Instructions

MCP only exposes tools. The agent also needs instructions that tell it when TokenOpt is cheaper than normal exploration, and when to skip MCP-first to avoid double-spending context.

Preview the reusable instruction snippet:

```powershell
node <tokenopt-repo>\dist\cli.js instructions emit --target agents
```

Install it into repo instructions:

```powershell
cd <target-repo>
node <tokenopt-repo>\dist\cli.js instructions install --target agents
node <tokenopt-repo>\dist\cli.js instructions install --target copilot
node <tokenopt-repo>\dist\cli.js instructions install --target copilot-path
node <tokenopt-repo>\dist\cli.js instructions install --target copilot-agent
```

Targets:

```text
agents        -> AGENTS.md
codex         -> AGENTS.md
copilot       -> .github/copilot-instructions.md
copilot-path  -> .github/instructions/tokenopt.instructions.md
copilot-agent -> .github/agents/tokenopt-cost-gate.agent.md
```

The installed block is wrapped in markers:

```text
<!-- tokenopt:mcp-instructions:start -->
...
<!-- tokenopt:mcp-instructions:end -->
```

Running install again updates the existing block instead of appending duplicates.

Copilot may ignore MCP unless the relevant instruction/custom-agent files are loaded for the current surface. After setup, verify Copilot references `.github/copilot-instructions.md` or `.github/instructions/tokenopt.instructions.md`, and verify the custom agent appears in Copilot CLI with `/agent` when that surface supports project custom agents.

Daily prompts should stay natural. You should not have to write "use TokenOpt" or "use CodeGraph" in normal prompts such as "review this PR", "investigate this PBI", or "write tests for this behavior". The installed instruction layer maps those prompts to the evidence route.

If you also want CodeGraph evidence in Copilot, configure it during setup:

```powershell
$env:TOKENOPT_CODEGRAPH_ROOT='D:\Personal\Projects\code-graph'
node <tokenopt-repo>\dist\cli.js setup copilot --scope both --include-codegraph
```

or pass it explicitly:

```powershell
node <tokenopt-repo>\dist\cli.js setup copilot --scope both --include-codegraph --codegraph-root D:\Personal\Projects\code-graph
```

Expected agent flow:

```text
1. Keep the user's natural prompt and project/agent instructions authoritative.
2. Classify the evidence need: broad/unknown owner, exact file/symbol/flow, concrete diff/PR, or missing artifact.
3. Use contextgate_get_context only when it can replace broad exploration or fill PBI/plan/implement/review evidence slots cheaply.
4. Pass the natural task, inferred task_type, cwd, required_slots, budget_tokens, and quality_rubric.
5. For concrete review prompts, use review evidence (`tokenopt_compile_evidence` with `task_type=review_diff`) only when it replaces broad source exploration.
6. If CodeGraph is configured, use `codegraph_context` for compact graph/source evidence and `codegraph_slice` only for exact missing slices.
7. If answerable=true and recommended_next_action=answer_now, answer from the packet.
8. If slots are missing, refill only those named slots; avoid MCP-first plus shell fallback for exact code-flow/class/PBI tasks.
9. For review, start from net diff/PR/changed files and use Jira, Confluence, or direct attachments only as requirement evidence for business/test coverage.
10. Redundant MCP exploration after answerable=true is gated.
11. With Codex hooks trusted, shell grep/search after a packet is denied when ContextGate has already provided answer-now guidance or exact followups.
```

For prompts such as "understand checkout flow end-to-end so I can draw Mermaid", use ContextGate only in strict MCP-only mode or when the packet can provide the full evidence path. In normal shell-enabled agent mode, start with narrow native search/read instead of calling ContextGate first and then repeating the same work through shell. For prompts such as "study business and deep dive that business", ContextGate can be useful because docs/inventory often provide enough evidence without shell fallback.

Do not paste benchmark/report fields into normal prompts. Text such as `Project instruction injected by TokenOpt setup:`, `injectedInstruction`, or `actualPromptSentToCodex` is diagnostic output for benchmark reports, not something the user should include in chat.

`contextgate_get_context` defaults to compact broker output. Full evidence is saved in `state_path`; pass `detail=full` only when debugging or producing a benchmark/audit report. `tokenopt_compile_evidence` remains available for older instructions and direct benchmark compatibility.

## Codex Hooks Setup

Hooks are useful as guardrails, but they are weaker than strict MCP mode because hook firing and trust are controlled by the host Codex environment.

Install hooks:

```powershell
node <tokenopt-repo>\dist\cli.js install codex --scope user
```

Then open Codex and run:

```text
/hooks
```

Review and trust the TokenOpt hook commands.

Verify hook canary:

```powershell
node <tokenopt-repo>\dist\cli.js doctor codex-hooks
```

If the WindowsApps `codex.exe` alias returns `Access is denied`, use:

```powershell
npx.cmd -y @openai/codex@0.137.0 exec --help
```

## Run Benchmarks

Deterministic acquisition benchmark:

```powershell
node dist\cli.js benchmark daily `
  --repo <repo-a> `
  --repo <repo-b> `
  --task all `
  --mode all `
  --show-answers `
  --out benchmark-results\daily-large-repos.json
```

Real Codex CLI benchmark:

```powershell
node dist\cli.js benchmark codex-daily `
  --repo <target-repo> `
  --task build-handoff `
  --mode baseline,tokenopt-mcp `
  --show-answers `
  --out benchmark-results\codex-daily-hadoop-build.json
```

Modes:

```text
baseline: Codex CLI can use normal shell/tool behavior.
tokenopt-mcp: Codex CLI has shell_tool disabled and must use TokenOpt MCP.
tokenopt-mcp+gate: TokenOpt MCP plus an extra redundant call to verify the answerability gate.
```

Metrics recorded:

```text
input_tokens
cached_input_tokens
output_tokens
reasoning_output_tokens
tool_calls
mcp_calls
shell_calls
tool_input_chars
tool_output_chars
quality_score
quality_checks
raw JSONL log path
```

## Copilot Status

Copilot is implemented as MCP + instructions. Native Copilot hooks are not implemented yet.

Current support:

- TokenOpt MCP server: implemented.
- Codex hook adapter/install: implemented.
- Codex CLI benchmark runner: implemented.
- Copilot local CLI setup: `tokenopt setup copilot --scope user|repo|both`
- Copilot instruction install: `.github/copilot-instructions.md`
- Copilot path instruction install: `.github/instructions/tokenopt.instructions.md`
- Copilot custom agent install: `.github/agents/tokenopt-cost-gate.agent.md`
- Agent instruction install: `AGENTS.md`
- Copilot setup doctor: `tokenopt doctor copilot`

Not yet implemented:

- Copilot hook adapter
- Copilot hook output schema
- Copilot-specific benchmark runner

For a project-level setup:

```powershell
cd <target-repo>
node <tokenopt-repo>\dist\cli.js setup copilot --scope both
node <tokenopt-repo>\dist\cli.js doctor copilot
```

For TokenOpt + CodeGraph in Copilot:

```powershell
node <tokenopt-repo>\dist\cli.js setup copilot --scope both --include-codegraph --codegraph-root D:\Personal\Projects\code-graph
node <tokenopt-repo>\dist\cli.js doctor copilot
```

The core policy and evidence packet model are reusable for Copilot hooks, but a separate hook adapter is still required.
