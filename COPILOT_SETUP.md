# TokenOpt + GitHub Copilot Setup

This guide is for GitHub Copilot surfaces. TokenOpt supports Copilot through MCP, custom instructions, native prompt files, and optional VS Code/Copilot policy hooks.

## What Works Today

Implemented:

- TokenOpt MCP stdio server: `tokenopt mcp`
- One-command project setup: `tokenopt setup copilot`
- Alias for install flows: `tokenopt install copilot`
- Copilot custom instructions: `.github/copilot-instructions.md`
- Copilot path-specific instructions: `.github/instructions/tokenopt.instructions.md`
- Copilot custom agent profile: `.github/agents/tokenopt-cost-gate.agent.md`
- Agent instructions: `AGENTS.md`
- Native Copilot prompt files: `.github/prompts/*.prompt.md`
- Instruction audit: `tokenopt instructions audit`
- Copilot setup verification: `tokenopt doctor copilot`

Not implemented yet:

- `tokenopt hook copilot ...`
- Copilot hook JSON adapter
- Copilot-specific benchmark runner

## What Needs Setup For Copilot?

| Surface | Needed? | TokenOpt setup |
| --- | --- | --- |
| Copilot CLI MCP server | Yes for Copilot CLI | `tokenopt setup copilot --scope user` merges `tokenopt` into `<home>/.copilot/mcp-config.json`. |
| VS Code Copilot Agent MCP server | Yes for VS Code Chat/Agent | `tokenopt setup copilot --scope repo` writes `.vscode/mcp.json` with `tokenopt` and optional `codegraph` servers. |
| Repo instructions | Yes | `tokenopt setup copilot` writes `.github/copilot-instructions.md`. |
| Path instructions | Recommended | `tokenopt setup copilot` writes `.github/instructions/tokenopt.instructions.md` with `applyTo: "**"`. |
| Custom agent | Recommended | `tokenopt setup copilot` writes `.github/agents/tokenopt-cost-gate.agent.md`. |
| Agent instructions | Recommended | `tokenopt setup copilot` writes `AGENTS.md` by default; use `--no-agents` to skip. |
| Native prompt files | Recommended | `tokenopt setup copilot` writes `.github/prompts/*.prompt.md` by default; use `--no-prompts` to skip. |
| Skills | No for V1 | TokenOpt is not packaged as a Copilot skill. MCP + instructions are enough for current behavior. |
| Hooks | Optional policy gateway | `tokenopt setup copilot --gateway-level policy` writes `.github/hooks/tokenopt-gateway.json` for VS Code/Copilot hooks. |

Scope meaning:

```text
--scope user  -> repo instructions + local Copilot CLI MCP config
--scope repo  -> repo instructions + VS Code workspace MCP config; use after user MCP is installed, or pair with GitHub.com cloud MCP settings
--scope both  -> repo instructions + local Copilot CLI MCP config + VS Code workspace MCP config + cloud setup guidance
```

## Prerequisites

- Node.js `>=20`
- npm
- TokenOpt built locally:

Optional:

- `rg` / ripgrep on PATH for faster MCP search. If unavailable or blocked, TokenOpt falls back to `git`, then a bounded built-in Node scanner.

```powershell
cd <tokenopt-repo>
npm.cmd install
npm.cmd run build
node dist\cli.js doctor
```

On Windows PowerShell, use `npm.cmd` if `npm.ps1` is blocked.

## Setup Option A: Auto Setup For A Project

Use this for each repo where Copilot should use TokenOpt:

```powershell
cd <target-repo>
node <tokenopt-repo>\dist\cli.js setup copilot --scope both
node <tokenopt-repo>\dist\cli.js doctor copilot
```

Expected result:

```text
.github/copilot-instructions.md
.github/instructions/tokenopt.instructions.md
.github/agents/tokenopt-cost-gate.agent.md
.github/prompts/business-deep-dive.prompt.md
.github/prompts/build-handoff.prompt.md
.github/prompts/context-budget.prompt.md
.github/prompts/dependency-analysis.prompt.md
.github/prompts/field-impact.prompt.md
.github/prompts/flow-trace.prompt.md
.github/prompts/investigate-flow.prompt.md
.github/prompts/e2e-trace-flow.prompt.md
.github/prompts/implement-feature.prompt.md
.github/prompts/investigate-pbi.prompt.md
.github/prompts/onboarding-guide.prompt.md
.github/prompts/pbi-plan.prompt.md
.github/prompts/performance-analysis.prompt.md
.github/prompts/requirement-analysis.prompt.md
.github/prompts/refactor-code.prompt.md
.github/prompts/refactor-scope.prompt.md
.github/prompts/repo-benchmark-analysis.prompt.md
.github/prompts/review-code.prompt.md
.github/prompts/security-audit.prompt.md
.github/prompts/spec-autorun.prompt.md
.github/prompts/spec-feature-plan.prompt.md
.github/prompts/startup-flow.prompt.md
.github/prompts/bug-trace.prompt.md
.github/prompts/trace-bug.prompt.md
.github/prompts/write-unittest-class.prompt.md
.github/prompts/write-unittest.prompt.md
.github/prompts/promote-review-memory.prompt.md
AGENTS.md
.vscode/mcp.json
<home>/.copilot/mcp-config.json
```

`<home>/.copilot/mcp-config.json` is user-global for Copilot CLI. `.vscode/mcp.json` is workspace-local for VS Code Copilot Agent. Once the CLI `tokenopt` MCP server is installed in the user config, it is available from other local repos too. The repo instruction files and VS Code MCP config are project-specific, so run `tokenopt setup copilot --scope repo` inside each project that should steer Copilot toward TokenOpt in VS Code.

Useful variants:

```powershell
# Only install repo instructions; do not touch user MCP config.
node <tokenopt-repo>\dist\cli.js setup copilot --scope repo

# Install local Copilot CLI MCP config and repo instructions, but skip AGENTS.md.
node <tokenopt-repo>\dist\cli.js setup copilot --scope user --no-agents

# Install instructions and MCP config, but skip reusable Copilot slash prompts.
node <tokenopt-repo>\dist\cli.js setup copilot --scope user --no-prompts

# Full mode for repos where Copilot should run builds/tests through TokenOpt MCP.
node <tokenopt-repo>\dist\cli.js setup copilot --scope user --include-run-command
```

After setup, use Copilot UI normally. You can type natural prompts such as `write unit tests for OrderService`, or use native prompt files from chat, for example `/investigate-flow <area>`, `/e2e-trace-flow <endpoint or UI action>`, `/bug-trace <failing test or stack frame>`, `/write-unittest-class OrderService payment authorization`, `/investigate-pbi <PBI>`, `/security-audit <diff or PR scope>`, or `/review-code <diff>`.

The generated Copilot CLI MCP entry uses:

```json
{
  "type": "local",
  "command": "node",
  "args": ["<tokenopt-repo>/dist/cli.js", "mcp", "--mode", "lite"]
}
```

It deliberately avoids `npm`, `npm.ps1`, and PowerShell shims.

The generated VS Code workspace MCP entry in `.vscode/mcp.json` uses VS Code's `servers` shape:

```json
{
  "servers": {
    "tokenopt": {
      "type": "stdio",
      "command": "node",
      "args": ["<tokenopt-repo>/dist/cli.js", "mcp", "--mode", "lite"]
    }
  }
}
```

For VS Code Copilot Agent, reload VS Code or run `MCP: List Servers`, start `tokenopt` and `codegraph`, and confirm the tools are enabled from the chat Configure Tools picker. If VS Code only uses grep/search, first confirm `.vscode/mcp.json` exists and the MCP servers are enabled/trusted.

## Setup Option B: Manual Copilot CLI Local MCP

Use this when Copilot CLI runs on your machine and can access the TokenOpt build output.

### 1. Create or edit Copilot MCP config

Copilot CLI reads MCP servers from:

```text
<home>/.copilot/mcp-config.json
```

Create the directory if needed:

```powershell
New-Item -ItemType Directory -Force $HOME\.copilot
notepad $HOME\.copilot\mcp-config.json
```

Add:

```json
{
  "mcpServers": {
    "tokenopt": {
      "type": "local",
      "command": "node",
      "args": ["<tokenopt-repo>/dist/cli.js", "mcp", "--mode", "lite"],
      "env": {},
      "tools": [
        "contextgate_get_context",
        "tokenopt_compile_evidence",
        "tokenopt_search",
        "tokenopt_read_file"
      ]
    }
  }
}
```

Use `--mode full` and add `tokenopt_run_command`, `tokenopt_project_facts` only when command execution is intentionally exposed.

### 2. Add repo instructions

For each repo where Copilot should use TokenOpt:

```powershell
cd <target-repo>
node <tokenopt-repo>\dist\cli.js instructions install --target copilot
node <tokenopt-repo>\dist\cli.js instructions install --target copilot-path
node <tokenopt-repo>\dist\cli.js instructions install --target copilot-agent
node <tokenopt-repo>\dist\cli.js instructions install --target agents
```

This creates or updates:

```text
.github/copilot-instructions.md
.github/instructions/tokenopt.instructions.md
.github/agents/tokenopt-cost-gate.agent.md
AGENTS.md
```

The installed block tells Copilot:

- Use ContextGate as an evidence broker only when it can replace broad exploration.
- Call `contextgate_get_context` with the natural task, task type, required slots, budget, and quality rubric; keep `tokenopt_compile_evidence` as legacy/debug fallback.
- If `answerable=true`, answer from the packet and do not run more shell/search calls.
- If slots are missing, refill only those named slots. In normal shell-enabled sessions, avoid MCP-first plus shell fallback for exact code-flow/class/PBI tasks.

The user does not need to mention `contextgate_get_context` or `tokenopt_compile_evidence` in normal prompts. After setup, prompts such as:

```text
Investigate checkout flow failure
Based on this PBI, help me investigate and plan implementation
Please help me write unit tests for OrderService
```

should be routed by the instruction layer. The exact MCP tool name belongs in `.github/copilot-instructions.md`, `AGENTS.md`, or Codex hook context, not in every user prompt.

Do not paste benchmark or setup-injection text into the chat prompt. Lines such as `Project instruction injected by TokenOpt setup:`, `The user may ask naturally...`, or `When TokenOpt MCP tools are available...` are internal setup/report text. Pasting them into a normal task duplicates instructions and commonly increases input tokens.

Important: Copilot instructions are a soft routing signal, not a hard enforcement boundary. If a Copilot surface does not load repository instructions or does not select the custom agent, it may ignore TokenOpt unless the prompt names the tool. Verify instruction loading before measuring cost.

### 3. Verify inside Copilot CLI

Start Copilot CLI in the target repo:

```powershell
cd <target-repo>
gh copilot
```

Inside Copilot CLI, check MCP status:

```text
/mcp show
/mcp show tokenopt
```

Then prompt:

```text
Use TokenOpt as a cost gate.
Call tokenopt_compile_evidence with task_type=build_handoff for this repo because this is a broad handoff task.
If answerable=true, answer from the packet and do not call shell/search again.
```

Expected behavior:

- Copilot sees `tokenopt` MCP.
- Copilot calls `tokenopt_compile_evidence`.
- If the packet is answerable, Copilot stops gathering evidence and answers.

If it does not call TokenOpt for natural prompts:

- In Copilot Chat, expand response references and confirm `.github/copilot-instructions.md` or `.github/instructions/tokenopt.instructions.md` is listed.
- In Copilot CLI, run `/agent` and confirm `tokenopt-cost-gate` is available for broad repo/business/planning tasks.
- Run `/mcp show tokenopt` and confirm `tokenopt_compile_evidence`, `tokenopt_search`, and `tokenopt_read_file` are enabled.
- If the instruction files are not referenced, fix Copilot settings for custom instructions before benchmarking.

## Setup Option C: Interactive `/mcp add`

If you prefer interactive setup:

1. Open Copilot CLI.
2. Run:

```text
/mcp add
```

3. Enter:

```text
Server Name: tokenopt
Server Type: Local or STDIO
Command: node <tokenopt-repo>/dist/cli.js mcp
Args: --mode lite
Tools: tokenopt_compile_evidence,tokenopt_search,tokenopt_read_file
```

4. Save with `Ctrl+S`.
5. Run:

```text
/mcp show tokenopt
```

## Setup Option D: GitHub.com Copilot Cloud Agent / Code Review

Do not use the local Windows path in cloud agent config:

```text
<tokenopt-repo>/dist/cli.js
```

That path exists only on your machine. GitHub.com Copilot cloud agent runs in an ephemeral Linux sandbox, so it cannot access your local repo path.

For cloud agent or Copilot code review, TokenOpt must be available inside the cloud sandbox. That means one of these:

- Publish TokenOpt as an npm package and use `npx`.
- Check TokenOpt into the target repo and call it with a relative Linux path.
- Build a remote HTTP MCP server and configure Copilot to use that URL.

Example cloud-compatible MCP JSON after publishing:

```json
{
  "mcpServers": {
    "tokenopt": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@tokenopt/cli", "mcp", "--mode", "lite"],
      "tools": [
        "tokenopt_compile_evidence",
        "tokenopt_search",
        "tokenopt_read_file"
      ]
    }
  }
}
```

Then configure it in the repository on GitHub.com:

```text
Repository -> Settings -> Copilot -> MCP servers
```

Important cloud caveats:

- Copilot cloud/code review can use MCP tools, but local filesystem paths from your PC will not exist.
- Allowlist specific tools instead of `*`.
- Avoid exposing `tokenopt_run_command` in cloud/code review unless you intentionally want command execution.
- Cloud agent runs non-interactively; do not rely on prompts for approval.

## Gateway Levels

Routing gateway is the default:

```text
tokenopt setup copilot --scope user|repo|both
tokenopt install copilot --scope user|repo|both
```

This installs MCP, instructions, custom agent, and prompt files. It is cheap and portable across Copilot surfaces, but it is advisory: the model can still decide Jira/Confluence is enough.

Policy gateway adds VS Code/Copilot hooks:

```text
tokenopt setup copilot --scope both --gateway-level policy
tokenopt hook copilot user-prompt-submit|pre-tool-use|post-tool-use|agent-stop
```

Policy gateway uses `UserPromptSubmit`, `PostToolUse`, `PreToolUse`, and `Stop` hooks. It detects PBI/Jira/Confluence/requirement + code/implement/test/impact/debug intent, marks requirement acquisition after Jira/Confluence/GitHub tools, requires `contextgate_get_context` with `external_artifacts` before raw source exploration or final answer, and blocks redundant source acquisition after `answerable=true`.

Default policy mode is shadow. Configure hard mode only after verifying hooks load in the GitHub Copilot Chat Hooks output channel:

```json
{
  "policy": {
    "gateway": {
      "mode": "hard",
      "requireContextGateFor": ["pbi_code", "requirement_code", "review_business_coverage"]
    }
  }
}
```

## Recommended Prompt

Use this prompt pattern in Copilot:

```text
Use TokenOpt as a cost gate.
Call tokenopt_compile_evidence only if it can replace broad exploration for this task.
If answerable=true and missing=[], answer from the evidence packet and do not call shell/search again.
If missing is non-empty, use only allowed_followups in strict MCP-only mode; otherwise do not repeat MCP acquisition through shell.

Task: <your actual task>
```

User prompt should contain only the actual task. Do not include copied benchmark fields such as `injectedInstruction` or `actualPromptSentToCodex`.

## Troubleshooting

If Copilot cannot see TokenOpt:

```text
/mcp show
/mcp show tokenopt
```

For VS Code Copilot Agent, use Command Palette commands instead:

```text
MCP: List Servers
MCP: Open Workspace Folder Configuration
```

Check:

- `node` is on PATH.
- `<tokenopt-repo>/dist/cli.js` exists.
- `npm.cmd run build` was run after code changes.
- Copilot CLI: `<home>/.copilot/mcp-config.json` is valid JSON and contains `mcpServers.tokenopt`.
- VS Code: `.vscode/mcp.json` is valid JSON and contains `servers.tokenopt`.
- Tool names are allowlisted correctly.
- `.github/instructions/tokenopt.instructions.md` exists and contains `applyTo: "**"`.
- `.github/agents/tokenopt-cost-gate.agent.md` exists if your Copilot surface supports project custom agents.

If Copilot still uses shell too much:

- Confirm `.github/copilot-instructions.md` contains the TokenOpt block.
- In VS Code, confirm the chat Configure Tools picker lists and enables `contextgate_get_context`, `tokenopt_compile_evidence`, `codegraph_context`, and `codegraph_slice`.
- Prompt explicitly for broad tasks: "Use TokenOpt as a cost gate; call tokenopt_compile_evidence only if it can replace broad exploration."
- Ask it to call `tokenopt_compile_evidence` by name.
- For existing-flow prompts in shell-enabled sessions, do not force MCP-first if the answer still needs line-level code proof. Use native narrow search/read directly, or run a strict MCP-only session.
- For business/domain prompts, make sure the packet is `task_type=research_business`; it should include business purpose, likely users, core capabilities, major project areas, domain terms, and final-answer sections.
- For stricter enforcement in VS Code/Copilot, rerun setup with `--gateway-level policy` and verify `.github/hooks/tokenopt-gateway.json` is loaded.

## References

- GitHub Copilot CLI MCP config: <https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers>
- GitHub Copilot custom instructions: <https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions>
- GitHub Copilot repository MCP config: <https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers>
- GitHub Copilot hooks reference: <https://docs.github.com/en/copilot/reference/hooks-reference>
- VS Code MCP servers: <https://code.visualstudio.com/docs/agent-customization/mcp-servers>
- VS Code MCP configuration reference: <https://code.visualstudio.com/docs/agents/reference/mcp-configuration>
