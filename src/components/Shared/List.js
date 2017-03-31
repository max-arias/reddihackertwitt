import React, { Component } from 'react';

import './List.css';

class List extends Component {
  render() {
    if (!this.props.data) {
        return (
          <div className="list">
            <h2>No stories!</h2>
          </div>
        );
    }
    return (
        <div className="list">
          <ul className="stories">
            {
            this.props.data.map(function(story) {
              
              if(!story.img || !story.img.includes('http')) {
                story.img = 'http://placehold.it/50x50';
              }
              
              return (
                <li key={story.id}>
                  <div className="image">
                    <a href={story.img_url} target="_blank"><img src={story.img} width="50" alt=""/></a>
                  </div>
                  <div className="extraData">
                    <a className="storyLink" href={story.host + story.url} target="_blank">{story.title}</a>
                    <span className="dateCreated">{story.date_created}</span>
                  </div>
                </li>
              )
            })
            }
          </ul>
        </div>
    );
  }
}

export default List;
