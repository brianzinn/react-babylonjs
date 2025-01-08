import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { CodeRunner } from '../CodeRunner/CodeRunner'
import styles from './Preview.module.css'

export const Preview = () => {
  const [error, setError] = useState<Error | undefined>()

  const errorOverlay = <pre className={styles.error}>{error?.message}</pre>

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary onError={setError} fallback={errorOverlay}>
        <CodeRunner onError={setError} />
      </ErrorBoundary>
      {error?.message && errorOverlay}
    </div>
  )
}
