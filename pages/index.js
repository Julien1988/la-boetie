import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import componentImg from '../public/img/img03.jpg'

export default function Home() {
  return (
    <main className="home">
      <div className="main-wrapper wrapper">
        <h1 className="sub-title text-2xl text-center">L'excellence de la tradition française au service de votre élégance</h1>
        {/* <Image
          layout="responsive"
          src={componentImg}
          alt="Picture of shop" /> */}
      </div>
    </main>
  )
}
