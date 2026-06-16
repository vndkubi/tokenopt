# Context Governor Suite Benchmark

Generated: 2026-06-16T08:35:31.855Z
Suite: Developer Daily Playbook Suite 2026-06-14
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: contextgate-natural
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-business-deepdive | contextgate-natural | coding_coverage | coding_coverage | no | no | no | 0.364 | 0.750 | 14 | yes | 62952 | 22144 |  | 3228 | 1985 | 68165 | 46021 | 0.079 | 1 | 1 | 0 | 28876 | 117380 |
| doughnut | doughnut-recall-forecast-pbi-investigate | contextgate-natural | coding_coverage | coding_coverage | no | no | no | 0.278 | 0.750 | 13 | yes | 95757 | 42496 |  | 4976 | 2925 | 103658 | 61162 | 0.045 | 2 | 2 | 0 | 42496 | 162293 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | contextgate-natural | ask_or_bypass | artifact_sufficiency | yes | yes | yes | 0.813 | 0.875 | 3 | yes | 1519801 | 1228416 |  | 10210 | 5205 | 1535216 | 306800 | 0.026 | 24 | 24 | 0 | 359721 | 519300 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| contextgate-natural | 3 | 1/3 | 3/3 | 95757 | 559503 | 6138 | 569013 | 137994 | 0.485 | 0.792 | 0.050 | 10.00 | 9.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| business_deepdive | contextgate-natural | 1 | 0/1 | 1/1 | 62952 | 62952 | 3228 | 68165 | 46021 | 0.364 | 0.750 | 0.079 | 14.00 | 1.0 | 0.0 | 117380 |
| pbi_investigate | contextgate-natural | 1 | 0/1 | 1/1 | 95757 | 95757 | 4976 | 103658 | 61162 | 0.278 | 0.750 | 0.045 | 13.00 | 2.0 | 0.0 | 162293 |
| bug_trace | contextgate-natural | 1 | 1/1 | 1/1 | 1519801 | 1519801 | 10210 | 1535216 | 306800 | 0.813 | 0.875 | 0.026 | 3.00 | 24.0 | 0.0 | 519300 |

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
| doughnut | doughnut-recall-business-deepdive | contextgate-natural | coding_coverage | coding_coverage | no | no | no | 0.364 | 0.750 | 14 | yes | 62952 | 22144 |  | 3228 | 1985 | 68165 | 46021 | 0.079 | 1 | 1 | 0 | 28876 | 117380 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v3-doughnut-2026-06-16\doughnut-doughnut-recall-business-deepdive-contextgate-natural.jsonl

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
- Do not follow a fixed tool script. Pick the cheapest bounded context source that fills the currently missing evidence slot.
- Prefer high-level context only for ownership/slot discovery; prefer exact bounded source slices when final quality depends on a named file, symbol, API path, UI state, or test.
- Stop acquiring context once the required slots are covered well enough to answer. Do not duplicate the same evidence through another provider.
- Shell fallback is disabled in this benchmark mode. If context remains incomplete, state the unresolved slot as a risk, missing_coverage, unknown, or next_question inside the requested JSON shape.
- Final output must be a syntactically valid compact single JSON object under 7500 characters. Preserve the requested JSON contract exactly.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"summary":"Doughnut is a PKM product with a learner recall loop: the app loads due memory trackers, lets the learner answer/review prompts, then updates scheduling state so future recall is spaced rather than repeated immediately. TokenOpt marked the evidence packet answerable with missing=[]; strict backend/domain slices were only partial, so low-level scheduling details are summarized from named symbols and tests rather than full implementation slices.","business_flow":["Due recall loading starts at backend API surface `RecallsController.recalling(timezone, days)` and returns `DueMemoryTrackers`; controller tests exercise timezone, null/zero/positive day windows, implying the recall window is current-timezone aware and optionally widened by a days parameter.","Frontend session state lives in `frontend/src/pages/RecallPage.vue`, where `useRecallData` and local tracker arrays organize the loaded trackers for the learner experience.","The frontend separates spelling and non-spelling recall: `nonSpellingTrackers` are collected separately, while spelling-capable prompts follow the spelling answer path. This lets typed-answer validation coexist with simpler self-check/review cards in one recall session.","Answering questions is represented by symbols `answerQuiz` and `markAsRecalled`; business-wise, an answer both records learner performance and advances the memory tracker through recall scheduling.","Scheduling is represented by `MemoryTracker`, `ForgettingCurve`, `RecallService`, and `getDueMemoryTrackers`: due items are selected from tracker state, answers update tracker state, and the forgetting curve decides the next due time.","Current recall window metadata is carried through the `recalling(timezone, days)` request and `DueMemoryTrackers` response; tests around Asia/Shanghai and day-window variants indicate this metadata controls what counts as due now versus in an expanded window.","Treadmill mode appears as a CLI/front-end-adjacent review flow, especially `cli/tests/recallJustReviewInteractive.test.tsx`; from available evidence it is a continuous/just-review recall experience using the same recall-loading surface rather than a separate scheduling model."],"core_entities":["DueMemoryTrackers: response model for due recall items and current recall-window context.","MemoryTracker: per-note/per-prompt scheduling state for recall.","ForgettingCurve: scheduling model that determines future due timing.","RecallService: domain service coordinating due tracker lookup and recall updates.","RecallsController: backend API entrypoint for loading recall work.","RecallPromptController: backend API surface for prompt answer/review actions.","RecallPage.vue: learner-facing recall session UI and spelling/non-spelling splitter."],"files":["README.md","frontend/src/pages/RecallPage.vue","frontend/src/routes/routes.ts","frontend/typed-router.d.ts","e2e_test/start/pageObjects/recallPage.ts","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java","frontend/tests/pages/RecallPage.spec.ts","cli/tests/recallJustReviewInteractive.test.tsx","package.json"],"symbols":["RecallsController","RecallsController.recalling","DueMemoryTrackers","RecallPromptController","RecallService","MemoryTracker","ForgettingCurve","getDueMemoryTrackers","markAsRecalled","answerQuiz","useRecallData","nonSpellingTrackers"],"existing_tests":["backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java covers recall loading, timezone, and day-window behavior.","frontend/tests/pages/RecallPage.spec.ts covers the recall page behavior.","cli/tests/recallJustReviewInteractive.test.tsx covers interactive just-review/treadmill-like recall behavior.","e2e_test/start/pageObjects/recallPage.ts provides E2E page-object coverage for recall UI flows.","Validation commands exposed in package.json include `backend:test`, `frontend:test`, `cy:run`, `cy:run-on-sut`, `test`, and `verify`."],"risks":["Backend implementation files for `RecallService`, `MemoryTracker`, `ForgettingCurve`, and `RecallPromptController` were not included as exact source slices in the packet, so implementation-level invariants are inferred from symbols and tests.","Treadmill mode is evidenced by CLI test naming and recall-related surfaces, but the exact product semantics and UI trigger were not fully covered.","Current-window metadata is evidenced through `recalling(timezone, days)` and `DueMemoryTrackers`, but exact field names inside `DueMemoryTrackers` were not available in the bounded packet.","Spelling answer scoring details versus non-spelling self-review details need direct controller/service slices for full accuracy."],"next_questions":["What exact fields does `DueMemoryTrackers` expose for current recall window metadata?","What route or control starts treadmill mode in the product UI or CLI?","Does spelling answer submission use the same scheduling update as non-spelling review, or does it apply answer-quality-specific scheduling?"]}
```

Idea checks: 6/8 (0.750)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java, file:backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java, file:frontend/src/composables/useRecallData.ts, symbol:answerSpelling, symbol:recalledSuccessfully, symbol:recallFailed, symbol:treadmillMode, term:toRepeat, term:currentRecallWindowEndAt, term:nextRecallAt, term:thinkingTimeMs

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
| doughnut | doughnut-recall-forecast-pbi-investigate | contextgate-natural | coding_coverage | coding_coverage | no | no | no | 0.278 | 0.750 | 13 | yes | 95757 | 42496 |  | 4976 | 2925 | 103658 | 61162 | 0.045 | 2 | 2 | 0 | 42496 | 162293 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v3-doughnut-2026-06-16\doughnut-doughnut-recall-forecast-pbi-investigate-contextgate-natural.jsonl

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
- Do not follow a fixed tool script. Pick the cheapest bounded context source that fills the currently missing evidence slot.
- Prefer high-level context only for ownership/slot discovery; prefer exact bounded source slices when final quality depends on a named file, symbol, API path, UI state, or test.
- Stop acquiring context once the required slots are covered well enough to answer. Do not duplicate the same evidence through another provider.
- Shell fallback is disabled in this benchmark mode. If context remains incomplete, state the unresolved slot as a risk, missing_coverage, unknown, or next_question inside the requested JSON shape.
- Final output must be a syntactically valid compact single JSON object under 7500 characters. Preserve the requested JSON contract exactly.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"pbi_summary":"Investigate adding Recall forecast counts before edits: the learner should see due-now count and how many additional recall items would be available by expanding the current recall window to 3, 7, and 14 days. TokenOpt marked the task answerable, but exact backend controller/service slices were not exposed in the packet, so backend entrypoint names are partly inferred from indexed terms.","business_flow":["Learner enters Recall through the recall route mapped in frontend/src/routes/routes.ts (CodeGraph E1/E4/E10).","Recall page currently has tests in frontend/tests/pages/RecallPage.spec.ts and e2e_test/start/pageObjects/recallPage.ts covers sidebar recall count/navigation (TokenOpt E5, CodeGraph E2/E5).","After completing currently loaded items, existing Load more buttons expand the due window to next 3/7/14 days; the PBI adds visibility into those counts before clicking.","Forecast counts should be calculated by the backend using the same current recall loading rules, then displayed in the Recall done state/buttons without resetting treadmill mode or current-session progress."],"acceptance_criteria":["API response exposes forecast counts for windows [0,3,7,14], where 0 means due now and 3/7/14 use the same timezone and half-day alignment as existing recall loading.","Counts are monotonic: due0 <= due3 <= due7 <= due14.","Counts exclude deleted notes and removed/deleted recall trackers.","Existing load-more calls for next 3/7/14 days remain compatible; no breaking parameter or response contract for current callers.","Recall page done state and load-more buttons show the forecast count or incremental 'more' count, while preserving treadmill mode and current-session progress.","Generated API/types and frontend tests should be updated if the recall DTO changes."],"impacted_files":[{"path":"frontend/src/routes/routes.ts","why":"Recall route entrypoint maps recall to RecallPage; citation CodeGraph E1/E4/E10."},{"path":"frontend/tests/pages/RecallPage.spec.ts","why":"Existing Recall page test target for done state/buttons/session behavior; citation TokenOpt E5."},{"path":"e2e_test/start/pageObjects/recallPage.ts","why":"E2E page object asserts sidebar recall count and navigation; citation CodeGraph E2/E5."},{"path":"cli/src/commands/recall/RecallSessionStage.tsx","why":"CLI recall has runLoadMoreRecall and leave-session behavior that may be affected if recall API contract changes; citation CodeGraph E7/E8."},{"path":"cli/src/commands/recall/recall.ts","why":"CLI recall entrypoint; verify compatibility if generated API types change; citation CodeGraph E9."},{"path":"backend/src/main/java/com/odde/doughnut/entities/Note.java","why":"Recall content masking is indexed as recall-domain code, though forecast counting likely belongs elsewhere; citation CodeGraph E3/E6."},{"path":"packages/generated/doughnut-backend-api/package.json","why":"Generated client package likely changes if OpenAPI DTO adds forecast fields; citation TokenOpt E1/E4."}],"symbols":[{"name":"componentMap.recall","file":"frontend/src/routes/routes.ts","evidence":"CodeGraph E1/E4/E10"},{"name":"recall()","file":"e2e_test/start/pageObjects/recallPage.ts","evidence":"CodeGraph E2/E5"},{"name":"runLoadMoreRecall","file":"cli/src/commands/recall/RecallSessionStage.tsx","evidence":"CodeGraph E8"},{"name":"onConfirmLeaveRecall","file":"cli/src/commands/recall/RecallSessionStage.tsx","evidence":"CodeGraph E7"},{"name":"Note.createMaskedContentForRecall()","file":"backend/src/main/java/com/odde/doughnut/entities/Note.java","evidence":"CodeGraph E3/E6"},{"name":"RecallsController","file":null,"evidence":"TokenOpt E5 indexed term only; exact path not exposed"},{"name":"RecallPromptController","file":null,"evidence":"TokenOpt E5 indexed term only; exact path not exposed"},{"name":"useRecallData","file":null,"evidence":"TokenOpt E5 indexed term only; exact path not exposed"},{"name":"loadMore / halfDay / currentSession","file":null,"evidence":"TokenOpt E5 indexed terms only; exact slices not exposed"}],"unknowns":["Exact backend API path, DTO class, repository query, and service method for current recall loading were not exposed by the bounded packets.","Need confirm whether existing load-more counts should be displayed as cumulative window counts or incremental 'more than currently due' counts; PBI wording asks for both due-now and more-from-window.","Need confirm whether window 3/7/14 means calendar days, spaced-repetition half-day buckets, or an existing API enum/parameter.","Need confirm how treadmill mode stores current-session progress and whether forecast counts should ignore already-completed-in-session items."],"risks":["Timezone/half-day off-by-one risk if forecast counts duplicate date math instead of reusing the current recall loader/window alignment.","Monotonicity can break if each window query applies different filters, limits, joins, or removed-tracker exclusions.","Forecast count must not be capped by any current page/load limit; it should count all eligible items for the window.","Generated OpenAPI/client type changes may break CLI or frontend callers if fields are required or response shape changes incompatibly.","UI risk: showing cumulative counts on buttons may mislead users if buttons load only additional items; prefer explicit incremental label derived from monotonic forecast."],"next_steps":["Before edits, locate exact backend recall controller/service/DTO slices for RecallsController, RecallPromptController, current load-more parameter, and half-day alignment helper.","Design API change as additive fields on the existing recall response or a compatible forecast object so old load-more behavior remains unchanged.","Implement forecast counting by calling/reusing the same eligibility query for windows 0,3,7,14 and assert monotonicity in backend tests.","Update generated OpenAPI/TypeScript client if DTO changes using package scripts from package.json such as pnpm backend:generateOpenAPIDocs, pnpm openAPIToTypeScript, or pnpm generateTypeScript as applicable.","Add/extend tests around frontend/tests/pages/RecallPage.spec.ts plus backend recall service/controller tests; run focused validation with pnpm backend:test and pnpm frontend:test."]}
```

Idea checks: 6/8 (0.750)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java, file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, symbol:recalling, symbol:getDueMemoryTrackers, symbol:DueMemoryTrackers, symbol:loadCurrentDueRecalls, symbol:setCurrentRecallWindowEndAt, term:dueindays, term:currentRecallWindowEndAt, term:treadmillMode

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
| doughnut | doughnut-recall-wrong-answer-bug-trace | contextgate-natural | ask_or_bypass | artifact_sufficiency | yes | yes | yes | 0.813 | 0.875 | 3 | yes | 1519801 | 1228416 |  | 10210 | 5205 | 1535216 | 306800 | 0.026 | 24 | 24 | 0 | 359721 | 519300 |

#### Output: contextgate-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\contextgate-natural-v3-doughnut-2026-06-16\doughnut-doughnut-recall-wrong-answer-bug-trace-contextgate-natural.jsonl

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
- Do not follow a fixed tool script. Pick the cheapest bounded context source that fills the currently missing evidence slot.
- Prefer high-level context only for ownership/slot discovery; prefer exact bounded source slices when final quality depends on a named file, symbol, API path, UI state, or test.
- Stop acquiring context once the required slots are covered well enough to answer. Do not duplicate the same evidence through another provider.
- Shell fallback is disabled in this benchmark mode. If context remains incomplete, state the unresolved slot as a risk, missing_coverage, unknown, or next_question inside the requested JSON shape.
- Final output must be a syntactically valid compact single JSON object under 7500 characters. Preserve the requested JSON contract exactly.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"summary":"Trace points to the MCQ answer path, not the forgetting-curve formula itself. `POST /api/recall-prompts/{recallPrompt}/answer` in `backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java:63` calls `RecallQuestionService.answerQuestion` (`backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:101`), which persists the `Answer` then calls `MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion` (`backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:110`). The entity invariant still distinguishes failure from success: `MemoryTracker.recallFailed` sets `nextRecallAt` to `currentUTCTimestamp + 12h` (`backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100`), while `recalledSuccessfully` recalculates via the forgetting curve (`backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:105`). Likely fix surface is the service choosing which tracker to update, plus a missing regression test on the real recall-prompt answer endpoint.","reproduction_path":["Create a user, note, non-spelling `MemoryTracker`, and `RecallPrompt` with a predefined MCQ question whose correct choice differs from submitted `AnswerDTO.choiceIndex` (`backend/src/main/java/com/odde/doughnut/controllers/dto/AnswerDTO.java:6`).","Time-travel/fix `TestabilitySettings.getCurrentUTCTimestamp`; submit the wrong answer through `RecallPromptController.answerQuiz` (`backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java:65`).","Refresh the prompt's own `memoryTracker` and assert `nextRecallAt == TimestampOperations.addHoursToTimestamp(currentTime, 12)`; do not only assert the returned prompt.","Then verify read-side behavior through `GET /api/recalls/recalling` (`backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39`): due lookup uses half-day alignment (`backend/src/main/java/com/odde/doughnut/services/UserService.java:65`), so the retry should appear in the next applicable half-day window, not necessarily immediately."],"root_cause_hypotheses":[{"rank":1,"hypothesis":"`MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion` does not update `recallPrompt.getMemoryTracker()` directly. It re-finds trackers by user+note and picks the first non-spelling tracker (`backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:112`), so duplicates, removed trackers, ordering, or mismatched prompt ownership can leave the answered prompt's tracker unscheduled even though `recallFailed` is correct."},{"rank":2,"hypothesis":"The persisted write may be correct, but the report may be observing the due-list read path. `RecallService.getDueMemoryTrackers` queries trackers with `next_recall_at <= alignByHalfADay(...)` (`backend/src/main/java/com/odde/doughnut/services/RecallService.java:47`, `backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:26`), so a +12h retry is intentionally outside the current half-day window in some timezones."},{"rank":3,"hypothesis":"Existing tests do not lock the failed-answer scheduling invariant. `MemoryTrackerControllerTest.MarkAsRecalled.itMustUpdateTheMemoryTrackerRecord` only checks recall count (`backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:280`), while `RecallsControllerTests` only checks due-window filtering (`backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:47`)."},{"rank":4,"hypothesis":"`Answer.createdAt` defaults to system time (`backend/src/main/java/com/odde/doughnut/entities/Answer.java:19`) instead of the testability timestamp. That affects wrong-answer threshold and previously-answered windows, not direct `nextRecallAt`, but can confuse time-travel reproductions."}],"files":["backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java:63","backend/src/main/java/com/odde/doughnut/controllers/dto/AnswerDTO.java:6","backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:101","backend/src/main/java/com/odde/doughnut/services/AnswerService.java:17","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java:110","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:91","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100","backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39","backend/src/main/java/com/odde/doughnut/services/RecallService.java:47","backend/src/main/java/com/odde/doughnut/services/UserService.java:65","backend/src/main/java/com/odde/doughnut/entities/repositories/MemoryTrackerRepository.java:26","backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:280","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:47","cli/src/commands/recall/RecallSessionStage.tsx:182","e2e_test/start/pageObjects/recallPage.ts:5"],"symbols":["RecallPromptController.answerQuiz","RecallQuestionService.answerQuestion","AnswerService.createAnswerForQuestion","MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion","MemoryTrackerService.markAsRecalled","MemoryTracker.markAsRecalled","MemoryTracker.recallFailed","MemoryTracker.recalledSuccessfully","MemoryTracker.calculateNextRecallAt","RecallService.getDueMemoryTrackers","UserService.getMemoryTrackersNeedToRepeat","MemoryTrackerRepository.findAllByUserAndNextRecallAtLessThanEqualOrderByNextRecallAt","RecallSessionStage.onRecallQuestionAnswered"],"tests_to_run":["Not run; read-only handoff.","Add/run focused backend regression: `cd backend && ./gradlew test --tests com.odde.doughnut.controllers.RecallPromptControllerTest` covering wrong MCQ answer schedules prompt tracker at current+12h.","Run existing focused coverage: `cd backend && ./gradlew test --tests com.odde.doughnut.controllers.MemoryTrackerControllerTest --tests com.odde.doughnut.controllers.RecallsControllerTests`.","If CLI/UI symptom was reported, add/run an e2e that answers incorrectly, advances clock about 12h or next half-day window, and expects the same memory tracker to reappear."],"fix_plan":["Add a failing backend test on the real MCQ answer flow, not just `mark-as-recalled`: wrong `AnswerDTO.choiceIndex` through `RecallPromptController.answerQuiz` must update the prompt's own `MemoryTracker.nextRecallAt` to `currentUTCTimestamp + 12h`.","In `MemoryTrackerService.updateMemoryTrackerAfterAnsweringQuestion`, update `recallPrompt.getMemoryTracker()` directly instead of re-querying `userService.getMemoryTrackersFor(user, note).filter(!spelling).findFirst()`. Keep wrong-answer threshold counting by note as-is.","Before switching to prompt-owned tracker, add/confirm authorization in `RecallPromptController.answerQuiz`, mirroring `answerSpelling`: `authorizationService.assertReadAuthorization(recallPrompt.getMemoryTracker())`, so updating the prompt tracker does not let a logged-in user mutate another user's tracker.","Add a companion assertion that a correct answer still uses `recalledSuccessfully`/forgetting-curve scheduling rather than the fixed 12h retry.","Add/read-side regression only if the bug report is about visibility: after wrong answer, advance to the next half-day window and assert `/api/recalls/recalling` returns that memory tracker."],"risks":["No files modified and no tests run in this trace.","TokenOpt declined to compile repo evidence; CodeGraph plus bounded source slices were used instead.","Changing tracker selection may expose missing authorization assumptions in `RecallPromptController.answerQuiz`, which currently only asserts login while `answerSpelling` asserts read authorization.","If duplicate active non-spelling trackers for one user+note are impossible by invariant, hypothesis 1 is less likely; still, direct prompt-tracker update is the least ambiguous behavior.","Half-day read-window alignment can look like a scheduling failure unless the reproduction checks the persisted `next_recall_at` separately from immediate due-list visibility."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java, file:backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java, term:thinkingTimeMs
