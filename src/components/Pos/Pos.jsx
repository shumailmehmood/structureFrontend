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
import { getSale } from "../../api/api"
import { ErrorToast } from "../../misc/helper"
import { useEffect } from 'react';
const Pos = (props) => {
    const [open, setOpen] = useState(false)
    const [barcode, setBarcode] = useState('')
    const [data, setData] = useState([])
    const [found, setFound] = useState(false)
// useEffect(()=>{

// },[data])
let record =data.length?
data.map((e)=>{
return {
    barcode: e.barcode,
    name: e.name,
    quantity: e.quantity,
    price: e.price,
    amount: e.amount
}
})

:[]
    const columns = [
        {
            Header: "Barcode",
            accessor: (e)=>console.log("Test",e),
            id:"barcode",
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
    const find = (barcode, obj) => {
        if (data.length===0) {
            let state = data;
            state.push(obj);
            setData(state);
        } else {
            for (let i = 0; i < data.length; i++) {
                if (Object.values(obj).indexOf(barcode) > -1) {
                    let array = data;                 
                    let obj = array[i];
                    let inc = +obj.quantity + 1                  
                    obj.quantity = inc;
                    obj.amount = inc * +obj.price;
                    array.splice(i, 1, obj);
                    setData(array)                  
                    break

                } else {
                    let state = data;
                    state.push(obj);
                    setData(state);
                    break;
                }
            }
        }
    }

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
                                                onChange={(e) => setBarcode(e.target.value)}
                                                onKeyPress={event => {
                                                    if (event.keyCode === 13 || event.which === 13) {


                                                        getSale(barcode).then(res => {
                                                            if (res.error) {
                                                                ErrorToast(res.error.response.data);
                                                            } else {
                                                                let returnData = res.data;
                                                                let obj = {
                                                                    barcode: returnData.barcode,
                                                                    name: returnData.name,
                                                                    quantity: 1,
                                                                    price: returnData.salePrice,
                                                                    amount: (1 * +returnData.salePrice)
                                                                }
                                                                find(barcode, obj)

                                                            }
                                                        })
                                                    }
                                                    console.log("Data", data)
                                                }
                                                }
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
                        {console.log("===",data)}
                        <Card
                            content={
                                <ReactTable
                                    data={record}
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