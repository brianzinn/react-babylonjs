import { SandpackFiles } from '@codesandbox/sandpack-react'

export const defaultFiles: SandpackFiles = {
  '/index.tsx': {
    hidden: true,
    code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
  },
}
