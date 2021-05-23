import { createSlice } from "@reduxjs/toolkit";

export const adjusterSlice = createSlice({
	name: 'adjuster',
	initialState: {
		value: 0,
	},
	reducers: {
		increaseByAmount: (state, action) => {
			state.value += action.payload;
		},
		decreaseByAmount: (state, action) => {
			state.value -= action.payload;
		},
	},
});

export const { increaseByAmount, decreaseByAmount } = adjusterSlice.actions;

export const adjusterAsync = (type, amount) => dispatch => {

	setTimeout(() => {
		if (type === 'increase') {
			dispatch(increaseByAmount(amount));
		}
		else {
			dispatch(decreaseByAmount(amount));
		}
	}, 1000);
};
