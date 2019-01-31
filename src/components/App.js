import './App.css';

import React, {Component} from 'react';
import {Button} from 'reactstrap';

import StartModal from './StartModal';
import Sq from './Sq';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            allSq: Array(3).fill(null).map(() => Array(3).fill(null)),
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

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    handle = (e) => {
        let {players} = this.state;
        players[e.target.name] = e.target.value;
        this.setState({players});
    };

    start = () => {
        const {X, O} = this.state.players;
        this.setState({
            ...this.getInitialState(),
            players: {X, O},
            started: true
        });
    };

    setSqValue = (value, i, j) => {
        let {allSq, currPlayer, started, winner} = this.state;

        if (value || !started || winner)
            return;

        allSq[i][j] = currPlayer;

        if (this.checkWinner(allSq, currPlayer))
            this.setState({winner: currPlayer});
        else {
            currPlayer = currPlayer === 'X' ? 'O' : 'X';
            this.setState({allSq, currPlayer});
        }
    };

    checkWinner(allSq, player, n = 3) {
        let diagonalSums = new Array(2).fill(0);
        let columnSums = new Array(n).fill(0);
        let rowSum = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (allSq[i][j] === player) {
                    rowSum++;
                    columnSums[j]++;
                    if (i === n - 1 && columnSums[j] === n) {
                        return true;
                    }
                    if (i === j) {
                        diagonalSums[0]++;
                        if (i === n - 1 && diagonalSums[0] === n) return true;
                    }
                    if (i === n - 1 - j) {
                        diagonalSums[1]++;
                        if (j === 0 && diagonalSums[1] === n) return true;
                    }
                }
            }
            if (rowSum === n) return true;
            else rowSum = 0;
        }
    }

    render() {
        const {allSq, modal, players, currPlayer, winner, started} = this.state;
        const {toggle, handle, start, setSqValue} = this;

        return (
            <div className="App">
                <Button color="warning" onClick={toggle}>{started ? 'Reset' : 'Start'}</Button>

                <StartModal handle={handle} toggle={toggle} modal={modal} players={players} start={start}></StartModal>

                {started &&
                <div className="status">
                    {winner ? (
                        <p><span>Winner :</span> {players[currPlayer]} - {currPlayer}</p>
                    ) : (
                        <p><span>Current Player :</span> {players[currPlayer]} - {currPlayer}</p>
                    )}
                </div>}

                <table className="board d-flex justify-content-center">
                    <tbody>
                    {allSq.map((rowSq, i) =>
                        <tr key={i}>{rowSq.map((oneSq, j) =>
                            <Sq key={j} value={oneSq} i={i} j={j} onClick={setSqValue}></Sq>
                        )}</tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
