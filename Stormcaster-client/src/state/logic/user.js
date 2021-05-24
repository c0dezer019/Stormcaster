import { createAction, createSlice } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import { adjuster } from './counter';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		age: 0,
		birthdate: '01/01/1970',
		currentLocation: { lon: 0, lat: 0 },
		loggedIn: false,
		username: '',
	},
	reducers: {
		changeLoginStatus: (state, action) => {
			state.loggedIn = action.payload;
		},
		changeUsername: (state, action) => {
			state.username = action.payload;
		},
		changeLocation: (state, action) => {
			state.currentLocation.lon = action.payload.lon;
			state.currentLocation.lat = action.payload.lat;
		},
		setAge: (state, action) => {
			state.age = action.payload;
		},
		setBirthdate: (state, action) => {
			state.birthdate = action.payload;
		},
	},
	extraReducers: {},
});

export const { changeLoginStatus, changeUsername, changeLocation, setAge, setBirthdate } = userSlice.actions;

export const ageAsync = age => dispatch => {
	setTimeout(() => dispatch(setAge(age)), 1000);
};

export const birthdateAsync = birthdate => dispatch => {
	setTimeout(() => dispatch(setBirthdate(birthdate)), 1000);
};

export const locationAsync = newLoc => dispatch => {
	setTimeout(() => dispatch(changeLocation(newLoc)), 1000);
};

export const loginAsync = bool => dispatch => {
	setTimeout(() => dispatch(changeLoginStatus(bool)), 1000);
};

export const usernameAsync = user => dispatch => {
	setTimeout(() => dispatch(changeUsername(user)), 1000);
};

export default userSlice.reducer;
