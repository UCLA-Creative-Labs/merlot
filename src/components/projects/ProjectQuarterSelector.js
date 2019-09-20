import { Link } from 'gatsby';
import React from 'react';
import '../../scss/projects.scss';
import chevron from '~/src/images/chevron.png';

function ProjectQuarterSelector(props) {
  console.log(props.quarters);
  const onChange = e => {
    props.setSelectedValue(e.target.value);
  };
  return (
    <select className='dropdown subtitle' value={props.selectedValue} onChange={onChange}>
      {Object.keys(props.quarters).map(quarter => {
        return (
          <option key={quarter} value={quarter}>
            {props.quarters[quarter]}
          </option>
        );
      })}
    </select>
  );
}
export default ProjectQuarterSelector;
//   <div className='subtitle'>Spring 2019</div>
//   <img src={chevron} />
