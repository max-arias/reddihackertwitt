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
      subStories: [],
      subredditInput: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      subredditInput: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.querySubreddit(this.state.subredditInput);
    }
  }

  querySubreddit(subreddit) {
    let _this = this;
    let subredditUrl = subreddit ? `https://www.reddit.com/r/${subreddit}/.json` : 'https://www.reddit.com/.json';
    
    this.setState({subStories: []});
    
    try {
      axios
        .get(subredditUrl)
        .then(function(result) {
          let subStories = _.get(result, ['data', 'data', 'children'], false);
          if(subStories && subStories.length) {
            _this.setState({
              'subStories': convertDataForList(subStories, 'reddit')
            });
          }
        });
    } catch(e) {
      console.log(e)
    }
  }

  componentDidMount() {    
    this.querySubreddit('popular');   
  }

  render() {
    return (
      <div className="Reddit">
        <div className="header">
          <div className="image">
            <a href="https://www.reddit.com" target="_blank">
              <img className="RedditLogo" src={logo} alt="Reddit Logo"/>
            </a>
          </div>
          <div className="subreddits">
            <a href="#" onClick={() => this.querySubreddit('')}>Front</a>
            &nbsp;|&nbsp;
            <a href="#" onClick={() => this.querySubreddit('all')}>All</a>
            &nbsp;|&nbsp;
            <a href="#" onClick={() => this.querySubreddit('popular')}>Popular</a>
            &nbsp;-&nbsp;
            <div className="searchSub">
              <input type="text" placeholder="Load subreddit..." onChange={this.handleInputChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
              <i className="fa fa-search" aria-hidden="true" onClick={() => this.querySubreddit(this.state.subredditInput)}></i>
            </div>
          </div>
          
        </div>
        <div className="content">
          
          { 
          this.state.subStories.length ?
            <List data={this.state.subStories}/>
          :
            <div className="loadingContainer">
              <h2>Loading <span>.</span><span>.</span><span>.</span></h2>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Reddit;
