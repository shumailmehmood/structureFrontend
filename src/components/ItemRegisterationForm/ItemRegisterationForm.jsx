import React from 'react';
import {   
    FormGroup, ControlLabel   
} from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { useForm } from 'react-hook-form';
import "../../assets/css/light-bootstrap-dashboard-pro-react.css"
function SellerRegisteration(props) {
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
                            name={`name`}
                            ref={register({ required: true, validate: value => value !== "" })}
                            className={"form-control"}
                            placeholder="Enter Name"
                        />
                    </FormGroup>  
                    <FormGroup>
                        <input
                            type="text"
                            name={`cnic`}
                            ref={register({ required: true, validate: value => value !== "" })}
                            className={"form-control"}
                            placeholder="Enter Cnic"
                        />
                    </FormGroup> 
                    <FormGroup>
                        <input
                            type="text"
                            name={`phone`}
                            ref={register({ required: true, validate: value => value !== "" })}
                            className={"form-control"}
                            placeholder="Enter Phone"
                        />
                    </FormGroup> 
                    <FormGroup>
                        <input
                            type="text"
                            name={`address`}
                            ref={register({ required: true, validate: value => value !== "" })}
                            className={"form-control"}
                            placeholder="Enter Address"
                        />
                    </FormGroup>        
                <Button type="submit" >
                    {" "}
                    {dirty ? "ADD" : "ADD"}
                </Button>

            </form>

        </div>
    );
}

export default SellerRegisteration;
