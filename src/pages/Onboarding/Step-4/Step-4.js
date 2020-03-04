/** @format */

import React, { useState } from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'

import question from '../../../assets/Icon material-help.svg'

export const Step4 = props => {
  return (
    <div>
      <h1>
        <span className='block'>All set up and</span>
        ready to
        <span className='blue-text'>launch</span>
      </h1>
      <h4>Check your mail for a link that was sent. Click on the link to verify your email address</h4>

      <p className='resend blue-text' style={{ width: 100 }}>
        resend link <Icon name='caret right' />
      </p>
    </div>
  )
}

export default Step4
