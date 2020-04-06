module.exports = {
  siteMetadata: {
    title: `Creative Labs`,
    description: `Frontpage of Creative Labs.`,
    author: `@michaelnyu`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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
        forceFullSync: true,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          style: {
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '200px',
              right: '200px',
              bottom: '40px',
              background: '#FFF6E5',
              overflow: 'hidden',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '80px',
              outline: 'none',
              padding: '0px',
              maxWidth: '975px',
              maxHeight: '780px',
            },
          },
        },
      },
    },
  ],
};
