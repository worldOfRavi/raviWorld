import React from 'react';

const SResults = ({search}) => {
    let img = `https://source.unsplash.com/400x400?${search}`;
  return (
      <> {
          search!="" ? <img src={img} alt="Search" /> : null
      }
          
      </>
  );
};

export default SResults;
