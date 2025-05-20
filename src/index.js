import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Log from './Log';
import About from './About';
import Contact from './Contact';
import Forms from './Form';
import Reg from './Reg';
import Freg from './Freg';
import Fetch_dta from './Fetch_dta';
import Weather from './Weather';
import Weatherapp from './Weatherapp';
import Filmdata from './Filmdata';
import Detail from './Detail';
import Consume from './Context/Consume';
import Theme_provider from './Context/Theme_provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme_provider>
    <BrowserRouter>
    <Routes>
      <Route path='/demo' element={<Demo/>}></Route>
      <Route path='/log' element={<Log/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/form' element={<Forms/>}></Route>
      <Route path='/Reg' element={<Reg/>}></Route>
      <Route path='/Freg' element={<Freg/>}></Route>
      <Route path='/Fetch_dta' element={<Fetch_dta/>}></Route>
      <Route path='/w' elements={<Weather/>}></Route>
      <Route path='/app' element={<Weatherapp/>}></Route>
      <Route path='/Film' element={<Filmdata/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      <Route path='/consume' element={<Consume/>}></Route>

     
      

    
      </Routes></BrowserRouter>
    </Theme_provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
