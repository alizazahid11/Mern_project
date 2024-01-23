
import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const Addproduct=()=>{
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[comapny,setCompany]=useState("");
    const addProduct=()=>{
        console.warn(name,price,category,comapny)
    }
    return(
        <div className='product'>
            <h1>Addproduct</h1>
            <input type="text" placeholder="enter product name" className='inputBox'value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" placeholder="enter product price" className='inputBox'value={price} onChange={(e)=>setPrice(e.target.value)}></input>
            <input type="text" placeholder="enter product category"className='inputBox'value={category} onChange={(e)=>setCategory(e.target.value)}></input>
            <input type="text" placeholder="enter product comapny"className='inputBox' value={comapny} onChange={(e)=>setCompany(e.target.value)}></input>
            <button onClick={addProduct} className='appButton'>Add product</button>
        </div>
    )
}
export default Addproduct;