import { configureStore } from '@reduxjs/toolkit';
import temperatureReducer from './logic/location';

export default configureStore({
    reducer: {
        temperature: temperatureReducer,
    },
});
