import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import NotFound from '../error/NotFound';

function App() {
  return (
    <section id="root-app">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
