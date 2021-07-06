import { createSlice } from '@reduxjs/toolkit';

/* Weather will be accessible from most parts of the application so instead of
 *  */

export interface WeatherState {
   feelsLike: number;
   humidity: number;
   location: string;
   precip: boolean;
   precipAmount: number;
   precipChance: number | string;
   temperature: number;
   uvIndex: number;
}

const initialState: WeatherState = {
   feelsLike: 0,
   humidity: 0,
   location: '',
   precip: false,
   precipAmount: 0,
   precipChance: 0,
   temperature: 0,
   uvIndex: 0
};

export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {},
});

export default weatherSlice.reducer;
