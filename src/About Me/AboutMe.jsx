import React from 'react';
import '../styles/AboutMe.scss';

const AboutMe = () => {
    return (
        <div className="about-me">
            <img src="profile-placeholder.jpg" alt="Profile" className="profile-pic" />
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                pulvinar facilisis justo mollis, auctor consequat urna.</p>
            <div className="skills">
                {/* Add visual representation of skills here */}
            </div>
        </div>
    );
};

export default AboutMe;
