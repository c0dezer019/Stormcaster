const db = require("../models");

const login = (req, res) => {
  console.log("req.user here >>>>>>>>>>>", req.username);
  console.log("req.session here >>>>>>>>>>>", req.session);
  res.json({ user: req.user.username });
};

const register = (req, res) => {
  // validate the POSTed data - making sure we have a name, an email, a pw
  const { username, password, email, age } = req.body;

  if (!username || !password || !email || !age) {
    return res.json({
      message: "Please enter a username, an email, a password, and your age",
    });
  }

  // make sure the user doesn't already exist
  db.user
    .findOne({
      where: { username: username },
    })
    .then((foundUser) => {
      if (foundUser)
        return res.json({
          message: "That username already exists!",
        });

      // if the user doesnt exist, create and save a user to the DB
      db.user
        .create({
          username,
          password,
          email,
          age,
        })
        .then((newUser) => {
          res.json(newUser);
        });
    });
};

const logout = (req, res) => {
  if (!req.user)
    return res.json({
      message: "No User to log out",
    });
  req.logout();
  res.json({ message: "User logged out" });
};

// This is a utility function for developer use only
const authorized = (req, res) => {
  res.send('Secured Resource');
};

module.exports = {
  login,
  register,
  logout,
  authorized,
};
