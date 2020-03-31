import './App.css';

import React, { Component } from 'react';

class Timer extends Component {

    state = {
        tempo: 0
    }

    componentDidMount = () => {
        setInterval(() => this.setState({
            tempo: new Date().toLocaleString
          }), 1000);
    }

    componentDidUpdate = (prevState) => {
        if(prevState.tempo !== this.state.tempo){
            console.log("o tempo mudou!")
        }
    }

        componentWillUnmount = () => {
        clearInterval(this.state.tempo)
    } 

    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default Timer