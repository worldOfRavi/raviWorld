import React, { createContext } from 'react';
import CompA from './CompA';

let Fname = createContext()
let Question = createContext()
let Answer = createContext()

const ParentComp = () => {
    return (
        <>
            <Fname.Provider value={'Ravi'}>
                <Question.Provider value={'What to you want to be'}>
                    <Answer.Provider value={'I want to be the best Son'}>
                        <CompA />
                    </Answer.Provider>
                </Question.Provider>
            </Fname.Provider>

        </>

    );
};

export default ParentComp;
export { Fname, Question, Answer }
