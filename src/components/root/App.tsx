import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from 'components/error/NotFound';
import Header from 'components/header/Header';
import Rules from 'components/rules/Rules';
import Footer from 'components/footer/Footer';

function App() {
  return (
    <section id="root-app">
      <Header />
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
