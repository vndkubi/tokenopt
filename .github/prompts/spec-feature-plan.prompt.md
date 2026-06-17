---
name: spec-feature-plan
description: "Specify or plan a feature from repo/domain evidence with acceptance criteria."
argument-hint: "<feature idea, spec text, or acceptance criteria>"
agent: agent
---

Specify or plan the provided feature from repo/domain evidence and produce acceptance criteria. Return JSON.

Natural evidence routing:
- If feature/spec text is missing, ask for it instead of exploring.
- Keep Spec Kit prompts basic. The user does not need to name TokenOpt, CodeGraph, ContextGate, or MCP tools.
- During specify/plan/tasks/implement, decide whether compact repo evidence is useful from the evidence slots: domain context, owner files, impacted symbols, existing tests, validation commands, risks, and unknowns.
- Use a broker for broad/unknown-owner spec work; use exact source/graph evidence when the prompt names a file, symbol, endpoint, field, or diff.
- Reuse evidence across phases instead of re-reading the same files; refill only the weakest missing slot.
- Keep implementation, tests, validation, acceptance criteria, and unknowns explicit.

JSON keys: status, feature_summary, tokenopt_detection, phases, domain_evidence, acceptance_criteria, implementation_outline, tests, validation, unknowns, evidence_used.
