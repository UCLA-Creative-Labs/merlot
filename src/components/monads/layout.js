/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';

const content = {
  margin: `0 auto`,
  maxWidth: 1120,
  padding: 80,
  paddingTop: 0,
};

const styles = {
  content,
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div css={styles.content}>
          <main>{children}</main>
          <footer>
            <div class='footer_social'>
              <a href='https://www.facebook.com/uclacreatives/'>
                <img src='~/src/images/facebook-icon.png' />
              </a>
              <a href='https://www.facebook.com/uclacreatives/'>
                <img src='../../images/instagram-icon.png' />
              </a>
              <a href='https://www.facebook.com/uclacreatives/'>
                <img src='../../images/twitter-icon.png' />
              </a>
              <a href='https://www.facebook.com/uclacreatives/'>
                <img src='../../images/medium-icon.png' />
              </a>
            </div>
            © {new Date().getFullYear()}, Built with love
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
