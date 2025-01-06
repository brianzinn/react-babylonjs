import './Runner.css'
import React, { useEffect, useRef, useState } from 'react'
import { useSandpack } from '@codesandbox/sandpack-react'
import { rollupBrowser } from './rollup/rollupBrowser'

interface RunnerProps {
  className?: string
}

const DEBOUNCE_TIME = 800

export const Runner = (props: RunnerProps) => {
  const [error, setError] = useState<Error | undefined>()
  const [component, setComponent] = useState<React.ReactNode | null>(null)

  const {
    sandpack: { files, visibleFilesFromProps },
  } = useSandpack()

  async function doCompile() {
    try {
      const visibleFiles = visibleFilesFromProps.reduce<Record<string, string>>((acc, fileName) => {
        acc[fileName] = files[fileName].code

        return acc
      }, {})

      const start = performance.now()
      const component = await rollupBrowser(visibleFiles)
      const end = performance.now()

      console.info(
        `%cRollup+Babel took: %c${Math.round(end - start)}ms`,
        'background: #15889f; padding: 6px; color: white;',
        'background: #15889f; padding: 6px; color: white; font-size: 0.8rem; font-weight: bold'
      )

      if (component) {
        setError(undefined)
        setComponent(React.createElement(component))
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

      doCompile()
    }, DEBOUNCE_TIME)
  }, [files])

  return (
    <div className={`playground-runner ${props.className ?? ''}`}>
      {component}
      {error && <pre className="playground-error">{error.message}</pre>}
    </div>
  )
}
