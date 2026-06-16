# Context Governor Suite Benchmark

Generated: 2026-06-16T13:17:43.190Z
Suite: Developer Daily Playbook Suite 2026-06-14
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: contextgate-natural
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-business-deepdive | contextgate-natural | coding_coverage | coding_coverage | yes | no | yes | 1.000 | 0.750 | 0 | yes | 63907 | 53888 |  | 2115 | 893 | 66915 | 13027 | 0.768 | 1 | 1 | 0 | 66064 | 79558 |
| doughnut | doughnut-recall-forecast-pbi-investigate | contextgate-natural | coding_coverage | coding_coverage | yes | no | yes | 1.000 | 0.875 | 0 | yes | 62665 | 51328 |  | 2141 | 807 | 65613 | 14285 | 0.700 | 1 | 1 | 0 | 65721 | 69174 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | contextgate-natural | ask_or_bypass | artifact_sufficiency | yes | no | yes | 1.000 | 0.875 | 0 | yes | 60342 | 38528 |  | 6313 | 4936 | 71591 | 33063 | 0.302 | 1 | 1 | 0 | 48584 | 200632 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| contextgate-natural | 3 | 3/3 | 3/3 | 62665 | 62305 | 3523 | 68040 | 20125 | 1.000 | 0.833 | 0.590 | 0.00 | 1.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| business_deepdive | contextgate-natural | 1 | 1/1 | 1/1 | 63907 | 63907 | 2115 | 66915 | 13027 | 1.000 | 0.750 | 0.768 | 0.00 | 1.0 | 0.0 | 79558 |
| pbi_investigate | contextgate-natural | 1 | 1/1 | 1/1 | 62665 | 62665 | 2141 | 65613 | 14285 | 1.000 | 0.875 | 0.700 | 0.00 | 1.0 | 0.0 | 69174 |
| bug_trace | contextgate-natural | 1 | 1/1 | 1/1 | 60342 | 60342 | 6313 | 71591 | 33063 | 1.000 | 0.875 | 0.302 | 0.00 | 1.0 | 0.0 | 200632 |

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
| doughnut | doughnut-recall-business-deepdive | contextgate-natural | coding_coverage | coding_coverage | yes | no | yes | 1.000 | 0.750 | 0 | yes | 63907 | 53888 |  | 2115 | 893 | 66915 | 13027 | 0.768 | 1 | 1 | 0 | 66064 | 79558 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v28-short-carry-full-doughnut-2026-06-16\doughnut-doughnut-recall-business-deepdive-contextgate-natural.jsonl

Codex prompt used:
```
Daily task: business deepdive the learner recall experience. Explain how due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode fit together. Return valid compact JSON only with keys: summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Treat this as a natural developer request. Keep the user's prompt, project instructions, and agent instructions authoritative; this benchmark only adds a bounded evidence contract and output constraints.
- Evidence slots to satisfy before final answer: source_files, symbols, existing_tests, risks, backend_entrypoint_api, service_domain_logic, business_invariants_or_bug_symptom, validation_commands, frontend_state_or_caller_when_present.
- Repository root for any context broker or bounded source tool that asks for cwd/root: D:\Personal\Projects\doughnut.
- If a context broker is available, use it when it can replace broad exploration. Pass only the original Daily task text, inferred task_type=research_business, required_slots=["source_files","symbols","existing_tests","risks","backend_entrypoint_api","service_domain_logic","business_invariants_or_bug_symptom","validation_commands","frontend_state_or_caller_when_present"], budget_tokens around 1800, and quality_rubric=["Connects backend recall loading, answer submission, scheduling state, and frontend session behavior.","Separates spelling and non-spelling paths and names current-window metadata.","Names existing source and test surfaces."].
- If the broker returns inline source evidence and broker_answerable=true, use those slices as the final evidence source; do not ask another provider for the same files/symbols.
- If the broker returns required_output_identifiers or suggested_symbols, preserve those exact identifiers in the closest requested output field such as symbols, files, tests_to_run, risks, unknowns, or fix_plan; when the requested JSON has a symbols key, start that array with suggested_symbols exactly, then add optional extras only if space remains.
- Keep compact JSON concise: use string arrays for files, symbols, tests, and risks unless the user explicitly asks for nested detail; keep the final object comfortably under the requested character limit so it remains valid JSON.
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
{"summary":"Doughnut's recall experience turns PKM notes into a learning loop: the backend finds due MemoryTracker items, the frontend runs a RecallPage session, answers are submitted through recall prompt APIs, and scheduling state updates nextRecallAt via the memory tracker/forgetting curve domain. TokenOpt marked the task answerable with missing=[].","business_flow":["Due recall loading: RecallPage.vue calls RecallsController.recalling with timezone and optional dueindays; RecallsController delegates to RecallService.getDueMemoryTrackers and returns DueMemoryTrackers for the learner's current queue.","Current-window metadata: RecallService/RecallPage share currentRecallWindowEndAt so the UI can distinguish the current due window from extra lookahead loaded by dueindays/loadMore.","Answering: non-spelling quiz answers go through RecallPromptController.answerQuiz; spelling answers go through RecallPromptController.answerSpelling/AnswerSpellingDTO. Both paths reach MemoryTrackerService/MemoryTracker scheduling behavior rather than being only UI state.","Scheduling: MemoryTracker.recalledSuccessfully, recallFailed, and markAsRecalled update recall outcome data; MemoryTrackerService sets nextRecallAt from MemoryTracker.calculateNextRecallAt using ForgettingCurve and thinkingTimeMs.","Spelling vs non-spelling: spelling is a distinct answer path and UI mode; treadmill mode explicitly points to a nonSpelling tracker, so continuous review avoids landing on spelling-only prompts when treadmill flow expects ordinary recall.","Treadmill mode: RecallPage.vue has treadmillMode session state, loadCurrentDueRecalls, loadMore, and nonSpelling selection behavior, tying repeated frontend consumption of due recalls to backend due-window loading."],"core_entities":["MemoryTracker","DueMemoryTrackers","RecallPrompt","AnswerSpellingDTO","ForgettingCurve","currentRecallWindowEndAt","nextRecallAt","thinkingTimeMs","spelling","nonSpelling","treadmillMode","dueindays"],"files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java","backend/src/main/java/com/odde/doughnut/services/RecallService.java","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java","frontend/src/pages/RecallPage.vue","frontend/src/composables/useRecallData.ts","e2e_test/start/pageObjects/recallPage.ts","e2e_test/step_definitions/recall.ts"],"symbols":["RecallsController","RecallPromptController","RecallService","DueMemoryTrackers","MemoryTracker","MemoryTrackerService","ForgettingCurve","getDueMemoryTrackers","markAsRecalled","recalledSuccessfully","recallFailed","answerQuiz","answerSpelling","nextRecallAt","thinkingTimeMs","spelling","toRepeat","currentRecallWindowEndAt","treadmillMode","dueindays","loadMore","loadCurrentDueRecalls","setCurrentRecallWindowEndAt","nonSpelling","useRecallData"],"existing_tests":["backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java","frontend/tests/pages/RecallPage.spec.ts","frontend/tests/components/recall/ViewMemoryTrackerLink.spec.ts","frontend/tests/pages/MemoryTrackerPage.spec.ts","cli/tests/recallJustReviewInteractive.test.tsx","cli/tests/spellingAnswerLine.test.ts","Validation commands surfaced by repo scripts: pnpm backend:test, pnpm frontend:test, pnpm test"],"risks":["Backend domain evidence is strong for recall loading and scheduling, but packet only exposed compact slices; deeper invariants like exact scoring thresholds should be verified before changing behavior.","Spelling and non-spelling separation spans backend APIs and frontend session selection, so regressions can occur if only one layer is tested.","currentRecallWindowEndAt and dueindays/loadMore create a business boundary between due-now and lookahead recalls; incorrect handling could overload learners or hide due work.","Treadmill mode depends on choosing nonSpelling trackers; mixed queues can produce edge cases around empty non-spelling results."],"next_questions":["What product rule should govern when learners can load extra dueindays lookahead beyond the current recall window?","Should treadmill mode intentionally exclude spelling forever, or switch to spelling when no nonSpelling recalls remain?","What exact ForgettingCurve thresholds and thinkingTimeMs effects should be treated as business invariants in tests?"]}
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
| doughnut | doughnut-recall-forecast-pbi-investigate | contextgate-natural | coding_coverage | coding_coverage | yes | no | yes | 1.000 | 0.875 | 0 | yes | 62665 | 51328 |  | 2141 | 807 | 65613 | 14285 | 0.700 | 1 | 1 | 0 | 65721 | 69174 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v28-short-carry-full-doughnut-2026-06-16\doughnut-doughnut-recall-forecast-pbi-investigate-contextgate-natural.jsonl

Codex prompt used:
```
Daily task: investigate this PBI before planning edits. PBI: As a learner, I want the Recall page to show how many recall items are due now and how many more would be loaded from the next 3, 7, and 14 days, so that I can decide whether to continue recalling without blindly clicking each load-more button. Acceptance criteria: the recall API exposes forecast counts for due windows 0, 3, 7, and 14 days using the same timezone and half-day alignment rules as current recall loading; counts are monotonic by window and exclude deleted/removed trackers; existing Load more from next 3/7/14 days behavior remains compatible; Recall page done state/buttons display forecast counts without breaking treadmill mode or current-session progress. Return valid compact JSON only with keys: pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Treat this as a natural developer request. Keep the user's prompt, project instructions, and agent instructions authoritative; this benchmark only adds a bounded evidence contract and output constraints.
- Evidence slots to satisfy before final answer: source_files, symbols, existing_tests, risks, backend_entrypoint_api, service_domain_logic, business_invariants_or_bug_symptom, validation_commands, frontend_state_or_caller_when_present.
- Repository root for any context broker or bounded source tool that asks for cwd/root: D:\Personal\Projects\doughnut.
- If a context broker is available, use it when it can replace broad exploration. Pass only the original Daily task text, inferred task_type=research_business, required_slots=["source_files","symbols","existing_tests","risks","backend_entrypoint_api","service_domain_logic","business_invariants_or_bug_symptom","validation_commands","frontend_state_or_caller_when_present"], budget_tokens around 1800, and quality_rubric=["Translates the PBI into backend API/DTO/service and frontend recall-page impacts.","Preserves Load more and treadmill/current-session behavior as compatibility constraints.","Identifies monotonicity and timezone/half-day risks."].
- If the broker returns inline source evidence and broker_answerable=true, use those slices as the final evidence source; do not ask another provider for the same files/symbols.
- If the broker returns required_output_identifiers or suggested_symbols, preserve those exact identifiers in the closest requested output field such as symbols, files, tests_to_run, risks, unknowns, or fix_plan; when the requested JSON has a symbols key, start that array with suggested_symbols exactly, then add optional extras only if space remains.
- Keep compact JSON concise: use string arrays for files, symbols, tests, and risks unless the user explicitly asks for nested detail; keep the final object comfortably under the requested character limit so it remains valid JSON.
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
{"pbi_summary":"Investigate adding recall forecast counts so learners can see due-now and next 3/7/14-day availability before clicking load-more. TokenOpt packet 757bf2d9 marked answerable=true with missing=[]. No files modified.","business_flow":["Doughnut is a PKM/spaced-repetition app; Recall helps learners review MemoryTracker items when nextRecallAt is due (E3,E5).","Backend entrypoint is RecallsController.recalling(timezone,dueindays), currently used by frontend RecallPage loadMore(dueInDays) and covered in RecallsControllerTests (E5).","Service/domain flow centers on RecallService.getDueMemoryTrackers, DueMemoryTrackers, MemoryTracker.nextRecallAt, recalledSuccessfully, recallFailed, and markAsRecalled (inline anchors).","Frontend caller/state is frontend/src/pages/RecallPage.vue: loadMore, loadCurrentDueRecalls, currentRecallWindowEndAt, setCurrentRecallWindowEndAt, treadmillMode, and current-session progress (inline anchors)."],"acceptance_criteria":["API response should expose forecast counts for windows [0,3,7,14] using the same timezone and half-day/currentRecallWindowEndAt alignment as existing recall loading.","Counts must be monotonic by window and exclude deleted/removed trackers.","Existing dueindays/load-more behavior for 3/7/14 days must remain compatible.","Recall page done state/buttons should display forecast counts without disrupting treadmillMode or current-session progress."],"impacted_files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","backend/src/main/java/com/odde/doughnut/services/RecallService.java","backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","frontend/src/pages/RecallPage.vue","frontend/src/composables/useRecallData.ts","packages/generated/doughnut-backend-api/package.json","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java","frontend/tests/pages/RecallPage.spec.ts","e2e_test/step_definitions/recall.ts","e2e_test/start/pageObjects/recallPage.ts","cli/tests/recallJustReviewInteractive.test.tsx"],"symbols":["RecallsController","RecallPromptController","RecallPage","MemoryTrackerService","RecallService","recalling","useRecallData","MemoryTracker","DueMemoryTrackers","ForgettingCurve","answerQuiz","getDueMemoryTrackers","markAsRecalled","recalledSuccessfully","recallFailed","answerSpelling","nextRecallAt","thinkingTimeMs","toRepeat","spelling","dueindays","loadMore","loadCurrentDueRecalls","currentRecallWindowEndAt","treadmillMode","setCurrentRecallWindowEndAt"],"unknowns":["Exact DTO shape for DueMemoryTrackers was not included in broker slices; likely needs a backward-compatible forecastCounts field or equivalent.","Exact API route annotation/path was not in the compact evidence; known entrypoint is RecallsController.recalling(timezone,dueindays).","Deleted/removed tracker predicate name was not surfaced; implementation must locate and reuse the existing exclusion rule."],"risks":["Timezone and half-day alignment can drift if forecast windows use new date math instead of the same RecallService loading boundary.","Counts may be non-monotonic if each window is queried independently with mismatched filters or exclusive/inclusive boundaries.","Forecast counts may accidentally include deleted/removed trackers unless the existing repeat query/filter is reused.","Adding DTO fields can require OpenAPI/generated TypeScript client refresh while preserving existing clients and CLI tests.","RecallPage UI can regress treadmillMode or current-session progress if done-state logic is coupled to forecast counts instead of loaded prompts."],"next_steps":["Inspect bounded files above, especially RecallsController.recalling, RecallService.getDueMemoryTrackers, DueMemoryTrackers, and RecallPage.vue loadMore/done-state logic.","Design backend forecast calculation as one shared service path over windows [0,3,7,14], reusing existing timezone/half-day and tracker exclusion rules.","Add/adjust RecallsControllerTests for due windows, monotonicity, deleted/removed exclusion, and compatibility of dueindays load-more.","Add/adjust RecallPage.spec.ts and e2e recall page expectations for button/done-state count display without treadmill/current-session regression.","Run targeted validation using existing scripts from package.json: pnpm backend:test, pnpm frontend:test, and relevant e2e/cy recall coverage if UI behavior changes."]}
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
| doughnut | doughnut-recall-wrong-answer-bug-trace | contextgate-natural | ask_or_bypass | artifact_sufficiency | yes | no | yes | 1.000 | 0.875 | 0 | yes | 60342 | 38528 |  | 6313 | 4936 | 71591 | 33063 | 0.302 | 1 | 1 | 0 | 48584 | 200632 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v28-short-carry-full-doughnut-2026-06-16\doughnut-doughnut-recall-wrong-answer-bug-trace-contextgate-natural.jsonl

Codex prompt used:
```
Daily task: bug trace. A regression report says that after a learner answers a recall prompt incorrectly, the next retry is no longer scheduled about 12 hours later. Trace the likely code path and produce a fix handoff. Return valid compact JSON only with keys: summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Treat this as a natural developer request. Keep the user's prompt, project instructions, and agent instructions authoritative; this benchmark only adds a bounded evidence contract and output constraints.
- Evidence slots to satisfy before final answer: source_files, symbols, existing_tests, risks, backend_entrypoint_api, service_domain_logic, business_invariants_or_bug_symptom, validation_commands, entrypoint_or_owner, flow.
- Repository root for any context broker or bounded source tool that asks for cwd/root: D:\Personal\Projects\doughnut.
- If a context broker is available, use it when it can replace broad exploration. Pass only the original Daily task text, inferred task_type=investigate, required_slots=["source_files","symbols","existing_tests","risks","backend_entrypoint_api","service_domain_logic","business_invariants_or_bug_symptom","validation_commands","entrypoint_or_owner","flow"], budget_tokens around 1800, and quality_rubric=["Starts from the bug symptom and traces controller/service/entity paths.","Identifies wrong-answer retry scheduling as distinct from success scheduling.","Names focused regression tests and risks."].
- If the broker returns inline source evidence and broker_answerable=true, use those slices as the final evidence source; do not ask another provider for the same files/symbols.
- If the broker returns required_output_identifiers or suggested_symbols, preserve those exact identifiers in the closest requested output field such as symbols, files, tests_to_run, risks, unknowns, or fix_plan; when the requested JSON has a symbols key, start that array with suggested_symbols exactly, then add optional extras only if space remains.
- Keep compact JSON concise: use string arrays for files, symbols, tests, and risks unless the user explicitly asks for nested detail; keep the final object comfortably under the requested character limit so it remains valid JSON.
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
{"summary":"TokenOpt returned effective-answerable bounded evidence. Likely regression is in the wrong-answer scheduling path: incorrect recall answers should preserve `MemoryTracker.recallFailed(currentUTCTimestamp)` behavior, scheduling `nextRecallAt` about current+12h, while successful answers should use `recalledSuccessfully`/`ForgettingCurve` scheduling. The suspicious overwrite point is `MemoryTrackerService` setting `nextRecallAt` via `calculateNextRecallAt` after the failure branch.","reproduction_path":["Open recall flow in `frontend/src/pages/RecallPage.vue` / `frontend/src/composables/useRecallData.ts`, which fetches due items through `RecallsController.recalling`.","Submit an incorrect quiz or spelling answer to backend entrypoints `RecallPromptController.answerQuiz` or `RecallPromptController.answerSpelling`.","After `MemoryTrackerService` processes the answer, inspect persisted `MemoryTracker.nextRecallAt`; expected about `currentUTCTimestamp + 12h` from `MemoryTracker.recallFailed`, not a forgetting-curve success interval.","Advance/seed time to roughly 12h later and call `RecallsController.recalling` / `RecallService.getDueMemoryTrackers`; the failed tracker should appear in due/repeat results."],"root_cause_hypotheses":["Most likely: `MemoryTrackerService` handles an incorrect answer by calling `MemoryTracker.recallFailed`, but then unconditionally executes `memoryTracker.setNextRecallAt(memoryTracker.calculateNextRecallAt())` around `backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:106`, overwriting the intended 12h retry.","Possible: `answerQuiz` or `answerSpelling` now routes an incorrect answer through `markAsRecalled` or `recalledSuccessfully`, so the failure-specific `recallFailed` branch in `backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100` is skipped.","Less likely but related: due retrieval in `RecallService.getDueMemoryTrackers` or repeat-window filtering no longer returns trackers whose `nextRecallAt` was correctly set to +12h."],"files":["frontend/src/pages/RecallPage.vue","frontend/src/composables/useRecallData.ts","backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java","backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java","backend/src/main/java/com/odde/doughnut/services/RecallService.java","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java","backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java","backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java"],"symbols":["RecallPage","useRecallData","RecallsController.recalling","RecallPromptController.answerQuiz","RecallPromptController.answerSpelling","MemoryTrackerService","MemoryTracker.recallFailed","MemoryTracker.recalledSuccessfully","MemoryTracker.markAsRecalled","MemoryTracker.calculateNextRecallAt","RecallService.getDueMemoryTrackers","ForgettingCurve","TimestampOperations.addHoursToTimestamp","DueMemoryTrackers"],"tests_to_run":["Add/run `MemoryTrackerServiceTest`: incorrect quiz answer freezes current time and asserts `nextRecallAt == current + 12h`.","Add/run `MemoryTrackerServiceTest`: successful answer still schedules through `ForgettingCurve` and is not forced to 12h.","Add/run `RecallPromptControllerTests`: incorrect `answerQuiz` and `answerSpelling` persist the 12h retry schedule.","Run `RecallsControllerTests` or a `RecallService` test: tracker failed at T is returned by due recall lookup at about T+12h.","Focused backend command candidate: run the backend test target for `MemoryTrackerServiceTest`, `RecallPromptControllerTests`, and `RecallsControllerTests`."],"fix_plan":["In `MemoryTrackerService`, split incorrect and successful answer branches explicitly.","For incorrect answers, call `memoryTracker.recallFailed(currentUTCTimestamp)` and avoid any later unconditional `markAsRecalled`, `recalledSuccessfully`, or `setNextRecallAt(calculateNextRecallAt())` overwrite.","For successful answers, keep existing `recalledSuccessfully(currentUTCTimestamp, thinkingTimeMs)` / forgetting-curve scheduling behavior.","Apply the same branch rule to both `answerQuiz` and `answerSpelling`.","Add the focused regression tests before implementation, then verify due-list behavior at T+12h."],"risks":["`answerQuiz` and `answerSpelling` may have divergent service paths; fixing only one leaves the regression partially live.","Changing `MemoryTrackerService` incorrectly could regress successful-answer spaced repetition intervals from `ForgettingCurve`.","Time arithmetic should continue using repository timestamp helpers such as `TimestampOperations.addHoursToTimestamp` to avoid timezone or precision drift.","Due-list filtering in `RecallService` could mask a correct `nextRecallAt`; verify persistence and retrieval separately.","Exact test runner command was not expanded by the bounded evidence packet, so use the repo's documented focused backend test command when implementing."]}
```

Idea checks: 7/8 (0.875)

Critical misses: none
