import React from 'react'
import Banner from './Banner'
import Category from './Category'
import PopularMenu from './PopularMenu'
import Featured from './Featured'
import Testimonial from './Testimonial'
import { Helmet } from 'react-helmet-async'
const Home = () => {
  return (
    <>
        <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonial/>
    </>
  )
}

export default Home