// imports
const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/location", ctrl.weatherData.index);
router.get("/location/get", ctrl.weatherData.show);
router.post("/location/add", ctrl.weatherData.create);
router.put("/location/:id", ctrl.weatherData.update);
router.delete("/location/delete", ctrl.weatherData.destroy);

// exports
module.exports = router;
