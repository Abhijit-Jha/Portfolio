import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import { useRef } from 'react'
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

export function CompleteFrontPage(){
  //Scrollling feature
  const HomeRef = useRef();
  const AboutRef = useRef();
  const SkillRef = useRef();
  const ProjectsRef = useRef();
  const ContactRef = useRef();
  return <>
  {/* <div className="fixed bottom-10 right-10">
        <button className="w-6  rounded-full bg-red-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
</button>
  </div> */}
  <Header/>
  <About />
  <Skills/>
  <Projects/>
  <Contact/>
  </>
}

export default App
