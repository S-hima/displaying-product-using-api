import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Addproducts from './pages/Addproducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/product'element={<App />}/>
      <Route path='/'element={<Addproducts />}/>
      </Routes>
      </BrowserRouter>
      


  </React.StrictMode>
);


