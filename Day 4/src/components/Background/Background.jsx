import React from 'react'
import './Background.css'
const Background = (props) => {
  return (
    <div className='border-grey'>
      {props.children}
    </div>
  )
}

export default Background
