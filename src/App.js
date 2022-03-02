import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.stlyes.jsx';

import { AppContainer, AppBody } from './App.stlyes.jsx';

import Home from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';


function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <AppBody>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </AppBody>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
