import React, { FC } from "react";

const ReactDemo: FC = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        margin: 5,
        padding: 5,
        border: "1px solid white",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};

export default ReactDemo;
