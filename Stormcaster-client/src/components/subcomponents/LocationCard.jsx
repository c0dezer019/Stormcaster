import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import '../../css/locations.css';

const LocationCard = ({ city, state, zipcode, removeLocation }) => {

    return (
        <div className="location-item">
		<Link to="/">
            <p className="location-text">
                <span>{city}</span>&nbsp;<span>{state},</span>&nbsp;
                <span>{zipcode}</span>
            </p>
		</Link>
            <Button className="rem-btn" onClick={removeLocation} variant="link">
                Remove
            </Button>
        </div>
    );
};

export default LocationCard;
