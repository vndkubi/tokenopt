---
name: review-code
description: "Review concrete code diffs with bounded technical findings and business/test coverage gaps."
argument-hint: "<diff, PR, changed files, or exact review target>"
agent: agent
---

Review the provided code diff/scope in two phases: technical review first, then business/edge-case/test-design coverage review. Return compact JSON.

TokenOpt routing:
- Diff-first and scope-first.
- When TokenOpt MCP is available and the input has a concrete diff, PR, branch pair, changed files, file path, symbol, or exact review target, first call `tokenopt_compile_evidence` with `task_type=review_diff`, `cwd`, `budget_tokens` around 2200, and the full user request plus the complete net unified diff in `task`.
- If the input is a PR number or URL, review the net PR diff and use the PR merge/head worktree as cwd before follow-up reads/searches.
- If the input is a branch pair, treat the target branch as base and the feature/source branch as head; get the net diff from merge-base/base...head, then call `tokenopt_compile_evidence` before writing the review.
- If the user provides Jira tickets or Confluence pages/URLs, use the available Jira/Confluence MCP tools to read the ticket/page and relevant attachments before the business/test coverage phase. Do not ask the user to paste the full ticket/page content when a connector can read it. Treat them as requirement evidence, not as a replacement for the code review artifact.
- If Jira/Confluence MCP tools are unavailable or the ticket/page cannot be read, state this in `notes` and mark requirement-backed business coverage as missing or assumption-based.
- If no diff, PR, changed files, file path, symbol, or exact target is provided, do not explore the repo. Ask for the review artifact.
- When concrete diff/scope exists, use review_diff evidence and exact bounded followups only; do not review per-commit patch series as final state.
- If TokenOpt MCP is unavailable, state that and proceed with native net-diff review.
- Treat domain words like security, auth, privilege, or permission as code-review context unless the user explicitly asks for a security audit/review.
- If the user provides a review checklist, preserve it as required review rubric and answer every checklist item.

Technical review phase:
- Report only introduced, actionable correctness, security, performance, reliability, compatibility, or maintainability defects.
- If TokenOpt evidence includes recall_probe facts, adjudicate each checked probe as a technical finding, coverage gap, or explicit non-issue with contrary evidence. Promote P1/P2 technical_finding_candidate=true probes unless contrary evidence disproves them.
- Before saying no findings, check changed invariants, effective config/policy math, parser/encoding boundaries, backward compatibility, concurrency/async behavior, resource lifecycle, null/error paths, and call replacements.
- Do not downgrade a proven regression into a test gap.

Business/test coverage phase:
- Report non-blocking gaps separately from technical findings.
- Ground requirement coverage in Jira/Confluence evidence, including ticket/page attachments when relevant, when the user provided those artifacts; otherwise mark requirement assumptions explicitly.
- Apply ISTQB-style dimensions where relevant: boundary values, equivalence partitions, negative/error cases, state transitions, concurrency/async, and compatibility/backward compatibility.
- Prefer exact tests tied to the changed behavior over broad test requests.
- Avoid style nits unless they affect behavior.

User checklist phase:
- Return item-by-item checklist coverage as pass, fail, gap, or not_applicable with evidence or a short reason.
- A checklist item becomes a technical finding only when the diff introduces an actionable defect; otherwise keep it in coverage/commentary.
- Checklist scope does not suppress higher-severity defects found outside the checklist.

JSON keys: technical_review, business_review, istqb_checks, user_checklist, review_status, evidence_contract_pass, acquisition_mode, notes.
