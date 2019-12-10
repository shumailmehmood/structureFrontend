import React, { useState } from "react";
import useForm from "react-hook-form";
import Button from "../CustomButton/CustomButton.jsx";

import { Grid, Col, FormGroup, ControlLabel, Row, Form } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { createSubject } from '../../api/api';


const Subject = () => {    
    const [spinner, setSpinner] = useState(false);
    const { handleSubmit, register, errors } = useForm();


    const onSubmit = async (values) => {        
        setSpinner(true)
        let response = await createSubject(values.name);        
        if (response.error) {
            setSpinner(false)
        } else {
            alert('Success')
            setSpinner(false)
        }

    }
    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={6} >
                        <Col  >
                            <Card
                                title="Create Subject"
                                ctAllIcons
                                content={
                                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                                        <Button style={{ backgroundColor: '#0f4b5f' }} disabled={spinner} type="submit" fill wd>
                                            {spinner ? 'SUBMITTING....' : 'Proceed'}
                                            <i className={spinner ? 'fa fa-spin fa-spinner' : null} />
                                        </Button>
                                    </Form>
                                } />
                        </Col>

                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Subject;