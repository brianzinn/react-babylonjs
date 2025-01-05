import './Runner.css'
import React, { useEffect, useRef, useState } from 'react'
import { useActiveCode } from '@codesandbox/sandpack-react'
import { babelTransform } from './babelTransform'
import { moduleStringToComponent } from './moduleStringToComponent'

interface RunnerProps {
  className?: string
}

const DEBOUNCE_TIME = 800

export const Runner = (props: RunnerProps) => {
  const [error, setError] = useState<Error | undefined>()
  const [component, setComponent] = useState<React.ReactNode | null>(null)

  const { code } = useActiveCode()

  function doCompile(targetCode: string) {
    try {
      const start = performance.now()
      const transformedCode = babelTransform(targetCode)

      if (!transformedCode) {
        return
      }

      const defaultExport = moduleStringToComponent(transformedCode)?.default
      // console.log(component?.toString())
      const end = performance.now()

      console.info(
        `%cBabel took: %c${Math.round(end - start)}ms`,
        'background: #15889f; padding: 6px; color: white;',
        'background: #15889f; padding: 6px; color: white; font-size: 0.8rem; font-weight: bold'
      )

      if (defaultExport) {
        setError(undefined)
        setComponent(React.createElement(defaultExport))
      } else {
        setError(new Error('No default export'))
      }
    } catch (e) {
      console.error(e)
      setError(e as Error)
    }
  }

  const waitTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (waitTimeoutRef.current) {
      clearTimeout(waitTimeoutRef.current)
    }

    waitTimeoutRef.current = setTimeout(() => {
      waitTimeoutRef.current = null

      doCompile(code)
    }, DEBOUNCE_TIME)
  }, [code])

  return (
    <div className={`playground-runner ${props.className ?? ''}`}>
      {component}
      {error && <pre className="playground-error">{error.message}</pre>}
    </div>
  )
}
