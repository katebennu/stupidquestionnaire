import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
//import './progress.js'
import ProgressBar from '../node_modules/progressbar.js';
// var ProgressBar = require('progressbar.js');


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Which Game of Thrones character are you?</h2>
        </div>
        <h3 className="App-intro">
         Answer a few questions and see the results!
        </h3>
          <p>Questions shall appear here</p>
          <input/>
          <button>Totally!</button>
          <div className="Progress-bar">---progress bar---</div>
          <div id="container">bar here</div>

      </div>
    );
  }
}

var container = document.getElementById('container');

var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    }
});

bar.animate(0.7);

export default App;
