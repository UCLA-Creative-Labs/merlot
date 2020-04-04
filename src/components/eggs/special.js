import React from 'react';
import { Link } from 'gatsby';

import '../../scss/main.scss';
import '../../scss/modules/temporary.scss';
import { navigate } from '@reach/router';
//import {withRouter, BrowserRouter} from "react-router-dom"

class SpecialYolk extends React.Component {
  constructor(props) {
    super();
    console.log(props.egg);
    this.egg = props.egg;
    this.state = { value: '' };
  }

  render() {
    const innerStyle = {
      width: 'auto',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      paddingTop: '15%',
      margin: 'auto',
      'text-align': 'left',
      'z-index': '-1',
    };
    console.log('rendering' + this.egg.id);
    if (this.egg.id == 'levefdsal1') {
      console.log('speciS');
      return (
        <div>
          <div style={innerStyle}>
            <h3 style={{ 'text-align': 'left' }}>Rules:</h3>
            <ul>
              <li>1. No spaces</li>
            </ul>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default SpecialYolk;
