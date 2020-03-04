/** @format */

import React, { useState } from 'react'
import { Grid, Input, Button, Checkbox } from 'semantic-ui-react'

import './Signup.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [label, setLabel] = useState(
    `By clicking the "Create Account" button, you are creating a RightCom XP account, and you agree to RightCom's Terms of Use and Privacy Policy.`
  )
  return (
    <div className='signup'>
      <Navbar show={true} />
      <Grid>
        <Grid.Column widescreen={8}>
          <div className='left-side'></div>
        </Grid.Column>
        <Grid.Column widescreen={8}>
          <div className='right-side'>
            <div className='form'>
              <h1>
                <span className='block'>Get started</span> with your account
              </h1>

              <label className='my-label'>Email address</label>
              <Input placeholder='Enter your email address' />

              <label className='my-label'>Password</label>
              <Input placeholder='Enter your password' />

              <Button primary className='w100'>
                SIGN UP
              </Button>

              <p className='options'>
                <span>
                  <Checkbox label={label} />
                </span>
              </p>

              <p className='form-footer'>
                Sign in{' '}
                <span className='blue-text'>
                  <Link to='/login'>here</Link>
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

export default Signup
