import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
  const [products,setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  }

  useEffect(()=>{
    fetchProducts();
  },[])
 
  console.log(products);

  return (
    <div className='w-full flex justify-center justify-evenly flex-wrap'>
      {products.map((product) => (
        <>
        <div className='bg-gray-500 text-white font-mono w-[30%] mb-2 rounded-lg h-[55vh]'>
        <h2 key={product.id}>{product.title}</h2>
        {/* <img src={product.images} width={"200px"}  height={"200px"}/> */}
        <img src={product.thumbnail} width={"100px"}  height={"90px"} className='inline-block border border-red-500 '/>
        <b>{product.price}</b>
        <p>{product.category}</p>
        <p>{product.rating}</p>
        <button className='btn btn-primary'>Add to Cart</button>
        </div>
        </>
      ))}
    </div>
  )
}

export default Products



//react toastify library 
// npm install toastify 
// import ki jo lines hain woh app.js mai lagay ge 
// or toast jo h na componenet usko appp.js mai last p laga dyna h 
// last mai jis file mai usko use karna h us mai likhdo ap : 
// import {toast} from 'react-toastify'
//else {toast.warning("you can't do this !")};
//52 : minutes p lect 1 sep mai h yeh 



// React router Dom => pages ko link karwany kay liyay we use react router dom
// dekho sab say pehly npm install react-router-dom likho terminal p 
//uskay bad index.js ki file mai import {BrowserRouter} from 'react-router-dom' likhna h 
// ab apko <BrowserRouter> <App> </BrowserRouter> app ko is mai wrap karna h 
// ab hm app.js ki file mai Routes or Route dono ko import karain gay like this import {Routes,Route} from "react-router-dom";
// kion kay navbar to har component kay sath dikhy ge isi liyay NavrBar component say bahar hm Route ko rakhain gay 
// <Routes><Route path="/" element = {HomeComponent}></Routes> 
//ab hm link bnain gay using import {Link} from "react-router-dom";
//Nav.Link kay sath yeh tag lga do <Link to "/">Home</Link>
{/* <Link to "/">Home</Link> */}


// axious aik simple sa package h jo hm data fetching kay liyay use karty hain in React 

//Loader ko kaisy lagana h 
// loader ka component bany ga pehly 
// loader.css mai ja kar loader ki css laga do loader.css mai usko .jsx ki file say link kardo and that's all 
