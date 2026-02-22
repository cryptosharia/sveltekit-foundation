# Spec: AI Foundation Remote Sync

## Goal

Enable all CryptoSharia repos to consume a centrally-managed set of OpenCode instructions and skills via Git sync, while allowing per-repo overrides.

## Non-Goals

- Immediate removal of repo-local `.agents/**`.
- Changing how OpenCode plugins work (we only configure and consume them).
- Reworking non-AI tooling config distribution.

## Contracts

### Foundation Repo Structure

The foundation repository MUST follow:

```
<repo-root>/
├── manifest.json
├── instructions/
│   └── **/*.md
├── skill/
│   └── <skill-name>/
│       └── SKILL.md
└── agent/ (optional)
    └── **/*.md
```

`manifest.json` MUST enumerate which instruction modules are importable.

### Project Remote Config

Each project repo MAY include `.opencode/remote-config.json`.

Rules:

- MUST include the foundation repo in `repositories[]`.
- SHOULD set `ref` to `main` for automatic updates.
- MAY use allowlists (`include`) for tighter control.
- Current template choice: imports `instructions`, `skills`, `agents`, `commands`, and `plugins` using `"*"`.

### Precedence

- Local definitions win over remote definitions with the same name.
- For remote conflicts, the first repo in `repositories[]` wins; later duplicates are skipped.

## Behavior Rules

- Developers install and enable `@jgordijn/opencode-remote-config`.
- On OpenCode startup, the plugin syncs remote repos into a local cache and links/copies imported assets into OpenCode config directories.
- During transition, projects may keep `.agents/**` and also import remote foundation; conflicts are resolved by precedence.

## Security Rules

- Treat imported `plugins` as executable code.
- No secrets in instructions/skills.
- When tracking `main`, require branch protection + review on the foundation repo.

## Edge Cases

- Devcontainer/Windows symlink issues: use `installMethod: "copy"`.
- Partial adoption: keep `.agents/**` until remote foundation is validated.

## Acceptance Criteria

- A foundation tracking `main` is consumable by a project using `.opencode/remote-config.json`.
- A repo-local override of a foundation skill name works without breaking remote sync.
