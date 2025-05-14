import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Folders from './pages/Folders';
import Welcome from './pages/Welcome/Welcome'
import './styles/typography.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} /> 
       
    
        <Route path="/folders" element={<Folders />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);