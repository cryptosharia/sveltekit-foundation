import { PUBLIC_CS_API_URL } from '$env/static/public';
import createClient from 'openapi-fetch';

import type { paths } from './cs-api-types';

type Fetch = typeof globalThis.fetch;

export const createCsApiClient = (fetch?: Fetch) => {
	return createClient<paths>({
		baseUrl: PUBLIC_CS_API_URL,
		fetch
	});
};
