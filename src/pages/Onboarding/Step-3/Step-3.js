/** @format */

import React, { useState } from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'

import question from '../../../assets/Icon material-help.svg'

const Step3 = props => {
  const [options, setoptions] = useState([
    { text: 'RESELLER', selected: false },
    { text: 'CLIENT', selected: false }
  ])

  const pickOption = n => {
    let options_ = [...options].map((option, i) => {
      return i === n
        ? {
            ...option,
            selected: true
          }
        : {
            ...option,
            selected: false
          }
    })
    setoptions(options_)
  }

  return (
    <div>
      <h1>
        <span className='block'>
          <span className='blue-text'>Finally</span> select your{' '}
        </span>{' '}
        account type
      </h1>
      <h4>Here you can select the account type you wish to be operating as;</h4>

      {options.map((option, n) => (
        <>
          <div className={`user-options ${option.selected && 'active'}`} key={option.text} onClick={() => pickOption(n)}>
            {option.text}
            {option.selected && <Icon name='check circle' style={{ float: 'right', marginRight: 12 }} />}
          </div>

          <img src={question} alt='' className='help' />
        </>
      ))}

      <button className='blue-btn' onClick={props.nextHandler}>
        FINISH
      </button>
    </div>
  )
}

export default Step3
