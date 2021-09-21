import Link from 'next/link';

//import Image from 'next/Image';


const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <nav className="navbar text-center text-6xl">
                    <Link href="/">
                        <a className="title">LA BOÉTIE</a>
                    </Link>
                </nav>
        
        </div>   
        </header>
    )   
}



export default Header