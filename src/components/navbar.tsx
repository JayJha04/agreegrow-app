import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbar: React.FC = (props) => {
    return <nav className="navbar navbar-expand-lg px-3 navbar-container">
        <Link to="" className="ps-2 brand-container">
            <p className="navbar-brand fs-2">Agreegrow</p>
            <p><small>COLD PRESSED OIL</small></p>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 me-1 mb-lg-0 me-lg-3">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="#">Offers</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Quick Order</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Track</Link>
                </li>
            </ul>
            <div className="input-group mb-2 mb-lg-0 search-bar navbar-items">
                <input type="text" className="form-control" placeholder="Search products..." aria-label="Search products..." aria-describedby="basic-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            <ul className="navbar-nav mb-0 mx-3">
                <li className="nav-item border-end pe-2">
                    <Link className="nav-link" aria-current="page" to="#">Sign In or Register</Link>
                </li>
                <li className="nav-item ps-2">
                    <Link className="nav-link" to="#"><i className="bi bi-cart3"></i> Cart</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default TopNavbar;