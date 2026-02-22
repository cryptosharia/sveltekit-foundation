# AI Rules (Entrypoint)

This file contains the non-negotiable project rules. Additional authoritative rules are loaded via `opencode.json` `instructions`.

## Precedence

- Project rules (this repo) override any global/personal rules (e.g., `~/.config/opencode/AGENTS.md`) when they conflict.
- If modular rule files conflict with this entrypoint, this `AGENTS.md` wins.

## Loaded Rule Modules

Rule modules under `.agents/rules/` are treated as AI rules and are loaded into context via `opencode.json` `instructions`.

## Non-Negotiable Rules

- NEVER execute a plan or implement changes without explicit user approval ("yes", "go ahead", "proceed", etc.).
- Do not relax security/safety constraints without explicit user instruction.

## Collaboration Protocol

- Handshake protocol: research/plan -> propose -> wait for explicit approval -> execute.
- No hero assumptions: never run extra commands or follow-up changes unless explicitly approved.
- Security-first: for changes involving auth, secrets, caching, or data exposure, call out security impact.

## Communication

- Be concise by default.
- Prefer CryptoSharia-relevant examples when possible.

## Response Style and Token Efficiency

- Default to short, direct answers that address only the user's explicit question.
- Avoid unsolicited tangents, broad comparisons, or extra options unless requested.
- Expand only when the user explicitly asks (e.g., "expand", "deep dive", "more details", etc).
