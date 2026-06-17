---
name: write-unittest-class
description: "Plan or write class-level unit tests for a concrete class/module behavior."
argument-hint: "<class/module/file and behavior>"
agent: agent
---

Plan or write focused class-level unit tests for the provided target and behavior. Return JSON unless the user asks for code edits.

Natural evidence routing:
- Require a concrete class, module, file, method, behavior, failing case, or acceptance criterion.
- If the target is missing, ask for target/behavior and do not search the repo to guess it.
- Use exact source/test evidence for the named class; use broker/graph evidence only for missing owner/test/style discovery.
- Include existing test style, fixtures/mocks, assertions, edge cases, and targeted validation command.
- Cover user/business behavior and acceptance criteria, not only public method names.
- Keep followups exact and bounded to the weakest missing source/test slot.

JSON keys: status, target_class, behavior, existing_coverage, missing_coverage, test_location, test_cases, fixtures_or_mocks, assertions, targeted_command, risks.
