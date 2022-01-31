import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
      <>
          <div className="navBars">
              <NavLink className={(NavData)=>NavData.isActive ? "active" : ''} className="link" to="/">Home</NavLink>

              <NavLink className={(NavData)=>NavData.isActive ? "active" : ''} className="link" to="/about">About Us</NavLink>

              <NavLink className={(NavData)=>NavData.isActive ? "active" : ''} className="link" to="/search">Search</NavLink>

              <NavLink className={(NavData)=>NavData.isActive ? "active" : ''} className="link" to="/contact">Contact Us</NavLink>

              <NavLink className={(NavData)=>NavData.isActive ? "active" : ''} className="link" to="/Services">Our Services</NavLink>
          </div>
      </>
  );
};

export default Menu;
