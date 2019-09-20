import { Link } from 'gatsby';
import React from 'react';

function HomeDescriptionComponent(props) {
  return (
    <div className='description_container'>
      <div className='description_top'>
        <h2>{props.title}</h2>
        <img src={props.img} />
      </div>
      <p className='body1'>{props.description}</p>
    </div>
  );
}
export default ProjectModalComponent;
