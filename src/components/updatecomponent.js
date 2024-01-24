
import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
const Updateproduct=()=>{
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");
    const params=useParams();
const navigate=useNavigate();
useEffect(() => {
  getproductdetails();
}, [])
const getproductdetails=async()=>{
 console.log(params)
    let result=await fetch(`http://localhost:8000/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    })
    result = await result.json();//converted result in json
    console.log(result)
    setName(result.name);
    setPrice(result.price);
    setCompany(result.company);
    setCategory(result.category)
}
const updateProduct = async () => {
    console.warn(name, price, category, company);
    
    // Assuming 'id' is defined in the scope or as a parameter of the function
    // If 'id' is a parameter, make sure to include it in the function declaration (e.g., const updateProduct = async (id) => {...})
    let result = await fetch(`http://localhost:8000/product/${params.id}`, {
      method: 'put',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        'Content-Type': 'Application/json',
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      },
      credentials: 'include',  // Include credentials in the request
    });
  
    result = await result.json();
  if(result){
    navigate('/')
  }  };
  
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