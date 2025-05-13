import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Folders from './pages/Folders';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
    
        <Route path="/folders" element={<Folders />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);