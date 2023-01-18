import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
         {/* 
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/> */}
    </div>
  )
}

export default Home
