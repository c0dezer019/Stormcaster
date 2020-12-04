/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, withStyles } from '@material-ui/core';
import LocationModel from '../models/location';
import LocationCard from './subcomponents/LocationCard';

const styles = {
    root: {
        marginTop: "10%",
        '& p': {
            textAlign: 'center'
        }
    },
};

const LocationList = props => {
    const { classes } = props
    const history = useHistory();
    const [location, setLocation] = useState([]);

    const fetchLocations = async () => {
        const data = await LocationModel.index();

        setLocation(data.locations.locations);
    };

    const removeLocation = () => {
        // eslint-disable-next-line no-alert
        alert("Obvious alert")
    }

    useEffect(() => {
        fetchLocations();
    }, []);

    useEffect(() => {
        console.log(location);
    }, [location]);

    const list = location.map(el => {
        return (
                <LocationCard
                    city={el.city}
                    state={el.state}
                    zipcode={el.zipcode}
                    removeLocation={removeLocation}
                />
        );
    });
	
	return (
		<Box className={classes.root} id="location-list" display="flex" alignItems="center" flexDirection="column" justifyContent="center">
			<h4>Saved Locations</h4>
			{location ? list : 'Loading...'}
		</Box>
	)
};

export default withStyles(styles)(LocationList);
