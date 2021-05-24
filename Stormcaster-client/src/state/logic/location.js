import { createSlice } from '@reduxjs/toolkit';

/*
*
* Come up with a way to create a slice OOP-style.
*
 */

export const locationSlice = createSlice({
	name: 'location',
	initialState: {
		coords: { lon: 0, lat: 0 }
	},
	reducers: {
		newLocation: (state, action) => {
			state.coords = action.payload;
		},
	},
});

export const { newLocation } = locationSlice.actions;

// Enabling asynchronous state updates in the event it is needed.
export const locationAsync = newCoords => dispatch => {
	setTimeout(() => {
		dispatch(newLocation(newCoords));
	}, 1000);
};


export const selectCoords = state => state.location.coords;

export default locationSlice.reducer;
