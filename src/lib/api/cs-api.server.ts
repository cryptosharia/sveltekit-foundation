import { PUBLIC_CS_API_URL } from '$env/static/public';
import { CS_API_KEY } from '$env/static/private';
import createClient from 'openapi-fetch';

import type { paths } from './cs-api-types';

type Fetch = typeof globalThis.fetch;

export const createServerCsApiClient = (fetch?: Fetch) => {
	return createClient<paths>({
		baseUrl: PUBLIC_CS_API_URL,
		fetch,
		headers: {
			'Api-Key': CS_API_KEY
		}
	});
};
