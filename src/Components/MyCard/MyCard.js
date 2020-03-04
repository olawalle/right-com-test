/** @format */

import React from 'react'
import './MyCard.scss'
import { Icon } from 'semantic-ui-react'

const MyCard = props => {
  const getImage = name => {
    return require(`../../assets/${name}`)
  }
  return (
    <div className='my-card'>
      <div className='img'>
        <img src={getImage(props.card.image)} alt='' />
      </div>
      <p className='card-text'>{props.card.text}</p>
      {props.type && props.type === 2 && <p className='sub-text'>{props.card.subText}</p>}
      <p className='blue-text'>
        {props.card.btnText || 'LEARN MORE'}
        <Icon name='arrow right' style={{ margingLeft: 10 }} />
      </p>
    </div>
  )
}

export default MyCard
