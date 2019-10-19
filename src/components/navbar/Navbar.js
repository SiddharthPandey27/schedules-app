import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="nav-bar">
            <Link to='/' className="f3 fw7 black-80 heading-text">{props.text}</Link>
        </div>
    );
}

export default Navbar;