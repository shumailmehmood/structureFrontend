import React from 'react';
import Button from "../CustomButton/CustomButton";
import { withRouter } from "react-router-dom"
const MiniTableButton = (props) => {
    return (
        <div>
            <Button type="button" onClick={props.handleClick} className="btn-fill"  >
                {props.text}<i className="fa fa-link"></i>
            </Button>
        </div>
    );
};

export default withRouter(MiniTableButton);