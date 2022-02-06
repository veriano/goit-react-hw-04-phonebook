import PropTypes from 'prop-types';
import React from 'react';
import ContactItem from '../ContactItem';
import s from './ContactsList.module.css';


function ContactsList ({ contacts, onDeleteContact }) {
    return (
     <>
        <ul className={s.list}>
        {contacts && contacts.map(({id, name, number}) => (
          <ContactItem key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDeleteContact}
          /> 
        ))}
       </ul>
    </> 
    )
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
}

export default ContactsList;