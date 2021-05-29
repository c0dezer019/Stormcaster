import React from 'react';

import Header from '../components/Header';

export default {
    title: 'Example/Header',
    component: Header,
};

const Template = args => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        username: 'Juan',
    },
    mode: 'light',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    user: {},
    mode: 'light',
};
