/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserModel from '../models/user';

const Login = ({ storeUser }) => {
    const history = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = e => {
        if (e.target.id === 'username') {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        // const creds = { username, password };
        UserModel.login(username, password)
			.then((data) => {
				console.log(data);
				// TODO: FIX IT
				if (!data.user) {
					return false;
				}
				storeUser(data.user);
				history('/profile');
			})
			.catch((err) => console.log(err));
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
