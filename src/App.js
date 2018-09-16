import React, {Component} from 'react';
import _ from 'lodash/core';
import './App.css';

class Sq extends Component {
    render() {
        return (
            <div className="sq">{this.props.value}</div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allSq : Array(9).fill('-')
        };
    }

    render() {
        return (
            <div className="App">
                {_.chunk(this.state.allSq.map((v, k) => {
                    <Sq value={v} key={k}></Sq>
                }), 3).map(group => {
                    <div className="row">{group}</div>
                })}
            </div>
        );
    }
}

export default App;
