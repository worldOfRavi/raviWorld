import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'

let Menu = () => {
    return (
        <>
            <div className="navBars">
                <NavLink className={(navData) => navData.isActive ? "active" : ""} className="link" to="/">About Us</NavLink>

                <NavLink className={(navData) => navData.isActive ? "active" : ""} className="link" to="/contact">Contact Us</NavLink>

                <NavLink className={(navData) => navData.isActive ? "active" : ""} className="link" to="/search">Search</NavLink>

                <NavLink className={(navData) => navData.isActive ? "active" : ""} className="link" to="/user/ravi">User</NavLink>

                <NavLink className={(navData) => navData.isActive ? "active" : ""} className="link" to="/services">
                    OurServices
                </NavLink>
            </div>
        </>
    );
}
export default Menu;