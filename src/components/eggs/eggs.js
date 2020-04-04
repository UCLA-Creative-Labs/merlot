import React from 'react';
import { Link } from 'gatsby';

import '../../scss/main.scss';
import '../../scss/modules/temporary.scss';
import { navigate } from '@reach/router';
//import {withRouter, BrowserRouter} from "react-router-dom"

class EggComponent extends React.Component {
  constructor(props) {
    super();
    console.log(props.egg);
    this.egg = props.egg;
    this.state = { value: '' };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();

    let userInput = String(this.state.value)
      .toLowerCase()
      .replace(/\s+/g, ''); //Remove spaces and make lowercase
      console.log(this.egg.nextLevel)
    if (userInput != this.egg.password) {
      alert('Nope try again. Hint: ' + this.egg.hint);
    } else {
      navigate('http://localhost:8000/eggs/' + this.egg.nextLevel);
    }
  };
  render() {
    let passwordForm = null;
    if (this.egg.password != '') {
      passwordForm = (
        <form>
          <label>
            password:{' '}
            <input
              type='text'
              value={this.state.value}
              onChange={event => {
                this.handleChange(event);
              }}
            />
          </label>

          <button type='submit' value='Submit' onClick={event => this.handleSubmit(event)}>
            Submit
          </button>
        </form>
      );
    }

    return (
      <div
        style={{
          width: 'auto',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: '5%',
          margin: 'auto',
          'text-align': 'center',
        }}
      >
        <h1>
          {this.egg.level}. {this.egg.title}
        </h1>
        <center>
          <img src={this.egg.img} style={{ width: '30%', height: '25%' }} />
          <br />
          <p>{this.egg.caption}</p>
          {passwordForm}
        </center>
      </div>
    );
  }
}

export default EggComponent;
