import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
const ProductList=()=>{
    const[products,setProducts]=useState([]);
    const navigate=useNavigate();
    useEffect(() => {
    getProduct();
    }, []);
    const getProduct=async()=>{
        let result=await fetch("http://localhost:8000/products",{
            headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }
        });
        result=await result.json();
        setProducts(result);
    }

const deleteproduct=async(id)=>{
    console.warn(id);
    let result= await fetch(`http://localhost:8000/product/${id}`,{
        method:"Delete"
    });
    result=await result.json();
    if(result){
        getProduct();
    }
    
}
const searchhandle = async (event) => {
    
      let key = event.target.value;
      if(key){
        let result = await fetch(`http://localhost:8000/search/${key}`);
        result = await result.json();
        if (result) {
          setProducts(result);
        }
      }
   
      else{
        getProduct();
      }
  
  };
  
    return(
        <>
       <div className="product-list">
        <h3>Product list</h3>
        <input type="" className="search" placeholder="search product" onChange={searchhandle}></input>
        <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
  
    </ul>
    {
      products.length>0?  products.map((item,index)=><ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li><button onClick={()=>deleteproduct(item._id)}>Delete</button>
        <Link to={"/update/"+item._id}>Update</Link>
        </li>
  
    </ul>)
    :<h1>no Result found</h1>
    }
        </div>
        </>

    )
}
export default ProductList;