import Image from 'next/image'
import styles from './page.module.css'
import HomePage from '@/component/homePage/HomePage'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/Footer'

export default function Home() {
  return (
    <div className= {styles.container}>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  )
}
