# Coding Conventions

## TypeScript

- Strict mode enabled in `tsconfig.json`
- Always use proper TypeScript types; avoid `any`
- `checkJs: true` means JavaScript files also need type annotations
- Use `typescript-eslint` for TypeScript-specific linting
- Always use `type` instead of `interface` for type definitions

## Prettier

- Use tabs for indentation
- Single quotes for strings
- No trailing commas
- 100 character line width
- Svelte parser for `.svelte` files
- TailwindCSS plugin enabled

## ESLint

- Follows Svelte + TypeScript recommended rules
- Prettier integration for formatting conflicts
- `no-undef` rule is disabled (handled by TypeScript)

## Import Conventions

### Aliases

- Use `$lib` alias for internal library imports
- Example: `import { something } from '$lib'`

### Import Ordering

Group imports in this order:

1. External libraries (e.g., `import { format } from 'date-fns'`)
2. `$lib` imports (e.g., `import { util } from '$lib'`)
3. Relative imports (e.g., `import Component from './Component.svelte'`)

## Naming Conventions

| Type                   | Convention       | Example                     |
| ---------------------- | ---------------- | --------------------------- |
| Components             | PascalCase       | `TodoList.svelte`           |
| Functions/variables    | camelCase        | `handleSubmit`, `isValid`   |
| Constants              | UPPER_SNAKE_CASE | `MAX_ITEMS`                 |
| Files (non-components) | kebab-case       | `utils.ts`, `api-client.ts` |
| Types                  | PascalCase       | `TodoItem`, `UserResponse`  |

## Error Handling

- Use `try/catch` for async operations
- Let errors bubble up to error boundaries when appropriate
- Provide meaningful error messages

## CSS / TailwindCSS

- Use TailwindCSS utility classes when possible for rapid prototyping
- Keep component-specific styles in `<style>` blocks for scoped styles
- Follow TailwindCSS v4 conventions
- Custom styles can be added in `src/routes/layout.css`

## Project Structure

```
src/
├── lib/              # Shared library code ($lib alias)
│   └── index.ts     # Barrel exports for lib
├── routes/           # SvelteKit pages and layouts
│   ├── +page.svelte  # Route page
│   └── +layout.svelte # Layout wrapper
├── app.d.ts          # TypeScript declarations
└── app.html          # HTML template
```

## Testing

- Use Vitest for unit testing
- Test files should be named `*.test.ts`
- Place tests alongside the code they test
