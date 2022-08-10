import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buy from './Buy';
import Chefs from './menu/Chefs';
import Home from './menu/Home';
import Navbar from './menu/Navbar';
import Order from './menu/Order';
import Shop from './menu/Shop';
import Table from './menu/Table';
const App = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/chefs' element={<Chefs />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/order' element={<Order/>} />
            </Routes>
            <Navbar />

        </div>
    );
}

export default App;