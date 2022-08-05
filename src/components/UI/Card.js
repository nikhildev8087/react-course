import React from 'react'
import '../UI/Card.css'

function Card(props) {
    const classes = 'card' + props.className;
  return (
    <div className='card'>{props.children}</div>
  )
}

export default Card
