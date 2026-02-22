# Execution: .agents Rules & Skills Restructure

## Context

Implementation must follow `planning/agents-rules-skills-restructure/spec.md`.

## Execution Order

1. Create the `.agents/` directory structure.
2. Move existing rule modules to `.agents/rules/` (use `git mv`).
3. Update `opencode.json` instructions glob.
4. Update `AGENTS.md` references.
5. Add `.agents/skills/cryptosharia-api-integration/SKILL.md` and migrate CryptoSharia API standard.
6. Remove old `rules/` (or leave only a pointer) to avoid duplication.
7. Run verification.
8. Commit.

## Allowed Files

- `opencode.json`
- `AGENTS.md`
- `.agents/**`
- `rules/**` (moves/deletions only)
- `planning/agents-rules-skills-restructure/**`

## Constraints

- Do not change behavioral content of rules except updating path references.
- Keep `commands.md` minimal; do not duplicate the README.
- No secrets.

## Escalation

- If OpenCode fails to load rules or discover skills after changes, stop and revise spec before proceeding.

## Done Definition

- Acceptance criteria satisfied
- `npm run check` and `npm run lint` pass
- Final diff documented in the PR/commit message context
