---
name: investigate-pbi
description: "Investigate a concrete PBI before planning or editing."
argument-hint: "<PBI text, ticket URL, or acceptance criteria>"
agent: agent
---

Investigate the provided PBI before planning edits. Return compact JSON.

Natural evidence routing:
- If no PBI, requirement body, ticket URL, or acceptance criteria is provided, ask for the artifact and do not inspect the repo.
- Treat pasted Given/When/Then, How, Why, acceptance criteria, Jira text, Confluence text, or direct attachment summaries as valid requirement evidence.
- Extract business slots first: user value, Given/When/Then, How, Why, acceptance criteria, compatibility constraints, unknowns, risks, and validation.
- Use compact broker or graph/source evidence only for missing repo slots: impacted files, symbols, existing tests, current behavior, and validation commands.
- If a file, symbol, endpoint, field, or diff is named, go exact first instead of broad context.
- Stop when the requested evidence slots are covered; do not duplicate the same evidence through another provider.

JSON keys: status, pbi_summary, given_when_then, how, why, current_behavior, impacted_files, symbols, tests, unknowns, risks, next_steps.
