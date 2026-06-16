# Context Governor Suite Benchmark

Generated: 2026-06-16T06:07:16.010Z
Suite: Developer Daily Playbook Suite 2026-06-14
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: tokenopt-codegraph-adaptive
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Delta vs baseline | Output tok | Reason tok | Raw tok | Fresh tok | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| doughnut | doughnut-recall-business-deepdive | tokenopt-codegraph-adaptive | coding_coverage | coding_coverage | no | no | no | 0.409 | 0.750 | 13 | yes | 218171 | 146048 |  | 7835 | 5591 | 231597 | 85549 | 0.048 | 4 | 4 | 0 | 139034 | 228147 |
| doughnut | doughnut-recall-forecast-pbi-investigate | tokenopt-codegraph-adaptive | coding_coverage | coding_coverage | no | no | no | 0.500 | 0.750 | 9 | yes | 246712 | 172544 |  | 6263 | 3751 | 256726 | 84182 | 0.059 | 4 | 4 | 0 | 133369 | 173211 |
| doughnut | doughnut-recall-wrong-answer-bug-trace | tokenopt-codegraph-adaptive | ask_or_bypass | artifact_sufficiency | yes | yes | no | 0.625 | 0.875 | 6 | yes | 242824 | 176768 |  | 7006 | 4801 | 254631 | 77863 | 0.080 | 4 | 4 | 0 | 205513 | 176672 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt-codegraph-adaptive | 3 | 0/3 | 3/3 | 242824 | 235902 | 7035 | 247651 | 82531 | 0.511 | 0.792 | 0.062 | 9.33 | 4.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| business_deepdive | tokenopt-codegraph-adaptive | 1 | 0/1 | 1/1 | 218171 | 218171 | 7835 | 231597 | 85549 | 0.409 | 0.750 | 0.048 | 13.00 | 4.0 | 0.0 | 228147 |
| pbi_investigate | tokenopt-codegraph-adaptive | 1 | 0/1 | 1/1 | 246712 | 246712 | 6263 | 256726 | 84182 | 0.500 | 0.750 | 0.059 | 9.00 | 4.0 | 0.0 | 173211 |
| bug_trace | tokenopt-codegraph-adaptive | 1 | 0/1 | 1/1 | 242824 | 242824 | 7006 | 254631 | 77863 | 0.625 | 0.875 | 0.080 | 6.00 | 4.0 | 0.0 | 176672 |

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
| doughnut | doughnut-recall-business-deepdive | tokenopt-codegraph-adaptive | coding_coverage | coding_coverage | no | no | no | 0.409 | 0.750 | 13 | yes | 218171 | 146048 |  | 7835 | 5591 | 231597 | 85549 | 0.048 | 4 | 4 | 0 | 139034 | 228147 |

#### Output: tokenopt-codegraph-adaptive

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\adaptive-v2-doughnut-quality-2026-06-16\doughnut-doughnut-recall-business-deepdive-tokenopt-codegraph-adaptive.jsonl

Codex prompt used:
```
Daily task: business deepdive the learner recall experience. Explain how due recall loading, answering questions, spelling vs non-spelling paths, scheduling, current recall window metadata, and treadmill mode fit together. Return valid compact JSON only with keys: summary, business_flow, core_entities, files, symbols, existing_tests, risks, next_questions. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Adaptive policy: tokenopt-codegraph-quality. Business/PBI/bug-trace prompts need backend, frontend, domain-state, and test evidence; use a bounded quality escalator instead of compact-only evidence.
- Use TokenOpt as the quality gate and CodeGraph as a bounded quality evidence escalator.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=research_business, budget_tokens=1800, quality_rubric=["Connects backend recall loading, answer submission, scheduling state, and frontend session behavior.","Separates spelling and non-spelling paths and names current-window metadata.","Names existing source and test surfaces."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: business_or_bug_goal, backend_entrypoint_api, service_domain_logic, frontend_state_or_caller_when_present, source_files, symbols, existing_tests, business_invariants_or_bug_symptom, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=investigate, tokenBudget=9000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=3000, profile=full).
- Then make one required anchor search_symbol call with query="Explain Connects Separates markAsRecalled RecallsController RecallService MemoryTracker ForgettingCurve MemoryTrackerService recalling getDueMemoryTrackers getMemoryTrackersNeedToRepeat setCurrentRecallWindowEndAt currentRecallWindowEndAt alignByHalfADay TimestampOperations RecallPage treadmillMode", includeTests=true, includeSnippets=false, limit=80. Scan the full returned symbols array and use it to fill backend, frontend, domain-state, and existing-test slots. If one required quality slot is still missing, make at most one get_file_slice or search_code call for that exact named file/symbol; otherwise stop.
- Carry exact CodeGraph evidence into the final answer.
- Quality hard gate: do not claim the task is fully covered unless the final JSON names at least one backend/API or service/domain file, relevant symbols, and existing tests when tests are requested by the prompt/rubric.
- For PBI/business prompts touching UI behavior, include frontend page/composable/state evidence when present; if it remains absent after the allowed calls, list it under unknowns/risks instead of inventing it.
- For bug-trace prompts, separate symptom path, likely root-cause method/state, focused regression tests, and fix handoff.
- Adaptive quality budget: at most 4 MCP calls total: 1 TokenOpt passport call, 1 quality CodeGraph pack, 1 required anchor search, and at most 1 exact CodeGraph slice/search for a still-missing required slot. Shell fallback is disabled.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7500 characters. Close every array/object. Prefer short evidence-rich strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"summary":"TokenOpt marked this answerable=true with missing=[]; no files were modified. The learner recall experience is a queue-and-feedback loop: backend loads due MemoryTrackers into recall prompts, the learner answers, scheduling mutates tracker state, currentRecallWindowEndAt/DueMemoryTrackers metadata bounds the active window, and treadmill-style UX should reuse the same load-answer-schedule cycle continuously. CodeGraph flow pack was noisy, so the concrete evidence comes mainly from the required anchor/search_code results.","business_flow":["Due recall loading enters through backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39-52 via RecallsController.recalling(String,Integer), then domain logic is in backend/src/main/java/com/odde/doughnut/services/RecallService.java:18-83 and UserService.getMemoryTrackersNeedToRepeat(User,Timestamp,ZoneId) at backend/src/main/java/com/odde/doughnut/services/UserService.java:65-70.","The due queue is timezone/window aware: RecallsControllerTests.shouldGetMemoryTrackersBasedOnTimezone at backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:47-71 and shouldSetCurrentRecallWindowEndAtAlignedByHalfADay at :89-107 cover timezone selection and half-day alignment for currentRecallWindowEndAt.","Question construction/reuse lives in backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:22-95: it depends on MemoryTrackerService, AnswerService, PredefinedQuestionService, and AiQuestionGenerator, and has findExistingUnansweredRecallPrompt plus createARecallPromptFromQuestion.","Spelling vs non-spelling appears to split at the prompt/answer layer: spelling likely uses typed-answer validation through AnswerService, while non-spelling/concept recall can use mark-as-recalled style self-grading; the exact branch code was not surfaced by the allowed calls.","Scheduling state ultimately lands on MemoryTracker records; backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:280-287 has MarkAsRecalled.itMustUpdateTheMemoryTrackerRecord, proving answer actions mutate tracker scheduling state.","Current recall window metadata is exposed into status surfaces through MenuDataDTO.recallStatus as DueMemoryTrackers at backend/src/main/java/com/odde/doughnut/controllers/dto/MenuDataDTO.java:12 and currentRecallWindowEndAt is covered by RecallsControllerTests.","Treadmill mode was not surfaced as a concrete production frontend symbol; closest session evidence is cli/src/commands/recall/RecallSessionStage.tsx:51-60 with card/uiMode/loadMore/loadingNext state, plus e2e_test/start/pageObjects/recallPage.ts:5-98. Treat treadmill as a continuous client loop over the same due-load, answer, schedule, next-card flow until the web implementation is located."],"core_entities":["User: learner context, including timezone-sensitive due recall selection.","MemoryTracker: per-note/user scheduling record that becomes due, is answered, and is updated.","RecallPrompt: generated or reused question instance; RecallPrompt.getQuestionGeneratedTime is at backend/src/main/java/com/odde/doughnut/entities/RecallPrompt.java:138-141.","PredefinedQuestion: question template input to RecallQuestionService.createARecallPromptFromQuestion.","AnswerService: answer evaluation dependency used by RecallQuestionService, important for spelling/non-spelling behavior.","DueMemoryTrackers: recall status/window payload referenced by MenuDataDTO.recallStatus.","NoteRecallSetting.skipMemoryTracking: opt-out flag at backend/src/main/java/com/odde/doughnut/entities/NoteRecallSetting.java:16-19.","currentRecallWindowEndAt: active-window metadata aligned by half day and tested in RecallsControllerTests."],"files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:20-63","backend/src/main/java/com/odde/doughnut/services/RecallService.java:18-83","backend/src/main/java/com/odde/doughnut/services/UserService.java:61-70","backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:22-95","backend/src/main/java/com/odde/doughnut/entities/RecallPrompt.java:138-141","backend/src/main/java/com/odde/doughnut/entities/NoteRecallSetting.java:16-19","backend/src/main/java/com/odde/doughnut/controllers/dto/MenuDataDTO.java:12","cli/src/commands/recall/RecallSessionStage.tsx:51-60","e2e_test/start/pageObjects/recallPage.ts:5-98","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:47-107","backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:280-287"],"symbols":["com.odde.doughnut.controllers.RecallsController.recalling(String,Integer)","com.odde.doughnut.controllers.RecallsController.previouslyAnswered(String)","com.odde.doughnut.services.RecallService","com.odde.doughnut.services.UserService.getMemoryTrackersNeedToRepeat(User,Timestamp,ZoneId)","com.odde.doughnut.services.UserService.getRecentMemoryTrackers(User,Timestamp)","com.odde.doughnut.services.RecallQuestionService.memoryTrackerService","com.odde.doughnut.services.RecallQuestionService.findExistingUnansweredRecallPrompt(MemoryTracker)","com.odde.doughnut.services.RecallQuestionService.createARecallPromptFromQuestion(PredefinedQuestion,MemoryTracker)","com.odde.doughnut.entities.RecallPrompt.getQuestionGeneratedTime()","com.odde.doughnut.controllers.dto.MenuDataDTO.recallStatus","com.odde.doughnut.entities.NoteRecallSetting.skipMemoryTracking","com.odde.doughnut.controllers.MarkAsRecalled.itMustUpdateTheMemoryTrackerRecord()","com.odde.doughnut.controllers.Repeat.shouldGetMemoryTrackersBasedOnTimezone(int,String,int)","com.odde.doughnut.controllers.Repeat.shouldSetCurrentRecallWindowEndAtAlignedByHalfADay(int,int)","recallPage()","[uiMode,setUiMode] / [card,setCard] in RecallSessionStage.tsx"],"existing_tests":["backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:47-71 covers timezone-aware due tracker loading.","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:89-107 covers currentRecallWindowEndAt half-day alignment.","backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:280-287 covers mark-as-recalled updating the MemoryTracker record.","e2e_test/start/pageObjects/recallPage.ts:5-98 is an E2E page-object surface for learner recall flows."],"risks":["Production web RecallPage/treadmillMode implementation was not surfaced by the allowed CodeGraph calls; only CLI state and E2E page-object evidence appeared.","The exact spelling vs non-spelling branch implementation was not surfaced; AnswerService involvement is evidenced, but concrete UI/API branch behavior needs a slice of the answer path.","ForgettingCurve/scheduling formula internals were not surfaced; evidence proves MemoryTracker mutation and due loading, not the full interval algorithm.","CodeGraph get_flow_pack returned unrelated ranked entries, so this JSON uses TokenOpt answerability plus anchor/search_code evidence rather than the pack's initial flow steps.","Endpoint extraction showed both RecallsController methods as GET /api/recalls; exact subpath for previouslyAnswered should be verified before API documentation work."],"next_questions":["Where is the production web component/composable that owns treadmillMode, if it exists outside the indexed results?","Should spelling correctness schedule differently from non-spelling self-grading, or should both converge on the same MemoryTracker update policy?","What product rule should currentRecallWindowEndAt enforce for learners: daily batching, half-day refresh, load-more limits, or treadmill pacing?","Which business metric matters most for this flow: due completion rate, answer accuracy, repeat latency, or treadmill session length?"]}
```

Idea checks: 6/8 (0.750)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java, file:backend/src/main/java/com/odde/doughnut/entities/ForgettingCurve.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:answerQuiz, symbol:answerSpelling, symbol:getDueMemoryTrackers, symbol:recalledSuccessfully, symbol:recallFailed, term:nextRecallAt, term:thinkingTimeMs

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
| doughnut | doughnut-recall-forecast-pbi-investigate | tokenopt-codegraph-adaptive | coding_coverage | coding_coverage | no | no | no | 0.500 | 0.750 | 9 | yes | 246712 | 172544 |  | 6263 | 3751 | 256726 | 84182 | 0.059 | 4 | 4 | 0 | 133369 | 173211 |

#### Output: tokenopt-codegraph-adaptive

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\adaptive-v2-doughnut-quality-2026-06-16\doughnut-doughnut-recall-forecast-pbi-investigate-tokenopt-codegraph-adaptive.jsonl

Codex prompt used:
```
Daily task: investigate this PBI before planning edits. PBI: As a learner, I want the Recall page to show how many recall items are due now and how many more would be loaded from the next 3, 7, and 14 days, so that I can decide whether to continue recalling without blindly clicking each load-more button. Acceptance criteria: the recall API exposes forecast counts for due windows 0, 3, 7, and 14 days using the same timezone and half-day alignment rules as current recall loading; counts are monotonic by window and exclude deleted/removed trackers; existing Load more from next 3/7/14 days behavior remains compatible; Recall page done state/buttons display forecast counts without breaking treadmill mode or current-session progress. Return valid compact JSON only with keys: pbi_summary, business_flow, acceptance_criteria, impacted_files, symbols, unknowns, risks, next_steps. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Adaptive policy: tokenopt-codegraph-quality. Business/PBI/bug-trace prompts need backend, frontend, domain-state, and test evidence; use a bounded quality escalator instead of compact-only evidence.
- Use TokenOpt as the quality gate and CodeGraph as a bounded quality evidence escalator.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=research_business, budget_tokens=1800, quality_rubric=["Translates the PBI into backend API/DTO/service and frontend recall-page impacts.","Preserves Load more and treadmill/current-session behavior as compatibility constraints.","Identifies monotonicity and timezone/half-day risks."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: business_or_bug_goal, backend_entrypoint_api, service_domain_logic, frontend_state_or_caller_when_present, source_files, symbols, existing_tests, business_invariants_or_bug_symptom, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_flow_pack(target=<original Daily task only>, taskType=investigate, tokenBudget=9000, responseMode=agent, includeTests=true, includeSnippets=true, snippetTokenBudget=3000, profile=full).
- Then make one required anchor search_symbol call with query="PBI Recall Acceptance API Load Translates DTO Preserves Identifies markAsRecalled RecallsController RecallService MemoryTracker ForgettingCurve MemoryTrackerService recalling getDueMemoryTrackers getMemoryTrackersNeedToRepeat setCurrentRecallWindowEndAt currentRecallWindowEndAt alignByHalfADay TimestampOperations RecallPage treadmillMode", includeTests=true, includeSnippets=false, limit=80. Scan the full returned symbols array and use it to fill backend, frontend, domain-state, and existing-test slots. If one required quality slot is still missing, make at most one get_file_slice or search_code call for that exact named file/symbol; otherwise stop.
- Carry exact CodeGraph evidence into the final answer.
- Quality hard gate: do not claim the task is fully covered unless the final JSON names at least one backend/API or service/domain file, relevant symbols, and existing tests when tests are requested by the prompt/rubric.
- For PBI/business prompts touching UI behavior, include frontend page/composable/state evidence when present; if it remains absent after the allowed calls, list it under unknowns/risks instead of inventing it.
- For bug-trace prompts, separate symptom path, likely root-cause method/state, focused regression tests, and fix handoff.
- Adaptive quality budget: at most 4 MCP calls total: 1 TokenOpt passport call, 1 quality CodeGraph pack, 1 required anchor search, and at most 1 exact CodeGraph slice/search for a still-missing required slot. Shell fallback is disabled.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7500 characters. Close every array/object. Prefer short evidence-rich strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"pbi_summary":"Investigated without modifying files. TokenOpt marked answerable=true and missing=[]. The PBI adds learner-visible recall forecast counts for windows 0/3/7/14 days while preserving current recall loading, load-more behavior, treadmill/current-session progress, timezone, and half-day alignment semantics.","business_flow":["Learner opens Recall and existing recall loading goes through GET /api/recalls in backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39 via RecallsController.recalling(String,Integer).","Current recall eligibility is domain/service-driven by backend/src/main/java/com/odde/doughnut/services/UserService.java:65 getMemoryTrackersNeedToRepeat(User,Timestamp,ZoneId), so forecast counts should reuse that path or a shared equivalent.","The page should show due-now count and load-more forecasts before clicking next 3/7/14-day buttons; existing button actions should remain compatible with currentRecallWindowEndAt behavior.","Current-session/treadmill-like progress must remain separate from forecast display state; CLI evidence shows analogous recall-session state in cli/src/commands/recall/RecallSessionStage.tsx:51-56 and load-more state at :53."],"acceptance_criteria":["API exposes recall forecast counts for due windows 0,3,7,14 using the same timezone and half-day alignment as current loading.","Counts are cumulative and monotonic: count0 <= count3 <= count7 <= count14; UI may display additional-to-load deltas derived from these counts.","Counts exclude deleted/removed trackers using the same eligibility filters as current recall loading.","Existing Load more from next 3/7/14 days remains wire-compatible; no behavior regression in RecallsController.recalling(String,Integer).","Recall page done state/buttons display forecast counts without resetting current-session progress or treadmill mode."],"impacted_files":["backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:20-63 - Spring REST controller; GET /api/recalls handlers at :39 and :54 are API entrypoints.","backend/src/main/java/com/odde/doughnut/services/UserService.java:65-70 - getMemoryTrackersNeedToRepeat(User,Timestamp,ZoneId) is the due-tracker service path to reuse for forecasts.","backend/src/main/java/com/odde/doughnut/controllers/dto/MenuDataDTO.java:12 - recallStatus currently uses DueMemoryTrackers; related DTO surface for recall counts.","backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:22-38 - recall-question flow depends on MemoryTrackerService; avoid progress/session regressions.","e2e_test/start/pageObjects/recallPage.ts:5-98 - surfaced Recall page page object for UI/E2E coverage.","frontend/tests/toolbars/MainMenu.spec.ts:66-70 - recallStatus fixture/test evidence for existing count shape.","cli/src/commands/recall/RecallSessionStage.tsx:51-56,218-220 - analogous load-more/session state surfaced by CodeGraph.","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:47-71,89-107 - existing timezone and half-day alignment tests.","backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:280-287 - existing mark-as-recalled tracker update coverage.","backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java - existing recall algorithm test candidate from CodeGraph.","backend/src/test/java/com/odde/doughnut/services/RecallQuestionServiceTest.java - existing recall question service test candidate from CodeGraph."],"symbols":["RecallsController - backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:20-63","RecallsController.recalling(String,Integer) - GET /api/recalls, backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:39-52","RecallsController.previouslyAnswered(String) - GET /api/recalls, backend/src/main/java/com/odde/doughnut/controllers/RecallsController.java:54-62","UserService.getMemoryTrackersNeedToRepeat(User,Timestamp,ZoneId) - backend/src/main/java/com/odde/doughnut/services/UserService.java:65-70","MenuDataDTO.recallStatus: DueMemoryTrackers - backend/src/main/java/com/odde/doughnut/controllers/dto/MenuDataDTO.java:12","RecallQuestionService.memoryTrackerService - backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:22","RecallQuestionService(...) - backend/src/main/java/com/odde/doughnut/services/RecallQuestionService.java:24-38","Repeat.shouldGetMemoryTrackersBasedOnTimezone(int,String,int) - backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:47-71","Repeat.shouldSetCurrentRecallWindowEndAtAlignedByHalfADay(int,int) - backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java:89-107","RecallSessionStage [uiMode,setUiMode] - cli/src/commands/recall/RecallSessionStage.tsx:52","RecallSessionStage [loadMoreFetching,setLoadMoreFetching] - cli/src/commands/recall/RecallSessionStage.tsx:53","RecallSessionStage [nextQuestionLoadKey,setNextQuestionLoadKey] - cli/src/commands/recall/RecallSessionStage.tsx:55","escapeLoadMorePrompt - cli/src/commands/recall/RecallSessionStage.tsx:218-220","recallPage() - e2e_test/start/pageObjects/recallPage.ts:5-73","recall() - e2e_test/start/pageObjects/recallPage.ts:74-98","MarkAsRecalled.itMustUpdateTheMemoryTrackerRecord() - backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:280-287"],"unknowns":["Actual frontend Recall page component/composable/API client did not surface in the allowed MCP evidence; only e2e_test/start/pageObjects/recallPage.ts and frontend/tests/toolbars/MainMenu.spec.ts surfaced.","Exact DueMemoryTrackers DTO file and current GET /api/recalls response shape were not resolved by the bounded evidence; MenuDataDTO.java only confirms a DueMemoryTrackers recallStatus reference.","Deleted/removed tracker filtering location was not directly inspected; verify repository/service filters before implementing forecast counts.","Clarify whether UI labels should show cumulative counts or additional-to-load deltas; API monotonic windows imply cumulative counts, while button text likely needs deltas."],"risks":["Timezone/half-day drift if forecast windows reimplement logic instead of sharing the RecallsController/UserService path already covered by RecallsControllerTests.java:47-71 and :89-107.","Monotonicity can fail if each window uses different deleted/removed filters or current-session exclusions.","Performance risk if forecasts run four independent broad scans; consider one shared query/aggregate or bounded service method.","UI regression risk if forecast state is mixed with current recall-session progress, treadmill mode, or load-more fetch state.","Backward compatibility risk if GET /api/recalls response shape changes instead of adding fields compatibly."],"next_steps":["Plan backend change around RecallsController.recalling(String,Integer) and a shared service/DTO method that returns windows 0/3/7/14 without altering existing load-more parameters.","Add RecallsControllerTests cases for forecast counts at 0/3/7/14, timezone boundaries, half-day alignment, monotonicity, and deleted/removed tracker exclusion.","Add service/domain tests around UserService.getMemoryTrackersNeedToRepeat or the selected repository/count helper to prove forecast counts reuse current eligibility semantics.","Find the actual frontend Recall page/API client before edits; update page done state and 3/7/14 buttons to show forecast-derived counts while preserving click behavior.","Validate with targeted recall tests: RecallsControllerTests, RecallServiceWithSpacedRepetitionAlgorithmTest, RecallQuestionServiceTest, MemoryTrackerControllerTest, and relevant frontend/E2E Recall page tests."]}
```

Idea checks: 6/8 (0.750)

Critical misses: file:backend/src/main/java/com/odde/doughnut/services/RecallService.java, file:backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java, file:frontend/src/pages/RecallPage.vue, file:frontend/src/composables/useRecallData.ts, file:frontend/tests/pages/RecallPage.spec.ts, symbol:getDueMemoryTrackers, symbol:loadCurrentDueRecalls, term:dueindays, term:treadmillMode

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
| doughnut | doughnut-recall-wrong-answer-bug-trace | tokenopt-codegraph-adaptive | ask_or_bypass | artifact_sufficiency | yes | yes | no | 0.625 | 0.875 | 6 | yes | 242824 | 176768 |  | 7006 | 4801 | 254631 | 77863 | 0.080 | 4 | 4 | 0 | 205513 | 176672 |

#### Output: tokenopt-codegraph-adaptive

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\adaptive-v2-doughnut-quality-2026-06-16\doughnut-doughnut-recall-wrong-answer-bug-trace-tokenopt-codegraph-adaptive.jsonl

Codex prompt used:
```
Daily task: bug trace. A regression report says that after a learner answers a recall prompt incorrectly, the next retry is no longer scheduled about 12 hours later. Trace the likely code path and produce a fix handoff. Return valid compact JSON only with keys: summary, reproduction_path, root_cause_hypotheses, files, symbols, tests_to_run, fix_plan, risks. Do not modify files.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Repository root: D:\Personal\Projects\doughnut
- Adaptive policy: tokenopt-codegraph-quality. Business/PBI/bug-trace prompts need backend, frontend, domain-state, and test evidence; use a bounded quality escalator instead of compact-only evidence.
- Use TokenOpt as the quality gate and CodeGraph as a bounded quality evidence escalator.
- First call tokenopt_compile_evidence with cwd=D:\Personal\Projects\doughnut, task_type=investigate, budget_tokens=1800, quality_rubric=["Starts from the bug symptom and traces controller/service/entity paths.","Identifies wrong-answer retry scheduling as distinct from success scheduling.","Names focused regression tests and risks."], and task set to only the original Daily task text above.
- Treat the TokenOpt packet as a slot checklist, not as sufficient final evidence. Required slots: business_or_bug_goal, backend_entrypoint_api, service_domain_logic, frontend_state_or_caller_when_present, source_files, symbols, existing_tests, business_invariants_or_bug_symptom, validation_commands, risks.
- When calling any MCP tool, pass only the original Daily task/diff text, never this Benchmark constraints section or tool instructions.
- Then call CodeGraph get_change_pack(task=<original Daily task only>, changeType=debug, tokenBudget=9000, maxFiles=16, maxSymbols=40, includeTests=true, includeSnippets=true, snippetTokenBudget=2500, profile=full).
- Then make one required anchor search_symbol call with query="Trace Starts Identifies markAsRecalled RecallsController RecallService MemoryTracker ForgettingCurve MemoryTrackerService recalledSuccessfully recallFailed", includeTests=true, includeSnippets=false, limit=80. Scan the full returned symbols array and use it to fill backend, frontend, domain-state, and existing-test slots. If one required quality slot is still missing, make at most one get_file_slice or search_code call for that exact named file/symbol; otherwise stop.
- Carry exact CodeGraph evidence into the final answer.
- Quality hard gate: do not claim the task is fully covered unless the final JSON names at least one backend/API or service/domain file, relevant symbols, and existing tests when tests are requested by the prompt/rubric.
- For PBI/business prompts touching UI behavior, include frontend page/composable/state evidence when present; if it remains absent after the allowed calls, list it under unknowns/risks instead of inventing it.
- For bug-trace prompts, separate symptom path, likely root-cause method/state, focused regression tests, and fix handoff.
- Adaptive quality budget: at most 4 MCP calls total: 1 TokenOpt passport call, 1 quality CodeGraph pack, 1 required anchor search, and at most 1 exact CodeGraph slice/search for a still-missing required slot. Shell fallback is disabled.
- Final ideas/proposals/tests must be evidence-grounded: each concrete idea should name relevant files or symbols, explain business/behavior value, include validation/tests, and state risks/tradeoffs.
- Final output must be a syntactically valid compact single JSON object under 7500 characters. Close every array/object. Prefer short evidence-rich strings over nested objects unless the user explicitly requested nested objects.
- Compact limits: max 5 existing_coverage items, max 12 files, max 16 symbols, max 5 tests_to_add, max 5 risks. Preserve all requested top-level keys exactly.
- If a slot remains missing, do not invent it; include it as a risk or missing_coverage item in the requested JSON shape.
- Preserve the requested JSON contract exactly.
```

Final output:
```json
{"summary":"TokenOpt marked the task not answerable from its packet alone, so CodeGraph anchor/slice evidence was used. The backend invariant is clear: an incorrect recall should flow through PATCH /{memoryTracker}/mark-as-recalled?successful=false and end in MemoryTracker.recallFailed, which sets nextRecallAt to current UTC time plus 12 hours. The most likely regression is either the caller no longer sends successful=false for wrong answers, or MemoryTrackerService.markAsRecalled is bypassing/overwriting the false branch; existing controller coverage only checks the successful=true recallCount path.","reproduction_path":["Learner receives a recall prompt for a due MemoryTracker, then answers incorrectly.","Caller should invoke backend/src/main/java/com/odde/doughnut/controllers/MemoryTrackerController.java:97-105 via PATCH /{memoryTracker}/mark-as-recalled with query param successful=false.","Controller forwards testabilitySettings.getCurrentUTCTimestamp(), successful, memoryTracker, null to memoryTrackerService.markAsRecalled.","Expected domain path is backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:115-123: false branch calls recallFailed.","Expected scheduling is backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:100-103: setNextRecallAt(addHoursToTimestamp(currentUTCTimestamp,12))."],"root_cause_hypotheses":["Caller/regression hypothesis: the wrong-answer UI/CLI path may be omitting successful=false or sending true, because the backend false branch still explicitly schedules current+12h in MemoryTracker.recallFailed.","Service hypothesis: MemoryTrackerService.markAsRecalled, called at MemoryTrackerController.java:103-104, may no longer delegate false results to MemoryTracker.markAsRecalled or may overwrite nextRecallAt after delegation; its body was not in the allowed final slice.","Coverage gap hypothesis: backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:280-287 only calls controller.markAsRecalled(rp,true) and asserts recallCount, so a false-result scheduling regression can pass existing controller tests.","Success-vs-failure distinction: MemoryTracker.recalledSuccessfully at MemoryTracker.java:105-113 updates lastRecalledAt and computes nextRecallAt from the forgetting curve; MemoryTracker.recallFailed at MemoryTracker.java:100-103 should not use that success schedule and should force a 12h retry."],"files":["backend/src/main/java/com/odde/doughnut/controllers/MemoryTrackerController.java:97-105 backend API entrypoint, PATCH /{memoryTracker}/mark-as-recalled forwards successful to service.","backend/src/main/java/com/odde/doughnut/entities/MemoryTracker.java:91-123 domain scheduling logic for calculateNextRecallAt, recallFailed, recalledSuccessfully, markAsRecalled.","backend/src/main/java/com/odde/doughnut/services/MemoryTrackerService.java controller target; verify false delegation/overwrite risk.","backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java:278-288 existing MarkAsRecalled test only covers true recallCount.","backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java existing relevant service test file from CodeGraph anchor results.","backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java:123-133 existing spaced-repetition test helper evidence.","backend/src/test/java/com/odde/doughnut/controllers/RecallsControllerTests.java existing recall-list test file from CodeGraph anchor results.","frontend/tests/components/recall/RecallPromptComponent.spec.ts frontend recall coverage candidate from CodeGraph tests list.","frontend/tests/pages/RecallPage.spec.ts frontend recall page coverage candidate from CodeGraph tests list.","cli/src/commands/recall/nextRecallCardLoad.ts recall loader symbols found; wrong-answer submission caller not proven in allowed evidence."],"symbols":["com.odde.doughnut.controllers.MemoryTrackerController.markAsRecalled(MemoryTracker,boolean) lines 97-105","com.odde.doughnut.services.MemoryTrackerService.markAsRecalled(Timestamp,boolean,MemoryTracker,Integer) call at MemoryTrackerController.java:103-104","com.odde.doughnut.entities.MemoryTracker.markAsRecalled(Timestamp,boolean,Integer) lines 115-123","com.odde.doughnut.entities.MemoryTracker.recallFailed(Timestamp) lines 100-103","com.odde.doughnut.entities.MemoryTracker.recalledSuccessfully(Timestamp,Integer) lines 105-113","com.odde.doughnut.entities.MemoryTracker.calculateNextRecallAt() lines 91-94","com.odde.doughnut.entities.MemoryTracker.forgettingCurve() lines 96-98","com.odde.doughnut.controllers.MemoryTrackerControllerTest.MarkAsRecalled lines 278-288","com.odde.doughnut.controllers.MarkAsRecalled.itMustUpdateTheMemoryTrackerRecord() lines 280-287","fetchDueMemoryTrackerIds() cli/src/commands/recall/nextRecallCardLoad.ts:29-40","loadRecallCardForMemoryTrackerId() cli/src/commands/recall/nextRecallCardLoad.ts:159-224"],"tests_to_run":["Add/extend a domain regression test for MemoryTracker.markAsRecalled(now,false,null): recallCount increments and nextRecallAt equals now+12h, distinct from recalledSuccessfully scheduling.","Add/extend backend/src/test/java/com/odde/doughnut/controllers/MemoryTrackerControllerTest.java MarkAsRecalled with controller.markAsRecalled(rp,false) and assert nextRecallAt is current UTC timestamp plus 12h.","Add/extend backend/src/test/java/com/odde/doughnut/services/MemoryTrackerServiceTest.java to prove service delegates successful=false without overwriting nextRecallAt.","Run focused backend tests for MemoryTrackerControllerTest, MemoryTrackerServiceTest, and RecallServiceWithSpacedRepetitionAlgorithmTest using the repo's backend test runner.","If backend false-branch tests pass but product repro persists, run/add caller tests in frontend/tests/pages/RecallPage.spec.ts or frontend/tests/components/recall/RecallPromptComponent.spec.ts to assert wrong answers call mark-as-recalled with successful=false."],"fix_plan":["First write the failing false-answer scheduling test at the lowest useful layer: MemoryTracker.markAsRecalled false should schedule currentUTCTimestamp+12h.","Trace MemoryTrackerService.markAsRecalled and ensure it calls memoryTracker.markAsRecalled(currentUTCTimestamp,false,thinkingTimeMs) for wrong answers and does not recalculate nextRecallAt afterward.","If the backend service/domain test is already green, move the fix to the caller: ensure incorrect answer handling sends PATCH /{memoryTracker}/mark-as-recalled?successful=false instead of true or a missing default.","Preserve success behavior: recalledSuccessfully should still update lastRecalledAt and nextRecallAt via calculateNextRecallAt/ForgettingCurve; only the failed branch should force the 12h retry.","Keep the fix scoped to caller/service scheduling and add regression coverage before implementation."],"risks":["TokenOpt packet was answerable=false; CodeGraph change pack was noisy, so conclusions rely on the required anchor search plus exact slices.","MemoryTrackerService.markAsRecalled body was not included in the allowed final slice, so service overwrite/delegation remains the highest-priority verification point.","Frontend or CLI wrong-answer submission path was not identified in the allowed evidence; if backend false tests pass, caller mapping is likely the missing slot.","Time assertions can be flaky unless tests use testabilitySettings/currentUTCTimestamp or a fixed Timestamp.","Do not change success scheduling while fixing failed scheduling; MemoryTracker.java has deliberately separate success and failure paths."]}
```

Idea checks: 7/8 (0.875)

Critical misses: file:backend/src/main/java/com/odde/doughnut/controllers/RecallPromptController.java, file:backend/src/test/java/com/odde/doughnut/controllers/RecallPromptControllerTests.java, symbol:answerQuiz, symbol:answerSpelling, symbol:TimestampOperations.addHoursToTimestamp, term:spelling
