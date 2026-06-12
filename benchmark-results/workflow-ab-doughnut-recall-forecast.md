# Workflow A/B Benchmark

Generated: 2026-06-12T14:44:59.696Z
Feature: doughnut-recall-forecast - Doughnut recall forecast counts

## Summary

| Workflow | Quality | Tests | Input | Cached | Output | Reasoning | Total | Tool | MCP | Shell | Changed | Duration |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| baseline | 0.455 (5/11) | fail | 0 | 0 | 0 | 0 | 0 | 91 | 0 | 91 | 12 | 903706 |
| tokenopt | 0.455 (5/11) | fail | 0 | 0 | 0 | 0 | 0 | 66 | 6 | 60 | 12 | 900005 |
| speckit | 0.750 (9/12) | fail | 0 | 0 | 0 | 0 | 0 | 82 | 0 | 82 | 14 | 900003 |
| speckit-tokenopt | 0.769 (10/13) | fail | 0 | 0 | 0 | 0 | 0 | 65 | 1 | 64 | 16 | 901400 |

## Token Comparison

Compared to baseline:
tokenopt:
- Input tokens: tokenopt=0, baseline=0, delta unavailable.
- Output tokens: tokenopt=0, baseline=0, delta unavailable.
- Reasoning tokens: tokenopt=0, baseline=0, delta unavailable.
- Total tokens: tokenopt=0, baseline=0, delta unavailable.
Quality delta: tokenopt 0.455 vs baseline 0.455.
Tool calls: tokenopt 66 vs baseline 91; MCP 6 vs 0; shell 60 vs 91.

speckit:
- Input tokens: speckit=0, baseline=0, delta unavailable.
- Output tokens: speckit=0, baseline=0, delta unavailable.
- Reasoning tokens: speckit=0, baseline=0, delta unavailable.
- Total tokens: speckit=0, baseline=0, delta unavailable.
Quality delta: speckit 0.750 vs baseline 0.455.
Tool calls: speckit 82 vs baseline 91; MCP 0 vs 0; shell 82 vs 91.

speckit-tokenopt:
- Input tokens: speckit-tokenopt=0, baseline=0, delta unavailable.
- Output tokens: speckit-tokenopt=0, baseline=0, delta unavailable.
- Reasoning tokens: speckit-tokenopt=0, baseline=0, delta unavailable.
- Total tokens: speckit-tokenopt=0, baseline=0, delta unavailable.
Quality delta: speckit-tokenopt 0.769 vs baseline 0.455.
Tool calls: speckit-tokenopt 65 vs baseline 91; MCP 1 vs 0; shell 64 vs 91.

TokenOpt vs SpecKit:
- Input tokens: tokenopt=0, speckit=0, delta unavailable.
- Output tokens: tokenopt=0, speckit=0, delta unavailable.
- Reasoning tokens: tokenopt=0, speckit=0, delta unavailable.
- Total tokens: tokenopt=0, speckit=0, delta unavailable.
Quality delta: tokenopt 0.455 vs speckit 0.750.
Test result: tokenopt fail, speckit fail.

Hybrid vs SpecKit:
- Input tokens: speckit-tokenopt=0, speckit=0, delta unavailable.
- Output tokens: speckit-tokenopt=0, speckit=0, delta unavailable.
- Reasoning tokens: speckit-tokenopt=0, speckit=0, delta unavailable.
- Total tokens: speckit-tokenopt=0, speckit=0, delta unavailable.
Quality delta: speckit-tokenopt 0.769 vs speckit 0.750.

Hybrid vs TokenOpt:
- Input tokens: speckit-tokenopt=0, tokenopt=0, delta unavailable.
- Output tokens: speckit-tokenopt=0, tokenopt=0, delta unavailable.
- Reasoning tokens: speckit-tokenopt=0, tokenopt=0, delta unavailable.
- Total tokens: speckit-tokenopt=0, tokenopt=0, delta unavailable.
Quality delta: speckit-tokenopt 0.769 vs tokenopt 0.455.

## Runs

### baseline

- Worktree: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\worktrees\baseline
- Raw log: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\baseline-codex.jsonl
- Last message: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\baseline-last.txt
- Diff: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\baseline-diff.patch
- Test output: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\baseline-test-output.txt
- Diff stat: 12 files changed, 208 insertions(+), 24 deletions(-)
- Test command: cmd /c "backend\gradlew.bat -p backend test --tests com.odde.doughnut.services.RecallServiceWithSpacedRepetitionAlgorithmTest -Dspring.profiles.active=test --build-cache --parallel"
- Test exit: 1

Quality checks:
- fail: codex_exit_zero
- fail: tests_passed
- pass: changed_files_present
- pass: diff_non_empty
- fail: final_answer_mentions_tests
- pass: rubric:adds recall forecast counts for 0/3/7/14 day windows
- fail: rubric:uses existing timezone and half-day recall semantics
- pass: rubric:excludes deleted or removed memory trackers
- fail: rubric:keeps existing load-more behavior compatible
- fail: rubric:updates UI to surface counts on recall done/load-more state
- pass: rubric:adds targeted tests or clearly explains validation blockers

Changed files:
- backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java
- backend/src/main/java/com/odde/doughnut/services/RecallService.java
- backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java
- frontend/src/components/toolbars/MainMenu.stories.ts
- frontend/src/components/toolbars/MainMenu.vue
- frontend/src/composables/useRecallData.ts
- frontend/src/pages/RecallPage.vue
- frontend/tests/components/recall/Assimilation.spec.ts
- frontend/tests/pages/RecallPage.spec.ts
- frontend/tests/toolbars/MainMenu.spec.ts
- packages/doughnut-test-fixtures/src/DueMemoryTrackersBuilder.ts
- packages/generated/doughnut-backend-api/types.gen.ts

### tokenopt

- Worktree: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\worktrees\tokenopt
- Raw log: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\tokenopt-codex.jsonl
- Last message: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\tokenopt-last.txt
- Diff: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\tokenopt-diff.patch
- Test output: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\tokenopt-test-output.txt
- Diff stat: 12 files changed, 204 insertions(+), 6 deletions(-)
- Test command: cmd /c "backend\gradlew.bat -p backend test --tests com.odde.doughnut.services.RecallServiceWithSpacedRepetitionAlgorithmTest -Dspring.profiles.active=test --build-cache --parallel"
- Test exit: 1

Quality checks:
- fail: codex_exit_zero
- fail: tests_passed
- pass: changed_files_present
- pass: diff_non_empty
- fail: final_answer_mentions_tests
- pass: rubric:adds recall forecast counts for 0/3/7/14 day windows
- fail: rubric:uses existing timezone and half-day recall semantics
- pass: rubric:excludes deleted or removed memory trackers
- fail: rubric:keeps existing load-more behavior compatible
- fail: rubric:updates UI to surface counts on recall done/load-more state
- pass: rubric:adds targeted tests or clearly explains validation blockers

Changed files:
- backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java
- backend/src/main/java/com/odde/doughnut/services/RecallService.java
- backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java
- frontend/src/components/toolbars/MainMenu.vue
- frontend/src/composables/useRecallData.ts
- frontend/src/pages/RecallPage.vue
- frontend/tests/components/recall/Assimilation.spec.ts
- frontend/tests/pages/RecallPage.spec.ts
- frontend/tests/toolbars/MainMenu.spec.ts
- open_api_docs.yaml
- packages/doughnut-test-fixtures/src/DueMemoryTrackersBuilder.ts
- packages/generated/doughnut-backend-api/types.gen.ts

### speckit

- Worktree: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\worktrees\speckit
- Raw log: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\speckit-codex.jsonl
- Last message: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\speckit-last.txt
- Diff: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\speckit-diff.patch
- Test output: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\speckit-test-output.txt
- Diff stat: 10 files changed, 177 insertions(+), 11 deletions(-); 4 untracked files
- Test command: cmd /c "backend\gradlew.bat -p backend test --tests com.odde.doughnut.services.RecallServiceWithSpacedRepetitionAlgorithmTest -Dspring.profiles.active=test --build-cache --parallel"
- Test exit: 1

Quality checks:
- fail: codex_exit_zero
- fail: tests_passed
- pass: changed_files_present
- pass: diff_non_empty
- pass: final_answer_mentions_tests
- pass: speckit_artifacts_created
- pass: rubric:adds recall forecast counts for 0/3/7/14 day windows
- pass: rubric:uses existing timezone and half-day recall semantics
- pass: rubric:excludes deleted or removed memory trackers
- pass: rubric:keeps existing load-more behavior compatible
- fail: rubric:updates UI to surface counts on recall done/load-more state
- pass: rubric:adds targeted tests or clearly explains validation blockers

Changed files:
- backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java
- backend/src/main/java/com/odde/doughnut/services/RecallService.java
- backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java
- frontend/src/components/toolbars/MainMenu.vue
- frontend/src/composables/useRecallData.ts
- frontend/src/pages/RecallPage.vue
- frontend/tests/pages/RecallPage.spec.ts
- frontend/tests/toolbars/MainMenu.spec.ts
- packages/doughnut-test-fixtures/src/DueMemoryTrackersBuilder.ts
- packages/generated/doughnut-backend-api/types.gen.ts
- backend/src/main/java/com/odde/doughnut/controllers/dto/RecallForecast.java
- specs/workflow-ab-doughnut-recall-forecast/plan.md
- specs/workflow-ab-doughnut-recall-forecast/spec.md
- specs/workflow-ab-doughnut-recall-forecast/tasks.md

### speckit-tokenopt

- Worktree: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\worktrees\speckit-tokenopt
- Raw log: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\speckit-tokenopt-codex.jsonl
- Last message: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\speckit-tokenopt-last.txt
- Diff: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\speckit-tokenopt-diff.patch
- Test output: D:\Personal\Projects\tokenopt\benchmark-results\workflow-ab-doughnut-recall-forecast\speckit-tokenopt-test-output.txt
- Diff stat: 12 files changed, 236 insertions(+), 9 deletions(-); 4 untracked files
- Test command: cmd /c "backend\gradlew.bat -p backend test --tests com.odde.doughnut.services.RecallServiceWithSpacedRepetitionAlgorithmTest -Dspring.profiles.active=test --build-cache --parallel"
- Test exit: 1

Quality checks:
- fail: codex_exit_zero
- fail: tests_passed
- pass: changed_files_present
- pass: diff_non_empty
- fail: final_answer_mentions_tests
- pass: speckit_artifacts_created
- pass: hybrid_used_tokenopt_mcp
- pass: rubric:adds recall forecast counts for 0/3/7/14 day windows
- pass: rubric:uses existing timezone and half-day recall semantics
- pass: rubric:excludes deleted or removed memory trackers
- pass: rubric:keeps existing load-more behavior compatible
- pass: rubric:updates UI to surface counts on recall done/load-more state
- pass: rubric:adds targeted tests or clearly explains validation blockers

Changed files:
- backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java
- backend/src/main/java/com/odde/doughnut/services/RecallService.java
- backend/src/test/java/com/odde/doughnut/services/RecallServiceWithSpacedRepetitionAlgorithmTest.java
- frontend/src/components/toolbars/MainMenu.vue
- frontend/src/composables/useRecallData.ts
- frontend/src/pages/RecallPage.vue
- frontend/tests/components/recall/Assimilation.spec.ts
- frontend/tests/pages/RecallPage.spec.ts
- frontend/tests/toolbars/MainMenu.spec.ts
- open_api_docs.yaml
- packages/doughnut-test-fixtures/src/DueMemoryTrackersBuilder.ts
- packages/generated/doughnut-backend-api/types.gen.ts
- backend/src/main/java/com/odde/doughnut/controllers/dto/RecallWindowCount.java
- specs/workflow-ab-doughnut-recall-forecast/plan.md
- specs/workflow-ab-doughnut-recall-forecast/spec.md
- specs/workflow-ab-doughnut-recall-forecast/tasks.md

