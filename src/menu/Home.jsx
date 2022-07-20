import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
        <div>
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
                        <div className='view-div'>
                        <Link to='/' className='view' >View our menu</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide2'>
                <h1>A life full of celebration.</h1>
                <p>There are some things money can't buy. For everything else, there's MasterCard. You deserve <br/> a break today. Wake up with the King. The flavors of nature Just wow!</p>
                <div className='view-div'>
                        <Link to='/' className='view' >View our menu</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
     );
}
 
export default Home;