# Plan: Add Health Endpoint

## Objective

Expose a simple health endpoint so uptime monitors can verify the app is running.

## Scope

- Add `GET /api/health` route
- Return a small JSON payload with status and timestamp

## Out of Scope

- Database connectivity checks
- Auth/permissions
- External dependency checks

## Architecture Decisions

- Use a SvelteKit `+server.ts` route under `src/routes/api/health/`
- Keep response stable and minimal for monitoring tools

## File Change Map

- `src/routes/api/health/+server.ts` - implement endpoint
- `src/routes/api/health/+server.test.ts` - add basic contract test

## Risks and Mitigations

- Risk: endpoint accidentally cached by intermediaries
  Mitigation: set `cache-control: no-store`

## Acceptance Criteria

- `GET /api/health` responds with HTTP 200
- Response is JSON with `status: 'ok'` and `timestamp` (ISO string)
- `cache-control` is `no-store`

## Verification

- `npm run check`
- `npm run lint`
- `npm run test`
