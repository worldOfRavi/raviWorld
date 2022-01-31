import React, {useState} from 'react';
import "./style.css";
import quizDB from './api';




const ReactApp = () => {
    const[state, setState] = useState([]);
  //taking required references
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let option4 = document.querySelector('.option4');
// let qstn = document.querySelector('.question');
// // let submit = document.querySelector('.submit');
// // let inputs = document.querySelectorAll('input');
// // let resultContainer = document.querySelector(".resultContainer");

let qstnCount = 0;
// // let score =0;

let loadQuestion= () =>{
    setState(quizDB[qstnCount]);
    console.log(state);
    // let questionList = state[qstnCount]
    // // console.log(questionList);
    // // qstn.textContent = questionList.question;
    // option1.textContent = questionList.a;
    // option2.textContent = questionList.b;
    // option3.textContent = questionList.c;
    // option4.textContent = questionList.d;

}  
loadQuestion();
    return (
        <>
            <div className="container">
                <h3 className="question">
                    Question comes here
                </h3>
                <div className="options">
                    <div className="option">
                        <input type="radio" id="ans1" name='ans' />
                        <label className='option1' htmlFor="ans1">Option 1</label>
                    </div>
                    <div className="option">
                        <input type="radio" id="ans2" name='ans' />
                        <label className='option2' htmlFor="ans2">Option 2</label>
                    </div>

                    <div className="option">
                        <input type="radio" id="ans3" name='ans' />
                        <label className='option3' htmlFor="ans3">Option 3</label>
                    </div>

                    <div className="option">
                        <input type="radio" id="ans4" name='ans' />
                        <label className='option4' htmlFor="ans4">Option 4</label>
                    </div>


                </div>
                <div className="btn_container">
                <button className="sumbit">Submit</button>
                </div>
                <div className="resultContainer">

                </div>
            </div>
        </>
    )
}

export default ReactApp
