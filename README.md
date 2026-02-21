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

Rules and conventions live under `rules/`.
They are also loaded by OpenCode (see `opencode.json`) so the coding agent follows the same
conventions when planning and implementing changes.

## Use OpenCode

When working on changes in this repo, prefer using OpenCode so it can:

- apply the project rules in `rules/`
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
