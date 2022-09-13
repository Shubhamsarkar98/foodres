import React from 'react'
import { Link } from 'react-router-dom'
const SHeader = () => {
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
   
  </div>
</nav>
    </div>
  )
}

export default SHeader