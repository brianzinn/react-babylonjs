type GetViteTemplateFiles = {
  appFileName: string
  dependencies: Record<string, string>
}

export const getViteTemplateFiles = ({ dependencies, appFileName }: GetViteTemplateFiles) => ({
  'package.json': getPackageJson(dependencies),

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
})

function getPackageJson(dependencies: GetViteTemplateFiles['dependencies']) {
  const content = {
    name: 'react-babylonjs-starter',
    private: true,
    version: '1.0.0',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
    },
    dependencies: {
      react: '18',
      'react-dom': '18',
      ...dependencies,
    },
    devDependencies: {
      '@types/react': '18',
      '@types/react-dom': '18',
      '@vitejs/plugin-react': '^4.3.4',
      globals: '^15.14.0',
      typescript: '^5.7.2',
      vite: '^6.0.7',
    },
  }

  return JSON.stringify(content, null, 2)
}
