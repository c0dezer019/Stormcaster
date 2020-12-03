import React, { OverlayTrigger } from 'react';

import { Form, Col } from 'react-bootstrap';
import FormPopover from '../FormPopover';

const Password = ({ register, errors }) => {


    return (
        <Form.Row>
            <Form.Group as={Col} id="form-password">
                <Form.Label htmlFor="password" id="password-label">
                    <span>Password</span>
                    <OverlayTrigger
                        trigger="focus"
                        placement="right"
                        overlay={FormPopover}>
                        <Form.Control
                            aria-placeholder="password"
                            aria-labelledby="password-label form-password"
                            aria-required="true"
                            id="password"
                            name="password"
                            placeholder="password"
                            ref={register}
                            type="password"
                        />
                    </OverlayTrigger>
                </Form.Label>
                {errors.password && <p>This is required.</p>}

                <Form.Text
                    id="pass-req"
                    aria-labelledby="password form-password">
                    <p>{errors.password?.message}</p>
                </Form.Text>

                <Form.Label htmlFor="confirm-password" id="conf-password-label">
                    <span>Confirm Password</span>

                    <Form.Control
                        aria-labelledby="conf-password-label form-confirm-password"
                        aria-placeholder="Confirm password"
                        aria-required="true"
                        id="confirm-password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        type="password"
                    />
                </Form.Label>
            </Form.Group>
        </Form.Row>
    );
};

export default Password;
