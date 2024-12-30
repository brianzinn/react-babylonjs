import './Runner.css'
import React, { useEffect, useRef, useState, type HTMLAttributes } from 'react'
import { transform } from '@babel/standalone'
import type { TransformOptions } from '@babel/core'
import getImport from '_playground_virtual_imports'
import { babelPluginTransformImports } from './babelPluginTransformImports'
import { GET_IMPORT } from './constants'
import { babelPresets } from '../../../constants/babel'

interface RunnerProps extends HTMLAttributes<HTMLDivElement> {
  code: string
}

const DEBOUNCE_TIME = 800

const babelTransformOptions: TransformOptions = {
  presets: babelPresets,
  comments: false,
  plugins: [babelPluginTransformImports()],
}

export const Runner = (props: RunnerProps) => {
  const [error, setError] = useState<Error | undefined>()
  const [comp, setComp] = useState<React.ReactNode | null>(null)

  const timer = useRef<NodeJS.Timeout | null>(null)

  async function doCompile(targetCode: string) {
    console.log({ targetCode })
    try {
      const result = transform(targetCode, babelTransformOptions)

      // Code has been updated
      if (targetCode !== props.code || !result?.code) {
        return
      }

      const runExports: any = {}
      const func = new Function(GET_IMPORT, 'exports', result.code)
      func(getImport, runExports)

      // console.log('babelResult', result.code)
      // console.log('func', func.toString())
      // console.log({ runExports })

      if (runExports.default) {
        setError(undefined)
        setComp(React.createElement(runExports.default))
        return
      }

      setError(new Error('No default export'))
    } catch (e) {
      // Code has been updated
      if (targetCode !== props.code) {
        return
      }
      console.error(e)
      setError(e as Error)
    }
  }

  function waitCompile(targetCode: string) {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      timer.current = null
      doCompile(targetCode)
    }, DEBOUNCE_TIME)
  }

  useEffect(() => {
    doCompile(props.code)
  }, [])

  useEffect(() => {
    waitCompile(props.code)
  }, [props.code])

  const { className = '', code, ...rest } = props

  return (
    <div className={`playground-runner ${className}`} {...rest}>
      {comp}
      {error && <pre className="playground-error">{error.message}</pre>}
    </div>
  )
}
