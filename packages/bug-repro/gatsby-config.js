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
          {
            resolve: 'remark-code-import',
          },
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
          // {
          //   resolve: 'gatsby-mdx-codesandbox',
          //   options: {},
          // },
        ],
      },
    },
  ],
}
