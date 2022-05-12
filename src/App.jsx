import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MainContent from './MainContent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <MainContent/>
    </div>
  )
}

export default App
