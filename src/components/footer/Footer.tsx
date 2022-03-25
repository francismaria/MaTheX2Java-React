import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p id="footerCredit">
        MaTheX2Java was proudly created by{' '}
        <a href="https://github.com/francismaria">francismaria</a>. If you have any bugs questions,
        improvements or just want to check all that&apos;s behind the curtains please address it
        through the <Link to="/contact">contact</Link> page.
      </p>
      <nav id="footerLinks">
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
      <p id="footerCopyright">
        ©<a href="https://github.com/francismaria">francismaria</a>, 2022
      </p>
    </footer>
  );
}

export default Footer;
