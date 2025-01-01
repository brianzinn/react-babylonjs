import './Runner.css'
import React, { useEffect, useRef, useState, type HTMLAttributes } from 'react'
import getImport from '_playground_virtual_imports'
import { GET_IMPORT } from './constants'
import { babelTransform } from './babelTransform'

interface RunnerProps extends HTMLAttributes<HTMLDivElement> {
  code: string
}

const DEBOUNCE_TIME = 800

export const Runner = (props: RunnerProps) => {
  const [error, setError] = useState<Error | undefined>()
  const [component, setComponent] = useState<React.ReactNode | null>(null)

  const waitTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  function doCompile(targetCode: string) {
    try {
      const result = babelTransform(targetCode)

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
        setComponent(React.createElement(runExports.default))
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

  useEffect(() => {
    if (waitTimeoutRef.current) {
      clearTimeout(waitTimeoutRef.current)
    }

    waitTimeoutRef.current = setTimeout(() => {
      waitTimeoutRef.current = null

      doCompile(props.code)
    }, DEBOUNCE_TIME)
  }, [props.code])

  const { className = '', code, ...rest } = props

  return (
    <div className={`playground-runner ${className}`} {...rest}>
      {component}
      {error && <pre className="playground-error">{error.message}</pre>}
    </div>
  )
}
