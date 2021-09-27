import Link from 'next/link';
// https://react-icons.github.io/react-icons/icons?name=fa
import { FaInstagram, FaFacebookF } from 'react-icons/fa';



const Footer = () => (
    <footer className='footer background-color-blue text-white text-sm sm:text-base'>
    <div className='footer-wrapper wrapper'>
      <div className="text-footer-container">
        <h1 className="footer-sub-title sub-title text-2xl text-center pt-2 color-white ">L' excellence de la tradition française au service de votre élégance</h1>
      </div>
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