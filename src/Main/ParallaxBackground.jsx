import React from 'react';
import '../styles/Main.scss';

const ParallaxBackground = ({ children }) => {
    return (
        <div className="parallax-container">
            <div className="parallax-background"></div>
            <div className="content">{children}</div>
        </div>
    );
};

export default ParallaxBackground;
