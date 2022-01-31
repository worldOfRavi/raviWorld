import React from 'react';
// import ReactApp from './ReactApp';
// import Challenge from './hooks/Challenge'
// import ParentComp from './createContexHook/ParentComp';
// import UseEffect from "./hooks/UseEffect"
// import Select from './hooks/Select'
// import ReactRouter from "./Router/ReactRouter"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Error from './Error';
import NavBar from "./NavBar"
import Footer from "./Footer"

function App() {
  return (
    // <ReactApp />
    // <Challenge />
    // <ParentComp />
    // <UseEffect />
    // <Select />
      // <ReactRouter />
     <>
        <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer />
     </>
  );
}

export default App;
