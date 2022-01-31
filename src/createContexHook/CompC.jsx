import React from 'react';
import { Fname, Question, Answer} from './ParentComp';

const CompC = () => {
    return (
        <>
           <Fname.Consumer>{(fname)=>{
               return (
                  <Question.Consumer>{(qstn)=>{
                      return(
                          <Answer.Consumer>{(ans)=>{
                            return(
                                <>
                                    <h1>My name is {fname}</h1>
                                    <h1>{qstn}</h1>
                                    <h2>{ans}</h2>
                                </>
                            )
                          }}

                          </Answer.Consumer>
                      )
                  }}

                  </Question.Consumer>
               )
           }}

           </Fname.Consumer>
        </>
    );
};

export default CompC;
