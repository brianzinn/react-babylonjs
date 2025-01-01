import './Runner.css'
import React, { useEffect, useRef, useState } from 'react'
import { babelTransform } from '../../../constants/babelTransform'
import { codeStringToComponent } from './codeStringToComponent'

interface RunnerProps {
  code: string
  className?: string
}

const DEBOUNCE_TIME = 800

export const Runner = (props: RunnerProps) => {
  const [error, setError] = useState<Error | undefined>()
  const [component, setComponent] = useState<React.ReactNode | null>(null)

  const waitTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  function doCompile(targetCode: string) {
    try {
      const transformedCode = babelTransform(targetCode)

      if (targetCode !== props.code || !transformedCode) {
        return
      }

      const defaultExport = codeStringToComponent(transformedCode)?.default
      // console.log(component?.toString())

      if (defaultExport) {
        setError(undefined)
        setComponent(React.createElement(defaultExport))
      } else {
        setError(new Error('No default export'))
      }
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

  return (
    <div className={`playground-runner ${props.className ?? ''}`}>
      {component}
      {error && <pre className="playground-error">{error.message}</pre>}
    </div>
  )
}
