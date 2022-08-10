import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buy from './Buy';
import Chefs from './menu/Chefs';
import Home from './menu/Home';
import Navbar from './menu/Navbar';
import Shop from './menu/Shop';
import Table from './menu/Table';
const App = () => {
    return ( 
        <div>
            <Navbar/>       <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/chefs' element={<Chefs />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/buy' element={<Buy/>}/>
                <Route path='/table' element={<Table/>}/>
            </Routes>
        </div>
     );
}
 
export default App;