import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { useState, FC, useRef, useEffect } from 'react'
import { Engine, Scene, Html } from 'react-babylonjs'

let lastTime = Date.now()

const WithHtmlText: FC = () => {
  const [position, setPosition] = useState(Vector3.Zero())
  const [rotation, setRotation] = useState(Vector3.Zero())

  let handle = useRef<number | undefined>(undefined)
  let direction = 1

  const animate = (_) => {
    if (position.x > 1) {
      direction = -1
    } else if (position.x < -1) {
      direction = 1
    }

    const velocity = 0.005 * direction
    position.x += velocity
    const rpm = 10
    const now = Date.now()
    const deltaTimeInMillis = now - lastTime
    lastTime = now
    const rotationRads = (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
    rotation.y += rotationRads
    setPosition(position.clone())
    setRotation(rotation.clone())
    handle.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    handle.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(handle.current!)
  }, [])

  return (
    <transformNode name="transform-node" position={position} rotation={rotation}>
      <sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)}>
        <Html name="html" center occlude={false}>
          {
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '3px solid red',
                padding: '8px',
              }}
            >
              Text
            </div>
          }
        </Html>
      </sphere>
    </transformNode>
  )
}

const HtmlText = () => (
  <div style={{ position: 'relative', flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <WithHtmlText />
      </Scene>
    </Engine>
  </div>
)

export default HtmlText
