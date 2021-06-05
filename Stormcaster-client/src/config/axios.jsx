import axios from 'axios';

export const dJAPI = axios.create({
    method: 'get',
    baseURL: `${process.env.DJOKES}`,
    headers: { 'User-Agent': 'Stormcaster', Accept: 'application/json' },
});

export const oWAPI = axios.create({
    method: 'get',
    baseURL: `${process.env.OWM_URL}`,
});

export const geoAPI = axios.create({
    method: 'get',
    baseURL: `${process.env.GEO_URL}`,
});

export const backendPOST = axios.create({
    method: 'post',
    baseURL: `${process.env.REACT_APP_BACKEND}`,
});

export const backendDELETE = axios.create({
    method: 'delete',
    baseURL: `${process.env.REACT_APP_BACKEND}`,
});

export const backendGET = axios.create({
    method: 'get',
    baseURL: `${process.env.REACT_APP_BACKEND}`,
});

export const backendUPDATE = axios.create({
    method: 'patch',
    baseURL: `${process.env.REACT_APP_BACKEND}`,
    headers: {
        'Content-Type': 'application/json',
    },
});
