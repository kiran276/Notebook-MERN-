import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const[credentials,setCredentials]=useState({email:"",password:""})
    let navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:3333/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            
            // save the token and redirect
            console.log(json.success)
            console.log(json.authToken);
            console.log("token will be above this")

            localStorage.setItem('token',json.authToken
            );
            Swal.fire({
                title: "Hurray",
                text: `Logged in Successfully`,              
                icon: "success",
                confirmButtonText: "OK",
              });
            navigate("/");
            // redirect
        }else{
            Swal.fire({
                title: "Oops",
                text: `Failed to login`,              
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
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange}  name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
    </div>
  )
}

export default Login
