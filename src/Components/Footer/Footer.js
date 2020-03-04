/** @format */

import React from 'react'

import './Footer.scss'
import logo from '../../assets/Group 1028.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='links'>
        <span className='blue-text'>c2020</span>
        <span>Explore RightcomXP</span>
        <span>More Products</span>
        <span>Help and Information</span>

        <span className='rightt'>
          A product of <img src={logo} alt='' />
        </span>
      </div>
    </div>
  )
}

export default Footer
