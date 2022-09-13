import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const items=useSelector((state)=>state.cart)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand nav-item" to="/" style={{color:'white',fontFamily:"serif"}}>
     Food's Restaurant <span><i class="fa-solid fa-utensils"></i></span>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active nav-item" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link nav-item" to="/login">
          login
        </Link>
        <Link className="nav-link nav-item mx-auto" to="/cart">
        <span className="text" style={{color:"white"}}>Cart :{items.length}</span>
            <i className="fa-sharp fa-solid fa-cart-shopping" style={{padding:"2px"}}></i>
        </Link>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header