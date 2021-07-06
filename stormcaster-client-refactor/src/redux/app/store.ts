import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import navReducer from '../reducers/navSlice';
import userReducer from '../reducers/userSlice';
import weatherReducer from '../reducers/weatherSlice';

export const store = configureStore({
   reducer: {
      navigation: navReducer,
      user: userReducer,
      weather: weatherReducer,
   }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
