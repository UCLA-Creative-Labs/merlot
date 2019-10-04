import React from 'react';

import "../../scss/main.scss";
import "../../images/Button/Primary/Apply (scale).png"

import circles from '~/src/images/circles.png';
import cylinders from '~/src/images/cylinders.png';
import stars from '~/src/images/stars.png';

function getImg(index) {
  if (index == 1) {
    return circles;
  } else if (index == 2) {
    return cylinders;
  } else {
    return stars;
  }
}
function ApplyComponent(props) {
  return (
    <div className='description'>
      <div className='description_top'>
        <div className='description_text'>
          <h2>{props.title}</h2>
        </div>
        <img src={getImg(props.index)} />
      </div>
      <p className='body1'>{props.description}</p>
      <br/>
      <a href={props.appLink}>
        <img className="positionButton" src={require('../../images/Button/Primary/Apply (scale).png')} />
      </a>
    </div>
  );
}
export default ApplyComponent;
