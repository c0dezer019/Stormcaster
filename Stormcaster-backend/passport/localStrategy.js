const db = require('../models')
const passport = require('passport')
// a strategy is really just a way that we log a user in to the site
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
  // which field in the DB is our 'username'
  { usernameField: 'email' },
  // callback function that verifies the user
  function(email, password, done) {
    // Find a user through the unique property - email
    db.user.findOne({
      where: {
        email: email
      }
    }).then((foundUser) => {
      console.log('the found user was')
      console.log('the found user was')
      console.log('the found user was')
      console.log(foundUser)
      console.log('the found user was')
      console.log('the found user was')
      console.log('the found user was')

      // error handling
      //if (err) return done(err)
      // no user is found
      if (!foundUser) return done(null, false, { message: 'Invalid Credentials' })
      // user is found but password doesn't match
      if (!foundUser.validPassword(password)) return done(null, false, { message: 'Invalid Credentials' })
      // return the user object
      // take out password
      return done(null, foundUser)
    })
  }
)

module.exports = strategy
