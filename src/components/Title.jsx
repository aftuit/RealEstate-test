import React from 'react'

const Title = ({title}) => {
  return (
    <div className='title'>
        <p className='text-md text-bold'><span>{title}</span></p>
    </div>
  )
}

export default Title