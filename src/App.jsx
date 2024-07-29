import React from 'react'
import PersonalFinance from './pages/P-Finance'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'


function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path='/' element={< Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Finance' element={<PersonalFinance />}/>
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      < Footer />
    </div>
  )
}

export default App
