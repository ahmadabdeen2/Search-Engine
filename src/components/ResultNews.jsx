import React from 'react'

const ResultNews = ({link, description, title}) => {
  return (
    <div className='w-full flex items-start'>
    <a href={link} target="_blank" rel='noreferrer' className='border-b-2 border-gray-900 dark:border-gray-200'>
        <p className='text-sm'> {link.length > 30 ? link.substring(0,30) : link } </p>
        <p className='text-lg text-blue-500' > {title} </p>
        
    </a>
</div>
  )
}

export default ResultNews