import React, {createContext, useContext, useState} from 'react'


const ResultContext= createContext([[],() => {}])
const baseUrl =   'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) =>{
    const [results,setResults] = useState([])
    const [loading,setLoading] = useState(false)
    const [searchField, setSearchField] = useState('')
    const [darkTheme, setDarkTheme] = useState(false)
    const getResults = async (url) =>{
        setLoading(true)
        const response = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': process.env.REACT_APP_GOOGLE_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
              }
        })

        const data = await response.json();
        console.log(data)
        setResults(data)
        setLoading(false)

    }
    return(
        <ResultContext.Provider value={{getResults, results, searchField, setSearchField, loading, darkTheme, setDarkTheme}}>
                {children}
        </ResultContext.Provider>
    )
} 

export const useResultContext = () => useContext(ResultContext)