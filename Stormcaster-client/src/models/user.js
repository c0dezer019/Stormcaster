import { backendDELETE } from '../config/axios';

const REACT_APP_BACKEND = 'http://localhost:8000/api/v1'

export default class UserModel {
    /* static create(data) {
        return backendPOST({
            url: `/auth/register`,
            data: JSON.stringify(data),
        });
    } */

    static create(data) {
		return fetch(`${REACT_APP_BACKEND}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
            body: JSON.stringify(data)
		}).then((res) => res.json());
	}

    static login(user, pass) {
        const credentials = {user, pass}
        return fetch(`${REACT_APP_BACKEND}/auth/login`, {
            method: 'POST',
            headers: {
				'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            credentials: 'include'
        }).then(res => res.json());
    }

    static logout() {
        return backendDELETE({
            url: `/auth/logout`,
            withCredentials: true,
        });
    }
}
