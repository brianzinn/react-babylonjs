import * as path from 'node:path'
import { defineConfig } from 'rspress/config'
import { remarkPluginPreviews } from './src/plugins/remarkPluginPreviews'

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
    mdxRs: false,

    remarkPlugins: [remarkPluginPreviews],
  },

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
