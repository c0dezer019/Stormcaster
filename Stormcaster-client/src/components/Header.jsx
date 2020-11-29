import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
// import { Route, Link, Switch } from 'react-router-dom';
import { Container, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { OutlinedInput, Button, FormControl } from '@material-ui/core';

import { AccountCircleOutlined } from '@material-ui/icons';
import logo from '../images/stormcaster_logo_light.png';
import alertInactive from '../images/alert_inactive.png';
import alertActive from '../images/alert_active.png';
import hazard from '../images/hazard.png';
import '../css/header.css'

const Header = props => {
    const { advisories, notifs } = props;
    const [adv, setAdv] = useState(advisories);
    const [notifications, setNotifications] = useState(notifs);

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
        <Navbar expand="lg" id="header" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#home" id="brand">
                    <img id="logo" src={logo} alt="logo" />
                </Navbar.Brand>

                {/* SEARCH */}
                        <form>
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
                                            />
                                        </OverlayTrigger>
                                    ))}
                                </>
                            </FormControl>

                            <Button
                                type="submit"
                                variant="text">
                                <span id="q">Search</span>
                            </Button>
                        </form>

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
            </Container>
        </Navbar>
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
