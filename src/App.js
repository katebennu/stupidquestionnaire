import React, { Component } from 'react'
import Questions from './Questions';
import logo from './logo.jpg';
import './App.css';
//import './progress.js'



class App extends Component {
  render() {

    const questions = Questions;
    const randN = Math.floor(Math.random() * questions.length);
    const randQuestion = questions[randN];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Which Game of Thrones character are you?</h2>
        </div>
        <h3 className="App-intro">
         Answer a few questions and see the results!
        </h3>
          <p>{randQuestion}</p>
          <input/>
          <button>Send</button>
          <div id="container"></div>

      </div>
    );
  }
}





export default App;
