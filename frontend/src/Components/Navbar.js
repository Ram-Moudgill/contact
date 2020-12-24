import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="row bg-danger">
        <div className="col-10 mx-auto">
        <nav className='navbar navbar-expand-lg navbar-dark bg-danger'>
        <a className='navbar-brand' href='/'>
          Contact Application
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
           
            <li className='nav-item'>
              <NavLink className='nav-link' activeClassName='active' to='/home'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' activeClassName='active' to='/about'>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    </div>
     
    </>
  )
}

export default Navbar
