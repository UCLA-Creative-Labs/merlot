import { Link } from 'gatsby';
import React from 'react';
import '../../scss/main.scss';
import ProjectComponent from '~/src/components/projects/ProjectComponent.js';

function ProjectQuarter(props) {
  return (
    <div className='project_quarter'>
      {props.projects.map((edge, key) => {
        return <ProjectComponent project={edge.node} key={key} />;
      })}
    </div>
  );
}
export default ProjectQuarter;
