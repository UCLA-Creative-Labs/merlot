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
        spaceId: `mox6p4rg5oof`,
        accessToken: `kEhWTP07K1zUky0t2V798lSIlXAMAdAx5oYoB0RRj9Q`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
