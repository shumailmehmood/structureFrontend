import React, { useState } from 'react';
import { Col, Row, Modal, FormGroup } from "react-bootstrap";
import Card from '../Card/Card';
import Button from "components/CustomButton/CustomButton";
import { UPDATE_STOCK_BTN_NAME } from "../../misc/constants";
const EditQuiz = (prop) => {
    const [loading, setLoading] = useState(false)
    return (
        <Modal show={prop.show} onHide={prop.handleClose} bsSize="lg">
            <Modal.Header className="mdhead" closeButton >
                <Modal.Title>Add Stock</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md="1"></Col>
                    <Col md="10">
                        <Row>
                            <Card
                                content={
                                    <Row>
                                        <Col md="1">
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <input
                                                    type="number"
                                                    placeholder="Enter Quantity"
                                                    className={"form-control"}
                                                />

                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <Button type="submit" className="btn-fill" onClick={() => setLoading(true)} >
                                                {loading ? <div><span>loading...</span><i className="fa fa-spin fa-spinner" /></div> : UPDATE_STOCK_BTN_NAME}
                                            </Button>
                                        </Col>
                                        <Col md="1">

                                        </Col>
                                    </Row>
                                }
                            />
                        </Row>
                    </Col>
                    <Col md="1"></Col>

                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default EditQuiz;