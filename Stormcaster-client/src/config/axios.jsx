import axios from 'axios';

export const dJAPI = axios.create({
	method: 'get',
    baseURL: `${process.env.REACT_APP_DJOKES}`,
	headers: {'User-Agent': 'Stormcaster', 'Accept': 'application/json'}
});

export const oWAPI = axios.create({
	method: 'get',
	baseURL: `${process.env.REACT_APP_OWM_URL}`
});

export const geoAPI = axios.create({
	method: 'get',
	baseURL: `${process.env.REACT_APP_GEO_URL}`
});

export const backendPOST = axios.create({
	method: 'post',
	baseURL: `${process.env.REACT_APP_BACKEND}`
});

backendPOST.defaults.headers.common['Content-Type'] = 'application/json'

export const backendDELETE = axios.create({
	method: 'delete',
	baseURL: `${process.env.REACT_APP_BACKEND}`,
});

export const backendGET = axios.create({
	method: 'get',
	baseURL: `${process.env.REACT_APP_BACKEND}`
})

export const backendUPDATE = axios.create({
	method: 'patch',
	baseURL: `${process.env.REACT_APP_BACKEND}`,
	headers: {
		"Content-Type": "application/json"
	}
})