import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import "../../../assets/css/style.css";
import {
    Alert,
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";
class CopyButton extends Component {
    state = {
        show: false
    };
    render() {
        const { messageBody, tooltip } = this.props;
        let alert = "";
        if (this.state.show) {
            alert = (
                <Alert
                    style={{
                        backgroundColor: "#D4EDDA",
                        color: "#155724",
                        width: "80px",
                        float: "right",
                        marginTop: "-60px"
                    }}
                    variant="success"
                >
                    Copied!
        </Alert>
            );
        }
        return (
            <div>
                {alert}
                <CopyToClipboard text={messageBody}>
                    <OverlayTrigger
                        overlay={<Tooltip id="tooltip-disabled">{tooltip}</Tooltip>}
                    >
                        <button type="button"
                            onClick={() =>
                                this.setState({ show: !this.state.show }, () =>
                                    setTimeout(
                                        () => this.setState({ show: !this.state.show }),
                                        2000
                                    )
                                )}
                            className="copyButton"
                        >
                            <i className="fa fa-clipboard" aria-hidden="true" />
                        </button>
                    </OverlayTrigger>
                </CopyToClipboard>
            </div>
        );
    }
}

export default CopyButton;
