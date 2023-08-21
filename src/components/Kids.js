import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Kids() {
    const ComponentDidMount=()=>
{
   window.scrollTo(0,310);
 }
    const navigate=useNavigate()
    const addToCart=async (obj)=>{
        await axios.post('http://localhost:8080/cart/add-item',obj)
        .then((response)=>{
            alert(response.data.message)
        })
        .catch((err)=>alert(err));
    }

    const getComp=(obj)=>{
       
        return obj.type==="Kids";
    }
    let [items,setItems]=useState([])
    const fetchData=async()=>{
        await axios.get('http://localhost:8080/books/all-books')
        .then((response)=>{
            let temp=Array.from(response.data.payload);
            //console.log(temp)
            let result=temp.filter(getComp);
            setItems(result);
            console.log(items);
            
        })
        .catch((err)=>alert(err));
    }
    useEffect(()=>{
        fetchData(); 
        ComponentDidMount();   
    },[])    
    const myStyle={
        height:"25em",
        width:"25em",
    }
    const imgStyle={
        height:"10em",
        width:"10em",
        display:"block",
        margin:"auto"
    }
  return (
    <div>
        <div className="container ">
         <Grid  container spacing={3}
         direction="row"
         justifyContent="space-evenly"
         alignItems="centerL"
        >
           
                {
                
                 items.map((obj,index)=><div>
               
                 <div className="card mt-5" style={myStyle} >
                     <img src={obj.img} alt="" className="mt-3" style={imgStyle}/>
                     <div className="card-body">
            <h5 className="card-title">{obj.Name}</h5>
            <p className="card-text"><strike>${obj.price}</strike> <b>${obj.price*0.75}</b> </p>
            <p className="p-2">Free delivery</p>
            <d className="row ">
            <div className="col-md ">   <button href="" className="btn btn-primary w-100" onClick={()=>addToCart(obj)} >Add to cart</button></div>
            <div className="col-md ">    <button href="" className="btn btn-success w-100" onClick={()=>navigate('/buyItem')} >Buy Now</button></div>
             </d>
          </div>
                 </div>
                 </div> )
                 
                }
                </Grid>
             </div>
             
        
     </div>
  )
}

export default Kids