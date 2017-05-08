import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/ClickMe.scss';

class ClickMe extends Component {
  render() {
    return (
      <div>
        <div className='click-me' onClick={() => this.props.clickMe('something')}>
          Click Me!
        </div>
        <p>value of placeholder: {this.props.value}</p>
      </div>
    );
  }
}

ClickMe.PropTypes = {
  clickMe: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default ClickMe;