const router = require('express').Router();
const passport = require('../passport');
const ctrl = require('../controllers');
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

// PATH = /api/v1/auth
router.post('/login', passport.authenticate('local'), csrfProtection, ctrl.auth.login);
router.post('/register', csrfProtection, ctrl.auth.register);
router.delete('/logout', csrfProtection, ctrl.auth.logout);
// utility route - not for users
router.get('/verify', csrfProtection, ctrl.auth.verify);

module.exports = router;
