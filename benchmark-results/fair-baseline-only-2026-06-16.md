# Context Governor Suite Benchmark

Generated: 2026-06-16T04:29:32.081Z
Suite: Developer Daily Playbook Suite 2026-06-14
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: baseline
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| hadoop | hadoop-yarn-app-filter-e2e-trace-flow | baseline | coding_coverage | coding_coverage | no | no | yes | 1.000 | 0.875 | 0 | yes | 715103 | 637568 |  | 10708 | 2856 | 728667 | 91099 | 0.110 | 39 | 0 | 39 | 170489 | 316486 |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | baseline | coding_coverage | coding_coverage | no | no | yes | 1.000 | 0.625 | 0 | yes | 1004295 | 866432 |  | 13491 | 5869 | 1023655 | 157223 | 0.064 | 42 | 0 | 42 | 156858 | 405575 |
| elasticsearch | elasticsearch-search-investigate-flow | baseline | coding_coverage | coding_coverage | no | no | yes | 0.800 | 0.875 | 3 | yes | 715701 | 553984 |  | 7408 | 1805 | 724914 | 170930 | 0.047 | 46 | 0 | 46 | 239571 | 307008 |
| elasticsearch | elasticsearch-search-prefilter-performance-analysis | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 14 | no | 0 | 0 |  | 0 | 0 | 0 | 0 | 0.000 | 103 | 0 | 103 | 547424 | 900002 |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | baseline | coding_coverage | coding_coverage | no | no | yes | 0.800 | 0.875 | 3 | yes | 3156954 | 3000192 |  | 14634 | 5182 | 3176770 | 176578 | 0.045 | 70 | 0 | 70 | 709341 | 477739 |
| doughnut | doughnut-recall-business-deepdive | baseline | coding_coverage | coding_coverage | no | no | yes | 0.955 | 0.750 | 1 | yes | 1279756 | 1135104 |  | 13219 | 3880 | 1296855 | 161751 | 0.059 | 69 | 0 | 69 | 668253 | 363428 |
| doughnut | doughnut-recall-forecast-pbi-investigate | baseline | coding_coverage | coding_coverage | no | no | yes | 0.833 | 0.875 | 3 | yes | 1769201 | 1631360 |  | 11507 | 4968 | 1785676 | 154316 | 0.054 | 64 | 0 | 64 | 364139 | 371234 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | baseline | ask_or_bypass | artifact_sufficiency | no | yes | yes | 0.875 | 0.875 | 2 | yes | 2048983 | 1940096 |  | 12265 | 6643 | 2067891 | 127795 | 0.068 | 51 | 0 | 51 | 812303 | 397029 |
| doughnut | doughnut-recall-forecast-pbi-plan | baseline | coding_coverage | coding_coverage | no | no | yes | 0.833 | 1.000 | 3 | yes | 716463 | 630272 |  | 12235 | 7186 | 735884 | 105612 | 0.079 | 46 | 0 | 46 | 639357 | 299649 |
| doughnut | doughnut-recall-forecast-implement-code-unittest | baseline | coding_coverage | coding_coverage | no | no | no | 0.737 | 0.875 | 5 | yes | 1378287 | 1261056 |  | 17800 | 11214 | 1407301 | 146245 | 0.050 | 66 | 0 | 66 | 680199 | 444656 |
| doughnut | doughnut-recall-scheduling-write-unittest-class | baseline | coding_coverage | coding_coverage | no | no | no | 0.778 | 0.750 | 4 | yes | 487500 | 385664 |  | 8515 | 3458 | 499473 | 113809 | 0.068 | 36 | 0 | 36 | 325714 | 230332 |
| doughnut | doughnut-recall-scheduling-security-audit | baseline | review_bounded | review_coverage | no | no | no | 0.538 | 0.875 | 6 | yes | 783611 | 705664 |  | 9648 | 5108 | 798367 | 92703 | 0.058 | 37 | 0 | 37 | 256981 | 263776 |
| doughnut | doughnut-recall-scheduling-code-review | baseline | review_bounded | review_coverage | no | no | yes | 0.909 | 1.000 | 1 | yes | 233822 | 183936 |  | 5441 | 2344 | 241607 | 57671 | 0.158 | 19 | 0 | 19 | 114802 | 143487 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| baseline | 13 | 9/13 | 11/13 | 783611 | 1099206 | 10529 | 1114389 | 119672 | 0.774 | 0.788 | 0.066 | 3.46 | 0.0 | 52.9 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| e2e_trace_flow | baseline | 1 | 1/1 | 1/1 | 715103 | 715103 | 10708 | 728667 | 91099 | 1.000 | 0.875 | 0.110 | 0.00 | 0.0 | 39.0 | 316486 |
| requirement_analysis | baseline | 1 | 1/1 | 0/1 | 1004295 | 1004295 | 13491 | 1023655 | 157223 | 1.000 | 0.625 | 0.064 | 0.00 | 0.0 | 42.0 | 405575 |
| investigate_flow | baseline | 1 | 1/1 | 1/1 | 715701 | 715701 | 7408 | 724914 | 170930 | 0.800 | 0.875 | 0.047 | 3.00 | 0.0 | 46.0 | 307008 |
| performance_analysis | baseline | 1 | 0/1 | 0/1 | 0 | 0 | 0 | 0 | 0 | 0.000 | 0.000 | 0.000 | 14.00 | 0.0 | 103.0 | 900002 |
| refactor_code | baseline | 1 | 1/1 | 1/1 | 3156954 | 3156954 | 14634 | 3176770 | 176578 | 0.800 | 0.875 | 0.045 | 3.00 | 0.0 | 70.0 | 477739 |
| business_deepdive | baseline | 1 | 1/1 | 1/1 | 1279756 | 1279756 | 13219 | 1296855 | 161751 | 0.955 | 0.750 | 0.059 | 1.00 | 0.0 | 69.0 | 363428 |
| pbi_investigate | baseline | 1 | 1/1 | 1/1 | 1769201 | 1769201 | 11507 | 1785676 | 154316 | 0.833 | 0.875 | 0.054 | 3.00 | 0.0 | 64.0 | 371234 |
| bug_trace | baseline | 1 | 1/1 | 1/1 | 2048983 | 2048983 | 12265 | 2067891 | 127795 | 0.875 | 0.875 | 0.068 | 2.00 | 0.0 | 51.0 | 397029 |
| pbi_plan | baseline | 1 | 1/1 | 1/1 | 716463 | 716463 | 12235 | 735884 | 105612 | 0.833 | 1.000 | 0.079 | 3.00 | 0.0 | 46.0 | 299649 |
| implement_code_unittest | baseline | 1 | 0/1 | 1/1 | 1378287 | 1378287 | 17800 | 1407301 | 146245 | 0.737 | 0.875 | 0.050 | 5.00 | 0.0 | 66.0 | 444656 |
| write_unittest_class | baseline | 1 | 0/1 | 1/1 | 487500 | 487500 | 8515 | 499473 | 113809 | 0.778 | 0.750 | 0.068 | 4.00 | 0.0 | 36.0 | 230332 |
| security_audit | baseline | 1 | 0/1 | 1/1 | 783611 | 783611 | 9648 | 798367 | 92703 | 0.538 | 0.875 | 0.058 | 6.00 | 0.0 | 37.0 | 263776 |
| code_review | baseline | 1 | 1/1 | 1/1 | 233822 | 233822 | 5441 | 241607 | 57671 | 0.909 | 1.000 | 0.158 | 1.00 | 0.0 | 19.0 | 143487 |

## Task Details

### hadoop / hadoop-yarn-app-filter-e2e-trace-flow

Class: e2e_trace_flow

Prompt:
```
Daily task: e2e trace flow for YARN RM /ws/v1/cluster/apps filtering by applicationTypes and applicationTags. Trace REST query params to RMWebServices, ApplicationsRequestBuilder, WebServices.parseQueries, GetApplicationsRequest, final RM-side filtering, and tests. Return valid compact JSON only with keys: entrypoint, sequence, invariants, files, symbols, tests_to_run, inferred_edges, risks. Do not modify files.
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
    "getApps",
    "ApplicationsRequestBuilder",
    "withApplicationTypes",
    "withApplicationTags",
    "parseQueries",
    "GetApplicationsRequest"
  ],
  "terms": [
    "applicationTypes",
    "applicationTags",
    "lowercase",
    "comma",
    "sequence"
  ]
}
```

Quality rubric:
- Orders the full flow from REST query params to request object and RM-side matching.
- Separates applicationTypes case normalization from applicationTags parsing behavior.
- Names exact source/test surfaces and marks any inferred edge.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| hadoop | hadoop-yarn-app-filter-e2e-trace-flow | baseline | coding_coverage | coding_coverage | no | no | yes | 1.000 | 0.875 | 0 | yes | 715103 | 637568 |  | 10708 | 2856 | 728667 | 91099 | 0.110 | 39 | 0 | 39 | 170489 | 316486 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\hadoop-hadoop-yarn-app-filter-e2e-trace-flow-baseline.jsonl

Codex prompt used:
```
Daily task: e2e trace flow for YARN RM /ws/v1/cluster/apps filtering by applicationTypes and applicationTags. Trace REST query params to RMWebServices, ApplicationsRequestBuilder, WebServices.parseQueries, GetApplicationsRequest, final RM-side filtering, and tests. Return valid compact JSON only with keys: entrypoint, sequence, invariants, files, symbols, tests_to_run, inferred_edges, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\hadoop
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```json
{"entrypoint":{"method":"GET","path":"/ws/v1/cluster/apps","handler":"RMWebServices#getApps","query_params":["applicationTypes","applicationTags"],"evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWSConsts.java:82","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWSConsts.java:235","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:625"]},"sequence":[{"step":1,"flow":"JAX-RS routes GET /apps and binds @QueryParam(applicationTypes) and @QueryParam(applicationTags) as Set<String>.","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:630","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:641"]},{"step":2,"flow":"RMWebServices builds an AppsCacheKey from raw query values, initializes readable endpoint state, then creates GetApplicationsRequest via ApplicationsRequestBuilder.withApplicationTypes(...).withApplicationTags(...).build().","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:646","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:665"]},{"step":3,"flow":"ApplicationsRequestBuilder normalizes non-null type/tag sets with WebServices.parseQueries(..., false).","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java:125","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java:133"]},{"step":4,"flow":"parseQueries splits each query string on comma, trims blanks, ignores empty tokens, lowercases tokens; enum validation only occurs for isState=true, so app types/tags are not enum-validated.","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java:426"]},{"step":5,"flow":"build() creates GetApplicationsRequest, sets applicationTypes/applicationTags only when normalized sets are non-empty, and returns the request.","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java:208","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java:228"]},{"step":6,"flow":"RMWebServices calls rm.getClientRMService().getApplications(request).getApplicationList().","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:681"]},{"step":7,"flow":"ClientRMService lowers request applicationTypes again, reads applicationTags, then iterates RMContext RMApps.","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java:876","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java:881"]},{"step":8,"flow":"RM-side type filter is exact membership of lowercased RMApp.getApplicationType(); RM-side tag filter is OR semantics: app must have at least one requested tag in application.getApplicationTags().","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java:921","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java:949"]},{"step":9,"flow":"Matching apps become ApplicationReports; RMWebServices post-filters finalStatus/access/deselects and wraps AppInfo in AppsInfo.","evidence":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java:983","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:690"]}],"invariants":["Missing/null/empty applicationTypes or applicationTags, or values containing only commas/blanks, normalize to an empty set and do not filter.","Repeated query params and comma-separated values are unioned through Set<String> plus comma splitting.","applicationTypes are case-insensitive in REST flow because parseQueries lowercases tokens and ClientRMService lowercases app types before comparison.","applicationTags are lowercased in REST parsing and GetApplicationsRequestPBImpl#setApplicationTags; ApplicationSubmissionContextPBImpl also lowercases submitted app tags by default.","applicationTags filtering is any-tag OR, not all-tags AND.","applicationTypes/applicationTags do not validate against a fixed enum in parseQueries(false)."],"files":["hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWSConsts.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServiceProtocol.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-api/src/main/java/org/apache/hadoop/yarn/api/protocolrecords/GetApplicationsRequest.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/api/protocolrecords/impl/pb/GetApplicationsRequestPBImpl.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/api/records/impl/pb/ApplicationSubmissionContextPBImpl.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/TestClientRMService.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/api/TestGetApplicationsRequest.java","hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/api/protocolrecords/impl/pb/TestGetApplicationsRequestPBImpl.java"],"symbols":["RMWSConsts.APPS","RMWSConsts.APPLICATION_TYPES","RMWSConsts.APPLICATION_TAGS","RMWebServices#getApps","ApplicationsRequestBuilder#withApplicationTypes","ApplicationsRequestBuilder#withApplicationTags","ApplicationsRequestBuilder#build","WebServices#parseQueries","GetApplicationsRequest#setApplicationTypes","GetApplicationsRequest#setApplicationTags","GetApplicationsRequestPBImpl#setApplicationTags","ApplicationSubmissionContextPBImpl#setApplicationTags","ClientRMService#getApplications","ClientRMService#getLowerCasedAppTypes","RMApp#getApplicationType","RMApp#getApplicationTags"],"tests_to_run":["mvn -pl hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager -Dtest=TestRMWebServicesApps#testAppsQueryAppTypes test","mvn -pl hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager -Dtest=TestApplicationsRequestBuilder#testRequestWithValidApplicationTypesQuery+testRequestWithValidApplicationTagsQuery+testRequestWithEmptyApplicationTypesQuery+testRequestWithEmptyApplicationTagsQuery test","mvn -pl hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager -Dtest=TestClientRMService#testGetApplications test","mvn -pl hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common -Dtest=TestGetApplicationsRequest,TestGetApplicationsRequestPBImpl test"],"inferred_edges":["JAX-RS repeated params become Set<String>; TestRMWebServicesApps verifies repeated applicationTypes values combine with comma-split values.","Direct REST applicationTags coverage was not found under resourcemanager webapp tests; its REST edge is inferred from RMWebServices builder wiring plus builder/request/ClientRMService tag tests.","Final tag contains() matching is case-sensitive, so correctness relies on lowercasing in REST parseQueries, GetApplicationsRequestPBImpl, and submitted ApplicationSubmissionContext tags.","RMWebServices has a protected getApplicationsReport override to ClientRMService, but this /apps handler directly calls ClientRMService#getApplications."],"risks":["No direct /ws/v1/cluster/apps?applicationTags=... end-to-end RM webservice test was found; behavior is covered indirectly below the REST handler.","AppsCacheKey is built from raw query sets before parseQueries normalization, so semantically equivalent case/spacing/comma forms may cache separately.","applicationTags are OR-matched; callers expecting all requested tags to match would get broader results.","GetApplicationsRequestPBImpl exposes setForceLowerCaseTags(false); non-REST callers using mixed-case tags could bypass the usual lowercasing invariant.","parseQueries(false) accepts arbitrary type/tag strings; misspellings silently become filters that match nothing."]}
```

Idea checks: 7/8 (0.875)

Critical misses: none

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

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| hadoop | hadoop-yarn-app-filter-requirement-analysis | baseline | coding_coverage | coding_coverage | no | no | yes | 1.000 | 0.625 | 0 | yes | 1004295 | 866432 |  | 13491 | 5869 | 1023655 | 157223 | 0.064 | 42 | 0 | 42 | 156858 | 405575 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\hadoop-hadoop-yarn-app-filter-requirement-analysis-baseline.jsonl

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
{"requirement_summary":"Harden the RM apps REST filter parsing for applicationTypes and applicationTags so omitted/null, explicit empty, comma-only/whitespace-only, comma-separated, repeated, and mixed-case inputs are normalized consistently: empty-like input means no filter, non-empty tokens are trimmed/deduplicated and matched without case surprises, and legacy comma-separated/repeated REST clients keep current behavior.","current_behavior":["GET /ws/v1/cluster/apps binds applicationTypes and applicationTags as Set<String> query params in RMWebServices#getApps, then immediately copies them into AppsCacheKey with new HashSet<>(...), which would fail if Jersey or a direct caller supplies null; cited hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java:625,641-648.","ApplicationsRequestBuilder defaults appTypes/appTags to empty sets, skips null inputs, calls WebServices.parseQueries for non-null sets, and only sets GetApplicationsRequest filters when normalized sets are non-empty; cited hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java:45-46,125-137,228-233.","WebServices.parseQueries assumes a non-null Set, ignores null/blank query strings and blank comma tokens, trims tokens, and lowercases every retained token; cited hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java:425-454.","ClientRMService lowercases applicationTypes again and compares against lowercased application.getApplicationType(), making type matching case-insensitive; applicationTags are compared with Set.contains(tag), making service-level matching exact against stored app tags; cited hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java:876-881,921-956,1012-1020.","GetApplicationsRequestPBImpl lowercases requested tags by default via YarnConfiguration.APPLICATION_TAG_FORCE_LOWERCASE_CONVERSION, and ApplicationSubmissionContextPBImpl lowercases submitted tags by default; cited hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/api/protocolrecords/impl/pb/GetApplicationsRequestPBImpl.java:74-80,221-233; hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/api/records/impl/pb/ApplicationSubmissionContextPBImpl.java:94-100,298-310; hadoop-yarn-project/hadoop-yarn/hadoop-yarn-api/src/main/java/org/apache/hadoop/yarn/conf/YarnConfiguration.java:2102-2105.","Existing REST docs advertise applicationTypes and applicationTags as comma-separated filters; cited hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/ResourceManagerRest.md:4501-4502. Existing REST tests cover applicationTypes empty/comma/blank-token/repeated cases but no analogous applicationTags REST coverage; cited hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java:973-1177 and hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java:508-557."],"acceptance_criteria":["For both applicationTypes and applicationTags on /ws/v1/cluster/apps, omitted params, null sets from direct calls, explicit empty values, comma-only values, and whitespace-only values behave exactly like no filter and never throw NullPointerException or BadRequestException.","For both params, comma-separated values and repeated query params are supported together; tokens are split on comma, trimmed, blank tokens discarded, duplicates collapsed, and matching remains OR semantics.","Mixed-case applicationTypes match existing app types case-insensitively and preserve existing response shape and field values.","Mixed-case applicationTags are handled by a documented, consistent normalization rule aligned with YARN tag storage; under default lowercase tag conversion, REST tag queries match regardless of query case.","Cache key construction for getApps is null-safe and should use the same normalized representation as request building, or at minimum avoid changing observable results while not increasing exceptions.","Existing clients that send repeated applicationTypes, comma-separated applicationTypes, empty applicationTypes, or no filter continue to receive the same status codes and result sets covered by current tests.","Implementation includes symmetric coverage for applicationTags matching the existing applicationTypes matrix, including null/empty/whitespace/comma-only/comma-separated/repeated/mixed-case cases."],"impacted_files":[{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/RMWebServices.java","reason":"REST entry point and cache-key construction for applicationTypes/applicationTags."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/ApplicationsRequestBuilder.java","reason":"Builds GetApplicationsRequest from normalized query sets."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/java/org/apache/hadoop/yarn/server/webapp/WebServices.java","reason":"Shared parseQueries comma/blank/lowercase behavior."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/main/java/org/apache/hadoop/yarn/server/resourcemanager/ClientRMService.java","reason":"Final applicationTypes/applicationTags filter matching."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/api/protocolrecords/impl/pb/GetApplicationsRequestPBImpl.java","reason":"Request tag lowercasing and null/empty storage behavior."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/api/records/impl/pb/ApplicationSubmissionContextPBImpl.java","reason":"Submitted tag lowercasing that influences REST tag match semantics."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/util/AppsCacheKey.java","reason":"Cache key includes applicationTypes/applicationTags sets."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestRMWebServicesApps.java","reason":"REST regression tests for app filtering."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/webapp/TestApplicationsRequestBuilder.java","reason":"Builder/parser unit coverage for null/empty/query normalization."},{"file":"hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/ResourceManagerRest.md","reason":"Public REST parameter contract for comma-separated filters."}],"symbols":["RMWebServices#getApps","ApplicationsRequestBuilder#withApplicationTypes","ApplicationsRequestBuilder#withApplicationTags","ApplicationsRequestBuilder#build","WebServices#parseQueries","ClientRMService#getApplications","ClientRMService#getLowerCasedAppTypes","GetApplicationsRequestPBImpl#setApplicationTags","ApplicationSubmissionContextPBImpl#setApplicationTags","AppsCacheKey#newInstance","TestRMWebServicesApps#testAppsQueryAppTypes","TestApplicationsRequestBuilder#testRequestWithNullApplicationTypesQuery","TestApplicationsRequestBuilder#testRequestWithNullApplicationTagsQuery"],"test_strategy":["Expand TestApplicationsRequestBuilder to assert, not just construct, null applicationTypes/applicationTags, empty sets, sets containing empty strings, whitespace-only strings, comma-only strings, mixed blank and real tokens, repeated sets, and mixed-case values; expected empty-like inputs produce the default request and real tokens normalize to lowercase sets.","Add TestRMWebServicesApps coverage for applicationTags parallel to testAppsQueryAppTypes: create apps with tags, verify single tag, repeated params, comma-separated params, empty value, comma/whitespace-only value, mixed blank tokens, and mixed-case query values.","Keep existing applicationTypes REST assertions and add explicit mixed-case type query coverage such as applicationTypes=mapreduce,YaRn to prove no client-visible regression.","Add or extend ClientRMService-level tests for tag matching if the desired case behavior goes beyond default lowercase tag storage.","Suggested focused command after implementation: mvn -pl hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager -Dtest=TestApplicationsRequestBuilder,TestRMWebServicesApps,TestClientRMService test."],"risks":["Case-insensitive tag matching can broaden results for deployments that disabled APPLICATION_TAG_FORCE_LOWERCASE_CONVERSION; keeping lower-case-only matching may leave mixed-case tag semantics surprising in that configuration.","Changing WebServices.parseQueries affects other callers such as appstatistics and AHS if null handling or lowercasing semantics are changed globally.","Normalizing cache keys improves consistency but can alter cache hit patterns; raw and normalized keys must still preserve user identity and every effective filter.","Adding strict validation for blank tokens would break documented comma-separated client patterns; blank tokens should remain ignored."],"open_questions":["Should applicationTags be matched case-insensitively even when yarn.resourcemanager.application-tag-based-placement.force-lowercase is false, or should REST filtering retain the existing lowercase canonical tag contract?","Should the public REST docs be updated to explicitly state blank tokens are ignored and type/tag filters are case-normalized?","Should null safety be implemented centrally in WebServices.parseQueries or locally at RMWebServices#getApps/cache-key construction to minimize behavior changes for other endpoints?"]}
```

Idea checks: 5/8 (0.625)

Critical misses: none

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

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| elasticsearch | elasticsearch-search-investigate-flow | baseline | coding_coverage | coding_coverage | no | no | yes | 0.800 | 0.875 | 3 | yes | 715701 | 553984 |  | 7408 | 1805 | 724914 | 170930 | 0.047 | 46 | 0 | 46 | 239571 | 307008 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\elasticsearch-elasticsearch-search-investigate-flow-baseline.jsonl

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
```json
{"summary":"REST `_search` parses both parameters into `SearchRequest`, but intentionally keeps them nullable when absent. `allow_partial_search_results` is defaulted later from `search.default_allow_partial_results` during transport coordination; `pre_filter_shard_size` is defaulted only inside the pre-filter decision, using read-only/primary-sort heuristics or the node setting `action.search.pre_filter_shard_size.default`.","flow":[{"step":"REST entry","detail":"`RestSearchAction` handles `/_search` and `/{index}/_search`, builds a `SearchRequest`, calls `parseSearchRequest`, then executes `TransportSearchAction.TYPE`."},{"step":"REST parsing","detail":"`pre_filter_shard_size` is read only when present via `paramAsInt` and stored through `setPreFilterShardSize`; `allow_partial_search_results` is read only when present via `paramAsBoolean` and stored through `allowPartialSearchResults`."},{"step":"request state","detail":"Absent values remain `null`: `SearchRequest.allowPartialSearchResults()` returns nullable `Boolean`; `getPreFilterShardSize()` returns nullable `Integer`. Explicit `preFilterShardSize < 1` throws `IllegalArgumentException`."},{"step":"allow partial default","detail":"`SearchService` defines dynamic node setting `search.default_allow_partial_results`, default `true`. `TransportSearchAction` uses explicit request value when non-null, otherwise `searchService.defaultAllowPartialSearchResults()` for rewrite contexts, remote skip-on-failure, and local execution; `executeSearch` mutates the request to the resolved default if still null."},{"step":"allow partial execution","detail":"`AbstractSearchAsyncAction` asserts the value is non-null. If false, shard failures or unavailable shards fail the phase/response instead of returning partial results; shard failure on the last copy also cancels the search task."},{"step":"pre-filter default","detail":"`TransportSearchAction` reads node setting `action.search.pre_filter_shard_size.default` once into `defaultPreFilterShardSize`, default `SearchRequest.DEFAULT_PRE_FILTER_SHARD_SIZE` (`128`). In `shouldPreFilterSearchShards`, explicit request value wins; if absent, read-only indices or primary field sort force threshold `1`, otherwise the node default is used."},{"step":"pre-filter execution","detail":"Pre-filtering only applies to `QUERY_THEN_FETCH`; it runs when `threshold < numShards` and the source can rewrite to match-none or has primary field sort. When true, `CanMatchPreFilterSearchPhase.execute` runs first and then recurses into the normal query phase with `preFilter=false`."}],"invariants":["REST absence is meaningful: neither parameter is eagerly set to the documented default during parsing.","`allowPartialSearchResults` must be non-null before async search phases run; transport coordination is responsible for applying the cluster default.","`pre_filter_shard_size` must be >= 1 when explicitly supplied.","DFS search bypasses can-match pre-filtering even if `pre_filter_shard_size` is low.","Can-match pre-filtering requires both shard-count threshold breach and a rewrite/primary-sort reason; threshold alone is insufficient.","For PIT local shard iteration, missing nodes throw when `allowPartialSearchResults=false` and are tolerated when true."],"files":["server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:93","server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:108","server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:237","server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java:254","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:64","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:99","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:108","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:368","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:673","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:751","server/src/main/java/org/elasticsearch/search/SearchService.java:238","server/src/main/java/org/elasticsearch/search/SearchService.java:469","server/src/main/java/org/elasticsearch/search/SearchService.java:589","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:164","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:598","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:759","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:1859","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:1957","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:2056","server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:2151","server/src/main/java/org/elasticsearch/action/search/AbstractSearchAsyncAction.java:342","server/src/main/java/org/elasticsearch/action/search/AbstractSearchAsyncAction.java:421","server/src/main/java/org/elasticsearch/action/search/AbstractSearchAsyncAction.java:609","rest-api-spec/src/main/resources/rest-api-spec/api/search.json:225","rest-api-spec/src/main/resources/rest-api-spec/api/search.json:258"],"symbols":["RestSearchAction.prepareRequest","RestSearchAction.parseSearchRequest","SearchRequest.allowPartialSearchResults","SearchRequest.setPreFilterShardSize","SearchRequest.getPreFilterShardSize","SearchRequest.DEFAULT_PRE_FILTER_SHARD_SIZE","SearchService.DEFAULT_ALLOW_PARTIAL_SEARCH_RESULTS_SETTING","SearchService.defaultAllowPartialSearchResults","TransportSearchAction.DEFAULT_PRE_FILTER_SHARD_SIZE","TransportSearchAction.shouldPreFilterSearchShards","TransportSearchAction.executeSearch","CanMatchPreFilterSearchPhase.execute","AbstractSearchAsyncAction.executeNextPhase","AbstractSearchAsyncAction.onShardFailure","AbstractSearchAsyncAction.sendSearchResponse"],"tests_to_run":["./gradlew :server:test --tests org.elasticsearch.rest.action.search.RestSearchActionTests","./gradlew :server:test --tests org.elasticsearch.action.search.SearchRequestTests","./gradlew :server:test --tests org.elasticsearch.action.search.TransportSearchActionTests.testShouldPreFilterSearchShards","./gradlew :server:test --tests org.elasticsearch.action.search.TransportSearchActionTests.testShouldPreFilterSearchShardsWithReadOnly","./gradlew :server:test --tests org.elasticsearch.action.search.AbstractSearchAsyncActionTests.testSendSearchResponseDisallowPartialFailures","./gradlew :server:test --tests org.elasticsearch.action.search.AbstractSearchAsyncActionTests.testShardNotAvailableWithDisallowPartialFailures","./gradlew :rest-api-spec:yamlRestTest --tests \"org.elasticsearch.test.rest.ClientYamlTestSuiteIT.test {yaml=search/140_pre_filter_search_shards}\""],"risks":["REST spec says `pre_filter_shard_size` type `long`, but REST parsing uses `paramAsInt`; very large values may fail before reaching transport.","`TransportSearchAction.DEFAULT_PRE_FILTER_SHARD_SIZE` is node-scoped and captured in the action constructor, unlike the dynamic allow-partial default in `SearchService`.","Existing REST unit tests found in `RestSearchActionTests` do not directly assert these two parameter mappings; coverage is mostly request validation, transport pre-filter decisions, async failure behavior, and YAML REST pre-filter tests.","CCS behavior adds extra coupling: `allowPartialSearchResults` influences remote cluster skip-on-failure and `search_shards` handling, while `pre_filter_shard_size` interacts with remote can-match/skipped shard accounting."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, file:server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java, symbol:shouldMinimizeRoundtrips

### elasticsearch / elasticsearch-search-prefilter-performance-analysis

Class: performance_analysis

Prompt:
```
Daily task: performance-analysis for Elasticsearch search pre-filtering/can-match behavior. Analyze pre_filter_shard_size, primary-field sort, match-none rewrite, remote/CCS minimize-roundtrips, and how to measure whether a refactor changes latency or shard fanout. Return valid compact JSON only with keys: target, suspected_hotspots, cost_model, measurements, optimization_options, validation_commands, risks, evidence_used. Do not modify files.
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
    "can-match",
    "latency",
    "measurement",
    "ccs_minimize_roundtrips"
  ]
}
```

Quality rubric:
- Separates observed code path from hypotheses and names measurement points.
- Explains shard fanout/can-match/pre-filter tradeoffs without proposing unmeasured fixes.
- Names targeted tests or benchmarks for threshold, sort, rewrite, and CCS behavior.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| elasticsearch | elasticsearch-search-prefilter-performance-analysis | baseline | coding_coverage | coding_coverage | no | no | no | 0.000 | 0.000 | 14 | no | 0 | 0 |  | 0 | 0 | 0 | 0 | 0.000 | 103 | 0 | 103 | 547424 | 900002 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\elasticsearch-elasticsearch-search-prefilter-performance-analysis-baseline.jsonl

Codex prompt used:
```
Daily task: performance-analysis for Elasticsearch search pre-filtering/can-match behavior. Analyze pre_filter_shard_size, primary-field sort, match-none rewrite, remote/CCS minimize-roundtrips, and how to measure whether a refactor changes latency or shard fanout. Return valid compact JSON only with keys: target, suspected_hotspots, cost_model, measurements, optimization_options, validation_commands, risks, evidence_used. Do not modify files.

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

Critical misses: file:server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java, file:server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java, file:server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java, file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, symbol:shouldPreFilterSearchShards, symbol:setPreFilterShardSize, symbol:getPreFilterShardSize, symbol:shouldMinimizeRoundtrips, symbol:hasPrimaryFieldSort, term:pre_filter_shard_size, term:can-match, term:latency, term:measurement, term:ccs_minimize_roundtrips

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

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| elasticsearch | elasticsearch-search-prefilter-refactor-plan | baseline | coding_coverage | coding_coverage | no | no | yes | 0.800 | 0.875 | 3 | yes | 3156954 | 3000192 |  | 14634 | 5182 | 3176770 | 176578 | 0.045 | 70 | 0 | 70 | 709341 | 477739 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\elasticsearch-elasticsearch-search-prefilter-refactor-plan-baseline.jsonl

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
```json
{"refactor_goal":"Make the can-match/pre-filter decision explicit and testable as a behavior-preserving policy, separating threshold/eligibility/CCS-mode decisions from phase execution and skipped-shard accounting.","current_flow":{"pre_filter_shard_size":"SearchRequest stores a nullable threshold with default constant 128; explicit values must be >=1. TransportSearchAction.shouldPreFilterSearchShards returns false for non-QUERY_THEN_FETCH, resolves null to 1 for read-only indices or primary field sort else the node default, then requires threshold<numShards and (SearchService.canRewriteToMatchNone(source) || hasPrimaryFieldSort(source)). Cites: server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:64, server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:738, server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:2056.","primary_field_sort":"FieldSortBuilder.hasPrimaryFieldSort only checks that the first sort is FieldSortBuilder. The decision uses that presence even before proving the field supports min/max shortcuts. Data-node can_match later calls FieldSortBuilder.getMinMaxOrNull, and CanMatchPreFilterSearchPhase sorts only when at least one min/max exists and all non-null values share one class; otherwise natural shard order is kept. Cites: server/src/main/java/org/elasticsearch/search/sort/FieldSortBuilder.java:532, server/src/main/java/org/elasticsearch/search/SearchService.java:2605, server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java:524, server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java:559.","match_none_rewrite":"CanMatchNodeRequest builds a can-match source from the original source plus aggregation queries as sub-searches. Coordinator rewrite can skip from coordinator-known index metadata. Data-node SearchService rewrites the shard request source and alias filter; it returns no-match only when the alias filter is MatchNone or the source can be early-terminated and every sub-search is MatchNone. Exceptions and refresh-pending cases are treated as can-match. Cites: server/src/main/java/org/elasticsearch/action/search/CanMatchNodeRequest.java:174, server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java:226, server/src/main/java/org/elasticsearch/search/SearchService.java:2548, server/src/main/java/org/elasticsearch/search/SearchService.java:2621.","ccs_minimize_roundtrips":"SearchRequest defaults ccs_minimize_roundtrips=true. TransportSearchAction.shouldMinimizeRoundtrips disables it for explicit false, scroll, PIT, DFS, kNN, and collapse inner hits. With minimize=true, remote clusters execute sub-searches and make local pre-filter decisions there. With minimize=false, the coordinator calls remote search_shards with the top-level query, receives groups/skipped counts, converts them to prefiltered SearchShardIterator instances, and later trusts those prefiltered remote iterators instead of re-sending can_match. Cites: server/src/main/java/org/elasticsearch/action/search/SearchRequest.java:134, server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:859, server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:601, server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:1410, server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java:1713, server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java:242."},"files":["server/src/main/java/org/elasticsearch/action/search/TransportSearchAction.java","server/src/main/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhase.java","server/src/main/java/org/elasticsearch/action/search/CanMatchNodeRequest.java","server/src/main/java/org/elasticsearch/action/search/SearchRequest.java","server/src/main/java/org/elasticsearch/action/search/SearchShardsRequest.java","server/src/main/java/org/elasticsearch/action/search/SearchShardsResponse.java","server/src/main/java/org/elasticsearch/action/search/TransportSearchShardsAction.java","server/src/main/java/org/elasticsearch/search/SearchService.java","server/src/main/java/org/elasticsearch/search/sort/FieldSortBuilder.java","server/src/main/java/org/elasticsearch/search/internal/ShardSearchRequest.java"],"symbols":["TransportSearchAction.shouldPreFilterSearchShards","TransportSearchAction.shouldMinimizeRoundtrips","TransportSearchAction.collectSearchShards","TransportSearchAction.getRemoteShardsIterator","SearchRequest.DEFAULT_PRE_FILTER_SHARD_SIZE","SearchRequest.getPreFilterShardSize","SearchRequest.isCcsMinimizeRoundtrips","CanMatchPreFilterSearchPhase.execute","CanMatchPreFilterSearchPhase.CanMatchResult","CanMatchPreFilterSearchPhase.getResult","CanMatchNodeRequest.getCanMatchSource","TransportSearchShardsAction.searchShards","SearchShardsRequest.includeSkippedShardsInIterators","SearchShardsResponse.SEARCH_SHARDS_NUM_SKIPPED2","SearchService.canRewriteToMatchNone","SearchService.queryStillMatchesAfterRewrite","SearchService.canMatch","FieldSortBuilder.hasPrimaryFieldSort","FieldSortBuilder.getPrimaryFieldSortOrNull","FieldSortBuilder.getMinMaxOrNull","ShardSearchRequest.RequestRewritable.rewrite"],"safe_steps":["Add a package-private pure decision object, e.g. CanMatchPreFilterDecision, in org.elasticsearch.action.search; keep TransportSearchAction.shouldPreFilterSearchShards as the public/package-private wrapper used by existing tests.","Move only the existing threshold calculation into the decision object: explicit pre_filter_shard_size wins; otherwise read-only index or primary field sort resolves to 1; otherwise use action.search.pre_filter_shard_size.default; keep strict threshold<numShards.","Move only the existing eligibility predicate into the decision object: QUERY_THEN_FETCH only, and source must be SearchService.canRewriteToMatchNone(source) or have FieldSortBuilder.hasPrimaryFieldSort(source). Do not reinterpret read-only indices as independently eligible.","Expose named decision fields for tests such as searchTypeEligible, effectiveThreshold, sourceCanRewriteToMatchNone, hasPrimaryFieldSort, and shouldRun; avoid logging or response changes in the first extraction.","Keep CanMatchPreFilterSearchPhase execution unchanged initially, especially requireAtLeastOneMatch, includeSkippedShardsInIterators BWC, mutable skippedByClusterAlias, skipped-count merging, and natural-order fallback before/after min-max sorting.","After the pure extraction is green, optionally introduce a small enum for call-site mode names only: normal search pre-filter, search_shards BWC iterator-skips, and CCS minimize-roundtrips remote reduce. Thread existing booleans through it without changing serialized requests.","Add table-driven unit coverage around boundary cases before changing more code: numShards==threshold is false, explicit threshold overrides read-only/default, DFS disables, null/match_all source is not eligible, range query over default threshold is eligible, primary field sort is eligible even below default, read-only+rewritable source is eligible below default.","Do not change transport serialization, SearchShardsResponse skipped-count BWC, aggregation-query union semantics for normal can_match, or the query-only remote search_shards behavior under ccs_minimize_roundtrips=false."],"tests":["server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java:testShouldPreFilterSearchShards","server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java:testShouldPreFilterSearchShardsWithReadOnly","server/src/test/java/org/elasticsearch/action/search/TransportSearchActionTests.java:testShouldMinimizeRoundtrips","server/src/test/java/org/elasticsearch/action/search/CanMatchPreFilterSearchPhaseTests.java","server/src/test/java/org/elasticsearch/search/SearchServiceTests.java:testCanMatch*","server/src/test/java/org/elasticsearch/search/SearchServiceSingleNodeTests.java:testCanRewriteToMatchNone","server/src/test/java/org/elasticsearch/search/sort/FieldSortBuilderTests.java","server/src/internalClusterTest/java/org/elasticsearch/search/ccs/CCSCanMatchIT.java:testCanMatchOnTimeRange","server/src/internalClusterTest/java/org/elasticsearch/search/ccs/CrossClusterSearchIT.java:testCCSClusterDetailsWhereAllShardsSkippedInCanMatch","rest-api-spec/src/yamlRestTest/resources/rest-api-spec/test/search/140_pre_filter_search_shards.yml","qa/multi-cluster-search/src/test/resources/rest-api-spec/test/multi_cluster/70_skip_shards.yml"],"validation_commands":["./gradlew :server:test --tests org.elasticsearch.action.search.TransportSearchActionTests","./gradlew :server:test --tests org.elasticsearch.action.search.CanMatchPreFilterSearchPhaseTests","./gradlew :server:test --tests org.elasticsearch.search.SearchServiceTests","./gradlew :server:test --tests org.elasticsearch.search.SearchServiceSingleNodeTests","./gradlew :server:test --tests org.elasticsearch.search.sort.FieldSortBuilderTests","./gradlew :server:internalClusterTest --tests org.elasticsearch.search.ccs.CCSCanMatchIT","./gradlew :server:internalClusterTest --tests org.elasticsearch.search.ccs.CrossClusterSearchIT","./gradlew :rest-api-spec:yamlRestTest --tests \"org.elasticsearch.test.rest.ClientYamlTestSuiteIT.test {yaml=search/140_pre_filter_search_shards/*}\"","./gradlew :server:spotlessJavaCheck"],"risks":["The SearchRequest Javadoc summarizes default pre-filter triggers, but the actual implementation also requires a rewritable source or primary field sort; refactor to code behavior, not the simplified prose.","Changing FieldSortBuilder.hasPrimaryFieldSort to mean indexed/min-max-capable would change when can_match runs for unsupported field sorts.","Changing threshold comparison from < to <= would alter exact-boundary behavior.","Remote search_shards under ccs_minimize_roundtrips=false receives only the top-level query and returns prefiltered iterators; using the full source or rerunning remote can_match would change aggregation and CCS behavior.","Skipped-shard accounting has BWC-sensitive behavior: older search_shards peers need skip flags in iterators, newer peers use aggregate skipped counts.","All-shards-skipped with aggregations still requires one shard to be queried; losing requireAtLeastOneMatch changes empty aggregation responses.","Exceptions and refresh-pending cases intentionally keep shards as possible matches; making them skip would be unsafe."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:server/src/main/java/org/elasticsearch/rest/action/search/RestSearchAction.java, file:server/src/test/java/org/elasticsearch/rest/action/search/RestSearchActionTests.java, symbol:setPreFilterShardSize

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

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-business-deepdive | baseline | coding_coverage | coding_coverage | no | no | yes | 0.955 | 0.750 | 1 | yes | 1279756 | 1135104 |  | 13219 | 3880 | 1296855 | 161751 | 0.059 | 69 | 0 | 69 | 668253 | 363428 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\doughnut-doughnut-recall-business-deepdive-baseline.jsonl

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
```json
{"summary":"Read-only deep dive of the learner recall experience. The system treats recall as a queue of due MemoryTracker rows, each either normal MCQ/just-review or spelling, loaded for the user's current local half-day window and then answered through separate backend paths that update spaced-repetition scheduling.","business_flow":["Menu preload and recall page share the same due payload: UserController.getMenuData and RecallsController.recalling both call RecallService.getDueMemoryTrackers, which returns DueMemoryTrackers with toRepeat, dueInDays, totalAssimilatedCount, and currentRecallWindowEndAt. Evidence: backend/src/main/java/com/odde/doughnut/controllers/UserController.java, backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, backend/src/main/java/com/odde/doughnut/services/RecallService.java, backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java.","Due loading filters active trackers for the current user where next_recall_at is <= TimestampOperations.alignByHalfADay(now + dueInDays, timezone), excluding removed/deleted trackers; results are ordered by next_recall_at and spelling first at the same due timestamp, then mapped to MemoryTrackerLite{id,spelling}. Evidence: backend/src/main/java/com/odde/doughnut/services/UserService.java, backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java, backend/src/main/java/com/odde/doughnut/controllers/dto/MemoryTrackerLite.java.","Frontend recall state is cached in useRecallData. MainMenu seeds toRepeat/currentRecallWindowEndAt/totalAssimilatedCount, RecallPage consumes that cache, can reload with dueindays 0/3/7/14, shuffles due items outside testing, and marks dueInDays>0 as diligent mode. Evidence: frontend/src/components/toolbars/MainMenu.vue, frontend/src/composables/useRecallData.ts, frontend/src/pages/RecallPage.vue.","Question loading is per tracker. Quiz eagerly fetches askAQuestion for the current window of trackers. For non-spelling trackers, MemoryTrackerController.askAQuestion delegates to RecallQuestionService.generateAQuestion, which reuses an unanswered non-contested prompt or creates an MCQ from a feasible predefined question; if no prompt is available, the UI falls back to JustReview. Evidence: frontend/src/components/recall/Quiz.vue, backend/src/main/java/com/odde/doughnut/controllers/MemoryTrackerController.java, backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java.","Non-spelling answers submit choiceIndex plus thinkingTimeMs to RecallPromptController.answerQuiz. AnswerService creates an Answer using the PredefinedQuestion answer key, then MemoryTrackerService updates the note's non-spelling tracker. Correct answers update lastRecalledAt, forgettingCurveIndex, and nextRecallAt; wrong answers increment recall_count, lower the curve, set nextRecallAt to current time plus 12 hours, and can trigger the wrong-answer threshold check. Evidence: frontend/src/components/recall/RecallPromptComponent.vue, backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, backend/src/main/java/com/odde/doughnut/services/AnswerService.java, backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java, backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java.","Just-review is the non-spelling fallback when no MCQ is available. The learner self-evaluates with successful=true/false through MemoryTrackerController.markAsRecalled, using the same scheduling function as question answers. Evidence: frontend/src/components/recall/JustReview.vue, frontend/src/components/recall/SelfEvaluateButtons.vue, backend/src/main/java/com/odde/doughnut/controllers/MemoryTrackerController.java.","Spelling is a separate MemoryTracker row created when NoteRecallSetting.rememberSpelling is enabled. During assimilation, MemoryTrackerService may create both a normal tracker and a spelling tracker; if remember spelling is enabled later, NoteController removes old trackers for re-assimilation so a spelling tracker can be added. Evidence: backend/src/main/java/com/odde/doughnut/entities/NoteRecallSetting.java, backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java, backend/src/main/java/com/odde/doughnut/controllers/NoteController.java.","Spelling question loading uses the same askAQuestion endpoint but returns/reuses a SPELLING RecallPrompt. The prompt exposes SpellingQuestion with a masked note-content stem and notebook; correctness is Note.matchAnswer, which delegates to NoteTitle.matches for case-insensitive title and title-alternative matching. Evidence: frontend/src/components/recall/SpellingQuestionDisplay.vue, backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java, backend/src/main/java/com/odde/doughnut/entities/RecallPrompt.java, backend/src/main/java/com/odde/doughnut/entities/Note.java, backend/src/main/java/com/odde/doughnut/algorithms/NoteTitle.java.","Spelling answers submit to RecallPromptController.answerSpelling with spellingAnswer and, in web, thinkingTimeMs. The backend rejects non-SPELLING or already answered prompts, persists an Answer with spellingAnswer/correct/thinkingTimeMs, and updates only that spelling tracker via the same MemoryTracker.markAsRecalled scheduling rules. Evidence: frontend/src/components/recall/Quiz.vue, frontend/src/components/recall/AnsweredSpellingQuestion.vue, backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java.","Previously answered prompts are loaded for the current half-day window using startOfHalfADay(now,timezone) to alignByHalfADay(now,timezone). RecallPage prepends them to local answered history so the learner can pause and browse recent answers while the current queue remains intact. Evidence: backend/src/main/java/com/odde/doughnut/services/RecallService.java, backend/src/main/java/com/odde/doughnut/entities/repositories/RecallPromptRepository.java, frontend/src/pages/RecallPage.vue.","currentRecallWindowEndAt is the end of the user's current local 0-12 or 12-24 half-day converted back to a timestamp. RecallPage stores it and, on activation, reloads current due recalls if the browser's current ISO time is later than the stored window end. Evidence: backend/src/main/java/com/odde/doughnut/utils/TimestampOperations.java, frontend/src/composables/useRecallData.ts, frontend/src/pages/RecallPage.vue.","Treadmill mode is frontend-only session behavior. The options dialog toggles useRecallData.treadmillMode; RecallPage skips spelling trackers, counts only remaining non-spelling trackers, advances to the next non-spelling tracker after answers, applies a treadmill visual style, and when turning treadmill off moves unanswered spelling trackers after remaining non-spelling work. It does not change backend due selection or scheduling. Evidence: frontend/src/components/recall/RecallSessionOptionsDialog.vue, frontend/src/components/recall/RecallProgressBar.vue, frontend/src/pages/RecallPage.vue.","The CLI recall session uses the same backend contracts for due loading, askAQuestion, MCQ answer, spelling answer, and just-review, but treadmill mode is not represented there. Evidence: cli/src/commands/recall/dueRecallQuery.ts, cli/src/commands/recall/nextRecallCardLoad.ts, cli/src/commands/recall/RecallSessionStage.tsx, cli/src/commands/recall/RecallMcqStage.tsx, cli/src/commands/recall/SpellingRecallStage.tsx."],"core_entities":{"DueMemoryTrackers":"Backend DTO for recall status: toRepeat MemoryTrackerLite list, dueInDays, totalAssimilatedCount, currentRecallWindowEndAt.","MemoryTracker":"Per-user per-note recall stream with spelling flag, recall_count, forgetting_curve_index, last_recalled_at, next_recall_at, removed/deleted state.","MemoryTrackerLite":"Frontend/CLI queue item containing memoryTrackerId and spelling; prompt details are loaded later.","RecallPrompt":"Per-question attempt shell. MCQ prompts have predefinedQuestion/multipleChoicesQuestion; spelling prompts have questionType SPELLING and spellingQuestion derived from the note.","Answer":"Persisted quiz_answer with choiceIndex or spellingAnswer, correct, createdAt, and thinkingTimeMs.","PredefinedQuestion":"MCQ source and answer key used by non-spelling recall prompts.","NoteRecallSetting":"Controls rememberSpelling and skipMemoryTracking; rememberSpelling adds a separate spelling tracker.","NoteTitle":"Business matcher for spelling answers against note title variants.","currentRecallWindowEndAt":"Session metadata for the end of the active half-day recall window, used to decide when cached due recalls are stale."},"files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","backend/src/main/java/com/odde/doughnut/services/RecallService.java","backend/src/main/java/com/odde/doughnut/services/UserService.java","backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java","backend/src/main/java/com/odde/doughnut/entities/repositories/RecallPromptRepository.java","backend/src/main/java/com/odde/doughnut/controllers/MemoryTrackerController.java","backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java","backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/main/java/com/odde/doughnut/entities/RecallPrompt.java","backend/src/main/java/com/odde/doughnut/entities/Answer.java","backend/src/main/java/com/odde/doughnut/entities/Note.java","backend/src/main/java/com/odde/doughnut/entities/NoteRecallSetting.java","backend/src/main/java/com/odde/doughnut/algorithms/NoteTitle.java","backend/src/main/java/com/odde/doughnut/utils/TimestampOperations.java","frontend/src/composables/useRecallData.ts","frontend/src/pages/RecallPage.vue","frontend/src/components/recall/Quiz.vue","frontend/src/components/recall/RecallPromptComponent.vue","frontend/src/components/recall/SpellingQuestionDisplay.vue","frontend/src/components/recall/JustReview.vue","frontend/src/components/recall/RecallSessionOptionsDialog.vue","frontend/src/components/recall/RecallProgressBar.vue","frontend/src/components/toolbars/MainMenu.vue","cli/src/commands/recall/nextRecallCardLoad.ts"],"symbols":{"backend":["RecallsController.recalling","RecallsController.previouslyAnswered","RecallService.getDueMemoryTrackers","RecallService.getPreviouslyAnsweredRecallPrompts","UserService.getMemoryTrackersNeedToRepeat","MemoryTrackerRepository.findAllByUserAndNextRecallAtLessThanEqualOrderByNextRecallAt","RecallPromptRepository.findUnansweredByMemoryTracker","RecallPromptRepository.findAnsweredRecallPromptsInTimeRange","MemoryTrackerController.askAQuestion","MemoryTrackerController.markAsRecalled","RecallPromptController.answerQuiz","RecallPromptController.answerSpelling","RecallQuestionService.generateAQuestion","RecallQuestionService.answerQuestion","MemoryTrackerService.getSpellingQuestion","MemoryTrackerService.answerSpelling","MemoryTrackerService.markAsRecalled","MemoryTracker.markAsRecalled","MemoryTracker.recalledSuccessfully","MemoryTracker.recallFailed","RecallPrompt.getSpellingQuestion","Note.matchAnswer","TimestampOperations.alignByHalfADay","TimestampOperations.startOfHalfADay"],"frontend":["useRecallData","RecallPage.loadMore","RecallPage.loadCurrentDueRecalls","RecallPage.moveToNextMemoryTracker","RecallPage.handleTreadmillModeChanged","RecallPage.onAnswered","Quiz.useQuestionFetching","Quiz.onSpellingAnswer","RecallPromptComponent.submitQuizAnswer","SpellingQuestionDisplay.fetchSpellingQuestion","SpellingQuestionDisplay.submitAnswer","JustReview.justReivew","RecallSessionOptionsDialog.handleTreadmillModeToggle"],"cli":["fetchDueMemoryTrackerIds","fetchShuffledDueMemoryTrackerIds","loadRecallCardForMemoryTrackerId","submitMcqAnswer","submitSpellingAnswer"]},"existing_tests":["backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java covers due loading by timezone, recall status metadata, currentRecallWindowEndAt, previously answered prompts, and spelling results in the current window.","backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java covers askAQuestion for spelling and non-spelling, recycling unanswered spelling prompts, markAsRecalled, threshold exceeded, recall prompt listing/deletion, and access checks.","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java covers MCQ answer scheduling, thinkingTimeMs, wrong-answer scheduling, spelling answer validation, duplicate-answer rejection, spelling scheduling, and access checks.","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java covers assimilation tracker creation, adding only spelling tracker later, prompt listing, soft-delete/re-assimilation behavior, and markAsRecalled not deleting trackers.","backend/src/test/java/com/odde/doughnut/services/RecallQuestionServiceTest.java covers reusing the most recent unanswered recall prompt.","backend/src/test/java/com/odde/doughnut/entities/RecallPromptTest.java covers spelling question generation, notebook lookup, masked spelling stem behavior, and questionGeneratedTime.","backend/src/test/java/com/odde/doughnut/entities/repositories/RecallPromptRepositoryTest.java covers wrong-answer threshold counting.","backend/src/test/java/com/odde/doughnut/algorithms/SpacedRepetitionEarlyRewardsAndLatePenaltyTest.java and backend/src/test/java/com/odde/doughnut/entities/ForgettingCurveThinkingTimeTest.java cover early/late recall and thinking-time curve adjustments.","frontend/tests/pages/RecallPage.spec.ts covers previously answered loading, due refresh after assimilation, progress, spelling handling, treadmill mode behavior, threshold checks, diligent mode, and load-more UI.","frontend/tests/recall/Quiz.spec.ts covers eager question fetch, no duplicate fetch after prefetch, spelling display, spelling submission, and loading state after fetch failure.","frontend/tests/components/recall/SpellingQuestionDisplay.spec.ts covers spelling form rendering, answer emit, thinking time, double-submit prevention, inactive mask, and disabled submit.","frontend/tests/components/recall/RecallPromptComponent.spec.ts covers MCQ answer loading, retry on API error, and answered event emission.","frontend/tests/components/recall/RecallSessionOptionsDialog.spec.ts covers average thinking time display and filtering.","e2e_test/features/recall/recall_quiz_ai_question.feature, e2e_test/features/recall/recall_quiz_spelling_question.feature, e2e_test/features/recall/spaced_repetition.feature, e2e_test/features/recall/browse_answer_and_notes_while_recalling.feature, and e2e_test/features/recall/re_assimilate.feature cover learner-level recall scenarios."],"risks":["Wrong-answer threshold likely excludes spelling failures because RecallPromptRepository.countWrongAnswersSince inner-joins predefined_question; spelling prompts have no predefinedQuestion, so frontend threshold checks after wrong spelling answers may never trigger re-assimilation.","Non-spelling answer scheduling updates the first non-spelling tracker for the note instead of directly using recallPrompt.memoryTracker; this assumes there is only one active non-spelling tracker per user/note.","Quiz prefetches askAQuestion for spelling trackers, then SpellingQuestionDisplay fetches askAQuestion again; backend recycles the unanswered spelling prompt, but the UI still pays an extra request and depends on that reuse behavior.","RecallPage shuffles due trackers outside testing, which may conflict with the backend's next_recall_at ordering if strict schedule order is a product requirement.","Treadmill mode is local frontend state only; skipped spelling trackers remain due and progress/badge meaning changes to non-spelling-only while treadmill is enabled.","Web spelling submissions include thinkingTimeMs, but CLI spelling submissions currently submit only spellingAnswer, so CLI spelling recalls do not receive thinking-time scheduling adjustments.","currentRecallWindowEndAt refresh uses string comparison against new Date().toISOString(); this depends on server timestamp serialization being ISO-sortable and comparable to browser ISO strings."],"next_questions":["Should spelling mistakes count toward the same re-assimilation threshold as MCQ mistakes?","Is treadmill mode intended to be a temporary non-spelling sprint, or should it persist across sessions/users?","Should due recall order prioritize strict next_recall_at order, randomization, or a hybrid business rule?","Should spelling trackers be asked before normal trackers at the same due time, as the backend query currently orders them?","Should currentRecallWindowEndAt be surfaced to learners, or remain invisible cache metadata?","Should CLI recall reach parity with web for spelling thinking time and treadmill behavior?"]}
```

Idea checks: 6/8 (0.750)

Critical misses: file:backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java

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

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-forecast-pbi-investigate | baseline | coding_coverage | coding_coverage | no | no | yes | 0.833 | 0.875 | 3 | yes | 1769201 | 1631360 |  | 11507 | 4968 | 1785676 | 154316 | 0.054 | 64 | 0 | 64 | 364139 | 371234 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\doughnut-doughnut-recall-forecast-pbi-investigate-baseline.jsonl

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
```json
{"pbi_summary":"Expose recall forecast counts for windows 0,3,7,14 on the existing recall loading API, then show those counts on the Recall page done-state load-more buttons without changing the current dueindays loading contract. Evidence: packages/generated/doughnut-backend-api/api-summary.md:222, backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39, frontend/src/pages/RecallPage.vue:47.","business_flow":["Menu data currently preloads due-now recall status via recallService.getDueMemoryTrackers(...,0) and stores toRepeat/currentRecallWindowEndAt/totalAssimilatedCount in useRecallData. Evidence: backend/src/main/java/com/odde/doughnut/controllers/UserController.java:177, frontend/src/components/toolbars/MainMenu.vue:71.","RecallPage consumes shared toRepeat, tracks currentIndex and previousAnsweredQuestions, and derives current-session progress from finished plus remaining trackers. Evidence: frontend/src/pages/RecallPage.vue:105, frontend/src/pages/RecallPage.vue:186, frontend/src/components/commons/ProgressBar.vue:12.","When all current items are done, RecallPage shows the success state and three buttons; each calls loadMore(3/7/14), which calls RecallsController.recalling with timezone and dueindays, resets currentIndex, updates diligentMode, and replaces toRepeat. Evidence: frontend/src/pages/RecallPage.vue:47, frontend/src/pages/RecallPage.vue:248.","Backend loading adds dueInDays*24h to current UTC time, aligns that timestamp by the user's half-day window, and queries trackers due at or before that aligned timestamp. Evidence: backend/src/main/java/com/odde/doughnut/services/RecallService.java:39, backend/src/main/java/com/odde/doughnut/services/UserService.java:65, backend/src/main/java/com/odde/doughnut/utils/TimestampOperations.java:24.","Treadmill mode filters spelling trackers from RecallPage progress/current item selection without changing the backend list. Evidence: frontend/src/pages/RecallPage.vue:143, frontend/src/pages/RecallPage.vue:188, frontend/src/pages/RecallPage.vue:277."],"acceptance_criteria":["API response for GET /api/recalls/recalling should include forecast counts for windows 0,3,7,14 while retaining query timezone and optional dueindays and existing toRepeat/dueInDays/currentRecallWindowEndAt fields. Evidence: backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:41, backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java:9.","Each forecast count must use the same currentUTCTimestamp, timezone parsing, dueInDays-to-hours shift, and alignByHalfADay behavior as current loading. Evidence: backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:45, backend/src/main/java/com/odde/doughnut/services/RecallService.java:39, backend/src/main/java/com/odde/doughnut/utils/TimestampOperations.java:24.","Counts must be monotonic by cumulative window: count0 <= count3 <= count7 <= count14, assuming the same active-tracker predicate and increasing cutoff timestamps.","Counts must exclude removed_from_tracking and deleted_at trackers; current repository predicates already do this for loading and total active count. Evidence: backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:63, backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:125.","Existing Load more from next 3/7/14 days behavior must remain compatible: button clicks should still pass dueindays and replace the session list from response.toRepeat. Evidence: frontend/src/pages/RecallPage.vue:56, frontend/src/pages/RecallPage.vue:251.","Recall page done-state button labels should display forecast counts while preserving progress math, previous-answer browsing, and treadmill-mode spelling filtering. Evidence: frontend/src/pages/RecallPage.vue:47, frontend/src/components/recall/RecallProgressBar.vue:36, frontend/src/components/recall/RecallSessionOptionsDialog.vue:30."],"impacted_files":[{"file":"backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java:9","impact":"Add forecast-count field or nested DTO to the response body."},{"file":"backend/src/main/java/com/odde/doughnut/services/RecallService.java:47","impact":"Compute/load forecast counts alongside toRepeat using the same helper/alignment path."},{"file":"backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:26","impact":"Likely add a count-by-user-and-nextRecallAt<=cutoff query sharing the active tracker predicate."},{"file":"backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39","impact":"Endpoint contract stays, but response includes the new forecast data."},{"file":"backend/src/main/java/com/odde/doughnut/controllers/UserController.java:177","impact":"Menu-data embeds DueMemoryTrackers, so the new field will appear there too unless explicitly hidden."},{"file":"frontend/src/pages/RecallPage.vue:47","impact":"Store/display forecast counts in the done state and keep loadMore behavior unchanged."},{"file":"frontend/src/composables/useRecallData.ts:5","impact":"Possible shared storage for forecast counts if menu preload or route transitions need them."},{"file":"packages/generated/doughnut-backend-api/types.gen.ts:719","impact":"Regenerated DueMemoryTrackers type must include the forecast field."},{"file":"packages/doughnut-test-fixtures/src/DueMemoryTrackersBuilder.ts:23","impact":"Fixture builder must supply default forecast data for frontend tests."},{"file":"backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:73","impact":"Add controller-level tests for forecast counts, monotonicity, timezone/half-day alignment, and deleted/removed exclusion."},{"file":"frontend/tests/pages/RecallPage.spec.ts:831","impact":"Add done-state button count display tests and keep loading indicator/loadMore tests passing."},{"file":"e2e_test/start/pageObjects/recallPage.ts:49","impact":"If button accessible names change, update selectors compatibly."}],"symbols":["RecallsController.recalling","RecallService.getDueMemoryTrackers","RecallService.getMemoryTrackersNeedToRepeat","RecallService.getToRecallCount","UserService.getMemoryTrackersNeedToRepeat","MemoryTrackerRepository.findAllByUserAndNextRecallAtLessThanEqualOrderByNextRecallAt","MemoryTrackerRepository.countByUserNotRemoved","DueMemoryTrackers","TimestampOperations.alignByHalfADay","TimestampOperations.addHoursToTimestamp","RecallPage.loadMore","RecallPage.toRepeatCount","RecallPage.getRemainingNonSpellingCount","useRecallData.toRepeat","useRecallData.diligentMode","RecallProgressBar","RecallSessionOptionsDialog"],"unknowns":["Exact API wire shape is not specified: map keyed by days, named fields, or array of window/count DTOs.","PBI wording says 'how many more would be loaded' while AC says monotonic window counts; UI may need to display incremental counts on buttons derived from cumulative API counts.","Forecast freshness after answering current-session items needs a decision: initial forecasts can become stale because answers update nextRecallAt, and load-more results depend on answer outcome/timing.","Whether forecast counts should include spelling trackers while treadmill mode is enabled is not specified; current backend loading includes them and frontend filters only progress/current item display.","Whether GET /api/user/menu-data should intentionally expose and cache forecast counts is not specified."],"risks":["Naively computing forecasts by loading full tracker lists for four windows can be inefficient for large accounts; count queries should reuse the active predicate.","If forecasts are computed with current timestamp plus days but without half-day alignment, counts will disagree with existing load-more results near noon/midnight boundaries.","A numeric-key map may generate awkward TypeScript/OpenAPI types; a small typed DTO is safer for generated clients.","Changing button text can break Cypress role/name selectors; preserve recognizable labels or update page objects/tests deliberately.","Stale forecast counts at the done state could mislead users if not refreshed or derived from the same post-answer state as loadMore.","Treadmill mode progress currently excludes spelling trackers; mixing all-tracker forecast counts into progress UI could make totals look inconsistent."],"next_steps":["Clarify cumulative versus incremental display and whether forecasts must refresh after session answers.","Choose a typed response shape for forecast counts, then update DueMemoryTrackers and regenerate TypeScript API types.","Add backend tests around 0/3/7/14 windows, half-day timezone boundaries, monotonicity, and deleted/removed trackers.","Update RecallPage done-state rendering and frontend fixtures/tests while preserving loadMore(dueindays) behavior and treadmill progress.","Run focused backend controller/service tests and frontend RecallPage tests after edits."]}
```

Idea checks: 7/8 (0.875)

Critical misses: symbol:loadCurrentDueRecalls, symbol:setCurrentRecallWindowEndAt, term:treadmillMode

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

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-wrong-answer-bug-trace | baseline | ask_or_bypass | artifact_sufficiency | no | yes | yes | 0.875 | 0.875 | 2 | yes | 2048983 | 1940096 |  | 12265 | 6643 | 2067891 | 127795 | 0.068 | 51 | 0 | 51 | 812303 | 397029 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\doughnut-doughnut-recall-wrong-answer-bug-trace-baseline.jsonl

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
```json
{"summary":"Trace shows the intended backend behavior is still `wrong answer -> MemoryTracker.recallFailed -> nextRecallAt = currentUTC + 12h`. The strongest regression handoff is that the MCQ answer path does not update `recallPrompt.getMemoryTracker()` directly; it re-queries by note and takes the first non-spelling tracker, so the answered prompt's tracker can be left unscheduled or a different tracker can be updated. Existing tests also only assert `< current+25h`, so a 24h or wrong-tracker regression can pass.","reproduction_path":["Frontend MCQ answer: `frontend/src/components/recall/RecallPromptComponent.vue:58` calls `RecallPromptController.answerQuiz`.","Backend MCQ path: `backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java:63` -> `RecallQuestionService.answerQuestion` at `backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:101`.","Answer is persisted by `AnswerService.createAnswerForQuestion` at `backend/src/main/java/com/odde/doughnut/services/AnswerService.java:17`.","Scheduling update goes through `MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion` at `backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:110`, then `markAsRecalled` at line 129.","Expected failed-recall schedule is `MemoryTracker.recallFailed` at `backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100`, setting `nextRecallAt` to `currentUTCTimestamp + 12h` at line 102."],"root_cause_hypotheses":[{"confidence":"high","hypothesis":"MCQ answers update a looked-up tracker instead of the prompt's tracker. `MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion` uses `userService.getMemoryTrackersFor(user, recallPrompt.getPredefinedQuestion().getNote()).findFirst()` at `backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:112`, while spelling answers update `recallPrompt.getMemoryTracker()` directly at lines 217-230. This can leave the actual prompt tracker unchanged."},{"confidence":"high","hypothesis":"Test coverage allows the regression. MCQ and spelling wrong-answer tests named `shouldRepeatTheNextDay` only assert `nextRecallAt < current+25h` in `backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java:213` and `:566`; they do not assert about 12 hours or refresh the exact persisted tracker."},{"confidence":"medium","hypothesis":"If DB `next_recall_at` is correct but UI timing seems late, recall eligibility is half-day-window aligned via `UserService.getMemoryTrackersNeedToRepeat` at `backend/src/main/java/com/odde/doughnut/services/UserService.java:65` and `TimestampOperations.alignByHalfADay` at `backend/src/main/java/com/odde/doughnut/utils/TimestampOperations.java:24`, so display/due behavior may not appear exactly at the timestamp."}],"files":["frontend/src/components/recall/RecallPromptComponent.vue:58","frontend/src/pages/RecallPage.vue:307","backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java:63","backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:101","backend/src/main/java/com/odde/doughnut/services/AnswerService.java:17","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:110","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java:202","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java:565"],"symbols":["RecallPromptController.answerQuiz","RecallQuestionService.answerQuestion","AnswerService.createAnswerForQuestion","MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion","MemoryTrackerService.markAsRecalled","MemoryTracker.markAsRecalled","MemoryTracker.recallFailed","RecallPromptController.answerSpelling","RecallPromptControllerTests.answerQuizQuestion.WrongAnswer.shouldRepeatTheNextDay"],"tests_to_run":["CURSOR_DEV=true nix develop -c pnpm backend:test_only","CURSOR_DEV=true nix develop -c pnpm cypress run --spec e2e_test/features/recall/recall_quiz_ai_question.feature,e2e_test/features/recall/recall_quiz_spelling_question.feature"],"fix_plan":["Add failing backend controller tests for MCQ and spelling wrong answers that freeze current time, answer incorrectly, refresh the prompt's `MemoryTracker`, and assert `nextRecallAt == TimestampOperations.addHoursToTimestamp(currentTime, 12)`.","Update MCQ setup in `RecallPromptControllerTests` so the recall prompt is explicitly `.forMemoryTracker(memoryTracker)`; current setup can accidentally test a separate tracker.","Change MCQ scheduling to update `recallPrompt.getMemoryTracker()` directly, matching spelling behavior, instead of re-querying by note in `MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion`.","Add/read authorization for `recallPrompt.getMemoryTracker()` in `RecallPromptController.answerQuiz` before saving an answer, because the current path only asserts logged-in.","Optionally extract a named `WRONG_ANSWER_RETRY_HOURS = 12` constant near `MemoryTracker.recallFailed` and use it in tests to document the contract."],"risks":["Changing MCQ to use the prompt tracker may expose tests or fixtures where `RecallPrompt` is not linked to the intended `MemoryTracker`; update fixtures instead of preserving the lookup behavior.","Adding authorization to `answerQuiz` can change unauthorized-request behavior from silently saved answer/no schedule to an access error; add a regression test for another user's recall prompt.","If product expects half-day windows rather than exact timestamps, keep exact 12h as the persisted DB contract and test due-window behavior separately."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java, term:thinkingTimeMs

### doughnut / doughnut-recall-forecast-pbi-plan

Class: pbi_plan

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

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-forecast-pbi-plan | baseline | coding_coverage | coding_coverage | no | no | yes | 0.833 | 1.000 | 3 | yes | 716463 | 630272 |  | 12235 | 7186 | 735884 | 105612 | 0.079 | 46 | 0 | 46 | 639357 | 299649 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\doughnut-doughnut-recall-forecast-pbi-plan-baseline.jsonl

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
```json
{"scope":["Plan only; no files modified.","Add a read-only Recall forecast-count API for due windows [0,3,7,14], using the same due cutoff as current recall loading: add dueInDays*24h, then half-day align in the requested timezone via the existing Recall/UserService path cited at backend/src/main/java/com/odde/doughnut/services/RecallService.java:39 and backend/src/main/java/com/odde/doughnut/services/RecallService.java:50.","Return cumulative, ordered, monotonic counts of active trackers only; existing repository filters already exclude removed_from_tracking and deleted_at at backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:63.","Render forecast counts beside the existing Load more buttons without changing their click behavior or accessible names, and keep these counts separate from toRepeat/currentIndex progress state."],"out_of_scope":["Changing spaced-repetition scheduling, half-day alignment, recall ordering, treadmill skipping rules, CLI recall prompts, or the existing /api/recalls/recalling list contract.","Using forecast counts as session progress, nav badge counts, or as a replacement for the actual loadMore response."],"impacted_files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:41","backend/src/main/java/com/odde/doughnut/services/RecallService.java:47","backend/src/main/java/com/odde/doughnut/services/UserService.java:48","backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:29","backend/src/main/java/com/odde/doughnut/controllers/dto/RecallForecastCount.java","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:61","frontend/src/pages/RecallPage.vue:56","frontend/src/composables/useRecallData.ts:16","frontend/tests/pages/RecallPage.spec.ts:831","packages/generated/doughnut-backend-api/api-summary.md:224","packages/generated/doughnut-backend-api/types.gen.ts:719","open_api_docs.yaml:4312","e2e_test/start/pageObjects/recallPage.ts:50","e2e_test/features/recall/spaced_repetition.feature"],"symbols":{"existing":["RecallsController.recalling","RecallService.getDueMemoryTrackers","RecallService.getToRecallCount","UserService.getMemoryTrackersNeedToRepeat","MemoryTrackerRepository.findAllByUserAndNextRecallAtLessThanEqualOrderByNextRecallAt","MemoryTrackerRepository.byUserIdFrom","RecallPage.loadMore","RecallPage.toRepeatCount","useRecallData.toRepeatCount","useRecallData.currentIndex","useNavigationItems.upperNavItems"],"new":["RecallsController.forecastCounts","RecallService.getForecastCounts","UserService.countMemoryTrackersNeedToRepeat","MemoryTrackerRepository.countByUserAndNextRecallAtLessThanEqual","RecallForecastCount"]},"implementation_steps":["Add DTO RecallForecastCount with dueInDays and count; have GET /api/recalls/forecast-counts?timezone=... return List<RecallForecastCount> ordered [0,3,7,14].","Add UserService count helper that computes the same aligned cutoff used by getMemoryTrackersNeedToRepeat, then calls a repository COUNT query using the same byUserIdFrom predicate.","Add MemoryTrackerRepository.countByUserAndNextRecallAtLessThanEqual with COUNT(*) + byUserIdFrom + next_recall_at <= :nextRecallAt so removed and deleted trackers are excluded without loading entities.","Add RecallService.getForecastCounts using a single constant windows list [0,3,7,14]; do not clamp counts, but tests should assert nondecreasing output because cumulative cutoffs make it monotonic.","Add RecallsController.forecastCounts beside recalling with the same authorization, timezone parsing, and testability current timestamp flow.","Run generateTypeScript so RecallsController.forecastCounts and RecallForecastCount appear in generated SDK/types and API summary.","In RecallPage.vue, add local forecastCounts state and fetch it only when load-more controls are visible; clear or refresh after loadMore starts/finishes so stale counts are not shown as authoritative session data.","Render counts as visually adjacent spans on the existing 3/7/14 buttons, with aria-hidden count text so e2e_test/start/pageObjects/recallPage.ts:50 still finds the same button name; keep @click loadMore(3/7/14) unchanged and do not disable zero-count buttons.","Do not write forecast counts into toRepeat, currentIndex, toRepeatCount, diligentMode, previousAnsweredQuestions, or treadmillMode; the actual RecallsController.recalling response remains the source of truth after a button click."],"tests":["Backend controller tests: unauthorized forecast-count access; windows [0,3,7,14] return expected cumulative counts for trackers due now, within 3, within 7, within 14, and after 14 days; assert counts are nondecreasing.","Backend parity test: for each window, forecast count equals controller.recalling(timezone, dueInDays).getToRepeat().size() for a boundary timezone case, proving the same half-day rules.","Backend exclusion test: removedFromTracking trackers and trackers deleted through note deletion/soft delete are not counted.","Frontend RecallPage tests: when toRepeat is empty, forecastCounts is called with timezone and the Load more buttons show counts while still calling recalling with dueindays 3, 7, and 14.","Frontend regression tests: forecast count fetch does not call setToRepeat or reset currentIndex; treadmill mode progress still excludes spelling trackers and current-session progress text remains based on toRepeat/currentIndex, not forecast counts.","E2E smoke: existing spaced_repetition load-more scenario still clicks Load more from next 3 days using the unchanged accessible name."],"validation_commands":["CURSOR_DEV=true nix develop -c pnpm generateTypeScript","CURSOR_DEV=true nix develop -c pnpm backend:test_only","CURSOR_DEV=true nix develop -c pnpm frontend:test tests/pages/RecallPage.spec.ts","CURSOR_DEV=true nix develop -c pnpm cypress run --spec e2e_test/features/recall/spaced_repetition.feature","CURSOR_DEV=true nix develop -c pnpm lint:all"],"risks":["Forecast counts can become stale while a session is being answered; fetch them when load-more buttons become visible and treat the loadMore response as authoritative.","Four COUNT queries are simple and bounded, but a future optimization could compute all windows in one SQL pass if needed.","If counts are added inside button text without aria-hidden, existing role-name E2E selectors can break.","Forecast counts include the same tracker population as loadMore, including spelling trackers; treadmill mode must keep using its existing non-spelling progress calculation rather than these counts."]}
```

Idea checks: 8/8 (1.000)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, symbol:loadCurrentDueRecalls, term:currentRecallWindowEndAt

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

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-forecast-implement-code-unittest | baseline | coding_coverage | coding_coverage | no | no | no | 0.737 | 0.875 | 5 | yes | 1378287 | 1261056 |  | 17800 | 11214 | 1407301 | 146245 | 0.050 | 66 | 0 | 66 | 680199 | 444656 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\doughnut-doughnut-recall-forecast-implement-code-unittest-baseline.jsonl

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
```json
{"patch_summary":"Add a read-only Recall forecast endpoint returning cumulative due counts for windows 0,3,7,14 days, computed with the same half-day/timezone due logic as Recall lists. Keep /api/recalls/recalling unchanged; RecallPage fetches forecast counts only for Load more labels and never uses counts to mutate the active queue, treadmill mode, currentIndex, or Load more behavior.","files_to_change":[{"file":"backend/src/main/java/com/odde/doughnut/controllers/dto/RecallForecastCount.java","action":"add DTO record"},{"file":"backend/src/main/java/com/odde/doughnut/controllers/dto/RecallForecastCountsDTO.java","action":"add DTO wrapper"},{"file":"backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java","action":"add count query reusing byUserIdFrom filters"},{"file":"backend/src/main/java/com/odde/doughnut/services/UserService.java","action":"add aligned due-count helper beside getMemoryTrackersNeedToRepeat"},{"file":"backend/src/main/java/com/odde/doughnut/services/RecallService.java","action":"add forecast windows and forecast-count service method"},{"file":"backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","action":"add GET /api/recalls/forecast-counts"},{"file":"backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java","action":"add controller tests"},{"file":"frontend/src/pages/RecallPage.vue","action":"fetch and render counts on Load more buttons"},{"file":"frontend/tests/pages/RecallPage.spec.ts","action":"add Vitest browser tests"},{"file":"open_api_docs.yaml","action":"regenerate"},{"file":"packages/generated/doughnut-backend-api/types.gen.ts","action":"regenerate"},{"file":"packages/generated/doughnut-backend-api/sdk.gen.ts","action":"regenerate"},{"file":"packages/generated/doughnut-backend-api/index.ts","action":"regenerate"},{"file":"packages/generated/doughnut-backend-api/api-summary.md","action":"regenerate"}],"symbols":{"dto_shape":"RecallForecastCountsDTO { counts: RecallForecastCount[] }; RecallForecastCount { dueInDays: number, count: number }; JSON example: {\"counts\":[{\"dueInDays\":0,\"count\":2},{\"dueInDays\":3,\"count\":5},{\"dueInDays\":7,\"count\":8},{\"dueInDays\":14,\"count\":13}]}","backend":["MemoryTrackerRepository.countByUserAndNextRecallAtLessThanEqual(Integer userId, Timestamp nextRecallAt)","UserService.countMemoryTrackersNeedToRepeat(User user, Timestamp currentUTCTimestamp, ZoneId timeZone)","RecallService.FORECAST_WINDOWS_IN_DAYS = List.of(0,3,7,14)","RecallService.getForecastCounts(User user, Timestamp currentUTCTimestamp, ZoneId timeZone)","RecallsController.forecastCounts(String timezone)"],"frontend":["RecallsController.forecastCounts","RecallPage forecastCounts ref","RecallPage loadForecastCounts()","RecallPage forecastCountFor(dueInDays)","RecallPage loadMoreButtonLabel(dueInDays)"]},"code_steps":["Add RecallForecastCount as a Java record with int dueInDays and int count; add RecallForecastCountsDTO as a Java record wrapping List<RecallForecastCount>.","In MemoryTrackerRepository, add a native COUNT query using the existing byUserIdFrom constant plus AND rp.next_recall_at <= :nextRecallAt so removed_from_tracking=true and deleted_at IS NOT NULL stay excluded.","In UserService, add countMemoryTrackersNeedToRepeat that applies TimestampOperations.alignByHalfADay(currentUTCTimestamp,timeZone) exactly like getMemoryTrackersNeedToRepeat before calling the repository count method.","In RecallService, add FORECAST_WINDOWS_IN_DAYS and getForecastCounts; for each window, use TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, dueInDays * 24) before delegating to UserService.countMemoryTrackersNeedToRepeat. Keep getDueMemoryTrackers and toRepeat behavior unchanged.","In RecallsController, add @GetMapping(\"/forecast-counts\") @Transactional(readOnly=true) public RecallForecastCountsDTO forecastCounts(@RequestParam(\"timezone\") String timezone), with the same auth, TimezoneUtils.parseTimezone, and testabilitySettings timestamp flow as recalling.","Run generateTypeScript so RecallsController.forecastCounts, ForecastCounts response types, open_api_docs.yaml, and api-summary are regenerated.","In RecallPage.vue, add local forecast count state and silently call RecallsController.forecastCounts when the existing Load more area becomes visible. Do not call loadMore for counts, do not set toRepeat/currentIndex/diligentMode/treadmillMode from the forecast response, and ignore errors so existing buttons remain usable.","Render Load more buttons from [3,7,14]. Visible text may include the count, e.g. Load more from next 3 days (5), but set aria-label to the original exact label, e.g. Load more from next 3 days, to preserve Cypress/page-object role queries. Keep click handlers as loadMore(3), loadMore(7), loadMore(14)."],"unit_tests":{"backend":["RecallsControllerTests.Repeat.shouldRequireLoginForForecastCounts: null user calling forecastCounts(\"Asia/Shanghai\") throws ResponseStatusException.","RecallsControllerTests.Repeat.shouldReturnForecastCountsFor0_3_7_14DayWindows: freeze currentTime at makeMe.aTimestamp().of(0,0).please(); with Asia/Shanghai, create current user trackers at currentTime, +76h, +172h, +340h, and +341h; expect counts [{0,1},{3,2},{7,3},{14,4}] to prove timezone/half-day inclusive alignment.","RecallsControllerTests.Repeat.shouldExcludeDeletedAndRemovedTrackersFromForecastCounts: create one active due tracker, one removedFromTracking tracker, and one tracker on a note deleted through noteService.destroy; expect every relevant forecast count to include only the active tracker."],"frontend":["RecallPage.spec.ts: mock RecallsController.forecastCounts in beforeEach with counts for 0,3,7,14.","When toRepeat is [], mount page and assert forecastCounts is called with query timezone Asia/Shanghai; assert visible button text includes counts for 3,7,14 and buttons retain aria-label values Load more from next 3 days/7 days/14 days.","Click a count-labeled Load more button and assert RecallsController.recalling is still called with the same dueindays value and existing setDiligentMode expectations remain true for dueInDays > 0.","When forecastCounts returns an error, assert the original Load more buttons render without counts and clicking still calls recalling.","With treadmillMode true and only spelling trackers remaining, assert the forecast fetch does not reset currentIndex, does not change toRepeat, and does not call recalling before a Load more click."]},"validation_commands":["CURSOR_DEV=true nix develop -c pnpm backend:test_only","CURSOR_DEV=true nix develop -c pnpm generateTypeScript","CURSOR_DEV=true nix develop -c pnpm frontend:test tests/pages/RecallPage.spec.ts","CURSOR_DEV=true nix develop -c pnpm frontend:build","CURSOR_DEV=true nix develop -c pnpm cli:bundle"],"compatibility_risks":["Forecast counts are cumulative by existing dueindays semantics: 7-day count includes 0-day and 3-day due trackers. Do not label them as incremental new items unless the UI subtracts prior buckets explicitly.","Counts are snapshots. The Load more click must still trust /api/recalls/recalling to return the actual queue because answers during the current session can reschedule trackers.","Treadmill mode filters spelling trackers in the UI, but existing due logic counts spelling trackers. Counts must remain informational and must not drive progress or queue filtering.","Changing visible button text can break exact accessible-name tests; preserve the original accessible name with aria-label while showing the count in visible/aria-hidden text.","Existing CLI paths use /api/recalls/recalling and should remain unaffected because that endpoint and DueMemoryTrackers shape are unchanged."],"open_questions":[]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:frontend/src/composables/useRecallData.ts, symbol:getToRecallCount, symbol:setCurrentRecallWindowEndAt, term:monotonic

### doughnut / doughnut-recall-scheduling-write-unittest-class

Class: write_unittest_class

Prompt:
```
Daily task: write-unittest-class plan for MemoryTracker recall-answer scheduling. Cover correct vs wrong answers, thinkingTimeMs adjustment, early reward/late penalty, nextRecallAt recomputation, and spelling vs non-spelling paths. Return valid compact JSON only with keys: target_class, behavior, existing_coverage, missing_coverage, test_location, test_cases, fixtures_or_mocks, assertions, targeted_command, risks. Do not modify files.
```

Expected evidence:
```json
{
  "files": [
    "backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java",
    "backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java",
    "backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java",
    "backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java",
    "backend/src/test/java/com/odde/doughnut/entities/ForgettingCurveThinkingTimeTest.java",
    "backend/src/test/java/com/odde/doughnut/algorithms/SpacedRepetitionEarlyRewardsAndLatePenaltyTest.java"
  ],
  "symbols": [
    "MemoryTracker",
    "markAsRecalled",
    "recalledSuccessfully",
    "recallFailed",
    "calculateNextRecallAt",
    "thinkingTimeMs"
  ],
  "terms": [
    "forgettingCurveIndex",
    "nextRecallAt",
    "early reward",
    "late penalty",
    "spelling"
  ]
}
```

Quality rubric:
- Maps the target class and answer paths to existing tests and missing coverage.
- Includes exact assertions for wrong-answer retry, success scheduling, thinking time, and spelling/non-spelling behavior.
- Names a targeted backend test command or test class.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-scheduling-write-unittest-class | baseline | coding_coverage | coding_coverage | no | no | no | 0.778 | 0.750 | 4 | yes | 487500 | 385664 |  | 8515 | 3458 | 499473 | 113809 | 0.068 | 36 | 0 | 36 | 325714 | 230332 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\doughnut-doughnut-recall-scheduling-write-unittest-class-baseline.jsonl

Codex prompt used:
```
Daily task: write-unittest-class plan for MemoryTracker recall-answer scheduling. Cover correct vs wrong answers, thinkingTimeMs adjustment, early reward/late penalty, nextRecallAt recomputation, and spelling vs non-spelling paths. Return valid compact JSON only with keys: target_class, behavior, existing_coverage, missing_coverage, test_location, test_cases, fixtures_or_mocks, assertions, targeted_command, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Use normal Codex CLI tools if needed. Keep exploration bounded, but gather enough evidence for a correct answer.
```

Final output:
```json
{"target_class":"RecallAnswerSchedulingTest covering RecallPromptController -> MemoryTrackerService -> MemoryTracker scheduling","behavior":"Answering a recall prompt increments recallCount; correct answers update forgettingCurveIndex, lastRecalledAt, and recompute nextRecallAt from the updated curve; wrong answers lower forgettingCurveIndex, keep lastRecalledAt unchanged, and schedule nextRecallAt at current time + 12h; thinkingTimeMs changes only successful-answer curve adjustment; MCQ answers update the non-spelling tracker while spelling answers update the spelling tracker.","existing_coverage":["MemoryTracker success/failure scheduling lives in backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:91,100,105,115.","Thinking-time adjustment lives in backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java:8,9,34,48,69 and is directly covered by backend/src/test/java/com/odde/doughnut/entities/ForgettingCurveThinkingTimeTest.java:22,30,38,62,70,78.","MCQ answer path stores thinkingTimeMs and updates a non-spelling tracker through backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:101 and backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:110; current tests cover count, fast-vs-slow, base-vs-null, and wrong-answer broad scheduling in backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java:65,86,94,119,149,193,203,213.","Spelling answer path stores thinkingTimeMs and updates the prompt memoryTracker through backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:206; current tests mirror count, fast-vs-slow, base-vs-null, and wrong-answer broad scheduling in backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java:374,409,417,469,496,547,556,566.","Early/late reward and penalty exact index values are covered only at direct MemoryTracker level with null thinkingTimeMs in backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java:100."],"missing_coverage":["No exact endpoint-level assertion that correct answers recompute nextRecallAt after updating lastRecalledAt and forgettingCurveIndex.","No exact assertion that wrong answers set nextRecallAt to currentUTCTimestamp + 12h; existing tests only assert less than current + 25h.","No dual-tracker tests proving MCQ/non-spelling answers leave the spelling tracker unchanged and spelling answers leave the non-spelling tracker unchanged.","No recall-answer endpoint test combining early/late timing with nextRecallAt recomputation; direct early/late coverage bypasses AnswerDTO/AnswerSpellingDTO paths."],"test_location":"backend/src/test/java/com/odde/doughnut/controllers/RecallAnswerSchedulingTest.java, extending ControllerTestBase; keep as a focused controller-level Spring test rather than adding another production-class-mirrored entity test.","test_cases":[{"name":"mcqCorrectAnswer_recomputesNextRecallAtAndOnlyUpdatesNonSpellingTracker","setup":"user with fixed intervals, note, normal tracker and spelling tracker for same note, normal tracker at forgettingCurveAndNextRecallAt(200.0f), current time = normal.nextRecallAt, MCQ recallPrompt for note, AnswerDTO choiceIndex=0 thinkingTimeMs=25000","assert":"normal recallCount increments, normal lastRecalledAt equals current time, normal nextRecallAt equals normal.calculateNextRecallAt(), normal nextRecallAt is after current time, spelling tracker recallCount/lastRecalledAt/nextRecallAt/forgettingCurveIndex unchanged"},{"name":"mcqWrongAnswer_setsTwelveHourRetryAndPreservesLastRecalledAt","setup":"same as MCQ but AnswerDTO choiceIndex=1 and current time = normal.nextRecallAt","assert":"normal recallCount increments, answer.correct=false, normal forgettingCurveIndex decreases, normal lastRecalledAt unchanged, normal nextRecallAt equals TimestampOperations.addHoursToTimestamp(current,12), spelling tracker unchanged"},{"name":"mcqCorrectAnswer_fastThinkingTimeRewardsMoreThanSlow","setup":"two equivalent normal trackers or reset same tracker between separate MCQ prompts at due time; answer once with 10000ms and once with 40000ms","assert":"fast resulting forgettingCurveIndex greater than slow, and each nextRecallAt equals calculateNextRecallAt after answer"},{"name":"mcqCorrectAnswer_earlyRewardLatePenaltyThroughAnswerPath","setup":"two equivalent normal trackers afterNthStrictRecall(2), answer one 24h early and one 24h late with thinkingTimeMs null/base","assert":"early resulting forgettingCurveIndex greater than late; both lastRecalledAt equal their answer time and nextRecallAt equals calculateNextRecallAt"},{"name":"spellingCorrectAnswer_recomputesNextRecallAtAndOnlyUpdatesSpellingTracker","setup":"note.rememberSpelling, normal tracker plus spelling tracker, spelling recallPrompt for spelling tracker, current time = spelling.nextRecallAt, AnswerSpellingDTO spellingAnswer=note.title thinkingTimeMs=25000","assert":"spelling recallCount increments, spelling lastRecalledAt equals current time, spelling nextRecallAt equals spelling.calculateNextRecallAt(), normal tracker unchanged"},{"name":"spellingWrongAnswer_setsTwelveHourRetryAndPreservesLastRecalledAt","setup":"same spelling setup with AnswerSpellingDTO spellingAnswer='wrong'","assert":"answer.correct=false, spelling forgettingCurveIndex decreases, spelling lastRecalledAt unchanged, spelling nextRecallAt equals current+12h, normal tracker unchanged"},{"name":"spellingCorrectAnswer_fastThinkingTimeRewardsMoreThanSlow","setup":"two equivalent spelling trackers/prompts or reset between prompts at due time; answer with 10000ms vs 40000ms","assert":"fast resulting forgettingCurveIndex greater than slow and nextRecallAt equals calculateNextRecallAt"}],"fixtures_or_mocks":["Use ControllerTestBase for SpringBootTest, transactions, MakeMe, currentUser, and testabilitySettings from backend/src/test/java/com/odde/doughnut/controllers/ControllerTestBase.java:9.","Use makeMe.aUser().withSpaceIntervals('1, 2, 4, 8') for deterministic repeat intervals, then currentUser.setUser(user).","Use makeMe.aNote().notebookOwnedBy(user) and rememberSpelling() where both normal and spelling trackers are needed.","Use makeMe.aMemoryTrackerFor(note).by(user).forgettingCurveAndNextRecallAt(200.0f) and .spelling() for due trackers; MemoryTrackerBuilder supports these at backend/src/test/java/com/odde/doughnut/testability/builders/MemoryTrackerBuilder.java:21,29,34,53.","Use makeMe.aRecallPrompt().ofAIGeneratedQuestion(makeMe.aMCQWithAnswer().please(), note) for MCQ and makeMe.aRecallPrompt().forMemoryTracker(spellingTracker).spelling() for spelling; RecallPromptBuilder supports these at backend/src/test/java/com/odde/doughnut/testability/builders/RecallPromptBuilder.java:47,69,74.","No OpenAI mock should be needed because these tests answer existing prompts rather than generating questions."],"assertions":["Use assertThat with equalTo, greaterThan, lessThan as in backend test conventions.","For correct answers assert answer.correct=true, recallCount old+1, lastRecalledAt=current, forgettingCurveIndex changes in expected direction, and nextRecallAt equals tracker.calculateNextRecallAt after the answer.","For wrong answers assert answer.correct=false, recallCount old+1, forgettingCurveIndex decreases, lastRecalledAt remains the pre-answer value, and nextRecallAt equals TimestampOperations.addHoursToTimestamp(current,12).","For path split assert every untouched tracker keeps the pre-answer snapshot of recallCount, lastRecalledAt, nextRecallAt, and forgettingCurveIndex.","For thinking time assert relative index ordering rather than exact float values unless testing ForgettingCurve directly."],"targeted_command":"CURSOR_DEV=true nix develop -c pnpm backend:test_only","risks":["Avoid exact float expectations in controller tests; exact curve math is already covered elsewhere and may make endpoint tests brittle.","Set currentUser before building trackers so userService.getMemoryTrackersFor finds the intended trackers.","Use testabilitySettings.timeTravelTo(current) before answering; otherwise timestamp assertions can be flaky.","When resetting a tracker for a second answer, create a fresh RecallPrompt because answered prompts cannot be answered twice.","Backend rules prefer all backend unit tests, so use backend:test_only rather than a single-file Gradle filter."]}
```

Idea checks: 6/8 (0.750)

Critical misses: file:backend/src/test/java/com/odde/doughnut/algorithms/SpacedRepetitionEarlyRewardsAndLatePenaltyTest.java, symbol:markAsRecalled, symbol:recalledSuccessfully, symbol:recallFailed

### doughnut / doughnut-recall-scheduling-security-audit

Class: security_audit

Prompt:
````
Daily task: security-audit this proposed recall API patch. Focus on user boundary, authorization, input validation for dueindays, data exposure, and test guardrails. Return valid compact JSON only with keys: status, findings, evidence_used, missing_coverage, non_findings, next_steps.

```diff
diff --git a/backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java b/backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java
@@ -39,7 +39,7 @@ class RecallsController {
   @GetMapping(value = {"/recalling"})
   public DueMemoryTrackers recalling(
       @AuthenticationPrincipal UserModel currentUser,
-      @RequestParam(name = "dueindays", required = false, defaultValue = "0") Integer dueInDays) {
+      @RequestParam(name = "dueindays", required = false, defaultValue = "14") Integer dueInDays) {
     return recallService.getDueMemoryTrackers(currentUser.getEntity(), currentUTCTimestamp(), currentUser.getTimeZone(), dueInDays);
   }
```
Do not modify files.
````

Expected evidence:
```json
{
  "files": [
    "backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java",
    "backend/src/main/java/com/odde/doughnut/services/RecallService.java",
    "backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java"
  ],
  "symbols": [
    "recalling",
    "UserModel",
    "getDueMemoryTrackers",
    "dueindays"
  ],
  "terms": [
    "authorization",
    "input validation",
    "data exposure",
    "defaultValue",
    "non_findings"
  ]
}
```

Quality rubric:
- Audits concrete security boundaries without turning every business change into a vulnerability.
- Checks user scoping, authorization/authentication, dueindays validation, data exposure, and tests.
- Separates actual findings from non-findings and missing coverage.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-scheduling-security-audit | baseline | review_bounded | review_coverage | no | no | no | 0.538 | 0.875 | 6 | yes | 783611 | 705664 |  | 9648 | 5108 | 798367 | 92703 | 0.058 | 37 | 0 | 37 | 256981 | 263776 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\doughnut-doughnut-recall-scheduling-security-audit-baseline.jsonl

Codex prompt used:
````
Daily task: security-audit this proposed recall API patch. Focus on user boundary, authorization, input validation for dueindays, data exposure, and test guardrails. Return valid compact JSON only with keys: status, findings, evidence_used, missing_coverage, non_findings, next_steps.

```diff
diff --git a/backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java b/backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java
@@ -39,7 +39,7 @@ class RecallsController {
   @GetMapping(value = {"/recalling"})
   public DueMemoryTrackers recalling(
       @AuthenticationPrincipal UserModel currentUser,
-      @RequestParam(name = "dueindays", required = false, defaultValue = "0") Integer dueInDays) {
+      @RequestParam(name = "dueindays", required = false, defaultValue = "14") Integer dueInDays) {
     return recallService.getDueMemoryTrackers(currentUser.getEntity(), currentUTCTimestamp(), currentUser.getTimeZone(), dueInDays);
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
{"status":"needs_changes","findings":[{"severity":"medium","title":"dueindays is unbounded and the new omitted-parameter default broadens the returned recall window","evidence":["backend/src/main/java/com/odde/doughnut/services/RecallService.java:39-58 uses dueInDays*24 to expand the query cutoff, then returns every matching MemoryTrackerLite","backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:26-33 filters by next_recall_at <= cutoff with no LIMIT/paging","backend/src/main/java/com/odde/doughnut/controllers/dto/MemoryTrackerLite.java:9-14 exposes memoryTrackerId and spelling","packages/generated/doughnut-backend-api/types.gen.ts:2854-2860 keeps dueindays optional"],"impact":"An authenticated caller that omits dueindays under the proposed default receives the next 14 days of recall tracker IDs instead of only currently due items. A caller can also pass very large values to enumerate all of their future recall tracker IDs and create large DB/response work.","recommendation":"Validate and cap dueindays server-side, e.g. reject negatives and values above an explicit maximum such as 14, and add paging/limit if the future window can contain many trackers."}],"evidence_used":[".cursor/agent-map.md","backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39-52","backend/src/main/java/com/odde/doughnut/services/RecallService.java:39-68","backend/src/main/java/com/odde/doughnut/services/UserService.java:65-70","backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:23-33,63-72","backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java:9-14","backend/src/main/java/com/odde/doughnut/controllers/dto/MemoryTrackerLite.java:9-14","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:41-45,61-70,109-134","frontend/src/pages/RecallPage.vue:248-260,401-403","frontend/tests/pages/RecallPage.spec.ts:176-191,777-795"],"missing_coverage":["No backend test proves omitted dueindays now intentionally defaults to 14; current checked-out controller still normalizes omitted dueInDays to 0 at backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:43-51.","No backend tests for negative, very large, blank, or non-numeric dueindays.","No recall-list test creates another user's due tracker and asserts it is excluded, despite repository evidence showing user_id filtering.","No response-shape guardrail test asserts /api/recalls/recalling only returns MemoryTrackerLite fields and not note content.","Tests were not run; this was a bounded review only."],"non_findings":["No cross-user leak found in the checked-out path: RecallsController requires a logged-in user at backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:44, RecallService passes that user through, and MemoryTrackerRepository filters by rp.user_id at backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:65-67.","The response DTO does not expose note text or notebook data; DueMemoryTrackers contains counts/window/toRepeat/dueInDays and MemoryTrackerLite contains only memoryTrackerId and spelling.","Current frontend page initialization explicitly calls loadMore(0), so first-party initial recall loading is not silently broadened by the backend default."],"next_steps":["Add @Min(0) and @Max(14) or equivalent explicit validation for dueindays before computing the cutoff.","Add controller tests for omitted dueindays=14 if intended, dueindays=0 current window, negative rejected, excessive rejected, and other-user trackers excluded.","Consider documenting or regenerating the API contract so clients know whether dueindays omission means current window or 14-day diligent mode."]}
```

Idea checks: 7/8 (0.875)

Critical misses: symbol:UserModel, symbol:getDueMemoryTrackers, term:authorization, term:input validation, term:data exposure, term:defaultValue

### doughnut / doughnut-recall-scheduling-code-review

Class: code_review

Prompt:
````
Daily task: review-code this proposed patch for recall-answer scheduling. Run technical review first, then business review/test coverage. Focus on correctness regressions, business behavior, missing tests, syntax/runtime bugs, and similar logic impact. Return valid compact JSON only with keys: technical_review, business_review, findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.

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
- Separates technical findings from business/test coverage.
- Checks similar success-path scheduling logic and asks for targeted tests.

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-scheduling-code-review | baseline | review_bounded | review_coverage | no | no | yes | 0.909 | 1.000 | 1 | yes | 233822 | 183936 |  | 5441 | 2344 | 241607 | 57671 | 0.158 | 19 | 0 | 19 | 114802 | 143487 |

#### Output: baseline

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\fair-baseline-only-2026-06-16\doughnut-doughnut-recall-scheduling-code-review-baseline.jsonl

Codex prompt used:
````
Daily task: review-code this proposed patch for recall-answer scheduling. Run technical review first, then business review/test coverage. Focus on correctness regressions, business behavior, missing tests, syntax/runtime bugs, and similar logic impact. Return valid compact JSON only with keys: technical_review, business_review, findings, business_coverage, similar_logic, missing_tests, files, symbols, risks, review_status.

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
{"technical_review":"Patch is incorrect. No syntax error is apparent, but replacing `currentUTCTimestamp + 12h` with `calculateNextRecallAt()` makes failed recalls schedule from stale `lastRecalledAt` because `recallFailed` does not update `lastRecalledAt`. Evidence: `calculateNextRecallAt` uses `getLastRecalledAt()` in `backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:91-93`; `recallFailed` only changes index and next recall in `backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100-102`; success updates `lastRecalledAt` before calculating next recall in `backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:105-112`.","business_review":"Reject. A wrong answer currently creates a short cooldown from the answer time; the proposed patch can leave the item immediately due or schedule it in the past, so failed cards may reappear in the same recall session instead of being retried later.","findings":[{"severity":"P1","title":"Failed recalls can remain immediately due","file":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","line":102,"details":"With the proposed `setNextRecallAt(calculateNextRecallAt())`, the next due time is based on the previous `lastRecalledAt`, not the failed-answer time. Since `ForgettingCurve.failed()` lowers/clamps the index in `backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java:69-70`, the recalculated interval is often shorter than the interval that made the prompt due; for example a due tracker at index 130 can drop to 110 and become `lastRecalledAt + 24h`, already before the current failed answer. Default/base trackers can recalculate to `lastRecalledAt` because repeat interval 0 is allowed by `backend/src/main/java/com/odde/doughnut/algorithms/SpacedRepetitionAlgorithm.java:27-33`."}],"business_coverage":"Existing wrong-answer tests cover count/index/lastRecalledAt and only assert `nextRecallAt < current + 25h` in `backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java:213-220` and `:566-573`; that upper bound would still pass for a past or immediate `nextRecallAt`. Custom spaced-repetition tests in `backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java:99-119` cover successful recalls only.","similar_logic":["`recalledSuccessfully` sets `lastRecalledAt` to current before calling `calculateNextRecallAt`, so the helper is safe there: `backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:105-112`.","`MemoryTrackerService.updateForgettingCurve` uses `calculateNextRecallAt` when adjusting an existing tracker relative to its current `lastRecalledAt`: `backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:104-107`.","`MemoryTrackerBuilder.forgettingCurveAndNextRecallAt` mirrors that helper for test setup, not failed-answer scheduling: `backend/src/test/java/com/odde/doughnut/testability/builders/MemoryTrackerBuilder.java:37-40`."],"missing_tests":["Add a focused `MemoryTracker.recallFailed` or controller wrong-answer test asserting `nextRecallAt` is after the failed answer time, ideally exactly `currentUTCTimestamp + 12h`.","Add the same wrong-answer next-recall assertion for spelling recalls.","Add a regression case for a mature tracker due after several successful recalls, then failed, verifying `nextRecallAt` is not in the past or immediately due."],"files":["backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java","backend/src/main/java/com/odde/doughnut/algorithms/SpacedRepetitionAlgorithm.java","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java","backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java","backend/src/test/java/com/odde/doughnut/testability/builders/MemoryTrackerBuilder.java"],"symbols":["MemoryTracker.recallFailed","MemoryTracker.calculateNextRecallAt","MemoryTracker.recalledSuccessfully","MemoryTracker.markAsRecalled","ForgettingCurve.failed","ForgettingCurve.getRepeatInHours","SpacedRepetitionAlgorithm.getRepeatInHours","MemoryTrackerService.markAsRecalled"],"risks":["Immediate repeat loops or same-session resurfacing after wrong answers.","Overdue mature cards can be rescheduled into the past after a failure.","Existing tests may pass despite the regression because they only check an upper bound on failed next recall time.","`currentUTCTimestamp` becomes unused in `recallFailed`, hiding that failed scheduling no longer depends on answer time."],"review_status":"patch is incorrect"}
```

Idea checks: 8/8 (1.000)

Critical misses: term:changes_requested
