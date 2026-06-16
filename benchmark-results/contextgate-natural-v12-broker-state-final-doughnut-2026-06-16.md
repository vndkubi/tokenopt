# Context Governor Suite Benchmark

Generated: 2026-06-16T11:32:32.631Z
Suite: Developer Daily Playbook Suite 2026-06-14
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: contextgate-natural
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-business-deepdive | contextgate-natural | coding_coverage | coding_coverage | yes | no | yes | 1.000 | 0.750 | 0 | yes | 62237 | 37504 |  | 2178 | 711 | 65126 | 27622 | 0.362 | 1 | 1 | 0 | 64115 | 119320 |
| doughnut | doughnut-recall-forecast-pbi-investigate | contextgate-natural | compile_evidence | overview_contract | yes | no | yes | 1.000 | 0.875 | 0 | yes | 64061 | 22144 |  | 2445 | 734 | 67240 | 45096 | 0.222 | 1 | 1 | 0 | 63793 | 120865 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | contextgate-natural | ask_or_bypass | artifact_sufficiency | yes | no | yes | 0.938 | 0.875 | 1 | yes | 59821 | 51328 |  | 4224 | 2343 | 66388 | 15060 | 0.623 | 1 | 1 | 0 | 47055 | 182402 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| contextgate-natural | 3 | 3/3 | 3/3 | 62237 | 62040 | 2949 | 66251 | 29259 | 0.979 | 0.833 | 0.402 | 0.33 | 1.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| business_deepdive | contextgate-natural | 1 | 1/1 | 1/1 | 62237 | 62237 | 2178 | 65126 | 27622 | 1.000 | 0.750 | 0.362 | 0.00 | 1.0 | 0.0 | 119320 |
| pbi_investigate | contextgate-natural | 1 | 1/1 | 1/1 | 64061 | 64061 | 2445 | 67240 | 45096 | 1.000 | 0.875 | 0.222 | 0.00 | 1.0 | 0.0 | 120865 |
| bug_trace | contextgate-natural | 1 | 1/1 | 1/1 | 59821 | 59821 | 4224 | 66388 | 15060 | 0.938 | 0.875 | 0.623 | 1.00 | 1.0 | 0.0 | 182402 |

## Task Details

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
| doughnut | doughnut-recall-business-deepdive | contextgate-natural | coding_coverage | coding_coverage | yes | no | yes | 1.000 | 0.750 | 0 | yes | 62237 | 37504 |  | 2178 | 711 | 65126 | 27622 | 0.362 | 1 | 1 | 0 | 64115 | 119320 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v12-broker-state-final-doughnut-2026-06-16\doughnut-doughnut-recall-business-deepdive-contextgate-natural.jsonl

Codex prompt used:
```
Daily task: business deepdive the learner recall experience. Explain how due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode fit together. Return valid compact JSON only with keys: summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Treat this as a natural developer request. Keep the user's prompt, project instructions, and agent instructions authoritative; this benchmark only adds a bounded evidence contract and output constraints.
- Evidence slots to satisfy before final answer: source_files, symbols, existing_tests, risks, backend_entrypoint_api, service_domain_logic, frontend_state_or_caller_when_present, business_invariants_or_bug_symptom, validation_commands.
- Repository root for any context broker or bounded source tool that asks for cwd/root: D:\Personal\Projects\doughnut.
- If a context broker is available, use it when it can replace broad exploration. Pass only the original Daily task text, inferred task_type=research_business, required_slots=["source_files","symbols","existing_tests","risks","backend_entrypoint_api","service_domain_logic","frontend_state_or_caller_when_present","business_invariants_or_bug_symptom","validation_commands"], budget_tokens around 1800, and quality_rubric=["Connects backend recall loading, answer submission, scheduling state, and frontend session behavior.","Separates spelling and non-spelling paths and names current-window metadata.","Names existing source and test surfaces."].
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
{"summary":"TokenOpt marked the task answerable. The learner recall experience is a session loop: the frontend loads due memory trackers, the learner answers either quiz/non-spelling or spelling prompts, backend services update MemoryTracker scheduling state, and the frontend uses current recall window metadata plus treadmill mode to decide what to show next.","business_flow":["Due recall loading starts in frontend/src/pages/RecallPage.vue via loadCurrentDueRecalls/loadMore, which call RecallsController.recalling with timezone and optional dueindays; backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java delegates to RecallService.getDueMemoryTrackers.","RecallService groups trackers into due/extra-repeat concepts including toRepeat and currentRecallWindowEndAt, returning DueMemoryTrackers for the active learner session.","Answering uses backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java. Non-spelling quiz answers go through answerQuiz; spelling answers go through answerSpelling and AnswerSpellingDTO.","Scheduling is persisted on MemoryTracker: recalledSuccessfully, recallFailed, markAsRecalled, thinkingTimeMs, nextRecallAt, and ForgettingCurve determine the next review time.","The frontend holds currentRecallWindowEndAt through useRecallData/RecallPage and updates it with setCurrentRecallWindowEndAt so the UI knows the current due horizon while loading more recalls.","Treadmill mode is a frontend session behavior in RecallPage.vue; evidence shows it toggles a treadmill-mode class and explicitly keeps the current pointer on a non-spelling tracker, so it appears intended for continuous review flow rather than spelling-first interruption."],"core_entities":["DueMemoryTrackers: backend DTO returned by recall loading, containing due recall session data and current-window metadata.","MemoryTracker: core scheduled-learning entity with nextRecallAt and recall success/failure transitions.","ForgettingCurve: scheduling model used by MemoryTracker to calculate future recall timing.","RecallPrompt: answer-facing prompt resource returned/updated by answer APIs.","AnswerSpellingDTO: spelling-answer payload for the spelling path.","currentRecallWindowEndAt: metadata boundary for the loaded/current recall window.","dueindays: optional recall-loading horizon used by frontend loadMore and backend recalling.","treadmillMode: frontend recall mode that changes session navigation, especially around non-spelling trackers."],"files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java","backend/src/main/java/com/odde/doughnut/services/RecallService.java","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java","frontend/src/pages/RecallPage.vue","frontend/src/composables/useRecallData.ts","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java","frontend/tests/pages/RecallPage.spec.ts","cli/tests/recallJustReviewInteractive.test.tsx","e2e_test/start/pageObjects/recallPage.ts","e2e_test/step_definitions/recall.ts"],"symbols":["RecallsController.recalling","RecallService.getDueMemoryTrackers","RecallService.getMemoryTrackersNeedToRepeat","RecallPromptController.answerQuiz","RecallPromptController.answerSpelling","MemoryTrackerService","MemoryTracker.recalledSuccessfully","MemoryTracker.recallFailed","MemoryTracker.markAsRecalled","MemoryTracker.nextRecallAt","MemoryTracker.thinkingTimeMs","ForgettingCurve","RecallPage.loadMore","RecallPage.loadCurrentDueRecalls","useRecallData","currentRecallWindowEndAt","setCurrentRecallWindowEndAt","treadmillMode","dueindays","toRepeat","spelling","nonSpelling"],"existing_tests":["backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java covers recalling with timezone and dueindays cases.","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java covers answer prompt API behavior.","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java covers scheduling/answer service behavior.","frontend/tests/pages/RecallPage.spec.ts covers RecallPage state and UI behavior.","cli/tests/recallJustReviewInteractive.test.tsx covers interactive recall flow against generated RecallsController typing.","e2e_test/step_definitions/recall.ts and e2e_test/start/pageObjects/recallPage.ts cover browser-level recall interactions."],"risks":["Backend/domain grounding is strong for named symbols, but the broker only exposed bounded slices; exact DTO fields inside DueMemoryTrackers are inferred from symbol names and tests rather than fully enumerated here.","Treadmill mode evidence is frontend-heavy; backend has no separate treadmill symbol in the packet, so business behavior may be entirely client-side.","Spelling vs non-spelling separation is clear at answer API level, but product rules for when a tracker becomes spelling are not fully covered by the packet.","Current recall window semantics depend on currentRecallWindowEndAt, dueindays, and toRepeat; boundary rules should be verified before changing scheduling behavior."],"next_questions":["What exact UX should treadmill mode optimize: infinite review, skipping spelling, or prioritizing non-spelling prompts?","Should loadMore(dueindays=3) merge with or replace the currentRecallWindowEndAt window?","Are spelling recalls scheduled with the same ForgettingCurve parameters as non-spelling quiz recalls?","Which business metric matters most for this flow: recalls completed, retention quality, time-to-answer, or uninterrupted session length?"]}
```

Idea checks: 6/8 (0.750)

Critical misses: none

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
| doughnut | doughnut-recall-forecast-pbi-investigate | contextgate-natural | compile_evidence | overview_contract | yes | no | yes | 1.000 | 0.875 | 0 | yes | 64061 | 22144 |  | 2445 | 734 | 67240 | 45096 | 0.222 | 1 | 1 | 0 | 63793 | 120865 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v12-broker-state-final-doughnut-2026-06-16\doughnut-doughnut-recall-forecast-pbi-investigate-contextgate-natural.jsonl

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
{"pbi_summary":"Investigate adding recall forecast counts so the Recall page can show due-now count and how many additional items would be included by loading the next 3, 7, and 14 days. TokenOpt marked the evidence packet answerable=true with missing=[].","business_flow":"Doughnut is a PKM/spaced-repetition product. Learners use the Recall page to review MemoryTracker items whose nextRecallAt falls inside the current recall window. Current flow appears to call RecallsController.recalling(timezone,dueindays), then RecallService.getDueMemoryTrackers loads DueMemoryTrackers for the requested window, while frontend state in RecallPage.vue/useRecallData.ts tracks currentRecallWindowEndAt, treadmillMode, current-session progress, and loadMore buttons.","acceptance_criteria":["Backend recall response exposes forecast counts for windows 0,3,7,14 days.","Forecast counts use the same timezone and half-day alignment rules as existing recall loading for dueindays/currentRecallWindowEndAt.","Counts are monotonic by window: count(0)<=count(3)<=count(7)<=count(14).","Counts exclude deleted/removed trackers, matching current due item eligibility.","Existing load-more behavior for 3/7/14 days remains compatible with current API callers.","Recall page done state and buttons display forecast counts without resetting treadmill mode or current-session progress."],"impacted_files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java: backend API entry point RecallsController.recalling(timezone,dueindays).","backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java: likely response DTO needing forecast count fields or nested forecast structure; cited via import/use in RecallsController evidence.","backend/src/main/java/com/odde/doughnut/services/RecallService.java: service domain logic; getDueMemoryTrackers and currentRecallWindowEndAt/toRepeat behavior should be reused for forecast computation.","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java: domain entity with nextRecallAt, recalledSuccessfully, recallFailed, markAsRecalled.","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java: recall scheduling/service behavior around nextRecallAt and answer flows.","frontend/src/pages/RecallPage.vue: Recall page caller/state; loadMore(dueInDays), loadCurrentDueRecalls, currentRecallWindowEndAt, treadmillMode, done-state/buttons.","frontend/src/composables/useRecallData.ts: recall frontend state holder used by RecallPage.","packages/generated/doughnut-backend-api: generated TypeScript client may need regeneration after OpenAPI/DTO changes.","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java: existing backend tests for recalling(timezone,dueindays), including 0 and 3 day behavior.","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java: service/domain test area for tracker scheduling.","frontend/tests/pages/RecallPage.spec.ts: frontend Recall page tests.","e2e_test/start/pageObjects/recallPage.ts and e2e_test/step_definitions/recall.ts: E2E page object/steps for recall UX."],"symbols":["RecallsController","RecallsController.recalling","DueMemoryTrackers","RecallService","RecallService.getDueMemoryTrackers","MemoryTracker","MemoryTracker.nextRecallAt","MemoryTracker.markAsRecalled","MemoryTracker.recalledSuccessfully","MemoryTracker.recallFailed","MemoryTrackerService","ForgettingCurve","RecallPromptController.answerQuiz","RecallPromptController.answerSpelling","RecallPage.vue loadMore","RecallPage.vue loadCurrentDueRecalls","useRecallData","currentRecallWindowEndAt","setCurrentRecallWindowEndAt","treadmillMode","dueindays"],"unknowns":["Exact current half-day alignment implementation was not exposed in the compact evidence beyond terms currentRecallWindowEndAt and halfDay; implementation should locate and reuse the existing helper rather than duplicate date math.","Exact deleted/removed tracker predicate was not shown in the packet; forecast query must reuse the same eligibility filter as current recall loading.","OpenAPI/schema generation path is implied by package scripts generateTypeScript/openAPIToTypeScript and packages/generated, but exact command ordering should be confirmed before edits.","Whether forecast counts should mean total items due within each window or additional items beyond the currently loaded window needs product wording confirmation; PBI says due now and how many more would be loaded, so UI may need delta labels while API can expose cumulative monotonic counts."],"risks":["Date boundary drift: forecast counts and loadMore results can diverge if timezone and half-day window-end calculations are implemented separately.","Non-monotonic counts: separate queries with inconsistent filters or deleted/removed handling could produce 7-day counts lower than 3-day counts.","Compatibility risk: changing DueMemoryTrackers response shape must not break existing generated TS client, CLI tests, or current RecallsController callers.","Frontend state risk: displaying forecast counts in done/buttons must not mutate currentRecallWindowEndAt until the user clicks loadMore and must not reset treadmillMode/current-session progress.","Performance risk: four forecast windows could trigger redundant tracker scans unless service code shares query/filter work or uses efficient counts.","Test gap risk: existing tests cover recalling(timezone,dueindays) and RecallPage behavior, but new monotonic forecast, timezone half-day, and deleted/removed exclusion cases will need focused tests."],"next_steps":["Before edits, inspect exact implementations around RecallService.getDueMemoryTrackers, DueMemoryTrackers, and any half-day/currentRecallWindowEndAt helper.","Backend plan: add a forecast-count structure to DueMemoryTrackers or an adjacent response DTO; compute windows 0,3,7,14 through the same due-window logic used by dueindays loading.","Frontend plan: update generated API types, then show due-now and next-window delta counts in RecallPage done state/loadMore buttons while preserving existing loadMore calls.","Tests to add/update: RecallsControllerTests for forecast windows, monotonicity, timezone/half-day boundary, and deleted/removed exclusion; RecallPage.spec.ts for button/done-state text and no treadmill/current-session regressions.","Validation commands from repo scripts: pnpm backend:test or pnpm backend:test_only for backend tests, pnpm frontend:test for RecallPage specs, pnpm generateTypeScript/openAPIToTypeScript if DTO/OpenAPI changes are made."]}
```

Idea checks: 7/8 (0.875)

Critical misses: none

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
| doughnut | doughnut-recall-wrong-answer-bug-trace | contextgate-natural | ask_or_bypass | artifact_sufficiency | yes | no | yes | 0.938 | 0.875 | 1 | yes | 59821 | 51328 |  | 4224 | 2343 | 66388 | 15060 | 0.623 | 1 | 1 | 0 | 47055 | 182402 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v12-broker-state-final-doughnut-2026-06-16\doughnut-doughnut-recall-wrong-answer-bug-trace-contextgate-natural.jsonl

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
```json
{"summary":"Likely regression is in the recall-answer backend path: incorrect answers should call `MemoryTracker.recallFailed(currentUTCTimestamp)` and persist `nextRecallAt` as about +12h, but evidence points to a later/unconditional `MemoryTrackerService` update recalculating `nextRecallAt`, which can overwrite the failure retry. No files modified.","reproduction_path":["Fetch due recall prompts from frontend caller `frontend/src/pages/RecallPage.vue` via generated `RecallsController.recalling`; backend entrypoint is `backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java` -> `RecallService.getDueMemoryTrackers`.","Answer a quiz or spelling recall incorrectly; backend entrypoints are `RecallPromptController.answerQuiz` and `RecallPromptController.answerSpelling` in `backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java`.","Trace service/domain handling through `MemoryTrackerService` to `MemoryTracker.markAsRecalled`, which should dispatch incorrect results to `MemoryTracker.recallFailed`.","Expected invariant: after a wrong answer, persisted `MemoryTracker.nextRecallAt` should be answer time plus about 12 hours. Regression symptom: persisted next retry is no longer around +12h, likely because the service recalculates it after the failure branch."],"root_cause_hypotheses":[{"confidence":"high","hypothesis":"`MemoryTracker.recallFailed` sets the intended 12-hour retry, but `MemoryTrackerService` later calls `memoryTracker.setNextRecallAt(memoryTracker.calculateNextRecallAt())` unconditionally, replacing the failure retry with forgetting-curve/success scheduling."},{"confidence":"medium","hypothesis":"`MemoryTrackerService.answerQuiz` or `answerSpelling` may be routing an incorrect assessment through the success path, so `MemoryTracker.recalledSuccessfully` or `calculateNextRecallAt` runs instead of `recallFailed`."},{"confidence":"low","hypothesis":"The retry may be scheduled correctly but hidden by recall-fetch filtering in `RecallService.getDueMemoryTrackers`, especially around `currentRecallWindowEndAt` or repeat-window logic; verify persistence first."}],"files":[{"path":"backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","role":"Domain scheduling owner; contains `recallFailed`, `recalledSuccessfully`, `markAsRecalled`, `nextRecallAt`, and the 12-hour retry invariant."},{"path":"backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","role":"Likely regression point; answer handling includes `answerQuiz`/`answerSpelling` and evidence shows `memoryTracker.setNextRecallAt(memoryTracker.calculateNextRecallAt())` around line 106."},{"path":"backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java","role":"Backend answer API entrypoint; methods `answerQuiz` and `answerSpelling` receive learner responses and delegate to service logic."},{"path":"backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","role":"Backend due-recall fetch entrypoint; connects `recalling` flow to `RecallService.getDueMemoryTrackers`."},{"path":"backend/src/main/java/com/odde/doughnut/services/RecallService.java","role":"Due/repeat retrieval logic; check only after verifying persisted `nextRecallAt`."},{"path":"frontend/src/pages/RecallPage.vue","role":"Frontend caller; fetches due recalls through `RecallsController.recalling` and submits learner answers through generated prompt controller calls."},{"path":"frontend/src/composables/useRecallData.ts","role":"Frontend recall state; useful for confirming no client-side retry timing assumption exists."},{"path":"backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java","role":"Primary place for regression coverage of wrong-answer scheduling."},{"path":"backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java","role":"Controller-level regression coverage for incorrect quiz/spelling answers."},{"path":"backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java","role":"Due-recall fetch coverage after a +12h retry time."},{"path":"frontend/tests/pages/RecallPage.spec.ts","role":"Optional UI flow coverage if API behavior changes affect the page state."}],"symbols":["RecallPage.vue `RecallsController.recalling`","RecallsController.getDueMemoryTrackers/recalling","RecallService.getDueMemoryTrackers","RecallPromptController.answerQuiz","RecallPromptController.answerSpelling","MemoryTrackerService.answerQuiz","MemoryTrackerService.answerSpelling","MemoryTrackerService mark/update path around `setNextRecallAt(calculateNextRecallAt())`","MemoryTracker.markAsRecalled","MemoryTracker.recallFailed","MemoryTracker.recalledSuccessfully","MemoryTracker.nextRecallAt","ForgettingCurve","TimestampOperations.addHoursToTimestamp"],"tests_to_run":["Add or update `backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java`: incorrect quiz answer persists `nextRecallAt == answeredAt + 12h` and does not call/observe success interval scheduling.","Add or update `MemoryTrackerServiceTest`: correct answer still uses `recalledSuccessfully`/forgetting-curve scheduling, proving wrong-answer retry is distinct from success scheduling.","Add or update `backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java`: `answerQuiz` and `answerSpelling` incorrect submissions return/persist a prompt whose tracker retry is about +12h.","Run focused backend tests, likely from repo root: `./gradlew :backend:test --tests com.odde.doughnut.services.MemoryTrackerServiceTest --tests com.odde.doughnut.controllers.RecallPromptControllerTests --tests com.odde.doughnut.controllers.RecallsControllerTests` or Windows equivalent `gradlew.bat`; exact command was not verified by tool output.","Optionally run `frontend/tests/pages/RecallPage.spec.ts` if the handoff changes generated API response shape or recall-page state handling."],"fix_plan":["In `MemoryTrackerService`, locate the answer handling path that currently updates `nextRecallAt` after `markAsRecalled`/assessment handling.","Change scheduling so incorrect answers preserve `MemoryTracker.recallFailed(currentUTCTimestamp)` as the only writer of `nextRecallAt` for that answer. Gate `setNextRecallAt(calculateNextRecallAt())` behind a correct-answer branch, or move all scheduling decisions into `MemoryTracker.markAsRecalled`.","Keep success behavior unchanged: correct answers should still update the forgetting curve and calculate the next recall from `ForgettingCurve`.","Add focused regression tests before/with the fix for quiz and spelling incorrect answers, asserting about +12h retry and no overwrite by calculated success schedule.","Run focused service/controller tests, then a due-recall test that advances time to just before and after +12h to ensure `RecallService.getDueMemoryTrackers` surfaces the retry at the expected time."],"risks":["Broker returned inline source anchors and effective answerability, but not full file text in the visible transcript; line-level fix should be confirmed in the listed files before editing.","If `calculateNextRecallAt()` is intentionally used for some non-binary assessment states, the fix must branch on the actual assessment result rather than a broad null/boolean shortcut.","Time-zone and timestamp precision can make exact equality brittle; tests should compare against the same `TimestampOperations.addHoursToTimestamp(answeredAt, 12)` helper or a narrow tolerance.","Changing service scheduling could affect treadmill/repeat behavior if those flows reuse `markAsRecalled`; include one due-recall fetch regression around `RecallService.getDueMemoryTrackers`."]}
```

Idea checks: 7/8 (0.875)

Critical misses: term:thinkingTimeMs
