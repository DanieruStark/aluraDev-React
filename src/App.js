import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comunidade from './pages/comunidade';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comunidade' element={<Comunidade/>}/>
      </Routes>
    </Router>
  );

}

export default App;
