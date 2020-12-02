import { backendPOST, backendDELETE } from '../config/axios';

export default class UserModel {
	static create(data) {
		return backendPOST({
			url: `/auth/register`,
			data: JSON.stringify(data),
		});
	}

	static login(credentials) {
		return backendPOST({
				url: `/auth/login`,
				data: JSON.stringify(credentials),
				withCredentials: true
			}
		);
	}

	static logout() {
		return backendDELETE({
			url: `/auth/logout`,
			withCredentials: true
		})
	}
}
