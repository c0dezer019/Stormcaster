import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DatePicker = ({ register }) => {
    const [age, setAge] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');

    const calculateAge = () => {
        const currentDate = new Date();
        const userAge = Math.floor(
            (currentDate - selectedDate) / 1000 / 60 / 60 / 24 / 365
        );
        setAge(userAge);
    };

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
                    value={age}
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
