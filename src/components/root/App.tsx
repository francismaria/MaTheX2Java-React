import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from '../error/NotFound';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Translator from '../translator/Translator';
import Rules from 'components/rules/Rules';
import About from 'components/about/About';
import Contact from 'components/contact/Contact';

function App() {
  return (
    <section id="root-app">
      <Header />
      <Routes>
        <Route path="/" element={<Translator />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
