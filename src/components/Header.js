import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = ({ cartCount, onSearchSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (onSearchSubmit) {
            onSearchSubmit(searchTerm);
        }
    };

    return (
        <header>
            <div className="top-bar">
                <div className="container">
                </div>
            </div>
            <div className="main-header">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="JET International Logo" />
                        </Link>
                    </div>
                    <form className="search-bar" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="I'm shopping for..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
            <nav className="main-menu">
                <div className="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                       
                        <li><Link to="/about-us">About Us</Link></li>
            
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
