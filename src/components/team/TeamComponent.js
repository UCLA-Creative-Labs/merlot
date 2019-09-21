import { Link } from 'gatsby';
import React from 'react';
import '../../scss/main.scss';
import { useRef, useState, useEffect } from 'react';

//images
import FacebookIcon from '~/src/images/facebook-icon.png';
import TwitterIcon from '~/src/images/twitter-icon.png';
import InstagramIcon from '~/src/images/instagram-icon.png';
import MediumIcon from '~/src/images/medium-icon.png';
import LinkedinIcon from '~/src/images/linkedin-icon.png';
import MailIcon from '~/src/images/mail-icon.png';

function TeamComponent(props) {
  return (
    <div className='team_component'>
      <div className='team_card'>
        <div className='front'>
          <img src={props.url} />
        </div>
        <div className='back'>
          <h3 className='subtitle'>{props.name}</h3>
          <p className='body1'>{props.description}</p>
          <div className='team_links'>
            <a href='https://creativelabsucla.com'>
              <img src={MailIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamComponent;
