# Execution: AI Foundation Remote Sync

## Context

Execution must follow `planning/ai-foundation-remote-sync/spec.md`.

## Execution Order

1. Confirm rollout mode (track `main`) and template-first rollout.
2. Create the new foundation repo with the required structure.
3. Port foundation content into the new repo.
4. Update this template to include project-scoped remote-config setup.
5. Validate in at least one repo after rollout.

## Allowed Files (in this repo)

- `planning/ai-foundation-remote-sync/plan.md`
- `planning/ai-foundation-remote-sync/spec.md`
- `planning/ai-foundation-remote-sync/tasks.md`
- `planning/ai-foundation-remote-sync/execution.md`

## Constraints

- Do not change application/runtime code as part of this rollout.
- Do not import remote plugins in iteration 1.
- Do not remove existing `.agents/**` until the remote foundation is validated.

## Escalation

- If remote plugins, auth/secrets, or contract changes are needed, update the spec and re-approve.

## Done Definition

- Planning docs present and match the intended rollout.

## Final Report Format

- Files changed
- Decisions (pinned vs `main`, copy vs link)
- Validation results
