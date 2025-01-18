type GetViteTemplateFiles = {
  appFileName: string
}

export const getViteTemplateFiles = ({ appFileName }: GetViteTemplateFiles) => {
  return {
    'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React BabylonJS Starter</title>
  </head>
  <body>
    <div id="root">Compiling...</div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>`,

    'main.tsx': `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './${appFileName}'

const rootEl = document.getElementById('root')

if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}`,

    'vite.config.ts': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})`,

    'tsconfig.json': `{
  "compilerOptions": {
    "lib": ["DOM", "ES2020"],
    "jsx": "react-jsx",
    "target": "ES2020",
    "noEmit": true,
    "skipLibCheck": true,
    "useDefineForClassFields": true,

    /* modules */
    "module": "ESNext",
    "isolatedModules": true,
    "resolveJsonModule": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,

    /* type checking */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src"]
}`,
  }
}
