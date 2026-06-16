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

## Interpretation

Natural prompting by itself does not reliably reduce token burn. It gives the agent freedom, but if the full CodeGraph tool surface is visible, the agent may either stop too early after a compact packet or keep calling low-level tools until the run becomes expensive.

The exact-slice adaptive mode currently proves the best cost/quality tradeoff:

- Versus baseline, avg input drops from `1,699,313` to `120,839` tokens, a 92.9% reduction.
- Versus baseline, avg fresh input drops from `130,460` to `36,657` tokens, a 71.9% reduction.
- Quality improves from `0.888` to `1.000`, and correct stays `3/3`.
- Tool calls drop from avg `61.3` shell calls to avg `2.7` MCP calls.

The natural ContextGate direction is still useful, but should remain experimental until acquisition is enforced behind one broker/facade. The right architecture is:

1. User prompt and project/agent instructions remain authoritative.
2. ContextGate receives the natural task plus required evidence slots.
3. ContextGate owns provider choice and budget: TokenOpt index first, CodeGraph exact slices only when a named file/symbol slot needs proof.
4. The agent sees a coverage contract and bounded followups, not a fixed tool script and not the full low-level provider surface.

## Decision

Keep `tokenopt-codegraph-adaptive` exact-slice mode as the default benchmark winner. Keep `contextgate-natural` as an experimental mode for prompt/setup compatibility work. The next fix should move CodeGraph acquisition behind the ContextGate broker or expose a filtered CodeGraph facade, so natural prompts can stay composable without letting the agent spend unbounded tokens.
