# Tasks: AI Foundation Remote Sync

- [x] Decide rollout mode: track `main`.
- [x] Create scaffold for `ai-foundation-sveltekit` repo with required structure.
- [x] Add `README.md` to foundation scaffold.
- [x] Rename project entrypoint file (AGENTS.md -> entrypoint.md) in scaffold.
- [x] Ensure instruction file POV is project-scoped (no ai-foundation maintainer POV).
- [x] Add ai-foundation repo maintainer `AGENTS.md` (not imported into projects).
- [x] Add ai-foundation `opencode.json` for repo-local permissions.
- [x] Port content:
  - [x] `.agents/rules/**` -> `instructions/**` (in scaffold)
  - [x] `.agents/skills/**` -> `skill/**` (in scaffold)
- [x] Update `sveltekit-foundation` template:
  - [x] Move `opencode.json` to `.opencode/opencode.json`
  - [x] Add `@jgordijn/opencode-remote-config` to `"plugin"` list
  - [x] Add `.opencode/remote-config.json` pointing to `cryptosharia/ai-foundation-sveltekit`
  - [x] Enable importing `agents`, `commands`, and `plugins` from foundation (`"*"`).
- [x] Create real `cryptosharia/ai-foundation-sveltekit` repo and push scaffold contents.
- [ ] Team setup: ensure OpenCode can auto-install `@jgordijn/opencode-remote-config`.
- [ ] Validate precedence/overrides in at least one repo after rollout.

## Definition of Done

- [ ] Acceptance criteria in `planning/ai-foundation-remote-sync/spec.md` satisfied
- [ ] Foundation tracking `main` is consumable
- [ ] Validation performed in at least one repo

## Execution Log

- 2026-02-22: Planning docs created.
- 2026-02-22: Rollout mode decided (track `main`).
- 2026-02-22: Template updated with remote-config setup (.opencode/opencode.json, .opencode/remote-config.json).
- 2026-02-22: AI foundation scaffold created under planning/ with full content structure.
- 2026-02-22: Added foundation scaffold README.
- 2026-02-22: Normalized instruction files to project POV.
- 2026-02-22: Added ai-foundation maintainer AGENTS.md.
- 2026-02-22: Added ai-foundation repo-local OpenCode config.
- 2026-02-22: Pushed `cryptosharia/ai-foundation-sveltekit`.
