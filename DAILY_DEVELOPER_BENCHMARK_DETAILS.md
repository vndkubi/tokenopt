# Daily Developer Benchmark Details

Source: `benchmark-results/developer-daily-playbook-2026-06-14.json`
Generated from run: `2026-06-14T02:06:53.581Z`
Modes: `baseline`, `mcp-only`, `codegraph-only`, `tokenopt-codegraph-hybrid`

Note: rows with `0` input/output usually timed out before Codex emitted usage accounting; compare quality/tool calls, not token burn, for those rows.

## Per-Prompt Summary

### hadoop / hadoop-yarn-app-filter-requirement-analysis

Class: `requirement_analysis`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | yes | 1.000 (16/16) | 0.625 (5/8) | 793299 | 653696 | 8338 | 3183 | 804820 | 151124 |  |  | 26 | 0 | 26 | 0 | yes | 231818 |
| mcp-only | no | 0.563 (9/16) | 0.625 (5/8) | 124205 | 80128 | 5485 | 3918 | 133608 | 53480 | -84.3% | -34.2% | 4 | 4 | 0 | 7 | yes | 156104 |
| codegraph-only | no | 0.375 (6/16) | 0.375 (3/8) | 79716 | 44032 | 2463 | 1751 | 83930 | 39898 | -90.0% | -70.5% | 2 | 2 | 0 | 10 | yes | 105988 |
| tokenopt-codegraph-hybrid | yes | 0.938 (15/16) | 0.625 (5/8) | 241752 | 172544 | 10146 | 7436 | 259334 | 86790 | -69.5% | +21.7% | 5 | 2 | 3 | 1 | yes | 272694 |

Best quality: `baseline` (1.000).
Lowest nonzero input: `codegraph-only` (79716).
Cheapest correct by input: `tokenopt-codegraph-hybrid` (241752).

### elasticsearch / elasticsearch-search-investigate-flow

Class: `investigate_flow`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | no | 0.000 (0/15) | 0.000 (0/8) | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 50 | 0 | 50 | 14 | no | 300007 |
| mcp-only | no | 0.600 (9/15) | 0.875 (7/8) | 233828 | 163200 | 5697 | 3818 | 243343 | 80143 | n/a | n/a | 7 | 7 | 0 | 6 | yes | 174010 |
| codegraph-only | no | 0.267 (4/15) | 0.375 (3/8) | 89041 | 44544 | 1629 | 1195 | 91865 | 47321 | n/a | n/a | 2 | 2 | 0 | 11 | yes | 85844 |
| tokenopt-codegraph-hybrid | yes | 0.800 (12/15) | 0.875 (7/8) | 337547 | 279424 | 8805 | 6536 | 352888 | 73464 | n/a | n/a | 6 | 3 | 3 | 3 | yes | 269609 |

Best quality: `tokenopt-codegraph-hybrid` (0.800).
Lowest nonzero input: `codegraph-only` (89041).
Cheapest correct by input: `tokenopt-codegraph-hybrid` (337547).

### elasticsearch / elasticsearch-search-prefilter-refactor-plan

Class: `refactor_code`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | no | 0.000 (0/15) | 0.000 (0/8) | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 59 | 0 | 59 | 14 | no | 300007 |
| mcp-only | no | 0.600 (9/15) | 0.875 (7/8) | 298530 | 221824 | 9865 | 7717 | 316112 | 94288 | n/a | n/a | 8 | 8 | 0 | 6 | yes | 268236 |
| codegraph-only | no | 0.467 (7/15) | 0.750 (6/8) | 88492 | 65024 | 3288 | 2075 | 93855 | 28831 | n/a | n/a | 2 | 2 | 0 | 8 | yes | 122852 |
| tokenopt-codegraph-hybrid | yes | 0.867 (13/15) | 0.875 (7/8) | 247908 | 180736 | 9662 | 6793 | 264363 | 83627 | n/a | n/a | 5 | 2 | 3 | 2 | yes | 256886 |

Best quality: `tokenopt-codegraph-hybrid` (0.867).
Lowest nonzero input: `codegraph-only` (88492).
Cheapest correct by input: `tokenopt-codegraph-hybrid` (247908).

### doughnut / doughnut-recall-business-deepdive

Class: `business_deepdive`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | no | 0.045 (1/22) | 0.000 (0/8) | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 74 | 0 | 74 | 20 | no | 300016 |
| mcp-only | no | 0.091 (2/22) | 0.500 (4/8) | 219809 | 174848 | 3764 | 2229 | 225802 | 50954 | n/a | n/a | 8 | 8 | 0 | 20 | yes | 121945 |
| codegraph-only | no | 0.045 (1/22) | 0.375 (3/8) | 81736 | 59392 | 1699 | 1110 | 84545 | 25153 | n/a | n/a | 2 | 2 | 0 | 21 | yes | 89759 |
| tokenopt-codegraph-hybrid | no | 0.727 (16/22) | 0.750 (6/8) | 200491 | 160896 | 7451 | 5140 | 213082 | 52186 | n/a | n/a | 5 | 2 | 3 | 6 | yes | 209651 |

Best quality: `tokenopt-codegraph-hybrid` (0.727).
Lowest nonzero input: `codegraph-only` (81736).
Cheapest correct by input: none.

### doughnut / doughnut-recall-forecast-pbi-investigate

Class: `pbi_investigate`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | no | 0.000 (0/18) | 0.000 (0/8) | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 57 | 0 | 57 | 17 | no | 300015 |
| mcp-only | no | 0.222 (4/18) | 0.625 (5/8) | 134137 | 89344 | 2975 | 1455 | 138567 | 49223 | n/a | n/a | 3 | 3 | 0 | 14 | yes | 90902 |
| codegraph-only | no | 0.222 (4/18) | 0.625 (5/8) | 82228 | 24064 | 2748 | 1667 | 86643 | 62579 | n/a | n/a | 2 | 2 | 0 | 14 | yes | 105141 |
| tokenopt-codegraph-hybrid | no | 0.722 (13/18) | 0.875 (7/8) | 234207 | 189952 | 10680 | 7844 | 252731 | 62779 | n/a | n/a | 5 | 2 | 3 | 5 | yes | 267686 |

Best quality: `tokenopt-codegraph-hybrid` (0.722).
Lowest nonzero input: `codegraph-only` (82228).
Cheapest correct by input: none.

### doughnut / doughnut-recall-wrong-answer-bug-trace

Class: `bug_trace`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | no | 0.000 (0/16) | 0.000 (0/8) | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 55 | 0 | 55 | 15 | no | 300014 |
| mcp-only | no | 0.125 (2/16) | 0.375 (3/8) | 52938 | 21120 | 1450 | 773 | 55161 | 34041 | n/a | n/a | 1 | 1 | 0 | 14 | yes | 50438 |
| codegraph-only | no | 0.188 (3/16) | 0.375 (3/8) | 78867 | 70656 | 1945 | 1310 | 82122 | 11466 | n/a | n/a | 2 | 2 | 0 | 13 | yes | 94581 |
| tokenopt-codegraph-hybrid | no | 0.688 (11/16) | 0.875 (7/8) | 188410 | 122496 | 6083 | 3926 | 198419 | 75923 | n/a | n/a | 5 | 2 | 3 | 5 | yes | 184981 |

Best quality: `tokenopt-codegraph-hybrid` (0.688).
Lowest nonzero input: `mcp-only` (52938).
Cheapest correct by input: none.

### doughnut / doughnut-recall-forecast-plan-implement

Class: `plan_implement`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | no | 0.000 (0/18) | 0.000 (0/8) | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 56 | 0 | 56 | 17 | no | 300021 |
| mcp-only | no | 0.389 (7/18) | 1.000 (8/8) | 545490 | 475648 | 8651 | 5622 | 559763 | 84115 | n/a | n/a | 17 | 17 | 0 | 11 | yes | 268392 |
| codegraph-only | no | 0.167 (3/18) | 0.625 (5/8) | 78316 | 57344 | 2270 | 1255 | 81841 | 24497 | n/a | n/a | 2 | 2 | 0 | 15 | yes | 97537 |
| tokenopt-codegraph-hybrid | yes | 0.889 (16/18) | 1.000 (8/8) | 226491 | 150528 | 7130 | 4476 | 238097 | 87569 | n/a | n/a | 5 | 2 | 3 | 2 | yes | 206917 |

Best quality: `tokenopt-codegraph-hybrid` (0.889).
Lowest nonzero input: `codegraph-only` (78316).
Cheapest correct by input: `tokenopt-codegraph-hybrid` (226491).

### doughnut / doughnut-recall-forecast-implement-code-unittest

Class: `implement_code_unittest`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | no | 0.105 (2/19) | 0.000 (0/8) | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 52 | 0 | 52 | 16 | no | 300009 |
| mcp-only | no | 0.000 (0/19) | 0.000 (0/8) | 0 | 0 | 0 | 0 | 0 | 0 | n/a | n/a | 23 | 23 | 0 | 18 | no | 300013 |
| codegraph-only | no | 0.158 (3/19) | 0.250 (2/8) | 78298 | 57856 | 1836 | 1157 | 81291 | 23435 | n/a | n/a | 2 | 2 | 0 | 16 | yes | 98817 |
| tokenopt-codegraph-hybrid | no | 0.789 (15/19) | 0.875 (7/8) | 296820 | 232320 | 9271 | 6433 | 312524 | 80204 | n/a | n/a | 6 | 3 | 3 | 4 | yes | 252311 |

Best quality: `tokenopt-codegraph-hybrid` (0.789).
Lowest nonzero input: `codegraph-only` (78298).
Cheapest correct by input: none.

### doughnut / doughnut-recall-scheduling-code-review

Class: `code_review`

| Mode | Correct | Quality | Idea | Input | Cached | Output | Reasoning | Raw total | Fresh total | Input vs baseline | Output vs baseline | Tool | MCP | Shell | Critical misses | JSON | Duration ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| baseline | yes | 0.909 (10/11) | 1.000 (8/8) | 313409 | 232832 | 6257 | 2774 | 322440 | 89608 |  |  | 28 | 0 | 28 | 1 | yes | 166699 |
| mcp-only | yes | 0.909 (10/11) | 1.000 (8/8) | 56546 | 35968 | 2660 | 1449 | 60655 | 24687 | -82.0% | -57.5% | 1 | 1 | 0 | 1 | yes | 71829 |
| codegraph-only | yes | 1.000 (11/11) | 1.000 (8/8) | 105875 | 82304 | 2525 | 1672 | 110072 | 27768 | -66.2% | -59.6% | 3 | 3 | 0 | 0 | yes | 106963 |
| tokenopt-codegraph-hybrid | yes | 1.000 (11/11) | 1.000 (8/8) | 325282 | 278272 | 10864 | 8209 | 344355 | 66083 | +3.8% | +73.6% | 7 | 4 | 3 | 0 | yes | 298093 |

Best quality: `codegraph-only` (1.000).
Lowest nonzero input: `mcp-only` (56546).
Cheapest correct by input: `mcp-only` (56546).

## Aggregate By Mode

| Mode | Runs | Correct | Avg quality | Avg idea | Avg input | Avg output | Avg raw total | Avg fresh total | Avg tool | Avg MCP | Avg shell |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| baseline | 9 | 2/9 | 0.229 | 0.181 | 122968 | 1622 | 125251 | 26748 | 50.778 | 0.000 | 50.778 |
| mcp-only | 9 | 1/9 | 0.389 | 0.653 | 185054 | 4505 | 192557 | 52326 | 8.000 | 8.000 | 0.000 |
| codegraph-only | 9 | 1/9 | 0.321 | 0.528 | 84730 | 2267 | 88463 | 32328 | 2.111 | 2.111 | 0.000 |
| tokenopt-codegraph-hybrid | 9 | 5/9 | 0.824 | 0.861 | 255434 | 8899 | 270644 | 74292 | 5.444 | 2.444 | 3.000 |

## Raw Output Locations

| Prompt | Mode | Raw log | Last answer |
| --- | --- | --- | --- |
| hadoop-yarn-app-filter-requirement-analysis | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-baseline-last.txt` |
| hadoop-yarn-app-filter-requirement-analysis | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-mcp-only-last.txt` |
| hadoop-yarn-app-filter-requirement-analysis | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-codegraph-only-last.txt` |
| hadoop-yarn-app-filter-requirement-analysis | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-tokenopt-codegraph-hybrid-last.txt` |
| elasticsearch-search-investigate-flow | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-baseline-last.txt` |
| elasticsearch-search-investigate-flow | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-mcp-only-last.txt` |
| elasticsearch-search-investigate-flow | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-codegraph-only-last.txt` |
| elasticsearch-search-investigate-flow | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-tokenopt-codegraph-hybrid-last.txt` |
| elasticsearch-search-prefilter-refactor-plan | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-baseline-last.txt` |
| elasticsearch-search-prefilter-refactor-plan | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-mcp-only-last.txt` |
| elasticsearch-search-prefilter-refactor-plan | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-codegraph-only-last.txt` |
| elasticsearch-search-prefilter-refactor-plan | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-tokenopt-codegraph-hybrid-last.txt` |
| doughnut-recall-business-deepdive | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-baseline-last.txt` |
| doughnut-recall-business-deepdive | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-mcp-only-last.txt` |
| doughnut-recall-business-deepdive | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-codegraph-only-last.txt` |
| doughnut-recall-business-deepdive | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-tokenopt-codegraph-hybrid-last.txt` |
| doughnut-recall-forecast-pbi-investigate | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-baseline-last.txt` |
| doughnut-recall-forecast-pbi-investigate | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-mcp-only-last.txt` |
| doughnut-recall-forecast-pbi-investigate | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-codegraph-only-last.txt` |
| doughnut-recall-forecast-pbi-investigate | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-tokenopt-codegraph-hybrid-last.txt` |
| doughnut-recall-wrong-answer-bug-trace | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-baseline-last.txt` |
| doughnut-recall-wrong-answer-bug-trace | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-mcp-only-last.txt` |
| doughnut-recall-wrong-answer-bug-trace | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-codegraph-only-last.txt` |
| doughnut-recall-wrong-answer-bug-trace | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-tokenopt-codegraph-hybrid-last.txt` |
| doughnut-recall-forecast-plan-implement | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-baseline-last.txt` |
| doughnut-recall-forecast-plan-implement | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-mcp-only-last.txt` |
| doughnut-recall-forecast-plan-implement | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-codegraph-only-last.txt` |
| doughnut-recall-forecast-plan-implement | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-tokenopt-codegraph-hybrid-last.txt` |
| doughnut-recall-forecast-implement-code-unittest | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-baseline-last.txt` |
| doughnut-recall-forecast-implement-code-unittest | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-mcp-only-last.txt` |
| doughnut-recall-forecast-implement-code-unittest | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-codegraph-only-last.txt` |
| doughnut-recall-forecast-implement-code-unittest | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-tokenopt-codegraph-hybrid-last.txt` |
| doughnut-recall-scheduling-code-review | baseline | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-baseline.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-baseline-last.txt` |
| doughnut-recall-scheduling-code-review | mcp-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-mcp-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-mcp-only-last.txt` |
| doughnut-recall-scheduling-code-review | codegraph-only | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-codegraph-only.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-codegraph-only-last.txt` |
| doughnut-recall-scheduling-code-review | tokenopt-codegraph-hybrid | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-tokenopt-codegraph-hybrid.jsonl` | `D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-tokenopt-codegraph-hybrid-last.txt` |

## Full Answers

Full per-mode final answers are in `benchmark-results/developer-daily-playbook-2026-06-14.md` under `## Task Details`, and in the `lastMessagePath` files listed above.
