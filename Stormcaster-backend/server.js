// imports
require('dotenv').config();
require(__dirname + '/config/config.js')[process.env.DB_PASS];
const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const cors = require('cors');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const passport = require('./passport');
const flash = require('connect-flash');

const port = process.env.PORT || 4000;
const app = express();

// middleware

const corsOptions = {
	// from which URLs do we want to accept requests
	origin: ['http://localhost:3000', 'https://stormcaster.vercel.app'],
	credentials: true, // allow the session cookie to be sent to and from the client
	optionsSuccessStatus: 204,
};
const csrfProtection = csrf({ cookie: true });

const sess = 

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
	cookie: {
		secure: true,
		sameSite: true,
		maxAge: 1000 * 60 * 60 * 24,
	},
	resave: false,
	saveUninitialized: false,
	secret: process.env.SESSION_SECRET,
}));
app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// middleware for logged in user
app.use(csrfProtection, (req, res, next) => {
	// before every route, attach the flash messages and current user to res.locals
	// res.locals.alerts = req.flash();
	res.locals.currentUser = req.user;
	next();
});

// middleware - API routes
app.use('/api/v1/weather', routes.weatherData);
app.use('/api/v1/auth', routes.auth);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
