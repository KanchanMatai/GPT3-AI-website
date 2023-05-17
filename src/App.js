import React from 'react'
import { CTA, Brands, Navbar} from './Components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import './App.css';
const App = ()=>{
  return (
    <div className='App'>
     <div className='gradient__bg'>
      <Navbar/>
      <Header/>
     </div>
     <Brands/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <CTA/>
     <Blog/>
     <Footer/>
    </div>
  )
  }

export default App