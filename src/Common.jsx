import React from 'react';
import {NavLink} from 'react-router-dom';

function Common({name, imgsrc, visit, btname}) {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h2 className='title'>{name} <strong className='brand-name'>Ravi's World</strong> </h2>
                                <h4 className="my-1">
                                    We are the team of Talented Website Developer
                                </h4>
                                <div className="mt-3">
                                <NavLink to={visit} className='btn-get-started'>{btname}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img" >
                                <img src={imgsrc} alt="Home svg"  className='img-fluid animated' />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;
