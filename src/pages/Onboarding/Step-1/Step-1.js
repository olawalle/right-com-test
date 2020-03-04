/** @format */

import React from 'react'
import { Input, Button } from 'semantic-ui-react'

const Step1 = props => {
  return (
    <div>
      <h1>
        <span className='block'>Hello, welcom</span> to <span className='blue-text'>RightCom XP </span>
      </h1>
      <h4>Tell us a bit about yourself, to get you started</h4>

      <label className='my-label'>First name</label>
      <Input placeholder='Enter your email address' />

      <label className='my-label'>Last name</label>
      <Input placeholder='Enter your password' />

      <Button primary className='w100' onClick={props.nextHandler}>
        CONTINUE
      </Button>
    </div>
  )
}

export default Step1
