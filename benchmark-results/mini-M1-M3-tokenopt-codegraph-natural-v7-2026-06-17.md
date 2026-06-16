# Context Governor Suite Benchmark

Generated: 2026-06-16T22:50:01.103Z
Suite: mini-tokenopt-natural-comparison 2026-06-16
Runner: codex exec --json (@openai/codex@0.137.0)
Modes: tokenopt-codegraph-natural
CodeGraph prewarm: no

## Summary

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M3-router-safety | tokenopt-codegraph-natural | direct_narrow | trace_proof | no | yes | no | 0.500 | 0.500 | 5 | yes | 114031 | 88192 |  | 8150 |  |  | 6945 | 129126 | 40934 |  | 0.122 | 2 | 2 | 0 | 32269 | 59385 |

## Aggregate

| Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt-codegraph-natural | 1 | 0/1 | 0/1 | 114031 | 114031 | 8150 | 129126 | 40934 | 0.500 | 0.500 | 0.122 | 5.00 | 2.0 | 0.0 |

## Prompt Family Aggregate

| Family | Mode | Runs | Correct | Idea ok | Median input tok | Avg input tok | Avg output tok | Avg raw tok | Avg fresh tok | Avg quality | Avg idea | Avg Q/10k fresh | Avg critical miss | Avg MCP | Avg shell | Avg duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| investigate | tokenopt-codegraph-natural | 1 | 0/1 | 0/1 | 114031 | 114031 | 8150 | 129126 | 40934 | 0.500 | 0.500 | 0.122 | 5.00 | 2.0 | 0.0 | 59385 |

## Task Details

### tokenopt / M3-router-safety

Class: investigate

Prompt:
```
Return valid compact JSON only with keys modes, token_guardrails, fallback_policy, unknowns. Use only information visible in code path references to describe router safety and fallback behavior.
```

Expected evidence:
```json
{
  "files": [
    "src/router.ts",
    "src/suite-benchmark.ts",
    "src/workflow-ab-benchmark.ts"
  ],
  "symbols": [
    "routeTask",
    "parseWorkflow"
  ],
  "terms": [
    "router",
    "fallback",
    "fallback_after_answerable",
    "tool policy"
  ]
}
```

Quality rubric:
- names routing inputs and outputs
- describes fallback policy
- mentions unknowns explicitly
- contains valid compact JSON

Mode metrics:

| Repo | Task | Mode | Acq | Contract | Contract ok | Double | Correct | Quality | Idea | Critical | JSON | Input tok | Cached tok | Input delta | Output tok | Output delta | Reason delta | Reason tok | Raw tok | Fresh tok | Quality delta | Q/10k fresh | Tool | MCP | Shell | Tool out chars | Duration ms |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tokenopt | M3-router-safety | tokenopt-codegraph-natural | direct_narrow | trace_proof | no | yes | no | 0.500 | 0.500 | 5 | yes | 114031 | 88192 |  | 8150 |  |  | 6945 | 129126 | 40934 |  | 0.122 | 2 | 2 | 0 | 32269 | 59385 |

#### Output: tokenopt-codegraph-natural

Raw log: D:\Personal\Projects\tokenopt\benchmark-results\raw\mini-M1-M3-tokenopt-codegraph-natural-v7-2026-06-17\tokenopt-M3-router-safety-tokenopt-codegraph-natural.jsonl

Codex prompt used:
```
Task (do not rephrase):
Return valid compact JSON only with keys modes, token_guardrails, fallback_policy, unknowns. Use only information visible in code path references to describe router safety and fallback behavior.

Benchmark constraints:
- Preserve the requested output format exactly.
- Cite repository-relative files when the task asks for citations.
- Do not modify files.
- Keep user-provided task wording as the primary requirement; apply any installed AGENTS/agent instructions first.
- Repository root: D:\Personal\Projects\tokenopt

- Route policy: exact-target. Start from the named file, symbol, route, or failing case; avoid broad context gathers.
- Treat this as a normal developer request. The user's prompt, repository instructions, and any active agent instructions remain authoritative.
- Evidence intent for context acquisition only: "Use information visible in code path references to describe router safety and fallback behavior.". Use this semantic code question for context lookup inputs; keep the original user prompt for the final output shape.
- Do not pass output-schema boilerplate, JSON key names, benchmark harness text, or generic words like return/valid/compact as retrieval intent.
- Required evidence slots before final answer: source_files, symbols, risks, entrypoint_or_owner, flow, validation_commands.
- Quality rubric to keep in mind: ["names routing inputs and outputs","describes fallback policy","mentions unknowns explicitly","contains valid compact JSON"].
- For broad or unknown-owner tasks, a compact context packet around 1200 tokens is usually the cheapest first step when available.
- Because the task is broad, use one compact discovery step before exact source or graph followups.
- Choose the next action by the missing evidence slot, not by a fixed tool script.
- Hard budget: use at most 3 context/source tool calls total. For exact-target or small CLI/code-reading tasks, aim for 1-2 total calls.
- Do not call a source-slice style tool with only a file path and no line range, symbol, or bounded slice hint; failed or unbounded calls still count against the budget.
- If the first evidence pass covers the required slots well enough, answer from it and stop.
- If one important slot is still weak, make one focused bounded followup for that named file, symbol, route, test, business rule, or attachment.
- If quality still depends on graph/source structure, make at most one final structured source followup and then stop.
- Avoid iterative low-level expansion; do not walk command surfaces, file trees, or symbol neighbors beyond the slots required by the prompt.
- Do not spend a separate call only to find a project overview or README when source, package, or context evidence already supports a concise summary.
- Do not duplicate evidence through another provider when the current slices already cover the same files or symbols.
- Shell fallback is disabled in this benchmark mode; unresolved coverage must be stated in the requested JSON shape.
- Use flat strings and short arrays unless the user explicitly requested nested objects.
- Keep the final output compact, syntactically valid JSON, and preserve the requested output contract exactly.
- Preserve requested output format exactly.
```

Final output:
```json
{
  "modes": [
    "mode=regex-fallback-construction: source_files=[src/suite-benchmark.ts:1040-1047], symbols=[buildCodeGraphFallbackRegex(anchorQuery:string):string], entrypoint_or_owner=tokenOptCodeGraphPlanLines -> buildCodeGraphFallbackRegex (code-graph call edge), flow=\"anchorQuery input -> buildCodeGraphFallbackRegex -> terms preprocessing -> terms.slice(0,32).join(' ')\", risks=[evidence confidence partial for call/caller linkage].",
    "mode=json-result-fallback-compression: source_files=[src/compressors/json-result-compressor.ts:39-54], symbols=[fallback(text:string, limitChars:number):CompressionResult], entrypoint_or_owner=compressJsonResult -> fallback (code-graph call edge, low-confidence), flow=\"text,limitChars input -> cap([... text.slice(0, limitChars) ...],limitChars) -> CompressionResult output\", validation_commands=[npm test]."
  ],
  "token_guardrails": [
    "buildCodeGraphFallbackRegex returns a capped matcher string (terms.slice(0,32)), limiting route-search payload width for that path [src/suite-benchmark.ts:1044-1047].",
    "fallback() imposes hard truncation of response text with cap(..., limitChars) over text.slice(0, limitChars), which bounds token surface on output materialization [src/compressors/json-result-compressor.ts:39-54].",
    "fallback() returns a bounded output contract object (kind/originalChars/compressedChars/estimatedTokensSaved), making consumer expectations explicit for downstream routing safety [src/compressors/json-result-compressor.ts:47-53].",
    "MAX_FALLBACK_DEPTH=30 and MAX_FALLBACK_FILES=5000 are defined in src/repo-fingerprint.ts but routing usage is not shown in this evidence packet."
  ],
  "fallback_policy": [
    "Observed fallback policy for JSON compression: on fallback activation, replace output with a compact preamble plus a capped text slice and recompute compression metadata, returning CompressionResult [src/compressors/json-result-compressor.ts:39-54].",
    "Observed fallback-regex policy: reduce candidate set before serialization by restricting to first 32 terms in terms.slice(0,32) and joining them [src/suite-benchmark.ts:1044-1047].",
    "Router-path fallback behavior cannot be fully resolved from verified code text; stripRouterOutputContractText is only a ranked symbol hit with no implementation slice exposed [src/router.ts:283-285].",
    "validation_commands=evidence packet proposes npm test as the validation starting point."
  ],
  "unknowns": [
    "Router safety inputs/outputs are not fully provable: endpoint list is empty and we only have a symbol hint for stripRouterOutputContractText(), not its body [src/router.ts:283-285].",
    "Exact route owner boundaries for MAX_FALLBACK_DEPTH/MAX_FALLBACK_FILES are unknown (constants only), so scope/enforcement context is incomplete [src/repo-fingerprint.ts:7-8].",
    "Some flow edges are low-confidence/name-only (e.g., compressJsonResult -> fallback, tokenOptCodeGraphPlanLines -> buildCodeGraphFallbackRegex), so exact end-to-end routing chain remains partially inferred."
  ]
}
```

Idea checks: 4/8 (0.500)

Critical misses: file:src/workflow-ab-benchmark.ts, symbol:routeTask, symbol:parseWorkflow, term:fallback_after_answerable, term:tool policy
