# CryptoSharia API Integration Rules

These rules codify CryptoSharia team conventions for integrating a SvelteKit frontend with the
CryptoSharia API.

This module is additive to `rules/bff-pattern.md`.

## Contracts And Naming

- OpenAPI spec is the source of truth for request/response shapes.
- Public base URL env var: `PUBLIC_CS_API_URL` (import from `$env/static/public`).
- Private API key env var: `CS_API_KEY` (import from `$env/static/private`).
- API key header name MUST be `Api-Key`.

## OpenAPI Locations

- Preview:
  - Docs: `https://preview.api.cryptosharia.id`
  - Spec: `https://preview.api.cryptosharia.id/openapi.json`
- Production:
  - Docs: `https://api.cryptosharia.id`
  - Spec: `https://api.cryptosharia.id/openapi.json`

Local dev: if you run an API locally, the spec is typically available at `<local-api-url>/openapi.json`.

## Type Generation (Contract-First)

- MUST generate TypeScript types from the OpenAPI spec using `openapi-typescript`.
- SHOULD generate to `src/lib/api/cs-api-types.ts`.
- MUST NOT handwrite per-endpoint request/response types when the OpenAPI spec is available.

Recommended commands:

```sh
npm run gen:api-types:preview
npm run gen:api-types:prod
```

## Client Conventions

- SHOULD use `openapi-fetch` for type-safe calls.
- SHOULD centralize client creation in a small factory:
  - Public client: `src/lib/api/cs-api.ts` (`createCsApiClient(fetch?)`)
  - Server-only client: `src/lib/api/cs-api.server.ts` (`createServerCsApiClient(fetch?)`)
- MUST use `PUBLIC_CS_API_URL` as the `baseUrl`.
- MUST ONLY attach `Api-Key: CS_API_KEY` in server-only contexts.
- SHOULD prefer SvelteKit-provided `fetch` in server contexts (SSR-friendly, forwards cookies/credentials,
  and calls internal routes efficiently).

## Placement Rules (Client vs Server)

- Browser-visible surfaces MUST NOT call protected CryptoSharia endpoints directly:
  - Components (`src/**/*.svelte`)
  - Universal load functions (`src/routes/**/+page.ts`, `src/routes/**/+layout.ts`)
- If an endpoint requires `CS_API_KEY`, it MUST be called only from server-only surfaces:
  - BFF API routes (`src/routes/**/+server.ts`)
  - Server load functions (`src/routes/**/+page.server.ts`, `src/routes/**/+layout.server.ts`)
  - Form actions (`export const actions` in `src/routes/**/+page.server.ts`)
  - Remote functions (`src/lib/**/*.remote.ts`)
- If the UI needs protected data, create a BFF boundary (route/load/remote) that:
  - enforces auth/authorization (if applicable)
  - returns a stable, frontend-shaped payload
  - maps errors to UI-safe errors

## Error Handling Expectations

- BFF layers MUST map upstream failures to UI-safe errors (status code + minimal payload).
- MUST NOT forward upstream error bodies verbatim if they may include sensitive details.

If using `openapi-fetch`, prefer its `{ data, error, response }` result model for HTTP failures
instead of try/catch for status codes.

## Minimal Examples

### Server load calling a protected endpoint (server-only)

```ts
// src/routes/account/+page.server.ts
import { createServerCsApiClient } from '$lib/api/cs-api.server';

export const load = async ({ fetch, setHeaders }) => {
	setHeaders({ 'cache-control': 'no-store' });

	const client = createServerCsApiClient(fetch);
	const { data, error } = await client.GET('/profile');

	if (error || !data) return { profile: null };
	// TODO: normalize upstream -> stable UI shape
	return { profile: data };
};
```

### BFF API route proxying a protected endpoint

```ts
// src/routes/api/profile/+server.ts
import { json } from '@sveltejs/kit';
import { createServerCsApiClient } from '$lib/api/cs-api.server';

export const GET = async ({ fetch }) => {
	const client = createServerCsApiClient(fetch);
	const { data, error, response } = await client.GET('/profile');

	if (error || !data) {
		return json({ message: 'Failed to load profile' }, { status: response?.status ?? 500 });
	}

	// TODO: normalize upstream -> stable UI shape
	return json(data, {
		headers: {
			'cache-control': 'no-store'
		}
	});
};
```

### Form actions calling a protected endpoint (server-only)

```ts
// src/routes/settings/+page.server.ts
import { fail } from '@sveltejs/kit';
import { createServerCsApiClient } from '$lib/api/cs-api.server';

export const actions = {
	updateProfile: async ({ request, fetch }) => {
		const data = await request.formData();
		const displayName = String(data.get('displayName') ?? '');

		if (!displayName) return fail(400, { message: 'displayName is required' });

		const client = createServerCsApiClient(fetch);
		const { error, response } = await client.PATCH('/profile', {
			body: { displayName }
		});

		if (error) return fail(response?.status ?? 500, { message: 'Failed to update profile' });
		return { success: true };
	}
};
```

### Client-side code calling the BFF (internal route)

```svelte
<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	async function refreshProfile() {
		// OK from the browser because it calls the internal BFF endpoint.
		// Use `fetch` here - `openapi-fetch` is for calling the upstream CryptoSharia API base URL.
		const res = await fetch('/api/profile');
		if (!res.ok) return;
		console.log(await res.json());
	}
</script>

<button type="button" onclick={refreshProfile}>Refresh</button>
```

### Client-side code calling a public upstream endpoint (allowed)

```svelte
<!-- src/routes/openapi/+page.svelte -->
<script lang="ts">
	import { createCsApiClient } from '$lib/api/cs-api';

	async function loadSpec() {
		// Public endpoint only (no Api-Key)
		const client = createCsApiClient(fetch);
		const { data } = await client.GET('/openapi.json');
		if (data) console.log(data);
	}
</script>

<button type="button" onclick={loadSpec}>Load OpenAPI Spec</button>
```

### Universal load calling a public upstream endpoint (allowed)

```ts
// src/routes/openapi/+page.ts
import { createCsApiClient } from '$lib/api/cs-api';

export const load = async ({ fetch }) => {
	// Universal load runs on server + client.
	// Only call public endpoints here (no Api-Key).
	const client = createCsApiClient(fetch);
	const { data } = await client.GET('/openapi.json');
	return { spec: data };
};
```
