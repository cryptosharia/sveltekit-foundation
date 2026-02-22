# Tasks: .agents Rules & Skills Restructure

- [ ] Create `.agents/rules/` and `.agents/skills/` directories
- [ ] Move rule modules from `rules/` -> `.agents/rules/` via `git mv`
- [ ] Update `opencode.json` to load `.agents/rules/**/*.md`
- [ ] Update `AGENTS.md` references
- [ ] Create `.agents/skills/cryptosharia-api-integration/SKILL.md` and migrate CryptoSharia API standard
- [ ] Remove `rules/` directory OR leave a pointer file (per plan decision)
- [ ] Run `npm run check`
- [ ] Run `npm run lint`
- [ ] Verify OpenCode rules + skill discovery in a fresh session
- [ ] Commit changes

## Definition of Done

- [ ] Acceptance criteria satisfied
- [ ] Verification commands pass
- [ ] No duplicated rule sources remain

## Execution Log

- 2026-02-21: Planning created
