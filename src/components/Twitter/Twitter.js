import React, { Component } from 'react';
import logo from './Logo.png'
import './Twitter.css';

class Twitter extends Component {
  render() {
    return (
      <div className="Twitter">
        <div className="header">
          <img className="TwitterLogo" src={logo} alt="Twitter Logo"/>
          <h1>Twitter!</h1>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sunt nostrum voluptatem velit eum sapiente laudantium, enim veniam vel numquam beatae repellendus. Laudantium fugiat distinctio modi, cupiditate necessitatibus asperiores corporis.
        </div>
      </div>
    );
  }
}

export default Twitter;
