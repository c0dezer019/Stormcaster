import {backendUPDATE } from '../config/axios';

const REACT_APP_BACKEND = 'http://localhost:8000/api/v1';
export default class LocationModel {
    static create(data) {
        // Add user creds
        return fetch(`${REACT_APP_BACKEND}/weather/location/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
        }).then(res => res.json());
    }

    static index() {
        return fetch(
            `${REACT_APP_BACKEND}/weather/location?user=${localStorage.getItem(
                'id'
            )}`
        ).then(res => res.json());
    }

    static retrieve(data) {
        const { user, zipcode } = data

        return fetch(
            `${REACT_APP_BACKEND}/weather/location/get?location=${zipcode}&user=${user}`
        ).then(res => res.json());
    }

    static update(newData, id) {
        return backendUPDATE({
            url: `/weather/location/update/${id}`,
            data: JSON.stringify(newData),
        });
    }

    static delete(data) {
        const { city, state, zipcode, user } = data;
        return fetch(`${REACT_APP_BACKEND}/weather/location/delete?user=${user}&city=${city}&state=${state}&zipcode=${zipcode}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        }).then(res => res.json());
    }
}
