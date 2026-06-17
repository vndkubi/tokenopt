<!-- tokenopt:instruction-graph:start -->
# TokenOpt ContextGate

Use TokenOpt as a selective context governor, not as MCP-first for every prompt.

Users may use normal Copilot prompts. Do not require them to say TokenOpt, CodeGraph, ContextGate, or MCP.
When TokenOpt tools are visible, map the prompt to evidence slots yourself: broad/unknown-owner tasks may use `contextgate_get_context`; concrete review diffs may use `tokenopt_compile_evidence` with `task_type=review_diff`; exact file/symbol/endpoint/failing-test tasks should start with narrow source or graph evidence.
When CodeGraph tools are visible, use `codegraph_context` for compact graph/source context and `codegraph_slice` only for exact missing slices. Do not duplicate a slot through both broker and graph if the first packet already covers it.

- Broad repo, business/domain, build handoff, flow, review diff, runtime debug, and refactor-scope tasks may use TokenOpt evidence first.
- Missing-artifact PBI, requirement, unit-test, review-memory, or review prompts should ask for the concrete artifact instead of exploring.
- Security audit requires concrete diff/scope and exact security followups only.
- Exact bug traces with file/class/function/line/failing test/repro evidence should use native narrow search/read first; use `tokenopt_failure_packet` only for long failure output.
- Exact file/class/method tasks and small-repo direct edits should use normal narrow search/read unless the user asks for TokenOpt.
- Copilot prompt files under `.github/prompts` provide native slash prompts for common TokenOpt tasks.
- If a packet says answerable=true, answer from it and avoid broad fallback.
- For code changes, prefer unified diffs or compact edit plans instead of full-file rewrites.
<!-- tokenopt:instruction-graph:end -->

<!-- tokenopt:mcp-instructions:start -->
# ContextGate MCP Usage

When the TokenOpt MCP server is available, treat ContextGate as an evidence broker, not a mandatory extra step before normal tools.

Daily prompt bridge for Copilot and other agents:

```text
- The user prompt should stay natural. Do not require phrases such as "use TokenOpt", "use CodeGraph", or "call MCP".
- Keep existing user, slash-prompt, custom-agent, and repo instructions authoritative. This block only chooses the evidence acquisition route.
- Broad/unknown-owner research, PBI investigation, planning, implementation handoff, and unit-test planning: call contextgate_get_context when it can replace broad exploration.
- Concrete code review with diff/PR/branch/changed files: use tokenopt_compile_evidence with task_type=review_diff when a review packet can cover changed files, symbols, similar logic, tests, and requirement evidence cheaper than broad reads.
- If CodeGraph MCP is also configured, use codegraph_context for compact graph/source evidence and codegraph_slice only for exact missing slices. Do not call both TokenOpt and CodeGraph for the same slot when the first packet is sufficient.
- Exact file/symbol/endpoint/failing-test/line-level tasks: start with narrow source or graph evidence, not a broad broker.
- Missing artifact: ask for the missing PBI, requirement, diff, review target, class/module/behavior, failure output, or reproduction steps before repo exploration.
```

Consider ContextGate/TokenOpt only when it can replace broad exploration or provide a missing evidence-slot checklist:

```text
- Build/daily/onboarding handoff
- Repo overview or project facts
- Business/product/domain summary from docs/inventory
- PBI/requirement investigation and planning when ownership is unknown
- Implementation planning before editing
- Unit-test planning before writing tests
- Code review business/test coverage when a concrete diff/PR/review target exists
```

If `.github/prompts` is installed, users may call native Copilot prompt files such as `/investigate-flow`, `/flow-trace`, `/e2e-trace-flow`, `/trace-bug`, `/bug-trace`, `/write-unittest`, `/write-unittest-class`, `/investigate-pbi`, `/implement-feature`, `/pbi-plan`, `/requirement-analysis`, `/security-audit`, `/review-code`, `/performance-analysis`, `/dependency-analysis`, `/refactor-code`, `/spec-feature-plan`, or `/promote-review-memory`. Treat those prompt files as normal user intent plus the routing rules in this instruction file.

Quality-first routing guardrails:

```text
- Missing artifact: if PBI/requirement/unit-test/review-memory/review prompts lack the concrete artifact, ask for it and do not inspect the repo.
- Security audit: require concrete diff/scope and security coverage before findings; use exact followups only.
- Coding coverage: for implement/write_unittest/fix/debug, require concrete target symbol/file/behavior/failure; cap write_unittest followups to one.
- Review: diff-first and scope-first; use Jira/Confluence/attachment evidence for business coverage when available, but never as a replacement for the code artifact.
```

Do not use TokenOpt first when it would create MCP+shell double-spend:

```text
- Exact existing-flow tracing that needs line-level code proof
- Specific class/method/PBI deep dive where shell/search reads are still required
- Review tasks without a concrete diff or patch for TokenOpt to inspect
```

For those exact-code tasks, either use normal narrow shell/search/read directly, or run a strict MCP-only session where shell is disabled. Do not call TokenOpt first and then repeat the same acquisition with shell.

Broker call shape when the broker is the cheapest route:

```text
When the task needs broad repo evidence, call contextgate_get_context with:
- task: the user's task
- task_type: one of build_handoff, investigate, research_business, implement, write_unittest, api_flow, field_impact, review_diff, startup_flow, unknown
- required_slots: evidence slots the answer must cover, such as source_files, symbols, tests, risks, backend_entrypoint, frontend_state
- cwd: the current repository root
- budget_tokens: 1200-2000
- quality_rubric: 3-6 concrete checks the final answer must satisfy
```

After the evidence packet:

```text
If answerable=true and recommended_next_action=answer_now:
- Answer from the packet.
- Cite evidence IDs, files, facts, and missing=[] from the packet.
- Do not call shell, grep, search, read_file, project_facts, run_command, or more MCP tools just to verify the same evidence.

If missing is non-empty:
- Use only allowed_followups from the packet.
- Keep followups exact and bounded.
- Do not run repo-wide rg --files, broad grep/search, full-file reads, or full-suite tests unless the packet explicitly allows it.
```

Tool policy:

```text
Prefer contextgate_get_context over broad raw shell exploration only when it replaces that exploration.
Use tokenopt_search only for exact patterns and narrow paths.
Use tokenopt_read_file only for bounded slices around exact matches.
Default lite mode exposes contextgate_get_context plus legacy compile_evidence, search, and read_file to reduce MCP schema/context overhead.
Use tokenopt_run_command for builds/tests only when that tool is visible/full mode is explicitly enabled.
Do not bypass TokenOpt with shell fallback after an answerable packet.
Do not do MCP-first plus shell fallback for exact code-flow/class/PBI tasks; that is expected to increase input tokens.
```

Daily task mapping:

```text
Build or onboarding handoff -> task_type=build_handoff
Debugging, triage, why something fails -> task_type=investigate
Business/product/domain research or deep dive -> task_type=research_business
Implementation planning or small code change -> task_type=implement
Unit-test planning or test-writing task -> task_type=write_unittest
Existing business/API/user flow, flowchart, sequence diagram, or Mermaid request -> task_type=api_flow
Field/schema impact -> task_type=field_impact
Diff or PR review -> task_type=review_diff
Startup/bootstrap flow -> task_type=startup_flow
```

Final answer requirements:

```text
Use concise headings.
Include what is known, evidence used, missing items if any, and exact next steps.
Mention when TokenOpt marked the task answerable.
Avoid saying more exploration is needed when missing=[] and answerable=true.
```
<!-- tokenopt:mcp-instructions:end -->
