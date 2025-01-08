# Playground plugin for Rspress

This plugin is a mix of `@rspress/plugin-playground` ([code](https://github.com/web-infra-dev/rspress/tree/main/packages/plugin-playground), [docs](https://rspress.dev/plugin/official-plugins/playground)) with [Sandpack](https://sandpack.codesandbox.io/docs). The former is largely reused for plugin logic and in-browser code compilation, the latter provides the code editor, Open in Sandbox button, and context provider with convenient hooks.

## How to use

Add `<code src='./path/to/Component.tsx' >` in .mdx files. It will be replaces with a Playground component

> [!NOTE]
> Only .tsx files for now, need adjustments to handle .jsx

### Imports

Relative imports are resolved and loaded, and can be edited with live updates of the preview.

> [!NOTE]
> Path aliases are not supported atm

External modules (npm packages) used in the demos are resolved at build time, and need to be present in the `package.json`.

## Why not just `@rspress/plugin-playground`

### No local imports

The original `@rspress/plugin-playground` doesn't handle local imports ([source](https://github.com/web-infra-dev/rspress/blob/main/packages/plugin-playground/src/cli/utils.ts#L16)), so with it we wouldn't be able to reuse components in our examples.

### Typescript with errors

The original `@rspress/plugin-playground` [explicitly recommends](https://rspress.dev/plugin/official-plugins/playground#internal-components) not to use `.ts(x)` to avoid red squiggly type errors in the editor. It is using Monaco editor, which shows type errors as it doesn't know about installed npm packages in the browser. It may be doing too much for our needs overall.

## Why not just Sandpack

### Preview slow start

Preview start time is pretty slow, especially on mobile (it loads bundler into iframe, installs deps, and what not), and it's loaded all over on every page. After load, it still feels slowish, as it's likely doing too many things under the hood.

### Some demos fail

Some demo previews break in Sandbox, while they are working fine locally.
