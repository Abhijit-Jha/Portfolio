import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'

import Skills from './component/Skills'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

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
  <Skills/>
  </>
}

export default App