import { Link } from 'gatsby';
import React from 'react';
import '../../scss/projects.scss';
import ProjectComponent from '~/src/components/projects/ProjectComponent.js';

function ProjectQuarter(props) {
  return (
    <div className='project_quarter'>
      <ProjectComponent name='Test Project' />
    </div>
  );
}
export default ProjectQuarter;
