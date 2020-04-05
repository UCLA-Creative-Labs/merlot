import React from 'react';
import { Link } from 'gatsby';

import '../../scss/main.scss';
import '../../scss/modules/temporary.scss';
import { navigate } from '@reach/router';
//import {withRouter, BrowserRouter} from "react-router-dom"

class EggComponent extends React.Component {
  constructor(props) {
    super();
    this.egg = props.egg;
    this.state = { value: '' };
    this.domainURL = 'https://www.creativelabsucla.com/eggs/'
    this.domainURL = 'http://localhost:8000/eggs'
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();

    let userInput = String(this.state.value)
      .toLowerCase()
      .replace(/\s+/g, ''); //Remove spaces and make lowercase
    if (userInput != this.egg.password && this.egg.id != '') {
      alert('Nope try again. Hint: ' + this.egg.hint);
    } else {
      navigate(this.domainURL + this.egg.nextLevel);
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
          <img
            src={this.domainURL + this.egg.img}
            style={{ width: '30%', height: '25%' }}
          />
          <br />
          <p>{this.egg.caption}</p>
          {passwordForm}
        </center>
      </div>
    );
  }
}

export default EggComponent;
