import React from 'react';
import About from '../components/About/about';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Portfolio from '../components/Portfolio/portfolio';
import Resume from '../components/Resume/Resume';
import Stats from '../components/Stats/Stats';

const Home = () => {
  return (
    <div className='App'>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Stats />
      <Contact />
    </div>
  );
};

export default Home;
