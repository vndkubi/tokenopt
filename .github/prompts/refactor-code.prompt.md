---
name: refactor-code
description: "Plan a behavior-preserving refactor with exact usages, tests, and validation."
argument-hint: "<symbol, module, API, migration, resource, or behavior>"
agent: agent
---

Plan the provided refactor with behavior invariants first. Return compact JSON unless the user explicitly asks for edits.

TokenOpt/CodeGraph routing:
- If the target symbol/file/API is exact, use CodeGraph references or native narrow reads for definitions, usages, tests, and contracts.
- Use TokenOpt as the checklist for behavior invariants, compatibility risks, and validation coverage.
- In CodeGraph-only mode, start with get_change_pack or references; do not broaden to repo overview.
- In TokenOpt+CodeGraph mode, combine TokenOpt risk slots with CodeGraph exact impact evidence.
- Do not propose behavior changes unless they are explicitly required.

JSON keys: status, refactor_goal, current_flow, definitions, usages, files, symbols, safe_steps, tests, validation_commands, risks.
