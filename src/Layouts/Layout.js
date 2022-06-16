import React from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cv from '../Pages/Cv';
import Projects from '../Pages/Projects';
import About from '../components/About/about';

const Layout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
