import React from 'react';
import '../styles/Contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
                {/* Add more social links as needed */}
            </div>
        </div>
    );
};

export default Contacts;
