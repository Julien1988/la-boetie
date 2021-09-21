import Link from 'next/link';

const Footer = () => (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <nav className="nav">
        <p>19, rue de la Boétie 75008 Paris</p>
        <Link href="#">
          <a>+33 1 42 65 07 16</a>
        </Link>
        <Link href="#">
          <a>contact@maisonlaboetie.com</a>
        </Link>
        </nav>
      </div>
    </footer>
)

export default Footer