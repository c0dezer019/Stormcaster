import { createSlice } from '@reduxjs/toolkit';

export const appSettingsSlice = createSlice({
    name: 'userSettings',
    initialState: {
        settings: {
            dateFormat: '',
            theme: 'light',
            language: 'english',
            shareLocation: false,
            shareUsageData: false,
            timezone: 'US/Central',
            units: 'metric',
        },
        currentDateTime: {},
    },
    reducers: {
        setDateFormat: (state, action) => {
            state.dateFormat = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setShareLocation: (state, action) => {
            state.shareLocation = action.payload;
        },
        setShareUsageData: (state, action) => {
            state.shareUsageData = action.payload;
        },
        setTimezone: (state, action) => {
            state.timezone = action.payload;
        },
        setUnits: (state, action) => {
            state.units = action.payload;
        },
    },
});

export default appSettingsSlice.reducer;
