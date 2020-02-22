import React, { useState } from 'react';
import {
    FormGroup, Row, Col
} from 'react-bootstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from "../Card/Card"
import Button from "../CustomButton/CustomButton.jsx";
import { SEARCH_BARCODE_BTN_NAME, CHECKOUT_BTN_NAME } from "../../misc/constants"
import SearchBarCode from "../Modals/SearchBarCode"
import BarcodeReader from 'react-barcode-reader'
import QuantityUpdate from "../Modals/QuantityUpdate";
const Pos = (props) => {
    const [open, setOpen] = useState(false)

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
        <div>
            <SearchBarCode show={open} handleClose={() => setOpen(false)} />
            <Row>
                <Col md="1"></Col>
                <Col md="10">
                    <Row>
                        <Card
                            content={
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <input
                                                type="text"
                                                className={"form-control"}
                                                placeholder="Barcode"
                                                onChange={(e) => console.log(e)}
                                            />
                                        </FormGroup>

                                    </Col>
                                    <Col md="6">
                                        <Button type="button" onClick={() => setOpen(true)} className="btn-fill"  >
                                            {SEARCH_BARCODE_BTN_NAME}
                                        </Button>
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
                    <Row>
                        <Card
                            content={
                                <>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <input
                                                    type="text"
                                                    className={"form-control"}
                                                    placeholder="Sub Total"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <input
                                                    type="text"
                                                    className={"form-control"}
                                                    placeholder="Discount"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <input
                                                    type="text"
                                                    className={"form-control"}
                                                    placeholder="Grand Total"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <input
                                                    type="text"
                                                    className={"form-control"}
                                                    placeholder="Amount Paid"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <input
                                                    type="text"
                                                    className={"form-control"}
                                                    placeholder="Amount Paid"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <Button style={{ width: "335px" }} type="submit" className="btn-fill"  >
                                                {CHECKOUT_BTN_NAME}
                                            </Button>
                                        </Col>

                                    </Row>
                                </>
                            } />
                    </Row>

                </Col>
                <Col md="1"></Col>
            </Row>
        </div>
    );
};

export default Pos;