/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserModel from '../models/user';

const Login = ({ storeUser }) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        if (e.target.id === 'username') {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const creds = { username, password };
        const user = await UserModel.login(creds);

        try {
            if (!user) {
                return false;
            }
            storeUser(user.user);
            console.log(user);
            history.push('/profile');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">
                        Username
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
