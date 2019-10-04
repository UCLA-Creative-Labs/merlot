import { Link } from 'gatsby';
import React from 'react';

import '../../scss/main.scss';
import ProjectModalComponent from '~/src/components/projects/ProjectModalComponent.js';
import placeholder from '~/src/images/placeholder.png';

function ProjectComponent(props) {
  return (
    <div>
      <Link
        to={'/projects/' + props.project.id}
        state={{
          modal: typeof window !== 'undefined' && window.innerWidth > 1024 ? true : false,
        }}
      >
        <div className='project_card'>
          <div className='title-box'>
            <div className='subtitle'>{props.project.projectTitle}</div>
          </div>
          <img src={props.project.photo.file.url} />
        </div>
      </Link>
    </div>
  );
}
export default ProjectComponent;
