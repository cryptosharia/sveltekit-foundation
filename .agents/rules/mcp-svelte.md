# Svelte and MCP Rules

## Svelte MCP Tools

You can use the Svelte MCP server for Svelte 5 and SvelteKit documentation.

### Available MCP Tools

#### 1. `list-sections`

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

#### 2. `get-documentation`

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the `list-sections` tool, you MUST analyze the returned documentation sections (especially the `use_cases` field) and then use the `get-documentation` tool to fetch ALL documentation sections that are relevant for the user's task.

#### 3. `svelte-autofixer`

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

#### 4. `playground-link`

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

---

## Svelte 5 Conventions

### Runes

Use the following runes for reactive state management:

- `$state` - Create reactive state (e.g., `let count = $state(0)`)
- `$derived` - Create computed values (e.g., `let doubled = $derived(count * 2)`)
- `$effect` - Side effects (e.g., logging, localStorage sync)
- `$props` - Component props with destructuring
- `$bindable` - Two-way binding for props

### Component Patterns

- Use `$props()` for component props with object destructuring
- Use snippets (`{#snippet name()}`) instead of slots
- Use `{@render children()}` for rendering snippet children
- Use `<svelte:boundary>` for error handling

### Legacy Migration

- Avoid Svelte 4 patterns: `export let`, `$:`, stores, `on:click`
- Use Svelte 5 runes and event attributes (`onclick`)
