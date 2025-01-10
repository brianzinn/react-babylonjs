/// <reference types='@modern-js/module-tools/types' />

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '_playground_virtual_modules' {
  const getImport: (name: string) => void

  export default getImport
}

declare module '_playground_virtual_types' {
  const typeDeclarations: Record<string, string>

  export default typeDeclarations
}
