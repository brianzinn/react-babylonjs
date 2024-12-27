# Rspress Playground plugin

Forked version of [@rspress/plugin-playground](https://github.com/web-infra-dev/rspress/tree/main/packages/plugin-playground) ([docs](https://rspress.dev/plugin/official-plugins/playground)), replaced its editor, refactored and adjusted to meed our needs.

## To Do

- [ ] Expand the playground (modal, or full screen)

## Why

### Local imports

The original `@rspress/plugin-playground` doesn't handle local imports ([source](https://github.com/web-infra-dev/rspress/blob/main/packages/plugin-playground/src/cli/utils.ts#L16)), so with it we can't import local components in our examples to re-use the code.

### Type errors

The original `@rspress/plugin-playground` [explicitly recommends](https://rspress.dev/plugin/official-plugins/playground#internal-components) using .js or .jsx to avoid type errors in the editor. They use Monaco editor (which powers VSCode), and it shows type errors thinking that packages are not installed. It is likely trying to do too much for our needs.

So I swapped the default editor with Sandpack (they wrap around CodeMirror), utilizing their convenient context provider and hooks.
