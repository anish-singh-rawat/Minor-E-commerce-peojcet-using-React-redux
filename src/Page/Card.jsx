import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/CartSlice';


export default function Card() {
  const carditem = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  
  const heandleRemove = (id)=>{
    dispatch(remove(id));
  }

  return (
    <>
      <div className="productsWrapper">
        {
          carditem.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} className='img' alt="Loading..." />
              <br /><br />
              <h6>{item.title}</h6>
              <br />
              <h5> RS : {item.price} $</h5>
              <br />
              <button className='btn' onClick={()=>heandleRemove(item.id)} > remove</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
