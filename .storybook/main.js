const path = require('path');

module.exports = {
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-storysource/register',
    '@alisowski/storybook-addon-notes/register',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['react-babylonjs'] = path.resolve(__dirname, '../dist/react-babylonjs')

    config.module.rules.push({
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    });
    console.log(`added source loader to '${configType}' webpack config`);
    // Return the altered config
    return config;
  },
};
