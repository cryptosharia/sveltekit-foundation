# Execution: Add Health Endpoint

## Context

Implementation must follow `planning/example/spec.md`.

## Execution Order

1. Implement the endpoint
2. Add the test
3. Run verification

## Allowed Files

- `src/routes/api/health/+server.ts`
- `src/routes/api/health/+server.test.ts`

## Constraints

- Do not add extra checks (DB, external services)
- Keep response contract stable

## Escalation

- If response shape must change
- If existing test setup cannot test the endpoint

## Done Definition

- Acceptance criteria satisfied
- Verification commands in `planning/example/plan.md` pass

## Final Report Format

- Files changed
- Commands run and results
- Deviations (if any)
