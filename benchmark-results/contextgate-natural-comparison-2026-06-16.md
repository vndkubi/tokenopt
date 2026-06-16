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
| `tokenopt-codegraph-adaptive` exact slices (`adaptive-v3-doughnut-exact-slices-2026-06-16.json`) | 3/3 | 1.000 | 120,839 | 36,657 | 5,865 | 3,628 | 2.7 | 0.0 | Best exact-quality control |
| `contextgate-natural` v1 (`contextgate-natural-doughnut-2026-06-16.json`) | 1/3 | 0.584 | 940,962 | 111,863 | 6,730 | 4,270 | 9.7 | 0.0 | Too loose; one task over-explored |
| `contextgate-natural` v3 (`contextgate-natural-v3-doughnut-2026-06-16.json`) | 1/3 | 0.485 | 559,503 | 128,485 | 6,138 | 3,372 | 9.0 | 0.0 | Strict slot override helped policy but not quality |
| `contextgate-natural` v4 partial business only | n/a | 0.864 | n/a | n/a | n/a | n/a | n/a | 0.0 | Better retrieval focus; full suite timed out |
| `contextgate-natural` v6 broker-inline (`contextgate-natural-v6-broker-inline-doughnut-2026-06-16.json`) | 3/3 | 0.901 | 147,568 | 64,112 | 6,160 | 4,219 | 3.3 | 0.0 | Natural prompt fixed: correct and bounded, but not as cheap as exact-slice |
| `contextgate-natural` v12 broker-state final (`contextgate-natural-v12-broker-state-final-doughnut-2026-06-16.json`) | 3/3 | 0.979 | 62,040 | 29,259 | 2,949 | 1,263 | 1.0 | 0.0 | Best natural setup: contract ok 3/3, lowest token burn, near-exact quality |
| `contextgate-natural` v28 short-carry final-checklist (`contextgate-natural-v28-short-carry-full-doughnut-2026-06-16.json`) | 3/3 | 1.000 | 62,305 | 20,125 | 3,523 | 2,212 | 1.0 | 0.0 | Best natural setup after deep dive: exact quality, broker-only, no double-spend |

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

### ContextGate natural v12 broker-state final

This run includes the anchor ledger, slim structured MCP payload, inline answerable override, broker state write, and benchmark scorer fix that reads contract metadata from the MCP packet when the final answer must preserve user-requested JSON keys.

| Prompt | Acq | Contract | Contract ok | Quality | Idea | Correct | Input | Cached | Fresh input | Output | Reasoning | MCP | Shell | Critical misses |
| --- | --- | --- | --- | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `doughnut-recall-business-deepdive` | `coding_coverage` | `coding_coverage` | yes | 1.000 (`22/22`) | 0.750 (`6/8`) | yes | 62,237 | 37,504 | 27,622 | 2,178 | 711 | 1 | 0 | none |
| `doughnut-recall-forecast-pbi-investigate` | `compile_evidence` | `overview_contract` | yes | 1.000 (`18/18`) | 0.875 (`7/8`) | yes | 64,061 | 22,144 | 45,096 | 2,445 | 734 | 1 | 0 | none |
| `doughnut-recall-wrong-answer-bug-trace` | `ask_or_bypass` | `artifact_sufficiency` | yes | 0.938 (`15/16`) | 0.875 (`7/8`) | yes | 59,821 | 51,328 | 15,060 | 4,224 | 2,343 | 1 | 0 | 1 |

The raw final answers are in `benchmark-results/contextgate-natural-v12-broker-state-final-doughnut-2026-06-16.md`. The raw Codex JSONL paths are listed in that file but are not committed by default because `benchmark-results/raw/` is bulky.

### ContextGate natural v28 short-carry final-checklist

This run keeps the natural prompt shape and exposes only `contextgate_get_context` in broker mode. The deep-dive fix is not a fixed tool script: ContextGate still owns provider choice, but answerable broker packets now end with a final identifier checklist, compact JSON guidance, and a shorter bug-trace carry list focused on the critical failure/success contrast identifiers.

| Prompt | Acq | Contract | Contract ok | Quality | Idea | Correct | Input | Cached | Fresh input | Output | Reasoning | MCP | Shell | Critical misses |
| --- | --- | --- | --- | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `doughnut-recall-business-deepdive` | `coding_coverage` | `coding_coverage` | yes | 1.000 (`22/22`) | 0.750 (`6/8`) | yes | 63,907 | 53,888 | 13,027 | 2,115 | 893 | 1 | 0 | none |
| `doughnut-recall-forecast-pbi-investigate` | `coding_coverage` | `coding_coverage` | yes | 1.000 (`18/18`) | 0.875 (`7/8`) | yes | 62,665 | 51,328 | 14,285 | 2,141 | 807 | 1 | 0 | none |
| `doughnut-recall-wrong-answer-bug-trace` | `ask_or_bypass` | `artifact_sufficiency` | yes | 1.000 (`16/16`) | 0.875 (`7/8`) | yes | 60,342 | 38,528 | 33,063 | 6,313 | 4,936 | 1 | 0 | none |

Deep-dive finding: the v12/v20 quality gap was not retrieval. The raw broker packet already contained `thinkingTimeMs` and `TimestampOperations.addHoursToTimestamp`, but the model sometimes omitted `thinkingTimeMs` from the final JSON. Prompt wording alone was stochastic. The stable improvement came from moving the identifier checklist to the end of the broker packet and reducing bug-trace carry terms from 10 to 6 so the exact critical terms stay salient without crowding the final answer.

The raw final answers are in `benchmark-results/contextgate-natural-v28-short-carry-full-doughnut-2026-06-16.md`.

## Interpretation

Natural prompting by itself does not reliably reduce token burn. It gives the agent freedom, but if the full CodeGraph tool surface is visible, the agent may either stop too early after a compact packet or keep calling low-level tools until the run becomes expensive. Moving bounded source acquisition into the ContextGate broker fixes the runaway behavior and preserves the user's natural prompt shape.

The exact-slice adaptive mode remains the deterministic quality control:

- Versus baseline, avg input drops from `1,699,313` to `120,839` tokens, a 92.9% reduction.
- Versus baseline, avg fresh input drops from `130,460` to `36,657` tokens, a 71.9% reduction.
- Quality improves from `0.888` to `1.000`, and correct stays `3/3`.
- Tool calls drop from avg `61.3` shell calls to avg `2.7` MCP calls.

The short-carry final-checklist natural mode is now the best natural/setup-compatible default on this suite:

- Versus baseline, avg input drops from `1,699,313` to `62,305` tokens, a 96.3% reduction.
- Versus baseline, avg fresh input drops from `130,460` to `20,125` tokens, an 84.6% reduction.
- Quality improves from `0.888` to `1.000`, and correct stays `3/3`.
- Tool calls drop from avg `61.3` shell calls to avg `1.0` MCP call, with `0` shell calls.
- Contract metadata is measured from the broker packet, so strict user JSON outputs no longer cause false `Contract ok=no`.
- Broker-only mode removes the low-level `tokenopt_search`/`tokenopt_read_file` tools from the natural surface, preventing redundant replay of answerable evidence.

Compared with exact-slice adaptive:

- Avg input drops another 48.4%: `120,839` to `62,305`.
- Avg fresh input drops 45.1% in this rerun: `36,657` to `20,125`. Treat cached/fresh splits as cache-sensitive, but raw/output/tool counts point in the same direction.
- Avg output drops 39.9%: `5,865` to `3,523`.
- Avg MCP calls drop from `2.7` to `1.0`.
- Avg quality is equal on this suite: `1.000` vs `1.000`.

The CodeGraph deep dive suggests not exposing CodeGraph directly for natural mode. Its `codegraph_context` / `codegraph_slice` facade is useful, but a raw natural prompt still needs broker-selected focus files and symbols. The practical merge is provider-level, not prompt-level: ContextGate should own provider choice and call CodeGraph internally only when the anchor ledger cannot prove a named symbol, caller, DTO, or test.

The right architecture is:

1. User prompt and project/agent instructions remain authoritative.
2. ContextGate receives the natural task plus evidence slots, not a fixed tool script.
3. ContextGate owns provider choice and budget: TokenOpt index first, anchor-ledger inline source slices for natural prompts, and optional CodeGraph exact slices behind the broker only when a named file/symbol slot needs deeper proof.
4. The agent sees a coverage contract, exact source slices, and a short final identifier checklist, not low-level provider surfaces.

## Decision

Promote `contextgate-natural` v28 as the best natural prompt/setup mode for this suite. Keep `tokenopt-codegraph-adaptive` exact-slice as the quality oracle and fallback benchmark target, but do not expose CodeGraph directly in natural mode. The next optimization is variance control: run repeated v28 natural trials across more prompt families and add a deterministic final-output validator only if future runs show required identifiers still being dropped from otherwise-answerable broker packets.
