import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email && email.includes('@') && email.includes('.')) {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail('');
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-section about-us">
                    <h4>About Jet International</h4>
                    <p>At JET INTERNATIONAL, we deliver the best possible products competitive in the world market with least possible time consumption – i.e. at Jet Speed.</p>
                </div>
                <div className="footer-section contact-info">
                    <h4>Got Question? Call us 24/7!</h4>
                    <p>(+91)8401536267</p>
                    <p>Address: Jet International SHED 2B SHED 2B OPP RADHE SHAYAM ELITE, NEAR GREEN FIELD 3 BEHIND SIDDHI VINAYAK RESIDENCY BHAYLI, Vadodara, Gujarat, IN, 391410</p>
                </div>
                <div className="footer-section navigation">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section newsletter">
                    <h4>Sign Up To Newsletter</h4>
                    <p></p>
                    <form onSubmit={handleNewsletterSubmit}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p className="privacy-text">By providing your email address, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.</p>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="container">
                    <p>Copyright © 2025 Jet International. All Rights Reserved. Powered by RoundTechSquare</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
