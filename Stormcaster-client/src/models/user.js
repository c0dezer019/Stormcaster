const REACT_APP_API_URL = 'http://localhost:4000/api/v1';

export default class UserModel {
	static create(data) {
		return fetch(`${REACT_APP_API_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => res.json());
	}

	static login(credentials) {
		return fetch(`${REACT_APP_API_URL}/auth/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(credentials),
				credentials: 'include'
			}
		).then(res => res.json());
	}

	static logout() {
		return (`${REACT_APP_API_URL}/auth/logout`, {
			method: "DELETE",
			credentials: 'include'
		})
	}
}
