import prettier from 'prettier'

const formatCode = async (code: string, filePath: string) => {
  // try to resolve .prettierrc config, or use a fallback
  const config = (await prettier.resolveConfig(filePath)) ?? {}

  const result = await prettier.format(code, { ...config, parser: 'babel' })

  return result
}

export { formatCode }
