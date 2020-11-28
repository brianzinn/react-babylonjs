import React, { createContext, useRef, useContext } from "react"
import { useBeforeRender } from '../../../../dist/react-babylonjs'
import { Vector3, } from '@babylonjs/core';
import lerp from "lerp"
import state from "./store"

const offsetContext = createContext(0)

function Block({ children, offset, factor, ...props }) {
  const { offset: parentOffset, sectionHeight } = useBlock()
  offset = offset !== undefined ? offset : parentOffset
  const ref = useRef()
  useBeforeRender((scene) => {
    if(ref.current && ref.current.hostInstance.position){
        const curY = ref.current.hostInstance.position.y;
        const curTop = state.top.current;
        ref.current.hostInstance.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1);
    }
  });

  return (
    <offsetContext.Provider value={offset}>
      <transformNode {...props} name={`transformNode${Math.random()}`} position={new Vector3(0, -sectionHeight * offset * factor, 0)}>
        <transformNode  name={`tweenNode-${Math.random()}`} ref={ref}>{children}</transformNode>
      </transformNode>
    </offsetContext.Provider>
  )
}

function useBlock() {
  const { sections, pages, zoom } = state
  const viewPortSize = {
      width: window.innerWidth,
      height: window.innerHeight,
  }
  const size = viewPortSize;
  const viewport = viewPortSize;
  const offset = useContext(offsetContext)
  const viewportWidth = viewport.width
  const viewportHeight = viewport.height
  const canvasWidth = viewportWidth / zoom
  const canvasHeight = viewportHeight / zoom
  const mobile = size.width < 700
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))
  const offsetFactor = (offset + 1.0) / sections

  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
    offsetFactor
  }
}

export { Block, useBlock }