import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import { Container, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
    TextField,
    Button,
    FormControl,
    Menu,
    MenuItem,
} from '@material-ui/core';
import { AccountCircleOutlined } from '@material-ui/icons';
import { SuperContext } from '../state/SuperContext';

import logo from '../images/stormcaster_logo_light.png';
import alertInactive from '../images/alert_inactive.png';
import '../css/header.css';

const Header = ({ currentUser, logout }) => {
    const { setQuery, setLocation } = useContext(SuperContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [auth, setAuth] = useState(false);
    const open = Boolean(anchorEl);

    /* const handleClickOpen = () => {
        setRegFormOpen(true);
    }; */

    const handleMenu = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const formattedQuery = e.target.search.value.replace(/\s/g, '+');
        setQuery(formattedQuery);
        setLocation(e.target.search.value);
    };

    useEffect(() => {
        if (currentUser) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [currentUser]);

    return (
        <Navbar expand="lg" id="header" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand id="brand">
                    <Link to="/">
                        <img id="logo" src={logo} alt="logo" />
                    </Link>
                </Navbar.Brand>

                {/* SEARCH */}
                <form onSubmit={handleSubmit}>
                    <FormControl variant="outlined">
                        <>
                            {['left'].map(placement => (
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                            Zipcode, city/state, coords, or
                                            address
                                        </Tooltip>
                                    }>
                                    <TextField
                                        id="search"
                                        size="small"
                                        type="text"
                                        placeholder="Location"
                                        name="search"
                                        variant="outlined"
                                    />
                                </OverlayTrigger>
                            ))}
                        </>
                    </FormControl>

                    <Button type="submit" variant="text">
                        <span id="q">Search</span>
                    </Button>
                </form>

                {/* NOTIFICATIONS/PROFILE */}
                <Container id="profile-section">
                    <Container className="profile_item" id="advisories">
                        {/*  {advisories.length !== 0 ? (
                            <adv>
                                <img src={hazard} alt="Active Advisory" />
                            </adv>
                        ) : null} */}
                    </Container>
                    <Container className="profile_item" id="notifications">
                        <img src={alertInactive} alt="No Alerts" />
                        <Container className="profile_item" id="profile-bubble">
                            <AccountCircleOutlined
                                id="profile-bubble"
                                onClick={handleMenu}
                            />
                            <Menu
                                id="navbar-menu"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleMenuClose}>
                                {auth ? (
                                    <div>
                                        <MenuItem
                                            component="a"
                                            id="logout"
                                            onClick={() => {
                                                handleMenuClose();
                                                logout();
                                            }}
                                            to="/logout">
                                            Logout
                                        </MenuItem>
                                    </div>
                                ) : (
                                    <div>
                                        <MenuItem component={Link} id="login" to="/login">
                                            Login
                                        </MenuItem>
                                        <MenuItem
                                            component={Link}
                                            id="register"
                                            to="/register">
                                            Register
                                        </MenuItem>
                                    </div>
                                )}
                            </Menu>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Navbar>
    );
};

export default Header;
