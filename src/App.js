import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Slider from './components/slider/Slider';


function App() {
  return (

    
    <div className="App">
       <header>

      <Navbar />
      </header>
      <Slider />
     
    </div>
  );
}

export default App;
