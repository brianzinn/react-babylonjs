import './Runner.css'
import React, { Component, type HTMLAttributes } from 'react'
import { transform } from '@babel/standalone'
import type { TransformOptions } from '@babel/core'
import getImport from '_playground_virtual_imports'
import { babelPluginTransformImports } from './helpers/babelPluginTransformImports'
import { babelPresets, GET_IMPORT } from './helpers/constants'

interface RunnerProps extends HTMLAttributes<HTMLDivElement> {
  code: string
}

interface RunnerState {
  error?: Error
  comp: any
}

const DEBOUNCE_TIME = 800

const babelTransformOptions: TransformOptions = {
  presets: babelPresets,
  comments: false,
  plugins: [babelPluginTransformImports()],
}

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
    console.log({ targetCode })
    try {
      const result = transform(targetCode, babelTransformOptions)

      // Code has been updated
      if (targetCode !== this.props.code || !result?.code) {
        return
      }

      const runExports: any = {}
      const func = new Function(GET_IMPORT, 'exports', result.code)
      func(getImport, runExports)

      console.log('babelResult', result.code)
      console.log('func', func.toString())
      // console.log({ runExports })

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
    const { className = '', code, ...rest } = this.props
    const { error, comp } = this.state

    return (
      <div className={`playground-runner ${className}`} {...rest}>
        {comp}
        {error && <pre className="playground-error">{error.message}</pre>}
      </div>
    )
  }
}

export { Runner }
