import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const handleMenuClick = () => {
    const menuContainer = document.getElementById('menuLinksContainer');

    if (!menuContainer) return;

    if (window.getComputedStyle(menuContainer, null).getPropertyValue('max-height') === '140px') {
      menuContainer.style.maxHeight = '0';
    } else {
      menuContainer.style.maxHeight = '140px';
    }
  };

  return (
    <div id="menu">
      <div
        id="menuIcon"
        data-testid="menuIcon"
        role="menu"
        tabIndex={0}
        onClick={handleMenuClick}
        onKeyDown={handleMenuClick}
      >
        <i className="fas fa-bars" />
      </div>
      <nav id="menuLinksContainer" data-testid="menuLinksContainer">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
