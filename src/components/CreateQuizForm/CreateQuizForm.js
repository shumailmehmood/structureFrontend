import React, { useState } from 'react';

import {
    Col,
    Row,
    FormGroup,
    ControlLabel,
    // FormControl
} from "react-bootstrap";
import _ from 'lodash'
import Button from "components/CustomButton/CustomButton.jsx";
import Radio from '../CustomRadio/CustomRadio';
import Card from '../Card/Card';
import useForm from 'react-hook-form';
import "../../assets/css/light-bootstrap-dashboard-pro-react.css"
import { withRouter } from "react-router-dom";
import { createQuiz } from "../../api/api";
function CreateQuizForm(prop) {
    const [indexes, setIndexes] = useState([0]);
    const [options, setOptions] = useState([0, 1, 2, 3]);
    const [indexCounter, setIndexCounter] = useState(1);
    const {
        register,
        handleSubmit,
        unregister,
        formState: { dirty },
    } = useForm();
    React.useEffect(() => {
        console.log("Props", prop);
    }, [])
    const onSubmit = async (data) => {
        data.questions.forEach((rowOuter) => {
            rowOuter.answer = _.get(data, rowOuter.answer)
            return data
        })
        let submitData = {
            level: prop.location.state.level,
            questions: data.questions,
            subject: prop.location.state.subject
        };
        let response = await createQuiz(submitData);
        console.log("Response", response);

    };
    const addQuestion = () => {
        setIndexes(prevIndexes => [...prevIndexes, indexCounter]);
        setIndexCounter(prevCounter => prevCounter + 1);
    };

    const removeQuestion = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        const fieldName = `qustions[${index}]`;
        unregister(`${fieldName}.question`);
        setIndexCounter(prevCounter => prevCounter - 1);
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={9}></Col>
                <Col md={2}>
                    <Button type="button" onClick={addQuestion}>
                        Add Question
                   </Button>
                </Col>
                <Col md={1}></Col>
            </Row>
            {indexes.map((index, k) => {
                const fieldName = `questions[${index}]`;
                return (
                    <div key={k}>
                        <br />
                        <Card
                            content={
                                <fieldset name={fieldName} key={fieldName}>
                                    <Row>
                                        <Row>
                                            <Col md={10}>
                                                <ControlLabel><b>Question {index + 1}:</b></ControlLabel>
                                            </Col>
                                            <Col md={2}>
                                                <Button type="button" onClick={removeQuestion(index)}>
                                                    Remove
                                              </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={1}></Col>
                                            <Col md={7}>
                                                <FormGroup
                                                // validationState={errors.name && errors.name.message ? "error" : "success"}
                                                >
                                                    <input
                                                        type="text"
                                                        name={`${fieldName}.question`}
                                                        ref={register({ required: true, validate: value => value !== "" })}
                                                        className={"form-control"}
                                                    />

                                                    {/* {errors.name && <small className="text-danger">{errors.name}</small>} */}
                                                </FormGroup>
                                            </Col>
                                            <Col md={4}>
                                                <Radio
                                                    number="14"
                                                    option="2"
                                                    name="radio"
                                                    // onChange={this.handleRadio}
                                                    defaultChecked={true}
                                                    label="Multiple Choice"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            {
                                                options.map((row, i) => {
                                                    const option = `${fieldName}.options[${row}]`
                                                    return (
                                                        <Row key={i}>
                                                            <Col md={1}></Col>
                                                            <Col md={6}>
                                                                < FormGroup
                                                                // validationState={errors.name && errors.name.message ? "error" : "success"}
                                                                >
                                                                    <Row>
                                                                        <Col md={2}  >

                                                                            <input
                                                                                type="radio"
                                                                                name={`${fieldName}.answer`}
                                                                                ref={register({ required: true })}
                                                                                value={`${option}`}
                                                                            />

                                                                        </Col>
                                                                        <Col md={8}>
                                                                            <input
                                                                                type="text"
                                                                                name={`${option}`}
                                                                                ref={register({ required: true })}
                                                                                className={"form-control"}
                                                                                placeholder="Enter the option"
                                                                            />
                                                                        </Col>

                                                                    </Row>


                                                                    {/* {(errors.name && errors.name.message) && <small className="text-danger">{errors.name && errors.name.message}</small>} */}
                                                                </FormGroup>
                                                            </Col>

                                                        </Row>

                                                    )
                                                })
                                            }
                                        </Row>
                                    </Row>
                                </fieldset>
                            } />
                    </div>
                );
            })}


            <Button type="submit" disabled={!dirty}>
                {" "}
                {dirty ? "CAN SUBMIT" : "NOT DIRTY, CANNOT SUBMIT"}
            </Button>
        </form>

    );
}

export default withRouter(CreateQuizForm);