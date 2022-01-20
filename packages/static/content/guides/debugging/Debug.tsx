import { BabylonApp, BasicCameraLightsGround, RotatingBox } from '@react-babylonjs/extra'
import React, { useContext } from 'react'
import { Controls, ControlsContext } from 'react-three-gui'

const MyBox = () => {
  const ctx = useContext(ControlsContext)

  console.log('wtf is this', ctx.controls)
  ctx.addControl({})

  // const rpm = useControl('RPM', { type: 'number' })
  return <ControlsContext.Consumer>{(context) => <RotatingBox rpm={5} />}</ControlsContext.Consumer>
}
const App = () => {
  return (
    <Controls.Provider>
      <BabylonApp>
        <BasicCameraLightsGround />
        <MyBox />
      </BabylonApp>
      <Controls />
    </Controls.Provider>
  )
}

export default App
