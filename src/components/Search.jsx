import React, { useState, useRef } from 'react'
import { useResultContext } from '../contexts/ResultContextProvider.js'
import { MdKeyboardVoice } from 'react-icons/md'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'
const Search = () => {
  const { setSearchField, searchField } = useResultContext()
  let [clicks, setClicks] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const inputref = useRef();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  const setSpeech = () => {
    setClicks(clicks => clicks + 1)
    console.log(clicks)
    if (clicks % 2 !== 0) {
      setSearchField('Listening...')
      SpeechRecognition.startListening()
    } else {
      SpeechRecognition.stopListening()
    }
    setSearchField(transcript)
    inputref.current.value = transcript

  }
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      setSearchField(e.target.value)
    }
  }

  return (
    <>
      <div class='relative md:w-1/2 mb-4 mt-2'>
        <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            class='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <input
          type='search'
          ref={inputref}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          // value={searchField}
          id='default-search'
          class='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Search'
        />
        <button
          onClick={() => setSpeech()}
          class='text-gray-900 absolute right-[5rem] bottom-2.5  px-4 py-2  dark:text-gray-200'
        >
          <MdKeyboardVoice />
        </button>
        <button
          type='submit'
          onClick={() => setSearchField(searchTerm)}
          class='text-white absolute right-2.5 bottom-2.5 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-200 dark:hover:text-gray-900'
        >
          Search
        </button>
      </div>
      <div></div>
    </>
  )
}

export default Search
