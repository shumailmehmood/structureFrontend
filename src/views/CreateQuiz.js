import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from '../components/Card/Card';
import CreateFrom from '../components/CreateQuizForm/CreateQuizForm';

const CreateQuiz = (props) => {
    return (
        <div>
            <Card
                content={
                    <div>
                        <Row>
                            <Col md={2}></Col>
                            <Col md={8}><CreateFrom /></Col>
                            <Col md={2}></Col>
                        </Row>
                    </div>
                }
            />

        </div>
    );
};

export default CreateQuiz;