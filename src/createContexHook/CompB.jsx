import React, {useContext} from 'react';
import CompC from './CompC';
import { Fname, Question, Answer} from './ParentComp';

const CompB = () => {
    const fname = useContext(Fname);
    const qstn = useContext(Question);
    const ans = useContext(Answer);
  return(
      <>
          <h1>My name is {fname}</h1>
          <h1>{qstn}</h1>
          <h2>{ans}</h2>
      </>
  );
};

export default CompB;
