module.exports = {
    stories: ['../stories/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.stories\.jsx?$/,
            loaders: [require.resolve('@storybook/source-loader')],
            enforce: 'pre',
          });
        console.log('added source loader to webpack config')
        // Return the altered config
        return config;
    },
};