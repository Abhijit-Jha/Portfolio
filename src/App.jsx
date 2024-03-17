import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header, { FrontPage } from './component/Header'

import Skills from './component/Skills'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Projects from './component/Projects'

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<CompleteFrontPage/>}></Route>
    <Route path="/skill" element={<Skills/>}></Route>
  </Routes>
  </BrowserRouter>
  
  </>
}

function CompleteFrontPage(){
  return <>
  <Header/>
  {/* <FrontPage open={open}></FrontPage> */}
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  </>
}

export default App
