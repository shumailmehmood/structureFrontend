import React from 'react';
import { Form, Formik } from "formik";
// import * as Yup from "yup";
import {
    Grid,
    Col,
    Row,
    FormGroup,
    ControlLabel,
    FormControl, Modal
} from "react-bootstrap";
import _ from 'lodash'
import Button from "components/CustomButton/CustomButton.jsx";
import Radio from '../CustomRadio/CustomRadio';
import Card from '../Card/Card';
const CreateQuizForm = () => {
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    question: ''
                }}
                // validationSchema={validationSchema}
                onSubmit={async (values) => {

                }}
                render={({
                    touched,
                    errors,
                    values,
                    handleChange,
                    setFieldValue, submitForm

                }) => (
                        <div>
                            <Form>
                                <Row>
                                    <Card
                                        content={
                                            <div>
                                                <Row >
                                                    <Col md={2}>
                                                        <FormGroup >
                                                            <ControlLabel style={{ color: "black", fontWeight: 'bold' }}>
                                                                Question:
                                                            </ControlLabel>

                                                        </FormGroup>

                                                    </Col>
                                                    <Col md={10}></Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <FormGroup
                                                            validationState={
                                                                touched.question && errors.question ? (
                                                                    "error"
                                                                ) : (
                                                                        "success"
                                                                    )
                                                            }
                                                        >
                                                            <FormControl
                                                                placeholder={"Add a Question Here...."}
                                                                name="question"
                                                                value={values.question}
                                                                onChange={handleChange}
                                                            />
                                                            {touched.address &&
                                                                errors.address && (
                                                                    <small className="text-danger">
                                                                        {errors.address}
                                                                    </small>
                                                                )}
                                                        </FormGroup>

                                                    </Col>
                                                    <Col md={3}>
                                                        <Radio
                                                            number="5"
                                                            option="1"
                                                            name="radio"
                                                           
                                                            label="Checked"
                                                        />
                                                    </Col>
                                                    <Col md={3}>R2</Col>

                                                </Row>
                                            </div>
                                        }
                                    />

                                </Row>

                            </Form>
                        </div>
                    )}
            />
        </div>
    );
};

export default CreateQuizForm;