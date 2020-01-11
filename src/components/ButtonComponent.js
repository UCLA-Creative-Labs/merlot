import React from 'react';

function ButtonComponent(props) {
  return (
    <div className='button_container'>
      <a href={props.link} className='button_link'>
        <h3>{props.text}</h3>
      </a>
    </div>
  );
}
export default ButtonComponent;
