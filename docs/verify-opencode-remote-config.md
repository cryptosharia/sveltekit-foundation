# Verify AI Foundation Sync

This project consumes CryptoSharia's shared AI foundation via `@jgordijn/opencode-remote-config`.

The simplest verification is to check what OpenCode actually loaded.

## Verification steps

1. Start OpenCode from the project root:

```sh
opencode
```

2. In OpenCode, run:

```
/skills
```

Expected: you see `cryptosharia-api-integration` (and any other skills).

3. Ask the assistant something like:

```
What AI rules do you have?
```

Expected: it lists the CryptoSharia foundation rules (BFF pattern, security, conventions, planning, SvelteKit rules, etc.).

## Optional checks (when debugging)

- Watch OpenCode startup logs for `[remote-config]` lines (clone/fetch and discovered skills/instructions).
- On Linux, remote repos are typically cached under `~/.cache/opencode/remote-config/repos/` (exact location may vary by OS).
