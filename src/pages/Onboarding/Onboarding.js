/** @format */

import React, { Component } from 'react'

import './Onboarding.scss'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import assistant from '../../assets/Group 1719.svg'
import Step1 from './Step-1/Step-1'
import Step3 from './Step-3/Step-3'
import Step2 from './Step-2/Step-2'
import Step4 from './Step-4/Step-4'

export class Onboarding extends Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      name: 'Alhassan'
    }
  }

  componentDidMount() {
    console.log(this.state)
  }

  nextHandler = () => this.setState({ step: this.state.step + 1 })
  prevHandler = () => this.setState({ step: this.state.step - 1 })

  render() {
    const { step } = this.state
    return (
      <div className='onboarding'>
        <div className='indicator'>
          <div className='progress' style={{ width: `${step * 25}%` }}></div>
        </div>
        <Navbar show={false} />
        <div className='formm'>
          <img src={assistant} alt='' className='assistant' />

          {step === 1 && <Step1 nextHandler={this.nextHandler} />}

          {step === 2 && <Step2 nextHandler={this.nextHandler} prevHandler={this.prevHandler} />}

          {step === 3 && <Step3 nextHandler={this.nextHandler} prevHandler={this.prevHandler} />}

          {step === 4 && <Step4 nextHandler={this.nextHandler} prevHandler={this.prevHandler} />}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Onboarding
