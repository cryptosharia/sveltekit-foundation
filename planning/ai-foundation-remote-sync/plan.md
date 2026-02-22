# Plan: AI Foundation Remote Sync

## Objective

Centralize CryptoSharia AI rules/skills so all repos can consume updates without manually copying `.agents/**`.

## Scope

- Create a shared "AI foundation" Git repository containing:
  - instructions/rules modules
  - skills
  - (optional) agents
- Use OpenCode `@jgordijn/opencode-remote-config` to sync that foundation into developers' OpenCode config.
- Add a per-project `.opencode/remote-config.json` so each repo can selectively import items.
- Keep the current in-repo `.agents/**` approach working during a transition period.

## Out of Scope

- Publishing shared ESLint/Prettier/TypeScript config as npm packages.
- Any application/runtime feature changes.

## Architecture Decisions

- **Git as distribution**: foundation lives in Git and is synced via the remote-config plugin.
- **Track `main`**: projects follow the foundation repo's `main` branch and update automatically on OpenCode startup.
- **Import everything**: projects import `instructions`, `skills`, `agents`, `commands`, and `plugins` (`"*"`).
- **Per-project config**: prefer `.opencode/remote-config.json` per repo so repos can add/override safely.

## File Change Map

In `sveltekit-foundation` (this repo):

- `planning/ai-foundation-remote-sync/plan.md` - scope/decisions/verification
- `planning/ai-foundation-remote-sync/spec.md` - exact structure + rules
- `planning/ai-foundation-remote-sync/tasks.md` - checklist
- `planning/ai-foundation-remote-sync/execution.md` - constraints/gates

After approval, optional template changes:

- `.opencode/remote-config.json` - points new repos to the shared foundation (tracks `main`)

In the new `ai-foundation-sveltekit` repo:

- `manifest.json` - declares importable instruction modules
- `instructions/**` - rules modules (ported from `.agents/rules/**`)
- `skill/**/SKILL.md` - skills (ported from `.agents/skills/**`)
- `agent/**` (optional)

## Risks and Mitigations

- Risk: Silent behavior drift if tracking `main`.
  Mitigation: Treat foundation changes as production-impacting: protected branch, required reviews, and a clear change log.

- Risk: Executing untrusted code via remote plugins.
  Mitigation: Treat foundation changes as production-impacting; protect `main`; keep remote plugins self-contained and reviewed.

- Risk: Symlink issues in devcontainers/Windows.
  Mitigation: Recommend `installMethod: "copy"` for those environments.

- Risk: Conflicts between local and remote rules/skills.
  Mitigation: Local takes precedence; document overrides and naming.

## Acceptance Criteria

- A shared foundation repo exists with stable structure for instructions + skills.
- A project can add `.opencode/remote-config.json` and access synced skills/instructions.
- A project can override a foundation item locally (same name) without breaking sync.
- If the foundation repo provides `agent/`, `command/`, or `plugin/`, the project imports them (current template config uses `"*"`).

## Verification

- OpenCode startup logs show synced foundation repo(s) (manual check).
- If this repo changes beyond planning docs: `npm run check` and `npm run lint`.
