import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from '../error/NotFound';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function App() {
  return (
    <section id="root-app">
      <Header />
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
