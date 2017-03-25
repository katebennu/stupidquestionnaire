import React, { Component } from 'react';
import Questions from './Questions';
import logo from './logo.jpg';
import './App.css';
import ProgressBar from 'react-progressbar.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randQuestion: Questions.getRandom(),
            count: 0,
            progress: 0
        };
    };
    skipQuestion(e) {
        this.setState({
            randQuestion: Questions.getRandom()
        });
        this.refs.myInput.value = '';
    }
    newQuestion(e) {
        const newCount = this.state.count+1;
        var newProgress = this.state.progress;
        //voodoo magic here, but basically slowing down progress bar so it never reach end
        if (newCount<8) {
            newProgress = newProgress+0.1;
        } else if (newCount<20){
            newProgress = newProgress+(1-newProgress)/4;
        }
        this.setState({
            randQuestion: Questions.getRandom(),
            count: newCount,
            progress: newProgress
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
                <div className="Question">
                    <ProgressBarLine updValue={this.state.progress} />
                    <QuestionLabel updValue={this.state.randQuestion} />
                    <input type="text" ref="myInput" className="inputAnswer"/>
                    <div className="buttons">
                        <Button btnLabel="skip question" passClick={(e) => this.skipQuestion(e)}/>
                        <Button btnLabel="next question" passClick={(e) => this.newQuestion(e)}/>
                    </div>
                    <div><p>You could skip a question, but it will not progress forward.</p></div>
                </div>
            </div>
        );
    }
}

const Button = React.createClass({
    handleClick: function() {
        this.props.passClick();
    },
    render: function() {
        return (
            <button className="rightButton" onClick={this.handleClick} >{this.props.btnLabel}</button>
        )
    }
});

const QuestionLabel = React.createClass({
    render: function() {
        return (<h2>{this.props.updValue}</h2>);
    }
});

const ProgressBarLine = React.createClass({
    render: function() {
        const options = {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'},
            from: {color: '#FFEA82'},
            to: {color: '#ED6A5A'}
        };
        const containerStyle = {
            width: '50%',
            margin: 'auto'
        };
        return (
            <ProgressBar.Line
                progress={this.props.updValue}
                options={options}
                initialAnimate={true}
                containerStyle={containerStyle} />
        );
    }
});

export default App;
