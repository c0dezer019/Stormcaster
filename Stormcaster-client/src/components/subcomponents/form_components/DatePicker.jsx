import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DatePicker = ({ register }) => {
    const [selectedDate, setSelectedDate] = useState('');
    return (
        <Form.Row>
            <Form.Group as={Col} id="form-age">
                <Form.Label id="birthdate-label" htmlFor="birthdate">
                    <span>Birthdate</span>
                    <DatePicker
                        aria-labelledby="form-age birthdate-label"
                        aria-required="true"
                        id="birthdate"
                        name="birthdate"
                        onChange={date => {
                            setSelectedDate(date);
                            calculateAge();
                        }}
                        ref={register}
                        selected={selectedDate}
                    />
                </Form.Label>
                <Form.Control
                    id="userAge"
                    type="hidden"
                    name="userAge"
                    ref={register}
                    value={userAge}
                    plaintext
                    readOnly
                />
            </Form.Group>
        </Form.Row>
    );
};

DatePicker.propTypes = {
    register: PropTypes.func.isRequired,
};

export { DatePicker };
