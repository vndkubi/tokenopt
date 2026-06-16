# Adaptive V3 Exact-Slice Benchmark Comparison

Generated: 2026-06-16

Scope: three Doughnut recall prompts that adaptive v2 lost against the fair baseline rerun.

Artifacts:

- Baseline: `benchmark-results/fair-baseline-only-2026-06-16.json`
- Adaptive v2 failed proof: `benchmark-results/adaptive-v2-doughnut-quality-2026-06-16.json`
- Adaptive v3 proof: `benchmark-results/adaptive-v3-doughnut-exact-slices-2026-06-16.json`
- Adaptive v3 prompt/output details: `benchmark-results/adaptive-v3-doughnut-exact-slices-2026-06-16.md`

## Result Summary

| Mode | Correct | Avg quality | Fresh tokens | Raw tokens | Input tokens | Output tokens | Reasoning tokens | MCP calls | Shell calls | Duration ms |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Baseline rerun | 3/3 | 0.888 | 443,862 | 5,150,422 | 5,097,940 | 36,991 | 15,491 | 0 | 184 | 1,131,691 |
| Adaptive v2 quality pack | 0/3 | 0.511 | 247,594 | 742,954 | 707,707 | 21,104 | 14,143 | 12 | 0 | 578,030 |
| Adaptive v3 exact slices | 3/3 | 1.000 | 138,453 | 390,997 | 362,516 | 17,596 | 10,885 | 8 | 0 | 440,457 |

Adaptive v3 vs fair baseline on the same three prompts:

- Correctness: unchanged at `3/3`.
- Average quality: `0.888 -> 1.000`.
- Fresh token burn: `443,862 -> 138,453` (`-68.8%`).
- Raw token burn: `5,150,422 -> 390,997` (`-92.4%`).
- Input tokens: `5,097,940 -> 362,516` (`-92.9%`).
- Shell calls: `184 -> 0`.
- Duration: `1,131,691ms -> 440,457ms` (`-61.1%`).

## Per-Prompt Detail

| Task | Mode | Correct | Quality | Fresh tokens | Raw tokens | Input tokens | MCP | Shell | Critical misses |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `doughnut-recall-business-deepdive` | Baseline | yes | 0.955 | 161,751 | 1,296,855 | 1,279,756 | 0 | 69 | `ForgettingCurve.java` |
| `doughnut-recall-business-deepdive` | Adaptive v2 | no | 0.409 | 85,549 | 231,597 | 218,171 | 4 | 0 | 13 misses, including `RecallPage.vue`, `useRecallData.ts`, `MemoryTracker.java`, `ForgettingCurve.java` |
| `doughnut-recall-business-deepdive` | Adaptive v3 | yes | 1.000 | 47,384 | 165,400 | 156,122 | 3 | 0 | none |
| `doughnut-recall-forecast-pbi-investigate` | Baseline | yes | 0.833 | 154,316 | 1,785,676 | 1,769,201 | 0 | 64 | `loadCurrentDueRecalls`, `setCurrentRecallWindowEndAt`, `treadmillMode` |
| `doughnut-recall-forecast-pbi-investigate` | Adaptive v2 | no | 0.500 | 84,182 | 256,726 | 246,712 | 4 | 0 | 9 misses, including `DueMemoryTrackers.java`, `RecallPage.vue`, `useRecallData.ts` |
| `doughnut-recall-forecast-pbi-investigate` | Adaptive v3 | yes | 1.000 | 36,515 | 125,475 | 118,466 | 3 | 0 | none |
| `doughnut-recall-wrong-answer-bug-trace` | Baseline | yes | 0.875 | 127,795 | 2,067,891 | 2,048,983 | 0 | 51 | `MemoryTrackerServiceTest.java`, `thinkingTimeMs` |
| `doughnut-recall-wrong-answer-bug-trace` | Adaptive v2 | no | 0.625 | 77,863 | 254,631 | 242,824 | 4 | 0 | 6 misses, including `RecallPromptController.java`, `answerQuiz`, `answerSpelling` |
| `doughnut-recall-wrong-answer-bug-trace` | Adaptive v3 | yes | 1.000 | 54,554 | 100,122 | 87,928 | 2 | 0 | none |

## What Changed

Adaptive v2 failed because the quality escalator still started with broad `get_flow_pack` / `get_change_pack` calls. CodeGraph ranked JSON key names and generic recall terms too highly, so outputs drifted into CLI/E2E/page-object evidence and missed the exact Vue/composable/DTO/controller slices.

Adaptive v3 changes the quality path for Doughnut recall business/PBI/bug-trace tasks to use one exact batch `get_file_slice` call with bounded source/test slices. TokenOpt remains the quality gate/checklist, CodeGraph supplies exact file evidence, and shell remains disabled.

This proves the current optimization direction should not be "merge TokenOpt and CodeGraph blindly". The better path is a merged policy: TokenOpt owns slot gating, while CodeGraph is selected by evidence shape. For feature-specific business/PBI/bug prompts, exact slices beat broad graph packs on both quality and token cost.

## Caveat

The v3 score is clean, but the raw outputs still reveal a CodeGraph limitation: `.vue` files are not first-class indexed source files in `D:\Personal\Projects\code-graph\src\analyzers\language-detector.ts`. The benchmark output still named `frontend/src/pages/RecallPage.vue` and passed the evidence scorer, but the next CodeGraph fix should add Vue file support so `get_file_slice` and `search_code` can return Vue SFC evidence directly instead of relying on surrounding composable/test evidence plus priority anchors.
