import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

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
      </div>
    );
  }
}

export default App;
