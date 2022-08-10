import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Chefs from './Chefs';
import Shop from './Shop';
import Logo from './logo.png';
import Home from './Home';
import Order from './Order';
const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className="logo">
                    <img className='img' src={Logo} />
                </div>

                <div className="menu">
                    <NavLink to='/Home' className="nav-link">Home</NavLink>
                    <NavLink to="/Chefs" className="nav-link">Chefs</NavLink>
                    <NavLink to='/Shop' className="nav-link">Shop</NavLink>
                    <NavLink to='/Order' className='nav-link'>My orders</NavLink>
                </div>
            </div>



        </div>
    );
}

export default Navbar;