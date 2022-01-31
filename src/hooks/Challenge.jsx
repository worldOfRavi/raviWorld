import React, {useState} from 'react';
import './Challenge.css';


let Challenge = () =>{
    const [state, setstate] = useState(5)
    let decrement = () => {
        if(state>0){
            setstate(state-1)
        }
        else{
            alert('Sorry zero limitation reached...😔')
        }
    }
    return(
        <>
            <div className="main_div">
                <div className="number">
                    <h1>{state}</h1>
                </div>
                <div className="buttons">
                    <div className="incr" onClick={()=>{setstate(state+1)}}>
                    {/* <AddIcon/> */}
                    INCR
                    </div>
                    <div className="decr" onClick={decrement}>
                    {/* <RemoveIcon /> */}
                    DECR
                    </div>
                </div>
            </div>
        </>
    )
}

export default Challenge;