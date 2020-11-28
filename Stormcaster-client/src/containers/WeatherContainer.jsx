import React from 'react';
import { CurrentForecast, SevenDay, WeatherProvider, WeatherCard } from '../components';

const WeatherContainer = () => {
    return (
        <div>
            <WeatherProvider>
                <SevenDay>
                    <CurrentForecast>
                        <WeatherCard />
                    </CurrentForecast>
                </SevenDay>
            </WeatherProvider>
        </div>
    );
};

export { WeatherContainer };
