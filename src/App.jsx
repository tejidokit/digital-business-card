import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MainContent from './MainContent'
import ContactInfo from './ContactInfo'
import ProfilePic from './ProfilePic'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
      <ProfilePic />  
      <ContactInfo/> 
      <MainContent/>
    </div>
  )
}

export default App
