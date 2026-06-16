# Context Governor Suite Benchmark

Generated: 2026-06-16T10:16:48.327Z
Suite: Developer Daily Playbook Suite 2026-06-14
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: contextgate-natural
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-forecast-pbi-investigate | contextgate-natural | coding_coverage | coding_coverage | no | no | yes | 0.889 | 0.875 | 2 | yes | 68740 | 38528 |  | 6317 | 3891 | 78948 | 40420 | 0.220 | 1 | 1 | 0 | 106090 | 224254 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | contextgate-natural | ask_or_bypass | artifact_sufficiency | no | no | yes | 0.875 | 0.375 | 1 | no | 67286 | 50304 |  | 8076 | 5965 | 81327 | 31023 | 0.282 | 1 | 1 | 0 | 89988 | 573261 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| contextgate-natural | 2 | 2/2 | 1/2 | 68013 | 68013 | 7197 | 80138 | 35722 | 0.882 | 0.625 | 0.251 | 1.50 | 1.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| pbi_investigate | contextgate-natural | 1 | 1/1 | 1/1 | 68740 | 68740 | 6317 | 78948 | 40420 | 0.889 | 0.875 | 0.220 | 2.00 | 1.0 | 0.0 | 224254 |
| bug_trace | contextgate-natural | 1 | 1/1 | 0/1 | 67286 | 67286 | 8076 | 81327 | 31023 | 0.875 | 0.375 | 0.282 | 1.00 | 1.0 | 0.0 | 573261 |

## Task Details

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
| doughnut | doughnut-recall-forecast-pbi-investigate | contextgate-natural | coding_coverage | coding_coverage | no | no | yes | 0.889 | 0.875 | 2 | yes | 68740 | 38528 |  | 6317 | 3891 | 78948 | 40420 | 0.220 | 1 | 1 | 0 | 106090 | 224254 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v7-broker-inline-pbi-bug-doughnut-2026-06-16\doughnut-doughnut-recall-forecast-pbi-investigate-contextgate-natural.jsonl

Codex prompt used:
```
Daily task: investigate this PBI before planning edits. PBI: As a learner, I want the Recall page to show how many recall items are due now and how many more would be loaded from the next 3, 7, and 14 days, so that I can decide whether to continue recalling without blindly clicking each load-more button. Acceptance criteria: the recall API exposes forecast counts for due windows 0, 3, 7, and 14 days using the same timezone and half-day alignment rules as current recall loading; counts are monotonic by window and exclude deleted/removed trackers; existing Load more from next 3/7/14 days behavior remains compatible; Recall page done state/buttons display forecast counts without breaking treadmill mode or current-session progress. Return valid compact JSON only with keys: pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Treat this as a natural developer request. Keep the user's prompt, project instructions, and agent instructions authoritative; this benchmark only adds a bounded evidence contract and output constraints.
- Evidence slots to satisfy before final answer: source_files, symbols, existing_tests, risks, backend_entrypoint_api, service_domain_logic, frontend_state_or_caller_when_present, business_invariants_or_bug_symptom, validation_commands.
- Repository root for any context broker or bounded source tool that asks for cwd/root: D:\Personal\Projects\doughnut.
- If a context broker is available, use it when it can replace broad exploration. Pass only the original Daily task text, inferred task_type=research_business, required_slots=["source_files","symbols","existing_tests","risks","backend_entrypoint_api","service_domain_logic","frontend_state_or_caller_when_present","business_invariants_or_bug_symptom","validation_commands"], budget_tokens around 1800, and quality_rubric=["Translates the PBI into backend API/DTO/service and frontend recall-page impacts.","Preserves Load more and treadmill/current-session behavior as compatibility constraints.","Identifies monotonicity and timezone/half-day risks."].
- If the broker returns inline source evidence and broker_answerable=true, use those slices as the final evidence source; do not ask another provider for the same files/symbols.
- Do not follow a fixed tool script. Pick the cheapest bounded context source that fills the currently missing evidence slot.
- If the broker reports answerable=false, recommended_next_action=refill_missing_slots, or strict missing slots, do not produce the final answer yet. Make one bounded context/source refill focused on the broker's refill focus terms and missing slots, unless no such provider is visible.
- Prefer high-level context only for ownership/slot discovery; prefer exact bounded source slices when final quality depends on a named file, symbol, API path, UI state, or test.
- Stop acquiring context once the required slots are covered well enough to answer. Do not duplicate the same evidence through another provider.
- Shell fallback is disabled in this benchmark mode. If context remains incomplete, state the unresolved slot as a risk, missing_coverage, unknown, or next_question inside the requested JSON shape.
- Final output must be a syntactically valid compact single JSON object under 7500 characters. Preserve the requested JSON contract exactly.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"pbi_summary":"Expose recall forecast counts so the Recall page can show due-now and next 3/7/14-day availability before the learner clicks Load more. TokenOpt marked the investigation answerable=true with missing=[].","business_flow":["Learner opens Recall page; frontend state in frontend/src/composables/useRecallData.ts tracks toRepeat,currentRecallWindowEndAt,totalAssimilatedCount,treadmillMode,currentIndex,dueRecallsRefreshNonce (E5 inline).","RecallPage.vue renders the quiz while toRepeatCount>0 and shows the done-state alert plus Load more from next 3/7/14 days buttons when toRepeatCount===0 and previousAnsweredQuestionCursor is undefined (frontend/src/pages/RecallPage.vue,E5).","The frontend calls generated RecallsController.recalling with timezone and optional dueindays; backend RecallsController.recalling parses timezone, uses current UTC from testabilitySettings, defaults dueindays to 0, and delegates to RecallService.getDueMemoryTrackers (backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java,E5 inline).","RecallService.getDueMemoryTrackers builds toRepeat from getMemoryTrackersNeedToRepeat, sets dueInDays,totalAssimilatedCount,and currentRecallWindowEndAt using TimestampOperations.alignByHalfADay (backend/src/main/java/com/odde/doughnut/services/RecallService.java,E5 inline)."],"acceptance_criteria":["Recall API response includes forecast counts for windows 0,3,7,14 days without removing existing dueindays/toRepeat/currentRecallWindowEndAt/totalAssimilatedCount behavior.","Forecast counts use the same current UTC timestamp, timezone parsing, dueInDays*24 horizon, and half-day alignment semantics as current recall loading in RecallService/TimezoneUtils/TimestampOperations.","Counts are cumulative and monotonic: count0<=count3<=count7<=count14; UI can display 'more' values as window deltas while API remains monotonic.","Counts exclude deleted/removed trackers using the same predicate as current due recall selection and total assimilated not-removed counting.","Existing Load more from next 3/7/14 days remains compatible: clicking still loads the same recall items for that dueindays value.","Recall done state/buttons display forecast counts while preserving treadmill mode spelling-skip behavior and current-session progress state."],"impacted_files":[{"file":"backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","impact":"Backend API entrypoint for recalling(timezone,dueindays); likely response DTO changes only, preserving request params and default dueindays=0.","evidence":"E5 inline"},{"file":"backend/src/main/java/com/odde/doughnut/services/RecallService.java","impact":"Primary domain logic for due windows, half-day-aligned currentRecallWindowEndAt, toRepeat, totalAssimilatedCount; forecast helper should live here or nearby.","evidence":"E5 inline"},{"file":"backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java","impact":"Likely DTO to extend with forecast counts while preserving existing fields consumed by frontend/CLI.","evidence":"Imported/returned by RecallService in E5 inline"},{"file":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","impact":"Domain fields nextRecallAt,lastRecalledAt,assimilatedAt,spelling affect due status and treadmill display.","evidence":"E5 inline"},{"file":"frontend/src/pages/RecallPage.vue","impact":"Done-state alert/buttons, loadMore(3/7/14), toRepeatCount, treadmillMode and progress bindings need count display without changing loading behavior.","evidence":"E5 inline"},{"file":"frontend/src/composables/useRecallData.ts","impact":"Shared recall state may need forecast count storage or reset behavior alongside toRepeat/currentIndex/treadmillMode.","evidence":"E5 inline"},{"file":"packages/generated/doughnut-backend-api","impact":"Generated TypeScript SDK/types must be regenerated after backend OpenAPI/DTO changes.","evidence":"E1,E4,E5"},{"file":"backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java","impact":"Existing backend coverage for recalling timezone and dueindays should be extended for forecast counts, monotonicity, compatibility, and removed/deleted exclusion.","evidence":"E5"},{"file":"frontend/tests/pages/RecallPage.spec.ts","impact":"Frontend tests should assert button count labels and no breakage to done/current-session/treadmill states.","evidence":"E5"},{"file":"e2e_test/start/pageObjects/recallPage.ts","impact":"Page object likely needs selectors/assertions if E2E verifies load-more labels.","evidence":"E5"},{"file":"e2e_test/step_definitions/recall.ts","impact":"Step definitions likely need updated expectations for forecast count display.","evidence":"E5"},{"file":"cli/tests/recallJustReviewInteractive.test.tsx","impact":"DTO compatibility risk because CLI tests mock RecallsController.recalling return shape.","evidence":"E5"}],"symbols":[{"symbol":"RecallsController.recalling(timezone,dueindays)","file":"backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","role":"API entrypoint; parses timezone, obtains current UTC, defaults dueindays to 0, calls RecallService.getDueMemoryTrackers."},{"symbol":"RecallService.getDueMemoryTrackers(User,Timestamp,ZoneId,int)","file":"backend/src/main/java/com/odde/doughnut/services/RecallService.java","role":"Builds DueMemoryTrackers response; best place to attach forecast counts consistently."},{"symbol":"RecallService.getMemoryTrackersNeedToRepeat(User,Timestamp,ZoneId,int)","file":"backend/src/main/java/com/odde/doughnut/services/RecallService.java","role":"Current due-window path; uses TimestampOperations.addHoursToTimestamp(currentUTCTimestamp,dueInDays*24) before userService.getMemoryTrackersNeedToRepeat."},{"symbol":"TimestampOperations.alignByHalfADay/startOfHalfADay","file":"backend/src/main/java/com/odde/doughnut/services/RecallService.java","role":"Half-day boundary rules used by current recall window and previously answered prompts."},{"symbol":"DueMemoryTrackers","file":"backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java","role":"Response DTO carrying dueInDays,toRepeat,totalAssimilatedCount,currentRecallWindowEndAt; likely forecast count carrier."},{"symbol":"MemoryTracker.nextRecallAt/spelling/assimilatedAt","file":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","role":"Due scheduling, treadmill spelling handling, and assimilated/not-removed counting inputs."},{"symbol":"RecallPage.vue loadMore(3|7|14)","file":"frontend/src/pages/RecallPage.vue","role":"Existing buttons must keep behavior while adding visible counts."},{"symbol":"useRecallData.toRepeat/currentIndex/treadmillMode","file":"frontend/src/composables/useRecallData.ts","role":"Current-session progress and treadmill state that count display must not disrupt."}],"unknowns":["Exact response shape is undecided: map keyed by days, array of {dueInDays,count}, or named fields. Prefer a generated-client-friendly explicit DTO.","API counts should likely be cumulative because monotonicity is required; button text should likely show deltas, but product copy is not specified.","Broker evidence did not include repository query slices for removed/deleted predicates; before editing, inspect the exact UserService/MemoryTrackerRepository filters to guarantee count/load compatibility.","Need decide whether forecast counts refresh after each answered recall or remain from initial/load-more response; acceptance emphasizes current-session progress should not break."],"risks":["Forecast counts can diverge from Load more results if implemented with a separate query that does not reuse the same timezone, dueInDays*24 horizon, half-day alignment, user scoping, and removed/deleted predicates.","Monotonicity can fail if 0/3/7/14 windows are computed with different boundary inclusivity or current timestamps.","Counting by materializing four full toRepeat lists may be slow; a count query is better only if it exactly matches existing selection semantics.","Changing DueMemoryTrackers may require OpenAPI/generated TypeScript updates and CLI/frontend mock updates to avoid compile/test failures.","Treadmill mode skips spelling trackers in the UI; forecast counts should still represent recall items consistently with existing load-more behavior unless product explicitly wants non-spelling-only counts."],"next_steps":["Before implementation planning, read .cursor/agent-map.md and the relevant .cursor/rules for backend, frontend, generated API, and tests.","Confirm DTO shape for forecast counts, then extend backend DTO/API without removing existing fields or changing dueindays behavior.","Implement forecast counting in RecallService using one captured current UTC timestamp and the same timezone/window logic as getDueMemoryTrackers; assert monotonic counts in code or tests.","Extend RecallsControllerTests for windows 0/3/7/14, monotonicity, half-day/timezone boundary behavior, removed/deleted exclusion, and existing dueindays load compatibility.","Update generated API types, then update RecallPage/useRecallData to display counts on done-state buttons while preserving toRepeat/currentIndex/treadmillMode/current-session behavior.","Add or update frontend RecallPage tests and any E2E/CLI mocks affected by the DTO.","Suggested validation commands from package scripts: pnpm generateTypeScript, pnpm backend:test, pnpm frontend:test, and targeted RecallPage/RecallsController tests if the repo supports filtering."]}
```

Idea checks: 7/8 (0.875)

Critical misses: symbol:loadCurrentDueRecalls, symbol:setCurrentRecallWindowEndAt

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
| doughnut | doughnut-recall-wrong-answer-bug-trace | contextgate-natural | ask_or_bypass | artifact_sufficiency | no | no | yes | 0.875 | 0.375 | 1 | no | 67286 | 50304 |  | 8076 | 5965 | 81327 | 31023 | 0.282 | 1 | 1 | 0 | 89988 | 573261 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v7-broker-inline-pbi-bug-doughnut-2026-06-16\doughnut-doughnut-recall-wrong-answer-bug-trace-contextgate-natural.jsonl

Codex prompt used:
```
Daily task: bug trace. A regression report says that after a learner answers a recall prompt incorrectly, the next retry is no longer scheduled about 12 hours later. Trace the likely code path and produce a fix handoff. Return valid compact JSON only with keys: summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Treat this as a natural developer request. Keep the user's prompt, project instructions, and agent instructions authoritative; this benchmark only adds a bounded evidence contract and output constraints.
- Evidence slots to satisfy before final answer: source_files, symbols, existing_tests, risks, backend_entrypoint_api, service_domain_logic, frontend_state_or_caller_when_present, business_invariants_or_bug_symptom, validation_commands, entrypoint_or_owner, flow.
- Repository root for any context broker or bounded source tool that asks for cwd/root: D:\Personal\Projects\doughnut.
- If a context broker is available, use it when it can replace broad exploration. Pass only the original Daily task text, inferred task_type=investigate, required_slots=["source_files","symbols","existing_tests","risks","backend_entrypoint_api","service_domain_logic","frontend_state_or_caller_when_present","business_invariants_or_bug_symptom","validation_commands","entrypoint_or_owner","flow"], budget_tokens around 1800, and quality_rubric=["Starts from the bug symptom and traces controller/service/entity paths.","Identifies wrong-answer retry scheduling as distinct from success scheduling.","Names focused regression tests and risks."].
- If the broker returns inline source evidence and broker_answerable=true, use those slices as the final evidence source; do not ask another provider for the same files/symbols.
- Do not follow a fixed tool script. Pick the cheapest bounded context source that fills the currently missing evidence slot.
- If the broker reports answerable=false, recommended_next_action=refill_missing_slots, or strict missing slots, do not produce the final answer yet. Make one bounded context/source refill focused on the broker's refill focus terms and missing slots, unless no such provider is visible.
- Prefer high-level context only for ownership/slot discovery; prefer exact bounded source slices when final quality depends on a named file, symbol, API path, UI state, or test.
- Stop acquiring context once the required slots are covered well enough to answer. Do not duplicate the same evidence through another provider.
- Shell fallback is disabled in this benchmark mode. If context remains incomplete, state the unresolved slot as a risk, missing_coverage, unknown, or next_question inside the requested JSON shape.
- Final output must be a syntactically valid compact single JSON object under 7500 characters. Preserve the requested JSON contract exactly.
- Preserve the requested JSON contract exactly.
```

Final output:
```
{"summary":"Likely normal quiz flow: GET /api/recalls/recalling loads due trackers into frontend RecallPage/useRecallData.toRepeat, then an incorrect quiz answer POSTs to /api/recall-prompts/{recallPrompt}/answer. The backend should reach RecallPromptController.answerQuiz -> RecallQuestionService.answerQuestion -> MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion/markAsRecalled -> MemoryTracker.markAsRecalled(false). The invariant is distinct: wrong answers call MemoryTracker.recallFailed and set nextRecallAt to currentUTCTimestamp + 12 hours; correct answers call recalledSuccessfully and use forgetting-curve scheduling. No files modified.","reproduction_path":["Create or find a due non-spelling MemoryTracker for a learner; ensure it appears from GET /api/recalls/recalling?timezone=... via RecallsController.recalling.","In RecallPage.vue, the response populates useRecallData.toRepeat and renders Quiz for the current MemoryTrackerLite.","Submit an incorrect answer through POST /api/recall-prompts/{id}/answer.","Assert persisted memory_tracker.next_recall_at equals the test current UTC timestamp plus about 12 hours and recall_count increments.","Advance test time to about 12 hours later and assert /api/recalls/recalling returns that tracker again."],"root_cause_hypotheses":[{"rank":1,"hypothesis":"RecallQuestionService.answerQuestion no longer calls MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion with correct=false for an incorrect normal quiz answer, or it derives/inverts the correctness flag incorrectly.","evidence":"RecallPromptController.answerQuiz delegates to RecallQuestionService.answerQuestion; MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion has the failure scheduling hook; MemoryTracker.recallFailed still schedules +12h."},{"rank":2,"hypothesis":"The wrong-answer path is updating the wrong tracker or no tracker, especially where notes have spelling and non-spelling trackers.","evidence":"MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion filters out spelling trackers before markAsRecalled; answer-spelling is a separate RecallPromptController endpoint."},{"rank":3,"hypothesis":"A later recall-listing or frontend refresh change hides a correctly persisted +12h retry.","evidence":"RecallService.getDueMemoryTrackers queries due trackers using currentUTCTimestamp plus dueInDays, while RecallPage stores and advances local toRepeat state."},{"rank":4,"hypothesis":"A regression routes incorrect answers through the success path, so nextRecallAt is calculated by recalledSuccessfully/calculateNextRecallAt instead of recallFailed.","evidence":"MemoryTracker.recalledSuccessfully updates lastRecalledAt and uses ForgettingCurve repeat hours; recallFailed directly uses currentUTCTimestamp + 12."}],"files":[{"path":"backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java","evidence":"POST /api/recall-prompts/{recallPrompt}/answer enters answerQuiz and delegates to RecallQuestionService.answerQuestion; POST /answer-spelling is separate."},{"path":"backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","evidence":"updateMemoryTrackerAfterAnsweringQuestion selects the note's non-spelling tracker and calls markAsRecalled; markAsRecalled saves the tracker and handles wrong-answer threshold checks."},{"path":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","evidence":"recallFailed sets forgettingCurveIndex failed and nextRecallAt = TimestampOperations.addHoursToTimestamp(currentUTCTimestamp, 12); recalledSuccessfully uses forgetting-curve scheduling; markAsRecalled dispatches by successful flag."},{"path":"backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java","evidence":"failed reduces the curve index but does not decide retry timing; timing is in MemoryTracker.recallFailed."},{"path":"backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","evidence":"GET /api/recalls/recalling calls RecallService.getDueMemoryTrackers with current testability timestamp and timezone."},{"path":"backend/src/main/java/com/odde/doughnut/services/RecallService.java","evidence":"getDueMemoryTrackers builds DueMemoryTrackers.toRepeat from getMemoryTrackersNeedToRepeat and sets currentRecallWindowEndAt."},{"path":"frontend/src/pages/RecallPage.vue","evidence":"Reads RecallsController-generated due trackers, keeps currentIndex, renders Quiz, and listens for @answered."},{"path":"frontend/src/composables/useRecallData.ts","evidence":"Owns shared toRepeat, currentRecallWindowEndAt, currentIndex, treadmillMode, and dueRecallsRefreshNonce state."},{"path":"backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java","evidence":"Focused place for service-level regression coverage."},{"path":"backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java","evidence":"Focused place for POST /api/recall-prompts/{id}/answer regression coverage."},{"path":"backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java","evidence":"Focused place for due-list reappearance at current+12h."},{"path":"frontend/tests/pages/RecallPage.spec.ts","evidence":"Use only if frontend state refresh/list movement is changed."}],"symbols":["RecallsController.recalling","RecallService.getDueMemoryTrackers","RecallService.getMemoryTrackersNeedToRepeat","RecallPromptController.answerQuiz","RecallPromptController.answerSpelling","RecallQuestionService.answerQuestion","MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion","MemoryTrackerService.markAsRecalled","MemoryTracker.markAsRecalled","MemoryTracker.recallFailed","MemoryTracker.recalledSuccessfully","MemoryTracker.calculateNextRecallAt","ForgettingCurve.failed","RecallPage.vue Quiz @answered handler","useRecallData.toRepeat"],"tests_to_run":["Add or update backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java: incorrect normal quiz answer through updateMemoryTrackerAfterAnsweringQuestion schedules nextRecallAt = now + 12h and increments recallCount; run `./gradlew :backend:test --tests com.odde.doughnut.services.MemoryTrackerServiceTest` or the Windows wrapper equivalent.","Add or update backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java: POST /api/recall-prompts/{id}/answer with a wrong AnswerDTO persists memory_tracker.next_recall_at = now + 12h; run `./gradlew :backend:test --tests com.odde.doughnut.controllers.RecallPromptControllerTests`.","Add or update backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java: at now+12h, /api/recalls/recalling includes the failed tracker again; run `./gradlew :backend:test --tests com.odde.doughnut.controllers.RecallsControllerTests`.","If frontend code changes, run the repo's frontend targeted test command for frontend/tests/pages/RecallPage.spec.ts."],"fix_plan":["First inspect backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java around answerQuestion and confirm the wrong-answer branch calls MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion(user, currentUTCTimestamp, false, recallPrompt).","Add the MemoryTrackerService regression test before changing production code; it should prove the domain invariant that wrong normal recall answers schedule +12h, independent of success scheduling.","If answerQuestion skipped the update or passed the wrong correctness value, restore that call after answer correctness is determined and before returning the answered RecallPrompt.","If the bug is limited to spelling prompts, apply the equivalent failure scheduling in MemoryTrackerService.answerSpelling and add a separate test; do not change the non-spelling filter for normal quiz trackers blindly.","Add the controller-level test to guard the public API path and the RecallsController test to guard learner-visible reappearance around 12h.","Keep MemoryTracker.recalledSuccessfully unchanged unless a test proves success scheduling is also regressed."],"risks":["The exact RecallQuestionService.answerQuestion implementation was not included in the broker source slice, so the top hypothesis must be verified there first.","MemoryTrackerService.markAsRecalled accepts Boolean correct but MemoryTracker.markAsRecalled takes primitive boolean; a null correctness value would fail before scheduling, so tests should include wrong=false explicitly.","RecallService uses recall-window and dueInDays logic, so user-facing reappearance may align with the half-day window; assert persisted nextRecallAt separately from due-list visibility.","Spelling recall uses /answer-spelling and may have separate behavior; normal quiz fixes may not cover spelling regressions.","Failure currently does not update lastRecalledAt; changing that could alter success-delay math and should not be part of the minimal fix unless product confirms it."}
```

Idea checks: 3/8 (0.375)

Critical misses: term:thinkingTimeMs
