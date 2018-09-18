import React, {Component} from "react";
import {Button} from 'reactstrap';

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

export default Sq;