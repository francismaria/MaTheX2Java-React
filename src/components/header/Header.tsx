import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import './Header.css';

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>MaTheX2Java</h1>
      </Link>
      <Menu />
    </header>
  );
}

export default Header;
