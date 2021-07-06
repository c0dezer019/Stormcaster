import { createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface UserState {
   lastLogin: {} | Date;
   location: object | string;
   loggedIn: boolean;
}

const initialState: UserState = {
   location: '',
   lastLogin: {},
   loggedIn: false, // Confirms the user login is valid.
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: builder => {}
});

export default userSlice.reducer;
