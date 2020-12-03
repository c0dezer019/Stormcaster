// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.weatherData.index)
router.get('/:id', ctrl.weatherData.show)
router.post('/', ctrl.weatherData.create)
router.put('/:id', ctrl.weatherData.update)
router.delete('/:id', ctrl.weatherData.destroy)

// exports
module.exports = router