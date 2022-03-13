import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import NotFound from './components/error/NotFound';

function App() {
  return (
    <div className="Root">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
