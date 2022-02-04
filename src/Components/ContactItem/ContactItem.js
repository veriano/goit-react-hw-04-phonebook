import React from "react";
import PropTypes from "prop-types";
import s from './ContactItem.module.css';

function ContactItem({ id, name, number, onDelete }) {

    return (
        <li className={s.Item}><span><b>{name}</b></span>: <span><b>{number}</b>
        </span><button className={s.Button} type='button' onClick={ () => onDelete(id) }>Delete</button></li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
}

export default ContactItem;
