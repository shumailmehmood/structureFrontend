import React, { useState, useEffect } from 'react';
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
import * as Actions from "../../store/actions/index";
import { connect } from 'react-redux'
import * as Apis from "../../api/api";
import EditQuizModal from "../Modals/EditQuiz";
function CreateQuizForm(prop) {
    const [dataDB, setDataDB] = useState([]);
    const [show, setShow] = useState(false);
    const [editCounter, setEditCounter] = useState(false);
    const [selectedData, setSelectedData] = useState(false);
    const { formState: { dirty }} = useForm();
    useEffect(() => {
        getQuiz();
    }, [prop.questionAdded,editCounter])
   
    const getQuiz = async () => {
        let params = {
            page: 1,
            limit: 10,
            level: querystring.parse(prop.location.search).level,
            subject: querystring.parse(prop.location.search).id
        }
        try {
            let response = await Apis.viewQuiz(params);
            setDataDB(response.data[0].questions);

        } catch (err) {
            console.log(err)
        }

    }
    const { dispatch } = prop;
    const update = async (body, id) => {       
        let params = {
            level: querystring.parse(prop.location.search).level,
            subject: querystring.parse(prop.location.search).id,
            id: id
        }
        try {
             await Apis.editQuiz(params, body).then(res => {
                if (res) {
                    setDataDB(res.data.questions[0]);
                   editCounter==true?  setEditCounter(false):setEditCounter(true);   
                   setShow(false)                 
                    //window.location.reload();              
                }
            })                
        } catch (err) {
            console.log(err)
        }
    }
    const editCard = (selectedCard) => {
        setSelectedData(selectedCard)
        setShow(true);
    };
    const removeCard = (id) => {
        let submit = {
            level: querystring.parse(prop.location.search).level,
            subject: querystring.parse(prop.location.search).id,
            id: id
        }
        dispatch(Actions.remove_question(submit)).then(res => {
            if (res) {
                getQuiz();
            }
        })
            .catch(err => {
                console.log(err)
            })
    }
    function handleClose() {
        setShow(false)
    }
    return (
        <div>
            {show ?
                <EditQuizModal
                    show={show}
                    handleClose={handleClose}
                    data={selectedData}
                    update={update}
                />
                : null}
            {dataDB.length ?
                dataDB.map((row, index) => (
                    <Card
                        content={
                            <fieldset key={index}>
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
                                                <label>{
                                                    dataDB.length ? row.question ? row.question : null : null
                                                }</label>
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
                                            row.options.map((innerRow, i) => {
                                                return (
                                                    <Row key={i}>
                                                        <Col md={1}></Col>
                                                        <Col md={6}>
                                                            < FormGroup>

                                                                <Row>
                                                                    <Col md={2}>
                                                                        <input
                                                                            type="radio"
                                                                            name={index}
                                                                            checked={dataDB.length ? row.answer === row.options[i] ? true : false : null}
                                                                        />
                                                                    </Col>
                                                                    <Col md={8}>
                                                                        <label>{
                                                                            dataDB.length ? row.options ? row.options[i] : null : null
                                                                        }</label>

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
                                <Row>
                                    <Col md={2}></Col>
                                    <Col md={4}><Button onClick={() => editCard(row)}>Edit</Button></Col>
                                    <Col md={4}><Button onClick={() => removeCard(row._id)}>Delete</Button></Col>
                                    <Col md={2}></Col>
                                </Row>
                            </fieldset>
                        } />
                ))



                : null
            }
        </div>
    );
}

export default connect()(withRouter(CreateQuizForm));