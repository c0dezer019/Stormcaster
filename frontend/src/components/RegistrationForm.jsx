import React, { useState, useEffect } from 'react';
import { Form, Col, Container } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import * as yup from 'yup';
import { Username, Password, Email } from './subcomponents/form_components';

import '../css/registration.css';
import 'react-datepicker/dist/react-datepicker.css';

const schema = yup.object().shape({
    username: yup
        .string()
        .matches(
            /^[A-Za-z0-9-_]+$/i,
            'Usernames can only contain upper/lowercase letters, numbers, dashes, and underscores'
        )
        .min(5, 'Must be at least 5 characters.')
        .max(40, 'Cannot contain more than 40 characters.')
        .required('A username is required.'),
    password: yup
        .string()
        .matches(
            /^[A-Za-z0-9]+$/,
            'Password can only contain alphanumeric characters with at least 1 uppercase character'
        )
        .min(8, 'Must be at least 8 characters long')
        .required('A password is required'),
    confirmPassword: yup.string().required(),
    email: yup
        .string()
        .matches(
            /^([a-zA-Z0-9-_.])(@)([a-zA-Z])(.)([a-zA-Z])/i,
            'Email must be a valid format'
        )
        .email()
        .required('Please provide an email.'),
    age: yup.number().min(13).required(),
});

const RegistrationForm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => console.log(data);

    let userAge;

    const calculateAge = () => {
        const currentDate = new Date();
        const age = Math.floor(
            (currentDate - selectedDate) / 1000 / 60 / 60 / 24 / 365
        );
        userAge = age;
    };

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <Container id="reg-form">
            <section>
                <Form id="registration-form" onSubmit={handleSubmit(onSubmit)}>
                    <Username errors={errors} register={register} />
                    <Password errors={errors} register={register} />
                    <Email errors={errors} register={register} />
                    <DatePicker register={register} />

                    <Form.Row id="submit-btn">
                        <Form.Group id="submit" as={Col}>
                            <Button
                                aria-labelledby="submit"
                                variant="outlined"
                                color="primary"
                                name="Submit"
                                type="submit">
                                Register
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </section>
        </Container>
    );
};

export default RegistrationForm;
