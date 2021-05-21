const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const db = require('../models')

/* 
  this function is called on login and saves the logged in user ID 
  to a session through req.session.passport.user
*/
passport.serializeUser((user, done) => {
  console.log('passport/index.js: serializeUser function is called')
  console.log(user)
  done(null, user.id)
})

/*
  this function is called anytime a logged in user makes a request to the application.
  passport adds the user info to req.user and we can use that to verify the authenticated user
*/
passport.deserializeUser((id, done) => {
  console.log('passport/index.js: deserializeUser function is called');
  
  // look for the user by their ID, return a user object containing only their email
  db.user.findByPk(id).then((user) => {
    console.log(user)
    done(null, user)
  })
})

passport.use(LocalStrategy)

module.exports = passport
