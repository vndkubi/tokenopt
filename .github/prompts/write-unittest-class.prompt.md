---
name: write-unittest-class
description: "Plan or write class-level unit tests for a concrete class/module behavior."
argument-hint: "<class/module/file and behavior>"
agent: agent
---

Plan or write focused class-level unit tests for the provided target and behavior. Return JSON unless the user asks for code edits.

TokenOpt/CodeGraph routing:
- Require a concrete class, module, file, method, behavior, failing case, or acceptance criterion.
- If the target is missing, ask for target/behavior and do not search the repo to guess it.
- CodeGraph-only mode: use get_change_pack with changeType=test or find_tests_for/search_symbol for the named class and existing tests.
- TokenOpt-only mode: use write_unittest/coding coverage once, then one exact followup at most.
- TokenOpt+CodeGraph mode: use TokenOpt for coverage slots and CodeGraph for source/test anchors.

JSON keys: status, target_class, behavior, existing_coverage, missing_coverage, test_location, test_cases, fixtures_or_mocks, assertions, targeted_command, risks.
