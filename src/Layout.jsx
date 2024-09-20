import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import SecondSection from './components/SecondSection/SecondSection';

const Layout = () => {
  return (
    <div className='h-full w-screen overflow-scroll smooth-scroll'>
      <Navbar />
      <section className='h-full w-full'>
        <LandingPage />
      </section>
      <section>
        <SecondSection />
      </section>
    </div>
  );
};

export default Layout;
