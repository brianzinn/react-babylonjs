import React, { FC, useEffect, useState } from 'react'
import { useBeforeRender, useCanvas, useEngine } from 'react-babylonjs'

const Stats = (props) => {
  const engine = useEngine()

  useEffect(() => {
    const update = () => {
      console.log('callback', engine.getFps())
      const ctx = engine.getRenderingCanvas().getContext('2d')
      if (ctx) {
        ctx.font = '48px serif'
        ctx.fillText('Hello world', 0, 0)
      }
      requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  })

  console.log('render')

  return null
}

export default Stats
