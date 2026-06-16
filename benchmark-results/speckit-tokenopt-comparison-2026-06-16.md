# Spec Kit vs TokenOpt Benchmark Comparison

Generated: 2026-06-16

Spec Kit source checked: <https://github.com/github/spec-kit>. The project positions Spec Kit as a spec-driven development toolkit with phases such as specify, plan, tasks, and implement. In this comparison it is treated as a workflow layer, not as a replacement for TokenOpt or CodeGraph evidence acquisition.

## Evidence Used

| Result file | Feature | Usage status | Notes |
| --- | --- | --- | --- |
| `benchmark-results/workflow-ab-hadoop-find-depth-flags-lite-20260612-234106.json` | Hadoop find depth flags | completed | Best current token evidence because all workflows completed usage accounting and tests passed. |
| `benchmark-results/workflow-ab-usage-total-helper-baseline.json` | TokenOpt usage total helper | legacy usage fields present | Small implementation helper; all workflows passed tests and quality. |
| `benchmark-results/workflow-ab-usage-total-helper-4-rescored.json` | TokenOpt usage total helper | legacy usage fields present | Rescored helper run; all compared workflows passed tests and quality. |
| `benchmark-results/workflow-ab-doughnut-recall-forecast.json` | Doughnut recall forecast | token usage unavailable | Useful for quality/tool-call signal only; rows timed out and usage was not completed. |

## Completed Usage Run

Source: `workflow-ab-hadoop-find-depth-flags-lite-20260612-234106.json`.

| Workflow | Quality | Tests | Input tokens | Raw total | Fresh total | Tool calls | MCP | Shell |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| baseline | 0.727 | pass | 560,136 | 575,812 | 74,564 | 24 | 0 | 24 |
| tokenopt | 0.818 | pass | 1,092,929 | 1,107,152 | 112,976 | 28 | 6 | 22 |
| speckit | 0.833 | pass | 1,730,216 | 1,757,756 | 140,604 | 38 | 0 | 38 |
| speckit-tokenopt | 0.923 | pass | 1,594,694 | 1,623,155 | 204,659 | 36 | 3 | 33 |

Token deltas from this run:

- `speckit` did not reduce token burn versus `tokenopt`: it used 58.8% more raw total tokens and 24.5% more fresh total tokens.
- `speckit-tokenopt` reduced raw total tokens by 7.7% versus `speckit`, but fresh total tokens were 45.6% higher because less of the input was cached.
- `speckit-tokenopt` had the best quality score, 0.923, versus `speckit` 0.833 and `tokenopt` 0.818.
- Spec Kit improved structure/quality but cost more tool calls and shell calls in this implementation benchmark.

## Smaller Helper Runs

| Result file | Workflow | Quality | Tests | Raw total | Fresh total | Tool | MCP | Shell |
| --- | --- | ---: | --- | ---: | ---: | ---: | ---: | ---: |
| `workflow-ab-usage-total-helper-baseline.json` | tokenopt | 1.000 | pass | 152,848 | 42,128 | 5 | 1 | 4 |
| `workflow-ab-usage-total-helper-baseline.json` | speckit | 1.000 | pass | 296,183 | 65,527 | 9 | 0 | 9 |
| `workflow-ab-usage-total-helper-baseline.json` | speckit-tokenopt | 1.000 | pass | 303,561 | 75,849 | 9 | 1 | 8 |
| `workflow-ab-usage-total-helper-4-rescored.json` | tokenopt | 1.000 | pass | 201,015 | 50,103 | 6 | 3 | 3 |
| `workflow-ab-usage-total-helper-4-rescored.json` | speckit | 1.000 | pass | 334,484 | 62,100 | 9 | 0 | 9 |
| `workflow-ab-usage-total-helper-4-rescored.json` | speckit-tokenopt | 1.000 | pass | 371,930 | 56,538 | 8 | 1 | 7 |

Helper-run deltas:

- In `workflow-ab-usage-total-helper-baseline`, `speckit` used 93.8% more raw tokens and 55.5% more fresh tokens than `tokenopt` with the same quality.
- In `workflow-ab-usage-total-helper-4-rescored`, `speckit` used 66.4% more raw tokens and 23.9% more fresh tokens than `tokenopt` with the same quality.
- `speckit-tokenopt` sometimes improves fresh-token cost versus `speckit` (`helper-4`: 9.0% lower fresh total), but not consistently (`helper-baseline`: 15.8% higher fresh total).

## Doughnut Forecast Run

Source: `workflow-ab-doughnut-recall-forecast.json`.

This run timed out, so token usage was unavailable. Quality/tool-call signal still matters:

| Workflow | Quality | Tests | Tool calls | MCP | Shell |
| --- | ---: | --- | ---: | ---: | ---: |
| baseline | 0.455 | fail | 91 | 0 | 91 |
| tokenopt | 0.455 | fail | 66 | 6 | 60 |
| speckit | 0.750 | fail | 82 | 0 | 82 |
| speckit-tokenopt | 0.769 | fail | 65 | 1 | 64 |

Interpretation:

- Spec Kit improved quality versus direct baseline/tokenopt, but tests still failed.
- TokenOpt reduced tool calls compared with baseline and Spec Kit.
- Because usage was not completed, this run cannot prove token savings or token regressions.

## Answer To The Question

Does using Spec Kit reduce token burn?

Current evidence says no, not reliably. In the completed usage run, Spec Kit used more raw and fresh tokens than TokenOpt. In smaller helper runs, Spec Kit also used more tokens for the same quality. The only clear raw-token improvement was `speckit-tokenopt` versus plain `speckit` in the Hadoop run, but fresh-token cost still increased there.

Does Spec Kit improve quality?

Often yes for implementation workflows that benefit from explicit spec/plan/tasks. In the Hadoop completed run, `speckit-tokenopt` had the best quality score. In the Doughnut timed-out run, Spec Kit workflows produced higher quality than baseline/tokenopt even though tests failed.

Recommended use:

- Use Spec Kit for high-ambiguity feature implementation where a spec/plan/tasks phase can improve requirement coverage.
- Do not use Spec Kit as a token-saving mechanism by default.
- Combine Spec Kit with TokenOpt/CodeGraph only when the spec phase needs broad repo discovery; otherwise the extra structure can add tokens and tool calls.
- For daily investigate, trace, review, security, performance, and unit-test planning prompts, benchmark `tokenopt-only`, `codegraph-only`, and `tokenopt-codegraph` separately from Spec Kit because they solve different cost drivers.
