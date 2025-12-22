import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">Italian Wine Bar ChibaTech</div>
            <nav>
                <ul>
                    <li><Link to="/">Top</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/concept">Concept</Link></li>
                    <li><Link to="/access">Access</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
