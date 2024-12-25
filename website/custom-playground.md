Three options

## Rspress plugin playground

**Pros**:

- Instant preview

**Issues**:

- Can't resolve local imports. They literally say that in
  [source code](https://github.com/web-infra-dev/rspress/blob/main/packages/plugin-playground/src/cli/utils.ts#L15)
- Can't hide type errors. They explicitly advise to not use TS in
  [docs](https://rspress.dev/plugin/official-plugins/playground#internal-components)

Having js code in playgrounds may be fine. Not being able to import re-usable
code in examples is an issue, IMO.

## Sandpack Playground

**Pros**

- Can handle multiple files
- No type errors
- Link to Codesandbox

**Cons**

- Slow start time
- Sluggish on mobile

## Two above combined

**Pros**

- Instant preview
- Can handle multiple files
- No type errors
- Link to Codesandbox

**Cons**

- Adds some maintenance burden
