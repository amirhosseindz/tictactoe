import './App.css';

import React, {Component} from 'react';
import {Button} from 'reactstrap';
import _ from 'lodash';

import StartModal from './StartModal';
import Sq from './Sq';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.toggle = this.toggle.bind(this);
        this.handle = this.handle.bind(this);
        this.start = this.start.bind(this);
        this.setSqValue = this.setSqValue.bind(this);
    }

    getInitialState() {
        return {
            allSq: Array(9).fill(null),
            players: {
                X: '',
                O: ''
            },
            currPlayer: 'X',
            winner: null,
            started: false,
            modal: false
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handle(e) {
        let {players} = this.state;
        players[e.target.name] = e.target.value;
        this.setState({players});
    }

    start() {
        const {X, O} = this.state.players;
        this.setState({
            ...this.getInitialState(),
            players: {X, O},
            started: true
        });
    }

    setSqValue(value, i) {
        let {allSq, currPlayer, started} = this.state;

        if (value != null || !started)
            return;

        allSq[i] = currPlayer;
        currPlayer = currPlayer === 'X' ? 'O' : 'X';

        this.setState({allSq, currPlayer});
    }

    render() {
        const {allSq, modal, players, currPlayer, winner, started} = this.state;
        const {toggle, handle, start, setSqValue} = this;

        return (
            <div className="App">
                <Button outline color="white" onClick={toggle}>{started ? 'Reset' : 'Start'}</Button>

                <StartModal handle={handle} toggle={toggle} modal={modal} players={players} start={start}></StartModal>

                {started &&
                <div className="status">
                    <p><span>Current Player :</span> {players[currPlayer]} - {currPlayer}</p>
                    {winner &&
                    <p><span>Winner :</span> {players[currPlayer]} - {currPlayer}</p>}
                </div>}

                <table className="board d-flex justify-content-center">
                    <tbody>
                    {_.chunk(allSq.map((v, i) =>
                        <Sq key={i} value={v} i={i} onClick={setSqValue}></Sq>
                    ), 3)
                        .map((group, k) =>
                            <tr key={k}>{group}</tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
