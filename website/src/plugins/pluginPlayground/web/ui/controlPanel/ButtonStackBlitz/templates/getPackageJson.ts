export function getPackageJson(dependencies: Record<string, string>) {
  return {
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
}
