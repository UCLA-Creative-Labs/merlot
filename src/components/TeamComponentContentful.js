import { Link } from 'gatsby';
import React from 'react';
import '../scss/team.scss';

function TeamComponent(props) {
  console.log(props);
  return (
    <div className='team_component'>
      <div className='team_card'>
        <img src={props.url} />
      </div>
      <div className='team_name'>
        <h3>
          {props.firstname} {props.lastname}
        </h3>
      </div>
    </div>
  );
}
export default TeamComponent;
