import Link from 'next/link';
// https://react-icons.github.io/react-icons/icons?name=fa
import { FaInstagram, FaFacebookF } from 'react-icons/fa';



const Footer = () => (
    <footer className='footer  bg-black text-white'>
      <div className='footer-wrapper wrapper'>
        <nav className="nav">
          <ul className="flex flex-col">
            <li className="flex justify-end">
              <p>19, rue de la Boétie 75008 Paris</p>
            </li>
            <li className="flex justify-end">
              <Link href="tel:+33142650716">
                <a>+33 1 42 65 07 16</a>
              </Link>
            </li>
            <li className="flex justify-end">
              <Link href="mailto:contact@maisonlaboetie.com">
                <a>contact@maisonlaboetie.com</a>
              </Link>
            </li>
            <li className="flex justify-end flex-row">
              <Link href="https://www.instagram.com/maisonlaboetie/">
                <a className="pr-1 text-lg">
                  <FaInstagram />
                </a>
            </Link>
            <Link href="https://www.facebook.com/maisonlaboetie">
                <a className="pl-1">
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