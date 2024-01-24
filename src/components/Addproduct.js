
import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const Addproduct=()=>{
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");
    const[error,setError]=useState(false)


    const addProduct=async()=>{
        if(!name||!price||!company||!category){
            setError(true);
            return false;
        }
        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
             //integrate Ad product api in react 
        let result = await fetch("http://localhost:8000/addproduct", {
        method: 'post',
        body: JSON.stringify({  name,price,category,company }),
        headers: {
            'Content-Type': 'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        credentials: 'include',  // Include credentials in the request
    });

   
    result = await result.json();//converted result in json
    
    console.warn(result)
    }
    return(
        <div className='product'>
            <h1>Addproduct</h1>
            <input type="text" placeholder="enter product name" className='inputBox'value={name} onChange={(e)=>setName(e.target.value)}></input>
           {error && !name && <span className="invalid-input">Enter valid name</span>}
            <input type="text" placeholder="enter product price" className='inputBox'value={price} onChange={(e)=>setPrice(e.target.value)}></input>
            {error && !price && <span className="invalid-input">Enter valid price</span>}
            <input type="text" placeholder="enter product category"className='inputBox'value={category} onChange={(e)=>setCategory(e.target.value)}></input>
            {error && !category && <span className="invalid-input">Enter category</span>}
            <input type="text" placeholder="enter product comapny"className='inputBox' value={company} onChange={(e)=>setCompany(e.target.value)}></input>
            {error && !company && <span className="invalid-input">Enter valid comapny</span>}
            <button onClick={addProduct} className='appButton'>Add product</button>
        </div>
    )
}
export default Addproduct;