import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
// import { Route, Link, Switch } from 'react-router-dom';
import { Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
    Container,
    OutlinedInput,
    Button,
    FormControl,
} from '@material-ui/core';

import { AccountCircleOutlined } from '@material-ui/icons';
import logo from '../images/stormcaster_logo_light.png';
import alertInactive from '../images/alert_inactive.png';
import alertActive from '../images/alert_active.png';
import hazard from '../images/hazard.png';

const Header = props => {
    const { advisories, notifs } = props;
    const [adv, setAdv] = useState(advisories);
    const [notifications, setNotifications] = useState(notifs);
    const [q, setQ] = useState('');

    useEffect(() => {
        console.log('state change');
    }, [adv]);

    useEffect(() => {
        console.log('state change');
    }, [notifications]);

    useEffect(() => {
        setAdv(advisories);
    }, [advisories]);

    useEffect(() => {
        setNotifications(notifs);
    }, [notifications]);

    return (
        <Container>
            <Navbar expand="lg" id="header" bg="secondary" variant="dark">
                <Navbar.Brand href="#home" id="brand">
                    <img id="logo" src={logo} alt="logo" />
                </Navbar.Brand>

                {/* SEARCH */}
                <Formik
                    initialValues={{
                        searchQuery: q,
                    }}
                    onSubmit={async value => {
                        await new Promise (r => setTimeout(r, 500));
                        const formattedQ = value.replace(/\s/g, '+');
                        setQ(formattedQ);
                    }}
                    handleChange={values => setQ(values.searchQuery)}
                 >
                    {({ isSubmitting, values, handleChange }) => (
                        <Form>
                            <FormControl variant="outlined">
                                <>
                                    {['right'].map(placement => (
                                        <OverlayTrigger
                                            key={placement}
                                            placement={placement}
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={
                                                <Tooltip
                                                    id={`tooltip-${placement}`}>
                                                    Zipcode, city/state, coords,
                                                    or address
                                                </Tooltip>
                                            }>
                                            <OutlinedInput
                                                id="search"
                                                type="text"
                                                placeholder="Location"
                                                name="search"
                                                onChange={handleChange}
                                                value={values.searchQuery}
                                            />
                                        </OverlayTrigger>
                                    ))}
                                </>
                            </FormControl>

                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                variant="text">
                                <span id="q">Search</span>
                            </Button>
                        </Form>
                    )}
                </Formik>

                {/* NOTIFICATIONS/PROFILE */}
                <Container id="profile-section">
                    <Container className="profile_item" id="advisories">
                        {advisories.length !== 0 ? (
                            <adv>
                                <img src={hazard} alt="Active Advisory" />
                            </adv>
                        ) : null}
                    </Container>
                    <Container className="profile_item" id="notifications">
                        <>
                            {notifs.length !== 0 ? (
                                <>
                                    <img src={alertActive} alt="Active alert" />
                                </>
                            ) : (
                                <>
                                    <img src={alertInactive} alt="No Alerts" />
                                </>
                            )}
                        </>
                        <Container className="profile_item" id="profile-bubble">
                            <AccountCircleOutlined id="profile-bubble" />
                        </Container>
                    </Container>
                </Container>
            </Navbar>
        </Container>
    );
};

Header.propTypes = {
    notifs: PropTypes.arrayOf,
    advisories: PropTypes.arrayOf,
};

Header.defaultProps = {
    notifs: [],
    advisories: [],
};

export default Header;
