import React,{useState,useEffect} from 'react';
const Login=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handlelogin=()=>{
        console.warn(email,password)
    }
    return(
        <div className="login">
            <h1 >Login</h1>
            <input className="inputBox"type="text" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className="inputBox"type="password" placeholder="enter password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handlelogin} className="appButton" type="button" >Login</button>
        </div>
    )
}
export default Login;