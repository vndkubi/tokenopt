# TokenOpt Architecture & Flow

![Architecture diagram](architecture.svg)

## Overview

TokenOpt is an MCP server that sits between the AI agent and the repository. Its job is to answer the question _"what evidence does the agent need?"_ before the agent starts exploring, so the agent can answer from a single bounded packet instead of running open-ended greps.

## Layers

```
User natural prompt
        │
        ▼
Agent (Codex / Copilot)
  guided by SERVER_INSTRUCTIONS / AGENTS.md / copilot-instructions.md
        │
        ├── Broad / unknown-owner task?
        │       │
        │       ▼
        │   contextgate_get_context (TokenOpt MCP)
        │       1. scan repo inventory (git ls-files, manifest)
        │       2. classify task type (investigate / implement / review_diff / …)
        │       3. compile evidence packet
        │       4. append inline savings line
        │       5. write daily stats → ~/.tokenopt/stats/YYYY-MM-DD.jsonl
        │
        │   evidence_gaps with tool_categories: ["code_graph"]?
        │       │
        │       ▼
        │   codegraph_context (CodeGraph MCP) — fills the gap
        │
        │   → Agent answers from combined packet
        │
        └── Exact file / symbol already known?
                │
                ▼
            Direct read / search — no MCP needed
```

## Evidence Packet Fields

| Field | Purpose |
| --- | --- |
| `answerable` | true = agent MUST answer now, no re-exploration |
| `confidence` | routing certainty |
| `coverage` | fraction of evidence slots filled |
| `evidence[]` | structured facts (owner, files, symbols, tests, risks) |
| `answer_contract` | what the agent must include in the answer |
| `missing[]` | unfilled slots with `tool_categories` hints |
| `allowed_followups[]` | the only tool calls permitted after this packet |
| `recommended_next_action` | prose guidance for next step |

## Session Stats

Every `contextgate_get_context` call:
- Increments `SESSION_STATS.calls` / `evidenceTokensEst` / `inventoryTokensAvoided`
- Appends an inline savings line to the response text:
  ```
  ---
  TokenOpt: ~8 400 tokens saved this call vs raw exploration | session: 3 call(s), ~24 000 total tokens saved
  ```
- Persists a JSONL record to `~/.tokenopt/stats/YYYY-MM-DD.jsonl`

Run `tokenopt report` for a 30-day dashboard.

## Joint Workflow with CodeGraph

| Task type | Call order |
| --- | --- |
| Broad investigation / PBI | `contextgate_get_context` → if gap `[code_graph]` → `codegraph_context` |
| Implement / write tests | `contextgate_get_context` → `codegraph_context` change/test pack |
| Code review round 1 | `contextgate_get_context` (task_type=review_diff) + `get_change_pack` |
| Code review round 2 | No MCPs — direct diff review only |
| Code review round 3 | `codegraph_context` only |
| Exact file / symbol known | Direct read — skip MCPs |

TokenOpt is always the primary router. CodeGraph is a secondary evidence provider that fills `code_graph` slots TokenOpt cannot fill from inventory alone.

## Benchmark Results (2026-06-25)

6 tasks × 2 repos × 2 modes. Key figures:

| Mode | Avg quality | Avg tokens | Tool calls |
| --- | :---: | ---: | :---: |
| baseline | 0.905 | 6 313 | 3 – 6 |
| compiled-packet | **0.990** | **2 196** | **1** |

Token reduction: **-64.8 %** average (range -47 % to -80 %).  
See [`benchmark-results/daily-2026-06-25.md`](../benchmark-results/daily-2026-06-25.md) for the full table.
