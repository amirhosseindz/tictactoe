import React, {Component} from "react";
import {Button, Modal, ModalBody, ModalHeader, ModalFooter, Input} from 'reactstrap';

class StartModal extends Component {
    render() {
        const {toggle, handle, modal, players} = this.props;

        return (
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Enter Players' Names</ModalHeader>
                <ModalBody>
                    <Input name="x" placeholder="X" onChange={handle} value={players.x}/>
                    <br/>
                    <Input name="o" placeholder="O" onChange={handle} value={players.o}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go!</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default StartModal;