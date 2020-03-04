/** @format */

import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import './MainDashboard.scss'
import MyCard from '../../Components/MyCard/MyCard'
import InnerNav from '../../Components/InnerNav/InnerNav'

import gifts from '../../assets/Mask Group 1.svg'

export class MainDashboard extends Component {
  constructor() {
    super()
    this.state = {
      cards: [
        {
          text: 'User management',
          subText: 'Manage all your users in one hub',
          image: 'Group 1505.svg',
          btnText: 'MANAGE'
        },
        {
          text: 'Products overview',
          image: 'Products Overview.svg',
          subText: 'Manage your billings and cycle',
          btnText: 'MANAGE'
        },
        {
          text: 'Subscriptions',
          image: 'Group 1535.svg',
          subText: 'Access your purchased products',
          btnText: 'VIEW PRODUCTS'
        },
        {
          text: 'My account',
          image: 'Group 1583.svg',
          subText: 'Update your account info and security',
          btnText: 'UPDATE'
        }
      ]
    }
  }
  render() {
    const { cards } = this.state
    return (
      <>
        <Navbar show={true} />
        <InnerNav />
        <div className='main-dashbaord'>
          <Container>
            <div className='cards'>
              <Grid columns={4}>
                {cards.map(card => (
                  <Grid.Column key={card.text}>
                    <MyCard card={card} type={2} />
                  </Grid.Column>
                ))}
              </Grid>
            </div>
            <div className='explore'>
              <Grid columns={2}>
                <Grid.Column>
                  <p>
                    <b>Explore other apps in the suite</b>
                  </p>
                  <button className='blue-btn'>BROWSE APPS</button>
                </Grid.Column>
                <Grid.Column>
                  <img src={gifts} alt='' />
                </Grid.Column>
              </Grid>
            </div>
          </Container>
        </div>

        <Footer />
      </>
    )
  }
}

export default MainDashboard
