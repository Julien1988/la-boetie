import Link from 'next/link';

const Header = () => {
    return (
        <header className="header background-color-blue text-white">
            <div className="header-wrapper wrapper">
                <nav className="navbar text-center text-4xl sm:text-5xl">
                    <Link href="/">
                       <a> <h1 className="title">LA BOÉTIE</h1></a>
                    </Link>
                </nav>
        
        </div>   
        </header>
    )   
}



export default Header