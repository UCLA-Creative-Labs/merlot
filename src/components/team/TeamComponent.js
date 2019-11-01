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
import WebsiteIcon from '~/src/images/mail-icon.png';

function TeamComponent(props) {
  return (
    <div className='team_component'>
      <div className='team_card'>
        <img src={props.url} />
        <div className='back'>
          <div className='back_text'>
            <h3 className='subtitle'>{props.name}</h3>
            <p className='body1'>{props.description}</p>
          </div>
          <div className='team_socials'>
            <a href={props.website}>
              <img src={WebsiteIcon} />
            </a>
            <a href={props.instagram}>
              <img src={InstagramIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamComponent;
