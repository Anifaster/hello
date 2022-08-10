import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Shop from './Shop';
import img from '../img.jpg';
import img2 from '../img2.jpg'; 
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
                        <NavLink className="mood" to=''>"Burgers"</NavLink>
                        <NavLink className="mood" to="">"Pizza"</NavLink>
                        <NavLink className="mood" to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch2.jpg" alt="" />
                    <h1>Tomson</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink className="mood" to=''>"Burgers"</NavLink>
                        <NavLink className="mood" to="">"Pizza"</NavLink>
                        <NavLink className="mood" to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch4.jpg" alt="" />
                    <h1>Alihon</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink className="mood" to=''>"Burgers"</NavLink>
                        <NavLink className="mood" to="">"Pizza"</NavLink>
                        <NavLink className="mood" to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch3.jpg" alt="" />
                    <h1>Islomhon</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink className="mood" to=''>"Burgers"</NavLink>
                        <NavLink className="mood" to="">"Pizza"</NavLink>
                        <NavLink className="mood" to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch5.jpg" alt="" />
                    <h1>rose</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink className="mood" to=''>"Burgers"</NavLink>
                        <NavLink className="mood" to="">"Pizza"</NavLink>
                        <NavLink className="mood" to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
                <div className="chef">
                    <img src="https://jthemes.net/themes/html/fodige/assets/img/chefs/ch5.jpg" alt="" />
                    <h1>jennie</h1>
                    <h2>Exclusive chef</h2>
                    <p>
                        <NavLink className="mood" to=''>"Burgers"</NavLink>
                        <NavLink className="mood" to="">"Pizza"</NavLink>
                        <NavLink className="mood" to=''>"Hot-Dog"</NavLink>
                    </p>
                </div>
              
            </div>
            <div className="most-popular">
        <div>
          <div className='ok'>
        <h1>Most Popular Food</h1>
        <p>Welcome to Fodige Restaurant! After 5 years in business, we still <br/> serve the best Chinese food in the Sydney area</p>
          </div>
        </div>
        <div className="images">
        <div className="img1">
        <img src={img} alt="" className='img1' />
        <h2>fruits mix</h2> <br />
        <div className='xop'>
        <span><i class="far fa-clock"></i> 30 Min Away</span>
        <h3>Order now</h3>
        </div>
        </div>
        <div className="img2">
        <img src={img2} alt="" className='img2' />
        <h2>fruits mix</h2> <br />
        <div className='xop'>
        <span><i class="far fa-clock"></i> 30 Min Away</span>
        <h3>Order now</h3>
        </div>
        </div>
        <div className="img3">
        <img src="https://jthemes.net/themes/html/fodige/assets/img/food/fv3.jpg" alt="" className='img3'/>
        <h2>fruits mix</h2> <br />
        <div className='xop'>
        <span><i class="far fa-clock"></i> 30 Min Away</span>
        <h3>Order now</h3>
        </div>
        </div>
        </div>
       </div>
            <Routes>
                <Route path='/shop' element={<Shop/>} />        
            </Routes>
        </div>
     );
}
 
export default Chefs;