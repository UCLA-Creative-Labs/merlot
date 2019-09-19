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
import FacebookIcon from '~/src/images/facebook-icon.png';
import TwitterIcon from '~/src/images/twitter-icon.png';
import InstagramIcon from '~/src/images/instagram-icon.png';
import MediumIcon from '~/src/images/medium-icon.png';
import LinkedinIcon from '~/src/images/linkedin-icon.png';
import MailIcon from '~/src/images/mail-icon.png';

const content = {
  margin: `0 auto`,
  maxWidth: 1200,
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
            <div className='footer_social'>
              <a href='https://www.facebook.com/uclacreatives/'>
                <img src={FacebookIcon} />
              </a>
              <a href='https://www.instagram.com/creativelabsucla/'>
                <img src={InstagramIcon} />
              </a>
              <a href='https://medium.com/creative-labs'>
                <img src={MediumIcon} />
              </a>
              <a href='https://twitter.com/uclacreatives/'>
                <img src={TwitterIcon} />
              </a>
              <a href='https://www.linkedin.com/company/creativelabs-la/about/'>
                <img src={LinkedinIcon} />
              </a>
              <a href='mailto:uclacreatives@gmail.com'>
                <img src={MailIcon} />
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
