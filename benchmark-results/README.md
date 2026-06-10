# Benchmark Reports

This directory is ignored by default because benchmark runs can generate large raw transcripts.

Committed reports are curated artifacts. Raw JSONL logs and stdout/stderr captures are intentionally not committed unless a run specifically needs archival of every model/tool event.

## Doughnut 37-Prompt Benchmark

Generated on 2026-06-10 from the complete 37-prompt ContextGate suite against `D:\Personal\Projects\doughnut`.

Included files:

- `doughnut-37-baseline-vs-router-best-2026-06-10.md`: runner summary report.
- `doughnut-37-baseline-vs-router-best-2026-06-10.json`: structured runner output.
- `doughnut-37-baseline-vs-router-best-2026-06-10.detailed.md`: detailed prompt, setup, answer, token, and tool/MCP timeline report.
- `doughnut-37-baseline-vs-router-best-2026-06-10.trace.json`: structured detailed trace derived from raw JSONL logs.
- `doughnut-37-prompt-suite.input.json`: suite input used for this run, with all tasks mapped to the Doughnut repo.
- `render-detailed-suite-report.mjs`: local renderer used to produce the detailed Markdown and trace JSON.

Raw JSONL logs are excluded from git. Re-run the benchmark to regenerate them when full event-level transcripts are needed.
