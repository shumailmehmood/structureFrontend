import React, { useState, useEffect } from 'react';
import {
    Col,
    Row,
    FormGroup,
    ControlLabel,
    Image
} from "react-bootstrap";
import querystring from "query-string";
import Button from "components/CustomButton/CustomButton.jsx";
import Card from '../Card/Card';
import "../../assets/css/light-bootstrap-dashboard-pro-react.css"
import { withRouter } from "react-router-dom";
import * as Actions from "../../store/actions/index";
import { connect } from 'react-redux'
import * as Apis from "../../api/api";
import EditQuizModal from "../Modals/EditQuiz";
import { SuccessfullToast, ErrorToast } from "../../misc/helper";
import { createQuiz } from "../../api/api";
function CreateQuizForm(prop) {
    const [dataDB, setDataDB] = useState([]);
    const [show, setShow] = useState(false);
    const [editCounter, setEditCounter] = useState(false);
    const [selectedData, setSelectedData] = useState(false);

    useEffect(() => {
        getQuiz()
    }, [prop.questionAdded, editCounter])
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
    const copyQuestion = (index) => {    
        delete dataDB[index]._id;
        let submitData = {
            level: querystring.parse(prop.location.search).level,
            questions: [dataDB[index]],
            subject: querystring.parse(prop.location.search).id,
        };
        createQuiz(submitData).then(res => {
            if (res.error) {
                getQuiz()
                ErrorToast(res.error.response.data.message + "!");
            } else {
                getQuiz()
                SuccessfullToast('Question Created!')

            }
        })
    }
    const update = async (body, id) => {
        let params = {
            level: querystring.parse(prop.location.search).level,
            subject: querystring.parse(prop.location.search).id,
            id: id
        }
        try {
            await Apis.editQuiz(params, body).then(res => {
                if (res.data) {
                    setDataDB(res.data.questions[0]);
                    editCounter === true ? setEditCounter(false) : setEditCounter(true);
                    SuccessfullToast('Updated SuccessFully!')
                    //window.location.reload();              
                } else {
                    ErrorToast(res.error.response.data.message + "!");
                }
                setShow(false)
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
                SuccessfullToast('Deleted Successfully!')
                getQuiz();
            }
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
                        key={index}
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
                                        {/* <Col md={4}>
                                            <Radio
                                                number="14"
                                                option="2"
                                                name="radio"
                                                defaultChecked={true}
                                                label="Multiple Choice"
                                            />
                                        </Col> */}
                                    </Row>
                                    {
                                        row.options.length ?
                                            <Row>
                                                <Col md={8}>
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
                                                                                        defaultChecked={dataDB.length ? row.answer === row.options[i] ? true : false : null}
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
                                                </Col>
                                                <Col md={4}>
                                                    {row.imageUrl &&
                                                        <Image style={{ height: '100px', width: '100px' }} src={row.imageUrl} />}

                                                </Col>
                                            </Row>
                                            :

                                            <Row>
                                                <Col md={1}></Col>
                                                <Col md={5}> <label>Answer:</label> {row.answer}</Col>
                                                <Col md={6}>
                                                    {row.imageUrl &&
                                                        <Image style={{ height: '100px', width: '100px' }} src={row.imageUrl} />}

                                                    <br />
                                                    <br />

                                                </Col>
                                            </Row>

                                    }
                                </Row>
                                <Row>
                                    <Col md={2}></Col>
                                    <Col md={3}><Button onClick={() => editCard(row)}>Edit</Button></Col>
                                    <Col md={3}><Button onClick={() => removeCard(row._id)}>Delete</Button></Col>
                                    <Col md={3}><Button onClick={() => copyQuestion(index)}>Copy</Button></Col>

                                    <Col md={1}></Col>
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