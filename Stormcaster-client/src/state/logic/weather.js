import { createSlice } from '@reduxjs/toolkit';
import { adjusterReducer } from './adjuster';

/*
*
* Come up with a way to create a slice OOP-style.
*
 */

export const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		feelsLike: 0,
		humidity: 0,
		precipitationChance: 0,
		temperature: 0,
		UVIndex: 0,
		windDirection: '',
		windSpeed: 0,
	},
	reducers: {
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
		decrementByAmount: (state, action) => {
			state.value -= action.payload;
		},
	},
});

export const { incrementByAmount, decrementByAmount } = temperatureSlice.actions;

// Enabling asynchronous state updates in the event it is needed.
export const incrementAsync = amount => dispatch => {
	setTimeout(() => {
		dispatch(incrementByAmount(amount));
	}, 1000);
};

export const decrementAsync = amount => dispatch => {
	setTimeout(() => {
		dispatch(decrementByAmount(amount));
	}, 1000);
};

export const selectTemp = state => state.temperature.value;

export default temperatureSlice.reducer;
