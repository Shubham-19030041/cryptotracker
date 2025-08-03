import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './Components/Footer/Footer'




function App() {


  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/coin/:coinId' element={<Coin />} />
       
      </Routes>
      <Footer />
    </div>
  )
}

export default App
