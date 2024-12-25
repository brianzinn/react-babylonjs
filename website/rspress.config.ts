import * as path from 'node:path'
import { defineConfig } from 'rspress/config'
import { pluginPlayground } from './src/plugins/rspressPluginPlayground'

export default defineConfig({
  base: '/react-babylonjs/',
  root: path.join(__dirname, 'docs'),
  outDir: 'build',

  title: 'React Babylonjs',

  logo: '/logo.png',
  icon: '/logo.png',
  logoText: 'React Babylonjs',

  markdown: {
    checkDeadLinks: true,
    defaultWrapCode: true,
  },

  plugins: [pluginPlayground()],

  route: {
    cleanUrls: true,
  },

  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/brianzinn/react-babylonjs',
      },
    ],
  },
})
