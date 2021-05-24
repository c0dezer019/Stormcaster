import { createAction, createSlice } from "@reduxjs/toolkit";

const incrementBy = createAction('incrementBy');
const decrementBy = createAction('decrementBy');

export const adjusterSlice = createSlice({
	name: 'adjuster',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: state => state + 1,
		increaseByAmount: (state, action) => {
			state.value += action.payload;
		},
		decreaseByAmount: (state, action) => {
			state.value -= action.payload;
		},
	},
	extraReducers: builder => {
		builder
		  .addCase(incrementBy, (state, action) => {
			return state + action.payload;
		})
		  .addCase(decrementBy, (state, action) => {
		  	return state - action.payload;
		  })
	}
});

export const { increaseByAmount, decreaseByAmount, increment } = adjusterSlice.actions;

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

export default adjusterSlice.reducer;
