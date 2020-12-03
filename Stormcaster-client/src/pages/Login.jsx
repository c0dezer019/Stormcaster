/* eslint-disable consistent-return */
import React, { useState } from 'react';
import UserModel from '../models/user';

const Login = ({ history, storeUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        setUsername(e.target.value);
        setPassword(e.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        UserModel.login(username, password)
            .then(data => {
                console.log(data);

                if (!data.user) {
                    return false;
                }
                storeUser(data.user);
                history.push('/profile');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">
                        Email
                        <input
                            onChange={handleChange}
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password
                        <input
                            onChange={handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
