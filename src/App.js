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
    newQuestion(e) {
        const newCount = this.state.count+1;
        var newProgress = this.state.progress;
        //voodo magic here, but basically slowing down progress bar so it never reach end
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
                <QuestionLabel updValue={this.state.randQuestion} />
                <input type="text" ref="myInput" />
                <Button passClick={(e) => this.newQuestion(e)}/>
                <ProgressBarLine updValue={this.state.progress} />


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
            <button onClick={this.handleClick} >Next</button>
        )
    }
});

const QuestionLabel = React.createClass({
    render: function() {
        return (<div>{this.props.updValue}</div>);
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
            to: {color: '#ED6A5A'}/*,
            step: (state, bar) => {
                bar.path.setAttribute('stroke', state.color);
            }*/
        };
        const containerStyle = {
            width: '400px',
            height: '20px'
        };
        return (
            <ProgressBar.Line
                progress={this.props.updValue}
                options={options}
                initialAnimate={true}
                containerStyle={containerStyle}
                containerClassName={'.progressbar'} />
        );
    }
});

export default App;
