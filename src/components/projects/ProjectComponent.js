import { Link } from 'gatsby';
import React from 'react';

import '../../scss/projects.scss';
import ProjectModalComponent from '~/src/components/projects/ProjectModalComponent.js';
import placeholder from '~/src/images/placeholder.png';

function ProjectComponent(props) {
  const [modalState, setModalState] = React.useState(false);
  function openModal(e) {
    setModalState(!modalState);
  }

  return (
    <div>
      <ProjectModalComponent active={modalState} />
      <div className='project_card' onClick={openModal}>
        <div className='title-box'>
          {console.log(props.name)}
          <div className='subtitle'>{props.name}</div>
        </div>
        <img src={placeholder} />
      </div>
    </div>
  );
}
export default ProjectComponent;
