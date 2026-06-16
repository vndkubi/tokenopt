---
name: investigate-flow
description: "Investigate an unknown or partially-known product/code flow with bounded evidence."
argument-hint: "<flow, symptom, endpoint, class, behavior, or business area>"
agent: agent
---

Investigate the provided flow or behavior and produce an evidence-backed handoff. Return compact JSON.

TokenOpt/CodeGraph routing:
- If CodeGraph MCP is available and indexed, use CodeGraph as the source-of-truth for files, symbols, tests, and flow edges.
- If TokenOpt MCP is available, use it as the slot checklist for summary, invariants, risks, tests, and missing coverage.
- TokenOpt-only mode: call TokenOpt once, then only exact allowed followups for missing named slots.
- CodeGraph-only mode: use one flow/research/change pack first; do not fall back to broad shell reads.
- TokenOpt+CodeGraph mode: TokenOpt defines required slots, CodeGraph fills source evidence; stop when slots are complete.
- If neither MCP can name exact evidence, use one exact anchor search and one bounded slice read, then mark gaps.

JSON keys: status, acquisition_path, summary, flow, invariants, files, symbols, tests_to_run, risks, missing_coverage.
