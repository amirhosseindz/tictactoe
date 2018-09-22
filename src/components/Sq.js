import React, {Component} from "react";
import {Button} from 'reactstrap';

class Sq extends Component {
    render() {
        const {value, i, j, onClick} = this.props;

        return (
            <td>
                <Button outline color="warning" className="sq" onClick={() => onClick(value, i, j)}>
                    {value}
                </Button>
            </td>
        );
    }
}

export default Sq;