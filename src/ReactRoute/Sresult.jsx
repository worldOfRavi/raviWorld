import React from 'react';

const Sresult = ({imgName}) => {
    let imgData = `https://source.unsplash.com/400x400?${imgName}`
  return (
      <>
          {
              imgName ? <img src={imgData} alt="Search Result" /> : null
          }
      </>
  );
};

export default Sresult;
