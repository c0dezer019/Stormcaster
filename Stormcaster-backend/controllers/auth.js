const db = require('../models')
const bcrypt = require('bcrypt')

const login = (req, res) => {
  console.log('req.user here >>>>>>>>>>>', req.user)
  console.log('req.session here >>>>>>>>>>>', req.session)
  res.json({ user: req.user.email })
}

const register = (req, res) => {
  // validate the POSTed data - making sure we have a name, an email, a pw
  const { name, email, password } = req.body
  
  if (!name || !email || !password) {
    return res.json({
      message: 'Please enter a name, an email, and a password'
    })
  }

  // make sure the user doesn't already exist
  db.user.findOne({ 
    where: { email: email }
  }).then((foundUser) => {
    if (foundUser) return res.json({
      message: "A user with that email already exists"
    })

    // if the user doesnt exist, create and save a user to the DB
    db.user.create({
      name,
      email,
      password
    }).then((newUser)=> {
      res.json(newUser)
    })
    
  })
}

const logout = (req, res) => {
  if (!req.user) return res.json({
    message: 'No User to log out'
  })
  req.logout()
  res.json({ message: "User logged out" })
}

// This is a utility function for developer use only
const verify = (req, res) => {

}

module.exports = {
  login,
  register,
  logout,
  verify
}
