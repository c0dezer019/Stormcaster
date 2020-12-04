import React from 'react';

import { Form, Col } from 'react-bootstrap';

const Username = ({ errors, register }) => {
    return (
        <Form.Row>
            <Form.Group as={Col} id="form-username">
                <Form.Label id="user-label" htmlFor="username">
                    <span>Username</span>
                    <Form.Control
                        aria-placeholder="username"
                        aria-labelledby="user-label form-username"
                        aria-required="true"
                        id="username"
                        name="username"
                        placeholder="username"
                        ref={register}
                        type="text"
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

export default Username;
