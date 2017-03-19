import React, { Component } from 'react';
import logo from './Logo.png'
import './HackerNews.css';

class HackerNews extends Component {
  render() {
    return (
      <div className="HackerNews">

        <div className="HackerNewsHeader">
          <div className="row middle-xs">
            <div className="col-xs">
              <a href="#home"><img className="HackerNewsLogo" src={logo} alt="Hacker News Logo"/>Hacker News</a>
            </div>
            <div className="col-xs">
              <a href="#new">new</a>
            </div>
            <div className="col-xs">
              <a href="#threads">threads</a>
            </div>
            <div className="col-xs">
              <a href="#comments">comments</a>
            </div>
            <div className="col-xs">
              <a href="#show">show</a>
            </div>
            <div className="col-xs">
              <a href="#ask">ask</a>
            </div>
            <div className="col-xs">
              <a href="#jobs">jobs</a>
            </div>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sunt nostrum voluptatem velit eum sapiente laudantium, enim veniam vel numquam beatae repellendus. Laudantium fugiat distinctio modi, cupiditate necessitatibus asperiores corporis.
        </div>
      </div>
    );
  }
}

export default HackerNews;
