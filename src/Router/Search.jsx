import React,{useState} from 'react';
import SResults from "./SResults"


let Search = () =>{
    const[img, setImg] = useState('');
    let inputEvent = (event)=>{
        let data = event.target.value;
        setImg(data)
        console.log(data);
    }
    return(
        <>
            <div className="searchBar">
                <input type="text" placeholder='search anything' value={img} onChange={inputEvent} />
                <br />
                     <SResults search = {img}/>
            </div>
        </>
    )
}

export default Search