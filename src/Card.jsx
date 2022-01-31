import React from 'react';

function Card({title, imgsrc}) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img style={{height:"250px"}} src={imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
