import React from 'react';
import Header from '../components/Header';
import Box from '../components/Box';
import Qualities from '../components/Qualities';
import Categories from '../components/Categories';
import BestSellers from '../components/BestSellers';
import Featured from '../components/Featured';
import Reviews from '../components/Reviews';
import HeroSection from '../components/HeroSection';
import Newsletter from '../components/Newsletter';
import Foot from '../components/Foot';

function Home() {
  return (
    <div>
      <Header />
      <Box />
      <Qualities />
      <Categories />
      <BestSellers />
      <Featured />
      <Reviews />
      <HeroSection />
      <Newsletter />
      <Foot />
    </div>
  );
}

export default Home;
