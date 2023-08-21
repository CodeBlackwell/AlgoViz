import React from 'react';
import '../styles/OutsideOfTech.scss';

const OutsideOfTech = () => {
    return (
        <div className="outside-of-tech">
            <h1>Outside of Tech</h1>
            <div className="interests">
                <div className="interest">
                    <img src="hobby-placeholder.jpg" alt="Hobby" className="interest-image" />
                    <h2>Hobby</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* Add more interests as needed */}
            </div>
        </div>
    );
};

export default OutsideOfTech;
