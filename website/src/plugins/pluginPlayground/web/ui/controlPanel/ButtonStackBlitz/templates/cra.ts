export const getCraTemplateFiles = ({ appFileName }: { appFileName: string }) => ({
  'public/index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Babylonjs</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.js"></script>
  </body>
</html>
`,
  'src/index.js': `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../${appFileName}'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`,
})
