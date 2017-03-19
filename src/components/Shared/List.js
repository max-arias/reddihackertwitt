import React, { Component } from 'react';

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
                  <a href={story.img_url} target="_blank">{img}</a>
                  <a href={story.host + story.url} target="_blank">{story.title}</a>                  
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
