// DarkModeToggle.js
import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
