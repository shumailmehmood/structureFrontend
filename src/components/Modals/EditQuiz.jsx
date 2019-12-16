import React, { useState } from 'react';
import { Col, Row, Button, Modal, FormGroup, ControlLabel } from "react-bootstrap";
import Radio from '../CustomRadio/CustomRadio';
import Card from '../Card/Card';
import querystring from "query-string";
import _ from 'lodash'
import useForm from 'react-hook-form';
const EditQuiz = (prop) => {
    console.log("selected....", prop.data)
    const {
        register,
        handleSubmit, watch,
        formState: { dirty },
    } = useForm({
        defaultValues: {
            'questions[0].question': prop.data.question,
            'questions[0].answer': prop.data.answer,
            'questions[0].options[0]': prop.data.options[0],
            'questions[0].options[1]': prop.data.options[1],
            'questions[0].options[2]': prop.data.options[2],
            'questions[0].options[3]': prop.data.options[3],
        }
    });
    const [indexes] = useState([0]);
    const [options] = useState([0, 1, 2, 3]);
    const onSubmit = (data) => {
        data.questions.forEach((rowOuter) => {
            rowOuter.answer = _.get(data, rowOuter.answer)
            return data
        })
        let dataSub = data.questions[0];
        prop.update(dataSub, prop.data._id)
    };
    return (
        <Modal show={prop.show} onHide={prop.handleClose}>
            <Modal.Header className="mdhead" closeButton >
                <Modal.Title>Edit Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                                </Row>
                                                <Row>
                                                    <Col md={1}></Col>
                                                    <Col md={7}>
                                                        <FormGroup>
                                                            <input
                                                                type="text"
                                                                name={`${fieldName}.question`}
                                                                ref={register({ required: true, validate: value => value !== "" })}
                                                                className={"form-control"}
                                                            />
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
                                                                        < FormGroup >
                                                                            <Row>
                                                                                <Col md={2}>
                                                                                    <input
                                                                                        type="radio"
                                                                                        name={`${fieldName}.answer`}
                                                                                        ref={register({ required: true })}
                                                                                        value={`${option}`}
                                                                                    // checked={prop.data.answer == prop.data.options[row] ? true : null}
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
            </Modal.Body>
        </Modal>
    );
};

export default EditQuiz;