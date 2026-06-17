---
name: pbi-plan
description: "Create a compatibility-preserving implementation plan from a concrete PBI or requirement."
argument-hint: "<paste PBI/requirement text, ticket URL, or acceptance criteria>"
agent: agent
---

Create an implementation plan for the provided PBI/requirement while preserving compatibility. Return JSON.

Natural evidence routing:
- If no concrete PBI, requirement body, issue URL, or acceptance criteria is provided, do not explore the repo. Ask for the missing artifact in JSON.
- If the PBI has Given/When/Then, How, Why, acceptance criteria, or direct attachment text, treat that as the business artifact and map it to repo evidence.
- Use a context broker when the owner is unknown; use exact source/graph evidence when the prompt names a file, symbol, endpoint, field, or diff.
- Plan business behavior coverage and validation before edits: acceptance paths, negative paths, compatibility, and regression tests.
- Keep followups exact and bounded to the weakest missing slot.

JSON keys: status, requirement_summary, given_when_then, how, why, impacted_areas, implementation_plan, tests, compatibility_risks, missing_items, next_steps.
