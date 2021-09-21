import Link from 'next/link';

const Header = () => {
    return (
        <header className="header bg-black text-white">
            <div className="header-wrapper wrapper">
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