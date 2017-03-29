import React, { Component } from 'react';

import 'flexboxgrid/dist/flexboxgrid.min.css';
import './assets/ep_naturalblack.png'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import Reddit from './components/Reddit/Reddit'
import HackerNews from './components/HackerNews/HackerNews'
import Twitter from './components/Twitter/Twitter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4 appContainer"><Reddit /></div>
          <div className="col-xs-12 col-md-6 col-lg-4 appContainer"><HackerNews /></div>
          <div className="col-xs-12 col-md-6 col-lg-4 appContainer"><Twitter /></div>
        </div>
      </div>
    );
  }
}

export default App;
