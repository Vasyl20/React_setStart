import React, { Fragment } from 'react';
import ContactItem from '../contact-item/contact-item';

const ContactList = ({ contacts}) => {

    var contactsTemlate;
    if (contacts !== null) {
        contactsTemlate = contacts.map(item => 
            {
                return (
                    <ContactItem
                       name={item.name}
                       number={item.number}
                       gender={item.gender}
                       image={item.image}
                    ></ContactItem>
                )
            })
            
            return(
                <Fragment>
                    {contactsTemlate}
                </Fragment>
            )
    }

}

export default ContactList;