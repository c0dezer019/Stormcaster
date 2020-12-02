import { backendPOST, backendGET, backendDELETE, backendUPDATE } from '../config/axios';


export default class WeatherModel {
	static create(data) {
		return backendPOST({
			url: `/weather/log/post`,
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(data)
		});
	};

	static show(id) {
		return backendGET({
			url: `/weather/log/get/${id}`
		})
	}

	static delete(id) {
		return backendDELETE({
			url: `/weather/log/delete/${id}`
		})
	}

	static update(newData, id) {
		return backendUPDATE({
			url: `/weather/log/update/${id}`,
			data: newData
		})
	}
}