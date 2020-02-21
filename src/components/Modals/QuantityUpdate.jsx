import React, { useState } from 'react';
import { Col, Row, Modal, FormGroup } from "react-bootstrap";
import Card from '../Card/Card';
const EditQuiz = (prop) => {

    return (
        <Modal show={prop.show} onHide={prop.handleClose} bsSize="lg">
            <Modal.Header className="mdhead" closeButton >
                <Modal.Title>Add Stock</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md="12">
                        <Row>
                            <Card
                                content={
                                    <Row>
                                        <Col md="1">
                                        </Col>
                                        <Col md="10">
                                            <FormGroup>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Quantity"
                                                />

                                            </FormGroup>
                                        </Col>
                                        <Col md="1">

                                        </Col>
                                    </Row>
                                }
                            />
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default EditQuiz;