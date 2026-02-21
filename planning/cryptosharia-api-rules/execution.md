# Execution: CryptoSharia API Rules Module

## Context

Implementation must follow `planning/cryptosharia-api-rules/spec.md`.

## Execution Order

1. Create `rules/cryptosharia-api.md`.
2. Run verification commands.
3. Ensure no unrelated files are modified.

## Allowed Files

- `rules/cryptosharia-api.md`
- `planning/cryptosharia-api-rules/plan.md`
- `planning/cryptosharia-api-rules/spec.md`
- `planning/cryptosharia-api-rules/tasks.md`
- `planning/cryptosharia-api-rules/execution.md`

## Constraints

- No application code changes
- No secrets
- Do not change external contracts or security posture beyond what the spec describes

## Escalation

- If conflicts with existing rules are discovered, update spec and get approval before modifying other
  rule files

## Done Definition

- Acceptance criteria satisfied
- `npm run lint` and `npm run check` pass
- Final diff documented

## Final Report Format

- Files changed
- Check results
- Deviations from spec
