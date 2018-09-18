import './App.css';

import React, {Component} from 'react';
import {Button} from 'reactstrap';
import _ from 'lodash';

import StartModal from './StartModal';
import Sq from './Sq';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allSq: Array(9).fill('-'),
            players: {
                x: '',
                o: ''
            },
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.handle = this.handle.bind(this);
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

    render() {
        const {allSq, modal, players} = this.state;
        const {toggle, handle} = this;

        return (
            <div className="App">
                <Button outline color="white" onClick={toggle}>Start</Button>

                <StartModal handle={handle} toggle={toggle} modal={modal} players={players}></StartModal>

                <div className="status">
                    <p><span>Current Player :</span> Amir - X</p>
                    <p><span>Winner :</span> Ali - O</p>
                </div>

                <table className="board d-flex justify-content-center">
                    <tbody>
                    {_.chunk(allSq.map((v, k) =>
                        <Sq value={v} key={k}></Sq>
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
