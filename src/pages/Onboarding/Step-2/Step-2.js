/** @format */

import React from 'react'
import { Input, Button, Form, Checkbox } from 'semantic-ui-react'

const Step2 = props => {
  return (
    <div>
      <h1>
        <span className='block'>Hello, welcom</span> to <span className='blue-text'>RightCom XP </span>
      </h1>
      <h4>Tell us a bit about yourself, to get you started</h4>

      <label className='my-label'>Business name</label>
      <Input placeholder='Enter your business name here' />

      <label className='my-label'>Select number of employees below (including yourself)</label>

      <div style={{ marginTop: 20, marginBottom: 30 }}>
        <Form>
          <Form.Field>
            <Checkbox radio label='Choose this' />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Or that' />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Choose this' />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Or that' />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Choose this' />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Or that' />
          </Form.Field>
        </Form>
      </div>

      <label className='my-label'>Select country form option</label>
      <Input placeholder='' />

      <button primary className='pale-btn' onClick={props.prevHandler}>
        BACK
      </button>
      <button primary className='blue-btn' onClick={props.nextHandler}>
        CONTINUE
      </button>
    </div>
  )
}

export default Step2
