import React, {useState} from 'react';
import Card from './Card'
import Sdata from "./Sdata"


function Service() {
    let [data, setData] = useState(Sdata);

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                        {
                            data.map((curVal, index)=>{
                               return <Card key={index} title = {curVal.title} imgsrc = {curVal.imgsrc} />
                            })
                        }
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
