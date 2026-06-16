---
name: e2e-trace-flow
description: "Trace an end-to-end user/API flow with ordered evidence and tests."
argument-hint: "<endpoint, UI action, job, message, class, or behavior>"
agent: agent
---

Trace the provided end-to-end flow from entrypoint through domain/storage/dependencies to tests. Return compact JSON unless the user asks for Mermaid.

TokenOpt/CodeGraph routing:
- Prefer CodeGraph flow evidence when the target names an endpoint, UI action, job, message, class, or behavior.
- Use TokenOpt only as a completeness checklist for business invariants, tests, risks, and unresolved edges.
- Do not run repo-wide exploration. Use exact followups only for one missing edge at a time.
- Mark inferred edges explicitly; do not present candidate files as confirmed flow proof.

JSON keys: status, acquisition_path, entrypoint, sequence, invariants, files, symbols, tests_to_run, inferred_edges, risks.
