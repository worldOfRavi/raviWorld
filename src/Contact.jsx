import React, {useState} from 'react';

function Contact() {
    const[input, setInput] = useState({
        name:"",
        phone:"",
        email:"",
        message:"",
    })
    let inputEvent = (event) =>{
        let data = event.target.value;
        let name = event.target.name;
        setInput((oldData)=>{
            return {
                ...oldData,
                [name]:data,
            }
        })
    }
    let showMsg = () =>{
        alert(`I am ${input.name}, my phone number is ${input.phone} and email is ${input.email} and what I want to say is You are ${input.message}`)
        setInput({
            name:"",
            phone:"",
            email:"",
            message:"",
        })

    }
    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" autoComplete='off' id="exampleFormControlInput1" 
                            name='name'
                            value={input.name}
                            onChange={inputEvent}
                            placeholder="Enter your name" />

                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="text" className="form-control" autoComplete='off' id="exampleFormControlInput1" 
                            name='phone'
                            value={input.phone}
                            onChange={inputEvent}
                            placeholder="Mobile number" />

                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" autoComplete='off' 
                            name='email'
                            value={input.email}
                            onChange={inputEvent}
                            placeholder="name@example.com" />

                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            name='message'
                            value={input.message}
                            onChange={inputEvent}
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-primary" onClick={showMsg} type='submit'>
                                Submit form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
