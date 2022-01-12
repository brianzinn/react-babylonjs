import React, { FC } from 'react'

const Sandbox = (props) => {
  const { name } = props
  return (
    <iframe
      src={`https://codesandbox.io/embed/github/benallfree/react-babylonjs/tree/codesandbox-stories/examples/${name}?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.tsx&theme=dark`}
      style={{
        width: '100%',
        height: '500px',
        border: 0,
        'border-radius': '4px',
        overflow: 'hidden',
      }}
      title="@react-babylonjs/babylon-basic"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}

export default Sandbox
