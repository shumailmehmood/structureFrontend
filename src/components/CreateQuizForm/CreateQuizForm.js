import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import {
    Col,
    Row,
    FormGroup,
    ControlLabel,
    // FormControl
} from "react-bootstrap";
import querystring from "query-string";
import _ from 'lodash'
import Button from "components/CustomButton/CustomButton.jsx";
import Radio from '../CustomRadio/CustomRadio';
import Card from '../Card/Card';
import useForm from 'react-hook-form';
import "../../assets/css/light-bootstrap-dashboard-pro-react.css"
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {createQuiz} from "../../api/api";
function CreateQuizForm(prop) {
    const [indexes] = useState([0]);
    const [options] = useState([0, 1, 2, 3]);
    const [reqStatus, setReqStatus] = useState(false);

    const {
        register,
        handleSubmit, watch,
        formState: { dirty },
    } = useForm();


    const onSubmit = (data) => {   
        data.questions.forEach((rowOuter) => {
            rowOuter.answer = _.get(data, rowOuter.answer)
            return data
        })
        let submitData = {
            level: querystring.parse(prop.location.search).level,
            questions: data.questions,
            subject: querystring.parse(prop.location.search).id
        };
 
        createQuiz(submitData).then(res => {
            if (res) {
                setReqStatus(true);
                prop.handleClose()
                //window.location.reload();              
            }
        })
            .catch(err => {
                prop.handleClose()
                console.log(err)
            })

    };
    return (
        <div>
              <Modal show={prop.show} onHide={prop.handleClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
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
                                                    <ControlLabel><b>ADD QUESTION </b></ControlLabel>
                                                </Col>
                                              
                                            </Row>
                                            <Row>
                                                <Col md={1}></Col>
                                                <Col md={7}>
                                                    <FormGroup                                                    
                                                    >
                                                        

                                                           
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
                                                                    >
                                                                        <Row>

                                                                            <Col md={2}>
                                                                                
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
                    {dirty ? "ADD" : "ADD"}
                </Button>
                </Modal.Body>
            </form>
            </Modal>
        </div>
    );
}

export default connect()(withRouter(CreateQuizForm));
