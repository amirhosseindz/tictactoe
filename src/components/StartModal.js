import React, {Component} from "react";
import {Button, Modal, ModalBody, ModalHeader, ModalFooter, Input} from 'reactstrap';

class StartModal extends Component {
    render() {
        const {toggle, handle, modal, players, start} = this.props;

        return (
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Enter Players' Names</ModalHeader>
                <ModalBody>
                    <Input name="X" placeholder="X" onChange={handle} value={players.X}/>
                    <br/>
                    <Input name="O" placeholder="O" onChange={handle} value={players.O}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={start}>Go!</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default StartModal;