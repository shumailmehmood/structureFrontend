import React, { useState } from "react";
import useForm from "react-hook-form";
import Button from "../CustomButton/CustomButton.jsx";
import { Modal } from 'react-bootstrap';
import { Grid, Col, FormGroup, ControlLabel, Row, Form } from "react-bootstrap";
import { createSubject } from '../../api/api';


const Subject = (props) => {
    const [spinner, setSpinner] = useState(false);
    const { handleSubmit, register, errors } = useForm();
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    const onSubmit = async (values) => {
        setSpinner(true)
       
        let response = await createSubject(values);
        if (response.error) {
            setSpinner(false)
            props.handleClose()
        } else {
            setSpinner(false)
            props.handleClose()
        }

    }
    const addFriend = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeFriend = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

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
                                        {indexes.map(index => {
                                            const fieldName = `SubjectLevels[${index}]`;
                                            return (
                                                <fieldset name={fieldName} key={fieldName}>
                                                    <ControlLabel style={{color:'#87cb16'}}>
                                                        Level
                                                     <input
                                                            type="text"
                                                            name={`${fieldName}.level`}
                                                            ref={register}
                                                            className="form-control"
                                                        />
                                                    </ControlLabel>
                                                   {indexes.length===index+1 ? <Button style={{margin:'10px'}}      bsStyle="danger" type="button" onClick={removeFriend(index)} fill wd>
                                                        Remove
                                                    </Button>:null
                                                    }
                                                </fieldset>
                                            );
                                        })}
                                        <Button type="button"  bsStyle="info" onClick={addFriend} fill wd>
                                            Add Level
                                          </Button>

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