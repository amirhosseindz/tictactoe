import React from "react";
import {Button} from 'reactstrap';

function Sq(props) {
    const {value, i, j, onClick} = props;

    return (
        <td>
            <Button outline color="warning" className="sq" onClick={() => onClick(value, i, j)}>
                {value}
            </Button>
        </td>
    );
}

export default Sq;
