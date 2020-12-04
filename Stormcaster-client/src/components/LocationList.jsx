/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LocationModel from '../models/location';
import LocationCard from './subcomponents/LocationCard';

const LocationList = () => {
    const [location, setLocation] = useState([]);

    const fetchLocations = async () => {
        const data = await LocationModel.index();
        setLocation(data.locations);
    };

    useEffect(() => {
        fetchLocations();
    }, []);

    useEffect(() => {
        console.log(location);
    }, [location]);

    const list = location.map(el => {
        return (
            <Link to="/" key={el.id}>
                <LocationCard
                    city={el.city}
                    state={el.state}
                    zipcode={el.zipcode}
                />
            </Link>
        );
	});
	
	return (
		<div>
			<h4>Saved Locations</h4>
			{location ? list : 'Loading...'}
		</div>
	)
};

export default LocationList;
