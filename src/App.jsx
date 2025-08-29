import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CategorisSection from './components/CategorisSection'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* Home Page */}
      <Navbar1></Navbar1>
      <Hero></Hero>
      <CategorisSection></CategorisSection>
      <Footer></Footer>
      {/* End Home Page */}
    </>
  )
}

export default App
