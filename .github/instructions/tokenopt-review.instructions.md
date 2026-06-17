---
applyTo: "**/*.{java,ts,tsx,js,jsx,py,go,rs,kt,scala,cs}"
---

# TokenOpt Review Tasks

For PR/diff/code-review prompts, use the net diff as the code artifact and review in two phases: technical findings first, then business/test coverage gaps.

- The user may only say "review this PR" or use a normal daily review prompt. Do not require the user to name TokenOpt, CodeGraph, or MCP.
- If TokenOpt tools are visible and the prompt includes a concrete diff, PR, branch pair, changed files, file path, symbol, or exact review target, call `tokenopt_compile_evidence` with `task_type=review_diff` when it can replace broad source exploration.
- If CodeGraph tools are visible, use `codegraph_context` for review/source graph context and `codegraph_slice` only for exact changed hunks, callers/callees, similar logic, or tests that remain missing.
- If a review broker is available and can replace broad source exploration, use it as the slot checklist for changed files, changed symbols, business mapping, existing tests, missing tests, and compatibility risks.
- If the diff already names exact files/symbols and the needed slots are narrow, use exact source/test reads or graph evidence directly instead of forcing a broker call.
- If the prompt references a PR, use the net PR diff and PR merge/head worktree for follow-up context. Do not treat per-commit patch output as the final review state.
- If the prompt references a branch pair, treat target/base branch and feature/head branch as review scope and review the net merge-base diff.
- If the prompt includes Jira tickets, Confluence pages/URLs, or direct attachment summaries, use available connectors or the supplied attachment text as requirement evidence before business/test coverage review. Do not ask the user to paste full content when a connector can read it. If unavailable, state that requirement evidence is missing or assumption-based.
- If the prompt has no diff, PR, changed files, file path, symbol, or exact target, ask for the review artifact and do not explore the repo.
- For explicit security audit/review, require concrete scope and use exact security followups only. For normal code review, domain words such as security, auth, privilege, or permission do not by themselves switch to security_audit.
- If the user provides a review checklist, preserve every item and return item-by-item coverage with pass, fail, gap, or not_applicable plus evidence.
- In MCP full mode, use `tokenopt_prepare_java_diff` for Java diffs and `tokenopt_business_contract` for API/schema/security/messaging/test contracts.
- Technical findings must be introduced, actionable defects with file, line, severity, evidence, and suggestion.
- If TokenOpt evidence includes recall_probe facts, adjudicate each checked probe as a technical finding, coverage gap, or explicit non-issue with contrary evidence. Promote P1/P2 technical_finding_candidate=true probes unless contrary evidence disproves them.
- Before returning no findings, check changed invariants, effective config/policy math, parser/encoding boundaries, backward compatibility, concurrency/async behavior, resource lifecycle, null/error paths, and call replacements.
- Business/test coverage gaps must be separate from findings and should apply ISTQB dimensions: boundary values, equivalence partitions, negative/error cases, state transitions, concurrency/async, and compatibility/backward compatibility.
- Do not downgrade a proven regression into a test gap.
- Do not spend tokens on import reorder, whitespace, or Lombok-only changes unless they affect compile/runtime behavior.
