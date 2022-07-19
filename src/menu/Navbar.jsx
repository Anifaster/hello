import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Chefs from './Chefs';
import Shop from './Shop';
import Logo from './logo.png'
const Navbar = () => {
    return ( 
        <div>
            <div className='navbar'>
                <div className="logo">
                <img className='img' src={Logo}/>
                </div>
                
                <div className="menu">
                    <select name="select" id="select" className='select'>
                        <option value="">Home page</option>
                        <option value="">Home page 2</option>
                        <option value="">Home page 3</option>
                        <option value="">Home page 4</option>
                    </select>
                    <NavLink  to="/chefs">Chefs</NavLink>
                    <NavLink to='/Shop'>Shop</NavLink>
                    <select className='select2'>
                        <option>Blog</option>
                        <option>Blog page</option>
                        <option>Blog details</option>
                    </select>
                    <button>Book Table</button>
                </div>
            </div>
            <Routes>
                <Route path='/chefs' element={<Chefs/>} />
                <Route path='/shop' element={<Shop/>}/>
            </Routes>
        </div>
     );
}
 
export default Navbar;