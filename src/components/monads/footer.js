import { Link } from 'gatsby';
import React from 'react';
import '../../scss/main.scss';
import FacebookIcon from '~/src/images/facebook-icon.png';
import TwitterIcon from '~/src/images/twitter-icon.png';
import InstagramIcon from '~/src/images/instagram-icon.png';
import MediumIcon from '~/src/images/medium-icon.png';
import LinkedinIcon from '~/src/images/linkedin-icon.png';
import MailIcon from '~/src/images/mail-icon.png';

const Footer = ({ siteTitle }) => (
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
);

export default Footer;
