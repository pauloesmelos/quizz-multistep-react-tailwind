import React from 'react';
import Game1 from './Game1';
import Game2 from './Game2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './components/Footer/Footer';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computacao" element={<Game1 />} />
          <Route path="/geografia" element={<Game2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;