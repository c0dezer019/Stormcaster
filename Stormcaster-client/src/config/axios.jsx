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