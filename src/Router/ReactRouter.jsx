import React from 'react';
import {Route} from 'react-router-dom';
import {Routes, Navigate} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Error from './Error';
import Menu from './Menu';
import User from './User'
import Search from "./Search"

const ReactRouter = () =>{
    let Name = () =>{
        return(
            <>
                <h1>This contact is about my self</h1>
                <h2>Name:Ravi Chaudhary</h2>
                <h2>Phone:9811420023</h2>
                <h2>Address: Suddhodhan-2 Rupandehi Nepal</h2>
            </>
        )
    }
    return(
        <>
        <Menu />
        <Routes>
            <Route path= "/" element={<About name="About" />} />
            <Route path= '/contact' element ={<Contact />} />
            <Route path= '/search' element ={<Search />} />
            <Route path= '/contact/name' element ={<Name />} />
            <Route path= '/user/:fname/:lname' element ={<User />} />
            <Route path= '/services' element ={<Services />} />
            {/* <Route path='*' element ={<Error />} /> */}
            {/* if a developer does not want the use to show the 404 error page then simply redirect the user to the home component */}
            <Route path = "*" element = {<Navigate to = "/" />} />
        </Routes>
        </>
    );
};

export default ReactRouter