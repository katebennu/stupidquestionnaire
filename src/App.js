import React, { Component } from 'react'
import Questions from './Questions';
import logo from './logo.jpg';
import './App.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randQuestion: Questions.getRandom()
        };
    };
    newQuestion(e) {
        this.setState({
            randQuestion: Questions.getRandom()
        });
        this.refs.myInput.value = '';
    };
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
                <QuestionLabel updValue={this.state.randQuestion} />
                <input type="text" ref="myInput" />
                <Button passClick={(e) => this.newQuestion(e)}/>
                <div className="Progress-bar">---progress bar---</div>
                <div id="container">bar here</div>

            </div>
        );
    }
}

var Button = React.createClass({
    handleClick: function() {
        this.props.passClick();
    },
    render: function() {
        return (
            <button onClick={this.handleClick} >Next</button>
        )
    }
});

var QuestionLabel = React.createClass({
    render: function() {
        return (<div>{this.props.updValue}</div>);
    }
});

export default App;
