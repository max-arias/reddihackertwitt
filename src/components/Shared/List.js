import React, { Component } from 'react';

import './List.css';

class List extends Component {
  render() {
    console.log(this.props.data)
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
              let img = story.img ? <img src={story.img} width="50" alt=""/> : ''
              return (
                <li key={story.id}>
                  <div className="image">
                    <a href={story.img_url} target="_blank">{img}</a>
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
