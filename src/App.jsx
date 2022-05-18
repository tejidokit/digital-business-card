import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MainContent from './Footer'
import Info from './Info';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
      <Info/>
      <About/>  
      <Interest/> 
      <Footer/>
    </div>
  )
}

export default App
