import type { Node } from '@babel/types'
import React, { Component, type HTMLAttributes } from 'react'
import { createGetImport, createObjectPattern, createVariableDeclaration } from './helpers/ast'
import { availablePresets, transform } from '@babel/standalone'
import getImport from '_playground_virtual_imports'
import './Runner.css'

interface RunnerProps extends HTMLAttributes<HTMLDivElement> {
  code: string
  language: string
}

interface RunnerState {
  error?: Error
  comp: any
}

const DEBOUNCE_TIME = 800

class Runner extends Component<RunnerProps, RunnerState> {
  static getDerivedStateFromError(error: Error) {
    return {
      error,
      comp: null,
    }
  }

  timer: any

  constructor(props: RunnerProps) {
    super(props)

    this.state = {
      error: undefined,
      comp: null,
    }

    this.doCompile = this.doCompile.bind(this)
    this.waitCompile = this.waitCompile.bind(this)
  }

  waitCompile(targetCode: string) {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.timer = null
      this.doCompile(targetCode)
    }, DEBOUNCE_TIME)
  }

  async doCompile(targetCode: string) {
    // console.log({ targetCode })
    const { language } = this.props
    try {
      const babelPresets = [
        [availablePresets.react],
        [
          availablePresets.env,
          {
            targets: {
              chrome: 100,
              esmodules: true,
            },
          },
        ],
      ]

      if (language === 'tsx' || language === 'ts') {
        babelPresets.unshift([
          availablePresets.typescript,
          {
            allExtensions: true,
            isTSX: language === 'tsx',
          },
        ])
      }

      const result = transform(targetCode, {
        presets: babelPresets,
        comments: false,
        plugins: [
          {
            pre() {
              this.hasReactImported = false
            },
            visitor: {
              ImportDeclaration(path) {
                const pkg = path.node.source.value

                const code: Node[] = []
                const specifiers: (string | [string, string])[] = []

                for (const specifier of path.node.specifiers) {
                  if (specifier.local.name === 'React') {
                    this.hasReactImported = true
                  }
                  // import X from 'foo'
                  if (specifier.type === 'ImportDefaultSpecifier') {
                    // const ${specifier.local.name} = __get_import()
                    code.push(
                      createVariableDeclaration(specifier.local.name, createGetImport(pkg, true))
                    )
                  }
                  // import * as X from 'foo'
                  if (specifier.type === 'ImportNamespaceSpecifier') {
                    // const ${specifier.local.name} = __get_import()
                    code.push(createVariableDeclaration(specifier.local.name, createGetImport(pkg)))
                  }
                  // import { a, b, c } from 'foo'
                  if (specifier.type === 'ImportSpecifier') {
                    // import { foo: bar } from 'baz'
                    if (
                      'name' in specifier.imported &&
                      specifier.imported.name !== specifier.local.name
                    ) {
                      // const {${specifier.imported.name}: ${specifier.local.name}} = __get_import()
                      specifiers.push([specifier.imported.name, specifier.local.name])
                    } else {
                      // const {${specifier.local.name}} = __get_import()
                      specifiers.push(specifier.local.name)
                    }
                  }
                }
                if (specifiers.length > 0) {
                  code.push(
                    createVariableDeclaration(createObjectPattern(specifiers), createGetImport(pkg))
                  )
                }
                path.node && path.replaceWithMultiple(code)
              },
            },
            post(file) {
              // Auto import React
              if (!this.hasReactImported) {
                file.ast.program.body.unshift(
                  createVariableDeclaration('React', createGetImport('react', true))
                )
              }
            },
          },
        ],
      })

      // Code has been updated
      if (targetCode !== this.props.code || !result?.code) {
        return
      }

      const runExports: any = {}
      // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
      const func = new Function('__get_import', 'exports', result.code)
      func(getImport, runExports)

      // console.log(runExports.default.toString())
      if (runExports.default) {
        this.setState({
          error: undefined,
          comp: React.createElement(runExports.default),
        })
        return
      }

      this.setState({
        error: new Error('No default export'),
      })
    } catch (e) {
      // Code has been updated
      if (targetCode !== this.props.code) {
        return
      }
      console.error(e)
      this.setState({
        error: e as Error,
      })
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error)
    console.error(errorInfo)
  }

  componentDidMount() {
    this.doCompile(this.props.code)
  }

  componentDidUpdate(prevProps: RunnerProps) {
    if (prevProps.code !== this.props.code) {
      this.waitCompile(this.props.code)
    }
  }

  render() {
    const { className = '', code, language, ...rest } = this.props
    const { error, comp } = this.state

    return (
      <div className={`rspress-playground-runner ${className}`} {...rest}>
        {comp}
        {error && <pre className="rspress-playground-error">{error.message}</pre>}
      </div>
    )
  }
}

export { Runner }
