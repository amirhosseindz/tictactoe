import React, {Component} from 'react';
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
                {this.state.allSq.map((v, k) => <Sq value={v} key={k}></Sq>)}
            </div>
        );
    }
}

export default App;
