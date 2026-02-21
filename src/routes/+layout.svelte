<script lang="ts">
	import './layout.css';
	import { PUBLIC_APP_URL } from '$env/static/public';
	import { APP_DESCRIPTION, APP_KEYWORDS, APP_TITLE } from '$lib/constants';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<title>{APP_TITLE}</title>
	<meta name="description" content={APP_DESCRIPTION} />
	<meta name="keywords" content={APP_KEYWORDS.join(', ')} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_APP_URL}/" />
	<meta property="og:title" content={APP_TITLE} />
	<meta property="og:description" content={APP_DESCRIPTION} />
	<meta property="og:image" content="{PUBLIC_APP_URL}/og-image.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{PUBLIC_APP_URL}/" />
	<meta property="twitter:title" content={APP_TITLE} />
	<meta property="twitter:description" content={APP_DESCRIPTION} />
	<meta property="twitter:image" content="{PUBLIC_APP_URL}/og-image.png" />
</svelte:head>

{@render children()}
