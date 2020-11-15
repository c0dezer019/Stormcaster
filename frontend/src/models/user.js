/* eslint-disable func-names */
import axios from 'axios';

export default class UserModel {
    static create(data) {
        const axPost = axios
            .create({
                method: 'post',
                url: '/auth/register',
                baseURL: `${process.env.REACT_APP_BACKEND}`,
                headers: {
                    'Content-Type': 'application/json',
                },
                transformRequest: [
                    function () {
                        JSON.stringify(data);

                        return data;
                    },
                ],
                withCredentials: false,
            })
            .then(res => res.json());

        return axPost;
    }
}