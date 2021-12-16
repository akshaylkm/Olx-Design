import {BrowserRouter, Route,Routes} from 'react-router-dom'
import React from 'react';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} /> 
      <Route path="/Login" element={<Login />} />
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
