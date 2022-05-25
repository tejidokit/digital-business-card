import { useState } from 'react'
import logo from './imgs/logo.svg'
import './styles/styles.css'
import './App.css'
import MainContent from './components/Footer/Footer'
import Info from './components/Info/Info';
import About from './components/About/About';
import Interest from './components/Interest/Interest';
import Footer from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card-container"> 
        <Info/>
        <About/>  
        <Interest/> 
        <Footer/>
      </div>
    </div>
  )
}

export default App
