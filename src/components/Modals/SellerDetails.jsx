import React, { useState } from 'react';
import { Col, Row, Modal, FormGroup } from "react-bootstrap";
import Card from '../Card/Card';
import Button from "../CustomButton/CustomButton"
import ReactTable from "react-table";
import "react-table/react-table.css";
import { useForm } from 'react-hook-form';
const EditQuiz = (prop) => {
    const [edit, setEdit] = useState(false);
    let data = [{
        name: 'Sadiq',
        pNumber: 'Sadiq',
        cnic: 'Sadiq',
    }];
    const columns = [
        {
            Header: "Name",
            accessor: "name",
            sortable: false,
            filterable: true
        },
        {
            Header: "CNIC",
            accessor: "cnic",
            sortable: false
        },
        {
            Header: "Phone Number",
            accessor: "pNumber",
            sortable: false
        },
        {
            Header: "Actions",
            accessor: () => <Button type="submit" className="btn-fill" onClick={() => setEdit(true)} >
                Edit Seller Detail
            </Button>,
            sortable: false,
            id: "action"
        }

    ]
    return (
        <Modal show={prop.show} onHide={prop.handleClose} bsSize="lg">
            <Modal.Header className="mdhead" closeButton >
                <Modal.Title>Seller Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md="1"></Col>
                    <Col md="10">
                        <Row>
                            <Card
                                content={
                                    <div>

                                        {edit ? <EditForm edit={() => setEdit(false)} defaultProp={prop} /> :
                                            <ReactTable
                                                data={data}
                                                columns={columns}
                                                loading={false}
                                                className="-striped -highlight"
                                                defaultPageSize={10}
                                            />
                                        }
                                    </div>
                                }
                            />
                        </Row>
                    </Col>
                    <Col md="1"></Col>

                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default EditQuiz;
const EditForm = (props) => {
    const [load, setLoad] = useState(false)
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            'name': 'shumail',
            'phone': '123',
            'cnic': '456'
        }
    });
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <input
                        type="text"
                        name={`name`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="number"
                        name={`cnic`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="number"
                        name={`phone`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                    />
                </FormGroup>
                <Button type="submit" className="btn-fill" onClick={() => {
                    props.edit()
                    setLoad(true)
                }

                } >
                    {load ? <div><span>loading...</span><i className="fa fa-spin fa-spinner" /></div> : "Update Seller Info"}
                </Button>
            </form>
        </div>
    )
}