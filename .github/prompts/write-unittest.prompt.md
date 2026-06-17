---
name: write-unittest
description: "Plan or write focused unit tests for a concrete class/module/behavior."
argument-hint: "<target class/module/file and behavior>"
agent: agent
---

Plan or write focused unit tests for the provided target and behavior. Return JSON unless the user asks for code edits.

Natural evidence routing:
- Require a concrete target class, module, file, behavior, or failing case.
- If the target is missing, do not search the repo to guess it. Ask for the target/behavior.
- If the target exists, gather exact owner source, existing tests, fixtures/mocks, style, and validation command before proposing tests.
- Use a broker or graph evidence only when it replaces broad owner/test discovery; otherwise use narrow source/test reads.
- Cover business behavior and acceptance criteria, including boundary, negative/error, state transition, compatibility, and regression cases; do not stop at method coverage.
- Use at most one exact followup for a missing owner/test/fixture slot after the first evidence pass.

JSON keys: status, target, behavior, test_location, test_cases, fixtures_or_mocks, assertions, targeted_command, missing_items.
