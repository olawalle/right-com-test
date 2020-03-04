/** @format */

import React from 'react'
import { Grid, Container, Icon } from 'semantic-ui-react'
import userPhoto from '../../assets/Group 1431.svg'
import icon1 from '../../assets/Group 1436.svg'
import icon2 from '../../assets/Group 1434.svg'

import './Innernav.scss'
const InnerNav = () => {
  return (
    <div className='innernav'>
      <Container>
        <Grid>
          <Grid.Column width={8}>
            <div className='image'>
              <img src={userPhoto} alt='' />
            </div>
            <div className='user-details'>
              <p className='username m-bold'>Alhassan Dantata</p>
              <p className='blue-text m-bold'>
                EDIT MY PROFILE <Icon name='arrow right' />{' '}
              </p>
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <img src={icon1} alt='' className='nav-icon' />
            <div className='numbers'>
              <p className='heading'>
                <b>TOTAL USERS</b>
              </p>
              <p className='count m-bold'>
                210 <span className='pale-btn'>ADD USER</span>
              </p>
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <img src={icon2} alt='' className='nav-icon' />
            <div className='numbers'>
              <p className='heading'>
                <b>WALLET BALANCE</b>
              </p>
              <p className='count m-bold'>
                10,000 C <span className='pale-btn'>TOP UP</span>
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default InnerNav
