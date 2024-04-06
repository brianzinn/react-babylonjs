export type RenderOptions = {
  /**
   * Observes visibility and does not render scene when no pixels of canvas are visible
   * Defaults to false, so you need to opt-in
   */
  whenVisibleOnly?: boolean
}

export type SharedEngineProps = {
  /**
   * Skip rendering if set to true (takes precedence over RenderOptions.whenVisibleOnly)
   */
  isPaused?: boolean

  /**
   * Attach resize event when canvas resizes (window resize may not occur).
   * Defaults to true, so you need to opt-out.
   */
  observeCanvasResize?: boolean

  /**
   * By default touch-action: 'none' will be on the canvas.  Use this to disable.
   */
  touchActionNone?: boolean
  /**
   * Useful if you want to attach CSS to the canvas by css #id selector.
   */
  canvasId?: string

  renderOptions?: RenderOptions
}
