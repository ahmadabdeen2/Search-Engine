import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultContextProvider.js'
import ResultsLink from './ResultsLink'
import ResultsImages from './ResultsImages'
import Loading from './Loading'
import ResultsVideo from './ResultsVideo'
import ResultNews from './ResultNews'
import { darklogo, whitelogo, searchicon } from '../assets'
const Results = () => {
  const {
    results,
    loading,
    getResults,
    searchField,
    darkTheme
  } = useResultContext()
  const [fact, setFact] = useState([])
  const [ignore, setIgnore] = useState(false)
  const matchYoutubeUrl = url => {
    let p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    if (url.match(p)) {
      return url.match(p)[1]
    }
    return false
  }
  const location = useLocation()
  console.log(location.pathname)
  useEffect(() => {
    getFacts()  
    if (searchField) {

      getResults(
        `${location.pathname}/q=${searchField}&num=100&lr=lang_en&hl=en&cr=US`
      )
      
    }
  }, [searchField, location.pathname])


  const getFacts = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
      method: 'GET',
      headers: { 'X-Api-Key': process.env.REACT_APP_NINJAS_API_KEY }
    })

    const data = await response.json()
    setFact(data)
    console.log(data)
    console.log(fact)



  }


  if (loading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <>
          {results.length !== 0 ? (
            <div className='flex flex-wrap justify-between space-y-6 p-1'>
              {results?.results?.map(({ link, title, description }, index) => (
                <ResultsLink
                  link={link}
                  title={title}
                  description={description}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <div className='min-h-[60vh] flex flex-col items-center justify-center'>
              <img
                src={darkTheme ? whitelogo : darklogo}
                className='w-[78px] h-[40px] mb-5'
                alt='logo'
              />
              <h2 className='text-3xl dark:text-gray-200 text-gray-900 flex'>
                {' '}
                Search Engine{' '} 
              </h2>
              <h3 className='text-xl dark:text-gray-200 text-gray-900 flex mt-10'>
                {' '}
                Random Fact of the Day <br/>
              
              </h3>
              <h3 className='text-md dark:text-gray-200 text-gray-900 flex justify-center items-center text-center'>
                {' '}
                {fact[0]?.fact}
              </h3>
              
            </div>
          )}
        </>
      )
    case '/news':
      return (
        <>
          {results.length !== 0 ? (
            <div className='flex flex-wrap justify-between space-y-6 p-1'>
              {results?.entries?.map(({ link, title }, index) => (
                <ResultNews link={link} title={title} key={index} />
              ))}
            </div>
          ) : (
            <div className='min-h-[60vh] flex flex-col items-center justify-center'>
              <img
                src={darkTheme ? whitelogo : darklogo}
                className='w-[78px] h-[40px] mb-5'
                alt='logo'
              />
              <h2 className='text-3xl dark:text-gray-200 text-gray-900 flex'>
                {' '}
                Search Engine{' '} 
              </h2>
              <h3 className='text-xl dark:text-gray-200 text-gray-900 flex mt-10'>
                {' '}
                Random Fact of the Day <br/>
              
              </h3>
              <h3 className='text-md dark:text-gray-200 text-gray-900 flex justify-center items-center text-center'>
                {' '}
                {fact[0]?.fact}
              </h3>
              
            </div>
          )}
        </>
      )

    case '/image':
      return (
        <>
          {results.length !== 0 ? (
            <div className='flex flex-wrap justify-center items-center'>
              {results?.image_results?.map(
                ({ image, link: { href, title } }, index) => {
                  return (
                    <ResultsImages
                      key={index}
                      image={image}
                      link={href}
                      title={title}
                    />
                  )
                }
              )}
            </div>
          ) : (
            <div className='min-h-[60vh] flex flex-col items-center justify-center '>
              <img
                src={darkTheme ? whitelogo : darklogo}
                className='w-[78px] h-[40px] mb-5'
                alt='logo'
              />
              <h2 className='text-3xl dark:text-gray-200 text-gray-900 flex'>
                {' '}
                Search Engine{' '} 
              </h2>
              <h3 className='text-xl dark:text-gray-200 text-gray-900 flex mt-10'>
                {' '}
                Random Fact of the Day <br/>
              
              </h3>
              <h3 className='text-md dark:text-gray-200 text-gray-900 flex justify-center items-center text-center'>
                {' '}
                {fact[0]?.fact}
              </h3>
              
            </div>
          )}
        </>
      )
    case '/video':
      return (
        <>
          {results.length !== 0 ? (
            <div className=' justify-center items-center'>
              {results?.results
                ?.filter(obj => matchYoutubeUrl(obj.link))
                .map(({ title, link, description }, index) => {
                  return (
                    <ResultsVideo
                      key={index}
                      link={link}
                      title={title}
                      description={description}
                    />
                  )
                })}
            </div>
          ) : (
            <div className='min-h-[60vh] flex flex-col items-center justify-center'>
              <img
                src={darkTheme ? whitelogo : darklogo}
                className='w-[78px] h-[40px] mb-5'
                alt='logo'
              />
              <h2 className='text-3xl dark:text-gray-200 text-gray-900 flex'>
                {' '}
                Search Engine{' '} 
              </h2>
              <h3 className='text-xl dark:text-gray-200 text-gray-900 flex mt-10'>
                {' '}
                Random Fact of the Day <br/>
              
              </h3>
              <h3 className='text-md dark:text-gray-200 text-gray-900 flex justify-center items-center text-center'>
                {' '}
                {fact[0]?.fact}
              </h3>
              
            </div>
          )}
        </>
      )

    default:
      return (
        <div className='min-h-[60vh] flex flex-col items-center justify-center'>
          <img
            src={darkTheme ? whitelogo : darklogo}
            className='w-[78px] h-[40px] mb-5'
            alt='logo'
          />
          <h2 className='text-2xl dark:text-gray-200 text-gray-900 flex'>
            {' '}
            Error - Not a valid link{' '}
          </h2>
        </div>
      )
  }
}

export default Results
