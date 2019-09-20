import { Link } from 'gatsby';
import React from 'react';
import '../../scss/projects.scss';
import ProjectModalComponent from '~/src/components/projects/ProjectModalComponent.js';
import placeholder from '~/src/images/placeholder.png';
function ProjectComponent(props) {
  return (
    <div className='project_card'>
      <div className='title-box'>
        <div className='subtitle'>{props.name}</div>
      </div>
      <img src={placeholder} />
    </div>
  );
}
export default ProjectComponent;
