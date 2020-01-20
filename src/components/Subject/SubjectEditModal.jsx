import React, { useState } from "react";
import useForm from "react-hook-form";
import { Modal } from 'react-bootstrap';
import Button from "components/CustomButton/CustomButton.jsx";
import { Grid, Col, FormGroup, ControlLabel, Row, Form } from "react-bootstrap";

import { editSubject } from '../../api/api';
let data
function useOnMount(handler) {
    React.useEffect(handler, []);
}

function createArrayWithNumbers(length) {
    return Array.from({ length }, (_, k) => k); // Issue: k + 1 causes null values.
}

function pivotData(data, size = data[Object.keys(data)[0]].length) {
    const keys = Object.keys(data);
    const keysLength = keys.length;
    // console.log("keys: ", keys);
    const rows = [];
    for (let i = 0; i < size; i++) {
        const row = {};
        for (let j = 0; j < keysLength; j++) {
            const key = keys[j];
            const value = data[key][i];
            row[key] = value;
        }
        rows.push(row);
    }
    return rows;
}

function unpivotData(data, keys = []) {
    const output = keys.reduce((r, key) => {
        r[key] = [];
        return r;
    }, {});
    data.forEach((row, i) => {
        keys.forEach(key => {
            output[key][i] = row[key] !== undefined ? row[key] : null;
        });
    });
    return output;
}

const dataKeys = ['_id', "level"];

const SubjectEditModal = (props) => {
    const defaultValues = {
        subjectName: props.doc.original.name
    }
    const [size, setSize] = useState(props.doc.original.length);
    const [spinner, setSpinner] = useState(false);
    const { handleSubmit, reset, register, errors } = useForm({ defaultValues });


    async function loadFromProps() {

        setSize(props.doc.original.subjectLevels.length);
        data = await unpivotData(props.doc.original.subjectLevels, dataKeys);
        if (data) {
            data.subjectName = props.doc.original.name
            reset(data);
        }
        else { console.log("LOADING: ", data); }
    }

    // Instead of using defaultValues, I'd actually like to load data here...
    useOnMount(() => {
        loadFromProps();
    });

    const onSubmit = async (values) => {
        //setSpinner(true)
        const rows = pivotData(values);
        let s = '';
        let ss = []
        rows.map(e => e.subjectName !== undefined ? s += e.subjectName : null)
        rows.map(e => e.level !== undefined ? ss.push({ "level": e.level }) : null)          

        let response = await editSubject(props.doc.value,{ name: s, subjectLevels: ss });
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
                    <Col>
                        <Col md={6} >
                            <Modal show={props.show} onHide={props.handleClose}>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Modal.Header closeButton className="mdhead" style={{ backgroundColor: '#0F4B5F', color: '#E1FADF' }}>
                                        <Modal.Title><center>Edit Subject</center></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <FormGroup
                                            validationState={errors.name && errors.name.message ? "error" : "success"}
                                        >
                                            <ControlLabel>{props.doc.name}</ControlLabel>
                                            <input
                                                name="subjectName"
                                                ref={register}
                                                required
                                                placeholder="Enter your Subject Name"
                                                className="form-control"
                                            />

                                            {(errors.name && errors.name.message) && <small className="text-danger">{errors.name && errors.name.message}</small>}
                                        </FormGroup>
                                        {createArrayWithNumbers(size).map(number => {
                                            return (
                                                <div key={number}>
                                                    <label htmlFor="level" style={{ color: '#87cb16' }}>Level</label>
                                                    <input
                                                        name={`level[${number}]`}
                                                        placeholder="level"
                                                        ref={register}
                                                        className="form-control"
                                                    />
                                                    <hr />
                                                </div>
                                            );
                                        })}

                                        <Button style={{ margin: '10px' }} bsStyle="danger" type="button" fill wd onClick={() => setSize(size + 1)}>
                                            Add level
                                          </Button>
                                        <Button style={{ margin: '10px' }} bsStyle="info" type="button" fill wd onClick={() => setSize(size - 1)}>
                                            Remove Level
                                         </Button>
                                        <div style={{ color: "red" }}>
                                            {Object.keys(errors).length > 0 &&
                                                "There are errors, check your console."}
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button style={{ backgroundColor: '#0f4b5f' }} disabled={spinner} type="submit" fill wd>
                                            {spinner ? 'SUBMITTING....' : 'Proceed'}
                                            <i className={spinner ? 'fa fa-spin fa-spinner' : null} />
                                        </Button>
                                        {/* <input type="button" onClick={handleReset} value="Reset" /> */}
                                    </Modal.Footer>
                                </Form>
                            </Modal>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        </div >
    );
};

export default SubjectEditModal;


