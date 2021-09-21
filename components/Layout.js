import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>        
    <Head>
        <title>La Boétie</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
        {children}
    <Footer />
    </>


)

export default Layout;