/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Box, Button, FormControl, InputLabel, TextField } from "@material-ui/core";
import UserModel from "../models/user";
import { SuperContext } from "../state/SuperContext";

const Profile = () => {
    const { currentUser } = useContext(SuperContext);
    const [zipcode, setZipcode] = useState('');
    const user = localStorage.getItem('username');

    const handleChange = e => {
        e.preventDefault();
        setZipcode(e.target.value);
    };

    const onSet = async () => {
        const data = { currentUser, zipcode };
        const zip = await UserModel.update({ ...data });
    };

    return (
        <Box>
            <h1>{user}&apos;s Profile</h1>
            <div>
                <FormControl id="user-zipcode">
                    <InputLabel
                        aria-label="zipcode"
                        aria-labelledby="user-zipcode"
                        id="zipcode-label"
                        htmlFor="zipcode">
                        Zipcode
                    </InputLabel>
                    <TextField
                        aria-labelledby="zipcode-label user-zipcode"
                        aria-placeholder="Zipcode"
                        id="zipcode"
                        placeholder="12345"
                        size="small"
                        onChange={handleChange}
                        value={zipcode}
                        variant="outlined"
                    />
                </FormControl>
                <Button href="#text-buttons" color="primary" onClick={onSet}>
                    Set
                </Button>
            </div>
        </Box>
    );
};

export default Profile;
