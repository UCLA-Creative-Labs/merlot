import { Link } from 'gatsby';
import React from 'react';
import '../../scss/main.scss';
import chevron from '~/src/images/chevron.png';

function ProjectQuarterSelector(props) {
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
