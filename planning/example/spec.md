# Spec: Add Health Endpoint

## Goal

Provide a stable health endpoint for uptime monitoring.

## Non-Goals

- No dependency checks (DB/Redis/etc)

## Contracts

### Input

`GET /api/health`

### Output

- Status: `200`
- Headers:
  - `content-type: application/json`
  - `cache-control: no-store`
- Body:

```json
{
	"status": "ok",
	"timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Behavior Rules

- Always return the same JSON keys (`status`, `timestamp`)
- `timestamp` is generated at request time and is an ISO string

## Edge Cases

- None (endpoint must not throw)

## Acceptance Criteria

- Matches the output contract exactly (keys + types)
- Includes `cache-control: no-store`
