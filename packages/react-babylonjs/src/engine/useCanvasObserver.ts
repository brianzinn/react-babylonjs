import { MutableRefObject, useEffect } from 'react'

import { Nullable } from '@babylonjs/core/types.js'

// TODO: this should return a shouldRenderRef instead of setState for a re-render?
export const useCanvasObserver = (
  canvasRef: MutableRefObject<Nullable<HTMLCanvasElement>>,
  shouldRenderRef: MutableRefObject<boolean>,
  enabledOption = false,
  threshold = 0
) => {
  useEffect(() => {
    if (enabledOption !== true) {
      return
    }

    if (canvasRef.current === null) {
      return
    }

    const callbackFn: IntersectionObserverCallback = (entries) => {
      // Last entry represents the latest, current state.
      const lastEntry = entries[entries.length - 1]
      shouldRenderRef.current = lastEntry.isIntersecting
    }

    const observer = new IntersectionObserver(callbackFn, { threshold })
    observer.observe(canvasRef.current)

    const canvas: HTMLCanvasElement = canvasRef.current
    return () => {
      observer.unobserve(canvas)
    }
  }, [canvasRef, threshold, enabledOption])
}
