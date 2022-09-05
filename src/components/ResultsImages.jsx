import React from 'react'

const ResultsImages = ({link, image, title}) => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
       <a className='p-2' href={link} target='_blank' rel="noreferrer"> 
       <img src={image?.src} alt={title} className='sm:h-[300px] w-[300px]'loading='lazy'/>
       <p className='w-36 break-words text-sm mt-2 flex flex-wrap'>
       {title}
       </p>
        </a>
    </div>
  )
}

export default ResultsImages