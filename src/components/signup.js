import React,{useState} from 'react';

const Signup=()=>{
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const collectData=()=>{
        console.warn(name,email,password)
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