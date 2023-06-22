'use client'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div> clicked the button 0 times</div>
        <div className={styles.profile}>
            <div className={styles.pic}></div>
            <div>Bryan</div>
        </div>
        
    </div>
    
  )
}

export default Navbar