import React from 'react'
import styles from './Homepage.module.css'
const HomePage = () => {
  return (
    <div className={styles.container}>
        <div>Bienvenu!</div>
        <form className={styles.form}>
            <label> Name: </label>
            <input className={styles.input} type='text' name='name' placeholder='Enter your name' value={''}/> 
        </form>
            <button className={styles.button}> Click Here </button>
    </div>
  )
}

export default HomePage