import Link from 'next/link';
// https://react-icons.github.io/react-icons/icons?name=fa
import { FaInstagram, FaFacebookF } from 'react-icons/fa';



const Footer = () => (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <nav className="nav flex flex-col">
          <ul>
            <li>
              <p>19, rue de la Boétie 75008 Paris</p>
            </li>
            <li>
              <Link href="tel:+33142650716">
                <a>+33 1 42 65 07 16</a>
              </Link>
            </li>
            <li>
              <Link href="mailto:contact@maisonlaboetie.com">
                <a>contact@maisonlaboetie.com</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/maisonlaboetie/">
                <a>
                  <FaInstagram />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/maisonlaboetie">
                <a>
                  <FaFacebookF />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
)

export default Footer