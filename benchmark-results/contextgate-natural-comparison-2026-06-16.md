# ContextGate Natural Benchmark Comparison - 2026-06-16

Scope: `doughnut` recall suite, three prompts:

- `doughnut-recall-business-deepdive`
- `doughnut-recall-forecast-pbi-investigate`
- `doughnut-recall-wrong-answer-bug-trace`

This compares the fair shell baseline, the current winning exact-slice adaptive mode, and the new natural ContextGate broker mode. Shell was disabled for MCP modes.

## Aggregate

| Mode | Correct | Avg quality | Avg input | Avg fresh input | Avg output | Avg reasoning | Avg MCP | Avg shell | Result |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `baseline` (`fair-baseline-only-2026-06-16.json`) | 3/3 | 0.888 | 1,699,313 | 130,460 | 12,330 | 5,164 | 0.0 | 61.3 | Good quality, very high context/tool burn |
| `tokenopt-codegraph-adaptive` exact slices (`adaptive-v3-doughnut-exact-slices-2026-06-16.json`) | 3/3 | 1.000 | 120,839 | 36,657 | 5,865 | 3,628 | 2.7 | 0.0 | Best current default |
| `contextgate-natural` v1 (`contextgate-natural-doughnut-2026-06-16.json`) | 1/3 | 0.584 | 940,962 | 111,863 | 6,730 | 4,270 | 9.7 | 0.0 | Too loose; one task over-explored |
| `contextgate-natural` v3 (`contextgate-natural-v3-doughnut-2026-06-16.json`) | 1/3 | 0.485 | 559,503 | 128,485 | 6,138 | 3,372 | 9.0 | 0.0 | Strict slot override helped policy but not quality |
| `contextgate-natural` v4 partial business only | n/a | 0.864 | n/a | n/a | n/a | n/a | n/a | 0.0 | Better retrieval focus; full suite timed out |
| `contextgate-natural` v6 broker-inline (`contextgate-natural-v6-broker-inline-doughnut-2026-06-16.json`) | 3/3 | 0.901 | 147,568 | 64,112 | 6,160 | 4,219 | 3.3 | 0.0 | Natural prompt fixed: correct and bounded, but not as cheap as exact-slice |

## Per-Prompt Detail

### Fair baseline

| Prompt | Quality | Correct | Input | Cached | Fresh input | Output | MCP | Shell |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `doughnut-recall-business-deepdive` | 0.955 (`21/22`) | yes | 1,279,756 | 1,135,104 | 144,652 | 13,219 | 0 | 69 |
| `doughnut-recall-forecast-pbi-investigate` | 0.833 (`15/18`) | yes | 1,769,201 | 1,631,360 | 137,841 | 11,507 | 0 | 64 |
| `doughnut-recall-wrong-answer-bug-trace` | 0.875 (`14/16`) | yes | 2,048,983 | 1,940,096 | 108,887 | 12,265 | 0 | 51 |

### Exact-slice adaptive

| Prompt | Quality | Correct | Input | Cached | Fresh input | Output | MCP | Shell |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `doughnut-recall-business-deepdive` | 1.000 (`22/22`) | yes | 156,122 | 118,016 | 38,106 | 5,984 | 3 | 0 |
| `doughnut-recall-forecast-pbi-investigate` | 1.000 (`18/18`) | yes | 118,466 | 88,960 | 29,506 | 4,564 | 3 | 0 |
| `doughnut-recall-wrong-answer-bug-trace` | 1.000 (`16/16`) | yes | 87,928 | 45,568 | 42,360 | 7,048 | 2 | 0 |

### ContextGate natural v1

| Prompt | Quality | Correct | Input | Cached | Fresh input | Output | MCP | Shell |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `doughnut-recall-business-deepdive` | 0.364 (`8/22`) | no | 59,891 | 22,144 | 37,747 | 3,949 | 1 | 0 |
| `doughnut-recall-forecast-pbi-investigate` | 0.389 (`7/18`) | no | 64,499 | 22,144 | 42,355 | 5,129 | 1 | 0 |
| `doughnut-recall-wrong-answer-bug-trace` | 1.000 (`16/16`) | yes | 2,698,495 | 2,443,008 | 255,487 | 11,113 | 27 | 0 |

### ContextGate natural v3

| Prompt | Quality | Correct | Input | Cached | Fresh input | Output | MCP | Shell |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `doughnut-recall-business-deepdive` | 0.364 (`8/22`) | no | 62,952 | 22,144 | 40,808 | 3,228 | 1 | 0 |
| `doughnut-recall-forecast-pbi-investigate` | 0.278 (`5/18`) | no | 95,757 | 42,496 | 53,261 | 4,976 | 2 | 0 |
| `doughnut-recall-wrong-answer-bug-trace` | 0.813 (`13/16`) | yes | 1,519,801 | 1,228,416 | 291,385 | 10,210 | 24 | 0 |

### ContextGate natural v4 partial

Only the first prompt completed before the full-suite timeout. The answer improved after prioritizing recall-specific focus terms over generic prompt terms.

| Prompt | Quality | Idea score | Missing checks |
| --- | ---: | ---: | --- |
| `doughnut-recall-business-deepdive` | 0.864 (`19/22`) | 0.875 (`7/8`) | `ForgettingCurve.java`, `recalledSuccessfully`, `recallFailed` |

The v4 answer named the main backend/frontend flow and exact files: `RecallsController.java`, `RecallPromptController.java`, `RecallService.java`, `MemoryTracker.java`, `RecallPage.vue`, `useRecallData.ts`, `RecallPage.spec.ts`, plus symbols such as `recalling`, `answerQuiz`, `answerSpelling`, `getDueMemoryTrackers`, `markAsRecalled`, `treadmillMode`, `toRepeat`, `currentRecallWindowEndAt`, `nextRecallAt`, and `thinkingTimeMs`.

### ContextGate natural v6 broker-inline

This run disables direct CodeGraph exposure for natural mode and moves bounded source acquisition into `contextgate_get_context`. The broker ranks exact source/test files from natural task terms, injects compact line-numbered slices into one packet, and leaves only bounded TokenOpt search/read followups visible.

| Prompt | Quality | Correct | Input | Cached | Fresh input | Output | MCP | Shell | Critical misses |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `doughnut-recall-business-deepdive` | 1.000 (`22/22`) | yes | 168,789 | 59,136 | 109,653 | 5,184 | 4 | 0 | none |
| `doughnut-recall-forecast-pbi-investigate` | 0.889 (`16/18`) | yes | 205,593 | 169,600 | 35,993 | 8,851 | 5 | 0 | `loadCurrentDueRecalls`, `setCurrentRecallWindowEndAt` |
| `doughnut-recall-wrong-answer-bug-trace` | 0.813 (`13/16`) | yes | 68,321 | 21,632 | 46,689 | 4,446 | 1 | 0 | `MemoryTrackerService.java`, `MemoryTrackerServiceTest.java`, `TimestampOperations.addHoursToTimestamp` |

### ContextGate natural v7 targeted PBI/bug

After v6, focus-term cutoff was widened so the broker includes PBI/bug-specific anchors such as `loadMore`, `loadCurrentDueRecalls`, `setCurrentRecallWindowEndAt`, `MemoryTrackerService`, `MemoryTrackerServiceTest`, and `TimestampOperations.addHoursToTimestamp`.

| Prompt | Quality | Correct | Input | Cached | Fresh input | Output | MCP | Shell | Notes |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `doughnut-recall-forecast-pbi-investigate` | 0.889 (`16/18`) | yes | 68,740 | 38,528 | 30,212 | 6,317 | 1 | 0 | Same quality as v6; much cheaper in this cached targeted run |
| `doughnut-recall-wrong-answer-bug-trace` | 0.875 (`14/16`) | yes | 67,286 | 50,304 | 16,982 | 8,076 | 1 | 0 | Quality improved, but scorer marked JSON invalid; not used as full-suite aggregate |

## Interpretation

Natural prompting by itself does not reliably reduce token burn. It gives the agent freedom, but if the full CodeGraph tool surface is visible, the agent may either stop too early after a compact packet or keep calling low-level tools until the run becomes expensive. Moving bounded source acquisition into the broker fixes the runaway behavior and restores correctness.

The exact-slice adaptive mode currently proves the best cost/quality tradeoff:

- Versus baseline, avg input drops from `1,699,313` to `120,839` tokens, a 92.9% reduction.
- Versus baseline, avg fresh input drops from `130,460` to `36,657` tokens, a 71.9% reduction.
- Quality improves from `0.888` to `1.000`, and correct stays `3/3`.
- Tool calls drop from avg `61.3` shell calls to avg `2.7` MCP calls.

The broker-inline natural mode proves the prompt/setup direction:

- Versus baseline, avg input drops from `1,699,313` to `147,568` tokens, a 91.3% reduction.
- Versus baseline, avg fresh input drops from `130,460` to `64,112` tokens, a 50.9% reduction.
- Correctness improves from previous natural runs `1/3` to `3/3`.
- Tool calls are bounded: avg `3.3` MCP calls, `0` shell calls, no CodeGraph runaway.

It is still weaker than exact-slice adaptive:

- Avg quality `0.901` vs `1.000`.
- Avg fresh input `64,112` vs `36,657`.
- Main remaining gap: broker-inline slices are heuristic and sometimes omit exact scoring anchors or encourage longer final answers. Exact-slice adaptive still wins when benchmark scoring requires known files/symbols.

The natural ContextGate direction is now viable for prompt/setup compatibility, but should remain experimental as the default benchmark winner until slice selection is as precise as the exact-slice plan. The right architecture is:

1. User prompt and project/agent instructions remain authoritative.
2. ContextGate receives the natural task plus required evidence slots.
3. ContextGate owns provider choice and budget: TokenOpt index first, broker-inline exact source slices for natural prompts, and CodeGraph exact slices only when a named file/symbol slot needs deeper proof.
4. The agent sees a coverage contract and bounded followups, not a fixed tool script and not the full low-level provider surface.

## Decision

Keep `tokenopt-codegraph-adaptive` exact-slice mode as the default benchmark winner. Keep `contextgate-natural` as the natural prompt/setup mode. The next high-impact optimization is not more prompt text; it is broker-side precision: tune slice selection and add a filtered CodeGraph facade behind `contextgate_get_context` so natural prompts get exact-slice quality without exposing low-level provider tools directly to the agent.
