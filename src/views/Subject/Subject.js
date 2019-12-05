import React, { useState } from "react";
import useForm from "react-hook-form";
import Button from "../../components/CustomButton/CustomButton.jsx";

import { Grid, Col, FormGroup, ControlLabel, Row, Form } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { createSubject } from '../../api/api';


const Subject = () => {
    const [serverError, setServerError] = useState();
    const { handleSubmit, register, errors } = useForm();


    const onSubmit = async (values) => {
        setServerError(null);
        let response = await createSubject(values.name);
        console.log(response);
        if (response.error) {
            setServerError(response.error.response.data.message);
        } else {
            alert('Success')
        }

    }
    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={6} >
                        <Col  >
                            <Card
                                title="Subject"
                                ctAllIcons
                                content={
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <small className="text-danger">{serverError || null}</small>
                                  
                                        <FormGroup
                                            validationState={errors.name && errors.name.message ? "error" : "success"}
                                        >
                                            <ControlLabel>Password</ControlLabel>
                                            <input
                                                name="name"
                                                ref={register({
                                                    required: 'Required',

                                                })}
                                                placeholder="Enter your Subject Name"
                                                className="form-control"
                                            />

                                            {(errors.password && errors.password.message) && <small className="text-danger">{errors.password && errors.password.message}</small>}
                                        </FormGroup>
                                        <Button type="submit">Submit</Button>
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