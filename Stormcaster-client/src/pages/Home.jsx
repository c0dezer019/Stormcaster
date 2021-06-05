import React, { useContext, useEffect } from 'react';
import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';
import { SuperContext } from '../state/SuperContext';
import RegistrationForm from '../components/RegistrationForm';

let isGeolocationSupported = false;

const Home = () => {
    const { coords, setCoords, regFormOpen, setIsSubmitting, setRegFormOpen } =
        useContext(SuperContext);

    const submitAction = () => {
        setIsSubmitting(true);
    };

    const toggle = state => {
        isGeolocationSupported = state;
    };

    const setPosition = position => {
        toggle(true);
        setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        });
    };

    const getLost = error => {
        switch (error) {
            case error.PERMISSION_DENIED:
                toggle(false);
                break;
            case error.POSITION_UNAVAILABLE:
                toggle(false);
                break;
            default:
                break;
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, getLost);
            isGeolocationSupported = true;
        } else {
            isGeolocationSupported = false;
        }
    };

    const handleClose = () => {
        setRegFormOpen(false);
    };

    useEffect(() => {
        if (Object.keys(coords).length === 0) {
            getLocation();
        }
    }, []);

    return (
        <Container maxWidth="xl">
            {isGeolocationSupported ? null : (
                <>
                    <p>
                        Geolocation is not supported by this browser, please
                        supply you location manually or enable it if it is
                        turned off to get automatic current weather for current
                        location.
                    </p>
                </>
            )}
            <Dialog
                id="reg-form"
                open={regFormOpen}
                onClose={handleClose}
                aria-labelledby="form-title">
                <DialogTitle id="form-title">Create an account</DialogTitle>
                <DialogContent>
                    <RegistrationForm />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            submitAction();
                        }}>
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Home;
