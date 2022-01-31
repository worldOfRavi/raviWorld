import React from 'react';
import img from "./images/home.svg";
import {NavLink} from 'react-router-dom';
import Common from "./Common"

function Home() {
    return (
        <>
            <Common
            name ="Grow your business with" 
            imgsrc = {img}
            visit="/service"
            btname="Get Started"

            />
        </>
    );
}

export default Home;
