# Examples: CryptoSharia API Integration

These examples are intentionally minimal and focus on placement (client vs server) and safe patterns.

## Server load calling a protected endpoint (server-only)

```ts
// src/routes/account/+page.server.ts
import { createServerCsApiClient } from '$lib/api/cs-api.server';

export const load = async ({ fetch, setHeaders }) => {
	setHeaders({ 'cache-control': 'no-store' });

	const client = createServerCsApiClient(fetch);
	const { data, error } = await client.GET('/profile');

	if (error || !data) return { profile: null };
	return { profile: data };
};
```

## BFF API route proxying a protected endpoint

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

	return json(data, {
		headers: {
			'cache-control': 'no-store'
		}
	});
};
```

## Form actions calling a protected endpoint (server-only)

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

## Client-side calling the BFF (internal route)

```svelte
<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	async function refreshProfile() {
		// Call the internal BFF route from the browser.
		const res = await fetch('/api/profile');
		if (!res.ok) return;
		console.log(await res.json());
	}
</script>

<button type="button" onclick={refreshProfile}>Refresh</button>
```

## Universal load calling a public upstream endpoint (allowed)

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

## Remote function calling a protected endpoint (server-only)

Note: remote functions are experimental in SvelteKit. Enable `kit.experimental.remoteFunctions: true` in
`svelte.config.js`.

```ts
// src/lib/posts.remote.ts
import { getRequestEvent, query } from '$app/server';
import { createServerCsApiClient } from '$lib/api/cs-api.server';

export const getPosts = query(async () => {
	const { fetch } = getRequestEvent();
	const client = createServerCsApiClient(fetch);

	const { data, error } = await client.GET('/posts');
	if (error || !data) return [];
	return data;
});
```
