# Realistic Natural Prompt Codex Benchmark - 2026-06-08

Runner: `node dist/cli.js benchmark codex-daily`, which calls real `npx @openai/codex@0.137.0 exec --json`.
Comparison: `baseline` natural prompt with normal shell tools vs `tokenopt-mcp-instructed` natural user prompt plus injected project/agent instruction and TokenOpt MCP.

Source JSON artifacts:
- D:\Personal\Projects\tokenopt\benchmark-results\codex-realistic-codegraph-tokenopt-2026-06-08.json
- D:\Personal\Projects\tokenopt\benchmark-results\codex-realistic-headroom-caveman-2026-06-08.json
- D:\Personal\Projects\tokenopt\benchmark-results\codex-realistic-repo-benchmark-analysis-2026-06-08.json

Code pushed before/while running benchmark: `9515847 Add realistic Codex benchmark tasks`, `cf8c827 Add repo benchmark analysis task`.

## Setup Applied

| repo | command | result |
| --- | --- | --- |
| doughnut | node D:/Personal/Projects/tokenopt/dist/cli.js setup copilot --scope repo | AGENTS.md updated; .github/copilot-instructions.md created/updated; repo already had other untracked .github/.vscode/docs/ai files |
| elasticsearch | same | AGENTS.md updated; .github/copilot-instructions.md created |
| hadoop | same | AGENTS.md and .github/copilot-instructions.md created; repo also had .codegraph/ untracked |

## Existing Benchmark Material Found

| repo | evidence paths | benchmark/eval material |
| --- | --- | --- |
| codegraph | docs/benchmarks/*; scripts/agent-eval/*; __tests__/evaluation/*; __tests__/db-perf.test.ts | A/B with/without CodeGraph, README benchmark, direct probes, eval recall/MRR/latency, DB perf regression |
| tokenopt | README.md; src/benchmark.ts; src/codex-benchmark.ts; src/suite-benchmark.ts | deterministic acquisition benchmark, real Codex CLI benchmark, suite/router benchmark |
| headroom | benchmarks/; pyproject.toml benchmark extra; docs/content/docs/benchmarks.mdx; docs/spec/* | compression/accuracy/latency benchmarks and evaluation tooling |
| caveman | benchmarks/; evals/; skills/caveman-compress/scripts/benchmark.py; README.md | Claude token benchmarks, skill eval arms, compression token savings validation |

## Task Catalog

| task | task_type | natural user prompt |
| --- | --- | --- |
| investigate-flow | investigate | Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files. |
| pbi-plan | implement | Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files. |
| write-unittest-class | write_unittest | Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files. |
| requirement-analysis | implement | Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files. |
| repo-benchmark-analysis | investigate | If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files. |

## Aggregate Summary

| scope | metric | baseline | tokenopt-mcp-instructed | reduction |
| --- | --- | --- | --- | --- |
| all_runs | runs | 20 | 20 |  |
| all_runs | completed | 17 | 19 |  |
| all_runs | timeout_or_failed | 3 | 1 |  |
| all_runs | correct_runs | 17 | 19 |  |
| all_runs | tool_calls | 639 | 43 | 93.3% |
| all_runs | shell_calls | 639 | 0 | 100.0% |
| all_runs | mcp_calls | 0 | 43 |  |
| all_runs | answerable_packets | 0 | 15 |  |
| all_runs | fallback_after_answerable | 0 | 0 |  |
| all_runs | tool_input_chars | 110443 | 20576 | 81.4% |
| all_runs | tool_output_chars | 9361139 | 253301 | 97.3% |
| all_runs | input_tokens | 6831007 | 1092017 | 84.0% |
| all_runs | cached_input_tokens | 5467008 | 657280 | 88.0% |
| all_runs | output_tokens | 87943 | 33298 | 62.1% |
| all_runs | reasoning_output_tokens | 39622 | 18349 | 53.7% |
| all_runs | duration_ms | 3283068 | 1306275 | 60.2% |
| completed_only | runs | 17 | 19 |  |
| completed_only | completed | 17 | 19 |  |
| completed_only | timeout_or_failed | 0 | 0 |  |
| completed_only | correct_runs | 17 | 19 |  |
| completed_only | tool_calls | 481 | 31 | 93.6% |
| completed_only | shell_calls | 481 | 0 | 100.0% |
| completed_only | mcp_calls | 0 | 31 |  |
| completed_only | answerable_packets | 0 | 15 |  |
| completed_only | fallback_after_answerable | 0 | 0 |  |
| completed_only | tool_input_chars | 79935 | 18431 | 76.9% |
| completed_only | tool_output_chars | 7233709 | 178537 | 97.5% |
| completed_only | input_tokens | 6831007 | 1092017 | 84.0% |
| completed_only | cached_input_tokens | 5467008 | 657280 | 88.0% |
| completed_only | output_tokens | 87943 | 33298 | 62.1% |
| completed_only | reasoning_output_tokens | 39622 | 18349 | 53.7% |
| completed_only | duration_ms | 2562998 | 1066255 | 58.4% |

Note: timeout rows have `input_tokens=0` because Codex did not emit `turn.completed.usage`; use `completed_only` token rows when comparing token usage without timeout artifacts. Timeout rows still count tool calls/output chars/duration.

## Paired Comparison

| repo | task | base_correct | tok_correct | base_exit | tok_exit | base_quality | tok_quality | base_checks | tok_checks | base_input | tok_input | input_delta | input_reduction | base_output | tok_output | output_delta | output_reduction | base_tools | tok_tools | base_shell | tok_shell | base_mcp | tok_mcp | base_answerable | tok_answerable | base_fallback | tok_fallback | base_tool_out | tok_tool_out | tool_out_reduction | base_ms | tok_ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| codegraph | investigate-flow | no | yes | null | 0 | 0.000 | 1.000 | 0/7 | 7/7 | 0 | 49,824 | +49824 | n/a | 0 | 1,672 | +1672 | n/a | 48 | 1 | 48 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 653,199 | 6,494 | 99.0% | 240,016 | 53,876 |
| codegraph | pbi-plan | yes | yes | 0 | 0 | 0.857 | 1.000 | 6/7 | 7/7 | 662,246 | 49,783 | -612463 | 92.5% | 6,884 | 1,472 | -5412 | 78.6% | 32 | 1 | 32 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 540,684 | 6,672 | 98.8% | 196,854 | 50,519 |
| codegraph | write-unittest-class | yes | yes | 0 | 0 | 1.000 | 1.000 | 7/7 | 7/7 | 500,095 | 49,791 | -450304 | 90.0% | 5,243 | 1,321 | -3922 | 74.8% | 27 | 1 | 27 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 276,284 | 6,578 | 97.6% | 164,486 | 44,940 |
| codegraph | requirement-analysis | yes | yes | 0 | 0 | 1.000 | 1.000 | 8/8 | 8/8 | 250,256 | 49,947 | -200309 | 80.0% | 3,587 | 1,637 | -1950 | 54.4% | 18 | 1 | 18 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 233,739 | 6,513 | 97.2% | 117,767 | 60,713 |
| tokenopt | investigate-flow | yes | yes | 0 | 0 | 1.000 | 1.000 | 7/7 | 7/7 | 414,970 | 49,649 | -365321 | 88.0% | 6,929 | 1,429 | -5500 | 79.4% | 41 | 1 | 41 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 178,864 | 6,211 | 96.5% | 187,574 | 47,449 |
| tokenopt | pbi-plan | yes | yes | 0 | 0 | 1.000 | 1.000 | 7/7 | 7/7 | 188,647 | 49,834 | -138813 | 73.6% | 4,743 | 1,424 | -3319 | 70.0% | 19 | 1 | 19 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 122,011 | 6,297 | 94.8% | 132,147 | 47,072 |
| tokenopt | write-unittest-class | yes | yes | 0 | 0 | 1.000 | 0.857 | 7/7 | 6/7 | 176,384 | 49,705 | -126679 | 71.8% | 3,167 | 1,254 | -1913 | 60.4% | 16 | 1 | 16 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 112,931 | 6,259 | 94.5% | 93,867 | 43,706 |
| tokenopt | requirement-analysis | yes | yes | 0 | 0 | 1.000 | 1.000 | 8/8 | 8/8 | 392,081 | 49,828 | -342253 | 87.3% | 4,880 | 1,533 | -3347 | 68.6% | 32 | 1 | 32 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 161,340 | 6,526 | 96.0% | 178,037 | 48,833 |
| headroom | investigate-flow | no | yes | null | 0 | 0.000 | 1.000 | 0/7 | 7/7 | 0 | 104,756 | +104756 | n/a | 0 | 2,453 | +2453 | n/a | 42 | 4 | 42 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 765,186 | 19,770 | 97.4% | 240,027 | 81,102 |
| headroom | pbi-plan | yes | yes | 0 | 0 | 1.000 | 1.000 | 7/7 | 7/7 | 696,978 | 107,236 | -589742 | 84.6% | 4,765 | 2,401 | -2364 | 49.6% | 25 | 4 | 25 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 2,290,487 | 15,228 | 99.3% | 149,874 | 77,256 |
| headroom | write-unittest-class | yes | yes | 0 | 0 | 0.857 | 1.000 | 6/7 | 7/7 | 446,841 | 68,802 | -378039 | 84.6% | 4,374 | 4,102 | -272 | 6.2% | 26 | 4 | 26 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 373,467 | 13,911 | 96.3% | 137,456 | 99,527 |
| headroom | requirement-analysis | yes | yes | 0 | 0 | 1.000 | 1.000 | 8/8 | 8/8 | 609,867 | 68,701 | -541166 | 88.7% | 4,403 | 2,663 | -1740 | 39.5% | 26 | 4 | 26 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 1,596,454 | 33,632 | 97.9% | 145,213 | 81,786 |
| caveman | investigate-flow | yes | yes | 0 | 0 | 1.000 | 1.000 | 7/7 | 7/7 | 364,787 | 48,600 | -316187 | 86.7% | 6,404 | 1,616 | -4788 | 74.8% | 31 | 1 | 31 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 246,327 | 6,394 | 97.4% | 163,185 | 49,973 |
| caveman | pbi-plan | yes | yes | 0 | 0 | 1.000 | 1.000 | 7/7 | 7/7 | 565,297 | 48,731 | -516566 | 91.4% | 6,313 | 1,493 | -4820 | 76.4% | 34 | 1 | 34 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 311,535 | 6,472 | 97.9% | 169,163 | 49,773 |
| caveman | write-unittest-class | yes | yes | 0 | 0 | 0.857 | 0.857 | 6/7 | 6/7 | 200,158 | 48,628 | -151530 | 75.7% | 4,553 | 1,413 | -3140 | 69.0% | 20 | 1 | 20 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 178,696 | 6,368 | 96.4% | 121,755 | 46,258 |
| caveman | requirement-analysis | yes | yes | 0 | 0 | 1.000 | 1.000 | 8/8 | 8/8 | 409,933 | 48,762 | -361171 | 88.1% | 3,876 | 1,666 | -2210 | 57.0% | 29 | 1 | 29 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 223,911 | 6,353 | 97.2% | 131,217 | 52,577 |
| codegraph | repo-benchmark-analysis | yes | yes | 0 | 0 | 0.875 | 1.000 | 7/8 | 8/8 | 449,834 | 49,755 | -400079 | 88.9% | 6,230 | 1,241 | -4989 | 80.1% | 44 | 1 | 44 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 183,008 | 6,384 | 96.5% | 177,778 | 42,854 |
| tokenopt | repo-benchmark-analysis | yes | yes | 0 | 0 | 1.000 | 1.000 | 8/8 | 8/8 | 259,011 | 51,258 | -207753 | 80.2% | 6,243 | 1,243 | -5000 | 80.1% | 27 | 1 | 27 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 101,895 | 6,243 | 93.9% | 159,009 | 46,944 |
| headroom | repo-benchmark-analysis | no | no | null | null | 0.125 | 0.000 | 1/8 | 0/8 | 0 | 0 | +0 | n/a | 0 | 0 | +0 | n/a | 68 | 12 | 68 | 0 | 0 | 12 | 0 | 0 | 0 | 0 | 709,045 | 74,764 | 89.5% | 240,027 | 240,020 |
| caveman | repo-benchmark-analysis | yes | yes | 0 | 0 | 0.875 | 0.875 | 7/8 | 7/8 | 243,622 | 48,427 | -195195 | 80.1% | 5,349 | 1,265 | -4084 | 76.4% | 34 | 1 | 34 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 102,076 | 6,232 | 93.9% | 137,616 | 41,097 |

## Per-Run Metrics

| repo | task | task_type | mode | correct | exit | quality | checks | tool | mcp | shell | answerable | fallback | tool_in | tool_out | input_tok | cached | output_tok | reason_tok | duration_ms | warnings |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| codegraph | investigate-flow | investigate | baseline | no | null | 0.000 | 0/7 | 48 | 0 | 48 | 0 | 0 | 10,691 | 653,199 | 0 | 0 | 0 | 0 | 240,016 | 262 |
| codegraph | investigate-flow | investigate | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 1 | 1 | 0 | 1 | 0 | 897 | 6,494 | 49,824 | 33,920 | 1,672 | 709 | 53,876 | 67 |
| codegraph | pbi-plan | implement | baseline | yes | 0 | 0.857 | 6/7 | 32 | 0 | 32 | 0 | 0 | 5,691 | 540,684 | 662,246 | 551,552 | 6,884 | 3,714 | 196,854 | 199 |
| codegraph | pbi-plan | implement | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 1 | 1 | 0 | 1 | 0 | 976 | 6,672 | 49,783 | 33,920 | 1,472 | 667 | 50,519 | 67 |
| codegraph | write-unittest-class | write_unittest | baseline | yes | 0 | 1.000 | 7/7 | 27 | 0 | 27 | 0 | 0 | 4,021 | 276,284 | 500,095 | 398,720 | 5,243 | 2,704 | 164,486 | 459 |
| codegraph | write-unittest-class | write_unittest | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 1 | 1 | 0 | 1 | 0 | 922 | 6,578 | 49,791 | 20,096 | 1,321 | 675 | 44,940 | 67 |
| codegraph | requirement-analysis | implement | baseline | yes | 0 | 1.000 | 8/8 | 18 | 0 | 18 | 0 | 0 | 2,440 | 233,739 | 250,256 | 186,624 | 3,587 | 1,571 | 117,767 | 115 |
| codegraph | requirement-analysis | implement | tokenopt-mcp-instructed | yes | 0 | 1.000 | 8/8 | 1 | 1 | 0 | 1 | 0 | 1,001 | 6,513 | 49,947 | 21,120 | 1,637 | 732 | 60,713 | 67 |
| tokenopt | investigate-flow | investigate | baseline | yes | 0 | 1.000 | 7/7 | 41 | 0 | 41 | 0 | 0 | 7,308 | 178,864 | 414,970 | 364,288 | 6,929 | 3,027 | 187,574 | 244 |
| tokenopt | investigate-flow | investigate | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 1 | 1 | 0 | 1 | 0 | 801 | 6,211 | 49,649 | 33,920 | 1,429 | 658 | 47,449 | 67 |
| tokenopt | pbi-plan | implement | baseline | yes | 0 | 1.000 | 7/7 | 19 | 0 | 19 | 0 | 0 | 2,615 | 122,011 | 188,647 | 130,304 | 4,743 | 2,852 | 132,147 | 115 |
| tokenopt | pbi-plan | implement | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 1 | 1 | 0 | 1 | 0 | 982 | 6,297 | 49,834 | 33,920 | 1,424 | 732 | 47,072 | 67 |
| tokenopt | write-unittest-class | write_unittest | baseline | yes | 0 | 1.000 | 7/7 | 16 | 0 | 16 | 0 | 0 | 2,337 | 112,931 | 176,384 | 135,424 | 3,167 | 1,344 | 93,867 | 133 |
| tokenopt | write-unittest-class | write_unittest | tokenopt-mcp-instructed | yes | 0 | 0.857 | 6/7 | 1 | 1 | 0 | 1 | 0 | 815 | 6,259 | 49,705 | 33,920 | 1,254 | 653 | 43,706 | 67 |
| tokenopt | requirement-analysis | implement | baseline | yes | 0 | 1.000 | 8/8 | 32 | 0 | 32 | 0 | 0 | 5,030 | 161,340 | 392,081 | 334,080 | 4,880 | 1,633 | 178,037 | 179 |
| tokenopt | requirement-analysis | implement | tokenopt-mcp-instructed | yes | 0 | 1.000 | 8/8 | 1 | 1 | 0 | 1 | 0 | 1,055 | 6,526 | 49,828 | 21,120 | 1,533 | 722 | 48,833 | 67 |
| headroom | investigate-flow | investigate | baseline | no | null | 0.000 | 0/7 | 42 | 0 | 42 | 0 | 0 | 6,570 | 765,186 | 0 | 0 | 0 | 0 | 240,027 | 394 |
| headroom | investigate-flow | investigate | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 4 | 4 | 0 | 0 | 0 | 1,144 | 19,770 | 104,756 | 72,448 | 2,453 | 1,071 | 81,102 | 115 |
| headroom | pbi-plan | implement | baseline | yes | 0 | 1.000 | 7/7 | 25 | 0 | 25 | 0 | 0 | 4,396 | 2,290,487 | 696,978 | 540,544 | 4,765 | 2,084 | 149,874 | 174 |
| headroom | pbi-plan | implement | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 4 | 4 | 0 | 0 | 0 | 1,199 | 15,228 | 107,236 | 60,160 | 2,401 | 1,443 | 77,256 | 115 |
| headroom | write-unittest-class | write_unittest | baseline | yes | 0 | 0.857 | 6/7 | 26 | 0 | 26 | 0 | 0 | 4,238 | 373,467 | 446,841 | 381,824 | 4,374 | 1,932 | 137,456 | 163 |
| headroom | write-unittest-class | write_unittest | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 4 | 4 | 0 | 0 | 0 | 1,164 | 13,911 | 68,802 | 36,352 | 4,102 | 3,324 | 99,527 | 83 |
| headroom | requirement-analysis | implement | baseline | yes | 0 | 1.000 | 8/8 | 26 | 0 | 26 | 0 | 0 | 6,007 | 1,596,454 | 609,867 | 510,848 | 4,403 | 1,072 | 145,213 | 163 |
| headroom | requirement-analysis | implement | tokenopt-mcp-instructed | yes | 0 | 1.000 | 8/8 | 4 | 4 | 0 | 0 | 0 | 1,002 | 33,632 | 68,701 | 37,376 | 2,663 | 1,733 | 81,786 | 83 |
| caveman | investigate-flow | investigate | baseline | yes | 0 | 1.000 | 7/7 | 31 | 0 | 31 | 0 | 0 | 4,907 | 246,327 | 364,787 | 282,752 | 6,404 | 3,256 | 163,185 | 131 |
| caveman | investigate-flow | investigate | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 1 | 1 | 0 | 1 | 0 | 772 | 6,394 | 48,600 | 32,896 | 1,616 | 784 | 49,973 | 67 |
| caveman | pbi-plan | implement | baseline | yes | 0 | 1.000 | 7/7 | 34 | 0 | 34 | 0 | 0 | 6,009 | 311,535 | 565,297 | 477,568 | 6,313 | 2,784 | 169,163 | 169 |
| caveman | pbi-plan | implement | tokenopt-mcp-instructed | yes | 0 | 1.000 | 7/7 | 1 | 1 | 0 | 1 | 0 | 936 | 6,472 | 48,731 | 32,896 | 1,493 | 843 | 49,773 | 67 |
| caveman | write-unittest-class | write_unittest | baseline | yes | 0 | 0.857 | 6/7 | 20 | 0 | 20 | 0 | 0 | 2,801 | 178,696 | 200,158 | 121,600 | 4,553 | 2,896 | 121,755 | 115 |
| caveman | write-unittest-class | write_unittest | tokenopt-mcp-instructed | yes | 0 | 0.857 | 6/7 | 1 | 1 | 0 | 1 | 0 | 861 | 6,368 | 48,628 | 45,184 | 1,413 | 771 | 46,258 | 67 |
| caveman | requirement-analysis | implement | baseline | yes | 0 | 1.000 | 8/8 | 29 | 0 | 29 | 0 | 0 | 4,805 | 223,911 | 409,933 | 335,744 | 3,876 | 999 | 131,217 | 163 |
| caveman | requirement-analysis | implement | tokenopt-mcp-instructed | yes | 0 | 1.000 | 8/8 | 1 | 1 | 0 | 1 | 0 | 1,112 | 6,353 | 48,762 | 32,896 | 1,666 | 832 | 52,577 | 67 |
| codegraph | repo-benchmark-analysis | investigate | baseline | yes | 0 | 0.875 | 7/8 | 44 | 0 | 44 | 0 | 0 | 6,491 | 183,008 | 449,834 | 364,800 | 6,230 | 2,405 | 177,778 | 179 |
| codegraph | repo-benchmark-analysis | investigate | tokenopt-mcp-instructed | yes | 0 | 1.000 | 8/8 | 1 | 1 | 0 | 1 | 0 | 1,015 | 6,384 | 49,755 | 21,120 | 1,241 | 646 | 42,854 | 67 |
| tokenopt | repo-benchmark-analysis | investigate | baseline | yes | 0 | 1.000 | 8/8 | 27 | 0 | 27 | 0 | 0 | 5,005 | 101,895 | 259,011 | 172,544 | 6,243 | 3,249 | 159,009 | 164 |
| tokenopt | repo-benchmark-analysis | investigate | tokenopt-mcp-instructed | yes | 0 | 1.000 | 8/8 | 1 | 1 | 0 | 1 | 0 | 928 | 6,243 | 51,258 | 34,432 | 1,243 | 665 | 46,944 | 67 |
| headroom | repo-benchmark-analysis | investigate | baseline | no | null | 0.125 | 1/8 | 68 | 0 | 68 | 0 | 0 | 13,247 | 709,045 | 0 | 0 | 0 | 0 | 240,027 | 796 |
| headroom | repo-benchmark-analysis | investigate | tokenopt-mcp-instructed | no | null | 0.000 | 0/8 | 12 | 12 | 0 | 0 | 0 | 2,145 | 74,764 | 0 | 0 | 0 | 0 | 240,020 | 245 |
| caveman | repo-benchmark-analysis | investigate | baseline | yes | 0 | 0.875 | 7/8 | 34 | 0 | 34 | 0 | 0 | 5,834 | 102,076 | 243,622 | 177,792 | 5,349 | 2,100 | 137,616 | 159 |
| caveman | repo-benchmark-analysis | investigate | tokenopt-mcp-instructed | yes | 0 | 0.875 | 7/8 | 1 | 1 | 0 | 1 | 0 | 849 | 6,232 | 48,427 | 19,584 | 1,265 | 689 | 41,097 | 67 |

## Exact Prompts And Outputs

### codegraph / investigate-flow / baseline

- task_type: `investigate`
- correct: `no`, exit: `null`, quality: `0.000 (0/7)`
- tool_calls: `48`, mcp_calls: `0`, shell_calls: `48`, answerable: `0`, fallback: `0`
- tokens: input=`0`, cached=`0`, output=`0`, reasoning=`0`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-tO3V4n\investigate-flow-baseline.jsonl`

User prompt:
```text
Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
The built CLI currently has `context`, but the TypeScript source in `src/bin/codegraph.ts` does not. That means the generated `dist/` in this checkout is not reliable evidence for current source behavior after a fresh build, and it becomes a verification priority.
```

### codegraph / investigate-flow / tokenopt-mcp-instructed

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49824`, cached=`33920`, output=`1672`, reasoning=`709`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-723knU\investigate-flow-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as investigate; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\codegraph, task=<verbatim user request>, task_type=investigate, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
This appears to be an npm/TypeScript project named `@colbymchenry/codegraph` v`0.9.9`. The primary flow is likely CLI-driven: npm script entry points lead into `src/bin`, then into core library exports in `src/index.ts`, with code paths through extraction, graph construction/querying, local DB/sync, and possibly UI/site tooling.

Likely primary flow:
`npm run cli` or `npm run dev` -> `src/bin/*` -> `src/index.ts` -> `src/extraction/*` -> `src/graph/*` / `src/db/*` / `src/sync/*` -> output or UI/site layer.

Core areas:
`src/extraction` is the largest source area and likely parses/analyzes project files. `src/graph` likely owns traversal/query behavior. `src/db` and `src/sync` suggest local persistence or cached state. `src/ui` and `site` suggest a visual or documentation/demo surface.

Likely dependencies and runtime assumptions:
Node/npm, TypeScript, Vitest, Astro for the `site`, and Tree-sitter/WebAssembly based on `src/web-tree-sitter.d.ts` plus `.wasm` files.

Likely failure points:
parser/WASM loading, unsupported language or framework extraction, graph traversal/query correctness, stale or corrupt local DB/sync state, CLI argument/config handling, and build/test drift between root TS config and `site/tsconfig.json`.

Evidence:
TokenOpt evidence packet `a31edb25-4e1c-4b61-9150-f96632f133af` reported `answerable=true`.

Key evidence:
`package.json` / `package-lock.json`: npm project, package `@colbymchenry/codegraph`, version `0.9.9`, scripts include `build`, `dev`, `cli`, `test`, `test:watch`, `eval`, `test:eval`.

Repository shape:
`src:129`, `__tests__:66`, `scripts:32`, `site:31`, `docs:10`.

Important source areas:
`src/extraction:18`, `src/sync:5`, `src/db:4`, `src/ui:4`, `src/bin:3`, `src/graph:3`, plus `src/index.ts`, `src/types.ts`, `src/errors.ts`.

Relevant docs/config clues:
`README.md` title is `CodeGraph`; summary says `~16% cheaper · ~58% fewer tool calls · 100% local`. Config files include `tsconfig.json`, `vitest.config.ts`, and `site/tsconfig.json`.

Evidence still missing:
No missing evidence was reported by TokenOpt. The remaining uncertainty is source-level confirmation of the exact CLI file names, exact command arguments, concrete package dependencies, and the precise call graph inside `src/bin`, `src/index.ts`, `src/extraction`, and `src/graph`.

Recommended next steps:
First read-only/build verification commands:

```powershell
npm test
npm run build
npm run cli -- --help
npm run dev
```

If those expose issues, inspect in this order:
`package.json`, `README.md`, `src/bin/*`, `src/index.ts`, `src/extraction/*`, `src/graph/*`, `src/db/*`, `src/sync/*`, then the relevant tests under `__tests__`.
```

### codegraph / pbi-plan / baseline

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `0.857 (6/7)`
- tool_calls: `32`, mcp_calls: `0`, shell_calls: `32`, answerable: `0`, fallback: `0`
- tokens: input=`662246`, cached=`551552`, output=`6884`, reasoning=`3714`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-R2d2uI\pbi-plan-baseline.jsonl`

User prompt:
```text
Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
I would scope this PBI to the installer’s agent MCP configuration writes. CodeGraph itself is documented as zero-config, but `codegraph install` mutates important external agent config files. The safest implementation is a previewable, transactional config-change path: compute changes first, show affected files/actions, optionally create timestamped backups, then apply atomically.

Evidence:
- `codegraph install` currently supports target/location/yes/no-permissions/print-config, but no full dry-run or backup mode: [src/bin/codegraph.ts](<D:/Personal/Projects/codegraph/src/bin/codegraph.ts:1593>).
- The installer directly calls `target.install(...)` and then logs returned file actions, so writes happen inside each target today: [src/installer/index.ts](<D:/Personal/Projects/codegraph/src/installer/index.ts:191>).
- The target abstraction has `install`, `uninstall`, `printConfig`, and `describePaths`, but no “plan changes without writing” API: [src/installer/targets/types.ts](<D:/Personal/Projects/codegraph/src/installer/targets/types.ts:73>).
- Existing safety is partial: JSON parse failures create `<path>.backup`, and writes are atomic, but normal updates/removals are not backed up: [src/installer/targets/shared.ts](<D:/Personal/Projects/codegraph/src/installer/targets/shared.ts:48>), [src/installer/targets/shared.ts](<D:/Personal/Projects/codegraph/src/installer/targets/shared.ts:75>).
- Impact spans all installer targets: JSON configs for Claude/Cursor/Gemini/Kiro/Antigravity, TOML for Codex, JSONC for opencode, and line-based YAML for Hermes.
- Tests already cover the preservation contract: idempotency, sibling MCP server preservation, printConfig no-write behavior, comments, YAML indentation, and legacy migrations: [__tests__/installer-targets.test.ts](<D:/Personal/Projects/codegraph/__tests__/installer-targets.test.ts:4>).

Recommended next steps:
1. Add a `ConfigPlan` / `PlannedFileChange` model and make target installs compute changes before applying them. Keep current `install()` behavior by having it call `planInstall()` then `applyPlan()`.
2. Add `codegraph install --dry-run` or `--preview` to show target, path, action, warnings, and concise before/after intent without touching files. Keep `--print-config` as the simple manual-snippet path.
3. Add optional timestamped backups for updated/removed existing files, preferably via `--backup` initially. Avoid relying only on the current static `.backup` parse-failure behavior.
4. Make `applyPlan()` re-read files and abort on drift from the planned `before` hash, so a preview cannot clobber concurrent user edits.
5. Test no-write preview, plan/apply equivalence, backup creation, unchanged no-op behavior, parse-failure handling, and every target format. Also cover `--yes` to ensure existing automation remains unchanged.
6. Roll out as opt-in first, update README/site CLI docs, then consider making backups default once behavior is proven. No files were modified during this investigation.
```

### codegraph / pbi-plan / tokenopt-mcp-instructed

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49783`, cached=`33920`, output=`1472`, reasoning=`667`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-VGeuK5\pbi-plan-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as implement; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\codegraph, task=<verbatim user request>, task_type=implement, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
No files were modified. The repo appears to be an npm/TypeScript project, `@colbymchenry/codegraph`, with likely impact in configuration-adjacent runtime areas: `src/bin`, `src/context`, `src/resolution`, `src/sync`, `src/db`, `src/ui`, and `src/upgrade`.

The safest implementation shape is to add a guarded configuration-change path rather than changing existing behavior in place: parse current config, normalize with existing defaults, validate the proposed change, preview the effective diff, apply atomically with backup/rollback, and keep the current behavior as the default unless the safer path is explicitly used.

Evidence:
TokenOpt evidence compiler returned `answerable=true` with confidence `0.86`.

Relevant repo facts:
- Build tool: npm
- Package: `@colbymchenry/codegraph`
- Scripts include `build`, `dev`, `test`, `test:watch`, `eval`
- Repo shape: 280 files, mostly TypeScript
- Main source areas: `src/resolution`, `src/sync`, `src/db`, `src/ui`, `src/bin`, `src/context`
- Config/build files identified: `package.json`, `tsconfig.json`, `vitest.config.ts`, `site/package.json`, `site/tsconfig.json`

Likely impacted areas:
- `src/bin`: CLI flags or commands for changing config.
- `src/context`: config loading, defaults, runtime context propagation.
- `src/resolution`: behavior that may depend on the important config.
- `src/sync` / `src/db`: persisted config, sync conflicts, atomic writes, rollback.
- `src/ui`: user-facing confirmation, preview, validation errors.
- `src/upgrade`: schema migration or compatibility handling.

Recommended next steps:
1. Identify the exact config source of truth and all write paths.
2. Introduce a `propose -> validate -> preview -> apply` flow for config changes.
3. Preserve existing config parsing/default behavior; do not silently reinterpret old values.
4. Add versioned validation and migration only where needed.
5. Write config changes atomically, with backup and rollback on failure.
6. Add tests for:
   - Existing config behavior unchanged.
   - Valid safe config change succeeds.
   - Invalid config is rejected before persistence.
   - Defaults remain compatible.
   - Older config formats still load.
   - Partial write or apply failure rolls back.
   - CLI/UI surfaces report actionable validation errors.
7. Roll out behind an opt-in command/flag or staged UI path first, then make it the preferred path after compatibility coverage is proven.
```

### codegraph / write-unittest-class / baseline

- task_type: `write_unittest`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `27`, mcp_calls: `0`, shell_calls: `27`, answerable: `0`, fallback: `0`
- tokens: input=`500095`, cached=`398720`, output=`5243`, reasoning=`2704`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-RJKGHh\write-unittest-class-baseline.jsonl`

User prompt:
```text
Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Candidate module: [ToolHandler in src/mcp/tools.ts](D:/Personal/Projects/codegraph/src/mcp/tools.ts:576), especially `execute()` -> `handleExplore()` for `codegraph_explore`.

Test file location: `__tests__/mcp-explore-primary-flow.test.ts`

Targeted command: `npm test -- __tests__/mcp-explore-primary-flow.test.ts`

Use a real temp TypeScript fixture rather than broad mocks: `fs.mkdtempSync`, write a tiny project, `CodeGraph.initSync(..., { config: { include: ['**/*.ts'], exclude: [] } })`, `await cg.indexAll()`, then `new ToolHandler(cg).execute('codegraph_explore', ...)`. Clean up with `cg.destroy()` and `fs.rmSync`.

Evidence:
- [README.md](D:/Personal/Projects/codegraph/README.md:509) labels `codegraph_explore` as “Primary” and says it returns relevant source, relationships, and blast radius.
- [README.md](D:/Personal/Projects/codegraph/README.md:214) says the winning user flow is usually one `codegraph_explore` call.
- [src/mcp/tools.ts](D:/Personal/Projects/codegraph/src/mcp/tools.ts:978) dispatches MCP tool calls through `ToolHandler.execute()`.
- [src/mcp/tools.ts](D:/Personal/Projects/codegraph/src/mcp/tools.ts:1030) routes `codegraph_explore` to `handleExplore()`.
- [src/mcp/tools.ts](D:/Personal/Projects/codegraph/src/mcp/tools.ts:1562) implements the primary flow: relevant-context lookup, graph-aware seeding, relationships, flow/source rendering, and budget handling.
- Existing tests already cover adjacent pieces: output budget, adaptive sizing, blast radius, staleness banners, input limits, and full SDK pipeline, so the gap is a focused “primary explore flow” regression test.

Recommended next steps:
Add tests that build a tiny fixture like `auth.ts -> credentials.ts -> session.ts -> store.ts`, plus `auth.test.ts`.

Assertions:
- `execute('codegraph_explore', { query: 'loginUser validateCredentials createSession writeSession', maxFiles: 6 })` returns `isError` false.
- Output contains `## Exploration`, `### Source Code`, and the expected fixture files.
- Output includes verbatim, line-numbered source for the key functions, e.g. `/\n\d+\texport function loginUser/`.
- Output includes relationship/flow evidence, e.g. `### Relationships` or `**calls:**`, and both caller/callee symbol names.
- Output excludes `auth.test.ts` when the query does not mention tests.
- Output includes the “do not Read/re-read shown files” guidance so agents treat returned source as already read.
- Negative case: an unknown query returns `No relevant code found for ...` without throwing.
```

### codegraph / write-unittest-class / tokenopt-mcp-instructed

- task_type: `write_unittest`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49791`, cached=`20096`, output=`1321`, reasoning=`675`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-0q0wSd\write-unittest-class-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as write_unittest; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\codegraph, task=<verbatim user request>, task_type=write_unittest, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Candidate module: `src/index.ts`, most likely the primary orchestration entrypoint for CodeGraph. The flow probably delegates into `src/graph`, `src/resolution`, `src/search`, and `src/extraction`.

Test file location: `__tests__/index.test.ts`, or `__tests__/graph/*.test.ts` if the exported flow is implemented under `src/graph`.

Targeted command:
```bash
npm test -- __tests__/index.test.ts
```

Evidence:
TokenOpt found an npm/Vitest TypeScript repo: `package.json`, `package-lock.json`, `vitest.config.ts`, `src/**/*.ts`, and `__tests__` with 66 files. The largest relevant source areas are `src/installer`, `src/resolution`, `src/sync`, `src/ui`, `src/graph`, `src/search`, and `src/extraction`. The README identifies the product as `CodeGraph`, so the likely business flow is building or querying a local code graph.

Recommended next steps:
Unit-test plan:

1. Success path:
   Mock filesystem/repo inputs and verify `src/index.ts` calls the graph/extraction/resolution flow and returns the expected graph/search result structure.

2. Error path:
   Simulate missing project files, invalid source input, or parser failure. Assert the module surfaces a useful error or empty result according to existing behavior.

3. Edge cases:
   Cover empty repository, unsupported file extension, duplicate symbols/paths, and unresolved references.

4. Mocks/fixtures:
   Use small in-memory fixture files or temporary test directories. Mock expensive parser, sync, installer, or filesystem dependencies if they cross process, network, or local machine boundaries.

5. Assertions:
   Assert returned nodes/edges or search results, deterministic ordering, deduplication, skipped unsupported files, and that no installer/sync side effects run during a pure unit test.
```

### codegraph / requirement-analysis / baseline

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `18`, mcp_calls: `0`, shell_calls: `18`, answerable: `0`, fallback: `0`
- tokens: input=`250256`, cached=`186624`, output=`3587`, reasoning=`1571`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-2t5lzB\requirement-analysis-baseline.jsonl`

User prompt:
```text
Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
- **WHAT:** Add the new behavior behind an explicit guard, with existing behavior remaining the default unless product explicitly chooses a default-on rollout with an opt-out escape hatch.
- **WHY:** This package has three compatibility surfaces: CLI users, MCP clients, and SDK consumers. A behavioral change can affect scripts, tool schemas/results, existing indexes, and agent behavior.
- **HOW:** Prefer a small option/flag at the public boundary, then thread it into the narrow implementation area. For MCP/runtime behavior, an env guard matches existing patterns. For SDK/CLI behavior, use optional fields/flags with defaults that preserve current behavior.

Evidence:
- The CLI already preserves old behavior patterns: `init --index` is deprecated but still accepted as a no-op for compatibility in [src/bin/codegraph.ts](D:/Personal/Projects/codegraph/src/bin/codegraph.ts:420).
- SDK/API surfaces use optional option bags with defaults, e.g. `InitOptions`, `OpenOptions`, `IndexOptions`, `BuildContextOptions`, and traversal/search options in [src/index.ts](D:/Personal/Projects/codegraph/src/index.ts:91) and [src/types.ts](D:/Personal/Projects/codegraph/src/types.ts:499).
- MCP tool exposure is schema-driven and already supports guarded tool availability via `CODEGRAPH_MCP_TOOLS` in [src/mcp/tools.ts](D:/Personal/Projects/codegraph/src/mcp/tools.ts:564) and [src/mcp/tools.ts](D:/Personal/Projects/codegraph/src/mcp/tools.ts:633).
- Existing guarded/default-on behavior uses env opt-outs such as `CODEGRAPH_EXPLORE_LINENUMS=0` and `CODEGRAPH_ADAPTIVE_EXPLORE=0` in [src/mcp/tools.ts](D:/Personal/Projects/codegraph/src/mcp/tools.ts:248).
- Watcher behavior has explicit precedence rules for env guards, including opt-out and force-on, in [src/sync/watch-policy.ts](D:/Personal/Projects/codegraph/src/sync/watch-policy.ts:78).
- Runtime config parsing is defensive and non-throwing, e.g. debounce env parsing ignores invalid values in [src/mcp/engine.ts](D:/Personal/Projects/codegraph/src/mcp/engine.ts:261).
- Tests already cover guard behavior patterns: `mcp-tool-allowlist`, `adaptive-explore-sizing`, `explore-output-budget`, `watch-policy`, and debounce env tests.

Recommended next steps:
- **Impacted code areas:** public guard surface in CLI/MCP/SDK; the specific implementation module for the behavior; docs/README if user-visible; tests under `__tests__`; DB schema or extraction version only if persisted graph data changes.
- **Acceptance criteria:** guard absent equals current behavior; guard enabled produces only the intended new behavior; existing CLI/MCP/API callers continue working; invalid guard values fail safe to current behavior; old indexes remain readable; docs name the guard and default.
- **Test strategy:** add paired tests for guard off/on; add CLI or MCP schema tests if exposed there; add SDK option tests if exposed through `CodeGraph`; add regression tests for current default behavior; run the focused tests first, then `npm test` before release.
- **Unknowns:** the exact behavior is not specified, so the exact module, guard name, default direction, and need for schema/extraction-version changes cannot be finalized yet.
- **Implementation plan:** define the guard contract, choose default-off unless rollout requires otherwise, add a small parser/helper near existing guard logic, thread it to the narrow behavior point, keep all existing defaults unchanged, add focused tests, update docs, then run targeted and full test suites.
```

### codegraph / requirement-analysis / tokenopt-mcp-instructed

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49947`, cached=`21120`, output=`1637`, reasoning=`732`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-TUunlM\requirement-analysis-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as implement; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\codegraph, task=<verbatim user request>, task_type=implement, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
WHAT: Add the new behavior behind an explicit guard, with the current behavior remaining the default for existing users.

WHY: This package is an npm TypeScript project (`@colbymchenry/codegraph`) with CLI/dev/test scripts, so compatibility matters for installed users and automated workflows.

HOW: Introduce a single guard source such as config, CLI option, env var, or persisted setting. Route affected logic through that guard, keeping the legacy branch as the default path.

Likely impacted code areas:
- `src/bin`: CLI entry points and option parsing.
- `src/extraction`, `src/graph`, `src/search`, `src/context`: likely behavior surface depending on what changes.
- `src/db`, `src/sync`: impacted if behavior affects persisted graph/index state.
- `src/ui`: impacted only if the guard is user-visible.
- `__tests__`: regression and opt-in coverage.

Evidence:
- TokenOpt found npm build facts in `package.json` / `package-lock.json`: scripts include `build`, `dev`, `test`, `test:watch`, and package version is `0.9.9`.
- Repo shape: `src:129`, `__tests__:66`, `scripts:32`, `docs:10`, mostly TypeScript.
- README identifies the project as `CodeGraph`.
- Relevant source areas inferred from inventory: `src/extraction`, `src/sync`, `src/db`, `src/installer`, `src/ui`, `src/bin`, `src/context`, `src/graph`, `src/search`.
- No files were modified.

Recommended next steps:
Acceptance criteria:
- Existing behavior is unchanged with no new option/config set.
- New behavior activates only when the guard is explicitly enabled.
- Guard precedence is documented and deterministic.
- Existing tests pass.
- New tests cover legacy default, enabled behavior, and invalid/conflicting guard values.

Test strategy:
- Unit test the guard parser/resolver.
- Regression test the default path.
- Add focused tests around the changed module.
- Add CLI/config integration tests if the guard is exposed through `src/bin`.
- Add persistence tests if `src/db` or `src/sync` behavior changes.

Unknowns:
- The exact behavior change is unspecified.
- The intended guard mechanism is unspecified.
- Whether this is CLI-only, UI-visible, config-file driven, or internal-only is unknown.
- Whether persisted data needs migration or versioning is unknown.

Practical implementation plan:
1. Identify the exact behavior boundary and smallest module that owns it.
2. Define the guard name, default `false`, and accepted values.
3. Add a central resolver for the guard rather than scattering condition checks.
4. Preserve the current code path as the default branch.
5. Add the new branch behind the guard.
6. Add tests for default compatibility and opt-in behavior.
7. Update docs only where users discover configuration or CLI flags.
```

### tokenopt / investigate-flow / baseline

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `41`, mcp_calls: `0`, shell_calls: `41`, answerable: `0`, fallback: `0`
- tokens: input=`414970`, cached=`364288`, output=`6929`, reasoning=`3027`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-xuK8gw\investigate-flow-baseline.jsonl`

User prompt:
```text
Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
- Primary flow: `tokenopt` CLI starts in [src/cli.ts](D:/Personal/Projects/tokenopt/src/cli.ts:26), dispatches to MCP at [src/cli.ts](D:/Personal/Projects/tokenopt/src/cli.ts:104), then agents should call `tokenopt_compile_evidence` first. If `answerable=true`, the gate blocks redundant search/read/command calls; otherwise it allows bounded followups.
- Main entry points: npm bin `tokenopt -> dist/cli.js`, CLI commands in [src/cli.ts](D:/Personal/Projects/tokenopt/src/cli.ts:46), MCP server in [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:29), Codex hooks in [src/codex-adapter.ts](D:/Personal/Projects/tokenopt/src/codex-adapter.ts:16), wrapped command execution in [src/exec.ts](D:/Personal/Projects/tokenopt/src/exec.ts:16).
- Core code paths: config load/merge in [src/config.ts](D:/Personal/Projects/tokenopt/src/config.ts:53), policy evaluation in [src/policy-core.ts](D:/Personal/Projects/tokenopt/src/policy-core.ts:32), evidence compilation in [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:207), answerability gate in [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:621), artifact/event writes in [src/observability.ts](D:/Personal/Projects/tokenopt/src/observability.ts:29).
- Key dependencies: Node `>=20`, npm, TypeScript, `@modelcontextprotocol/sdk`, `rg` on PATH, optional Codex CLI/Copilot config for integrations.
- Likely failure points: stale or missing `dist`, missing `rg`, invalid JSON in user/repo config, unwritable cache/artifact dirs, policy false positives blocking broad reads/searches, Windows shell quoting/path issues, Codex hook trust/firing being host-dependent, and `doctor`/MCP/test flows writing cache/temp artifacts.

Evidence:
- `package.json` declares the CLI bin, build/test scripts, Node engine, and MCP SDK dependency.
- README and SETUP describe MCP as the recommended path and list the exposed tools: `tokenopt_compile_evidence`, `tokenopt_run_command`, `tokenopt_search`, `tokenopt_read_file`, `tokenopt_project_facts`.
- MCP tool registration is visible at [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:46), [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:93), [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:115), [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:137), [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:160).
- Tests cover MCP tool exposure/gating, broad-command replacement, config precedence, expensive-test rewrites, secret blocking, lockfile denial, hook output shape, installer idempotence, and compression behavior.
- `git status --short` was clean. I did not run build/tests/doctor because the request said not to modify files and those can write `dist`, temp files, cache artifacts, or observability events.

Recommended next steps:
- Read-only first checks:
  ```powershell
  node dist\cli.js --help
  node dist\cli.js instructions emit --target agents
  ```
- When file/cache writes are acceptable, verify behavior in this order:
  ```powershell
  npm.cmd run build
  npm.cmd test
  node dist\cli.js doctor
  node dist\cli.js doctor codex-hooks
  ```
- Evidence still missing: actual MCP client smoke against `dist\cli.js mcp`, confirmation that `dist` matches `src`, current local `node/npm/rg/codex` availability, real Codex hook trust/firing, Copilot MCP config behavior, and fresh benchmark results.
```

### tokenopt / investigate-flow / tokenopt-mcp-instructed

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49649`, cached=`33920`, output=`1429`, reasoning=`658`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-JubNOh\investigate-flow-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as investigate; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\tokenopt, task=<verbatim user request>, task_type=investigate, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
This is an npm TypeScript CLI project named `@tokenopt/cli`. The primary user flow is likely: user invokes the CLI → [src/cli.ts] handles command routing → command-specific modules such as `doctor`, `install`, `codex-adapter`, `mcp`, or benchmark paths execute → shared config/state/reporting utilities support the operation.

Core code paths likely include:
- CLI entry/routing: `src/cli.ts`
- Health verification: `src/doctor.ts`
- Setup/install flow: `src/install.ts`, `src/copilot-setup.ts`
- Codex integration: `src/codex-adapter.ts`, `src/mcp.ts`
- Evidence/state/reporting: `src/evidence-state.ts`, `src/report.ts`
- Command execution/log handling: `src/exec.ts`, `src/shell.ts`, `src/log-compressor.ts`
- Benchmarks: `src/benchmark.ts`, `src/codex-benchmark.ts`

Evidence:
- Root package: `package.json`
- Package name/version: `@tokenopt/cli@0.1.0`
- Build tool: npm
- Lockfile: `package-lock.json`
- Scripts detected: `build`, `doctor`, `test`
- README summary: TokenOpt is a reusable context-budget middleware for coding agents, Codex-first in V1, shipped as a global npm CLI.
- Repo shape: 29 files total, 19 TypeScript files under `src`, 3 test-related files detected by inventory.

Likely dependencies/failure points:
- npm/package install state may break build or CLI execution.
- TypeScript compilation may fail if CLI exports, module settings, or generated outputs are stale.
- `doctor` may fail on missing local prerequisites or config.
- Codex integration paths may fail around adapter assumptions, MCP wiring, or environment-specific setup.
- Shell/exec paths may fail from platform differences, quoting, process exits, or compressed logs hiding useful detail.
- Evidence/report/state paths may fail from missing directories, invalid JSON, or stale persisted state.

Recommended next steps:
Run these first, read-only where possible:

```powershell
npm run doctor
npm test
npm run build
```

If build succeeds, inspect the package entry and CLI help next:

```powershell
npm pkg get bin main scripts
node . --help
```

Evidence still missing: none was flagged by the TokenOpt evidence compiler. The main residual uncertainty is function-level detail inside each TypeScript file, because this investigation used the compiled evidence packet rather than opening source files directly.
```

### tokenopt / pbi-plan / baseline

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `19`, mcp_calls: `0`, shell_calls: `19`, answerable: `0`, fallback: `0`
- tokens: input=`188647`, cached=`130304`, output=`4743`, reasoning=`2852`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-iJG1mL\pbi-plan-baseline.jsonl`

User prompt:
```text
Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
- Assuming the “important configuration” is TokenOpt policy config, add a guarded `tokenopt config get|set|validate` flow instead of changing existing load semantics.
- Preserve current behavior: defaults -> user config -> repo config -> env overrides. The new path should only make edits safer, with validation, dry-run diff, backup, atomic write, and reload verification.

Evidence:
- Config is loaded from user and repo JSON, deep-merged, then env overrides are applied: [src/config.ts](D:/Personal/Projects/tokenopt/src/config.ts:57).
- `tokenopt init` only creates a full repo config; there is no safer setter/update command today: [src/cli.ts](D:/Personal/Projects/tokenopt/src/cli.ts:29).
- Policy config directly controls blocking/rewrite/compression behavior: broad search, expensive tests, output limits, generated/lockfile/file-size reads: [src/policy-core.ts](D:/Personal/Projects/tokenopt/src/policy-core.ts:80).
- Types define the important mutable surface: `policy`, `context`, `paths`, `codex`, `codegraph`: [src/types.ts](D:/Personal/Projects/tokenopt/src/types.ts:29).
- Existing tests cover precedence and policy behavior, but not safe config mutation, invalid values, backups, or rollback: [test/config-policy.test.mjs](D:/Personal/Projects/tokenopt/test/config-policy.test.mjs:9).
- I did not run build/tests because `npm test` runs `tsc` and would update generated `dist`; no files were modified.

Recommended next steps:
- Add schema/validation helpers in `src/config.ts` or a new `src/config-schema.ts`: validate booleans, positive numeric limits, enum modes, regex patterns, and path-like values.
- Add CLI commands in `src/cli.ts`: `config get`, `config set <key> <value> --scope user|repo --dry-run`, and `config validate`.
- Make writes safe: preserve unknown fields, warn if env vars mask the changed key, write a timestamped backup, write via temp file then rename, reload the result, and emit an observability event with key/scope only.
- Keep strictness scoped: fail invalid values written through the new command, but avoid breaking existing manual configs on load initially; surface warnings in `doctor`/`config validate`.
- Tests: add coverage for valid/invalid set operations, dry-run no-write behavior, backup creation, env override warnings, unknown-field preservation, existing precedence, and policy regressions for `policy.enabled`, broad search mode, expensive test mode, output limits, and read limits.
- Rollout: ship as additive first, document in README/SETUP, recommend users switch from manual JSON edits, then consider stricter load-time validation in a later version after warnings have existed for one release.
```

### tokenopt / pbi-plan / tokenopt-mcp-instructed

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49834`, cached=`33920`, output=`1424`, reasoning=`732`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-z1VgdX\pbi-plan-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as implement; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\tokenopt, task=<verbatim user request>, task_type=implement, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Users need a guarded config-change path, likely centered on `src/config.ts`, with callers in `src/cli.ts`, `src/doctor.ts`, setup/install flows, adapters, MCP, and policy code. The safest implementation is to introduce a typed config update API that validates, previews, writes atomically, preserves unknown/current fields, and keeps existing defaults unchanged unless the user explicitly opts into the change.

Evidence:
- TokenOpt is an npm TypeScript CLI package: `@tokenopt/cli`, scripts include `build`, `doctor`, and `test`.
- Likely impacted files from the evidence packet: `src/config.ts`, `src/cli.ts`, `src/doctor.ts`, `src/install.ts`, `src/codex-adapter.ts`, `src/copilot-setup.ts`, `src/mcp.ts`, `src/policy-core.ts`, `src/types.ts`, and `README.md`.
- Repo docs describe TokenOpt as “context-budget middleware for coding agents,” so config changes may affect agent behavior and should avoid silent behavior shifts.
- No files were modified.

Recommended next steps:
1. Add a central config update function in `src/config.ts` that loads existing config, validates proposed changes, computes a diff, preserves unknown fields, and performs atomic write with backup/rollback.
2. Expose this through CLI UX in `src/cli.ts`: `--dry-run`, explicit confirmation for important fields, clear before/after output, and machine-readable errors.
3. Keep current behavior as the default. New safer behavior should wrap config mutation, not change read semantics or default config values.
4. Update `doctor`/setup flows to detect unsafe or deprecated config and recommend the safe migration path instead of rewriting automatically.
5. Tests to add: config validation, backward-compatible parsing, unknown-field preservation, atomic write failure handling, dry-run no-write behavior, CLI confirmation behavior, and existing default behavior snapshots.
6. Rollout notes: ship as opt-in first if behavior risk is high, document migration in `README.md`, add deprecation warnings before removing any old mutation path, and avoid logging sensitive config values.
```

### tokenopt / write-unittest-class / baseline

- task_type: `write_unittest`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `16`, mcp_calls: `0`, shell_calls: `16`, answerable: `0`, fallback: `0`
- tokens: input=`176384`, cached=`135424`, output=`3167`, reasoning=`1344`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-pf7JV2\write-unittest-class-baseline.jsonl`

User prompt:
```text
Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Candidate module: [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:207), especially `compileEvidenceTool()` and its `write_unittest` coverage/answerability helpers.

Recommended test file: [test/mcp.test.mjs](D:/Personal/Projects/tokenopt/test/mcp.test.mjs:56).

Targeted command:
```powershell
npm run build && node --test test/mcp.test.mjs
```

Evidence:
[src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:207) owns `tokenopt_compile_evidence`, builds repo inventory, project facts, coverage, answerability, allowed followups, and state gating.  
[src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:823) infers `write_unittest` from “unit test”, “test plan”, etc.  
[src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:889) defines `write_unittest` coverage keys: `test_locations`, `test_command`, `build_context`.  
[src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:925) marks `write_unittest` answerable when build facts and inventory exist plus source or test areas.  
[test/mcp.test.mjs](D:/Personal/Projects/tokenopt/test/mcp.test.mjs:56) already has the MCP fixture/client pattern and tests `build_handoff`, but not `write_unittest`.

Recommended next steps:
Add one focused test in `test/mcp.test.mjs` using the existing `withTokenOptMcp()` helper.

Fixture: temp repo with `package.json` containing `build` and `test` scripts, `src/order-service.ts`, and `test/order-service.test.mjs` or similar. Set `TOKENOPT_ARTIFACT_DIR` as the helper already does.

Call:
```js
client.callTool({
  name: "tokenopt_compile_evidence",
  arguments: {
    task: "Please help me write a unit-test plan for the primary business flow",
    task_type: "write_unittest",
    cwd: repo,
    quality_rubric: ["candidate module", "test file location", "targeted command", "assertions"]
  }
})
```

Assert:
- `isError` is false.
- Output contains `answerable: true`.
- Output contains `test_locations: covered`.
- Output contains `test_command: covered`.
- Output contains `build_tool=Npm`.
- Output contains the npm scripts fact, e.g. `npm_scripts=build,test`.
- Output includes `recommended_next_action: answer_now`.
- A followup `tokenopt_read_file` or `tokenopt_search` is gated with `TokenOpt answerability gate`, proving the answerable packet prevents redundant exploration.
```

### tokenopt / write-unittest-class / tokenopt-mcp-instructed

- task_type: `write_unittest`
- correct: `yes`, exit: `0`, quality: `0.857 (6/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49705`, cached=`33920`, output=`1254`, reasoning=`653`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-qZQl5Z\write-unittest-class-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as write_unittest; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\tokenopt, task=<verbatim user request>, task_type=write_unittest, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Candidate module: `src/cli.ts`, because this is an npm CLI package (`@tokenopt/cli`) and the README describes the primary product as “TokenOpt CLI”. The likely unit-test target is the CLI orchestration flow: parse input, load config, invoke core TokenOpt behavior, report output/errors.

Evidence:
- Build tool: npm.
- Package: `@tokenopt/cli`.
- Scripts available: `build`, `doctor`, `test`.
- Main source area: `src/`, including `src/cli.ts`, `src/config.ts`, `src/exec.ts`, `src/observability.ts`, `src/evidence-state.ts`, and related modules.
- Test area exists under `test/`.

Recommended next steps:
Create or extend `test/cli.test.ts`.

Targeted command:
```bash
npm test -- test/cli.test.ts
```

Mocks/fixtures:
- Mock config loading from `src/config.ts`.
- Mock command/process execution from `src/exec.ts`.
- Mock observability/logging from `src/observability.ts`.
- Use temp fixture directories for minimal npm/TypeScript repo shapes.
- Fixture cases: valid config, missing config, invalid arguments, downstream execution failure.

Assertions:
- Valid CLI invocation calls the expected core flow with parsed options.
- Successful run exits/returns cleanly and emits expected summary output.
- Missing or invalid config produces a clear error and non-zero failure path.
- Downstream execution failure is surfaced without swallowing the original error context.
- Logging/observability hooks are called once with the expected command/result metadata.
- No real filesystem writes or subprocess execution happen outside temp fixtures/mocks.
```

### tokenopt / requirement-analysis / baseline

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `32`, mcp_calls: `0`, shell_calls: `32`, answerable: `0`, fallback: `0`
- tokens: input=`392081`, cached=`334080`, output=`4880`, reasoning=`1633`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-YofV4P\requirement-analysis-baseline.jsonl`

User prompt:
```text
Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
- WHAT: Add the behavior behind an explicit config guard, defaulting to legacy behavior for all existing user/repo configs.
- WHY: Current policy can deny, rewrite, compress, and gate tools, so changing defaults can surprise existing users.
- HOW: Add a typed config field such as `policy.<feature>.mode: "legacy" | "warn" | "enforce"` or `enabled: false`, branch the new behavior in policy/MCP paths, and preserve existing output shapes.
- Acceptance criteria: old configs still load; default behavior is unchanged; opt-in enables the new behavior; `TOKENOPT_POLICY=off` still bypasses it; Codex hook and MCP responses stay schema-compatible; docs and tests cover both legacy and guarded paths.
- Impacted code areas: config/types, policy evaluation, MCP tool gating, Codex adapter only if response shape changes, docs, and tests.
- Test strategy: unit tests for config merge/defaults, policy decisions in legacy/warn/enforce modes, MCP behavior for opted-in users, and adapter output compatibility.
- Unknowns: the exact behavior to guard, desired default for new installs, env override name, telemetry/reporting expectations, and whether this should be hook-only, MCP-only, or both.

Evidence:
- Config defaults and precedence are centralized in [src/config.ts](D:/Personal/Projects/tokenopt/src/config.ts:6) and merge built-in defaults, user config, repo config, then env overrides at [src/config.ts](D:/Personal/Projects/tokenopt/src/config.ts:62).
- Existing config type is strict `version: 1` with policy/context/codex/codegraph sections in [src/types.ts](D:/Personal/Projects/tokenopt/src/types.ts:27).
- Existing guarded behaviors already use config modes/booleans: broad search deny/warn, expensive test allow/warn/rewrite, lockfile/generated read denies in [src/policy-core.ts](D:/Personal/Projects/tokenopt/src/policy-core.ts:80) and [src/policy-core.ts](D:/Personal/Projects/tokenopt/src/policy-core.ts:156).
- MCP also enforces behavior independently through `tokenopt_search`, `tokenopt_read_file`, and answerability gating in [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:499) and [src/mcp.ts](D:/Personal/Projects/tokenopt/src/mcp.ts:621).
- Existing tests already verify config precedence, policy rewrites/denies, MCP gating, and adapter output compatibility in [test/config-policy.test.mjs](D:/Personal/Projects/tokenopt/test/config-policy.test.mjs:9) and [test/mcp.test.mjs](D:/Personal/Projects/tokenopt/test/mcp.test.mjs:56).
- I did not modify files. I did not run `npm test` because it runs `npm run build`, which can rewrite `dist`.

Recommended next steps:
1. Define the exact behavior and choose the guard contract, preferably a mode enum with legacy default.
2. Add the new field to `TokenOptConfig`, `DEFAULT_CONFIG`, and optional env override only if needed.
3. Implement the behavior in `evaluatePolicy` first; mirror it in MCP helpers if MCP tools can trigger the same flow.
4. Keep Codex adapter response shapes unchanged unless the new behavior needs a new `PolicyAction`.
5. Add focused tests for default legacy behavior, opt-in behavior, global policy disabled behavior, and old partial config compatibility.
6. Update README/SETUP with the guard, rollout guidance, and rollback example.
```

### tokenopt / requirement-analysis / tokenopt-mcp-instructed

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49828`, cached=`21120`, output=`1533`, reasoning=`722`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-89SFuS\requirement-analysis-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as implement; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\tokenopt, task=<verbatim user request>, task_type=implement, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
WHAT: Add the new behavior behind an explicit compatibility guard, defaulting to current behavior so existing users see no behavior change after upgrade.

WHY: This package is a published-style npm CLI, `@tokenopt/cli`, and README positions it as reusable context-budget middleware. A default-off guard protects existing Codex-first CLI workflows while allowing opt-in rollout.

HOW: Implement the behavior at the narrowest shared decision point, likely in the CLI/config/policy path, and pass a typed option through rather than branching in many call sites. Prefer an explicit config or CLI flag, with optional env-var support only if that matches existing patterns.

Evidence:
Repo facts: npm package `@tokenopt/cli`, scripts include `build`, `doctor`, and `test`.

Relevant areas likely impacted:
`src/cli.ts`, `src/config.ts`, `src/types.ts`, `src/policy-core.ts`, and possibly `src/codex-adapter.ts`, `src/mcp.ts`, `src/exec.ts`, or `src/evidence-state.ts` depending where the behavior lives.

Docs and validation likely impacted:
`README.md`, `package.json`, `tsconfig.json`, and tests under `test` if they cover CLI/config behavior.

Acceptance criteria:
1. Existing commands behave identically when the guard is omitted.
2. New behavior activates only when the guard is explicitly enabled.
3. Guard parsing is documented and type-safe.
4. Invalid guard values fail clearly if user-configurable.
5. Tests cover default/backwards-compatible behavior and enabled behavior.
6. `npm run build` and `npm test` pass.

Test strategy:
Add focused unit tests around the decision point, plus CLI/config parsing tests for default, enabled, disabled, and invalid values. Add one regression test proving old behavior remains the default. If the behavior affects MCP/evidence output, add snapshot-like assertions for both guarded states.

Unknowns:
The exact behavior change is not specified. The guard surface is also undecided: CLI flag, config field, env var, or a combination. Compatibility policy needs confirmation: default-off opt-in is safest; default-on with opt-out is higher risk.

Recommended next steps:
1. Define the concrete behavior delta in one sentence.
2. Choose the guard API name and surface.
3. Locate the single shared decision point in `src/policy-core.ts`, `src/config.ts`, or `src/cli.ts`.
4. Thread a typed option through affected modules.
5. Add tests for old default behavior first, then enabled behavior.
6. Update README only after behavior and guard names are stable.

No files were modified.
```

### headroom / investigate-flow / baseline

- task_type: `investigate`
- correct: `no`, exit: `null`, quality: `0.000 (0/7)`
- tool_calls: `42`, mcp_calls: `0`, shell_calls: `42`, answerable: `0`, fallback: `0`
- tokens: input=`0`, cached=`0`, output=`0`, reasoning=`0`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-JQuIKj\investigate-flow-baseline.jsonl`

User prompt:
```text
Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
I have enough to outline the main proxy and SDK flows. I’m doing one final pass over the repo’s test targets and packaging hooks so the verification commands align with existing tests instead of inventing new checks.
```

### headroom / investigate-flow / tokenopt-mcp-instructed

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `4`, mcp_calls: `4`, shell_calls: `0`, answerable: `0`, fallback: `0`
- tokens: input=`104756`, cached=`72448`, output=`2453`, reasoning=`1071`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-2iYjN3\investigate-flow-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as investigate; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\headroom, task=<verbatim user request>, task_type=investigate, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
This repo appears to be a multi-language Headroom project with Rust crates, a Python package, TypeScript SDK/plugin code, many examples, and a large `tests` tree. TokenOpt could not produce enough evidence to fully trace the primary user flow, so the flow below is a likely map, not a confirmed trace.

Likely entry points:
- Root project manifests: `Cargo.toml`, `pyproject.toml`
- Rust core/proxy: `crates/headroom-proxy`, `crates/headroom-py/src/lib.rs`
- TypeScript SDK: `sdk/typescript/src/types.ts`, `sdk/typescript/src/utils/stream.ts`, `sdk/typescript/src/utils/format.ts`, `sdk/typescript/src/utils/case.ts`
- OpenClaw plugin path: `plugins/openclaw/src/engine.ts`, `plugins/openclaw/src/convert.ts`
- Usage/documentation surface: `README.md`, `docs`, `examples`

Likely primary flow:
A user likely interacts through the Python package, TypeScript SDK, or OpenClaw plugin. Those frontends likely call into Headroom’s core/proxy layer, with stream formatting/conversion utilities handling request/response shape. The Rust/Python bridge in `crates/headroom-py/src/lib.rs` is probably important if Python is the main local interface.

Evidence:
- TokenOpt found `3059` files.
- Top-level concentration: `examples:1668`, `tests:528`, `headroom:349`, `crates:185`, `docs:98`, `sdk:60`, `wiki:39`.
- Main languages/extensions: `.ts:1085`, `.py:766`, `.mdx:274`, `.json:219`, `.rs:175`, `.js:107`.
- Important detected config files:
  - `Cargo.toml`
  - `Cargo.lock`
  - `pyproject.toml`
  - `crates/headroom-py/Cargo.toml`
  - `sdk/typescript/package.json`
  - `sdk/typescript/tsconfig.json`
  - `sdk/typescript/vitest.config.ts`
  - `plugins/openclaw/package.json`
  - `plugins/openclaw/tsconfig.json`
  - `plugins/openclaw/vitest.config.ts`
- Important detected source files:
  - `crates/headroom-py/src/lib.rs`
  - `plugins/openclaw/src/engine.ts`
  - `plugins/openclaw/src/convert.ts`
  - `sdk/typescript/src/types.ts`
  - `sdk/typescript/src/utils/stream.ts`
  - `sdk/typescript/src/utils/format.ts`
  - `sdk/typescript/src/utils/case.ts`
- Searches for Rust `fn main` under `crates` and Python `if __name__` under `headroom` returned no visible matches, so CLI/startup entry points are still unconfirmed.

Likely failure points:
- Cross-language boundary between Rust and Python package code.
- Stream parsing/formatting in `sdk/typescript/src/utils/stream.ts`.
- Data conversion in `plugins/openclaw/src/convert.ts`.
- Plugin engine orchestration in `plugins/openclaw/src/engine.ts`.
- Divergence between examples/docs and actual SDK/plugin APIs.
- Missing or unclear root build orchestration, since no root npm build facts were detected even though package files exist in subdirectories.

Recommended next steps:
Run these first verification commands from `D:\Personal\Projects\headroom`:

```powershell
cargo metadata --format-version=1 --no-deps
python -m pytest tests --collect-only
npm --prefix sdk/typescript test
npm --prefix plugins/openclaw test
```

Evidence still missing:
- Actual `README.md` usage section; the bounded read returned only metadata.
- Contents of root `Cargo.toml`, `pyproject.toml`, and package scripts.
- Exact exported APIs from `sdk/typescript`.
- Exact Python package entry points from `pyproject.toml`.
- Whether `plugins/openclaw/src/engine.ts` is the real user-flow orchestrator or only an adapter.
```

### headroom / pbi-plan / baseline

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `25`, mcp_calls: `0`, shell_calls: `25`, answerable: `0`, fallback: `0`
- tokens: input=`696978`, cached=`540544`, output=`4765`, reasoning=`2084`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-WbhDh5\pbi-plan-baseline.jsonl`

User prompt:
```text
Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Assuming the PBI refers to custom model configuration, the safest implementation is an additive “validate, preview, then apply” workflow for `${HEADROOM_CONFIG_DIR}/models.json` / `HEADROOM_MODEL_LIMITS`. Do not change runtime precedence in the first pass. Add a shared parser/validator plus a CLI like `headroom config models validate|diff|set`, with dry-run output, atomic writes, backups, and effective-config reporting.

Evidence:
- Custom model config is documented as an important user-editable surface with precedence across defaults, config file, env var, and SDK args: [configuration.mdx](D:/Personal/Projects/headroom/docs/content/docs/configuration.mdx:303).
- OpenAI and Anthropic each have separate private loaders for `HEADROOM_MODEL_LIMITS` and `models.json`, increasing drift risk: [openai.py](D:/Personal/Projects/headroom/headroom/providers/openai.py:143), [anthropic.py](D:/Personal/Projects/headroom/headroom/providers/anthropic.py:131).
- The provider loaders warn and continue on malformed JSON/OSError, but do not strongly validate schema/value ranges before use.
- `HeadroomClient` applies `model_context_limits` as final SDK overrides, then falls back to provider limits: [client.py](D:/Personal/Projects/headroom/headroom/client.py:382).
- Existing tests cover fallback and some env/file precedence, but not a safe edit workflow or atomic persistence: [test_provider_model_fallback.py](D:/Personal/Projects/headroom/tests/test_provider_model_fallback.py:137).
- Important nuance: OpenAI currently checks LiteLLM before manual/custom limits in `get_context_limit`, while Anthropic checks loaded limits first. Any precedence change here could alter behavior, so surface this in preview before changing semantics.

Recommended next steps:
1. Confirm the target config is model limits/pricing. If yes, implement a shared `model_config` service that loads sources, validates schema, merges with source metadata, and reports effective values.
2. Add CLI commands: `validate`, `show --effective`, `diff`, and `set <provider> <model> --context-limit ... --dry-run` with dry-run as the default for mutating commands unless `--apply` is passed.
3. Persist only to `${HEADROOM_CONFIG_DIR}/models.json`; preserve unknown JSON sections, create timestamped backups, write via temp file plus atomic replace, and read back after write.
4. Keep legacy behavior: `HEADROOM_MODEL_LIMITS` and `~/.headroom/models.json` must continue working; show warnings when an env var masks file changes.
5. Test validator failures, merge precedence, legacy fallback, env masking, atomic write/backup behavior, malformed existing JSON, OpenAI/Anthropic parity, and no behavior change for existing provider tests.
6. Roll out as additive documentation and CLI UX first; defer any lookup-precedence change until a separate compatibility decision.
```

### headroom / pbi-plan / tokenopt-mcp-instructed

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `4`, mcp_calls: `4`, shell_calls: `0`, answerable: `0`, fallback: `0`
- tokens: input=`107236`, cached=`60160`, output=`2401`, reasoning=`1443`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-zqmyJP\pbi-plan-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as implement; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\headroom, task=<verbatim user request>, task_type=implement, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
No files were modified. The repo evidence points to the likely implementation area being the OpenClaw plugin configuration flow, especially `plugins/openclaw/src/gateway-config.ts` and nearby gateway/proxy/engine files. Because the PBI does not name the exact configuration key, the implementation plan should start by pinning that key and its current callers before coding.

Evidence:
TokenOpt found a TypeScript/Rust repo with relevant source concentrated in `plugins/openclaw`, `sdk/typescript`, and `crates`. The surfaced important files include `plugins/openclaw/src/gateway-config.ts`, `engine.ts`, `proxy-manager.ts`, `index.ts`, `convert.ts`, and `tools/headroom-retrieve.ts`. Test config exists for `plugins/openclaw/vitest.config.ts` and `sdk/typescript/vitest.config.ts`. Root build facts were not detected, so validation should use package-level commands.

Recommended next steps:
1. Identify the exact config surface:
   `gateway-config.ts` should be treated as the first inspection point, then trace usage into `engine.ts`, `proxy-manager.ts`, plugin entrypoints, and any CLI/tool wrappers.

2. Preserve existing behavior:
   Add a compatibility layer that accepts the current config shape unchanged. Introduce the safer change path as additive behavior, such as a versioned config field, explicit migration helper, validation-before-apply step, or guarded opt-in flag.

3. Make changes safe:
   Validate the new config before applying it, reject invalid values with clear errors, avoid mutating existing config in place, and keep fallback behavior identical when the safer path is unused. If runtime config can be changed while a proxy/gateway is active, apply changes atomically or require restart with a clear message.

4. Main risks:
   Config precedence changes, default-value drift, old config files becoming invalid, proxy/gateway lifecycle bugs, silent behavior changes, and incomplete coverage between plugin and SDK paths.

5. Tests:
   Add Vitest coverage for old config compatibility, default behavior, new safe-change behavior, invalid config rejection, migration/version handling, and an integration-style test through the gateway/proxy manager path.

6. Rollout:
   Ship behind an opt-in flag or additive config key first, document old vs new behavior, log deprecation warnings only where actionable, and avoid removing legacy behavior until a later release.
```

### headroom / write-unittest-class / baseline

- task_type: `write_unittest`
- correct: `yes`, exit: `0`, quality: `0.857 (6/7)`
- tool_calls: `26`, mcp_calls: `0`, shell_calls: `26`, answerable: `0`, fallback: `0`
- tokens: input=`446841`, cached=`381824`, output=`4374`, reasoning=`1932`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-sts0Ds\write-unittest-class-baseline.jsonl`

User prompt:
```text
Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Candidate: `headroom.transforms.pipeline.TransformPipeline`, especially `TransformPipeline.apply()` in [pipeline.py](D:/Personal/Projects/headroom/headroom/transforms/pipeline.py:31). It is the best unit-test target for the primary business flow: message compression orchestration before LLM calls.

Test file location: `tests/test_transforms/test_pipeline.py` as a new focused unit test module. Avoid `tests/test_pipeline.py`, which already targets the separate canonical extension manager.

Targeted command:
```bash
python -m pytest tests/test_transforms/test_pipeline.py -q
```

Evidence:
- README defines the core product flow as compressing agent context before it reaches the LLM: [README.md](D:/Personal/Projects/headroom/README.md:39).
- README lists both public entry modes, `compress(messages)` and `headroom proxy`: [README.md](D:/Personal/Projects/headroom/README.md:48).
- README’s architecture flow is `CacheAligner -> ContentRouter -> CCR`: [README.md](D:/Personal/Projects/headroom/README.md:66).
- `TransformPipeline` is documented as orchestrating transforms in order: [pipeline.py](D:/Personal/Projects/headroom/headroom/transforms/pipeline.py:33).
- Public `compress()` calls `pipeline.apply(...)`: [compress.py](D:/Personal/Projects/headroom/headroom/compress.py:235).
- `HeadroomClient` constructs and calls `TransformPipeline`: [client.py](D:/Personal/Projects/headroom/headroom/client.py:328), [client.py](D:/Personal/Projects/headroom/headroom/client.py:450).
- Proxy setup builds Anthropic/OpenAI `TransformPipeline` instances around `ContentRouter`: [server.py](D:/Personal/Projects/headroom/headroom/proxy/server.py:377).

Recommended next steps:
Unit-test `TransformPipeline.apply()` with fake transforms and fake token counters, not real compressors.

Mocks/fixtures:
- `FakeTokenCounter` with deterministic `count_text()` and `count_messages()`.
- `FakeProvider` returning that counter and a stable provider name.
- `FakeTransform` objects with `name`, `should_apply()`, and `apply()` returning `TransformResult`.
- A fixture message list with nested dict/list content to verify deep-copy behavior.
- Use `record_metrics=False` for most tests; optionally monkeypatch `get_otel_metrics()` for one metrics test.

Assertions:
- Raises `ValueError` when `model_limit` is missing.
- Runs applicable transforms in order and skips transforms whose `should_apply()` is false.
- Second transform receives output from the first.
- Original input messages are unchanged.
- Aggregates `tokens_before`, `tokens_after`, `transforms_applied`, `markers_inserted`, `warnings`, and timing keys.
- When `generate_diff_artifact=True`, returns request id, original/optimized tokens, saved tokens, and per-transform diff entries.
- `simulate()` delegates to `apply()` without mutating inputs or recording metrics.
```

### headroom / write-unittest-class / tokenopt-mcp-instructed

- task_type: `write_unittest`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `4`, mcp_calls: `4`, shell_calls: `0`, answerable: `0`, fallback: `0`
- tokens: input=`68802`, cached=`36352`, output=`4102`, reasoning=`3324`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-zJavxm\write-unittest-class-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as write_unittest; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\headroom, task=<verbatim user request>, task_type=write_unittest, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Candidate module: `plugins/openclaw/src/tools/headroom-retrieve.ts`.

It is the best unit-test target for the primary business flow because it appears to be the user-facing retrieval tool, with `plugins/openclaw/src/proxy-manager.ts` as the likely external dependency boundary.

Test file location:
`plugins/openclaw/src/tools/headroom-retrieve.test.ts`

Targeted command:
`cd plugins/openclaw && npx vitest run src/tools/headroom-retrieve.test.ts`

Evidence:
TokenOpt found `plugins/openclaw/src/tools/headroom-retrieve.ts`, `plugins/openclaw/src/proxy-manager.ts`, `plugins/openclaw/vitest.config.ts`, and `plugins/openclaw/package.json` in the important source/config sample. A narrow `describe(` search under `plugins/openclaw` exited successfully, supporting Vitest-style tests in that package.

Recommended next steps:
Mock `proxy-manager` so the test never starts a real proxy or performs network/process work.

Use fixtures for:
- valid retrieval input
- successful proxy response with evidence/result data
- proxy unavailable/error response
- invalid or empty input
- retrieval response with no useful evidence

Assert that:
- the tool exports/registers the expected retrieve behavior and schema
- valid input calls the proxy manager with the expected payload
- successful responses are normalized into the expected tool result
- failures return or throw the documented error shape
- invalid input does not call the proxy manager
- no real proxy/network/process side effects occur during the unit test
```

### headroom / requirement-analysis / baseline

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `26`, mcp_calls: `0`, shell_calls: `26`, answerable: `0`, fallback: `0`
- tokens: input=`609867`, cached=`510848`, output=`4403`, reasoning=`1072`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-YbhXrp\requirement-analysis-baseline.jsonl`

User prompt:
```text
Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
WHAT: Add the new behavior behind an explicit opt-in guard, defaulting to legacy behavior for existing users.

WHY: The repo already treats behavior changes as compatibility risks, especially in proxy/compression paths where byte-for-byte passthrough and cache safety are core guarantees.

HOW: Introduce a named config/CLI/env flag, route the new behavior only when enabled, keep existing defaults unchanged, log the selected mode, and provide an immediate rollback value.

Acceptance criteria:
- Default config produces identical behavior to current users.
- Opt-in flag enables the new behavior only on the intended code path.
- Invalid bodies, unsupported paths, oversized bodies, and disabled mode still pass through or fail exactly as current policy requires.
- Logs include guard state and decision reason.
- Tests cover default-off, opt-in-on, rollback/off, and affected edge cases.

Evidence:
- Proxy flags already follow CLI/env/default precedence: [config.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/config.rs:230), [config.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/config.rs:252).
- Compatibility defaults are explicit: compression defaults off for operators at [config.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/config.rs:234), test config keeps compression off at [config.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/config.rs:593).
- Request flow already gates interception on config, method, path, and JSON content type: [proxy.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/proxy.rs:531).
- Dispatchers already preserve `CompressionMode::Off` as passthrough: [live_zone_anthropic.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/compression/live_zone_anthropic.rs:149), [live_zone_openai.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/compression/live_zone_openai.rs:59), [live_zone_responses.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/compression/live_zone_responses.rs:59).
- Tests assert byte equality, not just JSON equality, for backwards compatibility: [integration_compression.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/tests/integration_compression.rs:10).
- Python SDK also uses opt-in behavior and compatibility shims: [config.py](D:/Personal/Projects/headroom/headroom/config.py:476), [pipeline.py](D:/Personal/Projects/headroom/headroom/transforms/pipeline.py:74).

Recommended next steps:
1. Define the exact behavior and scope: proxy-only, Python SDK-only, or both.
2. Add the guard in the nearest existing config surface, likely `crates/headroom-proxy/src/config.rs` for proxy behavior or `headroom/config.py` for SDK behavior.
3. Wire the guard at the narrowest dispatch point, not globally.
4. Add focused tests: default behavior unchanged, opt-in behavior changed, opt-out rollback, and byte-equality where passthrough is required.
5. Document the flag, default, rollback value, and migration expectation.

Unknowns: the requested behavior itself is not specified, so impacted transforms and exact assertions depend on whether this is a compression, routing, cache, telemetry, or SDK pipeline change. No files were modified.
```

### headroom / requirement-analysis / tokenopt-mcp-instructed

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `4`, mcp_calls: `4`, shell_calls: `0`, answerable: `0`, fallback: `0`
- tokens: input=`68701`, cached=`37376`, output=`2663`, reasoning=`1733`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-ajl1FY\requirement-analysis-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as implement; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\headroom, task=<verbatim user request>, task_type=implement, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
I did not modify files.

WHAT: add the new behavior behind an explicit guard, defaulting to existing behavior.  
WHY: this preserves backwards compatibility for current users while allowing opt-in rollout.  
HOW: add the guard at the narrowest boundary where behavior changes, then thread it through config/API surfaces only as needed.

Acceptance criteria:
- Existing users see unchanged behavior by default.
- New behavior only activates when the guard is explicitly enabled.
- Both old and new paths are covered by tests.
- Docs/examples explain the guard and default.

Evidence:
TokenOpt found the repo shape: Rust proxy code, Python bindings, TypeScript SDK, OpenClaw plugin, examples, docs, and tests. Important likely areas include `crates/headroom-proxy`, `crates/headroom-py`, `sdk/typescript`, and `plugins/openclaw`.

Relevant files surfaced:
- [crates/headroom-proxy/src/websocket.rs](D:/Personal/Projects/headroom/crates/headroom-proxy/src/websocket.rs:1)
- [plugins/openclaw/src/proxy-manager.ts](D:/Personal/Projects/headroom/plugins/openclaw/src/proxy-manager.ts:1)
- [plugins/openclaw/src/gateway-config.ts](D:/Personal/Projects/headroom/plugins/openclaw/src/gateway-config.ts:1)
- [plugins/openclaw/src/engine.ts](D:/Personal/Projects/headroom/plugins/openclaw/src/engine.ts:1)
- [sdk/typescript/tsconfig.json](D:/Personal/Projects/headroom/sdk/typescript/tsconfig.json:1)
- [crates/headroom-proxy/Cargo.toml](D:/Personal/Projects/headroom/crates/headroom-proxy/Cargo.toml:1)

Unknowns:
- The exact behavior change was not specified.
- The correct guard surface is unclear: env var, config key, SDK option, plugin setting, or Cargo feature.
- TokenOpt’s follow-up searches produced compressed artifacts but no model-visible match detail, so I cannot confirm an existing feature-flag convention.

Recommended next steps:
1. Identify the exact behavior delta and affected runtime path.
2. Locate the existing config/options boundary closest to that path.
3. Add a guard with default `false` or equivalent legacy mode.
4. Implement old/new behavior branching at the smallest practical scope.
5. Add tests for default legacy behavior, enabled new behavior, and config propagation.
6. Update docs/examples only after the guard name and public surface are finalized.
```

### caveman / investigate-flow / baseline

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `31`, mcp_calls: `0`, shell_calls: `31`, answerable: `0`, fallback: `0`
- tokens: input=`364787`, cached=`282752`, output=`6404`, reasoning=`3256`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-aRXuW9\investigate-flow-baseline.jsonl`

User prompt:
```text
Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Primary flow: install `caveman`, installer detects local AI agents, writes plugin/skills/hooks, then user triggers `/caveman` or says “talk like caveman”. Strongest path is Claude Code: `bin/install.js` installs plugin, copies hooks, merges `SessionStart` + `UserPromptSubmit` into `settings.json`, then hooks emit caveman rules and keep mode active.

Core path:
`package.json` bin `caveman` -> `bin/install.js main()` -> provider detection -> `installClaude()` / `installGemini()` / `installViaSkills()` / `installOpencode()` / `installOpenclaw()` -> optional `installHooks()` / `installMcpShrink()` / `runInit()` -> runtime hooks `caveman-activate.js` and `caveman-mode-tracker.js`.

Evidence:
- [package.json](<D:/Personal/Projects/caveman/package.json:15>) exposes `caveman` as `./bin/install.js`, requires Node `>=18`, no runtime deps listed.
- [README.md](<D:/Personal/Projects/caveman/README.md:95>) says one-line install, `/caveman` trigger, “talk like caveman”, and auto-activation for Claude/Codex/Gemini.
- [bin/install.js](<D:/Personal/Projects/caveman/bin/install.js:1110>) handles arg parse, Node/WSL guards, provider detection, install dispatch, fallback `npx skills add`, and optional `--with-init`.
- [bin/install.js](<D:/Personal/Projects/caveman/bin/install.js:382>) Claude path installs marketplace/plugin, hooks, and optional MCP shrink.
- [bin/install.js](<D:/Personal/Projects/caveman/bin/install.js:690>) hook install copies hook files and merges `SessionStart`, `UserPromptSubmit`, and statusline.
- [src/hooks/caveman-activate.js](<D:/Personal/Projects/caveman/src/hooks/caveman-activate.js:4>) writes `.caveman-active`, emits rules, falls back if `SKILL.md` missing.
- [src/hooks/caveman-mode-tracker.js](<D:/Personal/Projects/caveman/src/hooks/caveman-mode-tracker.js:25>) handles natural-language activation, `/caveman`, `/caveman-stats`, stop/disable, and per-turn context.
- Dry-run verified Claude install plan: plugin install, hook file copy, settings merge. No repo files modified.

Likely failure points: Node <18, Windows/WSL Node mismatch, missing agent CLIs on PATH, soft providers skipped unless `--only`, network/GitHub/npm registry failures, malformed `settings.json`, existing statusline conflict, unsupported `claude mcp`, hook stdin JSON parse errors, missing/corrupt flag file, symlink/permission refusal, and real-agent behavior not proven by dry-run.

Evidence still missing: no real install executed, no full test suite run, no live Claude/Gemini/Codex session observed, no MCP upstream wrapped, no macOS/Linux verification, no network install path verified.

Recommended next steps:
```powershell
node --version
node .\bin\install.js --help
node .\bin\install.js --list --no-color
node .\bin\install.js --dry-run --only claude --no-mcp-shrink --non-interactive --config-dir "$env:TEMP\caveman-verify"
node .\src\tools\caveman-init.js --help
node --test .\tests\installer\unit.argv.test.mjs .\tests\installer\unit.settings.test.mjs
node .\tests\test_caveman_init.js
node .\tests\test_mcp_shrink.js
```

For hook behavior only, use temp config:
```powershell
$env:CLAUDE_CONFIG_DIR="$env:TEMP\caveman-hooks-verify"
node .\src\hooks\caveman-activate.js
'{"prompt":"/caveman ultra"}' | node .\src\hooks\caveman-mode-tracker.js
```
```

### caveman / investigate-flow / tokenopt-mcp-instructed

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`48600`, cached=`32896`, output=`1616`, reasoning=`784`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-MoxWuo\investigate-flow-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Investigate the primary user flow in this codebase. Identify likely entry points, core code paths, dependencies, likely failure points, exact first commands to verify, and what evidence is still missing. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as investigate; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\caveman, task=<verbatim user request>, task_type=investigate, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
This appears to be an npm-based project named `caveman-installer`. The primary user flow is likely an installer/bootstrap flow for Caveman skills, rules, plugins, and MCP components.

Likely entry points:
- `package.json`: npm package root; only detected script is `test`.
- `src/tools/caveman-init.js`: likely main initialization/install flow.
- `bin/lib/settings.js` and `bin/lib/openclaw.js`: likely shared runtime/config helpers.
- `src/mcp-servers/caveman-shrink/index.js`: likely MCP/server-side entry point for shrink/compression behavior.
- `skills/*/README.md` and `src/rules/*.md`: likely user-facing skill/rule artifacts installed or referenced by the flow.

Evidence:
- Build facts: `package.json` exists, build tool is npm, package name is `caveman-installer`, version `0.1.0`, script detected: `test`.
- Repo shape: 127 files total.
- Main areas: `src/`, `skills/`, `plugins/`, `commands/`, `docs/`, `evals/`.
- Important files surfaced by evidence compiler:
  - `src/tools/caveman-init.js`
  - `bin/lib/settings.js`
  - `bin/lib/openclaw.js`
  - `src/mcp-servers/caveman-shrink/index.js`
  - `src/mcp-servers/caveman-shrink/package.json`
  - `skills/caveman/README.md`
  - `skills/caveman-review/README.md`
  - `skills/caveman-commit/README.md`
  - `skills/caveman-compress/README.md`
  - `src/rules/caveman-activate.md`
  - `src/rules/caveman-openclaw-bootstrap.md`

Likely failure points:
- Missing or invalid npm dependencies.
- `caveman-init.js` path/config assumptions.
- Settings resolution in `bin/lib/settings.js`.
- External tool integration around `openclaw.js`.
- MCP server startup/configuration under `src/mcp-servers/caveman-shrink/`.
- Skill/rule file paths drifting from what installer code expects.

Evidence still missing:
- Exact CLI/bin mappings from `package.json`.
- Actual function-level call graph.
- Runtime behavior of `caveman-init.js`.
- Whether the MCP server requires environment variables.
- Current test pass/fail status.

Recommended next steps:
Run these first, without modifying files:

```powershell
npm test
npm pkg get name version scripts bin dependencies devDependencies
node src/tools/caveman-init.js --help
node src/mcp-servers/caveman-shrink/index.js --help
```

If `--help` is unsupported, inspect those files next before running them directly, because init/server entry points may perform setup work.
```

### caveman / pbi-plan / baseline

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `34`, mcp_calls: `0`, shell_calls: `34`, answerable: `0`, fallback: `0`
- tokens: input=`565297`, cached=`477568`, output=`6313`, reasoning=`2784`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-0Uoduo\pbi-plan-baseline.jsonl`

User prompt:
```text
Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Likely PBI = safer default-mode configuration. Current users must set `CAVEMAN_DEFAULT_MODE` or manually edit `~/.config/caveman/config.json`; no guarded setter exists. Implement a config-only CLI path that validates mode, preserves unknown config keys, writes atomically with backup, reports effective source, and leaves session behavior unchanged unless explicitly applied.

Evidence:
- [src/hooks/caveman-config.js](/D:/Personal/Projects/caveman/src/hooks/caveman-config.js:39) resolves default mode as env var > `config.json` > `full`; invalid config silently falls back.
- [src/hooks/caveman-activate.js](/D:/Personal/Projects/caveman/src/hooks/caveman-activate.js:18) applies that mode at session start and treats `off` as no activation.
- [src/hooks/caveman-mode-tracker.js](/D:/Personal/Projects/caveman/src/hooks/caveman-mode-tracker.js:81) uses the same default for bare `/caveman`; tests currently assert `CAVEMAN_DEFAULT_MODE=off` makes bare `/caveman` not write a flag.
- [src/plugins/opencode/plugin.js](/D:/Personal/Projects/caveman/src/plugins/opencode/plugin.js:127) also uses `getDefaultMode`, so changes affect opencode too.
- [bin/install.js](/D:/Personal/Projects/caveman/bin/install.js:720) already has safer `settings.json` patterns: parse, backup once, validate, atomic write.
- [skills/caveman-help/SKILL.md](/D:/Personal/Projects/caveman/skills/caveman-help/SKILL.md:39) documents manual config editing, but no safe command.

Recommended next steps:
- Add `caveman config get` and `caveman config set default-mode <mode>` to `bin/install.js`, separate from install/uninstall flows.
- Add shared config helpers in `src/hooks/caveman-config.js`: resolve with source metadata, validate mode, safe read, safe atomic write, preserve unknown keys, refuse malformed config unless `--force` creates backup.
- Keep `getDefaultMode()` behavior compatible; avoid changing hook semantics in same PBI. If restricting defaults, do it only in the new setter and document env/config legacy behavior.
- Make setter print when env var overrides config, because setting file will not affect runtime while `CAVEMAN_DEFAULT_MODE` is present.
- Do not mutate `.caveman-active` by default; apply on next session. Optional later flag: `--apply-now`.
- Tests: unit config read/write/invalid/backup/env-priority, installer argv tests for new command, hook integration with temp `XDG_CONFIG_HOME`, opencode plugin default-mode smoke, regression for `off` + bare `/caveman`.
- Rollout: document command in README/help, note manual JSON still works, and call out `off` behavior precisely: use `/caveman full` to activate when default is off.
```

### caveman / pbi-plan / tokenopt-mcp-instructed

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (7/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`48731`, cached=`32896`, output=`1493`, reasoning=`843`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-7Hoe3I\pbi-plan-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Based on this requirement/PBI, please help me investigate and plan implementation: users need a safer way to change an important configuration without breaking existing behavior. Analyze likely impacted areas, implementation approach, risks, tests, and rollout notes. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as implement; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\caveman, task=<verbatim user request>, task_type=implement, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
No files were modified. TokenOpt found enough repository evidence to plan this safely. The likely implementation center is the configuration/settings path, especially `bin/lib/settings.js`, with callers around `bin/lib/openclaw.js`, `src/tools/caveman-init.js`, hooks, plugins, and MCP server setup.

Evidence:
The repo is an npm package named `caveman-installer` with a `test` script. Key likely impacted files/directories include `bin/lib/settings.js`, `bin/lib/openclaw.js`, `src/tools/caveman-init.js`, `src/hooks`, `src/plugins/opencode`, and `src/mcp-servers/caveman-shrink`. Config-like files exist across package roots, so preserving existing behavior and compatibility matters.

Recommended next steps:
Implement a safer config-change path around the settings layer:

1. Add a read-normalize-validate-plan-apply flow before writing important config.
2. Preserve current defaults and existing public behavior unless the user explicitly opts into a new command or flag.
3. Validate config shape and values before applying changes.
4. Preserve unknown keys where possible so older/newer config fields are not lost.
5. Write atomically using a temp file plus rename, with backup/rollback on failure.
6. Add a dry-run or preview mode for commands that mutate important config.
7. Add schema/version handling only if the current config format already needs migration.

Main risks:
Partial writes, Windows path/rename behavior, accidental removal of unknown config keys, changed defaults, concurrent writes, and breaking existing init/plugin/hook flows.

Tests to add:
Unit tests for validation, invalid config rejection, default preservation, unknown-key preservation, backup creation, rollback behavior, and atomic-write failure paths. Add integration coverage for `caveman-init` and any command path that reads config through `openclaw` or hooks. Also include regression tests proving old config files still load unchanged.
```

### caveman / write-unittest-class / baseline

- task_type: `write_unittest`
- correct: `yes`, exit: `0`, quality: `0.857 (6/7)`
- tool_calls: `20`, mcp_calls: `0`, shell_calls: `20`, answerable: `0`, fallback: `0`
- tokens: input=`200158`, cached=`121600`, output=`4553`, reasoning=`2896`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-QOUrWT\write-unittest-class-baseline.jsonl`

User prompt:
```text
Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
- Candidate module: [bin/install.js](D:/Personal/Projects/caveman/bin/install.js) installer orchestrator.
- Test file location: `tests/installer/unit.install-flow.test.mjs`.
- Targeted command: `node --test tests/installer/unit.install-flow.test.mjs`.
- No files modified.

Evidence:
- `package.json` maps CLI binary `caveman` to `./bin/install.js`.
- README primary flow: detect agents, install caveman for each, wire hooks/init/MCP.
- `bin/install.js` owns `PROVIDERS`, `detectMatch`, `installClaude`, `installViaSkills`, `installOpencode`, `installOpenclaw`, fallback install, uninstall.
- Existing tests already focus on `tests/installer/*.test.mjs`.

Recommended next steps:
- Add unit tests that shell out to `node bin/install.js` with temp PATH shims.
- Fixtures/mocks: temp `CLAUDE_CONFIG_DIR`, `XDG_CONFIG_HOME`, `OPENCLAW_WORKSPACE`, fake `claude`/`gemini`/`codex` commands, `NO_COLOR=1`, `--dry-run`, `--non-interactive`.
- Assertions:
  - auto-detect dispatch prints expected provider install plans.
  - `--only <agent>` bypasses detection.
  - soft providers skip unless explicit.
  - installed Claude/Gemini probe skips without `--force`; `--force` reinstalls.
  - no detected providers triggers `npx skills add ... --yes --all` fallback.
  - dry-run writes no files under temp config dirs.
```

### caveman / write-unittest-class / tokenopt-mcp-instructed

- task_type: `write_unittest`
- correct: `yes`, exit: `0`, quality: `0.857 (6/7)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`48628`, cached=`45184`, output=`1413`, reasoning=`771`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-qmJrmz\write-unittest-class-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Please help me write a unit-test plan for the class or module most likely responsible for the primary business flow in this repository. Identify candidate class/module, test file location, targeted command, mocks/fixtures, and assertions. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as write_unittest; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\caveman, task=<verbatim user request>, task_type=write_unittest, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Candidate primary-flow module: `src/tools/caveman-init.js`.

Based on the evidence, this repo is an npm package named `caveman-installer`, and `src/tools/caveman-init.js` is the strongest candidate for the main business flow: initializing/installing Caveman into a project. Proposed test file: `tests/tools/caveman-init.test.js`.

Evidence:
- `package.json` exists with package name `caveman-installer` and an npm `test` script.
- Source inventory highlights `src/tools/caveman-init.js` plus support modules like `bin/lib/settings.js` and `bin/lib/openclaw.js`.
- Repo has a top-level `tests` area, so `tests/tools/caveman-init.test.js` is the most natural location.
- TokenOpt evidence was answerable with confidence `0.86`; no files were modified.

Recommended next steps:
- Targeted command: `npm test -- tests/tools/caveman-init.test.js`
- Mocks/fixtures:
  - Mock filesystem calls for creating directories/files and detecting existing Caveman setup.
  - Mock process cwd/env where initialization depends on project location.
  - Mock `bin/lib/settings.js` if init reads/writes config.
  - Mock `bin/lib/openclaw.js` if init installs or configures OpenClaw behavior.
  - Use a temp project fixture with minimal package/config files.

- Core assertions:
  - Fresh project: creates expected Caveman files/directories and writes expected settings.
  - Idempotent run: does not duplicate files or corrupt existing config.
  - Existing user config: preserves unrelated settings while applying Caveman-specific changes.
  - Missing/invalid project root: fails with a clear error and performs no partial writes.
  - Dependency/helper failure: propagates or reports the failure cleanly and leaves filesystem state consistent.
```

### caveman / requirement-analysis / baseline

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `29`, mcp_calls: `0`, shell_calls: `29`, answerable: `0`, fallback: `0`
- tokens: input=`409933`, cached=`335744`, output=`3876`, reasoning=`999`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-f98Rms\requirement-analysis-baseline.jsonl`

User prompt:
```text
Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
- WHAT: add new behavior behind explicit guard, defaulting to current behavior.
- WHY: existing users rely on current hook/install/runtime semantics; default-on behavior risks prompt/style drift, config churn, or installer surprises.
- HOW: add guard resolver in `src/hooks/caveman-config.js`, then branch in runtime surfaces: Claude hooks and opencode plugin. Use env/config first; installer flags only if install-time persistence needed.
- Acceptance criteria: no guard = byte/behavior-compatible output; guard on = new behavior active; invalid guard ignored; uninstall/idempotency unchanged; no user-edited files overwritten without `--force`.
- Impacted areas: `src/hooks/caveman-config.js`, `src/hooks/caveman-mode-tracker.js`, `src/hooks/caveman-activate.js` if session-start behavior changes, `src/plugins/opencode/plugin.js`, maybe `bin/install.js` and docs if CLI exposure needed.
- Test strategy: unit guard parsing, hook off/on cases, opencode parity, regression for idempotent install, invalid config ignored, existing suite.
- Unknowns: exact behavior, desired default for new installs, guard name, env vs config vs CLI, whether opencode must match Claude behavior.

Evidence:
- Installer already uses compatibility guards: `--all`, `--minimal`, `--with-*`, `--no-*`, `--dry-run`, `--force` in [bin/install.js](D:/Personal/Projects/caveman/bin/install.js:47).
- Soft providers require explicit `--only`, preventing surprise installs in [bin/install.js](D:/Personal/Projects/caveman/bin/install.js:1151).
- Runtime config already supports env/config/default mode via `CAVEMAN_DEFAULT_MODE` in [src/hooks/caveman-config.js](D:/Personal/Projects/caveman/src/hooks/caveman-config.js:39).
- Hook state reads are whitelist + size guarded in [src/hooks/caveman-config.js](D:/Personal/Projects/caveman/src/hooks/caveman-config.js:160).
- Claude per-turn behavior already skips conflicting independent modes in [src/hooks/caveman-mode-tracker.js](D:/Personal/Projects/caveman/src/hooks/caveman-mode-tracker.js:108).
- opencode duplicates same runtime contract, so guarded behavior likely needs parity in [src/plugins/opencode/plugin.js](D:/Personal/Projects/caveman/src/plugins/opencode/plugin.js:125).
- Tests already cover argv guards, idempotency, custom edit preservation, default mode, off mode, and reinforcement behavior.

Recommended next steps:
1. Define behavior + guard contract: name, accepted values, default, scope.
2. Add config helper with default preserving current behavior.
3. Gate Claude hook behavior and opencode behavior through same helper.
4. Add focused tests for guard off/on/invalid.
5. Only add installer/docs changes if users need persistent opt-in outside env/config.
```

### caveman / requirement-analysis / tokenopt-mcp-instructed

- task_type: `implement`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`48762`, cached=`32896`, output=`1666`, reasoning=`832`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-PkxTCr\requirement-analysis-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
Analyze this requirement against the codebase and produce WHAT, WHY, HOW, acceptance criteria, impacted code areas, test strategy, unknowns, and a practical implementation plan: add a guarded behavior change that preserves backwards compatibility for existing users. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as implement; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\caveman, task=<verbatim user request>, task_type=implement, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
WHAT: Add the behavior change as opt-in, guarded by a config/flag path, with default behavior unchanged for current users.

WHY: This preserves backwards compatibility while allowing the new behavior to be enabled deliberately, tested safely, and rolled out gradually.

HOW: Use the existing settings/config surface first, likely [bin/lib/settings.js](/D:/Personal/Projects/caveman/bin/lib/settings.js), [src/hooks/caveman-config.js](/D:/Personal/Projects/caveman/src/hooks/caveman-config.js), and related activation/openclaw flows. Gate the new branch at the narrowest behavior point, default the guard to `false`, and fall back to legacy behavior if the guard is missing, malformed, or unsupported.

Acceptance criteria:
- Existing users see identical behavior with no new config.
- New behavior activates only when the explicit guard is enabled.
- Invalid or absent guard values preserve legacy behavior.
- CLI/hooks/plugin flows remain compatible.
- Tests cover both legacy-default and enabled-guard paths.

Impacted code areas:
- `bin/lib/settings.js`
- `bin/lib/openclaw.js`
- `src/tools/caveman-init.js`
- `src/hooks/caveman-config.js`
- `src/hooks/caveman-activate.js`
- `src/hooks/caveman-mode-tracker.js`
- Possibly plugin/package config under `src/plugins/opencode/`

Test strategy:
- Add focused unit tests for config parsing/defaults.
- Add behavior tests proving the legacy path remains default.
- Add enabled-guard tests proving the new behavior takes effect.
- Run `npm test`.

Unknowns:
- The exact behavior change is not specified.
- The preferred guard surface is not specified: config file, env var, CLI flag, or plugin setting.
- It is unclear whether docs updates are required for this change.

Evidence:
TokenOpt found this is an npm project named `caveman-installer` with a `test` script in `package.json`. The repository has 127 files, with likely implementation areas in `bin/lib`, `src/hooks`, `src/tools`, `src/plugins`, and `src/mcp-servers`. It specifically surfaced settings/config/activation files as likely relevant to a guarded compatibility change.

Recommended next steps:
1. Decide the exact behavior change and guard name.
2. Implement the guard in the existing config/settings layer.
3. Thread the resolved boolean into the affected behavior path.
4. Keep the old code path as the default.
5. Add tests for default, enabled, and invalid guard cases.
6. Run `npm test` and update docs only if users need to discover the opt-in behavior.
```

### codegraph / repo-benchmark-analysis / baseline

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `0.875 (7/8)`
- tool_calls: `44`, mcp_calls: `0`, shell_calls: `44`, answerable: `0`, fallback: `0`
- tokens: input=`449834`, cached=`364800`, output=`6230`, reasoning=`2405`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-HAqyqd\repo-benchmark-analysis-baseline.jsonl`

User prompt:
```text
If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
This repo does contain benchmark/evaluation/performance material. It is mostly manual, not CI-wired: package scripts expose an eval runner, `scripts/agent-eval/` contains Claude/CodeGraph A/B harnesses, `docs/benchmarks/` records results, and `__tests__/db-perf.test.ts` has performance-related regression tests. I only inspected files; no files were modified.

Evidence:
- `package.json` defines `npm run eval` as `npm run build && npx tsx __tests__/evaluation/runner.ts`, plus `test:eval`. The actual runner is [runner.ts](D:/Personal/Projects/codegraph/__tests__/evaluation/runner.ts), which requires `EVAL_CODEBASE=/path` or a path argument, requires `.codegraph/codegraph.db`, measures `searchNodes` and `findRelevantContext`, reports recall/MRR or edge density plus latency, and writes a JSON report.
- [scoring.ts](D:/Personal/Projects/codegraph/__tests__/evaluation/scoring.ts) uses a `PASS_THRESHOLD` of `0.5`; [test-cases.ts](D:/Personal/Projects/codegraph/__tests__/evaluation/test-cases.ts) covers symbol lookup and exploration quality.
- [db-perf.test.ts](D:/Personal/Projects/codegraph/__tests__/db-perf.test.ts) is a Vitest regression suite for DB performance/correctness paths: batch `getNodesByIds`, cache invalidation, edge endpoint validation, and maintenance pragmas. It runs under normal `npm test`.
- [run-all.sh](D:/Personal/Projects/codegraph/scripts/agent-eval/run-all.sh) runs with/without CodeGraph MCP against an indexed repo and question. It captures Claude stream-json logs and measures tool sequence, reads/greps/bash/subagents, turns, duration, tokens, and cost via parsers such as [parse-run.mjs](D:/Personal/Projects/codegraph/scripts/agent-eval/parse-run.mjs).
- [bench-readme.sh](D:/Personal/Projects/codegraph/scripts/agent-eval/bench-readme.sh) reruns the 7-repo README benchmark; [parse-bench-readme.mjs](D:/Personal/Projects/codegraph/scripts/agent-eval/parse-bench-readme.mjs) aggregates medians for time, tool calls, tokens, and cost.
- [probe-sweep.mjs](D:/Personal/Projects/codegraph/scripts/agent-eval/probe-sweep.mjs), [probe-context.mjs](D:/Personal/Projects/codegraph/scripts/agent-eval/probe-context.mjs), [probe-explore.mjs](D:/Personal/Projects/codegraph/scripts/agent-eval/probe-explore.mjs), and [probe-trace.mjs](D:/Personal/Projects/codegraph/scripts/agent-eval/probe-trace.mjs) provide faster direct MCP/backend probes using built `dist/`.
- [bench.sh](D:/Personal/Projects/codegraph/scripts/add-lang/bench.sh) is an add-language benchmark: clone/reuse repo, wipe/index, verify extraction, then run retrieval A/B.
- Benchmark docs exist in [docs/benchmarks](D:/Personal/Projects/codegraph/docs/benchmarks): A/B matrix, call-sequence analysis, and direct-vs-Explore-agent analysis. README also has “Full benchmark details”.
- `.github` search found no eval/benchmark/perf workflow wiring; these appear manual.

Recommended next steps:
- For ordinary changes: run `npm test`; include `__tests__/db-perf.test.ts` as the DB/query regression guard.
- For retrieval/search/context changes: run `npm run build`, index a representative codebase, then run `npm run eval -- <codebase>` or `EVAL_CODEBASE=<codebase> npm run eval`; compare pass count, recall, MRR, edge density, and latency.
- For MCP/tool-output changes: run direct probes first, e.g. `node scripts/agent-eval/probe-sweep.mjs --tool=context`, then run focused `bash scripts/agent-eval/run-all.sh <repo> "<question>" headless`.
- For README-level claims: run `bash scripts/agent-eval/bench-readme.sh` and `node scripts/agent-eval/parse-bench-readme.mjs`; use medians because agent runs are noisy.
- For extractor/resolver/new-language changes: reindex affected repos, run `scripts/add-lang/verify-extraction.mjs`, targeted `probe-trace`/`probe-explore`, then `scripts/add-lang/bench.sh` if extraction passes.
```

### codegraph / repo-benchmark-analysis / tokenopt-mcp-instructed

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`49755`, cached=`21120`, output=`1241`, reasoning=`646`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-uMg6sw\repo-benchmark-analysis-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as investigate; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\codegraph, task=<verbatim user request>, task_type=investigate, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Benchmark/evaluation material exists. The repo exposes `eval` and `test:eval` npm scripts in [package.json](D:/Personal/Projects/codegraph/package.json), and has evaluation/performance-related docs including [docs/SEARCH_QUALITY_LOOP.md](D:/Personal/Projects/codegraph/docs/SEARCH_QUALITY_LOOP.md). I did not modify files.

Evidence:
The TokenOpt evidence packet found npm scripts: `build`, `clean`, `cli`, `copy-assets`, `dev`, `eval`, `preuninstall`, `test`, `test:eval`, `test:watch`.

The repo README describes CodeGraph with performance/cost claims: `~16% cheaper`, `~58% fewer tool calls`, and `100% local`.

How to run the discovered material:
```powershell
npm run eval
npm run test:eval
```

What it appears to measure:
The available evidence indicates evaluation/search-quality validation and performance or cost/tool-call efficiency, especially around CodeGraph’s local repository context behavior. The exact metrics and datasets are likely documented in `docs/SEARCH_QUALITY_LOOP.md` and implemented behind the `eval` / `test:eval` scripts.

Recommended next steps:
Include `npm run test:eval` in future validation plans for changes affecting search, context assembly, graph extraction, ranking, or MCP behavior. Use `npm run eval` for broader/manual evaluation before releases or larger behavior changes. Track the README-level claims, especially cost and tool-call reduction, as regression-sensitive metrics.
```

### tokenopt / repo-benchmark-analysis / baseline

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `27`, mcp_calls: `0`, shell_calls: `27`, answerable: `0`, fallback: `0`
- tokens: input=`259011`, cached=`172544`, output=`6243`, reasoning=`3249`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-Xaun5l\repo-benchmark-analysis-baseline.jsonl`

User prompt:
```text
If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
Yes. The repository contains benchmark/evaluation runners and docs, but I found no separate application performance, profiling, load, or throughput benchmark script. The benchmark material is focused on TokenOpt context acquisition, Codex/MCP behavior, token/tool usage, answer quality, and gating behavior.

Main runners:
- `benchmark daily`: deterministic acquisition benchmark.
- `benchmark codex-daily`: real `codex exec --json` benchmark.
- `benchmark suite`: configurable Codex suite benchmark using an external suite JSON.

Run after build:
```powershell
npm run build
node dist\cli.js benchmark daily --repo <path> --task all --mode all --out benchmark-results\daily.json
node dist\cli.js benchmark codex-daily --repo <path> --task realistic --mode all --out benchmark-results\codex.json
node dist\cli.js benchmark suite --suite <suite.json> --repo <path> --mode baseline,mcp-first,router-best --out benchmark-results\suite.json --markdown benchmark-results\suite.md
```

Evidence:
- Docs: [README.md](D:/Personal/Projects/tokenopt/README.md:100) documents benchmark commands, modes, task sets, and metrics. [SETUP.md](D:/Personal/Projects/tokenopt/SETUP.md:159) repeats deterministic and real Codex benchmark usage plus recorded metrics.
- CLI routing: [src/cli.ts](D:/Personal/Projects/tokenopt/src/cli.ts:109) dispatches `benchmark suite`, `benchmark codex-daily`, and `benchmark daily`.
- Deterministic runner: [src/benchmark.ts](D:/Personal/Projects/tokenopt/src/benchmark.ts:10) defines modes `baseline`, `compiled-packet`, `compiled-packet+gate`, `oracle-packet`; tasks `build-handoff`, `investigate`, `research-business`, `implement`, `write-unittest`; metrics include quality score/checks, tool/MCP/shell calls, estimated tokens, and `fallbackAfterAnswerable`.
- Codex runner: [src/codex-benchmark.ts](D:/Personal/Projects/tokenopt/src/codex-benchmark.ts:6) defines Codex modes; [src/codex-benchmark.ts](D:/Personal/Projects/tokenopt/src/codex-benchmark.ts:328) runs `npx.cmd -y @openai/codex@0.137.0 exec --json`; [src/codex-benchmark.ts](D:/Personal/Projects/tokenopt/src/codex-benchmark.ts:427) parses usage, tool calls, MCP calls, shell calls, answerable packets, fallback after answerable, and warnings.
- Suite runner: [src/suite-benchmark.ts](D:/Personal/Projects/tokenopt/src/suite-benchmark.ts:6) defines suite modes; [src/suite-benchmark.ts](D:/Personal/Projects/tokenopt/src/suite-benchmark.ts:15) expects suite tasks with expected files/symbols/terms and quality rubrics; [src/suite-benchmark.ts](D:/Personal/Projects/tokenopt/src/suite-benchmark.ts:721) generates markdown summary/aggregate reports.
- Local generated artifacts exist under ignored `benchmark-results/`, including JSON, markdown, stdout/stderr, and raw JSONL logs. The directory is ignored in [.gitignore](D:/Personal/Projects/tokenopt/.gitignore:4), so these are local outputs rather than source material.

Recommended next steps:
- For TokenOpt acquisition or MCP changes, run `benchmark daily` against representative repos and require no quality regression, stable or lower estimated tokens/tool output, and zero `fallbackAfterAnswerable` in gate modes.
- For Codex integration/instruction changes, run `benchmark codex-daily` with `baseline`, `tokenopt-mcp`, `tokenopt-mcp-instructed`, and `tokenopt-mcp+gate`; compare actual token usage, duration, tool/MCP/shell calls, answer quality, and raw JSONL on failures.
- For broader routing changes, keep an explicit suite JSON under version control and run `benchmark suite` with `baseline,mcp-first,router-best`; save both `--out` JSON and `--markdown` reports for review.
- Pair benchmark validation with `npm test` so behavioral tests and benchmark quality/token signals are both checked.
```

### tokenopt / repo-benchmark-analysis / tokenopt-mcp-instructed

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `1.000 (8/8)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`51258`, cached=`34432`, output=`1243`, reasoning=`665`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-hhHETB\repo-benchmark-analysis-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as investigate; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\tokenopt, task=<verbatim user request>, task_type=investigate, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
This repository does contain benchmark-related material, but TokenOpt’s evidence packet did not surface a dedicated `npm run benchmark` script or standalone benchmark docs.

The identified benchmark artifacts are:
`src/benchmark.ts`, `src/codex-benchmark.ts`, and `src/suite-benchmark.ts`.

Evidence:
`package.json` exposes only these npm scripts: `build`, `doctor`, and `test`. No benchmark/evaluation/performance script was identified.

The repo is `@tokenopt/cli`, described in `README.md` as a “context-budget middleware for coding agents,” with V1 being Codex-first. The benchmark filenames indicate coverage for generic benchmarking, Codex-specific benchmarking, and suite-level benchmarking.

No test directory was detected in the evidence packet, though `npm test` exists as a package script.

Recommended next steps:
For future validation plans, include:

1. `npm run build` to catch TypeScript/build regressions.
2. `npm test` as the normal automated validation hook.
3. `npm run doctor` for CLI/environment sanity checks.
4. A benchmark validation step around `src/benchmark.ts`, `src/codex-benchmark.ts`, and `src/suite-benchmark.ts`, once their invocation path is confirmed or exposed through a package script.

If benchmark behavior is important for future changes, add a documented script such as `npm run benchmark` and define expected metrics, likely around context budget usage, compression/evidence quality, and Codex-specific workflow performance.
```

### headroom / repo-benchmark-analysis / baseline

- task_type: `investigate`
- correct: `no`, exit: `null`, quality: `0.125 (1/8)`
- tool_calls: `68`, mcp_calls: `0`, shell_calls: `68`, answerable: `0`, fallback: `0`
- tokens: input=`0`, cached=`0`, output=`0`, reasoning=`0`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-T2dCyY\repo-benchmark-analysis-baseline.jsonl`

User prompt:
```text
If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
The tests include both true evals and harness smoke tests. Some require live API keys and are skipped without them; the local benchmark harness has a normal pytest smoke test to keep its basic tradeoff assertions from drifting.
```

### headroom / repo-benchmark-analysis / tokenopt-mcp-instructed

- task_type: `investigate`
- correct: `no`, exit: `null`, quality: `0.000 (0/8)`
- tool_calls: `12`, mcp_calls: `12`, shell_calls: `0`, answerable: `0`, fallback: `0`
- tokens: input=`0`, cached=`0`, output=`0`, reasoning=`0`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-D1HXBp\repo-benchmark-analysis-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as investigate; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\headroom, task=<verbatim user request>, task_type=investigate, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
TokenOpt confirms stdout is artifact-only in this session. I’m checking whether those artifacts are exposed as MCP resources; if not, I’ll report the bounded evidence and the exact gap rather than inventing details.
```

### caveman / repo-benchmark-analysis / baseline

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `0.875 (7/8)`
- tool_calls: `34`, mcp_calls: `0`, shell_calls: `34`, answerable: `0`, fallback: `0`
- tokens: input=`243622`, cached=`177792`, output=`5349`, reasoning=`2100`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-TARtGL\repo-benchmark-analysis-baseline.jsonl`

User prompt:
```text
If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files.
```

Injected instruction:
```text
Use normal Codex CLI tools if needed. Keep shell/search calls minimal, but gather enough evidence for a correct answer.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
This repo does contain benchmark/eval material. Main pieces: `benchmarks/run.py` for real Claude API token benchmarks, `evals/` for three-arm skill evals, and `skills/caveman-compress/scripts/benchmark.py` for compression fixture token savings plus validation. No files were modified.

Evidence:
- [README.md](D:/Personal/Projects/caveman/README.md:130): benchmark table claims 65% average output reduction across 10 prompts; [README.md](D:/Personal/Projects/caveman/README.md:150) links `benchmarks/` and `evals/`.
- [benchmarks/run.py](D:/Personal/Projects/caveman/benchmarks/run.py:240): run with `uv run python benchmarks/run.py`; options include `--trials`, `--dry-run`, `--update-readme`, `--model`. Needs Anthropic API via `.env.local`. Measures Claude API `input_tokens`/`output_tokens`, median normal vs caveman output tokens, savings %, average/min/max, and can save JSON to `benchmarks/results/benchmark_*.json`. Current `benchmarks/results/` contains only `.gitkeep`, no committed result JSON.
- [evals/README.md](D:/Personal/Projects/caveman/evals/README.md:7): eval arms are `__baseline__`, `__terse__`, and `<skill>`; honest delta is skill vs `Answer concisely.` control. Run `uv run python evals/llm_run.py` to refresh snapshot, then `uv run --with tiktoken python evals/measure.py` to print token deltas.
- [evals/snapshots/results.json](D:/Personal/Projects/caveman/evals/snapshots/results.json): committed snapshot exists: generated `2026-04-08`, model `claude-opus-4-6`, 10 prompts, arms `__baseline__`, `__terse__`, `caveman`, `caveman-cn`, `caveman-es`, `compress`.
- [evals/plot.py](D:/Personal/Projects/caveman/evals/plot.py:6): optional plot output to `evals/snapshots/results.html` and `.png`.
- [skills/caveman-compress/scripts/benchmark.py](D:/Personal/Projects/caveman/skills/caveman-compress/scripts/benchmark.py:25): measures original vs compressed token counts, saved %, and validation status. Run direct pair with `python3 benchmark.py original.md compressed.md`, or no args to scan `tests/caveman-compress`.
- [CONTRIBUTING.md](D:/Personal/Projects/caveman/CONTRIBUTING.md:139): documents benchmark/eval commands and says snapshots should only regenerate when `SKILL.md` or `evals/prompts/en.txt` changes.

Recommended next steps:
- For skill wording changes: run normal tests, then `uv run --with tiktoken python evals/measure.py`; regenerate with `uv run python evals/llm_run.py` only if a `SKILL.md` or eval prompt changed.
- For benchmark table changes: run `uv run python benchmarks/run.py --dry-run` first, then real run with API key; use `--update-readme` only when intentionally refreshing README numbers.
- For compression changes: run Python safety tests plus `python skills/caveman-compress/scripts/benchmark.py` to confirm savings and validation still pass.
- Add a validation checklist note that README benchmark claims should not be updated unless raw benchmark JSON is also saved or otherwise attached, since current repo lacks committed benchmark result JSON.
```

### caveman / repo-benchmark-analysis / tokenopt-mcp-instructed

- task_type: `investigate`
- correct: `yes`, exit: `0`, quality: `0.875 (7/8)`
- tool_calls: `1`, mcp_calls: `1`, shell_calls: `0`, answerable: `1`, fallback: `0`
- tokens: input=`48427`, cached=`19584`, output=`1265`, reasoning=`689`
- raw_log: `C:\Users\SonCao\AppData\Local\Temp\tokenopt-codex-benchmark-LcQVgo\repo-benchmark-analysis-tokenopt-mcp-instructed.jsonl`

User prompt:
```text
If this repository contains benchmark, evaluation, or performance documentation/scripts, identify what exists, how it is run, what it measures, and how to include it in a validation plan for future changes. If there is no benchmark material, say so. Do not modify files.
```

Injected instruction:
```text
Project instruction injected by TokenOpt setup:
The user may ask naturally and does not need to name MCP tools.
When TokenOpt MCP tools are available, use tokenopt_compile_evidence as the first context acquisition path for repository investigation, requirement/PBI planning, implementation handoff, and unit-test handoff tasks.
Infer the task_type from the natural-language user request.
For this request, the benchmark oracle classifies the task_type as investigate; call tokenopt_compile_evidence with cwd=D:\Personal\Projects\caveman, task=<verbatim user request>, task_type=investigate, budget_tokens around 1800, and a concrete quality_rubric.
If tokenopt_compile_evidence returns answerable=true, answer from the packet and do not call shell/search/read tools just to verify the same evidence.
If missing is non-empty, use only allowed_followups from the packet.
Return a concise final answer with these headings exactly:
Summary:
Evidence:
Recommended next steps:
Do not modify files.
```

Final output:
```text
Summary:
This repo does contain evaluation/benchmark-related material. TokenOpt found an `evals/` directory with 6 files and a `benchmarks/requirements.txt` file. The only root package script identified is `npm test`; no explicit root `benchmark`, `eval`, or `perf` npm script was reported.

Evidence:
- `evals/README.md`: evaluation documentation exists.
- `benchmarks/requirements.txt`: benchmark-related Python dependencies exist.
- `package.json`: project is npm-based, package `caveman-installer@0.1.0`, with an npm `test` script.
- Inventory summary: `evals:6` files; important sample includes `evals/README.md` and `benchmarks/requirements.txt`.

How it is run / what it measures:
- Tests: run through the root `npm test` script. The packet does not expose the exact command body or test scope.
- Evaluations: likely documented under `evals/README.md`, but the evidence packet did not include its contents.
- Benchmarks: `benchmarks/requirements.txt` indicates Python-based benchmark dependencies, but no benchmark runner command or measured metrics were exposed in the packet.

Recommended next steps:
For future validation, include `npm test` as the baseline automated check. Also treat `evals/README.md` and `benchmarks/requirements.txt` as validation assets to inspect before larger behavioral or performance-sensitive changes, then add the documented eval/benchmark commands to the change checklist once their exact runner and metrics are confirmed. No files were modified.
```
