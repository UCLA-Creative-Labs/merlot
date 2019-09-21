import { Link } from 'gatsby';
import React from 'react';
import '../../scss/main.scss';
import ProjectComponent from '~/src/components/projects/ProjectComponent.js';

function ProjectQuarter(props) {
  return (
    <div className='project_quarter'>
      <ProjectComponent name={props.quarter} />
      <ProjectComponent name={props.quarter} />
      <ProjectComponent name={props.quarter} />
      <ProjectComponent name={props.quarter} />
      <ProjectComponent name={props.quarter} />
      <ProjectComponent name={props.quarter} />
      <ProjectComponent name={props.quarter} />
      <ProjectComponent name={props.quarter} />
    </div>
  );
}
export default ProjectQuarter;
