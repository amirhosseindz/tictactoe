import React, {Component} from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap';
import _ from 'lodash';
import './App.css';

class Sq extends Component {
    render() {
        return (
            <td>
                <Button outline color="warning" className="sq">
                    {this.props.value}
                </Button>
            </td>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allSq: Array(9).fill('-'),
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const {toggle} = this;
        const {allSq, modal} = this.state;

        return (
            <div className="App">
                <Button outline color="white" onClick={toggle}>Start</Button>

                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Enter Players' Names</ModalHeader>
                    <ModalBody>
                        <Input placeholder="X" />
                        <br />
                        <Input placeholder="O" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Go!</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

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
