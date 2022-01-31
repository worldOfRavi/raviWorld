import React from 'react';

const Footer = () =>{
    let year = new Date().getFullYear();
    return(
        <>
            <footer className='bg-light text-center'>
                <p>&copy; {year} Ravi's World. All Rights Researved | Terms and Conditions</p>
            </footer>
        </>
    )
}
export default Footer