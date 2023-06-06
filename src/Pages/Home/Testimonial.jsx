import React, { useEffect, useState } from 'react';
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from '../../Components/SectionTitle';
import ReviewCard from './ReviewCard';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://bistro-boss-server-eight-orcin.vercel.app/reviews`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setReviews(data);
      })
      .catch(error => console.log(`404 page not found ${error}`));
  }, []);

  return (
    <div>
      <SectionTitle subheading={"What Our Client Say"} heading={"Testimonials"} />
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation,Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000, // Set the delay between slides in milliseconds
            disableOnInteraction: false, // Allow autoplay to continue when user interacts with the swiper
          }}
          direction="horizontal" // Set the direction to horizontal (left to right)
        >
          {reviews?.map(review => (
            <SwiperSlide key={review._id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
