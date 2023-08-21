import React, { useState } from 'react';
import '../styles/Catalog.scss';

const subjects = [
    { title: 'Math', problems: ['Problem 1', 'Problem 2'] },
    { title: 'Physics', problems: ['Problem 1', 'Problem 2'] },
    { title: 'Circus', problems: ['Problem 1', 'Problem 2'] },
    { title: 'DataBases', problems: ['Problem 1', 'Problem 2'] },
    { title: 'Algorithms', problems: ['Problem 1', 'Problem 2'] },
    { title: 'Psychic Aptitude', problems: ['Problem 1', 'Problem 2'] },
];

const Catalog = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="catalog-container">
            <div className="tabs">
                {subjects.map((subject, index) => (
                    <div
                        className={`subject-tab ${index === activeTab ? 'active' : ''}`}
                        key={index}
                        onClick={() => setActiveTab(index)}
                    >
                        {subject.title}
                    </div>
                ))}
            </div>
            <div className="content">
                <h3>{subjects[activeTab].title}</h3>
                <div className="problems">
                    {subjects[activeTab].problems.map((problem, idx) => (
                        <div className="problem" key={idx}>
                            {problem}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
