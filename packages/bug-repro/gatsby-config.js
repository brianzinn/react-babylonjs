// const { handleCreateWebpackConfig } = require('transpile-ts-loader')

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: 'gatsby-remark-images',
          //   options: {
          //     maxWidth: 1035,
          //     sizeByPixelDensity: true,
          //   },
          // },
          // {
          //   resolve: 'gatsby-remark-copy-linked-files',
          // },
          {
            resolve: 'gatsby-mdx-codesandbox',
            options: {},
          },
        ],
      },
    },
  ],
}

// exports.onCreateWebpackConfig = (args) => {
//   handleOnCreateWebpackConfig(args)
// }
