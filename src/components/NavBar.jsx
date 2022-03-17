import React from 'react'

import '../App.css';






const NavBar = () => {
  return(
      <>
      
        <nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex w-100'>
            <div className='container-fluid'>
            <div className='navbar-brand fw-bold animate__animated animate__rubberBand' ><span className='titulo__index'>El Puestico Burger</span> </div>
                <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'></span> </button>
                <div className='collapse navbar-collapse' id="navbarNavDropdown">
                  <div className='d-flex flex-row mx-3'>
                    
                </div>
                
                        <ul className='navbar-nav w-100 justify-content-end'>
                        <li className='nav-item'>
                            <a className='nav-link' href="index.html">Login</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="./pages/work.html">Trabaja con nosotros</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="./pages/zulianidad.html">Zulianidad</a>
                        </li>
                    </ul>
                    </div>
                  </div>
            </nav>
            </>)
  
}

export default NavBar