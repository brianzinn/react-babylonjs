import { Plugin, rollup } from '@rollup/browser'
import { prepareFileNameWithExt } from '@/src/plugins/pluginPlayground/cli/utils/getImport'
import { Files } from './getComponentFromCode'

export const getBundledCode = async ({
  entryFilename,
  files,
}: {
  entryFilename?: string
  files: Files
}) => {
  const bundle = await rollup({
    input: entryFilename,
    plugins: [
      loaderPlugin(files),
      {
        name: 'test-transform',
        transform(code, id) {
          // console.log({ code, id })
          return code
        },
      },
    ],
    // regexp to match non-local imports, ie. it does not start with . or /
    external: /^[^(.|/)]/,
  })

  const { output } = await bundle.generate({
    compact: false,
    strict: false,
    format: 'commonjs',
    generatedCode: 'es2015',
    plugins: [],
  })

  const bundledCodeString = output[0].code
  // console.log({ bundledCodeString })

  return bundledCodeString
}

function loaderPlugin(files: Files): Plugin {
  return {
    name: 'loader',
    resolveId(source, importer, options) {
      if (files.hasOwnProperty(source)) {
        return source
      }

      if (source.startsWith('.')) {
        const fileName = `/${prepareFileNameWithExt(source)}`

        if (files.hasOwnProperty(fileName)) {
          return fileName
        }
      }

      return source
    },
    load(id) {
      if (files.hasOwnProperty(id)) {
        return files[id]
      }
    },
  }
}
