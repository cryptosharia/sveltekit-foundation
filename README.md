# SvelteKit Foundation

Internal SvelteKit foundation repo for the CryptoSharia (PT Kripto Syariah Indonesia) dev team.
Use this as the starting point for new SvelteKit projects, with shared tooling and conventions
preconfigured.

Quickstart: `npm install` then `npm run dev`.

## Start a new project

Preferred:

- Use this repository as a template (GitHub: "Use this template" -> new repo with fresh git history)

Alternative (clone):

```sh
git clone <repo-url> cryptosharia-app
cd cryptosharia-app

# detach from the foundation repo history
rm -rf .git
git init

npm install
npm run dev
```

## Project rules

This repo consumes the shared CryptoSharia AI foundation via OpenCode remote config.

- Config lives in `.opencode/remote-config.json`
- The foundation is synced and loaded on OpenCode startup (cached by `@jgordijn/opencode-remote-config`)
- Local items (if any) override remote items with the same name

To verify it works, see `docs/verify-opencode-remote-config.md`.

## Use OpenCode

When working on changes in this repo, prefer using OpenCode so it can:

- load the shared CryptoSharia AI foundation (rules, skills, etc)
- follow the planning workflow under `planning/`

From the repo root, run:

```sh
opencode
```

## Environment Variables

This repo expects a local `.env` file. Start from the example and review it before running the app:

```sh
cp .env.example .env
```

> Note: variables prefixed with `PUBLIC_` are supposed to be exposed to the client - do not put secrets there.

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.
