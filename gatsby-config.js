module.exports = {
  siteMetadata: {
    title: `Creative Labs`,
    description: `Frontpage of Creative Labs.`,
    author: `@michaelnyu`,
  },
  plugins: [
    `gatsby-plugin-sass`,

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog-posts',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9936835svn0l`,
        accessToken: `GZ9uOrsdRZ_8vFVAmo-zn8N-MbQooRvm0RDolqtTpx8`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
