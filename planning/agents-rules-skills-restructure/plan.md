# Plan: .agents Rules & Skills Restructure

## Objective

Restructure this foundation repo to follow the agent-compatible `.agents/` convention:

- Always-loaded team standards live under `.agents/rules/` and are loaded via `opencode.json`.
- On-demand procedures live under `.agents/skills/<name>/SKILL.md` and are discovered by OpenCode.

This makes it easier to scale team instructions and to adopt third-party skills (e.g. from skills.sh)
in a predictable, tool-compatible layout.

## Scope

- Create directories:
  - `.agents/rules/`
  - `.agents/skills/`
- Move existing rule modules from `rules/` to `.agents/rules/`.
- Update `opencode.json` `instructions` to load `.agents/rules/**/*.md`.
- Update `AGENTS.md` wording to point to `.agents/rules/`.
- Convert the CryptoSharia API integration standard into an OpenCode skill:
  - Add `.agents/skills/cryptosharia-api-integration/SKILL.md` with proper frontmatter.
  - Move/port the existing content (and update internal file path references).
- Decide how to handle the old `rules/` folder after migration.
- Verify rules and skill discovery.

## Out of Scope

- Changing the content of existing rules beyond path/reference updates.
- Adding additional skills from skills.sh (beyond making the structure ready for it).
- Changing OpenCode permissions or MCP configuration.

## Architecture Decisions

- `.agents/rules/` is the single source of truth for modular rule files.
- `.agents/skills/` is the single source of truth for project-scoped skills.
- Keep `AGENTS.md` in repo root as the entrypoint and highest-precedence rules.
- Keep `commands.md` as a minimal rules file (not a full developer docs replacement).

## File Change Map

- `opencode.json` - change `instructions` glob to `.agents/rules/**/*.md`.
- `AGENTS.md` - update references from `rules/` to `.agents/rules/`.
- `.agents/rules/*` - moved rule modules.
- `.agents/skills/cryptosharia-api-integration/SKILL.md` - new skill definition.
- `rules/*` - removed or left as a pointer (decision below).

## Decisions

1. Old `rules/` folder handling (recommended: delete after migration)
   - Option A: delete `rules/` entirely after `git mv` (cleanest).
   - Option B: keep `rules/` with a short `README.md` pointer to `.agents/rules/`.

## Risks and Mitigations

- Risk: OpenCode stops loading rules due to incorrect `instructions` glob.
  Mitigation: update `opencode.json` and verify with a fresh OpenCode session.
- Risk: skill not discovered due to invalid SKILL.md frontmatter or path.
  Mitigation: follow OpenCode skill spec: `.agents/skills/<name>/SKILL.md`, lowercase hyphen name.
- Risk: duplicate/conflicting rule copies if both `rules/` and `.agents/rules/` exist.
  Mitigation: remove old folder or keep only a pointer file.

## Acceptance Criteria

- `opencode.json` loads `.agents/rules/**/*.md` and no longer references `rules/`.
- A new OpenCode session sees the rules (from `.agents/rules/`).
- `cryptosharia-api-integration` appears in available skills and can be loaded.
- No duplicated rule modules remain (or only a pointer remains).

## Verification

- `npm run check`
- `npm run lint`
- Start OpenCode in repo root and confirm:
  - rules are loaded
  - `skill` tool lists `cryptosharia-api-integration`
