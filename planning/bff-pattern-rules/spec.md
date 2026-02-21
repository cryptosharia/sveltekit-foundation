# Spec: General BFF Rule Module

## Goal

Codify a safe, maintainable BFF pattern so future changes consistently keep secrets server-side, expose a stable UI-oriented contract, and handle errors/caching deliberately.

## Non-Goals

- Mandating a single transport (REST vs RPC vs GraphQL)
- Implementing endpoints or clients
- Defining a full auth model

## Contracts

### Input

- Developer intent: UI needs data/actions that may require auth/secrets/aggregation

### Output

- A single AI rules module at `rules/bff-pattern.md` with normative requirements (MUST/NEVER/SHOULD) and minimal examples.

### Validation Rules

- Must not mention any specific vendor/service.
- Must not instruct placing secrets in client code or universal modules.
- Must include SvelteKit server-only placement guidance.

## Behavior Rules (content requirements)

- Decision rubric:
  - Direct-from-UI allowed only for public, non-sensitive, non-keyed endpoints.
  - BFF required for secrets, auth, sensitive data, aggregation, normalization, rate-limit shielding, or consistent error/caching needs.
- Secret handling:
  - NEVER in browser code or universal `+page.ts`/components.
  - MUST use `$env/static/private` only in server-only contexts.
- Placement (SvelteKit):
  - Privileged calls MUST happen in `+server.ts`, `+page.server.ts`, `actions`, or `.remote.ts`.
  - SHOULD prefer SvelteKit-provided `fetch` in server contexts.
- Contract shaping:
  - BFF MUST return frontend-shaped, stable payloads.
  - SHOULD normalize/validate upstream responses; do not leak raw upstream structure by default.
- Error handling:
  - MUST map upstream failures to consistent status codes and a UI-safe error payload.
  - MUST NOT forward sensitive upstream error details to clients.
- Caching:
  - Sensitive/authenticated responses MUST be `cache-control: no-store`.
  - Non-sensitive responses MUST have explicit caching rules (no implicit defaults).

## Edge Cases

- "Public but keyed" == privileged: treat as BFF-only.
- Multi-upstream aggregation belongs in BFF, not in UI.

## Acceptance Criteria

- Module meets validation + behavior rules above.
