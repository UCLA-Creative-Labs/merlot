import { Link } from 'gatsby';
import React from 'react';

import '../../scss/main.scss';
import ProjectModalComponent from '~/src/components/projects/ProjectModalComponent.js';
import placeholder from '~/src/images/placeholder.png';

function ProjectComponent(props) {
  return (
    <div>
      <Link
        to='/project/'
        state={{
          modal: true,
        }}
      >
        <div className='project_card'>
          <div className='title-box'>
            {console.log(props.name)}
            <div className='subtitle'>{props.name}</div>
          </div>
          <img src={placeholder} />
        </div>
      </Link>
    </div>
  );
}
export default ProjectComponent;
