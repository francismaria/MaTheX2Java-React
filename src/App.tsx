import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import NotFound from './components/error/NotFound';

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
