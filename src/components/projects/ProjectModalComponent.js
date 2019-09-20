import { Link } from 'gatsby';
import React from 'react';
import '../../scss/projects.scss';

function ProjectModalComponent(props) {
  return (
    <div className='modal-container'>
      <img src={props.img} />
      <div className='subtitle'>{props.quarter}</div>
      <h1>{props.title}</h1>
      <p className='body1'>{props.description}</p>
      <a href={props.link} className='button'>
        Link to Demo
      </a>
    </div>
  );
}
export default ProjectModalComponent;
