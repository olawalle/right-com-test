/** @format */

import React, { Component } from 'react'
import logo from '../../assets/logo.png'
import icon1 from '../../assets/Group 1721.svg'
import icon2 from '../../assets/Group 1722.svg'
import icon3 from '../../assets/Group 1723.svg'
import icon4 from '../../assets/Group 1724.svg'
// page styles
import './Splashscreen.scss'
import { Loader } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'

export class Splashscreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log(this.props)
      this.props.history.push('/login')
    }, 2000)
  }
  render() {
    return (
      <div className='splashscreen'>
        <div className='contents'>
          <img src={logo} alt='' className='logo' />
          <div className='icons'>
            <Link to='/login'>
              <img src={icon1} alt='' />
            </Link>
            <img src={icon2} alt='' />
            <img src={icon3} alt='' />
            <img src={icon4} alt='' />
          </div>

          <Loader active inline className='page-loader' />
        </div>
      </div>
    )
  }
}

export default withRouter(Splashscreen)
