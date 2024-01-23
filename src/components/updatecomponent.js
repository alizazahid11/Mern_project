
import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const Updateproduct=()=>{
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");
    


    const updateProduct=async()=>{
console.warn(name,price,category,company)
    }
    return(
        <div className='product'>
            <h1>UPDATE product</h1>
            <input type="text" placeholder="enter product name" className='inputBox'value={name} onChange={(e)=>setName(e.target.value)}></input>
       
            <input type="text" placeholder="enter product price" className='inputBox'value={price} onChange={(e)=>setPrice(e.target.value)}></input>
          
            <input type="text" placeholder="enter product category"className='inputBox'value={category} onChange={(e)=>setCategory(e.target.value)}></input>
          
            <input type="text" placeholder="enter product comapny"className='inputBox' value={company} onChange={(e)=>setCompany(e.target.value)}></input>
           
            <button onClick={updateProduct} className='appButton'>Update product</button>
        </div>
    )
}
export default Updateproduct;