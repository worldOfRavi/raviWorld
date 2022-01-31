import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Menu from './Menu';
import Search from './Search';
import Error from './Error';
import {Route, Routes, Navigate} from 'react-router-dom'



const Index = () => {
  return (
      <>
        <Menu />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/services" element = {<Services />} />
        <Route path="/search" element = {<Search />} />
        <Route path="*" element = {<Error />} />
        {/* <Route path="*" element= {<Navigate to="/" />} /> */}
      </Routes>
      </>
  );
};

export default Index;
