import { forEach } from '@s-libs/micro-dash'
import { basename } from 'path'
import prettier, { Options as PrettierOptions } from 'prettier'
import { env } from 'process'
//@ts-ignore
import codesandbox from 'remark-codesandbox'
import {
  JsxEmit,
  ModuleKind,
  ModuleResolutionKind,
  ScriptTarget,
  transpileModule,
  TranspileOptions,
} from 'typescript'
import { RawLoaderDefinitionFunction } from 'webpack'
import type { Code } from './mdast'

type CodeSandBoxQuery = {
  template: string
  fontsize: string
  hidenavigation: '0' | '1'
  theme: 'dark' | 'light'
  entry: string
  module: string
  style: string
}

type CustomTemplate = {
  extends: string
  entry: string
}

type CodeSandboxOptions = {
  mode: 'iframe' | 'button' | 'meta'
  defaultQuery: CodeSandBoxQuery
  customTemplates: {
    ts: CustomTemplate
    js: CustomTemplate
  }
}

export type LoaderOptions = {
  name: string
}

type Config = {
  esModule: boolean
  transpileOptions: TranspileOptions
  prettierOptions: PrettierOptions
  codesandboxOptions: CodeSandboxOptions
}

const IS_DEVELOPMENT_MODE = env['NODE_ENV'] !== 'production'

export const TRANSPILE_OPTIONS: TranspileOptions = {
  compilerOptions: {
    noImplicitAny: true,
    strictNullChecks: true,
    strictFunctionTypes: true,
    strictPropertyInitialization: true,
    strictBindCallApply: true,
    noImplicitThis: true,
    noImplicitReturns: true,
    alwaysStrict: true,
    esModuleInterop: true,
    declaration: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    moduleResolution: ModuleResolutionKind.NodeJs,
    strict: false,
    target: ScriptTarget.ES2017,
    jsx: JsxEmit.Preserve,
    module: ModuleKind.ESNext,
    noEmitHelpers: true,
    importHelpers: true,
    downlevelIteration: false,
    removeComments: false,
  },
}

const DEFAULT_CONFIG: Config = {
  esModule: false,
  transpileOptions: TRANSPILE_OPTIONS,
  prettierOptions: {
    jsxBracketSameLine: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    semi: false,
    printWidth: 80,
    proseWrap: 'always',
    parser: 'typescript',
  },
  codesandboxOptions: {
    mode: 'meta',
    defaultQuery: {
      template: 'default',
      entry: 'src/App.tsx',
      fontsize: '14px',
      hidenavigation: '0',
      theme: 'dark',
      module: '',
      style: '',
    },
    customTemplates: {
      //@ts-ignore
      ts: {
        extends: `file:${__dirname}/../src/codesandbox-templates/ts`,
        entry: 'src/App.tsx',
      },
      js: {
        extends: `file:${__dirname}/../src/codesandbox-templates/js`,
        entry: 'src/App.jsx',
      },
    },
  },
}

type SandboxerResult = {
  dataCodesandboxUrl: string
}
type Sandboxer = (tree: Code) => Promise<SandboxerResult>

export type DevtoolLoaderResult = {
  ts: string
  js: string
  tsUrl: string
  jsUrl: string
}

const createSandboxer = (options: CodeSandboxOptions) => {
  const sandboxer = codesandbox(options) as Sandboxer

  const makeUrl = async (
    templateName: keyof CodeSandboxOptions['customTemplates'],
    source: string
  ) => {
    // Copy default values into query
    const query = new URLSearchParams()
    forEach(options.defaultQuery, (v, k) => {
      if (!!v) query.set(k, v)
    })

    // Overwrite defaults with tempalte defaults if available
    const { customTemplates } = options
    if (templateName && customTemplates[templateName]) {
      forEach(customTemplates[templateName], (v, k) => {
        if (!!v) query.set(k, v)
      })
    }

    // Compute the new querystring
    const computedQuerystring = decodeURIComponent(query.toString())
    console.log(`full query: ${templateName}?${computedQuerystring}`)

    const node: Code = {
      type: 'code',
      lang: 'tsx',
      meta: `codesandbox=${templateName}?${computedQuerystring}`,
      value: source,
    }
    await sandboxer(node)

    // console.log(JSON.stringify(node, null, 2))
    const url = (node.data?.hProperties as { dataCodesandboxUrl?: string })?.dataCodesandboxUrl
    if (!url) {
      throw new Error(`Failed to create sandbox URL from ${node.meta}`)
    }
    // console.log(`converted node to sandbox url ${url}`)
    return url
  }
  return { makeUrl }
}

const devtoolLoader: RawLoaderDefinitionFunction<Partial<LoaderOptions>> = async function (source) {
  if (!this.getOptions) {
    throw new Error(`@devtool/loader requires webpack 5. Make sure your Storybook is upgraded.`)
  }
  const options = this.getOptions()

  const _options: LoaderOptions = { name: basename(this.resourcePath), ...options }

  const { name } = _options

  if (!name.endsWith('.tsx')) {
    throw new Error(`Only .tsx files are allowed.`)
  }
  const nameNode = name.slice(0, -4)

  const { esModule, transpileOptions, codesandboxOptions, prettierOptions } = DEFAULT_CONFIG

  // console.log('@devtool/loader options', JSON.stringify(_options, null, 2))

  const { makeUrl } = createSandboxer(codesandboxOptions)

  // Prettify it so it displays nicely in the site
  const lines = [
    ...(IS_DEVELOPMENT_MODE
      ? [
          `{/** `,
          ` ********* WARNING ********`,
          ` * THIS CODE WAS LAUNCHED FROM LOCALHOST.`,
          ` * LOCAL PACKAGES MAY NOT MATCH THE DEPENDENCIES`,
          ` * USED IN THIS SANDBOX.`,
          ` * `,
          ` * TEST SANDBOX FOR BACKWARD COMPATIBLITY IF DESIRED.`,
          ` ********* WARNING ********`,
          ` */}`,
          '',
        ]
      : []),
    source,
  ]
  const unformattedTsx = lines.join('\n')
  // console.log('unformattedTsx', unformattedTsx)
  const formattedSourceTsx =
    `// ${nameNode}.tsx\n\n` + prettier.format(unformattedTsx, prettierOptions)
  // console.log('formattedSourceTsx', formattedSourceTsx)

  // Transpile to JS
  const formattedSourceJsx =
    `// ${nameNode}.jsx\n\n` +
    prettier.format(transpileModule(unformattedTsx, transpileOptions).outputText, prettierOptions)
  // console.log('formattedSourceJsx', formattedSourceJsx)

  // Generate the TS sandbox URL link

  const codesandboxTsUrl = await makeUrl('ts', formattedSourceTsx)

  // Generate the JS sandbox URL link
  const codesandboxJsUrl = await makeUrl('js', formattedSourceJsx)

  const res: DevtoolLoaderResult = {
    ts: formattedSourceTsx,
    js: formattedSourceJsx,
    tsUrl: codesandboxTsUrl,
    jsUrl: codesandboxJsUrl,
  }

  // console.log('loader result', res)

  const json = JSON.stringify(res)

  const final = `${esModule ? 'export default' : 'module.exports ='} ${json};`
  return final
}

module.exports = devtoolLoader
