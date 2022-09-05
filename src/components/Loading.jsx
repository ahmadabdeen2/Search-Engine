import React from 'react'
import { Puff } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <Puff
        height='580'
        width='80'
        color='#7335C2'
        ariaLabel='circle-loading'

      />
    </div>
  )
}

export default Loading
