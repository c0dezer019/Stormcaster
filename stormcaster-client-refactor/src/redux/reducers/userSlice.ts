import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
   lastLogin: Date;
   location: string;
   loggedIn: boolean;
}

const initialState: UserState = {
   location: '',
   lastLogin: new Date,
   loggedIn: false, // Confirms the user login is valid.
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
});

export default userSlice.reducer;
