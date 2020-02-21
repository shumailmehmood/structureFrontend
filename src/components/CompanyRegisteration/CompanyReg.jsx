import React from 'react';
import {   
    FormGroup, 
    ControlLabel   
} from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { useForm } from 'react-hook-form';
import "../../assets/css/light-bootstrap-dashboard-pro-react.css"
function CompanyRegisteration(props) {
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
            <ControlLabel><b>Item's Company</b></ControlLabel>             
                    <FormGroup>
                        <input
                            type="text"
                            name={`name`}
                            ref={register({ required: true, validate: value => value !== "" })}
                            className={"form-control"}
                            placeholder="Enter Name"
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

export default CompanyRegisteration;
