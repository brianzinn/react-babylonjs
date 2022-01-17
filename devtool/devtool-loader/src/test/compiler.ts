import { createFsFromVolume, Volume } from 'memfs'
import path from 'path'
import webpack, { Stats } from 'webpack'

export default (fixture: string, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          use: {
            loader: path.resolve(__dirname, '../../dist'),
            options,
          },
        },
      ],
    },
  })

  compiler.outputFileSystem = createFsFromVolume(new Volume())
  compiler.outputFileSystem.join = path.join.bind(path)

  return new Promise<Stats | undefined>((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)
      if (stats?.hasErrors()) reject(stats.toJson().errors)

      resolve(stats)
    })
  })
}
