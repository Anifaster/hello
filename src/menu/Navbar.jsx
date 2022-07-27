import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Chefs from './Chefs';
import Shop from './Shop';
import Logo from './logo.png';
import Home from './Home';
import Buy from '../Buy';
import Table from './Table';
const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className="logo">
                    <img className='img' src={Logo} />
                </div>

                <div className="menu">
                    {/* <select name="select" id="select" className='select'>
                        <option value="" className='option'>Home page </option>
                        <option value="">Home page 2</option>
                        <option value="">Home page 3</option>
                        <option value="">Home page 4</option>
                    </select> */}
                    <NavLink to='/Home' className="nav-link">Home</NavLink>
                    <NavLink to="/Chefs" className="nav-link">Chefs</NavLink>
                    <NavLink to='/Shop' className="nav-link">Shop</NavLink>
                    <NavLink to='/Table' className="table">Book a Table</NavLink>
                </div>
            </div>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/chefs' element={<Chefs />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/buy' element={<Buy/>}/>
                <Route path='/table' element={<Table/>}/>
            </Routes>
            
        </div>
    );
}

export default Navbar;