const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    //'@storybook/addon-actions/register',
    //'@storybook/addon-links',
    '@storybook/addon-storysource'
    // '@storybook/addon-notes/register',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['react-babylonjs'] = path.resolve(__dirname, '../../dist/react-babylonjs');
    config.resolve.alias['@babylonjs/core'] = path.resolve(__dirname, '../../node_modules/@babylonjs/core');
    config.resolve.alias['@babylonjs/gui'] = path.resolve(__dirname, '../../node_modules/@babylonjs/gui');
    // config.module.rules.push({
    //   test: /\.stories\.jsx?$/,
    //   loaders: [require.resolve('@storybook/source-loader')],
    //   enforce: 'pre',
    // });
    // console.log(`added source loader to '${configType}' webpack config`);
    // Return the altered config
    return config;
  },
};
