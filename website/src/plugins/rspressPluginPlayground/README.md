# Rspress Playground plugin

Forked version of [@rspress/plugin-playground](https://github.com/web-infra-dev/rspress/tree/main/packages/plugin-playground) ([docs](https://rspress.dev/plugin/official-plugins/playground)). Replaced its editor, refactored and adjusted to meed our needs.

## To Do
- Keep new lines in JSX after running transpileModule
  - Try with eslint: https://eslint.org/docs/latest/integrate/integration-tutorial
    - rule:
      - https://eslint.style/rules/js/padding-line-between-statements
      - https://eslint.org/docs/latest/rules/padding-line-between-statements
- Clean up: remove old code
- Clean up: refactorings

## Why not just `@rspress/plugin-playground`

### Local imports

The original `@rspress/plugin-playground` doesn't handle local imports ([source](https://github.com/web-infra-dev/rspress/blob/main/packages/plugin-playground/src/cli/utils.ts#L16)), so with it we wouldn't be able to import reusable components in our examples.

### Type errors

The original `@rspress/plugin-playground` [explicitly recommends](https://rspress.dev/plugin/official-plugins/playground#internal-components) using .js or .jsx to avoid type errors in the editor. They use Monaco editor (which powers VSCode), and it shows type errors thinking that packages are not installed. It is likely trying to do too much for our needs.

## To Do
- Add links

Thus, editor from Sandpack (wrapper around CodeMirror) is being used.  Sandpack also provides convenient context provider and hooks to consume it. Plus, we have a button to open demo in Codesandbox.

## Why not Sandpack for preview

1. Start time is very slow compared to local preview (it loads bundler into iframe, installs deps, and what not)
2. Static assets become a headache, since we need to provide remote urls
3. Overall, experience is not great to have it as the main tool in the docs