import { Link } from 'gatsby';
import React from 'react';
import '../../scss/projects.scss';
import chevron from '~/src/images/chevron.png';
function ProjectQuarterSelector(props) {
  return (
    <div className='dropdown'>
      <div className='subtitle'>Spring 2019</div>
      <img src={chevron} />
    </div>
  );
}
export default ProjectQuarterSelector;
