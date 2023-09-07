import React, { useState, useEffect } from 'react'
import '../Component/Navbar.css'
import { add } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
    let [ product , setProduct ] = useState([ ]);
    let dispatch = useDispatch();

    useEffect (()=>{
        const fetchproduct = async ()=>{
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();
            setProduct(data)
        }
        fetchproduct();
    },[])

    const heandleAdd = (product)=>{
        dispatch(add(product))
    }
  return (
    <>
    <div className="productsWrapper">
    {
        product.map((product)=>(
            <div className="card" key={product.id}>
                <img src={product.image} className='img' alt="Loading..." />
                <br /><br />
                <h6>{product.title}</h6>
                <br />
                <h5> RS : {product.price} $</h5>
                <br />
                <button onClick={()=>heandleAdd(product)} className='btn'> Add To Card </button>
            </div>
        ))
    }
    </div>
    </>
    )
}
