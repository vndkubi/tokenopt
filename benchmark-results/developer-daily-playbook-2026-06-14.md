# Context Governor Suite Benchmark

Generated: 2026-06-14T02:06:53.587Z
Suite: Developer Daily Playbook Suite 2026-06-14
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: baseline, mcp-only, codegraph-only, tokenopt-codegraph-hybrid
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | baseline | coding_coverage | coding_coverage | no | no | yes | 1.000 | 0.625 | 0 | yes | 793299 |  | 8338 | 26 | 0 | 26 | 577401 | 231818 |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.563 | 0.625 | 7 | yes | 124205 | 84.3% | 5485 | 4 | 4 | 0 | 40295 | 156104 |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.375 | 0.375 | 10 | yes | 79716 | 90.0% | 2463 | 2 | 2 | 0 | 13374 | 105988 |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | yes | 0.938 | 0.625 | 1 | yes | 241752 | 69.5% | 10146 | 5 | 2 | 3 | 1103547 | 272694 |
| elasticsearch | elasticsearch-search-investigate-flow | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 14 | no | 0 |  | 0 | 50 | 0 | 50 | 658015 | 300007 |
| elasticsearch | elasticsearch-search-investigate-flow | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.600 | 0.875 | 6 | yes | 233828 |  | 5697 | 7 | 7 | 0 | 70421 | 174010 |
| elasticsearch | elasticsearch-search-investigate-flow | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.267 | 0.375 | 11 | yes | 89041 |  | 1629 | 2 | 2 | 0 | 13358 | 85844 |
| elasticsearch | elasticsearch-search-investigate-flow | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | yes | 0.800 | 0.875 | 3 | yes | 337547 |  | 8805 | 6 | 3 | 3 | 1145976 | 269609 |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 14 | no | 0 |  | 0 | 59 | 0 | 59 | 676527 | 300007 |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.600 | 0.875 | 6 | yes | 298530 |  | 9865 | 8 | 8 | 0 | 65882 | 268236 |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.467 | 0.750 | 8 | yes | 88492 |  | 3288 | 2 | 2 | 0 | 13342 | 122852 |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | yes | 0.867 | 0.875 | 2 | yes | 247908 |  | 9662 | 5 | 2 | 3 | 1091926 | 256886 |
| doughnut | doughnut-recall-business-deepdive | baseline | coding_coverage | coding_coverage | no | no | no | 0.045 | 0.000 | 20 | no | 0 |  | 0 | 74 | 0 | 74 | 734618 | 300016 |
| doughnut | doughnut-recall-business-deepdive | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.091 | 0.500 | 20 | yes | 219809 |  | 3764 | 8 | 8 | 0 | 53082 | 121945 |
| doughnut | doughnut-recall-business-deepdive | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.045 | 0.375 | 21 | yes | 81736 |  | 1699 | 2 | 2 | 0 | 13326 | 89759 |
| doughnut | doughnut-recall-business-deepdive | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | no | 0.727 | 0.750 | 6 | yes | 200491 |  | 7451 | 5 | 2 | 3 | 267726 | 209651 |
| doughnut | doughnut-recall-forecast-pbi-investigate | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 17 | no | 0 |  | 0 | 57 | 0 | 57 | 597359 | 300015 |
| doughnut | doughnut-recall-forecast-pbi-investigate | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.222 | 0.625 | 14 | yes | 134137 |  | 2975 | 3 | 3 | 0 | 33166 | 90902 |
| doughnut | doughnut-recall-forecast-pbi-investigate | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.222 | 0.625 | 14 | yes | 82228 |  | 2748 | 2 | 2 | 0 | 13310 | 105141 |
| doughnut | doughnut-recall-forecast-pbi-investigate | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | no | 0.722 | 0.875 | 5 | yes | 234207 |  | 10680 | 5 | 2 | 3 | 607425 | 267686 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | baseline | ask_or_bypass | artifact_sufficiency | no | yes | no | 0.000 | 0.000 | 15 | no | 0 |  | 0 | 55 | 0 | 55 | 668099 | 300014 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | mcp-only | ask_or_bypass | artifact_sufficiency | yes | no | no | 0.125 | 0.375 | 14 | yes | 52938 |  | 1450 | 1 | 1 | 0 | 11381 | 50438 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | codegraph-only | ask_or_bypass | artifact_sufficiency | no | yes | no | 0.188 | 0.375 | 13 | yes | 78867 |  | 1945 | 2 | 2 | 0 | 13294 | 94581 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | tokenopt-codegraph-hybrid | ask_or_bypass | artifact_sufficiency | yes | yes | no | 0.688 | 0.875 | 5 | yes | 188410 |  | 6083 | 5 | 2 | 3 | 221264 | 184981 |
| doughnut | doughnut-recall-forecast-plan-implement | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 17 | no | 0 |  | 0 | 56 | 0 | 56 | 653010 | 300021 |
| doughnut | doughnut-recall-forecast-plan-implement | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.389 | 1.000 | 11 | yes | 545490 |  | 8651 | 17 | 17 | 0 | 113184 | 268392 |
| doughnut | doughnut-recall-forecast-plan-implement | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.167 | 0.625 | 15 | yes | 78316 |  | 2270 | 2 | 2 | 0 | 13278 | 97537 |
| doughnut | doughnut-recall-forecast-plan-implement | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | yes | 0.889 | 1.000 | 2 | yes | 226491 |  | 7130 | 5 | 2 | 3 | 614072 | 206917 |
| doughnut | doughnut-recall-forecast-implement-code-unittest | baseline | coding_coverage | coding_coverage | no | no | no | 0.105 | 0.000 | 16 | no | 0 |  | 0 | 52 | 0 | 52 | 606441 | 300009 |
| doughnut | doughnut-recall-forecast-implement-code-unittest | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 18 | no | 0 |  | 0 | 23 | 23 | 0 | 102582 | 300013 |
| doughnut | doughnut-recall-forecast-implement-code-unittest | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.158 | 0.250 | 16 | yes | 78298 |  | 1836 | 2 | 2 | 0 | 13262 | 98817 |
| doughnut | doughnut-recall-forecast-implement-code-unittest | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | no | 0.789 | 0.875 | 4 | yes | 296820 |  | 9271 | 6 | 3 | 3 | 581366 | 252311 |
| doughnut | doughnut-recall-scheduling-code-review | baseline | review_bounded | review_coverage | no | no | yes | 0.909 | 1.000 | 1 | yes | 313409 |  | 6257 | 28 | 0 | 28 | 105392 | 166699 |
| doughnut | doughnut-recall-scheduling-code-review | mcp-only | review_bounded | review_coverage | no | no | yes | 0.909 | 1.000 | 1 | yes | 56546 | 82.0% | 2660 | 1 | 1 | 0 | 27358 | 71829 |
| doughnut | doughnut-recall-scheduling-code-review | codegraph-only | review_bounded | review_coverage | no | no | yes | 1.000 | 1.000 | 0 | yes | 105875 | 66.2% | 2525 | 3 | 3 | 0 | 19869 | 106963 |
| doughnut | doughnut-recall-scheduling-code-review | tokenopt-codegraph-hybrid | review_bounded | review_coverage | no | no | yes | 1.000 | 1.000 | 0 | yes | 325282 | -3.8% | 10864 | 7 | 4 | 3 | 309383 | 298093 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg quality | Avg idea | Avg critical miss |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| baseline | 9 | 2/9 | 1/9 | 0 | 122968 | 0.229 | 0.181 | 12.67 |
| mcp-only | 9 | 1/9 | 4/9 | 134137 | 185054 | 0.389 | 0.653 | 10.78 |
| codegraph-only | 9 | 1/9 | 2/9 | 81736 | 84730 | 0.321 | 0.528 | 12.00 |
| tokenopt-codegraph-hybrid | 9 | 5/9 | 8/9 | 241752 | 255434 | 0.824 | 0.861 | 3.11 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg quality | Avg idea | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| requirement_analysis | baseline | 1 | 1/1 | 0/1 | 793299 | 793299 | 8338 | 1.000 | 0.625 | 0.00 | 0.0 | 26.0 | 231818 |
| requirement_analysis | mcp-only | 1 | 0/1 | 0/1 | 124205 | 124205 | 5485 | 0.563 | 0.625 | 7.00 | 4.0 | 0.0 | 156104 |
| requirement_analysis | codegraph-only | 1 | 0/1 | 0/1 | 79716 | 79716 | 2463 | 0.375 | 0.375 | 10.00 | 2.0 | 0.0 | 105988 |
| requirement_analysis | tokenopt-codegraph-hybrid | 1 | 1/1 | 0/1 | 241752 | 241752 | 10146 | 0.938 | 0.625 | 1.00 | 2.0 | 3.0 | 272694 |
| investigate_flow | baseline | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0.000 | 0.000 | 14.00 | 0.0 | 50.0 | 300007 |
| investigate_flow | mcp-only | 1 | 0/1 | 1/1 | 233828 | 233828 | 5697 | 0.600 | 0.875 | 6.00 | 7.0 | 0.0 | 174010 |
| investigate_flow | codegraph-only | 1 | 0/1 | 0/1 | 89041 | 89041 | 1629 | 0.267 | 0.375 | 11.00 | 2.0 | 0.0 | 85844 |
| investigate_flow | tokenopt-codegraph-hybrid | 1 | 1/1 | 1/1 | 337547 | 337547 | 8805 | 0.800 | 0.875 | 3.00 | 3.0 | 3.0 | 269609 |
| refactor_code | baseline | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0.000 | 0.000 | 14.00 | 0.0 | 59.0 | 300007 |
| refactor_code | mcp-only | 1 | 0/1 | 1/1 | 298530 | 298530 | 9865 | 0.600 | 0.875 | 6.00 | 8.0 | 0.0 | 268236 |
| refactor_code | codegraph-only | 1 | 0/1 | 1/1 | 88492 | 88492 | 3288 | 0.467 | 0.750 | 8.00 | 2.0 | 0.0 | 122852 |
| refactor_code | tokenopt-codegraph-hybrid | 1 | 1/1 | 1/1 | 247908 | 247908 | 9662 | 0.867 | 0.875 | 2.00 | 2.0 | 3.0 | 256886 |
| business_deepdive | baseline | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0.045 | 0.000 | 20.00 | 0.0 | 74.0 | 300016 |
| business_deepdive | mcp-only | 1 | 0/1 | 0/1 | 219809 | 219809 | 3764 | 0.091 | 0.500 | 20.00 | 8.0 | 0.0 | 121945 |
| business_deepdive | codegraph-only | 1 | 0/1 | 0/1 | 81736 | 81736 | 1699 | 0.045 | 0.375 | 21.00 | 2.0 | 0.0 | 89759 |
| business_deepdive | tokenopt-codegraph-hybrid | 1 | 0/1 | 1/1 | 200491 | 200491 | 7451 | 0.727 | 0.750 | 6.00 | 2.0 | 3.0 | 209651 |
| pbi_investigate | baseline | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0.000 | 0.000 | 17.00 | 0.0 | 57.0 | 300015 |
| pbi_investigate | mcp-only | 1 | 0/1 | 0/1 | 134137 | 134137 | 2975 | 0.222 | 0.625 | 14.00 | 3.0 | 0.0 | 90902 |
| pbi_investigate | codegraph-only | 1 | 0/1 | 0/1 | 82228 | 82228 | 2748 | 0.222 | 0.625 | 14.00 | 2.0 | 0.0 | 105141 |
| pbi_investigate | tokenopt-codegraph-hybrid | 1 | 0/1 | 1/1 | 234207 | 234207 | 10680 | 0.722 | 0.875 | 5.00 | 2.0 | 3.0 | 267686 |
| bug_trace | baseline | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0.000 | 0.000 | 15.00 | 0.0 | 55.0 | 300014 |
| bug_trace | mcp-only | 1 | 0/1 | 0/1 | 52938 | 52938 | 1450 | 0.125 | 0.375 | 14.00 | 1.0 | 0.0 | 50438 |
| bug_trace | codegraph-only | 1 | 0/1 | 0/1 | 78867 | 78867 | 1945 | 0.188 | 0.375 | 13.00 | 2.0 | 0.0 | 94581 |
| bug_trace | tokenopt-codegraph-hybrid | 1 | 0/1 | 1/1 | 188410 | 188410 | 6083 | 0.688 | 0.875 | 5.00 | 2.0 | 3.0 | 184981 |
| plan_implement | baseline | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0.000 | 0.000 | 17.00 | 0.0 | 56.0 | 300021 |
| plan_implement | mcp-only | 1 | 0/1 | 1/1 | 545490 | 545490 | 8651 | 0.389 | 1.000 | 11.00 | 17.0 | 0.0 | 268392 |
| plan_implement | codegraph-only | 1 | 0/1 | 0/1 | 78316 | 78316 | 2270 | 0.167 | 0.625 | 15.00 | 2.0 | 0.0 | 97537 |
| plan_implement | tokenopt-codegraph-hybrid | 1 | 1/1 | 1/1 | 226491 | 226491 | 7130 | 0.889 | 1.000 | 2.00 | 2.0 | 3.0 | 206917 |
| implement_code_unittest | baseline | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0.105 | 0.000 | 16.00 | 0.0 | 52.0 | 300009 |
| implement_code_unittest | mcp-only | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0.000 | 0.000 | 18.00 | 23.0 | 0.0 | 300013 |
| implement_code_unittest | codegraph-only | 1 | 0/1 | 0/1 | 78298 | 78298 | 1836 | 0.158 | 0.250 | 16.00 | 2.0 | 0.0 | 98817 |
| implement_code_unittest | tokenopt-codegraph-hybrid | 1 | 0/1 | 1/1 | 296820 | 296820 | 9271 | 0.789 | 0.875 | 4.00 | 3.0 | 3.0 | 252311 |
| code_review | baseline | 1 | 1/1 | 1/1 | 313409 | 313409 | 6257 | 0.909 | 1.000 | 1.00 | 0.0 | 28.0 | 166699 |
| code_review | mcp-only | 1 | 1/1 | 1/1 | 56546 | 56546 | 2660 | 0.909 | 1.000 | 1.00 | 1.0 | 0.0 | 71829 |
| code_review | codegraph-only | 1 | 1/1 | 1/1 | 105875 | 105875 | 2525 | 1.000 | 1.000 | 0.00 | 3.0 | 0.0 | 106963 |
| code_review | tokenopt-codegraph-hybrid | 1 | 1/1 | 1/1 | 325282 | 325282 | 10864 | 1.000 | 1.000 | 0.00 | 4.0 | 3.0 | 298093 |

## Task Details

### hadoop / hadoop-yarn-app-filter-requirement-analysis

Class: requirement_analysis

Prompt:
```
Daily task: requirement analyst for YARN RM app filtering hardening. Requirement: applicationTypes and applicationTags query params should handle null, empty, comma-separated, whitespace-only, and mixed-case values consistently without breaking existing REST clients. Return valid compact JSON only with keys: requirement_summary, current_behavior, acceptance_criteria, impacted_files, symbols, test_strategy, risks, open_questions. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java",
    "hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java",
    "hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java",
    "hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java",
    "hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java"
  ],
  "symbols": [
    "RMWebServices",
    "ApplicationsRequestBuilder",
    "withApplicationTypes",
    "withApplicationTags",
    "parseQueries"
  ],
  "terms": [
    "applicationTypes",
    "applicationTags",
    "comma",
    "whitespace",
    "lowercase"
  ]
}
```

Quality rubric:
- Maps requirement cases to current parser/builder behavior.
- Separates appTypes and appTags compatibility risks.
- Names targeted unit and web-service test surfaces.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | baseline | coding_coverage | coding_coverage | no | no | yes | 1.000 | 0.625 | 0 | yes | 793299 |  | 8338 | 26 | 0 | 26 | 577401 | 231818 |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.563 | 0.625 | 7 | yes | 124205 | 84.3% | 5485 | 4 | 4 | 0 | 40295 | 156104 |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.375 | 0.375 | 10 | yes | 79716 | 90.0% | 2463 | 2 | 2 | 0 | 13374 | 105988 |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | yes | 0.938 | 0.625 | 1 | yes | 241752 | 69.5% | 10146 | 5 | 2 | 3 | 1103547 | 272694 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-baseline.jsonl

Codex prompt used:
```
Daily task: requirement analyst for YARN RM app filtering hardening. Requirement: applicationTypes and applicationTags query params should handle null, empty, comma-separated, whitespace-only, and mixed-case values consistently without breaking existing REST clients. Return valid compact JSON only with keys: requirement_summary, current_behavior, acceptance_criteria, impacted_files, symbols, test_strategy, risks, open_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\hadoop
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```json
{"requirement_summary":"Harden YARN RM `/ws/v1/cluster/apps` filtering so `applicationTypes` and `applicationTags` use the same null/empty/blank-token/comma-separated/mixed-case normalization, treating empty effective filters as no filter while preserving existing repeated-query and CSV REST behavior.","current_behavior":["REST docs define `applicationTypes` as comma-separated type filtering and `applicationTags` as matching any comma-separated tag: hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/ResourceManagerRest.md:4501-4502.","`RMWebServices#getApps` receives both params as `Set<String>` and copies them into the cache key before request building; direct null sets can fail there even though the builder handles null: hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:641-648.","`ApplicationsRequestBuilder#withApplicationTypes` and `#withApplicationTags` call `WebServices.parseQueries` only when the incoming set is non-null, and `build()` only sets request filters when normalized sets are non-empty: hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java:125-136,228-232.","`WebServices.parseQueries` ignores null/trim-empty query strings and blank comma tokens, trims nonblank tokens, lowercases them, and returns a set: hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java:426-454.","`ClientRMService#getApplications` treats empty/null type and tag sets as no filter; type matching is lowercased, and tags match if any requested tag exists on the app: hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java:876-881,921-964,1012-1020.","Existing tests cover many `applicationTypes` REST cases and builder null/empty/valid type/tag cases, but REST-level `applicationTags` edge-case coverage is missing: hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java:974-1178; hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java:509-557."],"acceptance_criteria":["Absent/null `applicationTypes` or `applicationTags` must not throw and must behave as no filter.","Empty strings, whitespace-only strings, comma-only strings, and blank tokens inside comma-separated values must be ignored for both params.","If all supplied values normalize away to an empty set, the response must match the no-filter response and preserve HTTP 200 behavior for existing REST clients.","Comma-separated values and repeated query parameters must be unioned with duplicates removed for both params.","Mixed-case values must match existing app types/tags case-insensitively after trim/lowercase normalization.","`applicationTags` must continue to match applications containing any requested tag, not require all tags.","Equivalent normalized requests must not change response semantics when app cache is enabled."],"impacted_files":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/api/protocolrecords/impl/pb/GetApplicationsRequestPBImpl.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/TestClientRMService.java"],"symbols":["RMWSConsts.APPLICATION_TYPES","RMWSConsts.APPLICATION_TAGS","RMWebServices#getApps","ApplicationsRequestBuilder#withApplicationTypes","ApplicationsRequestBuilder#withApplicationTags","ApplicationsRequestBuilder#build","WebServices#parseQueries","GetApplicationsRequestPBImpl#setApplicationTypes","GetApplicationsRequestPBImpl#setApplicationTags","ClientRMService#getApplications","ClientRMService#getLowerCasedAppTypes","TestRMWebServicesApps#testAppsQueryAppTypes","TestApplicationsRequestBuilder#testRequestWithNullApplicationTypesQuery","TestApplicationsRequestBuilder#testRequestWithEmptyApplicationTagsQuery","TestClientRMService#testGetApplications"],"test_strategy":["Add REST endpoint tests in `TestRMWebServicesApps` for `applicationTags` mirroring the existing `applicationTypes` matrix: empty, whitespace-only, comma-only, mixed blank tokens, repeated params, comma-separated params, and mixed-case values.","Add direct `RMWebServices#getApps` tests passing null `applicationTypes` and null `applicationTags` to catch cache-key NPE risk before builder normalization.","Extend `TestApplicationsRequestBuilder` with comma-separated, whitespace-only, mixed-case, and mixed blank-token assertions for both params, verifying normalized request sets or no filter when empty.","Keep `TestClientRMService#testGetApplications` coverage for empty tag filters and any-tag match behavior, adding mixed-case tag request assertions if protocol normalization is relied on.","Run focused tests for `TestRMWebServicesApps`, `TestApplicationsRequestBuilder`, and `TestClientRMService`; no full-suite requirement for this scoped change."],"risks":["Changing blank-token handling to return bad requests would break existing clients that currently send empty or comma-heavy `applicationTypes` values.","Normalizing cache keys differently from request filters can cause cache misses or semantically duplicate cache entries, though it should not change responses.","Tag filtering depends on stored app tag casing and request tag normalization; inconsistent lowercasing outside REST/protocol paths could produce false negatives.","Application statistics uses `applicationTypes` too, but has separate single-type constraints and should not be unintentionally changed by `/apps` hardening."],"open_questions":["Should cache-key normalization be required as part of hardening, or is response equivalence sufficient?","Should REST documentation explicitly state that blank tokens are ignored and matching is case-insensitive for both params?"]}
```

Idea checks: 5/8 (0.625)

Critical misses: none

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-mcp-only.jsonl

Codex prompt used:
```
Daily task: requirement analyst for YARN RM app filtering hardening. Requirement: applicationTypes and applicationTags query params should handle null, empty, comma-separated, whitespace-only, and mixed-case values consistently without breaking existing REST clients. Return valid compact JSON only with keys: requirement_summary, current_behavior, acceptance_criteria, impacted_files, symbols, test_strategy, risks, open_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\hadoop
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\hadoop, task_type=research_business, and budget_tokens around 1800.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{"requirement_summary":"Harden YARN ResourceManager REST app filtering so applicationTypes and applicationTags query parameters treat omitted/null, empty, whitespace-only, comma-separated, repeated, and mixed-case inputs consistently while preserving existing REST client compatibility.","current_behavior":["TokenOpt marked the evidence packet answerable=false because target-specific line evidence for applicationTypes/applicationTags was missing.","Repository evidence confirms this is Apache Hadoop Maven project 3.6.0-SNAPSHOT with YARN as a major area (E1,E2,E4).","Exact target file was path-verified by TokenOpt read_file: hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java lines 600-779, but TokenOpt did not expose source lines.","Exact searches for applicationTypes and applicationTags returned exitCode=0 artifacts, but matched line text was not exposed; current parsing/case behavior remains unresolved from available evidence."],"acceptance_criteria":["Omitted/null applicationTypes or applicationTags means no filter and preserves current REST behavior.","Empty values, blank comma tokens, and whitespace-only values are ignored rather than causing errors or unintended filtering.","Comma-separated and repeated query params produce the same normalized token set after trim/drop-empty processing.","Mixed-case handling is deterministic: applicationTypes should compare case-insensitively or be normalized to the existing canonical app-type convention; applicationTags should match YARN's stored tag normalization without breaking already valid exact/lowercase clients.","Existing valid clients using single values, repeated params, or comma-separated params continue to receive equivalent results.","Invalid/blank-only filter input must not narrow results unexpectedly or fail the request unless existing documented validation already requires failure."],"impacted_files":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java"],"symbols":["applicationTypes query parameter","applicationTags query parameter","YARN RM web service apps filtering handler in RMWebServices.java","query parameter tokenization/normalization helper, exact symbol name unresolved"],"test_strategy":["Add focused RM web service app filtering tests for omitted/null params, empty values, whitespace-only values, comma-separated values with blank tokens, repeated params, and mixed-case values.","Assert applicationTypes and applicationTags have equivalent behavior for repeated vs comma-separated forms after trimming and dropping blanks.","Assert blank-only filters behave as no filter, not as an empty-match filter.","Assert existing lowercase/exact-case clients remain compatible.","Include regression coverage for mixed-case app type and tag queries once canonical case semantics are confirmed in source."],"risks":["Changing tag case handling may affect clients relying on case-sensitive tag behavior if YARN stores tags without normalization in this branch.","Treating blank filters as no filter may differ from any existing accidental empty-result behavior clients may depend on.","Shared parsing helpers may also affect unrelated params such as states if reused; implementation should scope changes or test all callers."],"open_questions":["TokenOpt evidence did not expose matched source lines or tests, so exact current parsing helper names and current behavior are unresolved.","Confirm whether YARN stores applicationTags canonically lowercased in this branch before specifying final mixed-case tag matching behavior.","Confirm the existing test file for RM app REST filtering before implementation; likely under the ResourceManager webapp test tree but not proven by available TokenOpt evidence."]}
```

Idea checks: 5/8 (0.625)

Critical misses: file:hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java, file:hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java, file:hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java, symbol:ApplicationsRequestBuilder, symbol:withApplicationTypes, symbol:withApplicationTags, symbol:parseQueries

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-codegraph-only.jsonl

Codex prompt used:
```
Daily task: requirement analyst for YARN RM app filtering hardening. Requirement: applicationTypes and applicationTags query params should handle null, empty, comma-separated, whitespace-only, and mixed-case values consistently without breaking existing REST clients. Return valid compact JSON only with keys: requirement_summary, current_behavior, acceptance_criteria, impacted_files, symbols, test_strategy, risks, open_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\hadoop
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call compile_evidence with task as the complete user request above, taskType=investigate, budgetTokens=8000, maxEvidenceItems=20, and qualityRubric=["Maps requirement cases to current parser/builder behavior.","Separates appTypes and appTags compatibility risks.","Names targeted unit and web-service test surfaces."].
- If compile_evidence returns answerable=false, use at most one listed allowedFollowups tool for the most important missing fact.
- If compile_evidence returns answerable=true but the final JSON still lacks concrete file, symbol, or test names required by the user request, use at most one exact CodeGraph followup for that missing named anchor.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"requirement_summary":"Harden YARN RM apps REST filtering so applicationTypes and applicationTags query params treat null, empty, comma-separated, whitespace-only, and mixed-case values consistently while preserving existing client compatibility.","current_behavior":"Unverified: CodeGraph MCP compile_evidence failed twice with a Postgres/backend timeout, and shell/read fallback was disabled by the benchmark constraints. No repository evidence packet was available, so current parser/builder behavior cannot be cited safely.","acceptance_criteria":["Null or omitted applicationTypes/applicationTags behave as no filter.","Empty or whitespace-only values behave consistently and do not reject otherwise valid requests.","Comma-separated values are split, trimmed, and empty tokens ignored.","Mixed-case values match existing intended case-insensitive semantics without changing response shape.","Existing REST clients using repeated params or comma-separated params continue to work."],"impacted_files":[],"symbols":[],"test_strategy":["Add targeted RM web-service tests for omitted, empty, whitespace-only, comma-separated, repeated, and mixed-case applicationTypes/applicationTags.","Add parser-level/unit coverage if the query normalization helper is separable.","Verify compact JSON responses and legacy REST compatibility for both appTypes and appTags paths."],"risks":["Repository evidence incomplete because CodeGraph was unavailable; impacted files, symbols, and exact test names are unresolved.","applicationTypes and applicationTags may have different normalization semantics; compatibility risks must be separated once code evidence is available.","Changing empty-value handling could alter behavior for clients that currently rely on empty params being ignored or rejected."],"open_questions":["Which exact RMWebServices parser/helper currently normalizes applicationTypes and applicationTags?","Are applicationTags intended to be case-insensitive in the same way as applicationTypes?","Do existing tests already cover repeated query params separately from comma-separated values?"]}
```

Idea checks: 3/8 (0.375)

Critical misses: file:hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java, file:hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java, file:hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java, file:hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java, file:hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java, symbol:ApplicationsRequestBuilder, symbol:withApplicationTypes, symbol:withApplicationTags, symbol:parseQueries, term:lowercase

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\hadoop-hadoop-yarn-app-filter-requirement-analysis-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
```
Daily task: requirement analyst for YARN RM app filtering hardening. Requirement: applicationTypes and applicationTags query params should handle null, empty, comma-separated, whitespace-only, and mixed-case values consistently without breaking existing REST clients. Return valid compact JSON only with keys: requirement_summary, current_behavior, acceptance_criteria, impacted_files, symbols, test_strategy, risks, open_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\hadoop
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\hadoop, task_type=research_business, budget_tokens=1800, quality_rubric=["Maps requirement cases to current parser/builder behavior.","Separates appTypes and appTags compatibility risks.","Names targeted unit and web-service test surfaces."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: entrypoint_or_owner, flow, source_files, symbols, existing_tests, implementation_ideas, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=investigate, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget before fallback: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "YARN|Requirement|applicationTypes|applicationTags|REST|Separates|appTypes|appTags|RMWebServices|ApplicationsRequestBuilder|withApplicationTags|withApplicationTypes|parseQueries|GetApplicationsRequest|RMWSConsts|TestApplicationsRequestBuilder|TestRMWebServicesApps" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"requirement_summary":"Harden YARN RM /ws/v1/cluster/apps filtering so applicationTypes and applicationTags treat absent/null, empty, whitespace-only, comma-separated, and mixed-case inputs consistently while preserving existing REST response shape and client compatibility.","current_behavior":["RMWebServices#getApps receives applicationTypes/applicationTags as Set<String>, copies them into AppsCacheKey with new HashSet<>(...), then passes them to ApplicationsRequestBuilder (hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:630-648,665-678).","ApplicationsRequestBuilder initializes appTypes/appTags empty, ignores null in withApplicationTypes/withApplicationTags, parses non-null sets via WebServices.parseQueries(...,false), and sets GetApplicationsRequest only when parsed sets are non-empty (hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java:45-46,125-137,208-233).","Existing builder tests cover default/null/empty behavior for other query families, giving a pattern for app filter tests, but fallback evidence did not capture appTypes/appTags-specific tests (hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java:47-124).","Existing RM web-service tests show /apps queryParam assertions and JSON count/id checks usable for app filter coverage (hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java:700-719)."],"acceptance_criteria":["Absent/null applicationTypes and applicationTags behave like no filter and never throw, including the RM apps cache-key path.","Empty values, whitespace-only values, comma-only values, and empty tokens inside comma-separated values are ignored for both params and do not produce 400/500 responses.","Single comma-separated params and repeated query params produce the same parsed filter set after trimming and dropping empty tokens.","Mixed-case handling is explicitly consistent for both params and locked by tests without changing existing backend matching semantics unexpectedly.","Existing REST clients using current JSON/XML /apps responses, repeated params, or comma-separated params keep the same response shape and valid compact JSON."],"impacted_files":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java"],"symbols":["RMWebServices#getApps","RMWSConsts.APPLICATION_TYPES","RMWSConsts.APPLICATION_TAGS","AppsCacheKey.newInstance","ApplicationsRequestBuilder","ApplicationsRequestBuilder#withApplicationTypes","ApplicationsRequestBuilder#withApplicationTags","ApplicationsRequestBuilder#build","WebServices#parseQueries","GetApplicationsRequest#setApplicationTypes","GetApplicationsRequest#setApplicationTags","TestApplicationsRequestBuilder","TestRMWebServicesApps"],"test_strategy":["Add TestApplicationsRequestBuilder cases for null, empty, whitespace-only, comma-only, comma-separated, repeated-set, and mixed-case applicationTypes/applicationTags.","If WebServices.parseQueries changes, add focused parser tests proving trimming, empty-token dropping, comma splitting, and case policy do not regress state parsing.","Add TestRMWebServicesApps scenarios that seed apps with type/tag values and query absent, empty, whitespace, comma-separated, repeated, and mixed-case filters, asserting status and app ids/counts.","Run mvn -pl hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager -Dtest=TestApplicationsRequestBuilder,TestRMWebServicesApps test."],"risks":["applicationTypes risk: changing case folding can alter matching for clients that rely on current type-case behavior.","applicationTags risk: tags are user-defined, so lowercasing or otherwise normalizing tag content may break case-sensitive filters.","RMWebServices cache-key risk: new HashSet<>(applicationTypes/applicationTags) occurs before builder null guards, so null-safety may need endpoint-level canonicalization.","Shared parser risk: WebServices.parseQueries is also used for states; broad parser changes could affect unrelated REST filters.","Evidence risk: TokenOpt packet 3be3308f-0a72-421a-a945-4195496438c8 was not answerable, CodeGraph timed out, and fallback was capped; parseQueries implementation and app-specific existing tests remain unverified."],"open_questions":["Should mixed-case applicationTypes be matched case-insensitively or preserved exactly as submitted?","Are applicationTags intended to be case-sensitive user labels?","Does the deployed JAX-RS runtime always pass empty Set rather than null for absent Set query params?","Should cache keys canonicalize empty/whitespace-only filters to the same value as absent filters to avoid duplicate cache entries?"]}
```

Idea checks: 5/8 (0.625)

Critical misses: term:lowercase

### elasticsearch / elasticsearch-search-investigate-flow

Class: investigate_flow

Prompt:
```
Daily task: investigate the Elasticsearch REST search flow for allow_partial_search_results and pre_filter_shard_size. Trace how the request params are parsed and how transport execution/defaulting uses them. Return valid compact JSON only with keys: summary, flow, invariants, files, symbols, tests_to_run, risks. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java",
    "server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java",
    "server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java",
    "server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java"
  ],
  "symbols": [
    "parseSearchRequest",
    "allowPartialSearchResults",
    "setPreFilterShardSize",
    "shouldPreFilterSearchShards",
    "shouldMinimizeRoundtrips"
  ],
  "terms": [
    "allow_partial_search_results",
    "pre_filter_shard_size",
    "defaultAllowPartialSearchResults",
    "nullable",
    "can-match"
  ]
}
```

Quality rubric:
- Traces REST parser fields to SearchRequest mutation.
- Distinguishes omitted allow_partial_search_results from explicit true/false.
- Connects pre_filter_shard_size to transport can-match/pre-filter behavior and tests.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| elasticsearch | elasticsearch-search-investigate-flow | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 14 | no | 0 |  | 0 | 50 | 0 | 50 | 658015 | 300007 |
| elasticsearch | elasticsearch-search-investigate-flow | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.600 | 0.875 | 6 | yes | 233828 |  | 5697 | 7 | 7 | 0 | 70421 | 174010 |
| elasticsearch | elasticsearch-search-investigate-flow | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.267 | 0.375 | 11 | yes | 89041 |  | 1629 | 2 | 2 | 0 | 13358 | 85844 |
| elasticsearch | elasticsearch-search-investigate-flow | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | yes | 0.800 | 0.875 | 3 | yes | 337547 |  | 8805 | 6 | 3 | 3 | 1145976 | 269609 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-baseline.jsonl

Codex prompt used:
```
Daily task: investigate the Elasticsearch REST search flow for allow_partial_search_results and pre_filter_shard_size. Trace how the request params are parsed and how transport execution/defaulting uses them. Return valid compact JSON only with keys: summary, flow, invariants, files, symbols, tests_to_run, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\elasticsearch
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```

```

Idea checks: 0/8 (0.000)

Critical misses: file:server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java, file:server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java, file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, file:server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java, symbol:parseSearchRequest, symbol:allowPartialSearchResults, symbol:setPreFilterShardSize, symbol:shouldPreFilterSearchShards, symbol:shouldMinimizeRoundtrips, term:allow_partial_search_results, term:pre_filter_shard_size, term:defaultAllowPartialSearchResults, term:nullable, term:can-match

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-mcp-only.jsonl

Codex prompt used:
```
Daily task: investigate the Elasticsearch REST search flow for allow_partial_search_results and pre_filter_shard_size. Trace how the request params are parsed and how transport execution/defaulting uses them. Return valid compact JSON only with keys: summary, flow, invariants, files, symbols, tests_to_run, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\elasticsearch
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\elasticsearch, task_type=api_flow, and budget_tokens around 1800.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{"summary":"TokenOpt packet 47156e7d-b8c5-4fe7-8622-d9e952dd3385 was answerable=false. Evidence proves the main REST search entrypoint for allow_partial_search_results and identifies candidate transport/defaulting files, but TokenOpt follow-up outputs were metadata-only for pre_filter_shard_size, so exact pre_filter line citations remain unresolved.","flow":[{"step":"REST _search parses allow_partial_search_results in server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:254-256; if the param exists it calls searchRequest.allowPartialSearchResults(request.paramAsBoolean(\"allow_partial_search_results\", null))."},{"step":"Because the REST parser checks hasParam first and passes a nullable default, absence is preserved for later defaulting instead of forcing true or false at REST parsing."},{"step":"Multi-search also supports allow_partial_search_results in request item metadata: server/src/main/java/org/elasticsearch/action/search/MultiSearchRequest.java:324 parses the field and :476 emits it in XContent."},{"step":"Transport execution/defaulting is in server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java per TokenOpt candidate evidence; expected flow is SearchRequest reaches transport, where null allowPartialSearchResults is resolved from the search default and explicit true/false is honored. Exact transport lines were not visible in TokenOpt output."},{"step":"pre_filter_shard_size is a REST/API flow target and TransportSearchAction is the candidate execution site. It controls whether the transport search path runs a can-match/pre-filter shard phase before the main search. Exact parse/default lines were not exposed by TokenOpt follow-ups."},{"step":"Failures from disallowed partial results surface through search phase handling; server/src/main/java/org/elasticsearch/action/search/SearchPhase.java:41 contains the user-facing hint to use allow_partial_search_results to bypass shard failure errors."}],"invariants":["allow_partial_search_results is tri-state through REST search parsing: absent means defer defaulting, explicit true allows partial shard results, explicit false rejects partial shard failures.","REST parsing must not collapse absent allow_partial_search_results into false; RestSearchAction.java:254-256 shows hasParam guarding the nullable boolean parse.","MultiSearchRequest preserves per-item allow_partial_search_results across parse and XContent serialization.","pre_filter_shard_size is an execution threshold for shard pre-filtering/can-match, not a result-shaping option; changing it should affect search fan-out/planning, not query semantics.","Exact pre_filter_shard_size parse/default citations are unresolved because TokenOpt returned only archived metadata for the exact follow-up searches."],"files":["server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java","server/src/main/java/org/elasticsearch/action/search/MultiSearchRequest.java","server/src/main/java/org/elasticsearch/action/search/SearchPhase.java","server/src/test/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhaseTests.java","server/src/main/java/org/elasticsearch/rest/action/search/RestMultiSearchAction.java","x-pack/plugin/async-search/src/main/java/org/elasticsearch/xpack/search/RestSubmitAsyncSearchAction.java"],"symbols":["RestSearchAction","RestSearchAction.parseSearchRequest","SearchRequest.allowPartialSearchResults","RestRequest.paramAsBoolean","MultiSearchRequest","TransportSearchAction","SearchPhase","allow_partial_search_results","pre_filter_shard_size","preFilterShardSize"],"tests_to_run":["./gradlew :server:test --tests org.elasticsearch.action.search.CanMatchPreFilterSearchPhaseTests"],"risks":["TokenOpt compile_evidence marked answerable=false; follow-up reads/searches for exact lines returned metadata-only output, so transport defaulting and pre_filter_shard_size line-level citations could not be fully verified.","Only the CanMatchPreFilterSearchPhaseTests candidate was evidenced by TokenOpt; additional REST parsing tests may exist but were not source-visible in this benchmark run.","No files were modified and no shell commands were used."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, file:server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java, symbol:setPreFilterShardSize, symbol:shouldPreFilterSearchShards, symbol:shouldMinimizeRoundtrips, term:defaultAllowPartialSearchResults

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-codegraph-only.jsonl

Codex prompt used:
```
Daily task: investigate the Elasticsearch REST search flow for allow_partial_search_results and pre_filter_shard_size. Trace how the request params are parsed and how transport execution/defaulting uses them. Return valid compact JSON only with keys: summary, flow, invariants, files, symbols, tests_to_run, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\elasticsearch
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call get_flow_pack with target as the complete user request above, taskType=api_flow, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, and profile=full.
- Build the final handoff from flowSteps, files, symbols, evidenceSlices, testsLikelyRelevant, risks, and validation hints.
- If get_flow_pack is missing required rubric coverage (["Traces REST parser fields to SearchRequest mutation.","Distinguishes omitted allow_partial_search_results from explicit true/false.","Connects pre_filter_shard_size to transport can-match/pre-filter behavior and tests."]), use at most one exact CodeGraph followup from search_code, find_references, find_tests_for, or get_file_slice for that named missing fact.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"summary":"CodeGraph get_flow_pack was attempted twice but returned only a daemon/Postgres timeout, so no repository evidence was available. No files were read or modified.","flow":[],"invariants":[],"files":[],"symbols":[],"tests_to_run":[],"risks":["Unresolved: REST parser field tracing for allow_partial_search_results and pre_filter_shard_size could not be verified because CodeGraph backend was unavailable.","Unresolved: omitted vs explicit allow_partial_search_results behavior could not be distinguished from repository evidence.","Unresolved: pre_filter_shard_size transport can-match/pre-filter behavior and relevant tests could not be confirmed.","CodeGraph call budget was exhausted; shell/read fallback was disabled by the benchmark constraints."]}
```

Idea checks: 3/8 (0.375)

Critical misses: file:server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java, file:server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java, file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, file:server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java, symbol:parseSearchRequest, symbol:allowPartialSearchResults, symbol:setPreFilterShardSize, symbol:shouldPreFilterSearchShards, symbol:shouldMinimizeRoundtrips, term:defaultAllowPartialSearchResults, term:nullable

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-investigate-flow-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
```
Daily task: investigate the Elasticsearch REST search flow for allow_partial_search_results and pre_filter_shard_size. Trace how the request params are parsed and how transport execution/defaulting uses them. Return valid compact JSON only with keys: summary, flow, invariants, files, symbols, tests_to_run, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\elasticsearch
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\elasticsearch, task_type=api_flow, budget_tokens=1800, quality_rubric=["Traces REST parser fields to SearchRequest mutation.","Distinguishes omitted allow_partial_search_results from explicit true/false.","Connects pre_filter_shard_size to transport can-match/pre-filter behavior and tests."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: entrypoint_or_owner, flow, source_files, symbols, existing_tests, implementation_ideas, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=api_flow, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget before fallback: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "Elasticsearch|REST|allow_partial_search_results|pre_filter_shard_size|Trace|Traces|SearchRequest|Distinguishes|Connects|RestSearchAction|parseSearchRequest|allowPartialSearchResults|defaultAllowPartialSearchResults|TransportSearchAction|shouldPreFilterSearchShards|setPreFilterShardSize|getPreFilterShardSize|shouldMinimizeRoundtrips" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"summary":"REST parsing is owned by RestSearchAction. It mutates SearchRequest only when the params are present: pre_filter_shard_size calls setPreFilterShardSize, while allow_partial_search_results calls allowPartialSearchResults(Boolean). SearchRequest carries both as optional values through copy/serialization; omitted allow_partial_search_results remains null so transport/default settings can decide, while explicit true/false overrides. pre_filter_shard_size feeds TransportSearchAction.shouldPreFilterSearchShards/can-match prefilter behavior, with unit and YAML REST coverage.","flow":["server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:236 parses pre_filter_shard_size only when request.hasParam, using request.paramAsInt(..., SearchRequest.DEFAULT_PRE_FILTER_SHARD_SIZE), then SearchRequest.setPreFilterShardSize.","server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:254 parses allow_partial_search_results only when request.hasParam, then SearchRequest.allowPartialSearchResults(request.paramAsBoolean(..., null)).","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java copies allowPartialSearchResults and preFilterShardSize into subSearchRequest for per-cluster/sub-search execution.","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java serializes both as optional values: readOptionalVInt/readOptionalBoolean and writeOptionalVInt/writeOptionalBoolean, preserving null vs explicit values.","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java validate computes null allowPartialSearchResults with DEFAULT_ALLOW_PARTIAL_SEARCH_RESULTS for validation; transport path is expected to materialize cluster default via SearchService.defaultAllowPartialSearchResults before execution.","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java owns TransportSearchAction.shouldPreFilterSearchShards; tests call it directly and YAML search tests exercise pre_filter_shard_size can-match filtering."],"invariants":["Omitted allow_partial_search_results is distinct from explicit true/false because RestSearchAction does not call SearchRequest.allowPartialSearchResults unless request.hasParam is true.","Explicit allow_partial_search_results=false must remain false through SearchRequest copy and transport serialization; it must not be overwritten by defaults.","Explicit allow_partial_search_results=true must override the cluster-level default used by transport execution.","Omitted pre_filter_shard_size remains optional/null until transport decides whether default prefiltering is needed; explicit REST value is stored on SearchRequest.","pre_filter_shard_size=0 is invalid per REST YAML coverage; valid small values such as 1 force can-match prefiltering in search REST coverage.","SearchRequest.subSearchRequest must preserve both fields for CCS/sub-search paths."],"files":["server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java","server/src/main/java/org/elasticsearch/search/SearchService.java","server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java","server/src/test/java/org/elasticsearch/action/search/SearchRequestTests.java","server/src/test/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhaseTests.java","rest-api-spec/src/yamlRestTest/resources/rest-api-spec/test/search/140_pre_filter_search_shards.yml","rest-api-spec/src/yamlRestTest/resources/rest-api-spec/test/search/500_date_range.yml","rest-api-spec/src/yamlRestTest/resources/rest-api-spec/test/suggest/30_context.yml"],"symbols":["RestSearchAction.parseSearchRequest","SearchRequest.setPreFilterShardSize","SearchRequest.getPreFilterShardSize","SearchRequest.allowPartialSearchResults(Boolean)","SearchRequest.allowPartialSearchResults()","SearchRequest.DEFAULT_PRE_FILTER_SHARD_SIZE","SearchRequest.DEFAULT_ALLOW_PARTIAL_SEARCH_RESULTS","SearchRequest.subSearchRequest","SearchRequest.writeTo","SearchRequest(StreamInput)","SearchRequest.validate","TransportSearchAction.doExecute","TransportSearchAction.shouldPreFilterSearchShards","SearchService.defaultAllowPartialSearchResults"],"tests_to_run":["./gradlew :server:test --tests org.elasticsearch.action.search.TransportSearchActionTests","./gradlew :server:test --tests org.elasticsearch.action.search.SearchRequestTests","./gradlew :server:test --tests org.elasticsearch.action.search.CanMatchPreFilterSearchPhaseTests","./gradlew :rest-api-spec:yamlRestTest --tests \"org.elasticsearch.test.rest.ClientYamlTestSuiteIT.test {yaml=search/140_pre_filter_search_shards.yml}\"","./gradlew :rest-api-spec:yamlRestTest --tests \"org.elasticsearch.test.rest.ClientYamlTestSuiteIT.test {yaml=search/500_date_range.yml}\""],"risks":["TokenOpt did not mark the packet answerable; it identified exact transport call-chain/defaulting as partially missing.","CodeGraph get_flow_pack and the one exact get_file_slice follow-up both timed out on the daemon/Postgres backend, so CodeGraph could not provide usable evidence.","Hybrid fallback was used and capped as requested; exact TransportSearchAction defaulting line numbers were not captured before the hard stop.","The first required fallback rg was noisy because the mandated pattern included broad terms; final claims rely on bounded slices plus targeted test search output.","No files were modified and no tests were executed."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, symbol:shouldMinimizeRoundtrips, term:nullable

### elasticsearch / elasticsearch-search-prefilter-refactor-plan

Class: refactor_code

Prompt:
```
Daily task: refactor planning. We want to make the search pre-filter/can-match decision easier to maintain without changing behavior. Analyze the current pre_filter_shard_size, primary-field sort, match-none rewrite, and CCS minimize-roundtrips logic, then propose a safe refactor plan. Return valid compact JSON only with keys: refactor_goal, current_flow, files, symbols, safe_steps, tests, validation_commands, risks. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java",
    "server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java",
    "server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java",
    "server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java"
  ],
  "symbols": [
    "shouldPreFilterSearchShards",
    "setPreFilterShardSize",
    "getPreFilterShardSize",
    "shouldMinimizeRoundtrips",
    "hasPrimaryFieldSort"
  ],
  "terms": [
    "pre_filter_shard_size",
    "canRewriteToMatchNone",
    "primary field sort",
    "ccs_minimize_roundtrips",
    "can-match"
  ]
}
```

Quality rubric:
- Preserves current behavior and names invariants before refactor steps.
- Scopes refactor around exact source and tests.
- Includes validation for threshold, sort, rewrite, and CCS behavior.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 14 | no | 0 |  | 0 | 59 | 0 | 59 | 676527 | 300007 |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.600 | 0.875 | 6 | yes | 298530 |  | 9865 | 8 | 8 | 0 | 65882 | 268236 |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.467 | 0.750 | 8 | yes | 88492 |  | 3288 | 2 | 2 | 0 | 13342 | 122852 |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | yes | 0.867 | 0.875 | 2 | yes | 247908 |  | 9662 | 5 | 2 | 3 | 1091926 | 256886 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-baseline.jsonl

Codex prompt used:
```
Daily task: refactor planning. We want to make the search pre-filter/can-match decision easier to maintain without changing behavior. Analyze the current pre_filter_shard_size, primary-field sort, match-none rewrite, and CCS minimize-roundtrips logic, then propose a safe refactor plan. Return valid compact JSON only with keys: refactor_goal, current_flow, files, symbols, safe_steps, tests, validation_commands, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\elasticsearch
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```
There is a dedicated `CanMatchPreFilterSearchPhaseTests` suite, including min/max shard sorting and skipped-count compatibility cases. I’m sampling the relevant cases so the test plan can point at existing coverage plus the likely gaps.
```

Idea checks: 0/8 (0.000)

Critical misses: file:server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java, file:server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java, file:server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java, file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, symbol:shouldPreFilterSearchShards, symbol:setPreFilterShardSize, symbol:getPreFilterShardSize, symbol:shouldMinimizeRoundtrips, symbol:hasPrimaryFieldSort, term:pre_filter_shard_size, term:canRewriteToMatchNone, term:primary field sort, term:ccs_minimize_roundtrips, term:can-match

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-mcp-only.jsonl

Codex prompt used:
```
Daily task: refactor planning. We want to make the search pre-filter/can-match decision easier to maintain without changing behavior. Analyze the current pre_filter_shard_size, primary-field sort, match-none rewrite, and CCS minimize-roundtrips logic, then propose a safe refactor plan. Return valid compact JSON only with keys: refactor_goal, current_flow, files, symbols, safe_steps, tests, validation_commands, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\elasticsearch
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\elasticsearch, task_type=implement, and budget_tokens around 1800.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{"refactor_goal":"Extract the pre-filter/can-match decision into a small, package-private policy helper while preserving request parsing, shard execution, match-none rewrite behavior, primary-sort optimization, and CCS minimize-roundtrips semantics.","current_flow":["TokenOpt packet c3d9d94d-66fb-419f-9932-89575585eacc was answerable=false; exact TokenOpt followups exposed only metadata, so line-level evidence remains unresolved.","SearchRequest carries pre_filter_shard_size and ccs_minimize_roundtrips request state in server/src/main/java/org/elasticsearch/action/search/SearchRequest.java.","TransportSearchAction resolves local/remote search execution and decides whether the can-match pre-filter phase runs, using explicit pre_filter_shard_size when present and default automatic triggers such as large shard fanout, read-only indices, and primary indexed-field sort in server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java.","CanMatchPreFilterSearchPhase executes the selected pre-filter roundtrip, sends can-match requests, drops shards whose can-match response is false, and preserves shard ordering/metadata needed by later phases in server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java.","SearchService owns shard-local can-match evaluation, including query rewrite to match-none and primary sort field min/max collection, in server/src/main/java/org/elasticsearch/search/SearchService.java.","With CCS minimize_roundtrips=true, remote clusters are coordinated as remote sub-searches and the local coordinator must preserve the existing delegation boundary; with false, remote shards are expanded earlier and can participate in the normal local-style shard flow."],"files":["server/src/main/java/org/elasticsearch/action/search/SearchRequest.java","server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java","server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java","server/src/main/java/org/elasticsearch/action/search/CanMatchShardRequest.java","server/src/main/java/org/elasticsearch/action/search/CanMatchShardResponse.java","server/src/main/java/org/elasticsearch/action/search/SearchTransportService.java","server/src/main/java/org/elasticsearch/search/SearchService.java","server/src/main/java/org/elasticsearch/search/sort/FieldSortBuilder.java","server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java","server/src/test/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhaseTests.java","server/src/test/java/org/elasticsearch/search/SearchServiceTests.java"],"symbols":["SearchRequest#preFilterShardSize","SearchRequest#ccsMinimizeRoundtrips","TransportSearchAction#shouldPreFilterSearchShards","TransportSearchAction","CanMatchPreFilterSearchPhase","CanMatchShardRequest","CanMatchShardResponse","SearchTransportService#sendCanMatch","SearchService#canMatch","FieldSortBuilder#getPrimaryFieldSortOrNull"],"safe_steps":["Add characterization tests around the existing TransportSearchAction pre-filter decision before changing code: explicit threshold null/1/default/large, shard count below/equal/above threshold, primary field sort present/absent, read-only index trigger, and source/query absent cases.","Introduce a package-private helper such as CanMatchPreFilterPolicy in server/src/main/java/org/elasticsearch/action/search/ with a pure decision method; initially keep TransportSearchAction#shouldPreFilterSearchShards as a delegating wrapper to minimize call-site churn.","Move only boolean decision predicates into the helper: threshold comparison, default automatic-trigger checks, primary field sort detection, and any read-only-index predicate. Do not move can-match transport, shard filtering, query rewrite, or response handling.","Keep SearchService match-none rewrite and primary-sort min/max response construction untouched; the helper should decide whether to run can-match, not what can-match means.","Keep CCS branching in TransportSearchAction explicit: apply the helper only after the existing code has chosen the local/non-minimized shard-expanded path, and preserve minimized remote delegation and request flags unchanged.","After the helper is covered, optionally replace scattered condition comments with named predicates such as hasExplicitPreFilterThreshold, exceedsDefaultShardThreshold, hasPrimaryIndexedFieldSort, and usesShardExpandedCcsPath.","Avoid new logging, REST parameters, serialization changes, or changed defaults; this is a mechanical extraction plus tests only."],"tests":["TransportSearchActionTests: matrix for pre_filter_shard_size threshold behavior and default automatic triggers.","TransportSearchActionTests or CCS-focused search tests: ccs_minimize_roundtrips true vs false keeps the same can-match decision boundary for local and remote shards.","CanMatchPreFilterSearchPhaseTests: shard filtering/order remains unchanged when can-match responses include false shards and primary-sort min/max metadata.","SearchServiceTests: existing match-none rewrite and primary-field-sort min/max behavior remain covered without moving logic.","Add regression tests before extraction, then rerun unchanged after extraction to prove behavior preservation."],"validation_commands":["./gradlew :server:test --tests org.elasticsearch.action.search.TransportSearchActionTests","./gradlew :server:test --tests org.elasticsearch.action.search.CanMatchPreFilterSearchPhaseTests","./gradlew :server:test --tests org.elasticsearch.search.SearchServiceTests","./gradlew :server:spotlessJavaCheck"],"risks":["TokenOpt did not provide line-level code slices for the target symbols; file/symbol citations are based on target-specific exact followups plus repository structure, with unresolved line confirmation.","The highest behavior risk is accidentally changing when can-match runs for default requests, especially equality at the pre_filter_shard_size threshold and automatic primary-sort/read-only triggers.","CCS minimize_roundtrips must remain an orchestration boundary; applying local shard-expanded policy to minimized remote sub-searches would change latency and request fanout.","Primary sort detection must reuse the existing FieldSortBuilder path; reimplementing sort inspection risks missing unmapped fields, nested sort, missing values, or unsupported sort types.","Do not merge match-none rewrite policy into the transport-level decision helper; shard-local rewrite depends on SearchService context and must remain there."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, symbol:setPreFilterShardSize, symbol:getPreFilterShardSize, symbol:shouldMinimizeRoundtrips, symbol:hasPrimaryFieldSort, term:canRewriteToMatchNone

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-codegraph-only.jsonl

Codex prompt used:
```
Daily task: refactor planning. We want to make the search pre-filter/can-match decision easier to maintain without changing behavior. Analyze the current pre_filter_shard_size, primary-field sort, match-none rewrite, and CCS minimize-roundtrips logic, then propose a safe refactor plan. Return valid compact JSON only with keys: refactor_goal, current_flow, files, symbols, safe_steps, tests, validation_commands, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\elasticsearch
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call get_change_pack with task as the complete user request above, changeType=implement, tokenBudget=8000, maxFiles=20, maxSymbols=50, includeTests=true, includeSnippets=false, and profile=full.
- Build the final plan from get_change_pack.files, symbols, editRanges, testsLikelyRelevant, expectedVerification, invariants, and taskOracle.
- If a required behavior anchor is still missing, use at most one exact CodeGraph followup from search_code, search_symbol, find_tests_for, or get_file_slice for that named anchor.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"refactor_goal":"Centralize the search pre-filter/can-match eligibility decision into one named policy/helper so pre_filter_shard_size, primary sort shard pruning, match-none rewrite, and CCS minimize-roundtrips behavior remain unchanged but are easier to reason about and test.","current_flow":["Unverified: CodeGraph get_change_pack failed twice before returning evidence, so this flow is based on expected Elasticsearch search coordination structure and must be confirmed before editing.","Search request parsing stores pre_filter_shard_size and ccs_minimize_roundtrips on SearchRequest.","TransportSearchAction coordinates shard discovery, local/remote shard grouping, and decides whether a can-match pre-filter phase should run before the main search phase.","CanMatchPreFilterSearchPhase performs per-shard can-match checks, including query rewrite-to-match-none pruning and shard ordering/skipping data used for primary field sort optimization.","CCS minimize-roundtrips changes where remote shard discovery and can-match work happens, so the refactor must not move or duplicate that boundary."],"files":["server/src/main/java/org/elasticsearch/action/search/SearchRequest.java","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java","server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java","server/src/main/java/org/elasticsearch/action/search/SearchPhaseController.java","server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java","server/src/test/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhaseTests.java"],"symbols":["SearchRequest.preFilterShardSize","SearchRequest.ccsMinimizeRoundtrips","TransportSearchAction","CanMatchPreFilterSearchPhase","SearchPhaseController"],"safe_steps":["Confirm the exact existing predicate and call sites with CodeGraph once available; do not edit until all four anchors are located: explicit pre_filter_shard_size, primary-field sort, match-none rewrite, and CCS minimize-roundtrips.","Extract only the pure eligibility predicate first, preferably package-private in the existing search action package, with inputs that mirror existing locals rather than pulling in broader mutable state.","Keep the first change behavior-preserving: move boolean branches without changing order, defaults, null handling, shard-count comparisons, or CCS remote/local split.","Add narrow tests around the extracted decision matrix before touching phase construction: explicit threshold below/equal/above shard count, unset threshold default behavior, primary sort forcing prefilter, match-none rewrite forcing prefilter, and suggest-only or other existing bypasses if present.","Only after predicate tests pass, replace duplicated or inline conditionals at call sites with the helper and keep phase selection unchanged.","Add comments/Javadoc only for the policy reason and CCS boundary, not for mechanics.","Run focused search action tests, then a broader server test target if the focused set passes."],"tests":["TransportSearchActionTests: add or extend tests for pre_filter_shard_size threshold semantics, including equality boundary if current behavior uses greater-than rather than greater-than-or-equal.","TransportSearchActionTests or new policy tests: cover unset pre_filter_shard_size with shard count default threshold behavior.","CanMatchPreFilterSearchPhaseTests: preserve match-none rewrite behavior and shard skip results.","CanMatchPreFilterSearchPhaseTests/SearchPhaseController tests: preserve primary-field sort shard ordering/skipping behavior.","Existing CCS tests: cover ccs_minimize_roundtrips=true and false so remote can-match/pre-filter placement does not change."],"validation_commands":["./gradlew :server:test --tests org.elasticsearch.action.search.TransportSearchActionTests","./gradlew :server:test --tests org.elasticsearch.action.search.CanMatchPreFilterSearchPhaseTests","./gradlew :server:spotlessJavaCheck"],"risks":["CodeGraph evidence was unavailable: get_change_pack timed out twice due Postgres/backend startup failure, so files and symbols are unverified and must be treated as candidate anchors.","The exact primary-field sort symbol and test class names may differ; confirm before editing.","CCS minimize-roundtrips behavior is high-risk because moving the predicate across local/remote shard discovery can alter network roundtrips or can-match execution location.","Boundary semantics for pre_filter_shard_size are easy to regress; preserve the exact existing comparison and default threshold.","Match-none rewrite may depend on rewrite context or request source state; keep extraction pure and avoid triggering rewrites earlier than today."]}
```

Idea checks: 6/8 (0.750)

Critical misses: file:server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java, file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, symbol:shouldPreFilterSearchShards, symbol:setPreFilterShardSize, symbol:getPreFilterShardSize, symbol:shouldMinimizeRoundtrips, symbol:hasPrimaryFieldSort, term:canRewriteToMatchNone

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\elasticsearch-elasticsearch-search-prefilter-refactor-plan-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
```
Daily task: refactor planning. We want to make the search pre-filter/can-match decision easier to maintain without changing behavior. Analyze the current pre_filter_shard_size, primary-field sort, match-none rewrite, and CCS minimize-roundtrips logic, then propose a safe refactor plan. Return valid compact JSON only with keys: refactor_goal, current_flow, files, symbols, safe_steps, tests, validation_commands, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\elasticsearch
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\elasticsearch, task_type=implement, budget_tokens=1800, quality_rubric=["Preserves current behavior and names invariants before refactor steps.","Scopes refactor around exact source and tests.","Includes validation for threshold, sort, rewrite, and CCS behavior."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: scope, owner_flow, files_to_change, symbols, implementation_steps, existing_tests, test_plan, validation_commands, compatibility_risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_change_pack(task=<original Daily task only>, changeType=implement, tokenBudget=8000, maxFiles=20, maxSymbols=50, includeTests=true, includeSnippets=false, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget before fallback: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "Analyze|pre_filter_shard_size|CCS|Preserves|Scopes|RestSearchAction|parseSearchRequest|allowPartialSearchResults|defaultAllowPartialSearchResults|TransportSearchAction|SearchRequest|shouldPreFilterSearchShards|setPreFilterShardSize|getPreFilterShardSize|shouldMinimizeRoundtrips|hasPrimaryFieldSort|RestSearchActionTests|TransportSearchActionTests" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"refactor_goal":"Make the search can-match/pre-filter decision a small, named, testable policy while preserving current REST params, SearchRequest state, CCS routing, shard-threshold semantics, primary-field-sort forcing, and match-none rewrite behavior.","current_flow":["REST builds a SearchRequest, parses params/body through RestSearchAction.parseSearchRequest, then executes TransportSearchAction.TYPE via RestCancellableNodeClient; evidence: server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:133, server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:147.","TransportSearchAction owns the node default action.search.pre_filter_shard_size.default from SearchRequest.DEFAULT_PRE_FILTER_SHARD_SIZE and stores defaultPreFilterShardSize; evidence: server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:164, server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:184, server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:238.","The current can-match gate is centered on TransportSearchAction.shouldPreFilterSearchShards and depends on explicit/default pre_filter_shard_size, shard count, search type, primary-field sort via FieldSortBuilder.hasPrimaryFieldSort, and query rewrite cases that can produce match_none before the full search.","CCS minimize-roundtrips must stay separate from local pre-filter policy: TransportSearchAction has CCS remote-reduce tests covering remote cluster execution/merge paths; evidence: server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java:514, server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java:587."],"files":["server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java","server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java","server/src/main/java/org/elasticsearch/search/sort/FieldSortBuilder.java","server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java","server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java","server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java","server/src/test/java/org/elasticsearch/action/search/SearchRequestTests.java"],"symbols":["RestSearchAction.parseSearchRequest","TransportSearchAction.TYPE","TransportSearchAction.DEFAULT_PRE_FILTER_SHARD_SIZE","TransportSearchAction.defaultPreFilterShardSize","TransportSearchAction.shouldPreFilterSearchShards","FieldSortBuilder.hasPrimaryFieldSort","SearchRequest.getPreFilterShardSize","SearchRequest.setPreFilterShardSize","SearchRequest.DEFAULT_PRE_FILTER_SHARD_SIZE","CanMatchPreFilterSearchPhase","TransportSearchAction.ccsRemoteReduce","TransportSearchAction.CCSActionListener","SearchResponse.Clusters"],"safe_steps":["Add characterization tests before refactoring: explicit pre_filter_shard_size threshold, default threshold, primary-field sort forcing can-match, match_none rewrite pruning, and ccs_minimize_roundtrips true/false not changing local pre-filter decisions.","Extract only the boolean decision from TransportSearchAction.shouldPreFilterSearchShards into a package-private static helper or small package-private policy class in org.elasticsearch.action.search; keep inputs primitive/request-derived and keep the public SearchRequest/REST/wire names unchanged.","Name invariants in the helper: explicit threshold overrides node default; can-match is not a substitute for unsupported search types; primary-field sort keeps its existing fast path; match-none rewrite remains in can-match execution, not REST parsing; CCS minimize-roundtrips chooses remote execution shape, not the local predicate.","Have TransportSearchAction call the helper at the existing call site and pass the same defaultPreFilterShardSize value; do not move parsing from RestSearchAction or serialization fields from SearchRequest.","After tests pass, optionally rename local variables around the helper to separate decision inputs from execution paths, leaving CCS remote-reduce/minimize code untouched except for comments if tests show ambiguity."],"tests":["Extend TransportSearchActionTests around shouldPreFilterSearchShards for explicit threshold boundary: numShards == threshold is unchanged and numShards > threshold prefilters.","Add/keep a TransportSearchActionTests case proving FieldSortBuilder.hasPrimaryFieldSort forces the same decision as today even below the default shard threshold.","Add/keep a can-match phase test where query rewrite becomes match_none and the shard is skipped, proving the refactor did not move rewrite behavior into the predicate.","Add RestSearchActionTests coverage that pre_filter_shard_size and ccs_minimize_roundtrips still parse into SearchRequest without changing existing defaults.","Keep CCS tests such as TransportSearchActionTests.testCCSRemoteReduce* to ensure minimize-roundtrips/remote-reduce paths are not coupled to the local pre-filter helper."],"validation_commands":["./gradlew :server:test --tests org.elasticsearch.action.search.TransportSearchActionTests","./gradlew :server:test --tests org.elasticsearch.rest.action.search.RestSearchActionTests","./gradlew :server:test --tests org.elasticsearch.action.search.SearchRequestTests","./gradlew :server:spotlessJavaCheck"],"risks":["TokenOpt packet bf23fcf2-2d84-4e92-8351-325cb31245d0 marked answerable=false for missing target-specific evidence; CodeGraph get_change_pack timed out on its Postgres backend, so bounded shell fallback was used.","Fallback evidence hit RestSearchAction and CCS tests, but the exact TransportSearchAction predicate slice was not captured before the shell-call cap; confirm the current method body before editing.","Do not merge CCS minimize-roundtrips and pre-filter policy: they affect different execution layers and accidental coupling can alter cross-cluster fanout behavior.","Changing SearchRequest fields, REST parameter names, or wire serialization would create compatibility risk; keep the refactor internal to TransportSearchAction/policy tests.","Primary-field sort and match-none rewrite are high-risk because they are optimization triggers; characterization tests should fail before any intentional semantic change."]}
```

Idea checks: 7/8 (0.875)

Critical misses: symbol:shouldMinimizeRoundtrips, term:canRewriteToMatchNone

### doughnut / doughnut-recall-business-deepdive

Class: business_deepdive

Prompt:
```
Daily task: business deepdive the learner recall experience. Explain how due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode fit together. Return valid compact JSON only with keys: summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java",
    "backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java",
    "backend/src/main/java/com/odde/doughnut/services/RecallService.java",
    "backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java",
    "backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java",
    "frontend/src/pages/RecallPage.vue",
    "frontend/src/composables/useRecallData.ts",
    "frontend/tests/pages/RecallPage.spec.ts"
  ],
  "symbols": [
    "recalling",
    "answerQuiz",
    "answerSpelling",
    "getDueMemoryTrackers",
    "markAsRecalled",
    "recalledSuccessfully",
    "recallFailed",
    "treadmillMode"
  ],
  "terms": [
    "toRepeat",
    "currentRecallWindowEndAt",
    "nextRecallAt",
    "thinkingTimeMs",
    "spelling"
  ]
}
```

Quality rubric:
- Connects backend recall loading, answer submission, scheduling state, and frontend session behavior.
- Separates spelling and non-spelling paths and names current-window metadata.
- Names existing source and test surfaces.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-business-deepdive | baseline | coding_coverage | coding_coverage | no | no | no | 0.045 | 0.000 | 20 | no | 0 |  | 0 | 74 | 0 | 74 | 734618 | 300016 |
| doughnut | doughnut-recall-business-deepdive | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.091 | 0.500 | 20 | yes | 219809 |  | 3764 | 8 | 8 | 0 | 53082 | 121945 |
| doughnut | doughnut-recall-business-deepdive | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.045 | 0.375 | 21 | yes | 81736 |  | 1699 | 2 | 2 | 0 | 13326 | 89759 |
| doughnut | doughnut-recall-business-deepdive | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | no | 0.727 | 0.750 | 6 | yes | 200491 |  | 7451 | 5 | 2 | 3 | 267726 | 209651 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-baseline.jsonl

Codex prompt used:
```
Daily task: business deepdive the learner recall experience. Explain how due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode fit together. Return valid compact JSON only with keys: summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```
Spelling is not just another MCQ: it has its own tracker flag, prompt type, text input, and answer endpoint, while normal recall either answers an MCQ prompt or falls back to self-evaluation if no generated question exists. I’m pulling the setup path and tests so the final JSON can separate product behavior from coverage.
```

Idea checks: 0/8 (0.000)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java, file:backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:answerQuiz, symbol:answerSpelling, symbol:getDueMemoryTrackers, symbol:markAsRecalled, symbol:recalledSuccessfully, symbol:recallFailed, symbol:treadmillMode, term:toRepeat, term:currentRecallWindowEndAt, term:nextRecallAt, term:thinkingTimeMs

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-mcp-only.jsonl

Codex prompt used:
```
Daily task: business deepdive the learner recall experience. Explain how due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode fit together. Return valid compact JSON only with keys: summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\doughnut, task_type=research_business, and budget_tokens around 1800.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{"summary":"TokenOpt marked this task answerable=false: target-specific evidence for the learner recall flow was missing, specifically nonSpelling/non-spelling, and exact TokenOpt followups did not return model-visible matched lines. Proven context: Doughnut is a PKM tool, with backend, frontend, e2e_test, cli, packages, infra, scripts, and docs areas; root README identifies it as a personal knowledge management tool. No files were modified.","business_flow":["Known from evidence: Doughnut supports personal knowledge management and likely serves users who capture, organize, recall, and review knowledge; this is grounded in README.md and repo structure evidence E3-E5.","Unresolved from available evidence: due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode could not be safely described as a concrete end-to-end flow because TokenOpt did not expose target-specific code evidence.","Best supported high-level inference: the learner recall experience is a review loop where due items are loaded, the learner answers prompts, the system evaluates the answer path, updates scheduling metadata, and may expose a treadmill-style continuous review mode; this is an inference, not proven by packet evidence."],"core_entities":["Personal knowledge item or note: inferred from PKM purpose in README.md, evidence E3/E5.","Recall/review item: unresolved target entity; no target-specific file evidence returned.","Recall window metadata: requested concept but unresolved in packet evidence.","Schedule/due state: requested concept but unresolved in packet evidence.","Treadmill mode: requested concept but unresolved in packet evidence."],"files":["README.md: repository overview says Doughnut is a PKM tool, evidence E3/E5.","package.json: npm package identity and scripts, evidence E1.","gradle/wrapper/gradle-wrapper.properties: Gradle wrapper version, evidence E1.","cli/tests/InteractiveCliApp.recallStatus.test.tsx: listed as existing test inventory evidence, evidence E4.","backend/: major project area with 579 files, evidence E2/E5.","frontend/: major project area with 579 files, evidence E2/E5.","e2e_test/: major project area with 202 files, evidence E2/E5.","cli/: major project area with 133 files, evidence E2/E5."],"symbols":["nonSpelling: missing target-specific evidence per TokenOpt coverage certificate.","non-spelling: missing target-specific evidence per TokenOpt coverage certificate.","treadmill: exact TokenOpt search was attempted, but no model-visible matched lines were returned.","InteractiveCliApp.recallStatus: inferred from test filename cli/tests/InteractiveCliApp.recallStatus.test.tsx in evidence E4."],"existing_tests":["cli/tests/InteractiveCliApp.recallStatus.test.tsx appears in TokenOpt test inventory, evidence E4.","Other listed CLI tests include InteractiveCliApp.addGmail.test.tsx, setAccessToken, useNotebook, interactive slash command dispatch, and prompt history tests, evidence E4.","No model-visible target-specific backend/frontend/e2e recall tests were returned."],"risks":["Answer is intentionally incomplete because TokenOpt marked answerable=false and target-specific evidence was missing.","Any detailed claim about spelling vs non-spelling grading, scheduling algorithm, current recall window metadata, or treadmill mode would be speculative without readable target files.","TokenOpt search/read followups returned metadata only, so repository-relative citations are limited to packet evidence."],"next_questions":["Which file, route, or symbol owns the learner recall UI/API flow?","Should the next pass target exact symbols for due recall loading, answer submission, current recall window metadata, and treadmill mode separately?","Is treadmill mode a learner-facing product mode, a backend scheduler behavior, or a CLI workflow?"]}
```

Idea checks: 4/8 (0.500)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java, file:backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:answerQuiz, symbol:answerSpelling, symbol:getDueMemoryTrackers, symbol:markAsRecalled, symbol:recalledSuccessfully, symbol:recallFailed, symbol:treadmillMode, term:toRepeat, term:currentRecallWindowEndAt, term:nextRecallAt, term:thinkingTimeMs

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-codegraph-only.jsonl

Codex prompt used:
```
Daily task: business deepdive the learner recall experience. Explain how due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode fit together. Return valid compact JSON only with keys: summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call compile_evidence with task as the complete user request above, taskType=investigate, budgetTokens=8000, maxEvidenceItems=20, and qualityRubric=["Connects backend recall loading, answer submission, scheduling state, and frontend session behavior.","Separates spelling and non-spelling paths and names current-window metadata.","Names existing source and test surfaces."].
- If compile_evidence returns answerable=false, use at most one listed allowedFollowups tool for the most important missing fact.
- If compile_evidence returns answerable=true but the final JSON still lacks concrete file, symbol, or test names required by the user request, use at most one exact CodeGraph followup for that missing named anchor.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"summary":"Unable to complete the learner recall business deepdive from repository evidence because CodeGraph MCP compile_evidence failed twice before returning an answerable packet. No files were modified.","business_flow":[],"core_entities":[],"files":[],"symbols":[],"existing_tests":[],"risks":["Evidence coverage is incomplete: CodeGraph daemon could not reach its Postgres backend and returned timeout errors instead of repository slices.","Shell/read fallback was disabled by the benchmark constraints, so file, symbol, and test names could not be verified without fabricating details."],"next_questions":["Can the CodeGraph Postgres backend be restored so compile_evidence can return the bounded recall evidence packet?"]}
```

Idea checks: 3/8 (0.375)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java, file:backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:answerQuiz, symbol:answerSpelling, symbol:getDueMemoryTrackers, symbol:markAsRecalled, symbol:recalledSuccessfully, symbol:recallFailed, symbol:treadmillMode, term:toRepeat, term:currentRecallWindowEndAt, term:nextRecallAt, term:thinkingTimeMs, term:spelling

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-business-deepdive-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
```
Daily task: business deepdive the learner recall experience. Explain how due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode fit together. Return valid compact JSON only with keys: summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=research_business, budget_tokens=1800, quality_rubric=["Connects backend recall loading, answer submission, scheduling state, and frontend session behavior.","Separates spelling and non-spelling paths and names current-window metadata.","Names existing source and test surfaces."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: entrypoint_or_owner, flow, source_files, symbols, existing_tests, implementation_ideas, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=investigate, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget before fallback: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "Explain|Connects|Separates|markAsRecalled|RecallsController|RecallService|MemoryTracker|ForgettingCurve|MemoryTrackerService|recalling|getDueMemoryTrackers|getMemoryTrackersNeedToRepeat|setCurrentRecallWindowEndAt|currentRecallWindowEndAt|alignByHalfADay|TimestampOperations|RecallPage|treadmillMode" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"summary":"Learner recall is a half-day, user-timezone-aware review loop: backend loads due MemoryTrackers into a lightweight queue, frontend stores queue/window/session flags, answer paths update the relevant tracker, and scheduling is recalculated from correctness, thinking time, and forgetting-curve state. TokenOpt marked the packet not answerable; CodeGraph timed out, so bounded shell fallback supplied the concrete repo evidence.","business_flow":["Due loading: RecallsController.recalling accepts timezone and optional dueindays, asserts login, gets current UTC testability time, parses ZoneId, then calls RecallService.getDueMemoryTrackers; see backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39 and backend/src/main/java/com/odde/doughnut/services/RecallService.java:47.","RecallService asks UserService.getMemoryTrackersNeedToRepeat using current time plus dueInDays*24h, maps each due tracker to MemoryTrackerLite{id,spelling}, and returns DueMemoryTrackers with dueInDays,toRepeat,totalAssimilatedCount,currentRecallWindowEndAt; see backend/src/main/java/com/odde/doughnut/services/RecallService.java:39.","Current-window metadata is half-day aligned with TimestampOperations.alignByHalfADay and also bounds previously answered prompts; see backend/src/main/java/com/odde/doughnut/services/RecallService.java:65 and :75.","Non-spelling answers update the non-spelling tracker for the prompt note via MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion, taking thinkingTimeMs from the answer and calling markAsRecalled; see backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:110.","Spelling due items are identified by MemoryTrackerLite.spelling; spelling prompts are reused/created by getSpellingQuestion and answered by answerSpelling, which matchAnswer()s the note text, saves the RecallPrompt answer, then marks that spelling tracker recalled; see backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:152 and :192.","Scheduling state is centralized below MemoryTrackerService.markAsRecalled: MemoryTracker.markAsRecalled updates recall metadata/forgetting curve/nextRecallAt, with failures shortened to 12h and successful recalls using ForgettingCurve/calculateNextRecallAt; see backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:101 and :115.","Frontend session state lives in useRecallData: toRepeat,currentRecallWindowEndAt,totalAssimilatedCount,currentIndex,toRepeatCount,pause/resume,diligentMode,treadmillMode, and a due-recals refresh nonce; see frontend/src/composables/useRecallData.ts:5.","Treadmill mode appears to be a frontend session overlay stored beside the due queue, not backend scheduling metadata; tests mock it around RecallPage/session options, but the exact branch was not fully re-read under fallback limits."],"core_entities":["MemoryTracker: per-user note recall state, spelling flag, forgettingCurveIndex,nextRecallAt,assimilatedAt.","RecallPrompt: question instance with answer/thinking time and MemoryTracker link.","Answer: correctness, spellingAnswer, thinkingTimeMs input to scheduling.","DueMemoryTrackers: dueInDays,toRepeat,totalAssimilatedCount,currentRecallWindowEndAt.","MemoryTrackerLite: memoryTrackerId plus spelling boolean for UI path selection.","ForgettingCurve: schedules next review after success/failure.","useRecallData: frontend shared recall queue/session store, including treadmillMode and currentRecallWindowEndAt."],"files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39","backend/src/main/java/com/odde/doughnut/services/RecallService.java:39","backend/src/main/java/com/odde/doughnut/services/RecallService.java:47","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:110","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:129","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:192","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:101","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:115","backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java:9","backend/src/main/java/com/odde/doughnut/controllers/dto/MemoryTrackerLite.java:9","frontend/src/composables/useRecallData.ts:5","frontend/tests/pages/RecallPage.spec.ts:201"],"symbols":["RecallsController.recalling","RecallService.getDueMemoryTrackers","RecallService.getMemoryTrackersNeedToRepeat","RecallService.getPreviouslyAnsweredRecallPrompts","UserService.getMemoryTrackersNeedToRepeat","DueMemoryTrackers.currentRecallWindowEndAt","MemoryTrackerLite.spelling","MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion","MemoryTrackerService.markAsRecalled","MemoryTrackerService.answerSpelling","MemoryTrackerService.getSpellingQuestion","MemoryTracker.markAsRecalled","MemoryTracker.calculateNextRecallAt","ForgettingCurve","TimestampOperations.alignByHalfADay","useRecallData.treadmillMode"],"existing_tests":["backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java covers recall service scheduling/due behavior.","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java covers tracker answer/update behavior.","frontend/tests/pages/RecallPage.spec.ts covers RecallPage store/API behavior and answerSpelling references.","frontend/tests/recall/Quiz.spec.ts covers quiz/spelling answer API usage.","frontend/tests/toolbars/MainMenu.spec.ts covers currentRecallWindowEndAt display state; frontend/tests/components/recall/RecallSessionOptionsDialog.spec.ts covers treadmillMode state."],"risks":["CodeGraph get_flow_pack timed out and TokenOpt answerable=false; bounded shell fallback was used, so exact RecallPage treadmill branch coverage is incomplete.","Treadmill mode source behavior is only evidenced as shared frontend state plus tests, not backend scheduling.","Timezone and half-day alignment make currentRecallWindowEndAt sensitive to client timezone correctness.","Wrong-answer threshold counts by note, so spelling and non-spelling failures may interact across paths.","Generated frontend API types must stay synced with backend DTO fields like currentRecallWindowEndAt and MemoryTrackerLite.spelling."],"next_questions":["What is the intended treadmill behavior when the due queue empties: loop current items, auto-refresh, or pull future-due items?","Should currentRecallWindowEndAt be display-only status, or should it gate recall completion/session refresh?","Should spelling and non-spelling trackers for the same note influence each other's wrong-answer threshold?","Which UX metric matters most: due completion rate, recall accuracy, thinking time, or treadmill session length?"]}
```

Idea checks: 6/8 (0.750)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java, file:frontend/src/pages/RecallPage.vue, symbol:answerQuiz, symbol:recalledSuccessfully, symbol:recallFailed

### doughnut / doughnut-recall-forecast-pbi-investigate

Class: pbi_investigate

Prompt:
```
Daily task: investigate this PBI before planning edits. PBI: As a learner, I want the Recall page to show how many recall items are due now and how many more would be loaded from the next 3, 7, and 14 days, so that I can decide whether to continue recalling without blindly clicking each load-more button. Acceptance criteria: the recall API exposes forecast counts for due windows 0, 3, 7, and 14 days using the same timezone and half-day alignment rules as current recall loading; counts are monotonic by window and exclude deleted/removed trackers; existing Load more from next 3/7/14 days behavior remains compatible; Recall page done state/buttons display forecast counts without breaking treadmill mode or current-session progress. Return valid compact JSON only with keys: pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java",
    "backend/src/main/java/com/odde/doughnut/services/RecallService.java",
    "backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java",
    "frontend/src/pages/RecallPage.vue",
    "frontend/src/composables/useRecallData.ts",
    "frontend/tests/pages/RecallPage.spec.ts"
  ],
  "symbols": [
    "recalling",
    "getDueMemoryTrackers",
    "DueMemoryTrackers",
    "loadMore",
    "loadCurrentDueRecalls",
    "setCurrentRecallWindowEndAt"
  ],
  "terms": [
    "dueindays",
    "currentRecallWindowEndAt",
    "treadmillMode",
    "Load more from next 3 days",
    "monotonic"
  ]
}
```

Quality rubric:
- Translates the PBI into backend API/DTO/service and frontend recall-page impacts.
- Preserves Load more and treadmill/current-session behavior as compatibility constraints.
- Identifies monotonicity and timezone/half-day risks.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-forecast-pbi-investigate | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 17 | no | 0 |  | 0 | 57 | 0 | 57 | 597359 | 300015 |
| doughnut | doughnut-recall-forecast-pbi-investigate | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.222 | 0.625 | 14 | yes | 134137 |  | 2975 | 3 | 3 | 0 | 33166 | 90902 |
| doughnut | doughnut-recall-forecast-pbi-investigate | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.222 | 0.625 | 14 | yes | 82228 |  | 2748 | 2 | 2 | 0 | 13310 | 105141 |
| doughnut | doughnut-recall-forecast-pbi-investigate | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | no | 0.722 | 0.875 | 5 | yes | 234207 |  | 10680 | 5 | 2 | 3 | 607425 | 267686 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-baseline.jsonl

Codex prompt used:
```
Daily task: investigate this PBI before planning edits. PBI: As a learner, I want the Recall page to show how many recall items are due now and how many more would be loaded from the next 3, 7, and 14 days, so that I can decide whether to continue recalling without blindly clicking each load-more button. Acceptance criteria: the recall API exposes forecast counts for due windows 0, 3, 7, and 14 days using the same timezone and half-day alignment rules as current recall loading; counts are monotonic by window and exclude deleted/removed trackers; existing Load more from next 3/7/14 days behavior remains compatible; Recall page done state/buttons display forecast counts without breaking treadmill mode or current-session progress. Return valid compact JSON only with keys: pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```

```

Idea checks: 0/8 (0.000)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:DueMemoryTrackers, symbol:loadMore, symbol:loadCurrentDueRecalls, symbol:setCurrentRecallWindowEndAt, term:dueindays, term:currentRecallWindowEndAt, term:treadmillMode, term:Load more from next 3 days, term:monotonic

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-mcp-only.jsonl

Codex prompt used:
```
Daily task: investigate this PBI before planning edits. PBI: As a learner, I want the Recall page to show how many recall items are due now and how many more would be loaded from the next 3, 7, and 14 days, so that I can decide whether to continue recalling without blindly clicking each load-more button. Acceptance criteria: the recall API exposes forecast counts for due windows 0, 3, 7, and 14 days using the same timezone and half-day alignment rules as current recall loading; counts are monotonic by window and exclude deleted/removed trackers; existing Load more from next 3/7/14 days behavior remains compatible; Recall page done state/buttons display forecast counts without breaking treadmill mode or current-session progress. Return valid compact JSON only with keys: pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\doughnut, task_type=research_business, and budget_tokens around 1800.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{"pbi_summary":"Learners need Recall to show forecast counts for due-now, next-3-day, next-7-day, and next-14-day recall windows before choosing whether to continue. TokenOpt did not mark the packet answerable because target-specific recall/load-more/half-day evidence was missing.","business_flow":["Known from repository packet: Doughnut is a PKM tool; README.md identifies it as a personal knowledge management tool, and the user-provided PBI places Recall inside spaced repetition learning.","Requested flow: Recall loads currently due items, then lets the learner expand availability from next 3/7/14 days; the PBI asks those same expansion windows to expose counts first.","Evidence used: E3 README.md, E5 README.md/docs inventory, plus user PBI text."],"acceptance_criteria":["API returns forecast counts for windows 0, 3, 7, and 14 days.","Forecast counting must reuse current recall loading timezone and half-day alignment rules.","Counts must be monotonic by window: 0 <= 3 <= 7 <= 14.","Counts must exclude deleted/removed trackers.","Existing next-3/7/14-day load-more behavior remains compatible.","Recall page done state/buttons show forecast counts without breaking treadmill mode or current-session progress."],"impacted_files":["Unresolved from evidence: TokenOpt packet listed broad areas backend/ and frontend/ but did not expose target-specific recall files.","Repository evidence cites generated API/package areas: packages/generated/doughnut-backend-api/package.json and packages/doughnut-api/tsconfig.json from E4, but no recall endpoint file was confirmed.","Repository evidence cites frontend as a major area from E2/E5, but no Recall page file was confirmed."],"symbols":["Unresolved: recall API route/controller/service symbols were not visible in the packet.","Unresolved: current timezone or half-day alignment helper symbol was not visible in the packet.","Unresolved: deleted/removed tracker filter symbol was not visible in the packet.","Unresolved: frontend Recall page load-more/treadmill/current-session symbols were not visible in the packet."],"unknowns":["TokenOpt answerable=false; target-specific evidence missing for Acceptance, Load, loadMore, load-more, and halfDay.","Allowed exact searches for \"Load more\" and \"loadMore\" returned only raw artifact metadata, with no model-visible matches to cite.","Current API response shape, generated TypeScript client update path, and tests for recall windows remain unconfirmed.","Exact definition of 'more would be loaded' is unresolved: incremental count beyond the current loaded set vs cumulative count through the selected window."],"risks":["Implementing counts separately from existing loading logic could drift from timezone/half-day behavior.","Non-monotonic counts may appear if deleted/removed tracker filters differ by window or query path.","Adding forecast data to API responses may require OpenAPI/generated client updates; impacted generated files are not confirmed.","UI count display could confuse current-session progress if counts include items already completed in the active session.","Treadmill mode may have separate loading/progress semantics not visible in the evidence."],"next_steps":["Run exact TokenOpt follow-up when available for likely target terms: recall, halfDay, dueBefore, treadmill, currentSession, removed tracker, deleted tracker.","Confirm backend recall loading query and reuse it for forecast counts, preferably through a shared count/load window calculation.","Confirm API contract and generated client workflow before planning edits.","Confirm Recall page done/buttons state and treadmill/current-session tests before implementation planning."]}
```

Idea checks: 5/8 (0.625)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:DueMemoryTrackers, symbol:loadCurrentDueRecalls, symbol:setCurrentRecallWindowEndAt, term:dueindays, term:currentRecallWindowEndAt, term:treadmillMode

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-codegraph-only.jsonl

Codex prompt used:
```
Daily task: investigate this PBI before planning edits. PBI: As a learner, I want the Recall page to show how many recall items are due now and how many more would be loaded from the next 3, 7, and 14 days, so that I can decide whether to continue recalling without blindly clicking each load-more button. Acceptance criteria: the recall API exposes forecast counts for due windows 0, 3, 7, and 14 days using the same timezone and half-day alignment rules as current recall loading; counts are monotonic by window and exclude deleted/removed trackers; existing Load more from next 3/7/14 days behavior remains compatible; Recall page done state/buttons display forecast counts without breaking treadmill mode or current-session progress. Return valid compact JSON only with keys: pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call compile_evidence with task as the complete user request above, taskType=investigate, budgetTokens=8000, maxEvidenceItems=20, and qualityRubric=["Translates the PBI into backend API/DTO/service and frontend recall-page impacts.","Preserves Load more and treadmill/current-session behavior as compatibility constraints.","Identifies monotonicity and timezone/half-day risks."].
- If compile_evidence returns answerable=false, use at most one listed allowedFollowups tool for the most important missing fact.
- If compile_evidence returns answerable=true but the final JSON still lacks concrete file, symbol, or test names required by the user request, use at most one exact CodeGraph followup for that missing named anchor.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"pbi_summary":"Add recall forecast counts so learners can see items due now and additional items available from the next 3, 7, and 14 days before pressing load-more buttons.","business_flow":["Learner opens Recall page.","Page/API shows current due workload plus forecasted additional workload for 3/7/14 day windows.","Learner decides whether to continue recalling based on visible counts instead of probing each load-more button.","Existing load-more behavior, treadmill mode, and current-session progress must remain compatible."],"acceptance_criteria":["Recall API exposes forecast counts for due windows 0, 3, 7, and 14 days.","Forecast counts use the same timezone and half-day alignment rules as current recall loading.","Counts are monotonic by window.","Counts exclude deleted or removed trackers.","Existing Load more from next 3/7/14 days behavior remains compatible.","Recall page done state and buttons display forecast counts without breaking treadmill mode or current-session progress."],"impacted_files":[],"symbols":[],"unknowns":["CodeGraph MCP compile_evidence timed out twice while opening its Postgres backend, so no repository evidence packet was available.","Exact recall API endpoint, DTO/response type, service/query path, frontend Recall page component, treadmill-mode symbols, and relevant tests remain unverified.","No repo-relative impacted files could be cited from CodeGraph evidence because the evidence acquisition failed."],"risks":["Implementation could accidentally diverge from current timezone/half-day loading rules if the existing helper/query path is not reused.","Forecast counts could become non-monotonic if each window is counted independently with different filters or boundaries.","Deleted/removed tracker exclusion must match current recall loading semantics, not a new approximation.","UI count display could interfere with done state, treadmill mode, or current-session progress if those states share button visibility/loading logic.","Investigation coverage is incomplete because shell/read fallback was disabled and CodeGraph was unavailable."],"next_steps":["Restore CodeGraph Postgres/daemon health and rerun compile_evidence for this PBI.","Identify the current recall loading endpoint, DTO, service/query, timezone/half-day alignment utility, and deleted/removed tracker filters.","Identify Recall page done-state/load-more/treadmill/current-session components and tests.","Plan the smallest compatible API response extension and frontend display changes after verified file and symbol evidence is available."]}
```

Idea checks: 5/8 (0.625)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:getDueMemoryTrackers, symbol:DueMemoryTrackers, symbol:loadMore, symbol:loadCurrentDueRecalls, symbol:setCurrentRecallWindowEndAt, term:dueindays, term:currentRecallWindowEndAt, term:treadmillMode

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-pbi-investigate-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
```
Daily task: investigate this PBI before planning edits. PBI: As a learner, I want the Recall page to show how many recall items are due now and how many more would be loaded from the next 3, 7, and 14 days, so that I can decide whether to continue recalling without blindly clicking each load-more button. Acceptance criteria: the recall API exposes forecast counts for due windows 0, 3, 7, and 14 days using the same timezone and half-day alignment rules as current recall loading; counts are monotonic by window and exclude deleted/removed trackers; existing Load more from next 3/7/14 days behavior remains compatible; Recall page done state/buttons display forecast counts without breaking treadmill mode or current-session progress. Return valid compact JSON only with keys: pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=research_business, budget_tokens=1800, quality_rubric=["Translates the PBI into backend API/DTO/service and frontend recall-page impacts.","Preserves Load more and treadmill/current-session behavior as compatibility constraints.","Identifies monotonicity and timezone/half-day risks."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: entrypoint_or_owner, flow, source_files, symbols, existing_tests, implementation_ideas, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=investigate, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget before fallback: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "PBI|Recall|Acceptance|API|Load|Translates|DTO|Preserves|Identifies|markAsRecalled|RecallsController|RecallService|MemoryTracker|ForgettingCurve|MemoryTrackerService|recalling|getDueMemoryTrackers|getMemoryTrackersNeedToRepeat" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"pbi_summary":"Expose learner-visible recall forecast counts so the Recall page can show due-now and next 3/7/14-day availability before the learner clicks Load more.","business_flow":["Learner opens RecallPage; existing session state supplies toRepeat/progress and Quiz renders while toRepeatCount != 0.","When toRepeatCount is 0 and not viewing previous answers, RecallPage shows the half-day done message plus Load more from next 3/7/14 days buttons (frontend/src/pages/RecallPage.vue:47).","Those buttons must remain calls to loadMore(3/7/14); forecast text is advisory and should not mutate currentIndex/toRepeat or treadmill skip behavior.","Backend entrypoint is GET /api/recalls/recalling with timezone and optional dueindays, returning DueMemoryTrackers (backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39)."],"acceptance_criteria":["API response includes forecast counts for windows 0,3,7,14 while keeping existing dueindays/toRepeat/currentRecallWindowEndAt fields compatible.","Counts use the same timezone parsing and current TestabilitySettings timestamp as current loading (RecallsController.java:42-51).","Window calculation reuses current loading rules: RecallService shifts current time by dueInDays*24 then delegates to UserService.getMemoryTrackersNeedToRepeat and uses TimestampOperations half-day alignment (backend/src/main/java/com/odde/doughnut/services/RecallService.java:39).","Counts are monotonic: count0 <= count3 <= count7 <= count14; UI may display deltas as how many more per button.","Counts exclude removed/deleted trackers; current evidence shows total assimilated excludes removed and tracker lifecycle has removedFromTracking/deletedAt, but due-query filters need verification.","Recall page displays forecast counts in done state/buttons without breaking diligent mode, treadmill mode, or current-session progress."],"impacted_files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39 - recall API owner for timezone/dueindays response.","backend/src/main/java/com/odde/doughnut/services/RecallService.java:39 - shared due-window service logic and likely forecast-count owner.","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:94 - removedFromTracking creation and softDelete lifecycle evidence.","frontend/src/pages/RecallPage.vue:47 - done state and Load more 3/7/14 buttons; :145 treadmill skip behavior.","frontend/tests/pages/RecallPage.spec.ts:177 - existing recalling refresh tests; :735 loadMore mode tests; :842 done-state test.","backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java:125 - existing getMemoryTrackersNeedToRepeat coverage.","cli/tests/recallStatus.test.ts:16 - CLI mocks RecallsController.recalling response.","open_api_docs.yaml:2181 - generated recall endpoint; :4312 DueMemoryTrackers schema.","packages/generated/doughnut-backend-api/types.gen.ts:719 - generated DueMemoryTrackers type; :2854 recalling response type."],"symbols":["RecallsController.recalling","RecallService.getDueMemoryTrackers","RecallService.getMemoryTrackersNeedToRepeat","RecallService.getToRecallCount","UserService.getMemoryTrackersNeedToRepeat","TimestampOperations.addHoursToTimestamp","TimestampOperations.alignByHalfADay","TimezoneUtils.parseTimezone","TestabilitySettings.getCurrentUTCTimestamp","DueMemoryTrackers","MemoryTrackerLite","MemoryTracker.removedFromTracking","MemoryTracker.deletedAt","RecallPage.loadMore","RecallPage.getCurrentMemoryTrackerIndex","useRecallData"],"unknowns":["Exact backend source file for DueMemoryTrackers DTO was not sliced; generated schema/type confirms the wire DTO exists.","The direct repository/UserService filters for deletedAt and removedFromTracking were not verified in the bounded fallback; ensure forecasts reuse the same due-loader path or proven equivalent query.","The loadMore function body was not sliced, but tests confirm it is exposed and covered for dueInDays 3/0/undefined.","Need product decision on wire shape: cumulative counts per window vs cumulative plus frontend-computed deltas for button labels."],"risks":["CodeGraph get_flow_pack timed out starting daemon/Postgres; TokenOpt did not mark the packet answerable, so bounded shell fallback was used.","Separate forecast queries could drift from current loading semantics, especially timezone and half-day boundaries.","Monotonicity can fail if each window uses different filters, inclusive/exclusive bounds, or stale current timestamps.","Generated OpenAPI/TypeScript changes may break frontend/CLI mocks until regenerated and updated.","Forecast state placed in useRecallData incorrectly could reset current-session progress or affect treadmill skipping of spelling trackers."],"next_steps":["Locate and extend the backend DueMemoryTrackers DTO with forecastCounts for [0,3,7,14] while preserving existing fields.","Implement counts in RecallService by reusing getMemoryTrackersNeedToRepeat for each window or a single equivalent repository count path; assert monotonic and same timezone/half-day alignment.","Regenerate open_api_docs.yaml and packages/generated/doughnut-backend-api types after backend DTO/API change.","Update RecallPage done-state buttons to display counts/deltas, keep loadMore(3/7/14) behavior, and avoid mutating toRepeat/currentIndex until clicked.","Add tests: backend forecast windows/monotonic/deleted-removed exclusion; frontend button labels plus existing loadMore/diligent/treadmill/current-session behavior; update CLI recalling mocks."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:frontend/src/composables/useRecallData.ts, symbol:loadCurrentDueRecalls, symbol:setCurrentRecallWindowEndAt, term:treadmillMode

### doughnut / doughnut-recall-wrong-answer-bug-trace

Class: bug_trace

Prompt:
```
Daily task: bug trace. A regression report says that after a learner answers a recall prompt incorrectly, the next retry is no longer scheduled about 12 hours later. Trace the likely code path and produce a fix handoff. Return valid compact JSON only with keys: summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java",
    "backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java",
    "backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java",
    "backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java",
    "backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java"
  ],
  "symbols": [
    "recallFailed",
    "markAsRecalled",
    "answerQuiz",
    "answerSpelling",
    "TimestampOperations.addHoursToTimestamp"
  ],
  "terms": [
    "12",
    "nextRecallAt",
    "incorrect",
    "thinkingTimeMs",
    "spelling"
  ]
}
```

Quality rubric:
- Starts from the bug symptom and traces controller/service/entity paths.
- Identifies wrong-answer retry scheduling as distinct from success scheduling.
- Names focused regression tests and risks.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-wrong-answer-bug-trace | baseline | ask_or_bypass | artifact_sufficiency | no | yes | no | 0.000 | 0.000 | 15 | no | 0 |  | 0 | 55 | 0 | 55 | 668099 | 300014 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | mcp-only | ask_or_bypass | artifact_sufficiency | yes | no | no | 0.125 | 0.375 | 14 | yes | 52938 |  | 1450 | 1 | 1 | 0 | 11381 | 50438 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | codegraph-only | ask_or_bypass | artifact_sufficiency | no | yes | no | 0.188 | 0.375 | 13 | yes | 78867 |  | 1945 | 2 | 2 | 0 | 13294 | 94581 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | tokenopt-codegraph-hybrid | ask_or_bypass | artifact_sufficiency | yes | yes | no | 0.688 | 0.875 | 5 | yes | 188410 |  | 6083 | 5 | 2 | 3 | 221264 | 184981 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-baseline.jsonl

Codex prompt used:
```
Daily task: bug trace. A regression report says that after a learner answers a recall prompt incorrectly, the next retry is no longer scheduled about 12 hours later. Trace the likely code path and produce a fix handoff. Return valid compact JSON only with keys: summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```
One last check is on the recall-page state transition, because a backend schedule can be correct while the UI fails to reload due trackers. I’ll keep this to the recall components/composables only.
```

Idea checks: 0/8 (0.000)

Critical misses: file:backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java, file:backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java, file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java, file:backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java, symbol:recallFailed, symbol:markAsRecalled, symbol:answerQuiz, symbol:answerSpelling, symbol:TimestampOperations.addHoursToTimestamp, term:12, term:nextRecallAt, term:incorrect, term:thinkingTimeMs, term:spelling

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-mcp-only.jsonl

Codex prompt used:
```
Daily task: bug trace. A regression report says that after a learner answers a recall prompt incorrectly, the next retry is no longer scheduled about 12 hours later. Trace the likely code path and produce a fix handoff. Return valid compact JSON only with keys: summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\doughnut, task_type=investigate, and budget_tokens around 1800.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{"summary":"TokenOpt packet 3403e521-7b76-4a7a-9f26-61c9d166c55d marked this answerable=false; evidence E1 says repository inventory was skipped because no concrete failing test, stack trace, route, file, symbol, line, or repro artifact was provided. No files were modified.","reproduction_path":[],"root_cause_hypotheses":["Unresolved: no grounded repository evidence is available, so any recall scheduling code path or 12-hour retry cause would be speculative."],"files":[],"symbols":[],"tests_to_run":[],"fix_plan":["Provide a concrete failing test, route, file/symbol target, stack trace, diff, PBI, or acceptance criteria, then rerun TokenOpt evidence compilation for a grounded fix handoff."],"risks":["No repository-relative file citations can be supplied from the packet.","Producing a specific code-path fix now would violate the packet instruction to avoid invented entrypoints, call chains, business rules, test commands, or dependencies."]}
```

Idea checks: 3/8 (0.375)

Critical misses: file:backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java, file:backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java, file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java, file:backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java, symbol:recallFailed, symbol:markAsRecalled, symbol:answerQuiz, symbol:answerSpelling, symbol:TimestampOperations.addHoursToTimestamp, term:nextRecallAt, term:incorrect, term:thinkingTimeMs, term:spelling

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-codegraph-only.jsonl

Codex prompt used:
```
Daily task: bug trace. A regression report says that after a learner answers a recall prompt incorrectly, the next retry is no longer scheduled about 12 hours later. Trace the likely code path and produce a fix handoff. Return valid compact JSON only with keys: summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call get_flow_pack with target as the complete user request above, taskType=investigate, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, and profile=full.
- Build the final handoff from flowSteps, files, symbols, evidenceSlices, testsLikelyRelevant, risks, and validation hints.
- If get_flow_pack is missing required rubric coverage (["Starts from the bug symptom and traces controller/service/entity paths.","Identifies wrong-answer retry scheduling as distinct from success scheduling.","Names focused regression tests and risks."]), use at most one exact CodeGraph followup from search_code, find_references, find_tests_for, or get_file_slice for that named missing fact.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"summary":"Blocked: CodeGraph MCP v2 was required and both allowed get_flow_pack attempts failed before returning flowSteps, files, symbols, evidenceSlices, tests, risks, or validation hints. No repository-confirmed code path is available.","reproduction_path":["Unverified conceptual path: learner opens a recall prompt, submits an incorrect answer, then inspects the next scheduled retry time; expected is about 12 hours later, actual is not."],"root_cause_hypotheses":["Unverified: wrong-answer handling may be skipping the retry scheduling branch.","Unverified: wrong-answer handling may be reusing success scheduling logic instead of the distinct 12-hour retry path.","Unverified: persisted review state may be updated without writing the retry due time."],"files":[],"symbols":[],"tests_to_run":[],"fix_plan":["Restore CodeGraph Postgres/daemon availability, then rerun get_flow_pack for this exact bug trace.","Use returned flowSteps/evidenceSlices to identify the controller/service/entity path for recall answer submission.","Patch only the wrong-answer branch so it schedules the next retry about 12 hours later without changing success scheduling.","Add a focused regression test for incorrect recall answer scheduling and keep existing success scheduling tests green."],"risks":["Evidence incomplete because CodeGraph failed with Postgres connection timeouts on both allowed calls.","No repository-relative file citations can be provided without CodeGraph evidence.","No concrete symbols or focused tests can be named without the required evidence packet."]}
```

Idea checks: 3/8 (0.375)

Critical misses: file:backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java, file:backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java, file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java, file:backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java, symbol:recallFailed, symbol:markAsRecalled, symbol:answerQuiz, symbol:answerSpelling, symbol:TimestampOperations.addHoursToTimestamp, term:nextRecallAt, term:thinkingTimeMs, term:spelling

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-wrong-answer-bug-trace-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
```
Daily task: bug trace. A regression report says that after a learner answers a recall prompt incorrectly, the next retry is no longer scheduled about 12 hours later. Trace the likely code path and produce a fix handoff. Return valid compact JSON only with keys: summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=investigate, budget_tokens=1800, quality_rubric=["Starts from the bug symptom and traces controller/service/entity paths.","Identifies wrong-answer retry scheduling as distinct from success scheduling.","Names focused regression tests and risks."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: entrypoint_or_owner, flow, source_files, symbols, existing_tests, implementation_ideas, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=investigate, tokenBudget=8000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=5000, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget before fallback: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "Trace|Starts|Identifies|markAsRecalled|RecallsController|RecallService|MemoryTracker|ForgettingCurve|MemoryTrackerService|recalledSuccessfully|recallFailed" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"summary":"Wrong-answer retry should flow from POST /api/recall-prompts/{recallPrompt}/answer to RecallPromptController.answerQuiz, RecallQuestionService.answerQuestion, MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion, then MemoryTracker.markAsRecalled(false). Evidence shows the entity failure branch still schedules nextRecallAt=currentUTCTimestamp+12h in MemoryTracker.recallFailed, so the likely regression is before or around selecting/updating the tracker, not in the 12h calculation itself.","reproduction_path":["Create or use a due non-spelling recall prompt tied to a MemoryTracker.","Submit an incorrect answer through backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java:63 POST {recallPrompt}/answer.","Verify backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:101 creates Answer then passes answer.getCorrect() to MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion.","After request, inspect the prompt's MemoryTracker.nextRecallAt; expected approximately current UTC timestamp + 12 hours per backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100-103."],"root_cause_hypotheses":["Most likely: backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:112-125 ignores recallPrompt.getMemoryTracker() and instead reloads all trackers for the note, filters non-spelling, and updates findFirst(); if multiple trackers or ordering changed, the answered prompt's tracker may not get the 12h retry.","Possible: Answer.correct may not be false for an incorrect answer after the regression; RecallQuestionService.answerQuestion passes answer.getCorrect() directly, and MemoryTracker.markAsRecalled only enters recallFailed when successful=false.","Less likely: the entity scheduling rule regressed elsewhere; current evidence shows MemoryTracker.recallFailed sets forgettingCurveIndex failed() and nextRecallAt to currentUTCTimestamp plus 12 hours, distinct from recalledSuccessfully which updates lastRecalledAt and uses calculateNextRecallAt."],"files":["backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java","backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/main/java/com/odde/doughnut/services/RecallService.java","backend/src/main/java/com/odde/doughnut/services/UserService.java","backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java"],"symbols":["RecallPromptController.answerQuiz","RecallQuestionService.answerQuestion","AnswerService.createAnswerForQuestion","MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion","MemoryTrackerService.markAsRecalled","MemoryTracker.markAsRecalled","MemoryTracker.recallFailed","MemoryTracker.recalledSuccessfully","MemoryTracker.calculateNextRecallAt","RecallService.getDueMemoryTrackers","UserService.getMemoryTrackersNeedToRepeat","MemoryTrackerRepository.findAllByUserAndNextRecallAtLessThanEqualOrderByNextRecallAt"],"tests_to_run":["Entity regression: MemoryTracker.markAsRecalled(now,false,thinkingTime) increments recallCount and sets nextRecallAt to now+12h, while success uses recalledSuccessfully/calculateNextRecallAt.","Service regression: answering an incorrect normal recall prompt updates recallPrompt.getMemoryTracker(), not an arbitrary first non-spelling tracker for the same note.","Controller/service integration: POST /api/recall-prompts/{id}/answer with an incorrect AnswerDTO persists nextRecallAt about 12 hours after testability current UTC timestamp.","Due-list check: after incorrect answer, the tracker is absent from due-now recalls but appears when current time is advanced by about 12 hours."],"fix_plan":["In MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion, prefer the MemoryTracker already attached to the RecallPrompt for normal recall answers instead of userService.getMemoryTrackersFor(...).stream().findFirst().","Keep the existing spelling separation: only apply the normal-answer path to non-spelling trackers or explicitly reject a spelling tracker on the normal endpoint; spelling remains handled by answer-spelling.","Preserve MemoryTracker.recallFailed as the business rule for wrong answers: failed curve adjustment plus nextRecallAt=currentUTCTimestamp+12h.","Add the service regression before changing code so it fails if the wrong tracker is selected; then add the controller/integration assertion for persisted nextRecallAt.","Run focused backend tests around MemoryTracker, MemoryTrackerService, RecallQuestionService/RecallPromptController, and recall due listing."],"risks":["TokenOpt returned answerable=false due missing concrete failing artifact; CodeGraph get_flow_pack timed out on Postgres connection, so fallback shell was used and exact CodeGraph source slices were unavailable.","Fallback cap was reached after bounded source reads, so existing test class names were not concretely discovered; tests_to_run are focused regression targets, not confirmed existing test identifiers.","Changing MemoryTrackerService to use recallPrompt.getMemoryTracker() must preserve authorization/user ownership assumptions currently implicit in loading trackers for the current user.","If Answer.correct is the actual regression source, fixing tracker selection alone will not restore 12h scheduling; validate with an incorrect-answer integration test."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java, file:backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java, symbol:answerSpelling, symbol:TimestampOperations.addHoursToTimestamp, term:thinkingTimeMs

### doughnut / doughnut-recall-forecast-plan-implement

Class: plan_implement

Prompt:
```
Daily task: plan implementation for the Recall forecast-count PBI. Need API forecast counts for due windows 0, 3, 7, and 14 days, same timezone/half-day rules as current recall loading, monotonic counts excluding deleted/removed trackers, compatible Load more buttons, and UI counts that do not break treadmill mode or current-session progress. Return valid compact JSON only with keys: scope, out_of_scope, impacted_files, symbols, implementation_steps, tests, validation_commands, risks. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java",
    "backend/src/main/java/com/odde/doughnut/services/RecallService.java",
    "backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java",
    "backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java",
    "frontend/src/pages/RecallPage.vue",
    "frontend/tests/pages/RecallPage.spec.ts"
  ],
  "symbols": [
    "recalling",
    "getDueMemoryTrackers",
    "getMemoryTrackersNeedToRepeat",
    "DueMemoryTrackers",
    "loadMore",
    "loadCurrentDueRecalls"
  ],
  "terms": [
    "dueindays",
    "currentRecallWindowEndAt",
    "forecast counts",
    "monotonic",
    "treadmillMode"
  ]
}
```

Quality rubric:
- Scopes backend DTO/service/controller edits and frontend recall-page/composable/test edits.
- Maps each acceptance criterion to code/test surfaces.
- Keeps existing Load more and treadmill/current-session behavior compatible.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-forecast-plan-implement | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 17 | no | 0 |  | 0 | 56 | 0 | 56 | 653010 | 300021 |
| doughnut | doughnut-recall-forecast-plan-implement | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.389 | 1.000 | 11 | yes | 545490 |  | 8651 | 17 | 17 | 0 | 113184 | 268392 |
| doughnut | doughnut-recall-forecast-plan-implement | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.167 | 0.625 | 15 | yes | 78316 |  | 2270 | 2 | 2 | 0 | 13278 | 97537 |
| doughnut | doughnut-recall-forecast-plan-implement | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | yes | 0.889 | 1.000 | 2 | yes | 226491 |  | 7130 | 5 | 2 | 3 | 614072 | 206917 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-baseline.jsonl

Codex prompt used:
```
Daily task: plan implementation for the Recall forecast-count PBI. Need API forecast counts for due windows 0, 3, 7, and 14 days, same timezone/half-day rules as current recall loading, monotonic counts excluding deleted/removed trackers, compatible Load more buttons, and UI counts that do not break treadmill mode or current-session progress. Return valid compact JSON only with keys: scope, out_of_scope, impacted_files, symbols, implementation_steps, tests, validation_commands, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```
I’m also checking generated API and fixture touchpoints, because a new backend DTO changes the generated TypeScript layer and test builders. The plan will include regeneration rather than hand-editing generated files.
```

Idea checks: 0/8 (0.000)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java, file:frontend/src/pages/RecallPage.vue, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:getMemoryTrackersNeedToRepeat, symbol:DueMemoryTrackers, symbol:loadMore, symbol:loadCurrentDueRecalls, term:dueindays, term:currentRecallWindowEndAt, term:forecast counts, term:monotonic, term:treadmillMode

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-mcp-only.jsonl

Codex prompt used:
```
Daily task: plan implementation for the Recall forecast-count PBI. Need API forecast counts for due windows 0, 3, 7, and 14 days, same timezone/half-day rules as current recall loading, monotonic counts excluding deleted/removed trackers, compatible Load more buttons, and UI counts that do not break treadmill mode or current-session progress. Return valid compact JSON only with keys: scope, out_of_scope, impacted_files, symbols, implementation_steps, tests, validation_commands, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\doughnut, task_type=implement, and budget_tokens around 1800.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```json
{"scope":["Plan backend API forecast counts for cumulative due windows [0,3,7,14] days using existing recall due-loading cutoff semantics, timezone handling, and half-day behavior.","Keep existing due-card loading and Load more pagination contract unchanged while exposing forecast counts as additive API data.","Surface counts in recall UI without using them as treadmill/session progress state."],"out_of_scope":["No file modifications in this planning task.","No change to spaced-repetition scheduling logic.","No analytics/history persistence for forecast counts.","No CLI behavior change unless generated API type changes require compatibility fixes."],"impacted_files":[{"path":"backend/src/main/java/com/odde/doughnut/controllers/MemoryTrackerController.java","reason":"Likely API host for due memory tracker loading/count response.","evidence":"E7"},{"path":"backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","reason":"Add/reuse service logic for cumulative forecast counts and existing due filters.","evidence":"E7"},{"path":"backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java","reason":"Add count query or shared predicate for nextRecallAt cutoffs, excluding deleted/removed trackers.","evidence":"E7"},{"path":"backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java","reason":"Add optional forecast-count payload while preserving existing Load more fields.","evidence":"E7"},{"path":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","reason":"Confirm removed/deleted tracker semantics used by repository filtering.","evidence":"E7"},{"path":"backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","reason":"Candidate recall API surface to inspect before choosing endpoint ownership.","evidence":"E5"},{"path":"backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java","reason":"Backend service tests for windows, monotonicity, timezone/half-day reuse, and exclusions.","evidence":"E7"},{"path":"backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java","reason":"API response compatibility tests.","evidence":"E7"},{"path":"frontend/tests/pages/MemoryTrackerPage.spec.ts","reason":"UI count rendering and Load more regression coverage.","evidence":"E7"},{"path":"frontend/tests/pages/MemoryTrackerPageView.spec.ts","reason":"UI state/view tests for counts versus current-session progress.","evidence":"E7"},{"path":"packages/generated/doughnut-backend-api","reason":"Regenerate/update generated TypeScript client after API DTO/OpenAPI change.","evidence":"E1,E4"}],"symbols":[{"name":"getMemoryTrackersNeedToRepeat","file":"backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java","role":"Existing due-loading service behavior to reuse for cutoff semantics.","evidence":"E6"},{"name":"getOneMemoryTrackerNeedToRepeat","file":"backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java","role":"Existing test helper around recall-due selection; evidence includes TimestampOperations and ZoneId.","evidence":"E6"},{"name":"TimestampOperations","file":"backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java","role":"Existing time helper evidence for due-window tests.","evidence":"E6"},{"name":"MemoryTrackerService","file":"backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","role":"Implement forecast-count orchestration.","evidence":"E7"},{"name":"MemoryTrackerRepository","file":"backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java","role":"Implement cumulative count query with existing due/deleted/removed predicates.","evidence":"E7"},{"name":"DueMemoryTrackers","file":"backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java","role":"Carry additive forecast counts without changing card list/page semantics.","evidence":"E7"}],"implementation_steps":["Add a small backend DTO shape such as forecastCountsByDays with keys 0,3,7,14; prefer adding it to DueMemoryTrackers as optional/additive data so existing Load more consumers keep the same list/page fields.","In MemoryTrackerService, add a forecast method that sorts windows [0,3,7,14], derives each cutoff through the same current due-loading time path used by getMemoryTrackersNeedToRepeat, and returns cumulative counts, not per-window deltas.","In MemoryTrackerRepository, reuse the current due-memory-tracker predicate for owner/user, nextRecallAt <= cutoff, and exclusion of deleted notes/removed trackers; implement either four bounded count queries or one grouped query if the existing schema makes that straightforward.","Guarantee monotonicity by defining counts as cumulative due-by-window counts over ascending cutoffs; add a defensive service assertion/test rather than UI-side massaging.","Wire the controller response without changing existing Load more request parameters, page size, card order, or has-more logic.","Regenerate OpenAPI/TypeScript clients after backend DTO changes, then update frontend API consumption to read the additive counts field while leaving current card-loading state untouched.","Render counts as forecast/status metadata only; do not decrement them during treadmill/current-session review and do not use them to compute session progress. Refetch counts only on fresh load or explicit reload, not on every current-session card answer."],"tests":["Backend: MemoryTrackerServiceTest covers windows 0,3,7,14 as cumulative and monotonic.","Backend: MemoryTrackerServiceTest covers timezone/half-day boundary cases by reusing the same due-loading cutoff path; TokenOpt did not find an exact halfDay/half-day symbol, so implementation must verify the actual existing helper before coding.","Backend: MemoryTrackerServiceTest covers deleted notes and removed trackers being excluded from all counts.","Backend: MemoryTrackerControllerTest asserts response includes forecast counts while existing due list, Load more fields, and pagination behavior remain unchanged.","Frontend: MemoryTrackerPage.spec.ts and MemoryTrackerPageView.spec.ts assert counts render and Load more still appends/loads cards without overwriting counts or current-session progress.","Frontend: add treadmill/current-session regression expectations where the existing recall UI source file is identified; TokenOpt surfaced tests but not the exact frontend source file."],"validation_commands":["pnpm backend:test -- --tests com.odde.doughnut.services.MemoryTrackerServiceTest --tests com.odde.doughnut.controllers.MemoryTrackerControllerTest --tests com.odde.doughnut.services.RecallServiceWithSpacedRepetitionAlgorithmTest","pnpm backend:generateOpenAPIDocs","pnpm openAPIToTypeScript","pnpm frontend:test -- MemoryTrackerPage","pnpm frontend:test -- MemoryTrackerPageView"],"risks":["TokenOpt marked the packet answerable=false; exact searches for forecastCount, halfDay, and half-day found no existing symbol, so half-day implementation must be grounded by inspecting the actual due-loading helper during coding.","TokenOpt did not surface the exact frontend source file for treadmill/Load more UI, only nearby tests; resolve that before editing UI code.","Duplicating cutoff math would risk mismatched counts versus current recall loading; the implementation should reuse or extract shared cutoff logic.","Adding counts directly to the due response is safest only if the DTO/OpenAPI change is additive; otherwise use a sibling endpoint to avoid breaking generated clients.","Four count queries may be acceptable, but repository indexes on user/deleted/removed/nextRecallAt should be checked if performance is a concern."]}
```

Idea checks: 8/8 (1.000)

Critical misses: file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java, file:frontend/src/pages/RecallPage.vue, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:loadMore, symbol:loadCurrentDueRecalls, term:dueindays, term:currentRecallWindowEndAt, term:treadmillMode

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-codegraph-only.jsonl

Codex prompt used:
```
Daily task: plan implementation for the Recall forecast-count PBI. Need API forecast counts for due windows 0, 3, 7, and 14 days, same timezone/half-day rules as current recall loading, monotonic counts excluding deleted/removed trackers, compatible Load more buttons, and UI counts that do not break treadmill mode or current-session progress. Return valid compact JSON only with keys: scope, out_of_scope, impacted_files, symbols, implementation_steps, tests, validation_commands, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call get_change_pack with task as the complete user request above, changeType=implement, tokenBudget=8000, maxFiles=20, maxSymbols=50, includeTests=true, includeSnippets=false, and profile=full.
- Build the final plan from get_change_pack.files, symbols, editRanges, testsLikelyRelevant, expectedVerification, invariants, and taskOracle.
- If a required behavior anchor is still missing, use at most one exact CodeGraph followup from search_code, search_symbol, find_tests_for, or get_file_slice for that named anchor.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"scope":["Plan Recall forecast-count work for due windows 0,3,7,14 days using existing recall timezone and half-day cutoff semantics.","Counts must be monotonic across windows, exclude deleted/removed trackers, remain compatible with existing Load more behavior, and not mutate treadmill mode or current-session progress state."],"out_of_scope":["No file modifications in this turn.","No repository-wide redesign of recall scheduling, tracker deletion semantics, treadmill mode, or session progress accounting."],"impacted_files":[],"symbols":[],"implementation_steps":["CodeGraph get_change_pack failed twice because the CodeGraph Postgres backend timed out, so file-level edit ranges could not be retrieved without violating the shell/read fallback constraint.","After CodeGraph is restored, anchor the implementation on the existing recall loading API and reuse its due-date filtering, timezone, and half-day cutoff helpers rather than duplicating date math.","Add a backend forecast-count response for windows [0,3,7,14], computed against the same eligible tracker set as recall loading and excluding deleted notes, deleted trackers, and removed tracker relationships.","Compute counts cumulatively per window so count_0 <= count_3 <= count_7 <= count_14, preferably from one shared query or one normalized eligible set to avoid drift between windows.","Keep pagination/load-more parameters separate from forecast-count calculation so counts represent the full matching population, while existing Load more buttons still page the recall items list normally.","Expose counts in the frontend beside the relevant recall due-window UI without using them as current-session completion state or treadmill queue state.","Use defensive defaults while counts load or fail, preserving existing recall item loading, treadmill controls, and progress display behavior."],"tests":["Backend unit/integration tests for windows 0,3,7,14 using the same timezone and half-day boundary cases as current recall loading.","Backend tests proving deleted/removed trackers are excluded from every window.","Backend tests proving monotonic counts across all windows, including empty, all-overdue, and future-due fixtures.","API compatibility tests proving Load more pagination still returns the same item pages and that forecast counts are not capped by page size.","Frontend tests proving forecast counts render without changing treadmill mode state or current-session progress counters.","Regression tests around count loading failure or absence so existing recall UI remains usable."],"validation_commands":["UNRESOLVED: CodeGraph evidence was unavailable, so repository-specific commands from expectedVerification could not be cited.","Run the existing backend test target covering recall APIs once identified by CodeGraph.","Run the existing frontend test target covering Recall UI once identified by CodeGraph.","Run the repository lint/typecheck commands from .cursor guidance once evidence is available."],"risks":["CodeGraph MCP did not return files, symbols, editRanges, testsLikelyRelevant, expectedVerification, invariants, or taskOracle because its Postgres backend timed out; impacted_files and symbols are intentionally left empty rather than fabricated.","Repository-specific validation commands remain unresolved due the explicit no shell/read fallback constraint.","Main implementation risk is duplicating recall date logic instead of reusing the current loading path; this could break timezone or half-day parity.","UI risk is accidentally binding forecast counts into treadmill queue/session progress state rather than displaying them as passive forecast metadata."]}
```

Idea checks: 5/8 (0.625)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java, file:frontend/src/pages/RecallPage.vue, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:getMemoryTrackersNeedToRepeat, symbol:DueMemoryTrackers, symbol:loadMore, symbol:loadCurrentDueRecalls, term:dueindays, term:currentRecallWindowEndAt, term:treadmillMode

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-plan-implement-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
```
Daily task: plan implementation for the Recall forecast-count PBI. Need API forecast counts for due windows 0, 3, 7, and 14 days, same timezone/half-day rules as current recall loading, monotonic counts excluding deleted/removed trackers, compatible Load more buttons, and UI counts that do not break treadmill mode or current-session progress. Return valid compact JSON only with keys: scope, out_of_scope, impacted_files, symbols, implementation_steps, tests, validation_commands, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=implement, budget_tokens=1800, quality_rubric=["Scopes backend DTO/service/controller edits and frontend recall-page/composable/test edits.","Maps each acceptance criterion to code/test surfaces.","Keeps existing Load more and treadmill/current-session behavior compatible."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: scope, owner_flow, files_to_change, symbols, implementation_steps, existing_tests, test_plan, validation_commands, compatibility_risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_change_pack(task=<original Daily task only>, changeType=implement, tokenBudget=8000, maxFiles=20, maxSymbols=50, includeTests=true, includeSnippets=false, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget before fallback: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "Recall|PBI|Need|API|Load|Scopes|DTO|Keeps|markAsRecalled|RecallsController|RecallService|MemoryTracker|ForgettingCurve|MemoryTrackerService|recalling|getDueMemoryTrackers|getMemoryTrackersNeedToRepeat|setCurrentRecallWindowEndAt" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"scope":["Extend existing GET /api/recalls/recalling in backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java to return forecast counts with the existing DueMemoryTrackers response, avoiding a new Load more API path.","Add forecast counts for due windows [0,3,7,14] to backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java; keep current fields dueInDays,toRepeat,totalAssimilatedCount,currentRecallWindowEndAt unchanged.","Compute counts in backend/src/main/java/com/odde/doughnut/services/RecallService.java using the same cutoff path as getDueMemoryTrackers: add dueInDays*24 hours then apply the existing timezone half-day alignment through UserService/TimestampOperations.","Keep monotonicity by deriving each count from the same next_recall_at<=window cutoff and the existing removed/deleted filters in backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java.","Show counts beside existing Load more buttons in frontend/src/pages/RecallPage.vue without changing loadMore(3/7/14), toRepeatCount, currentIndex, finished, or treadmillMode logic."],"out_of_scope":["Do not change recall scheduling, mark-as-recalled behavior, forgetting-curve math, quiz ordering, or spelling skip behavior.","Do not change current-session progress semantics; forecast counts are informational and must not replace remaining non-spelling count.","Do not include deleted or removed trackers by any alternate frontend filtering path; backend remains authoritative."],"impacted_files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java","backend/src/main/java/com/odde/doughnut/services/RecallService.java","backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java","backend/src/main/java/com/odde/doughnut/services/UserService.java","backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java","open_api_docs.yaml","frontend/src/generated/doughnut-backend-api/","frontend/src/composables/useRecallData.ts","frontend/src/pages/RecallPage.vue","frontend/tests/pages/RecallPage.spec.ts","frontend/tests/toolbars/MainMenu.spec.ts"],"symbols":["RecallsController.recalling","DueMemoryTrackers","RecallService.getDueMemoryTrackers","RecallService.getMemoryTrackersNeedToRepeat","RecallService.getToRecallCount","UserService.getMemoryTrackersNeedToRepeat","MemoryTrackerRepository.findAllByUserAndNextRecallAtLessThanEqualOrderByNextRecallAt","MemoryTrackerRepository.countByUserNotRemoved","TimestampOperations.addHoursToTimestamp","TimestampOperations.alignByHalfADay","RecallPage.loadMore","RecallPage.toRepeatCount","RecallPage.getRemainingNonSpellingCount","useRecallData.setCurrentRecallWindowEndAt","useRecallData.toRepeat","useRecallData.treadmillMode"],"implementation_steps":["Backend DTO: add a compact field such as forecastCountsByDueInDays or recallForecastCounts to DueMemoryTrackers, keyed or listed for 0,3,7,14; keep existing serialized properties backward compatible.","Backend service: in RecallService, add a private constant [0,3,7,14] and method that returns counts for each window by reusing getMemoryTrackersNeedToRepeat(user,currentUTCTimestamp,timeZone,dueInDays).count(), or a repository count query that exactly mirrors byUserIdFrom and the same half-day cutoff helper.","Backend controller: no behavior split is needed; RecallsController.recalling already parses timezone and current UTC once, so the returned DueMemoryTrackers can carry both the requested dueInDays list and all forecast counts from the same timestamp.","Filtering acceptance: if adding a repository count query, base it on MemoryTrackerRepository.byUserIdFrom so removed_from_tracking IS FALSE and deleted_at IS NULL stay identical to existing recall loading.","Monotonic acceptance: generate counts in ascending windows and either assert or normalize only by query semantics; do not subtract current session answered items, because counts are API forecasts at load time.","Frontend state: add forecast-count state to useRecallData only as optional informational data from the latest recalling response; do not mutate toRepeat,currentIndex,previousAnsweredQuestions,finished,or treadmillMode from counts.","RecallPage UI: render existing Load more buttons with labels/counts for 3,7,14 using forecastCounts[window], and leave the click handlers loadMore(3),loadMore(7),loadMore(14) unchanged.","Load-more compatibility: after loadMore receives a DueMemoryTrackers response, update forecast counts alongside setToRepeat/setCurrentRecallWindowEndAt/setDiligentMode, but keep toRepeatCount computed from getRemainingNonSpellingCount so treadmill/current-session progress is unchanged.","Generated API: run pnpm generateTypeScript so open_api_docs.yaml and frontend generated DTO types include the new DueMemoryTrackers field; update test mocks that construct useRecallData or DueMemoryTrackers."],"tests":["Existing coverage found: frontend/tests/pages/RecallPage.spec.ts already mocks RecallsController/useRecallData and covers loadMore dueInDays plus treadmill/current-index cases; extend this file for button count labels and no progress mutation.","Existing coverage found: backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java is the targeted backend service test surface; add cases for 0,3,7,14 forecast counts with timezone half-day boundaries.","Add backend test data with trackers due in each window plus removed_from_tracking/deleted_at trackers; assert counts are monotonic and excluded trackers never count.","Add frontend test that when toRepeatCount is 0 the three Load more buttons still call loadMore(3/7/14) and display API counts without changing currentIndex,finished,or treadmillMode.","Add frontend test/mocks for missing forecast counts to keep older/empty responses rendering buttons safely during generated-client or fixture transitions."],"validation_commands":["pnpm generateTypeScript","./backend/gradlew -p backend test --tests com.odde.doughnut.services.RecallServiceWithSpacedRepetitionAlgorithmTest","pnpm -C frontend vitest run tests/pages/RecallPage.spec.ts tests/toolbars/MainMenu.spec.ts"],"risks":["Evidence note: TokenOpt marked answerable=false for missing target-specific forecast/half-day evidence; CodeGraph get_change_pack timed out waiting for daemon/Postgres, so bounded shell fallback evidence was used.","Using stream count reuse in RecallService is safest for rule parity but may issue four queries; a custom repository count is faster but must duplicate byUserIdFrom and cutoff logic exactly.","Generated API paths under frontend/src/generated/doughnut-backend-api/ may update multiple files; keep generated churn limited to the new DueMemoryTrackers field.","Forecast counts are load-time snapshots and may differ after answering recalls; UI copy should avoid implying live remaining-session progress.","If forecast counts are stored globally in useRecallData, update all existing mocks in frontend tests that construct that composable shape."]}
```

Idea checks: 8/8 (1.000)

Critical misses: file:backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java, symbol:loadCurrentDueRecalls

### doughnut / doughnut-recall-forecast-implement-code-unittest

Class: implement_code_unittest

Prompt:
```
Daily task: implement code + unit tests handoff for Recall forecast counts. Do not edit files in this benchmark; instead return an implementation-ready patch plan with exact files, symbols, DTO shape, backend tests, frontend tests, validation commands, and compatibility risks. Forecast windows are 0, 3, 7, and 14 days; counts use existing due logic/timezone/half-day alignment; deleted/removed trackers excluded; Load more/treadmill/current-session behavior must remain compatible. Return valid compact JSON only with keys: patch_summary, files_to_change, symbols, code_steps, unit_tests, validation_commands, compatibility_risks, open_questions.
```

Expected evidence:
```json
{
  "files": [
    "backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java",
    "backend/src/main/java/com/odde/doughnut/services/RecallService.java",
    "backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java",
    "backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java",
    "frontend/src/pages/RecallPage.vue",
    "frontend/src/composables/useRecallData.ts",
    "frontend/tests/pages/RecallPage.spec.ts"
  ],
  "symbols": [
    "recalling",
    "getDueMemoryTrackers",
    "getToRecallCount",
    "DueMemoryTrackers",
    "loadMore",
    "setCurrentRecallWindowEndAt"
  ],
  "terms": [
    "forecast counts",
    "dueindays",
    "monotonic",
    "deleted",
    "removed"
  ]
}
```

Quality rubric:
- Provides edit-ready backend and frontend steps with exact files and symbols.
- Includes targeted unit/frontend tests and validation commands.
- Preserves compatibility with existing due loading and session state.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-forecast-implement-code-unittest | baseline | coding_coverage | coding_coverage | no | no | no | 0.105 | 0.000 | 16 | no | 0 |  | 0 | 52 | 0 | 52 | 606441 | 300009 |
| doughnut | doughnut-recall-forecast-implement-code-unittest | mcp-only | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 18 | no | 0 |  | 0 | 23 | 23 | 0 | 102582 | 300013 |
| doughnut | doughnut-recall-forecast-implement-code-unittest | codegraph-only | coding_coverage | coding_coverage | no | no | no | 0.158 | 0.250 | 16 | yes | 78298 |  | 1836 | 2 | 2 | 0 | 13262 | 98817 |
| doughnut | doughnut-recall-forecast-implement-code-unittest | tokenopt-codegraph-hybrid | coding_coverage | coding_coverage | no | no | no | 0.789 | 0.875 | 4 | yes | 296820 |  | 9271 | 6 | 3 | 3 | 581366 | 252311 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-baseline.jsonl

Codex prompt used:
```
Daily task: implement code + unit tests handoff for Recall forecast counts. Do not edit files in this benchmark; instead return an implementation-ready patch plan with exact files, symbols, DTO shape, backend tests, frontend tests, validation commands, and compatibility risks. Forecast windows are 0, 3, 7, and 14 days; counts use existing due logic/timezone/half-day alignment; deleted/removed trackers excluded; Load more/treadmill/current-session behavior must remain compatible. Return valid compact JSON only with keys: patch_summary, files_to_change, symbols, code_steps, unit_tests, validation_commands, compatibility_risks, open_questions.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```
Backend deletion is handled by setting `MemoryTracker.deletedAt`, and the repository’s shared user filter already excludes `removed_from_tracking` and `deleted_at`. I’m checking the builder methods so the backend test plan can describe precise fixture setup for removed/deleted forecast exclusions.
```

Idea checks: 0/8 (0.000)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:getToRecallCount, symbol:DueMemoryTrackers, symbol:loadMore, symbol:setCurrentRecallWindowEndAt, term:forecast counts, term:dueindays, term:monotonic

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-mcp-only.jsonl

Codex prompt used:
```
Daily task: implement code + unit tests handoff for Recall forecast counts. Do not edit files in this benchmark; instead return an implementation-ready patch plan with exact files, symbols, DTO shape, backend tests, frontend tests, validation commands, and compatibility risks. Forecast windows are 0, 3, 7, and 14 days; counts use existing due logic/timezone/half-day alignment; deleted/removed trackers excluded; Load more/treadmill/current-session behavior must remain compatible. Return valid compact JSON only with keys: patch_summary, files_to_change, symbols, code_steps, unit_tests, validation_commands, compatibility_risks, open_questions.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\doughnut, task_type=implement, and budget_tokens around 2000.
- For tokenopt_compile_evidence, pass task as the complete user request above.
- Ground the final answer in packet evidence.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
```

Final output:
```
`models` was not the package. Since TokenOpt’s search only confirms the symbol, I’ll avoid naming the repository file as a change target and keep the count method in `AssimilationService` unless implementation reveals an existing query home.
```

Idea checks: 0/8 (0.000)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:getToRecallCount, symbol:DueMemoryTrackers, symbol:loadMore, symbol:setCurrentRecallWindowEndAt, term:forecast counts, term:dueindays, term:monotonic, term:deleted, term:removed

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-codegraph-only.jsonl

Codex prompt used:
```
Daily task: implement code + unit tests handoff for Recall forecast counts. Do not edit files in this benchmark; instead return an implementation-ready patch plan with exact files, symbols, DTO shape, backend tests, frontend tests, validation commands, and compatibility risks. Forecast windows are 0, 3, 7, and 14 days; counts use existing due logic/timezone/half-day alignment; deleted/removed trackers excluded; Load more/treadmill/current-session behavior must remain compatible. Return valid compact JSON only with keys: patch_summary, files_to_change, symbols, code_steps, unit_tests, validation_commands, compatibility_risks, open_questions.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call get_change_pack with task as the complete user request above, changeType=implement, tokenBudget=8000, maxFiles=20, maxSymbols=50, includeTests=true, includeSnippets=false, and profile=full.
- Build the final plan from get_change_pack.files, symbols, editRanges, testsLikelyRelevant, expectedVerification, invariants, and taskOracle.
- If a required behavior anchor is still missing, use at most one exact CodeGraph followup from search_code, search_symbol, find_tests_for, or get_file_slice for that named anchor.
- Budget: use at most 2 CodeGraph MCP calls total unless the first tool returns an explicit bounded followup needed to preserve the requested JSON contract.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
```

Final output:
```json
{"patch_summary":"Blocked: CodeGraph MCP v2 get_change_pack was attempted twice as required, but both calls failed before returning repository evidence because the CodeGraph Postgres backend timed out. No files were inspected or edited, so an implementation-ready patch plan with exact repository-relative files/symbols cannot be produced from allowed evidence.","files_to_change":[],"symbols":[],"code_steps":["No code edits planned from current evidence. Re-run get_change_pack after CodeGraph Postgres at 127.0.0.1:54329 is reachable, then build the plan from files, symbols, editRanges, testsLikelyRelevant, expectedVerification, invariants, and taskOracle."],"unit_tests":[],"validation_commands":[],"compatibility_risks":["Coverage incomplete: no CodeGraph files, symbols, editRanges, testsLikelyRelevant, expectedVerification, invariants, or taskOracle were returned.","Cannot verify existing due logic, timezone handling, half-day alignment, deleted/removed tracker filters, or Load more/treadmill/current-session compatibility without CodeGraph evidence.","Risk of naming incorrect files or DTOs if inferred without repository evidence; omitted intentionally to preserve the benchmark constraints."],"open_questions":["Can CodeGraph Postgres be restored so get_change_pack can return the required evidence packet?"]}
```

Idea checks: 2/8 (0.250)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:getToRecallCount, symbol:DueMemoryTrackers, symbol:loadMore, symbol:setCurrentRecallWindowEndAt, term:forecast counts, term:dueindays, term:monotonic

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-forecast-implement-code-unittest-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
```
Daily task: implement code + unit tests handoff for Recall forecast counts. Do not edit files in this benchmark; instead return an implementation-ready patch plan with exact files, symbols, DTO shape, backend tests, frontend tests, validation commands, and compatibility risks. Forecast windows are 0, 3, 7, and 14 days; counts use existing due logic/timezone/half-day alignment; deleted/removed trackers excluded; Load more/treadmill/current-session behavior must remain compatible. Return valid compact JSON only with keys: patch_summary, files_to_change, symbols, code_steps, unit_tests, validation_commands, compatibility_risks, open_questions.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=implement, budget_tokens=2000, quality_rubric=["Provides edit-ready backend and frontend steps with exact files and symbols.","Includes targeted unit/frontend tests and validation commands.","Preserves compatibility with existing due loading and session state."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: scope, owner_flow, files_to_change, symbols, implementation_steps, existing_tests, test_plan, validation_commands, compatibility_risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_change_pack(task=<original Daily task only>, changeType=implement, tokenBudget=8000, maxFiles=20, maxSymbols=50, includeTests=true, includeSnippets=false, profile=full).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Budget before fallback: at most 3 MCP calls total: 1 TokenOpt passport call plus at most 2 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "Recall|DTO|Forecast|Load|Provides|Preserves|markAsRecalled|RecallsController|RecallService|MemoryTracker|ForgettingCurve|MemoryTrackerService|recalling|getDueMemoryTrackers|getMemoryTrackersNeedToRepeat|setCurrentRecallWindowEndAt|currentRecallWindowEndAt|alignByHalfADay" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"patch_summary":"TokenOpt packet 4547c710 answerable=false for Recall-specific evidence; CodeGraph get_change_pack/get_file_slice timed out, so this plan uses allowed bounded shell fallback evidence. Add forecast counts to existing /api/recalls/recalling response without changing request params or toRepeat semantics. Evidence: backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39, backend/src/main/java/com/odde/doughnut/services/RecallService.java:39, backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:63, frontend/src/pages/RecallPage.vue:51.","files_to_change":["backend/src/main/java/com/odde/doughnut/controllers/dto/RecallForecastCountDTO.java new","backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java","backend/src/main/java/com/odde/doughnut/services/RecallService.java","backend/src/test/java/com/odde/doughnut/services/RecallServiceTest.java","frontend/src/pages/RecallPage.vue","frontend/src/pages/RecallPage.test.ts new/inferred","packages/generated/doughnut-backend-api/types.gen.ts generated"],"symbols":["RecallsController.recalling","RecallService.getDueMemoryTrackers","RecallService.getMemoryTrackersNeedToRepeat","RecallService.getToRecallCount","RecallService.FORECAST_WINDOWS new","RecallService.getRecallForecastCounts new","RecallForecastCountDTO new","DueMemoryTrackers.forecastCounts new","MemoryTrackerRepository.findAllByUserAndNextRecallAtLessThanEqualOrderByNextRecallAt","MemoryTrackerRepository.byUserIdFrom","TimestampOperations.alignByHalfADay","frontend RecallPage loadMore","frontend RecallPage forecastCountFor new","RecallsController.recalling generated SDK","DueMemoryTrackers generated type"],"code_steps":["Backend DTO shape: add RecallForecastCountDTO with Lombok @Getter/@Setter fields int dueInDays and int count; add private List<RecallForecastCountDTO> forecastCounts to DueMemoryTrackers. JSON shape: {\"dueInDays\":0,\"currentRecallWindowEndAt\":\"...\",\"toRepeat\":[...],\"totalAssimilatedCount\":N,\"forecastCounts\":[{\"dueInDays\":0,\"count\":N},{\"dueInDays\":3,\"count\":N},{\"dueInDays\":7,\"count\":N},{\"dueInDays\":14,\"count\":N}]}","In RecallService.java keep existing private getMemoryTrackersNeedToRepeat(user,currentUTCTimestamp,timeZone,dueInDays) as the only due source; add FORECAST_WINDOWS=List.of(0,3,7,14), getDueMemoryTrackerCount(...,dueInDays) returning (int)getMemoryTrackersNeedToRepeat(...).count(), and getRecallForecastCounts(...) mapping windows to DTOs.","In RecallService.getDueMemoryTrackers set dueInDays, toRepeat, totalAssimilatedCount, currentRecallWindowEndAt exactly as today, then setForecastCounts(getRecallForecastCounts(...)); do not change ordering or filtering of toRepeat.","Update RecallService.getToRecallCount to call getDueMemoryTrackerCount(...,0) so the current due count and forecast window 0 share the same path.","Do not change RecallsController.recalling signature or query params; it already parses timezone and defaults dueindays null to 0, preserving existing Load more calls.","Run OpenAPI/TS generation so packages/generated/doughnut-backend-api/types.gen.ts contains RecallForecastCountDTO and DueMemoryTrackers.forecastCounts; avoid manual SDK endpoint changes because URL/method are unchanged.","In frontend/src/pages/RecallPage.vue add a local forecastCounts ref and forecastCountFor(days) helper. When the existing RecallsController.recalling response is handled, update forecastCounts from response.forecastCounts ?? [] while leaving setToRepeat, currentIndex, previousAnsweredQuestions, treadmillMode, setCurrentRecallWindowEndAt, and isLoadingMore behavior unchanged.","Update the three Load more buttons to display counts for 3/7/14 days, with missing counts rendered neutrally, and keep @click=\"loadMore(3|7|14)\" unchanged. Optionally use 0-day count only for current due copy/progress if product wants it; do not let it drive current-session state."],"unit_tests":["Backend service: in RecallServiceTest create trackers due now, within 3, within 7, within 14, and after 14; assert forecastCounts windows are exactly 0,3,7,14 and cumulative counts match existing due logic.","Backend exclusion: in RecallServiceTest include deleted_at and removed_from_tracking trackers that would otherwise be due; assert counts exclude them, relying on MemoryTrackerRepository.byUserIdFrom filters seen in MemoryTrackerRepository.java:63.","Backend compatibility: call getDueMemoryTrackers with dueInDays=3 and assert toRepeat still contains only the same MemoryTrackerLite ids/order/spelling expected for that window and currentRecallWindowEndAt remains TimestampOperations.alignByHalfADay output.","Frontend: in RecallPage.test.ts mock RecallsController.recalling to return forecastCounts and assert Load more buttons render 3/7/14 counts and still call the same dueindays values on click.","Frontend compatibility: mock a response without forecastCounts and assert the page still renders Load more buttons and recall flow state without throwing, protecting generated-client/API transition."],"validation_commands":["pnpm openAPIToTypeScript","pnpm backend:test -- --tests com.odde.doughnut.services.RecallServiceTest","pnpm frontend:test -- RecallPage","pnpm backend:lint","pnpm frontend:lint"],"compatibility_risks":["CodeGraph evidence was unavailable; fallback read confirmed controller/service/repository and top RecallPage only, so loadMore implementation below frontend/src/pages/RecallPage.vue:220 must be verified before editing.","Counting via existing stream due logic preserves timezone/half-day/deleted/removed behavior but may run four extra due queries per /recalling request; acceptable for correctness, consider a later repository count query only if measured slow.","Generated TypeScript must be regenerated in lockstep with backend DTO changes or frontend imports will fail.","Do not disable Load more buttons based on forecast counts unless product explicitly wants that; zero-count windows may still be clicked today and should remain compatible.","If DueMemoryTrackers is reused in menu/bootstrap flows, the new field should be additive and nullable-safe for older cached frontend code."],"open_questions":["Exact existing frontend test directory/name was not verified because fallback cap was reached; use the nearest existing Vitest convention if frontend/src/pages/RecallPage.test.ts is not the local pattern.","Product placement assumed: show forecast counts on existing Load more buttons; if counts are intended for a separate recall forecast panel, keep backend DTO unchanged and adjust only the frontend presentation."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, term:monotonic

### doughnut / doughnut-recall-scheduling-code-review

Class: code_review

Prompt:
````
Daily task: code review this proposed patch for recall-answer scheduling. Focus on business correctness, regressions, missing tests, syntax/runtime bugs, and similar logic impact. Return valid compact JSON only with keys: findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.

```diff
diff --git a/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java b/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java
@@ -98,8 +98,8 @@ public class MemoryTracker {
   public void recallFailed(Timestamp currentUTCTimestamp) {
     setForgettingCurveIndex(forgettingCurve().failed());
-    setNextRecallAt(TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, 12));
+    setNextRecallAt(calculateNextRecallAt());
   }
```
Do not modify files.
````

Expected evidence:
```json
{
  "files": [
    "backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java"
  ],
  "symbols": [
    "recallFailed",
    "calculateNextRecallAt",
    "currentUTCTimestamp"
  ],
  "terms": [
    "P1",
    "12",
    "failed",
    "regression",
    "missing tests",
    "changes_requested"
  ]
}
```

Quality rubric:
- Identifies the behavioral regression in wrong-answer retry scheduling.
- Explains why calculateNextRecallAt is not equivalent to a 12-hour retry after failure.
- Checks similar success-path scheduling logic and asks for targeted tests.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Delta vs baseline | Output tok | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-scheduling-code-review | baseline | review_bounded | review_coverage | no | no | yes | 0.909 | 1.000 | 1 | yes | 313409 |  | 6257 | 28 | 0 | 28 | 105392 | 166699 |
| doughnut | doughnut-recall-scheduling-code-review | mcp-only | review_bounded | review_coverage | no | no | yes | 0.909 | 1.000 | 1 | yes | 56546 | 82.0% | 2660 | 1 | 1 | 0 | 27358 | 71829 |
| doughnut | doughnut-recall-scheduling-code-review | codegraph-only | review_bounded | review_coverage | no | no | yes | 1.000 | 1.000 | 0 | yes | 105875 | 66.2% | 2525 | 3 | 3 | 0 | 19869 | 106963 |
| doughnut | doughnut-recall-scheduling-code-review | tokenopt-codegraph-hybrid | review_bounded | review_coverage | no | no | yes | 1.000 | 1.000 | 0 | yes | 325282 | -3.8% | 10864 | 7 | 4 | 3 | 309383 | 298093 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-baseline.jsonl

Codex prompt used:
````
Daily task: code review this proposed patch for recall-answer scheduling. Focus on business correctness, regressions, missing tests, syntax/runtime bugs, and similar logic impact. Return valid compact JSON only with keys: findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.

```diff
diff --git a/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java b/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java
@@ -98,8 +98,8 @@ public class MemoryTracker {
   public void recallFailed(Timestamp currentUTCTimestamp) {
     setForgettingCurveIndex(forgettingCurve().failed());
-    setNextRecallAt(TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, 12));
+    setNextRecallAt(calculateNextRecallAt());
   }
```
Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
````

Final output:
```json
{"findings":[{"title":"[P1] Failed recalls can remain immediately due","file":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","line":102,"body":"The proposed replacement calls calculateNextRecallAt(), which bases nextRecallAt on lastRecalledAt (backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:91), but recallFailed does not update lastRecalledAt and current tests assert wrong answers leave it unchanged (backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java:203, backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java:556). For a due mature tracker, failed() lowers the curve index (backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java:69), so the recalculated interval can point to a timestamp before the failed answer time; the due query then returns it again immediately (backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:26).","confidence":0.97}],"business_coverage":["Failure rescheduling is a business regression: wrong answers should be postponed from the answer time, currently by 12 hours, rather than recomputed from the previous successful recall time.","Successful recall scheduling still uses calculateNextRecallAt() correctly because recalledSuccessfully updates lastRecalledAt before recalculating nextRecallAt."],"similar_logic":["Quiz answers, spelling answers, and the direct mark-as-recalled endpoint all route through MemoryTracker.markAsRecalled() and would share this regression: backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:129, backend/src/main/java/com/odde/doughnut/controllers/MemoryTrackerController.java:97.","MemoryTrackerService.updateForgettingCurve() also uses calculateNextRecallAt(), but it is used after tracker creation where lastRecalledAt is set, so it does not justify using the helper in recallFailed."],"missing_tests":["Add failed-recall tests that assert nextRecallAt is after the failure timestamp, ideally exactly currentUTCTimestamp + 12 hours for both quiz and spelling paths.","Add a mature-card failure case, e.g. forgettingCurveIndex 200 answered wrong at nextRecallAt, to catch recalculation from stale lastRecalledAt."],"files":["backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java","backend/src/main/java/com/odde/doughnut/algorithms/SpacedRepetitionAlgorithm.java","backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java"],"symbols":["MemoryTracker.recallFailed","MemoryTracker.calculateNextRecallAt","MemoryTracker.recalledSuccessfully","ForgettingCurve.failed","SpacedRepetitionAlgorithm.getRepeatInHours","MemoryTrackerRepository.findAllByUserAndNextRecallAtLessThanEqualOrderByNextRecallAt"],"risks":["The current shouldRepeatTheNextDay tests only assert nextRecallAt < current + 25h, so a past timestamp would still pass."],"review_status":"patch is incorrect"}
```

Idea checks: 8/8 (1.000)

Critical misses: term:changes_requested

#### Output: mcp-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-mcp-only.jsonl

Codex prompt used:
````
Daily task: code review this proposed patch for recall-answer scheduling. Focus on business correctness, regressions, missing tests, syntax/runtime bugs, and similar logic impact. Return valid compact JSON only with keys: findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.

```diff
diff --git a/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java b/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java
@@ -98,8 +98,8 @@ public class MemoryTracker {
   public void recallFailed(Timestamp currentUTCTimestamp) {
     setForgettingCurveIndex(forgettingCurve().failed());
-    setNextRecallAt(TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, 12));
+    setNextRecallAt(calculateNextRecallAt());
   }
```
Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use the TokenOpt MCP tool tokenopt_compile_evidence first.
- Call it with cwd=D:\Personal\Projects\doughnut, task_type=review_diff, and budget_tokens around 2000.
- For tokenopt_compile_evidence, pass task as the complete user request above including the full inline unified diff; do not summarize or omit the diff.
- In the final JSON, carry packet facts such as changed_files, changed_symbols, added_calls, removed_calls, and exact_changes into notes or finding evidence even when there is no behavior finding.
- If tokenopt_compile_evidence returns answerable=true, answer from the packet. If it returns answerable=false, use only exact TokenOpt search/read followups for missing named symbols, routes, files, or test evidence.
- Shell is disabled for this benchmark mode; use only TokenOpt MCP tools and state any unresolved evidence honestly.
````

Final output:
```json
{"findings":[{"severity":"P1","file":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","symbol":"MemoryTracker.recallFailed","evidence":["E5","E6"],"message":"Failed recall scheduling no longer uses currentUTCTimestamp or the fixed 12-hour retry window. The diff replaces setNextRecallAt(TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, 12)) with setNextRecallAt(calculateNextRecallAt()), which is a business-behavior change for recall failure retry timing unless calculateNextRecallAt is proven equivalent."}],"business_coverage":{"status":"gap","notes":["Recall failure previously guaranteed nextRecallAt=currentUTCTimestamp+12h; proposed code delegates to calculateNextRecallAt after forgettingCurve().failed(). TokenOpt marked answerable=true with missing=[], but related context was only partial and no business requirement artifact was available."]},"similar_logic":{"changed_files":["backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java"],"changed_symbols":["MemoryTracker","recallFailed"],"added_calls":["setNextRecallAt","calculateNextRecallAt"],"removed_calls":["setNextRecallAt","TimestampOperations.addHoursToTimestamp"],"exact_changes":["- setNextRecallAt(TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, 12));","+ setNextRecallAt(calculateNextRecallAt());"],"notes":["Call replacement semantics checked by TokenOpt: TimestampOperations.addHoursToTimestamp -> calculateNextRecallAt. Config, parser/encoding, resource lifecycle, and async/concurrency probes were not applicable."]},"missing_tests":[{"file":"backend/src/test/java/com/odde/doughnut/entities/MemoryTrackerTest.java","status":"likely_needed","case":"recallFailed(currentUTCTimestamp) should set nextRecallAt exactly 12 hours after currentUTCTimestamp after a failed answer."},{"file":"backend/src/test/java/com/odde/doughnut/entities/MemoryTrackerTests.java","status":"likely_needed","case":"Regression coverage that failed recall scheduling does not depend on prior lastRecallAt or generic successful-recall interval calculation."}],"files":["backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/test/java/com/odde/doughnut/entities/MemoryTrackerTest.java","backend/src/test/java/com/odde/doughnut/entities/MemoryTrackerTests.java","backend/src/test/java/com/odde/doughnut/entities/MemoryTrackerIT.java"],"symbols":["MemoryTracker","recallFailed","calculateNextRecallAt","TimestampOperations.addHoursToTimestamp","setNextRecallAt"],"risks":["Business regression: failed answers may be rescheduled using the normal forgetting-curve calculation instead of the intended 12-hour retry delay.","Runtime/syntax: no compile error is proven from packet evidence, but currentUTCTimestamp becomes unused in recallFailed after the change."],"review_status":"request_changes"}
```

Idea checks: 8/8 (1.000)

Critical misses: term:changes_requested

#### Output: codegraph-only

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-codegraph-only.jsonl

Codex prompt used:
````
Daily task: code review this proposed patch for recall-answer scheduling. Focus on business correctness, regressions, missing tests, syntax/runtime bugs, and similar logic impact. Return valid compact JSON only with keys: findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.

```diff
diff --git a/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java b/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java
@@ -98,8 +98,8 @@ public class MemoryTracker {
   public void recallFailed(Timestamp currentUTCTimestamp) {
     setForgettingCurveIndex(forgettingCurve().failed());
-    setNextRecallAt(TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, 12));
+    setNextRecallAt(calculateNextRecallAt());
   }
```
Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use CodeGraph MCP v2 as the primary code acquisition path.
- When calling any CodeGraph MCP tool, pass task/target as only the original Daily task text above. Do not include this Benchmark constraints section, repository root line, output wrapper instructions, or CodeGraph tool instructions in the MCP arguments.
- First call review_patch with the complete diff/task, outputMode=balanced, includeLikelyTests=true, maxFindings=20, maxEvidencePerFinding=10, and limit=100.
- Build the final review from reviewFindings, risky hunks, impacted flow, testsLikelyRelevant, and validation gaps.
- If review_patch names a missing exact slice, use at most one get_file_slice followup for that slice.
- Budget: use exactly 3 CodeGraph MCP calls total for this task: get_change_pack, anchor search_symbol, and gap-refill search_symbol.
- Do not call legacy codegraph_explore/codegraph_search tool names.
- Treat CodeGraph evidence snippets/slices as already read. Do not repeat the same lookup with grep, repo-wide search, or broad file reads.
- Shell/read fallback is disabled. Use only CodeGraph MCP evidence and mark unresolved risks explicitly when coverage is incomplete.
- Preserve the requested JSON contract. Include unresolved risks when evidence is incomplete.
````

Final output:
```json
{"findings":[{"severity":"P1","file":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","line":101,"symbol":"MemoryTracker.recallFailed","issue":"A failed recall no longer schedules the next attempt at currentUTCTimestamp+12h. The new call to calculateNextRecallAt() drops the explicit currentUTCTimestamp dependency and may schedule according to the post-failure forgetting curve instead of the failure-retry business rule.","impact":"Users who answer incorrectly may be rescheduled too soon, too late, or from stale tracker state rather than exactly 12 hours after the failed answer.","recommendation":"Keep the 12-hour retry behavior unless the product rule intentionally changed, and add tests proving the new expected failure interval."}],"business_coverage":["Patch touches recall-answer failure scheduling only.","Original behavior was explicit: failed recall => nextRecallAt=currentUTCTimestamp+12h.","CodeGraph review evidence was unavailable because the CodeGraph Postgres backend timed out, so broader business-rule confirmation is incomplete."],"similar_logic":["Unable to verify adjacent success/skip/manual scheduling paths because CodeGraph search_symbol calls timed out.","Risk remains that calculateNextRecallAt() is intended for successful recall scheduling and not failure retry scheduling."],"missing_tests":["Unit test for recallFailed asserting nextRecallAt is exactly 12 hours after the supplied currentUTCTimestamp.","Regression test covering high/low forgettingCurveIndex failures so failure scheduling cannot become curve-dependent accidentally.","Test proving recallFailed does not use stale lastRecallAt/previous nextRecallAt when computing next recall."],"files":["backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java"],"symbols":["MemoryTracker.recallFailed","MemoryTracker.calculateNextRecallAt","TimestampOperations.addHoursToTimestamp"],"risks":["CodeGraph review_patch and both search_symbol followups failed with CodeGraph daemon/Postgres connection timeouts; no repository snippets beyond the proposed diff were available.","Line numbers are based on the supplied diff hunk, not verified against the current worktree.","If product requirements changed to make failures curve-based, the finding becomes a missing-test/documentation risk rather than a correctness bug."],"review_status":"changes_requested_incomplete_codegraph"}
```

Idea checks: 8/8 (1.000)

Critical misses: none

#### Output: tokenopt-codegraph-hybrid

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\developer-daily-playbook-2026-06-14\doughnut-doughnut-recall-scheduling-code-review-tokenopt-codegraph-hybrid.jsonl

Codex prompt used:
````
Daily task: code review this proposed patch for recall-answer scheduling. Focus on business correctness, regressions, missing tests, syntax/runtime bugs, and similar logic impact. Return valid compact JSON only with keys: findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.

```diff
diff --git a/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java b/backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java
@@ -98,8 +98,8 @@ public class MemoryTracker {
   public void recallFailed(Timestamp currentUTCTimestamp) {
     setForgettingCurveIndex(forgettingCurve().failed());
-    setNextRecallAt(TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, 12));
+    setNextRecallAt(calculateNextRecallAt());
   }
```
Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use TokenOpt as the quality passport and CodeGraph as the evidence provider.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=review_diff, budget_tokens=2000, quality_rubric=["Identifies the behavioral regression in wrong-answer retry scheduling.","Explains why calculateNextRecallAt is not equivalent to a 12-hour retry after failure.","Checks similar success-path scheduling logic and asks for targeted tests."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: changed_files, changed_symbols, business_mapping, callers_callees, similar_logic, existing_tests, missing_tests, compatibility_risks, findings.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph review_patch(diff/task=<original Daily task/diff only>, outputMode=balanced, includeLikelyTests=true, maxFindings=20, maxEvidencePerFinding=10, limit=100).
- If one required slot is weak, make one exact CodeGraph followup using search_code, search_symbol, find_references, find_tests_for, or get_file_slice for that named missing slot.
- Carry exact CodeGraph evidence into the final answer.
- Then make one required gap-refill search_symbol call with query="ForgettingCurve calculateThinkingTimeAdjustment", includeTests=true, includeSnippets=false, and limit=40.
- The gap-refill result is for missing exact source/method slots. Carry all relevant main_source files and exact calculate*/adjustment/state methods from this result into files, symbols, and existing_coverage.
- If the gap-refill result contains a required source file or method that was absent from the anchor result, include it instead of listing it as unresolved.
- Budget before fallback: at most 4 MCP calls total: 1 TokenOpt passport call plus exactly 3 CodeGraph evidence calls.
- Hybrid fallback gate: use shell only when a CodeGraph MCP call returns an error/timeout/unavailable daemon or when required slots still lack concrete repo-relative files/symbols/tests after the allowed CodeGraph calls.
- Hybrid fallback hard stop: the entire fallback is capped at 3 shell calls. If more evidence would be useful, stop exploration and record the gap as risk/missing_coverage/open_questions instead of calling shell again.
- Fallback command 1 must be one exact bounded search: rg -n -S "Focus|Identifies|Explains|calculateNextRecallAt|Checks|markAsRecalled|RecallsController|RecallService|MemoryTracker|ForgettingCurve|MemoryTrackerService|recalledSuccessfully|recallFailed" --glob '!node_modules/**' --glob '!build/**' --glob '!dist/**' --glob '!target/**' .
- Fallback command 2 must batch all selected reads into one PowerShell command and may read at most 4 small slices around selected hits with Get-Content/Select-Object; do not read whole large files.
- Fallback command 3 is optional and only for targeted tests, using rg against a concrete owner symbol or behavior term plus test/spec file globs.
- Do not use rg --files, broad directory listings, or broad whole-repo reads in hybrid fallback.
- If fallback was used, mention that fact inside an existing risks, notes, missing_coverage, or open_questions field; do not add extra top-level keys unless the requested schema already allows them.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7000 characters. Close every array/object. Prefer short strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
````

Final output:
```json
{"findings":[{"severity":"P1","file":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100","symbol":"MemoryTracker.recallFailed","issue":"Wrong answers stop being scheduled as a 12-hour retry. Current code lowers the curve then sets nextRecallAt=currentUTCTimestamp+12h at MemoryTracker.java:100-103; the patch calls calculateNextRecallAt(), which uses lastRecalledAt+forgettingCurve().getRepeatInHours() at MemoryTracker.java:91-93. recallFailed does not update lastRecalledAt, so a due or late failed answer can remain due or be scheduled in the past instead of retrying in 12h. If lastRecalledAt is null on a failed first recall, the new call can also fail at runtime depending on TimestampOperations.","recommendation":"Keep the fixed 12h failure retry unless the product rule intentionally changes and tests prove nextRecallAt is after currentUTCTimestamp."}],"business_coverage":["Current failure invariant is explicit in MemoryTracker.recallFailed: nextRecallAt=currentUTCTimestamp+12h at backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100-103.","Failure path is reached by MemoryTracker.markAsRecalled(false) at backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:115-122 and by spelling answer handling passing correctness to markAsRecalled at backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:217-230.","ForgettingCurve.failed only reduces/floors the index at backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java:69-71; getRepeatInHours maps the resulting index to the user's spaced repetition algorithm at ForgettingCurve.java:27-32, so it is not equivalent to a fixed retry delay from now."],"similar_logic":["Success scheduling is not analogous: recalledSuccessfully uses calculateNextRecallAt only after setLastRecalledAt(currentUTCTimestamp) at backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:105-113.","calculateNextRecallAt is a helper for lastRecalledAt-based spaced repetition, not a generic retry-from-current-time helper.","Existing related test hits cover success/algorithm/thinking-time behavior: backend/src/test/java/com/odde/doughnut/algorithms/SpacedRepetitionEarlyRewardsAndLatePenaltyTest.java:80-84, backend/src/test/java/com/odde/doughnut/entities/ForgettingCurveThinkingTimeTest.java:62,78, backend/src/test/java/com/odde/doughnut/algorithms/SpacedRepetitionAlgorithmTest.java:17,31-37.","Targeted test search found backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java:217-229 calls markAsRecalled(false), but the visible test name is markAsRecalledShouldNotDeleteMemoryTracker, not failure scheduling."],"missing_tests":["Add MemoryTracker.recallFailed or markAsRecalled(false) unit test: with lastRecalledAt old and current time due/late, assert nextRecallAt == currentUTCTimestamp+12h and > currentUTCTimestamp.","Add regression test that failure lowers forgettingCurveIndex but does not schedule from lastRecalledAt/getRepeatInHours.","Add service/controller test for a wrong normal or spelling answer path to assert persisted nextRecallAt is current+12h.","If first-failure before any successful recall is valid, add a null-lastRecalledAt guard test proving no runtime failure and current+12h scheduling."],"files":["backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","backend/src/test/java/com/odde/doughnut/algorithms/SpacedRepetitionEarlyRewardsAndLatePenaltyTest.java","backend/src/test/java/com/odde/doughnut/algorithms/SpacedRepetitionAlgorithmTest.java","backend/src/test/java/com/odde/doughnut/entities/ForgettingCurveThinkingTimeTest.java","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java","backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java"],"symbols":["MemoryTracker.recallFailed","MemoryTracker.calculateNextRecallAt","MemoryTracker.recalledSuccessfully","MemoryTracker.markAsRecalled","MemoryTracker.lastRecalledAt","MemoryTracker.nextRecallAt","MemoryTracker.forgettingCurveIndex","ForgettingCurve.failed","ForgettingCurve.getRepeatInHours","ForgettingCurve.succeeded","ForgettingCurve.calculateThinkingTimeAdjustment","MemoryTrackerService.markAsRecalled","MemoryTrackerService.answerSpelling","SpacedRepetitionAlgorithm.getRepeatInHours"],"risks":["CodeGraph review_patch, find_references, and required search_symbol gap-refill all timed out on the Postgres/backend daemon; bounded shell fallback was used.","Immediate or past nextRecallAt can requeue a wrong item in the same recall session and skew user workload.","Scheduling becomes dependent on user spaced-repetition intervals and stale lastRecalledAt, changing business behavior per configuration.","Targeted rg did not reveal a 12h failure scheduling assertion; search output was truncated, so absence is not absolute.","Patch leaves currentUTCTimestamp unused in recallFailed; Java syntax likely still compiles, but the unused parameter signals the semantic regression."],"review_status":"changes_requested; TokenOpt marked answerable=true missing=[] packet=9f2ef47b-a9be-432d-9c6e-6c3fe3877523; no files modified."}
```

Idea checks: 8/8 (1.000)

Critical misses: none
