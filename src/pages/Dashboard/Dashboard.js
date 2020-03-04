/** @format */

import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import './Dashboard.scss'
import MyCard from '../../Components/MyCard/MyCard'
import { Link } from 'react-router-dom'

export class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      cards: [
        {
          text: 'User management',
          image: 'Group 1505.svg'
        },
        {
          text: 'Products overview',
          image: 'Products Overview.svg'
        },
        {
          text: 'Subscriptions',
          image: 'Group 1535.svg'
        },
        {
          text: 'My account',
          image: 'Group 1583.svg'
        },
        {
          text: 'High-level security',
          image: 'Security-XP.svg'
        }
      ]
    }
  }
  render() {
    const { cards } = this.state
    return (
      <>
        <Navbar show={true} />
        <div className='dashbaord'>
          <Container>
            <h1>
              <span className='block'>Welcome to the</span>
              new <span className='blue-text'>RightComXP</span>
            </h1>
            <h4>
              An enterprise-class software for building, delivering and measuring the experiences that businesses provide to their
              customers, employees
            </h4>

            <div className='cards'>
              <Grid columns={3}>
                {cards.map(card => (
                  <Grid.Column key={card.text}>
                    <MyCard card={card} />
                  </Grid.Column>
                ))}
              </Grid>
            </div>
          </Container>
        </div>

        <div className='discover'>
          <p>Discover what's possible on XP</p>
          <Link to='/main-dashbaord' style={{ color: '#fff' }}>
            <button className='blue-btn'>GO TO DASHBOARD</button>
          </Link>
        </div>
        <Footer />
      </>
    )
  }
}

export default Dashboard
