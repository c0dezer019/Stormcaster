// imports
const router = require('express').Router();
const ctrl = require('../controllers');
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

// routes
router.get('/location', csrfProtection, ctrl.weatherData.index);
router.get('/location/get', csrfProtection, ctrl.weatherData.show);
router.post('/location/add', csrfProtection, ctrl.weatherData.create);
router.put('/location/:id', csrfProtection, ctrl.weatherData.update);
router.delete('/location/delete', csrfProtection, ctrl.weatherData.destroy);

// exports
module.exports = router