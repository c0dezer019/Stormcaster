const router = require("express").Router();
const ctrl = require("../controllers");

// PATH = /api/authenticate
router.post("/", ctrl.auth.login);
router.post("/register", ctrl.auth.register);
router.delete("/logout", ctrl.auth.logout);
// utility route - not for users
router.get("/authorized", ctrl.auth.authorized);

module.exports = router;
