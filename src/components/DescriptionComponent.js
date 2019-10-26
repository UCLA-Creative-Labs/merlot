import { Link } from 'gatsby';
import React from 'react';

import circles from '~/src/images/circles.png';
import cylinders from '~/src/images/cylinders.png';
import stars from '~/src/images/stars.png';

function getImg(index) {
  if (index == 0) {
    return circles;
  } else if (index == 1) {
    return cylinders;
  } else {
    return stars;
  }
}
function DescriptionComponent(props) {
  var linkHelper = '/' + props.title.toLowerCase() + '/';
  if (props.title == "Workshops") {
    linkHelper = '/events/';
  }
  return (
    <div className='description'>
      <div className='description_top'>
        <div className='description_text'>
          <h2>
            <Link className='h2' to={linkHelper}>{props.title}</Link>
          </h2>
        </div>
        <img src={getImg(props.index)} />
      </div>
      <p className='body1'>{props.description}</p>
    </div>
  );
}
export default DescriptionComponent;
