import React from 'react'
import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import Sdata from '../sdata/sData'
import { add } from '../Redux/cartSlice'
const Menu = () => {
  const dispatch=useDispatch()
  const handleadd=(pro)=>{
    dispatch(add(pro))
}
   
  return (
    <div>
        <Header/>
        <div className='productsWrapper'>
        {
          Sdata.map((pro,i)=>(
            <>
            <div className='card' key={i}>
              <h1>{pro.name}</h1>
              <img src={pro.image} alt={pro.name}/>
              <h3>{pro.price}Rs</h3>
              <button className='btn' onClick={handleadd}>Add to Cart</button>
            </div>
            </>
          ))
        }
        </div>
        
    </div>
  )
}

export default Menu