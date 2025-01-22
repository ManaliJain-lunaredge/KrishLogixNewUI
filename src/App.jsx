

import About from './Components/About'
import Tomorrow  from './Components/Tomorrow'
import Home from './Components/Home'
import Cost from './Components/Cost'
import Team from './Components/Team'
import { Route,Routes } from 'react-router-dom'
import Hero from './Pages/Hero'
import Deliver from './Components/Deliver'
import Insights from './Components/Insights'
import Contact from './Components/Contact'
import Client from './Components/Client'

function App() {
 

  return (
    <>
 <Hero/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route  element={<About/>}></Route>
    <Route path="/cost" element={<Cost/>}></Route>
    <Route path="/deliver" element={<Deliver/>}></Route>
    <Route path="/insights" element={<Insights/>}></Route>
    <Route path="/team" element={<Team/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/client" element={<Client/>}></Route>
    <Route path="/tomorrow" element={<Tomorrow/>}></Route>
   </Routes>
    </>
   
  )
}

export default App
