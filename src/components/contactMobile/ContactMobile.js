import React, { Fragment } from 'react';
import data from '../../assets/texte/contact';
import style from './contactMobile.css';

const ContactMobile = () => {

    const contacts = data.contacts.map((contact) => {
        return (
                <a href={contact.personalLink}>
                    {contact.message}
                </a>
        );
    }
);

    return contacts;
};

export default ContactMobile;