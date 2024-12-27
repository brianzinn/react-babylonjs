/// <reference types='@modern-js/module-tools/types' />

declare module '_playground_virtual_imports' {
  const getImport: (name: string, getDefault?: boolean) => void
  export default getImport
}
