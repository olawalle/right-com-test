/** @format */

import React from 'react'

import './Navbar.scss'
import logo from '../../assets/logo.svg'
import { Select, Dropdown, Container } from 'semantic-ui-react'

const Navbar = props => {
  return (
    <Container>
      <div className='navbar'>
        {props.show && <img src={logo} alt='' />}

        <Dropdown text='English' className='rightt'>
          <Dropdown.Menu>
            <Dropdown.Item text='English' />
            <Dropdown.Item text='French' />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  )
}

export default Navbar
