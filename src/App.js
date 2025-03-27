import React from 'react'
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Movies/:id" element={<SingleMovie/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

