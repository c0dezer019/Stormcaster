// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/location', ctrl.weatherData.index)
router.get('/location/:id', ctrl.weatherData.show)
router.post('/location/add', ctrl.weatherData.create)
router.put('/location/:id', ctrl.weatherData.update)
router.delete('/location/:id', ctrl.weatherData.destroy)

// exports
module.exports = router