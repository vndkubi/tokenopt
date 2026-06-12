# Benchmark Reports

This directory is ignored by default because benchmark runs can generate large raw transcripts.

Committed reports are curated artifacts. Raw JSONL logs and stdout/stderr captures are intentionally not committed unless a run specifically needs archival of every model/tool event.

## Workflow A/B Benchmark

Generated on 2026-06-12 from the workflow A/B benchmark against `D:\Personal\Projects\doughnut`.

Feature: `doughnut-recall-forecast`

Compared workflows:

- `baseline`
- `tokenopt`
- `speckit`
- `speckit-tokenopt`

Included files:

- `workflow-ab-doughnut-recall-forecast.md`: Markdown summary report.
- `workflow-ab-doughnut-recall-forecast.json`: structured runner output.
- `features/doughnut-recall-forecast.json`: feature input used for the run.
- `workflow-ab-doughnut-recall-forecast/*.jsonl`: raw Codex JSONL logs for each workflow.
- `workflow-ab-doughnut-recall-forecast/*.patch`: generated diff for each workflow.
- `workflow-ab-doughnut-recall-forecast/*-test-output.txt`: validation output for each workflow.

The generated benchmark worktrees are excluded from git. Re-run the benchmark to regenerate them when full checkout state is needed.
