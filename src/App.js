// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const enableMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#005914";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "#eee";
    }
  }
  return (
   <>
   <Router>
    <Navbar title="TextCooler" mode={mode} enableMode={enableMode}/>
      <Routes>
        <Route path="/" element={<TextArea mode={mode} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
   </>
  );
}

export default App;
