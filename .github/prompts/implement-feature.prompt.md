---
name: implement-feature
description: "Implement or plan a concrete feature with targeted validation."
argument-hint: "<feature/PBI/spec text and optional target module>"
agent: agent
---

Implement or plan the provided feature using the smallest safe change. Return JSON if planning; edit files only if explicitly asked.

Natural evidence routing:
- If the owning file/module/symbol is known, start with narrow source/test evidence and targeted validation.
- If ownership is unknown or the PBI/spec is broad, use a compact context broker or CodeGraph change evidence to identify owner files, symbols, existing tests, business rules, and validation commands before editing.
- Require business behavior coverage, not only method coverage: acceptance criteria, user value, compatibility constraints, negative cases, and regression tests.
- Do not treat implementation evidence as complete without owner source, relevant symbols, test neighbor/style, and a build/test command.

JSON keys: status, scope, target_files, implementation_steps, business_coverage, tests, validation, risks, missing_items.
