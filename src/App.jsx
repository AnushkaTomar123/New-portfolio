import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter,  Routes,Route } from "react-router-dom"

import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


import './App.css';


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>

      <Route path="/Skills" element={ <Skills/>}/>
      <Route path="/Contact" element={  <Contact/>}/>
     
      </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
