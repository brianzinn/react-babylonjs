const path = require('path');

// can add mdx now for Docs...
module.exports = {
    stories: ['../stories/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-docs',
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
