import React from 'react';
import img from "./images/delivery.svg";
import Common from './Common'

function About() {
  return (
      <>
          <Common 
          name="Welcome to about Page"
          imgsrc = {img}
          visit = "/contact"
          btname = "Contact Now"
           />
      </>
  );
}

export default About;
