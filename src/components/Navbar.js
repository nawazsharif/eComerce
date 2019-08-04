import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
// import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
// import { ButtonContainer } from "./Button";

export default class componentName extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link to='/About' className='nav-link'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/OrderOnline' className='nav-link'>
                Order Online
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/reservation' className='nav-link'>
                Online Table Reservation
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-link'>
                Contact us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/cart' className='nav-link'>
                <i className='fas fa-cart-plus' /> My Cart
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='tel:01781554418' className='nav-link'>
                <i className='fas fa-phone-volume' /> <b>01781554418</b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
