import { createContext ,useState,useEffect } from "react"
 //import React {createContext } from 'react'
 /// create context
 export const ProductContext=createContext();



const Productprovider=( {children}) => {
  ///product state
  const[products ,setproducts]=useState([])
  ///fetch products
  useEffect(() =>{
 const fetchproducts=async()=>{
    const response=await fetch('https://fakestoreapi.com/products');
    const data=await response.json();
    setproducts(data);
 };
   fetchproducts();
  },[] )
  return (
    <ProductContext.Provider value={{products}}>
      children
    </ProductContext.Provider>
    
  )
};

export default Productprovider
