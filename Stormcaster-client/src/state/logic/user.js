import { createAction, createSlice } from '@reduxjs/toolkit';

const birthday = createAction('birthday');

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        age: 0,
        birthdate: '01/01/1970',
        currentLocation: '',
        loggedIn: false,
        username: '',
    },
    reducers: {
        changeLoginStatus: (state, action) => {
            state.loggedIn = action.payload;
        },
        changeUsername: (state, action) => {
            state.username = action.payload;
        },
        changeLocation: (state, action) => {
            state.currentLocation = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setBirthdate: (state, action) => {
            state.birthdate = action.payload;
        },
    },
    extraReducers: builder => {
        // eslint-disable-next-line no-unused-vars
        builder.addCase(birthday, (state, action) => {
            state.age += 1;
        });
    },
});

export const {
    changeLoginStatus,
    changeUsername,
    changeLocation,
    setAge,
    setBirthdate,
} = userSlice.actions;

export const ageAsync = age => dispatch => {
    setTimeout(() => dispatch(setAge(age)), 1000);
};

export const birthdateAsync = birthdate => dispatch => {
    setTimeout(() => dispatch(setBirthdate(birthdate)), 1000);
};

export const locationAsync = newLoc => dispatch => {
    setTimeout(() => dispatch(changeLocation(newLoc)), 1000);
};

export const loginAsync = bool => dispatch => {
    setTimeout(() => dispatch(changeLoginStatus(bool)), 1000);
};

export const usernameAsync = user => dispatch => {
    setTimeout(() => dispatch(changeUsername(user)), 1000);
};

export default userSlice.reducer;
