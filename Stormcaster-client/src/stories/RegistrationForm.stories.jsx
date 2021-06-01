import React from 'react';

import RegistrationForm from '../components/RegistrationForm';

export default {
    title: 'Example/Registration Form',
    component: RegistrationForm,
};

const Template = args => <RegistrationForm { ...args } />;

export const NewRegistration = Template.bind({});
NewRegistration.args = {};
