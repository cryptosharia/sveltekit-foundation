# Plan: CryptoSharia API Rules Module

## Objective

Add a CryptoSharia-specific AI rule module that standardizes how projects using this foundation
integrate with the CryptoSharia API: contract-first OpenAPI type generation, a consistent API client
pattern, and strict server-only handling for API keys.

This module is additive to `rules/bff-pattern.md` (general boundary + security rules).

## Scope

- Add `rules/cryptosharia-api.md` containing:
  - Contract-first workflow: OpenAPI spec is source of truth; generate TS types
  - Standard typegen commands for local and preview OpenAPI specs
  - Standard `openapi-fetch` client factory pattern
  - Standard env var names:
    - `PUBLIC_CS_API_URL` (public base URL)
    - `CS_API_KEY` (private API key)
  - Placement rules for protected endpoints (server-only; use BFF/proxy)
  - Guidance to prefer SvelteKit-provided `fetch` in server contexts
  - Minimal examples mirroring the above rules (no secrets in client/universal code)

## Out of Scope

- Implementing `src/lib/api.ts` or adding dependencies
- Adding `package.json` scripts or generating `src/lib/api/cs-api-types.ts`
- Committing secrets or `.env` files
- Changing `rules/bff-pattern.md` unless a conflict is discovered

## Architecture Decisions

- Keep `rules/bff-pattern.md` as the general baseline.
- Add a dedicated upstream module `rules/cryptosharia-api.md` that pins CryptoSharia conventions
  (URLs, env names, header name) so the agent can act consistently across projects.

## File Change Map

- `rules/cryptosharia-api.md` - new rule module
- `planning/cryptosharia-api-rules/plan.md` - planning artifact
- `planning/cryptosharia-api-rules/spec.md` - exact behavior contract
- `planning/cryptosharia-api-rules/tasks.md` - implementation checklist
- `planning/cryptosharia-api-rules/execution.md` - executor constraints

## Risks and Mitigations

- Risk: rules accidentally suggest putting `CS_API_KEY` in client/universal code
  Mitigation: explicit MUST/NEVER constraints + placement examples
- Risk: drift between upstream docs and the rule
  Mitigation: treat OpenAPI spec as source of truth and keep examples minimal

## Acceptance Criteria

- `rules/cryptosharia-api.md` exists and is clearly CryptoSharia-specific
- Rules enforce:
  - OpenAPI typegen is the source of truth
  - `CS_API_KEY` is server-only (`$env/static/private`)
  - Browser/universal code never uses API key
  - Protected endpoints are accessed via server-only BFF surfaces
- No app code changes are required in this iteration

## Verification

- `npm run lint`
- `npm run check`
