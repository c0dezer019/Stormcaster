import React from 'react';
import { Form, Col } from 'react-bootstrap';

const Age = ({ register, errors }) => {

    return (
        <Form.Row>
            <Form.Group as={Col} id="form-age">
                <Form.Label id="user-label" htmlFor="age">
                    <span>Age</span>
                    <Form.Control
                        aria-placeholder="Age"
                        aria-labelledby="user-label form-age"
                        aria-required="true"
                        id="age"
                        name="age"
                        placeholder="age"
                        ref={register}
                        type="number"
                    />
                </Form.Label>
                {errors.username && <p>This is required.</p>}

                <Form.Text aria-labelledby="username form-username">
                    <p>{errors.username?.message}</p>
                </Form.Text>
            </Form.Group>
        </Form.Row>
    );
};

export default Age;
