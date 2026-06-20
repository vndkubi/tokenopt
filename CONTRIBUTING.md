# Contributing

TokenOpt is a context-budget middleware for coding agents. Contributions should
keep the core path small, auditable, and useful before adding new surfaces.

## Local Setup

```powershell
npm.cmd install
npm.cmd run build
npm.cmd test
node dist\cli.js doctor
```

On non-Windows shells, the same commands work with `npm` instead of `npm.cmd`.

## Before Opening A PR

Run:

```powershell
npm.cmd test
```

For changes that affect setup, MCP routing, hooks, or benchmark behavior, also
run the narrowest relevant command and include the result in the PR:

```powershell
node dist\cli.js doctor
node dist\cli.js doctor copilot
node dist\cli.js instructions audit
```

## Change Guidelines

- Keep TokenOpt as a cost gate, not an always-first router.
- Preserve the lite MCP mode as the default low-overhead surface.
- Do not add broad repository scans when an exact target, diff, file, symbol, or
  failure artifact is already available.
- Keep CodeGraph optional. TokenOpt core must keep working without a CodeGraph
  checkout or daemon.
- Keep Java/Spring-specific helpers isolated from the language-agnostic broker,
  search, read, policy, and compression paths.
- Avoid new runtime dependencies unless they remove more complexity than they
  add.
- Do not commit generated output, build artifacts, raw benchmark logs, secrets,
  or target repository contents.

## Benchmarks

Benchmark results are useful only when they separate cost from quality. When
adding or updating benchmark evidence, report:

- Raw total tokens.
- Fresh total tokens when cached input is available.
- Timeout or missing usage status instead of treating missing usage as zero.
- Quality checks and validation command results.
- Whether shell fallback happened after an answerable packet.

`benchmark-results/` is ignored by default. Only force-add curated benchmark
summaries that are meant to be part of the public evidence set.

## Documentation

Documentation should state whether a command is local-only, npm-published,
cloud-compatible, or dependent on another local checkout. Do not imply that
`@tokenopt/cli` is available from npm until a published release exists.

Use the product name `TokenOpt` for the CLI/package. Use `ContextGate` for the
broker or gate concept exposed through tools such as `contextgate_get_context`.

## Conduct

Keep discussion specific, respectful, and evidence-based. Prefer small,
reviewable changes with clear verification over broad rewrites.
