import { createSlice } from '@reduxjs/toolkit';

export const userSettingsSlice = createSlice({
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
	reducers: {},
});
