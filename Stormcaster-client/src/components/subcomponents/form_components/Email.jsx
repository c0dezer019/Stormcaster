import React from 'react';
import { Form, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';

const Email = ({ errors, register }) => {
    return (
        <Form.Row>
            <Form.Group as={Col} id="form-email">
                <Form.Label id="email-label" htmlFor="email">
                    <span>Email</span>
                    <Form.Control
                        aria-placeholder="email@example.com"
                        aria-labelledby="email-label form-email"
                        aria-required="true"
                        id="email"
                        name="email"
                        placeholder="email@example.com"
                        ref={register}
                        type="email"
                    />
                </Form.Label>
				<Form.Text
                    id="email-helper"
                    aria-labelledby="email form-email">
                    <p>{errors.email?.message}</p>
                </Form.Text>
                {errors.email && <p>This is required.</p>}
            </Form.Group>
        </Form.Row>
    );
};

Email.propTypes = {
	errors: PropTypes.object.isRequired,
	register: PropTypes.func.isRequired,
};

export default Email;
