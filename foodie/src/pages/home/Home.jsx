import React from 'react';
import Banner from '../../components/Banner';
import Categories from './Categories';
import Specialdishes from './Specialdishes';
import Testimonials from '../Testimonials';
import OurServices from '../OurServices';

const Home = () => {
  return (
    <div> 
        <div className="home bg-base-100"  style={{ backgroundColor: 'aliceblue'}}>Home
      <Banner/>
      <Categories/>
      <Specialdishes/>
      <Testimonials/>
      <OurServices/>
        </div>
        </div>
  )
}

export default Home