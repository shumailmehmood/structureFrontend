import React, { useState, useEffect } from 'react';
import {
    FormGroup, ControlLabel
} from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import  {useForm}  from 'react-hook-form';
import "../../assets/css/light-bootstrap-dashboard-pro-react.css"
import Select from 'react-select';
import { REG_BTN_NAME, REG_SUCCESS } from "../../misc/constants";
import { SuccessfullToast, ErrorToast } from "../../misc/helper"
import { createItem } from "../../api/api"
function SellerRegisteration(props) {
    const [loading, setLoading] = useState(false)
    const [comp, setComp] = useState(props.company?props.company:[]);
    
    
    const [seller, setSeller] = useState(props.seller?props.seller:[]);
    const [categ, setCateg] = useState(props.category?props.category:[]);
    const [valueComp, setValueComp] = useState('')
    const [valueCateg, setValueCateg] = useState('')
    const [valueSeller, setValueSeller] = useState('')
    const {
        register,
        handleSubmit,
    } = useForm();
   
    const onSubmitData = (data) => {
        setLoading(true)
        data.salePrice = +data.salePrice;
        data.purchasePrice = +data.purchasePrice;
        data.stockIn = +data.stockIn;
        data.companyId = valueComp
        data.sellerId = valueSeller
        data.categoryId = valueCateg
        createItem(data).then(res => {
            if (res.error) {
                setLoading(false)
                console.log(res)
                ErrorToast(res.error.response.data);
            } else {
                SuccessfullToast(REG_SUCCESS)
                setLoading(false)
                props.get();
            }
        })

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <ControlLabel><b>Item's Registeration</b></ControlLabel>
                <FormGroup>
                    <input
                        type="text"
                        name={`barcode`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter BarCode"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="text"
                        name={`name`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter Product Name"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="number"
                        name={`stockIn`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter Stock"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="number"
                        name={`salePrice`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter Sale Price"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="number"
                        name={`purchasePrice`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter Purchase Price"
                    />
                </FormGroup>
                <FormGroup>

                    <Select
                        placeholder="Select Company"
                        onChange={(e) => setValueComp(e.value)}
                        // value={value2}
                        options={comp}
                    />
                </FormGroup>
                <FormGroup>

                    <Select
                        placeholder="Select Category"
                        onChange={(e) => setValueCateg(e.value)}
                        // value={value2}
                        options={categ}
                    />
                </FormGroup>
                <FormGroup>

                    <Select
                        placeholder="Select Seller"
                        onChange={(e) => setValueSeller(e.value)}
                        // value={value2}
                        options={seller}
                    />
                </FormGroup>
                <Button type="submit" className="btn-fill"  >
                    {loading ? <div><span>loading...</span><i className="fa fa-spin fa-spinner" /></div> : REG_BTN_NAME}
                </Button>
            </form>

        </div>
    );
}

export default SellerRegisteration;
