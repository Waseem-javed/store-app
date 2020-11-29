import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-sm shadow-sm navbar-light bg-light">
        <div className="container">
            <Link to="/" className="navbar-brand">Shoes Store</Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#NavbarMenu">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="NavbarMenu">
            <u className="navbar-nav">
                <Link to="/Shop" className="nav-item nav-link">Shop</Link>
            </u>
            </div>
        </div>
        </nav>
    )
}

export default Header
