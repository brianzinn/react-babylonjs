/**
 * React BabylonJS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export const DEBUG_ON = "reactBabylonJs/debugOn"
export const DEBUG_OFF = "reactBabylonJs/debugOff"

export type HandledResult = {
  handled: boolean
  handlers: number
  errors: any[]
}

let handlers: Array<(action: any) => boolean> = []

export const debugOn = () => ({
  type: DEBUG_ON
})

export const debugOff = () => ({
  type: DEBUG_OFF
})

export const actions = {
  debugOn,
  debugOff
}

export const registerHandler = (handler: (action: any) => boolean) => {
  if (typeof handler !== "function") {
    console.error("parameter handler is not a function", handler)
  } else {
    // console.log('babylonJS handler added')
    handlers.push(handler)
  }
}

export const removeHandler = (handler: (action: any) => boolean) => {
  if (typeof handler !== "function") {
    console.error("cannot unregister a handler that's not a function", handler)
  } else if (handlers.find(handler) !== undefined) {
    console.log("babylonJS handler found and removed", handler)
    handlers.filter(x => x !== handler)
  } else {
    console.log("handler not removed (was not registered)..")
  }
}

const callBabylonJs = (action: any): HandledResult => {
  let result = {
    handled: false,
    handlers: 0,
    errors: []
  } as HandledResult

  handlers.forEach(handler => {
    try {
      result.handlers++
      result.handled = result.handled || handler(action)
    } catch (error) {
      result.errors.push(error)
    }
  })

  return result
}

let skipActions = new Set(["LOCATION_CHANGE"])

export default (store: any) => (next: any) => (action: any) => {
  // intercept all actions and pass-through.
  if (!skipActions.has(action.type)) {
    const handledResult = callBabylonJs(action)

    if (handledResult.errors.length === 0) {
      // console.log(`babylonJS type: ${action.type} handled: ${handledResult.handled} w/o errors by ${handledResult.handlers}`)
    } else {
      handledResult.errors.forEach(error => {
        console.error(
          `error occured in React BabylonJS middleware with type ${action.type}`,
          error
        )
      })
    }

    // TODO: add possibly failure or # handlers.  possibly error if there are no handlers when we add filtering...
    action.handled = handledResult.handled
  }
  return next(action)
}
