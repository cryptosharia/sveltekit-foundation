# Spec: .agents Rules & Skills Restructure

## Goal

Adopt the `.agents/` convention so the repo cleanly separates:

- Rules: always-loaded modular standards
- Skills: on-demand procedures

## Non-Goals

- Rewriting rule content
- Designing new skills beyond CryptoSharia API integration
- Adding automation or hooks

## Contracts

### Inputs

- Existing rule modules currently under `rules/`
- Existing OpenCode config `opencode.json`
- Root entrypoint `AGENTS.md`
- Existing CryptoSharia API standard currently documented in a rules file

### Output

- `.agents/rules/` contains modular rule files, loaded via `opencode.json`.
- `.agents/skills/cryptosharia-api-integration/SKILL.md` exists with valid frontmatter.

### Skill Format

`SKILL.md` MUST start with YAML frontmatter containing:

- `name` (lowercase, hyphen-separated, 1-64 chars)
- `description` (1-1024 chars)

The skill directory name MUST match the `name`.

## Behavior Rules

- Rules MUST be loaded via `opencode.json.instructions`.
- Skills MUST be discoverable by OpenCode via `.agents/skills/<name>/SKILL.md`.
- `AGENTS.md` remains the highest precedence rule entrypoint.
- Any references to old paths MUST be updated (e.g. `rules/` -> `.agents/rules/`).

## Acceptance Criteria

- OpenCode sees all modular rules after migration.
- OpenCode lists `cryptosharia-api-integration` under skills.
- `npm run check` and `npm run lint` succeed.
