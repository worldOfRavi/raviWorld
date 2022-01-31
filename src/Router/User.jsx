import { NavigateBeforeOutlined } from '@material-ui/icons';
import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function User(match) {
    // useParams returns an object 
    const {fname, lname} = useParams();
    //here object is destructred
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);
  return(
      <>
          <h1>This is {fname} {lname}</h1>
          <br /><br />
          <p style={{fontSize:"20px"}}>my location is:  {location.pathname}</p>
          {
            location.pathname===`/user/ravi/tharu`?
            <button style={{marginTop:"20px", cursor:"pointer"}} onClick={()=>{navigate('/')}}>Click me</button>: null
          }
      </>
  ); 

}

export default User;
