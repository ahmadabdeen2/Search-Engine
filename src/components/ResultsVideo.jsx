import React from 'react'
import ReactPlayer from 'react-player'
const ResultsVideo = ({link, description, title}) => {

    
  return (
    <div className='flex-col flex'>
    <a href={link} className='justify-start pb-5 pt-5' target="_blank" rel='noreferrer'>
            <h2 className='pb-2 sm:text-[30px] text-[20px]'> {title}</h2>
            <p className='pb-5'> {description}</p>
            <div className='rounded-3xl  overflow-hidden max-w-xs'>
            <ReactPlayer url={link} width={'354px'} height={'200px'}  loading='lazy'/>
            </div>
     </a>

    </div>
  )
}

export default ResultsVideo