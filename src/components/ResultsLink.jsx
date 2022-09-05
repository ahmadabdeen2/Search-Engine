import React from 'react'

const ResultsLink = ({link ,title, description}) => {
  return (
    <div className='w-full flex items-start'>
    <a href={link} target="_blank" rel='noreferrer'>
        <p className='text-sm'> {link.length > 30 ? link.substring(0,30) : link } </p>
        <p className='text-lg text-blue-500' > {title} </p>
        <p>{description}</p>
    </a>
</div>
  )
}

export default ResultsLink