// imports
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const routes = require("./routes");
const session = require("express-session");
// const MongoStore = require('connect-mongo')(session)
// const isLoggedIn = require('./middleware/isLoggedIn');

const port = process.env.PORT || 4000;
const app = express();
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKSURI
    }),
    audience: 'https//stormcaster.bblankenship.me/api/authenticate',
    issuer: process.env.AUTH0_ISSUER,
    algorithms: [process.env.AUTH0_API_ALGORITHM]
});

// middleware - JSON parsing
app.use(express.json());
app.use(jwtCheck);

// middleware - cors
const corsOptions = {
  // from which URLs do we want to accept requests
  credentials: true, // allow the session cookie to be sent to and from the client
  origin: "http://localhost:3000",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// middleware - session config
app.use(
  session({
    // session is stored in the DB
    secret: process.env.SECRET,
    resave: false, // will not resave sessions
    saveUninitialized: false, // only create a session when a property is added to the session
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// middleware for logged in user
app.use((req, res, next) => {
  // before every route, attach the flash messages and current user to res.locals
  // res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// middleware - API routes
app.use("/api/weather", routes.weatherData);
app.use('/api/authenticate', routes.auth);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
