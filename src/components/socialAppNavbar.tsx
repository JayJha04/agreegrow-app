import React from 'react';
import { Link } from 'react-router-dom';

const SocialAppNavbar: React.FC = (props) => {
    return <nav className="navbar navbar-expand-lg px-3 social-app-navbar-container">
        <ul className="navbar-nav ">
            <li className="nav-item border-end ">
                <Link className="nav-link" aria-current="page" to="#"><i className="bi bi-google-play"></i> Android</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#"><i className="bi bi-apple"></i> iOS App</Link>
            </li>
        </ul>
        <ul className="navbar-nav mb-0 mx-3">
            <li className="nav-item pe-2">
                <Link className="nav-link" aria-current="page" to="#">Free Shipping above &#8377;1000 across India</Link>
            </li>
        </ul>
        <ul className="navbar-nav mb-0 mx-3">
            <li className="nav-item pe-2">
                <Link className="nav-link" aria-current="page" to="#"><i className="bi bi-facebook"></i> </Link>
            </li>
            <li className="nav-item ps-2">
                <Link className="nav-link" to="#"><i className="bi bi-instagram"></i> </Link>
            </li>
            <li className="nav-item ps-2">
                <Link className="nav-link" to="#"><i className="bi bi-youtube"></i> </Link>
            </li>
        </ul>
    </nav>
}

export default SocialAppNavbar;