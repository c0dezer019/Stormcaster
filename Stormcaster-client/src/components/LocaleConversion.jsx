import { useContext, useEffect } from "react";
import { SuperContext } from "../state/SuperContext";

// Doesn't return anything, this simply converts the entered query into acceptable parameters for OWM.
const LocaleConversion = () => {
    const { query, setCoords, setQuery } = useContext(SuperContext);

    const convertToCoords = async q => {
        const fetchCoords = await fetch(
            `${process.env.GEO_URL}/geocode?q=${q}&api_key=${process.env.GEO_KEY}`
        ).then(res => res.json());

        return fetchCoords.results[0].location;
    };

    useEffect(async () => {
        if (query !== '') {
            const coord = await convertToCoords(query);
            setCoords(coord);
            // Setting query back to default to prevent an infinite loop.
            setQuery('');
        }
    }, [query]);

    return null;
};

export default LocaleConversion;
