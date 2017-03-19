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

  componentDidMount() {
    let _this = this;
    axios
    .get("https://www.reddit.com/r/popular/.json")
    .then(function(result) {    
      let popularStories = _.get(result, ['data', 'data', 'children'], false);
      if(popularStories) {
        _this.setState({
          'popularStories': convertDataForList(popularStories, 'reddit')
        });
      }
    });
  }

  render() {
    return (
      <div className="Reddit">
        <div className="header">
          <img className="RedditLogo" src={logo} alt="Reddit Logo"/>
          <h1>Reddit!</h1>
        </div>
        <div className="content">
          <List data={this.state.popularStories}/>
        </div>
      </div>
    );
  }
}

export default Reddit;
