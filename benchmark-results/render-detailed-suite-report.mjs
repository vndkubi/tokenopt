import fs from "node:fs";
import path from "node:path";

const [payloadPath, markdownPath, traceJsonPath] = process.argv.slice(2);
if (!payloadPath || !markdownPath || !traceJsonPath) {
  console.error("Usage: node benchmark-results/render-detailed-suite-report.mjs <suite-json> <markdown-out> <trace-json-out>");
  process.exit(2);
}

const payload = JSON.parse(fs.readFileSync(payloadPath, "utf8"));
const rows = payload.rows ?? [];
const traces = rows.map((row) => ({ ...row, trace: parseRawLog(row.rawLogPath) }));
const report = {
  generatedAt: new Date().toISOString(),
  sourcePayload: path.resolve(payloadPath),
  suite: payload.suite,
  modes: payload.modes,
  rows: traces.map((row) => ({
    repo: row.repo,
    taskId: row.taskId,
    taskClass: row.taskClass,
    mode: row.mode,
    prompt: row.prompt,
    codexPrompt: row.codexPrompt,
    finalAnswer: row.finalAnswer,
    rawLogPath: row.rawLogPath,
    lastMessagePath: row.lastMessagePath,
    usage: row.usage,
    qualityScore: row.qualityScore,
    qualityChecks: row.qualityChecks,
    correct: row.correct,
    jsonValid: row.jsonValid,
    exitCode: row.exitCode,
    durationMs: row.durationMs,
    toolCalls: row.toolCalls,
    mcpCalls: row.mcpCalls,
    shellCalls: row.shellCalls,
    toolInputChars: row.toolInputChars,
    toolOutputChars: row.toolOutputChars,
    warnings: row.warnings,
    expectedEvidence: row.expectedEvidence,
    qualityRubric: row.qualityRubric,
    agentMessages: row.trace.agentMessages,
    toolTimeline: row.trace.toolTimeline
  }))
};

fs.writeFileSync(traceJsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
fs.writeFileSync(markdownPath, renderMarkdown(payload, traces, traceJsonPath), "utf8");

function parseRawLog(rawLogPath) {
  const text = fs.existsSync(rawLogPath) ? fs.readFileSync(rawLogPath, "utf8") : "";
  const events = [];
  const stderrLines = [];
  let inStderr = false;
  for (const line of text.split(/\r?\n/)) {
    if (line.trim() === "--- STDERR ---") {
      inStderr = true;
      continue;
    }
    if (inStderr) {
      if (line.trim()) stderrLines.push(line);
      continue;
    }
    if (!line.trim().startsWith("{")) continue;
    try {
      events.push(JSON.parse(line));
    } catch {
      // Keep the renderer tolerant of partial/incomplete logs.
    }
  }

  const agentMessages = [];
  const toolTimeline = [];
  let usage;
  for (const event of events) {
    if (event?.type === "turn.completed" && event.usage) {
      usage = event.usage;
    }
    if (event?.type !== "item.completed" || !event.item) continue;
    const item = event.item;
    if (item.type === "agent_message") {
      agentMessages.push({
        id: item.id,
        chars: item.text?.length ?? 0,
        estTokens: estTokens(item.text?.length ?? 0),
        text: item.text ?? ""
      });
    }
    if (item.type === "command_execution") {
      const input = item.command ?? "";
      const output = item.aggregated_output ?? "";
      toolTimeline.push({
        id: item.id,
        kind: "shell",
        name: "command_execution",
        status: item.status ?? "",
        exitCode: item.exit_code ?? null,
        inputChars: input.length,
        inputTokensEst: estTokens(input.length),
        outputChars: output.length,
        outputTokensEst: estTokens(output.length),
        input,
        outputPreview: preview(output, 4000)
      });
    }
    if (item.type === "mcp_tool_call") {
      const input = JSON.stringify(item.arguments ?? {}, null, 2);
      const result = JSON.stringify(item.result ?? item.error ?? {}, null, 2);
      toolTimeline.push({
        id: item.id,
        kind: "mcp",
        name: `${item.server ?? "mcp"}.${item.tool ?? "unknown"}`,
        status: item.status ?? "",
        exitCode: null,
        inputChars: input.length,
        inputTokensEst: estTokens(input.length),
        outputChars: result.length,
        outputTokensEst: estTokens(result.length),
        input,
        outputPreview: preview(result, 5000)
      });
    }
  }
  return { usage, stderrLines, agentMessages, toolTimeline };
}

function renderMarkdown(payload, rows, traceJsonPath) {
  const lines = [
    "# Doughnut 37-Prompt Benchmark: Baseline vs Router-Best",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Source JSON: ${path.resolve(payloadPath)}`,
    `Detailed trace JSON: ${path.resolve(traceJsonPath)}`,
    `Raw log dir: ${path.dirname(rows[0]?.rawLogPath ?? "")}`,
    "",
    "## Setup",
    "",
    "- Runner: `codex exec --json` via `tokenopt benchmark suite`.",
    "- Repo: `D:\\Personal\\Projects\\doughnut`.",
    "- Suite input: generated from `examples/contextgate-37-prompt-suite.example.json` with all 37 tasks mapped to project `doughnut`.",
    "- Modes: `baseline` and `router-best`.",
    "- Baseline setup: no TokenOpt MCP server injected; shell tool allowed; prompt asks Codex to keep exploration bounded.",
    "- Router-best setup: TokenOpt MCP server injected with `node D:/Personal/Projects/tokenopt/dist/cli.js mcp --mode lite`; shell disabled except tasks where router policy permits bounded fallback.",
    "- Token accounting: actual Codex usage is `input_tokens`, `cached_input_tokens`, `output_tokens`, and `reasoning_output_tokens` from `turn.completed.usage`; per-tool token counts are estimates from characters divided by 4.",
    "",
    "## Aggregate",
    "",
    table(
      ["Mode", "Runs", "Correct", "Avg input", "Avg cached", "Avg output", "Avg reasoning", "Avg total", "Avg tool", "Avg MCP", "Avg shell", "Avg duration ms"],
      aggregate(rows)
    ),
    "",
    "## Baseline Delta By Task",
    "",
    table(
      ["Task", "Baseline total", "Router total", "Delta", "Router MCP", "Router shell", "Baseline shell", "Baseline correct", "Router correct"],
      deltaRows(rows)
    ),
    "",
    "## Detailed Runs"
  ];

  const taskKeys = [...new Set(rows.map((row) => row.taskId))];
  for (const taskId of taskKeys) {
    const taskRows = rows.filter((row) => row.taskId === taskId);
    const first = taskRows[0];
    lines.push(
      "",
      `### ${taskId}`,
      "",
      `Class: \`${first.taskClass}\``,
      "",
      "User prompt:",
      fenced(first.prompt),
      "",
      "Expected evidence:",
      fenced(JSON.stringify(first.expectedEvidence, null, 2), "json"),
      "",
      "Quality rubric:",
      ...first.qualityRubric.map((item) => `- ${item}`)
    );
    for (const row of taskRows) {
      lines.push(
        "",
        `#### ${row.mode}`,
        "",
        table(
          ["Exit", "Correct", "Quality", "JSON", "Input", "Cached", "Output", "Reasoning", "Total", "Tool", "MCP", "Shell", "Tool in chars", "Tool out chars", "Duration ms", "Warnings"],
          [[
            String(row.exitCode),
            bool(row.correct),
            String(row.qualityScore),
            bool(row.jsonValid),
            String(row.usage?.input_tokens ?? 0),
            String(row.usage?.cached_input_tokens ?? 0),
            String(row.usage?.output_tokens ?? 0),
            String(row.usage?.reasoning_output_tokens ?? 0),
            String(totalTokens(row)),
            String(row.toolCalls),
            String(row.mcpCalls),
            String(row.shellCalls),
            String(row.toolInputChars),
            String(row.toolOutputChars),
            String(row.durationMs),
            String(row.warnings)
          ]]
        ),
        "",
        `Raw JSONL: ${row.rawLogPath}`,
        "",
        "Actual Codex prompt/setup sent:",
        fenced(row.codexPrompt ?? ""),
        "",
        "Agent messages before final/tool calls:",
        table(
          ["#", "Chars", "Est tokens", "Text"],
          row.trace.agentMessages.map((message, index) => [
            String(index + 1),
            String(message.chars),
            String(message.estTokens),
            inlinePreview(message.text, 220)
          ])
        ),
        "",
        "Tool/MCP timeline:",
        table(
          ["#", "Kind", "Name", "Status", "Exit", "Input chars", "Input tok est", "Output chars", "Output tok est", "Input / command", "Output preview"],
          row.trace.toolTimeline.map((call, index) => [
            String(index + 1),
            call.kind,
            call.name,
            call.status,
            call.exitCode === null ? "" : String(call.exitCode),
            String(call.inputChars),
            String(call.inputTokensEst),
            String(call.outputChars),
            String(call.outputTokensEst),
            inlinePreview(call.input, 260),
            inlinePreview(call.outputPreview, 360)
          ])
        ),
        "",
        "Final output:",
        fenced(row.finalAnswer ?? "", row.jsonValid ? "json" : "")
      );
    }
  }

  return `${lines.join("\n")}\n`;
}

function aggregate(rows) {
  const modes = [...new Set(rows.map((row) => row.mode))];
  return modes.map((mode) => {
    const modeRows = rows.filter((row) => row.mode === mode);
    return [
      mode,
      String(modeRows.length),
      `${modeRows.filter((row) => row.correct).length}/${modeRows.length}`,
      avg(modeRows, (row) => row.usage?.input_tokens ?? 0),
      avg(modeRows, (row) => row.usage?.cached_input_tokens ?? 0),
      avg(modeRows, (row) => row.usage?.output_tokens ?? 0),
      avg(modeRows, (row) => row.usage?.reasoning_output_tokens ?? 0),
      avg(modeRows, totalTokens),
      avg(modeRows, (row) => row.toolCalls ?? 0, 1),
      avg(modeRows, (row) => row.mcpCalls ?? 0, 1),
      avg(modeRows, (row) => row.shellCalls ?? 0, 1),
      avg(modeRows, (row) => row.durationMs ?? 0)
    ];
  });
}

function deltaRows(rows) {
  const taskIds = [...new Set(rows.map((row) => row.taskId))];
  return taskIds.map((taskId) => {
    const baseline = rows.find((row) => row.taskId === taskId && row.mode === "baseline");
    const router = rows.find((row) => row.taskId === taskId && row.mode === "router-best");
    const baselineTotal = baseline ? totalTokens(baseline) : 0;
    const routerTotal = router ? totalTokens(router) : 0;
    const delta = baselineTotal > 0 && router
      ? `${(((routerTotal - baselineTotal) / baselineTotal) * 100).toFixed(1)}%`
      : "";
    return [
      taskId,
      String(baselineTotal),
      String(routerTotal),
      delta,
      String(router?.mcpCalls ?? ""),
      String(router?.shellCalls ?? ""),
      String(baseline?.shellCalls ?? ""),
      baseline ? bool(baseline.correct) : "",
      router ? bool(router.correct) : ""
    ];
  });
}

function totalTokens(row) {
  return (row.usage?.input_tokens ?? 0) + (row.usage?.output_tokens ?? 0);
}

function avg(rows, getter, decimals = 0) {
  if (rows.length === 0) return "0";
  const value = rows.reduce((sum, row) => sum + getter(row), 0) / rows.length;
  return value.toFixed(decimals);
}

function table(header, rows) {
  return [
    `| ${header.map(cell).join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(cell).join(" | ")} |`)
  ].join("\n");
}

function cell(value) {
  return String(value).replace(/\r?\n/g, " ").replace(/\|/g, "\\|");
}

function fenced(text, language = "") {
  const value = text ?? "";
  const fence = value.includes("```") ? "````" : "```";
  return `${fence}${language}\n${value}\n${fence}`;
}

function preview(value, max) {
  const text = String(value ?? "");
  return text.length > max ? `${text.slice(0, max)}\n...[truncated ${text.length - max} chars; see raw JSONL for full output]` : text;
}

function inlinePreview(value, max) {
  return preview(value, max).replace(/\s+/g, " ").trim();
}

function estTokens(chars) {
  return Math.ceil(chars / 4);
}

function bool(value) {
  return value ? "yes" : "no";
}
