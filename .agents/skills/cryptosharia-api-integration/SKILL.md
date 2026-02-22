---
name: cryptosharia-api-integration
description: Standard way to integrate SvelteKit frontend with the CryptoSharia API (typegen + client + BFF-safe placement)
---

# CryptoSharia API Integration

## When to use

Use this skill when you need to call the CryptoSharia API from a SvelteKit app.

## Assumptions

- Secrets stay server-only (follow the BFF pattern rules).

## Prerequisites

- Env vars:
  - `PUBLIC_CS_API_URL`
  - `CS_API_KEY` (server-only)

## Workflow

1. Generate contract-first types (source of truth)

```sh
npm run gen:api-types:preview
npm run gen:api-types:prod
```

Expected output file: `src/lib/api/cs-api-types.ts`

2. Use the shared client factories

- Public upstream calls (no API key): `createCsApiClient(fetch?)` from `src/lib/api/cs-api.ts`
- Protected upstream calls (server-only): `createServerCsApiClient(fetch?)` from `src/lib/api/cs-api.server.ts`

3. Choose the right SvelteKit surface

- `.svelte`, `+page.ts`, `+layout.ts`: public endpoints only; never attach `Api-Key`
- `+server.ts`, `+page.server.ts`, `+layout.server.ts`, form actions, `.remote.ts`: protected endpoints allowed

## Error handling

- Map upstream failures to UI-safe errors; do not forward sensitive upstream error bodies.

## Examples

See: 	[Examples](./references/examples.md)
