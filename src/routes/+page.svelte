<main
	class="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-50 to-white text-slate-900"
>
	<div
		class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(14,165,233,0.14),transparent_70%),radial-gradient(700px_500px_at_80%_20%,rgba(34,197,94,0.12),transparent_65%),radial-gradient(700px_500px_at_50%_90%,rgba(99,102,241,0.10),transparent_60%)]"
	></div>

	<div class="mx-auto max-w-5xl fl-py-10/16 fl-px-4/10">
		<header class="max-w-3xl">
			<p class="text-sm font-medium tracking-wide text-slate-600">CryptoSharia</p>
			<h1 class="fl-leading-tight/none mt-3 fl-text-4xl/6xl font-semibold tracking-tight">
				SvelteKit Foundation
			</h1>
			<p class="mt-4 fl-text-lg/xl leading-relaxed text-balance text-slate-700">
				Starter repo for the team. Shared tooling, conventions, and a predictable workflow.
			</p>
		</header>

		<section class="mt-10 grid gap-6 md:grid-cols-2">
			<div class="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur">
				<h2 class="text-base font-semibold tracking-tight">Start A New Project</h2>
				<p class="mt-2 text-sm leading-relaxed text-slate-700">
					<b>Preferred:</b> use this repo as a GitHub template (fresh git history).<br />
					<b>Alternative:</b> clone and re-init git.
				</p>
				<pre class="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-slate-100"><code
						>git clone &lt;repo-url&gt; my-app
cd my-app
rm -rf .git
git init</code
					></pre>
			</div>

			<div class="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur">
				<h2 class="text-base font-semibold tracking-tight">Use OpenCode</h2>
				<p class="mt-2 text-sm leading-relaxed text-slate-700">
					OpenCode loads team rules from <code class="font-mono text-[0.95em] font-bold"
						>.agents/rules/</code
					>
					(see
					<code class="font-mono text-[0.95em]">opencode.json</code>) and follows the planning
					workflow.
				</p>
				<pre class="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-slate-100"><code
						>opencode</code
					></pre>
			</div>
		</section>

		<section
			class="mt-6 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur"
		>
			<h2 class="text-base font-semibold tracking-tight">Common Commands</h2>
			<div class="mt-4 grid gap-3 md:grid-cols-2">
				<div class="rounded-xl border border-slate-200 bg-white px-4 py-3">
					<p class="text-xs font-medium tracking-wide text-slate-500 uppercase">Dev</p>
					<pre
						class="mt-1 overflow-x-auto rounded-lg bg-slate-950 px-3 py-2 text-xs text-slate-100"><code
							>npm run dev</code
						></pre>
				</div>
				<div class="rounded-xl border border-slate-200 bg-white px-4 py-3">
					<p class="text-xs font-medium tracking-wide text-slate-500 uppercase">Check</p>
					<pre
						class="mt-1 overflow-x-auto rounded-lg bg-slate-950 px-3 py-2 text-xs text-slate-100"><code
							>npm run check</code
						></pre>
				</div>
				<div class="rounded-xl border border-slate-200 bg-white px-4 py-3">
					<p class="text-xs font-medium tracking-wide text-slate-500 uppercase">Lint</p>
					<pre
						class="mt-1 overflow-x-auto rounded-lg bg-slate-950 px-3 py-2 text-xs text-slate-100"><code
							>npm run lint</code
						></pre>
				</div>
				<div class="rounded-xl border border-slate-200 bg-white px-4 py-3">
					<p class="text-xs font-medium tracking-wide text-slate-500 uppercase">Format</p>
					<pre
						class="mt-1 overflow-x-auto rounded-lg bg-slate-950 px-3 py-2 text-xs text-slate-100"><code
							>npm run format</code
						></pre>
				</div>
			</div>
		</section>

		<section class="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
			<div class="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur">
				<p class="text-xs font-medium tracking-wide text-slate-500 uppercase">Rules</p>
				<p class="mt-1 font-mono text-sm font-bold">.agents/rules/</p>
				<p class="mt-2 leading-relaxed">
					BFF boundary, planning workflow, repo conventions, etc live here.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur">
				<p class="text-xs font-medium tracking-wide text-slate-500 uppercase">Planning</p>
				<p class="mt-1 font-mono text-sm font-bold">planning/</p>
				<p class="mt-2 leading-relaxed">Plans/specs/tasks/execution for big changes.</p>
			</div>
		</section>

		<footer class="mt-10 text-xs text-slate-600">
			<p>Tip: keep secrets server-only and follow the BFF rules when integrating upstream APIs.</p>
		</footer>
	</div>
</main>
