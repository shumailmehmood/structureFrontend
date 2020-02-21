import React, { useState } from 'react';
import { Col, Row, Modal, FormGroup } from "react-bootstrap";
import Card from '../Card/Card';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Select from 'react-select';

const EditQuiz = (prop) => {
    let data = [];
    const columns = [
        {
            Header: "Barcode",
            accessor: "barcode",
            sortable: false
        },
        {
            Header: "Name",
            accessor: "name",
            sortable: false
        },
        {
            Header: "Quantity",
            accessor: "quantity",
            sortable: false
        },
        {
            Header: "Price",
            accessor: "price",
            sortable: false
        },
        {
            Header: "Amount",
            accessor: "amount",
            sortable: false
        }
    ]
    return (
        <Modal show={prop.show} onHide={prop.handleClose} bsSize="lg">
            <Modal.Header className="mdhead" closeButton >
                <Modal.Title>Search BarCode</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md="12">
                        <Row>
                            <Card
                                content={
                                    <Row>
                                        <Col md="1">
                                        </Col>
                                        <Col md="10">
                                            <FormGroup>

                                                <Select
                                                    placeholder="Select Seller"
                                                // onChange={onChangerole}
                                                // value={value2}
                                                // options={options}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="1">

                                        </Col>
                                    </Row>
                                }
                            />
                        </Row>
                        <Row>
                            <Card
                                content={
                                    <ReactTable
                                        data={data}
                                        columns={columns}
                                        loading={false}
                                        className="-striped -highlight"
                                        showPagination={false}
                                        defaultPageSize={10}
                                    />

                                } />
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default EditQuiz;