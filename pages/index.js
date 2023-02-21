import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cypress</title>
        <meta name="description" content="Perfected Note-taking." />
        <link rel="icon" href="https://i.imgur.com/mRGLaTR.png" />
      </Head>

      <Navbar />

      <Footer />
      
    </div>
  )
}
