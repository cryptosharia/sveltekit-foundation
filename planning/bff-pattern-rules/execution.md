# Execution: General BFF Rule Module

## Context

Implementation must follow `planning/bff-pattern-rules/spec.md`.

## Execution Order

1. Create `rules/bff-pattern.md` with required sections and examples.
2. Run verification commands.
3. Ensure no unrelated files are modified.

## Allowed Files

- `rules/bff-pattern.md`
- `planning/bff-pattern-rules/plan.md`
- `planning/bff-pattern-rules/spec.md`
- `planning/bff-pattern-rules/tasks.md`
- `planning/bff-pattern-rules/execution.md`

## Constraints

- No application code changes.
- No secrets.
- No vendor-specific references.

## Escalation

- If rule conflicts with existing `rules/*.md`, update spec + re-approve before changing other rule modules.

## Done Definition

- Acceptance criteria satisfied
- `npm run lint` and `npm run check` pass
- Final diff documented

## Final Report Format

- Files changed
- Check results
- Deviations from spec
