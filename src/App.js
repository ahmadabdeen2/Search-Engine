import {Navbar, Footer, Routers} from './components'
import {useState} from 'react'
import {useResultContext} from './contexts/ResultContextProvider'
function App() {
  // const [darkTheme, setDarkTheme] = useState(true)
  const {searchField, darkTheme, setDarkTheme} = useResultContext()
    return (
    <div className={darkTheme ? 'dark' : ''}>  
    <div className='bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen'>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Routers/>
      <Footer/>
    </div>
    

    </div>
  );
}

export default App;
