import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Chefs from './Chefs';
import Shop from './Shop';
import Logo from './logo.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
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
                    <NavLink to="/Chefs" className="nav-link">Chefs</NavLink>
                    <NavLink to='/Shop' className="nav-link">Shop</NavLink>
                    <NavLink to='/' className="nav-link">Home</NavLink>
                    <select className='select2'>
                        <option>Blog</option>
                        <option>Blog page</option>
                        <option>Blog details</option>
                    </select>
                    <button className='button-book'>Book Table</button>
                </div>
            </div>
            <Routes>
                <Route path='/chefs' element={<Chefs />} />
                <Route path='/shop' element={<Shop />} />
            </Routes>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='slide1'>
                        <h1>
                            Hot eats, cold treats.
                        </h1>
                        <p>
                            There are some things money can't buy. For everything else, there's Mastercards
                           
                        </p>
                        <p>
                        You deserve a break today.Wake up with the King. The flavors of nature Just wow!
                        </p>
                        <Link to='/' className='view' >View our menu</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Navbar;