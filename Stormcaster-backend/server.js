// imports
require('dotenv').config();
require(__dirname + '/config/config.js')[process.env.DB_PASS];
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const session = require('express-session');
const passport = require('./passport');

const port = process.env.PORT || 4000;
const app = express();

// middleware - JSON parsing
app.use(express.json());

// middleware - cors
const corsOptions = {
	// from which URLs do we want to accept requests
	origin: ['http://localhost:3000', 'https://stormcaster.vercel.app'],
	credentials: true, // allow the session cookie to be sent to and from the client
	optionsSuccessStatus: 204,
};


const sess = {
	secret: "catsOfDoom",
	cookie: {
		maxAge: 1000 * 60 * 60 * 24,
	},
	saveUninitialized: false,
}

if (app.get('env') === 'production') {
	app.set('trust proxy', 1);
	sess.cookie.secure = true;
	sess.cookie.sameSite = true;
}

app.use(cors(corsOptions));

// middleware - session config
app.use(session(sess));

// middleware - passport config
app.use(passport.initialize());
app.use(passport.session());

// middleware for logged in user
app.use((req, res, next) => {
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
