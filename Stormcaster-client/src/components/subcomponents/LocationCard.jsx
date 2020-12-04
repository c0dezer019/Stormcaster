import React from 'react';

const LocationCard = ({city, state, zipcode}) => {
	

	return (
		<div>
			<p><span>{city}</span>&nbsp;<span>{state},</span>&nbsp;<span>{zipcode}</span></p>
		</div>
	);
}

export default LocationCard;
