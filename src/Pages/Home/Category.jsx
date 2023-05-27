import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Slide1 from '../../assets/home/slide1.jpg';
import Slide2 from '../../assets/home/slide2.jpg';
import Slide3 from '../../assets/home/slide3.jpg';
import Slide4 from '../../assets/home/slide4.jpg';
import Slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
  const images = [
    {
      src: Slide1,
      heading: 'Salads',
    },
    {
      src: Slide2,
      heading: 'Soups',
    },
    {
      src: Slide3,
      heading: 'pizzas',
    },
    {
      src: Slide4,
      heading: 'desserts',
    },
  ];

  return (
    <div className='mb-20 mt-10'>
      <section>
        <SectionTitle subheading="Form 11:00am to 10:00pm" heading="Order Online" />
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            type: 'bullets', // Use bullet pagination
            bulletActiveClass: 'swiper-pagination-bullet-active', // Custom class for active bullet
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt="slide image" />
              <h3 className='text-4xl uppercase text-center -mt-16 text-white font-bold italic'>{image.heading}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
