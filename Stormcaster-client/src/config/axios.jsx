import axios from 'axios';

export const dJAPI = axios.create({
    baseURL: `${process.env.REACT_APP_DJOKES}`,
	method: 'get',
	headers: {'User-Agent': 'Stormcaster', 'Accept': 'application/json'}
});

export const oWAPI = axios.create({
	baseURL: `${process.env.REACT_APP_OWM_URL}`,
	method: 'get'
});