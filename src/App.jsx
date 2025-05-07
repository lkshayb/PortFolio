import './App.css'
import HeroSection from './comp/Hero'
import About from './comp/About'
import Project from './comp/Project'
import Skills from './comp/Skills'
import Contact from './comp/Contact'
import Navbar from './comp/Navbar'
import React, { useRef, useState } from 'react'



export default function App() {
  const aboutRef = useRef();
  const proRef = useRef();
  const SkillRef = useRef();    
  const ContRef = useRef();
  const HeroRef = useRef();
  return (
    <div>
      <Navbar aboutRef={aboutRef} proRef={proRef} SkillRef={SkillRef} ContRef={ContRef} HeroRef={HeroRef}/>

      <div ref={HeroRef}>
        <HeroSection proRef={proRef} ContRef={ContRef}/>
      </div>
      
      <div ref={aboutRef}>
        <About/>
      </div>
      <div ref={proRef}>
        <Project/>
      </div>
      <div ref={SkillRef}>
        <Skills/> 
      </div>
      <div ref={ContRef}>
        <Contact HeroRef={HeroRef}/>
      </div>
    </div>
  )
}