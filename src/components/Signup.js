import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = (props) => {

    const[credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
    let navigate = useNavigate();


    const handleSubmit= async(e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;

        const response = await fetch("http://localhost:3333/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            // save the token and redirect
            localStorage.setItem('token',json.authtoken);
            Swal.fire({
              title: "Hurray",
              text: `Signup Successfully`,              
              icon: "success",
              confirmButtonText: "OK",
            });
            navigate("/");
            // redirect
        }else{
          
          Swal.fire({
            title: "Oops",
            text: `Failed to Signup`,              
            icon: "error",
            confirmButtonText: "OK",
          });
        }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name='name' className="form-control" id="name" onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
    <input type="email" name="email"  className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" onChange={onChange} required minLength={5} id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" name='cpassword' className="form-control" onChange={onChange}  id="cpassword"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
