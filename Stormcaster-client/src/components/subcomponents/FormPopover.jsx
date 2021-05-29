import React from 'react';
import { Popover } from 'react-bootstrap';

const FormPopover = (
    <Popover id="pass-req">
        <Popover.Content>
            <h4>Requirements:</h4>
            <ul aria-label="password-requirements" id="password-requirements">
                <li display="none" id="1">
                    At least 8 characters long
                </li>
                <li id="2">Must contain an uppercase character</li>
                <li id="3">Must contain numbers</li>
                <li id="4">
                    Cannot contain any information provided in the form.
                </li>
            </ul>
        </Popover.Content>
    </Popover>
);

export default FormPopover;
