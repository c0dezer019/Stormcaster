require('dotenv').config()
const request = require('request');
const auth0 = require('../config/auth0');

const options = {
    method: 'POST',
    url: 'https://c0dezer0.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: `{"client_id":"yBxH9S4tyK21FQq7rPIMm5QxtkJYcjtd","client_secret":"3d29Qfai73D7hVqFCg9G5mIPOvuPlbftMyp-BchWVyfVwduCj5XUyf_CS45nUW4u","audience":"https://stormcaster.bblankenship.me/api/authenticate","grant_type":"client_credentials"}`
};

request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
});
