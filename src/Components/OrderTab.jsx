import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import FoodCard from './FoodCard';
const OrderTab = ({items}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='grid md:mx-0 mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {items?.map((item) => <FoodCard item={item} key={item._id} />)}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default OrderTab