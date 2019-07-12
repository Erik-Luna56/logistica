import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Slider from './components/slider/Slider';
import Login from './components/login/Login';

function App() {
  return (

    
    <div className="App">
       <header>
      <Navbar />
      <Slider />
      
     
      </header>
    </div>
  );
}

export default App;
