# Spec: CryptoSharia API Rules Module

## Goal

Codify CryptoSharia API integration conventions for projects using this foundation, while preserving
the general BFF rules.

## Non-Goals

- Implementing actual integration code in `src/`
- Adding dependencies or `package.json` scripts
- Defining authentication/session behavior

## Contracts

### Inputs

- Developer intent: integrate UI with CryptoSharia API (public + protected endpoints)

### Outputs

- `rules/cryptosharia-api.md` containing normative MUST/NEVER/SHOULD rules and minimal examples

### Validation Rules

- Must not include any secrets or imply storing secrets in the repo
- Must not instruct using `CS_API_KEY` in `.svelte`, `+page.ts`, `+layout.ts`, or other client/universal
  contexts
- Must align with `rules/bff-pattern.md`

## Behavior Rules

### Contract-first

- MUST treat the OpenAPI spec as the source of truth.
- MUST generate TypeScript types from the OpenAPI spec (no handwritten endpoint request/response
  types).
- SHOULD generate to `src/lib/api/cs-api-types.ts`.

### OpenAPI spec locations

- Preview docs/spec:
  - docs: `https://preview.api.cryptosharia.id`
  - spec: `https://preview.api.cryptosharia.id/openapi.json`
- Local docs/spec:
  - docs: `http://localhost:5173`
  - spec: `http://localhost:5173/openapi.json`

### Client conventions

- SHOULD use `openapi-fetch`.
- SHOULD expose a `createCsApiClient(fetch?)` factory.
- SHOULD expose a `createServerCsApiClient(fetch?)` factory for server-only calls.
- MUST use `PUBLIC_CS_API_URL` as base URL for client creation.
- If an API key is needed, header name MUST be `Api-Key`.

### Secret handling

- `CS_API_KEY` MUST be read only from `$env/static/private` and only in server-only modules.
- Browser/universal code MUST NOT call protected endpoints directly; it MUST call a BFF/proxy route or
  server-only load/action/remote function.

### Fetch usage

- SHOULD use SvelteKit-provided `fetch` in server-side contexts (SSR-friendly, forwards
  cookies/credentials, internal routing).

## Edge Cases

- If an endpoint is public but requires `Api-Key`, treat it as protected and call it server-side.
- If the UI needs aggregation/normalization, implement it server-side in the BFF boundary.

## Acceptance Criteria

- `rules/cryptosharia-api.md` satisfies all validation + behavior rules above
