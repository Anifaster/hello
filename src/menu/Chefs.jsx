import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Shop from './Shop';
const Chefs = () => {
    return ( 
        <div>
            <NavLink className='btn-menu' to='/shop'>Go to menu</NavLink>
            <div className='imgbrd'>
                <h1>Our Chefs</h1>
                <h2>Home / Our Chefs</h2>
            </div>
            <div className="chefs">
                <div className="chef">
                    <img src="	https://jthemes.net/themes/html/fodige/assets/img/chefs/ch1.jpg" alt="" />
                    <h1>Cassie Kolasks</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink to=''>"Burgers"</NavLink>
                        <NavLink to="">"Pizza"</NavLink>
                        <NavLink to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch2.jpg" alt="" />
                    <h1>Tomson</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink to=''>"Burgers"</NavLink>
                        <NavLink to="">"Pizza"</NavLink>
                        <NavLink to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch4.jpg" alt="" />
                    <h1>Alihon</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink to=''>"Burgers"</NavLink>
                        <NavLink to="">"Pizza"</NavLink>
                        <NavLink to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch3.jpg" alt="" />
                    <h1>Islomhon</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink to=''>"Burgers"</NavLink>
                        <NavLink to="">"Pizza"</NavLink>
                        <NavLink to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch5.jpg" alt="" />
                    <h1>rose</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink to=''>"Burgers"</NavLink>
                        <NavLink to="">"Pizza"</NavLink>
                        <NavLink to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch5.jpg" alt="" />
                    <h1>jeny</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink to=''>"Burgers"</NavLink>
                        <NavLink to="">"Pizza"</NavLink>
                        <NavLink to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
              
            </div>
            <Routes>
                <Route path='/shop' element={<Shop/>} />        
            </Routes>
        </div>
     );
}
 
export default Chefs;