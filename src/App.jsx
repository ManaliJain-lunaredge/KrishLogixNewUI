

import About from './Components/About'
import Careers  from './Components/Careers'
import Home from './Components/Home'
import Services from './Components/Services'

import { Route,Routes } from 'react-router-dom'
import Hero from './Pages/Hero'

function App() {
 

  return (
    <>
 {/* <Hero/> */}
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/careers" element={<Careers/>}></Route>
   </Routes>
    </>
   
  )
}

export default App
