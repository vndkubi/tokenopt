---
name: investigate-pbi
description: "Investigate a concrete PBI before planning or editing."
argument-hint: "<PBI text, ticket URL, or acceptance criteria>"
agent: agent
---

Investigate the provided PBI before planning edits. Return compact JSON.

TokenOpt/CodeGraph routing:
- If no PBI, requirement body, ticket URL, or acceptance criteria is provided, ask for the artifact and do not inspect the repo.
- Use TokenOpt to extract business slots: user value, acceptance criteria, compatibility constraints, unknowns, risks, and validation.
- Use CodeGraph to ground impacted files, symbols, tests, and current behavior when an index is available.
- In TokenOpt-only mode, stop after one packet plus exact allowed followups.
- In CodeGraph-only mode, use a research/change pack and mark business assumptions that are not in the PBI.

JSON keys: status, pbi_summary, business_flow, acceptance_criteria, current_behavior, impacted_files, symbols, tests, unknowns, risks, next_steps.
