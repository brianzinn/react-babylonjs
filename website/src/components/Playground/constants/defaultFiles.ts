import { APP_FILE_NAME } from '../../../constants/files'

export const defaultFiles = {
  [`/index.tsx`]: {
    hidden: true,
    code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css";

import App from "./${APP_FILE_NAME}";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
  },
}
