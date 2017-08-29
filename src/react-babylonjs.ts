// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"

export {
  default as babylonJSMiddleware,
  actions /* action creators for Connect */,
  DEBUG_ON,
  DEBUG_OFF /* action type constants */,
  HandledResult,
  registerHandler,
  removeHandler
} from "./middleware"

export { default as Scene, SceneProps, SceneEventArgs } from "./Scene"
