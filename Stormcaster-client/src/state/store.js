import { configureStore } from "@reduxjs/toolkit";
import temperatureReducer from "./logic/weather";

export default configureStore({
	reducer: {
		temperature: temperatureReducer
	}
})
