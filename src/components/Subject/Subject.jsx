import React, { useState } from "react";
import useForm from "react-hook-form";
import Button from "../CustomButton/CustomButton.jsx";
import { Modal } from 'react-bootstrap';
import { Grid, Col, FormGroup, ControlLabel, Row, Form } from "react-bootstrap";
import { createSubject } from '../../api/api';


const Subject = (props) => {
    const [spinner, setSpinner] = useState(false);
    const { handleSubmit, register, errors } = useForm();


    const onSubmit = async (values) => {
        setSpinner(true)
        let response = await createSubject(values.name);
        if (response.error) {
            setSpinner(false)
            props.handleClose()
        } else {
            setSpinner(false)
            props.handleClose()
        }

    }
    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={6} >
                        <Col  >
                            <Modal show={props.show} onHide={props.handleClose}>
                               
                                        <Form onSubmit={handleSubmit(onSubmit)}>
                                            <Modal.Header closeButton className="mdhead" style={{ backgroundColor: '#0F4B5F', color: '#E1FADF' }}>
                                                <Modal.Title><center>Add Subject</center></Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <FormGroup
                                                    validationState={errors.name && errors.name.message ? "error" : "success"}
                                                >
                                                    <ControlLabel>Subject</ControlLabel>
                                                    <input
                                                        name="name"
                                                        ref={register({
                                                            required: 'Required',

                                                        })}
                                                        placeholder="Enter your Subject Name"
                                                        className="form-control"
                                                    />

                                                    {(errors.name && errors.name.message) && <small className="text-danger">{errors.name && errors.name.message}</small>}
                                                </FormGroup>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button style={{ backgroundColor: '#0f4b5f' }} disabled={spinner} type="submit" fill wd>
                                                    {spinner ? 'SUBMITTING....' : 'Add'}
                                                    <i className={spinner ? 'fa fa-spin fa-spinner' : null} />
                                                </Button>
                                            </Modal.Footer>
                                        </Form>                            
                            </Modal>
                        </Col>

                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Subject;