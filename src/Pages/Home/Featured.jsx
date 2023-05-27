import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import FeaturedImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className='my-20 pt-8 featured-bg bg-fixed relative'>
      <div className="absolute inset-0 bg-black opacity-25"></div> {/* Background overlay */}
      <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className='md:flex justify-center items-center gap-10 text-white pt-12 py-8 px-16 relative z-10'>
        <div>
          <img src={FeaturedImg} alt="featured img" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
