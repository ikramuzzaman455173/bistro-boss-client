import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img1 from "../../assets/home/01.jpg";
import Img2 from "../../assets/home/02.jpg";
import Img3 from "../../assets/home/03.png";
import Img4 from "../../assets/home/04.jpg";
import Img5 from "../../assets/home/05.png";
import Img6 from "../../assets/home/06.png";

const Banner = () => {
  const images = [
    {
      src: Img1,
      alt: "Image 1",
      url:'https://i.ibb.co/T8G8pw9/01.jpg'
    },
    {
      src: Img2,
      alt: "Image 2",
      url:'https://i.ibb.co/02xRr0S/02.jpg'
    },
    {
      src: Img3,
      alt: "Image 3",
      url:'https://i.ibb.co/RPzX4Tt/03.png'
    },
    {
      src: Img4,
      alt: "Image 4",
      url:'https://i.ibb.co/TwrSCq1/04.jpg'
    },
    {
      src: Img5,
      alt: "Image 5",
      url:'https://i.ibb.co/09mpyrF/05.png'
    },
    {
      src: Img6,
      alt: "Image 6",
      url:'https://i.ibb.co/7VP1X7V/06.png'
    },
  ];

  return (
    <Carousel autoPlay>
      {images.map((image, index) => (
        <div className='h-[30rem]' key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
}

export default Banner;
