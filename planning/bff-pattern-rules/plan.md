# Plan: General BFF Rule Module

## Objective

Add a general-purpose AI rule module under `rules/` that standardizes the Backend-for-Frontend (BFF) pattern for this repo: secrets stay server-side, the UI talks to a thin BFF contract, and errors/caching/auth are handled consistently.

## Scope

- Add a new rule module `rules/bff-pattern.md` defining:
  - when BFF is required vs when direct-from-UI calls are acceptable
  - server-only secret handling rules
  - contract and normalization rules at the BFF boundary
  - SvelteKit placement guidance for BFF code (server load/actions/+server)
  - error/status mapping rules (safe-to-render payloads, no sensitive passthrough)
  - caching guidance (no-store for sensitive, explicit caching otherwise)
  - minimal examples using generic names (no vendor-specific references)

## Out of Scope

- Implementing any actual BFF endpoints or upstream clients
- Adding or changing auth/session design
- Adding `.env` files or committing secrets
- Changing existing rule modules unless a direct conflict is discovered

## Architecture Decisions

- Rule lives in `rules/bff-pattern.md` and is automatically loaded via `opencode.json` (`rules/**/*.md`).
- Keep it principle-driven (BFF applies to any upstream: REST/GraphQL/RPC), but include SvelteKit-specific "where code goes" guidance because this repo is SvelteKit.

## File Change Map

- `rules/bff-pattern.md` - new rule module
- `planning/bff-pattern-rules/plan.md` - planning artifact
- `planning/bff-pattern-rules/spec.md` - behavior contract
- `planning/bff-pattern-rules/tasks.md` - implementation checklist
- `planning/bff-pattern-rules/execution.md` - executor constraints

## Risks and Mitigations

- Risk: Too abstract to be actionable
  Mitigation: Use MUST/NEVER/SHOULD + concrete SvelteKit placement examples.
- Risk: Encourages proxying everything
  Mitigation: Include a decision rubric and explicitly allow direct public calls when safe.
- Risk: Accidental secret leakage guidance
  Mitigation: Explicit "NEVER in browser/universal" language + "server-only modules list".

## Acceptance Criteria

- `rules/bff-pattern.md` exists and is general (not service-specific).
- Rules clearly enforce:
  - secrets only in server-only modules
  - privileged upstream calls only on server
  - BFF response is frontend-shaped and stable (no blind passthrough)
  - consistent error/status mapping and cache headers guidance
- No app code changes required for this plan.

## Verification

- `npm run lint`
- `npm run check`
