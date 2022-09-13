import React from 'react'
import SHeader from '../components/SHeader'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <SHeader/>
        <h1 style={{textAlign:"center",paddingTop:"100px",fontFamily:"monospace"}}>
            Welcome to Food's<br/>
            Kitchen
        </h1>
        <div className='container' style={{color:"#1468B2"}}> <Link to="/menu" class="btn btn-primary " >Go To MENU</Link></div>
        
    </div>
  )
}

export default Start