import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  })
  
  useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
  },[key,state]);
  
    return [state, setState];
}
useLocalStorage.propTypes = {
  key: PropTypes.string,
  defaultValue: PropTypes.array,
}

export default useLocalStorage;
  