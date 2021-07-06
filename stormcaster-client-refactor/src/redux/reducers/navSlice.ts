import { createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface NavState {
   /* When a user is stopped while navigation is active or when navigation is inactive they will be considered waylaid.
    * Otherwise, they will be marked as en route. */
   navState: 'en route' | 'waylaid';
}

const initialState: NavState = {
   navState: 'waylaid'
};

const navSlice = createSlice({
   name: 'navigation',
   initialState,
   reducers: {},
   extraReducers: builder => {},
});

export default navSlice.reducer;
