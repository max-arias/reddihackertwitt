import React, { Component } from 'react';
import axios from 'axios'
import _ from 'lodash'
import { convertDataForList} from '../../utils';

import logo from './Logo.png'
import './Reddit.css';

import List from '../Shared/List'

class Reddit extends Component {

  constructor(props) { //Instead of getInitialState, we set the values in the construct
    super(props);
    this.state = {
      popularStories: []
    };
  }
  querySubreddit(subreddit) {
    let _this = this;
    axios
      .get(`https://www.reddit.com/r/${subreddit}/.json`)
      .then(function(result) {    
        let subStories = _.get(result, ['data', 'data', 'children'], false);
        if(subStories && subStories.length) {
          _this.setState({
            'subStories': convertDataForList(subStories, 'reddit')
          });
        }
      });
  }
  componentDidMount() {    
    this.querySubreddit('popular');   
  }

  render() {
    return (
      <div className="Reddit">
        <div className="header">
          <div className="image">
            <img className="RedditLogo" src={logo} alt="Reddit Logo"/>
          </div>
          <div className="subreddits">
            <a href="#">Front</a>
            &nbsp;|&nbsp;
            <a href="#">All</a>
            &nbsp;|&nbsp;
            <a href="#">Popular</a>
            &nbsp;-&nbsp;
            <div className="searchSub">
              <input type="text" placeholder="Load subreddit..."/>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          
        </div>
        <div className="content">
          <List data={this.state.subStories}/>
        </div>
      </div>
    );
  }
}

export default Reddit;
