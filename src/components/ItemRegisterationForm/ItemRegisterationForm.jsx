import React, { useState } from 'react';
import {
    FormGroup, ControlLabel
} from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { useForm } from 'react-hook-form';
import "../../assets/css/light-bootstrap-dashboard-pro-react.css"
import Select from 'react-select';
import { REG_BTN_NAME } from "../../misc/constants";
function SellerRegisteration(props) {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { dirty },
    } = useForm();
    const onSubmit = (data) => {

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        name={`pname`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter Product Name"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="text"
                        name={`stock`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter Stock"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="text"
                        name={`sPrice`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter Sale Price"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="text"
                        name={`pPrice`}
                        ref={register({ required: true, validate: value => value !== "" })}
                        className={"form-control"}
                        placeholder="Enter Purchase Price"
                    />
                </FormGroup>
                <FormGroup>

                    <Select
                        placeholder="Select Company"
                    // onChange={onChangerole}
                    // value={value2}
                    // options={options}
                    />
                </FormGroup>
                <FormGroup>

                    <Select
                        placeholder="Select Category"
                    // onChange={onChangerole}
                    // value={value2}
                    // options={options}
                    />
                </FormGroup>
                <FormGroup>

                    <Select
                        placeholder="Select Seller"
                    // onChange={onChangerole}
                    // value={value2}
                    // options={options}
                    />
                </FormGroup>
                <Button type="submit" className="btn-fill" onClick={() => setLoading(true)} >
                {loading ?<div><span>loading...</span><i className="fa fa-spin fa-spinner"/></div> : REG_BTN_NAME}
                </Button>
            </form>

        </div>
    );
}

export default SellerRegisteration;
