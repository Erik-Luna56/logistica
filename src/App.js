import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Slider from './components/slider/Slider';
import Form from './components/Form/Index';

function App() {
  return (

    
    <div className="App">
       <header>

      <Navbar />
      </header>
      <Slider />
      <Form />
     
    </div>
  );
}

export default App;
