/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Username from './subcomponents/form_components/Username';
import Password from './subcomponents/form_components/Password';
import Email from './subcomponents/form_components/Email';
import Age from './subcomponents/form_components/Age';
import UserModel from '../models/user';

import { SuperContext } from '../state/SuperContext';

import '../css/registration.css';
import 'react-datepicker/dist/react-datepicker.css';

/* =============================================
=            Schema            =
============================================= */
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
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            'Email must be a valid format'
        )
        .email()
        .required('Please provide an email.'),
    age: yup.number().min(13).required(),
});

/* =============================================
=            Form            =
============================================= */

const RegistrationForm = props => {
    const history = useHistory();
    const { currentUser, setCurrentUser } = useContext(SuperContext);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log(data);
        const user = await UserModel.create({
            username: data.username,
            password: data.password,
            email: data.email,
            age: data.age
        });
        setCurrentUser(user)
        localStorage.setItem('id', user.id)
        console.log(localStorage)
        history.push('/');
        console.log(currentUser)
    };

    /*   useEffect(() => {
        if (isSubmitting === true) {
            handleSubmit(onSubmit);
        }
    }, [isSubmitting]); */

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
                    <Age errors={errors} register={register} />
                    <div>
                        <Button type="submit" variant="primary">
                            Register
                        </Button>
                    </div>
                </Form>
            </section>
        </Container>
    );
};

export default RegistrationForm;
