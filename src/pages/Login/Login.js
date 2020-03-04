/** @format */

import React from 'react'
import { Grid, Input, Button, Checkbox } from 'semantic-ui-react'

import './Login.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <Navbar show={true} />
      <Grid>
        <Grid.Column widescreen={8}>
          <div className='left-side'></div>
        </Grid.Column>
        <Grid.Column widescreen={8}>
          <div className='right-side'>
            <div className='form'>
              <h1>
                <span className='block'>Log into your</span> <span className='blue-text'>RightCom XP </span> account
              </h1>

              <label className='my-label'>Email address</label>
              <Input placeholder='Enter your email address' />

              <label className='my-label'>Password</label>
              <Input placeholder='Enter your password' />

              <Link to='/dashbaord' style={{ color: '#fff' }}>
                <Button primary className='w100'>
                  SIGN IN
                </Button>
              </Link>

              <p className='options'>
                <span>
                  <Checkbox label='Keep me logged in' />
                </span>
                <span className='rightt blue-text'>
                  <b>FORGOT PASSWORD</b>
                </span>
              </p>

              <p className='form-footer'>
                Sign up{' '}
                <span className='blue-text'>
                  <Link to='/signup'>here</Link>
                </span>{' '}
                if you want to create an account
              </p>
            </div>
          </div>
        </Grid.Column>
      </Grid>
      <Footer />
    </div>
  )
}

export default Login
