// import React, { useState } from "react";
// import useForm from "react-hook-form";
// import Button from "../CustomButton/CustomButton.jsx";

// import { Grid, Col, FormGroup, ControlLabel, Row, Form } from "react-bootstrap";
// import Card from "components/Card/Card.jsx";
// import { login } from '../../api/api';
// const [serverError, setServerError] = useState();
// const { handleSubmit, register, errors } = useForm();
// const onSubmit = async (values) => {
//     setServerError(null);
//     let response = await login(values.email, values.password);
//     console.log(response);
//     if (response.error) {
//         console.log('log')
//     } else {
//         console.log('log')
//     }   

// }

// const Subject = () => {
//     return (
//         <div className="content">
//             <Grid fluid>
//                 <Row>
//                     <Col md={6} mdOffset={3}>
//                         <Col md={4} sm={6} mdOffset={4}>
//                             <Card
//                                 title="Login"
//                                 ctAllIcons
//                                 content={
//                                     <Form onSubmit={handleSubmit(onSubmit)}>
//                                         <small className="text-danger">{serverError || null}</small>
//                                         <FormGroup
//                                             validationState={errors.email && errors.email.message ? "error" : "success"}
//                                         >
//                                             <ControlLabel>Email address</ControlLabel>
//                                             <input
//                                                 name="email"
//                                                 ref={register({
//                                                     required: 'Required',
//                                                     pattern: {
//                                                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                                                         message: "invalid email address"
//                                                     }
//                                                 })}
//                                                 placeholder="Enter your email"
//                                                 className="form-control"
//                                             />

//                                             {(errors.email && errors.email.message) && <small className="text-danger">{errors.email && errors.email.message}</small>}


//                                         </FormGroup>
//                                         <FormGroup
//                                             validationState={errors.password && errors.password.message ? "error" : "success"}
//                                         >
//                                             <ControlLabel>Password</ControlLabel>
//                                             <input
//                                                 name="password"
//                                                 ref={register({
//                                                     required: 'Required',

//                                                 })}
//                                                 placeholder="Enter your password"
//                                                 className="form-control"
//                                             />

//                                             {(errors.password && errors.password.message) && <small className="text-danger">{errors.password && errors.password.message}</small>}
//                                         </FormGroup>
//                                         <Button type="submit">Login</Button>
//                                     </Form>
//                                 } />
//                         </Col>

//                     </Col>
//                 </Row>
//             </Grid>
//         </div>
//     );
// };

// export default Subject;