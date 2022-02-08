import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter ({ value, onChange }) {
    return (
        <label className={ s.Label }>
            <span><b>Find contacts by name</b></span>
            <input className={ s.Input }
             type='text' name='filter'
             value={ value } 
             onChange={ onChange }/>
        </label>
        
        )
    }

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}