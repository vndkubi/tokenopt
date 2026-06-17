---
applyTo: "**/*.{java,xml,yml,yaml,properties,gradle}"
---

# TokenOpt Runtime And Java Tasks

- Exact trace-bug tasks with a named file, class, function, line, failing test, stack frame, or repro path should use native narrow search/read directly.
- Compress Java stack traces and Maven/Gradle logs before carrying them forward.
- Preserve Caused by chains, user-code frames, first framework boundary, failing tests, and final build stats.
- In MCP full mode, use `tokenopt_jakarta_annotation_filter` for Lombok-heavy entities and `tokenopt_assemble_spring_context` for actuator/beans JSON.
- Allow one exact follow-up when runtime evidence is incomplete; avoid broad repo search after an answerable packet.
