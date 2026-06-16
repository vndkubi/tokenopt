---
name: bug-trace
description: "Trace a concrete bug from failure evidence to likely owner code and validation."
argument-hint: "<failing test, stack trace, repro, endpoint, file, class, function, or behavior>"
agent: agent
---

Trace the provided bug from concrete evidence to likely root cause and fix handoff. Return compact JSON.

TokenOpt/CodeGraph routing:
- Start from the failure artifact: failing test, stack frame, error output, repro steps, endpoint, file, class, function, or exact behavior.
- For long logs, use TokenOpt failure compression before any source reads.
- For indexed repos, use CodeGraph flow/change evidence to map the failure to owner symbols and tests.
- Avoid broad repo exploration; use exact followups only for missing owner/test evidence.
- If no concrete bug artifact exists, ask for repro, expected vs actual, failing test, stack trace, or target symbol.

JSON keys: status, acquisition_path, bug_summary, reproduction_path, evidence_chain, root_cause_hypotheses, affected_files, symbols, fix_plan, tests_to_run, risks.
