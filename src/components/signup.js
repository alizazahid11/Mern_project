import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Signup=()=>{
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const collectData = async () => {
      
            console.warn(name, email, password);
            //integrate signup api in react 
            let result = await fetch("http://localhost:5000/register", {
                method: 'post',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',  // Include credentials in the request
            });
    
           
            result = await result.json();
            console.warn(result);
            navigate('/')//if you want to redirect it to home page
        } 
    
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="enter name"
            value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className="inputBox" type="text" placeholder="Email address"
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input  className="inputBox"type="password" placeholder="password"
            value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={collectData} className="appButton" type="button">Signup</button>
        </div>
    )
}
export default Signup;