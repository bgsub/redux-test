'use client'
import React from 'react'
import {useSelector} from 'react-redux';
import { useAppSelector } from '@/redux/store';
import styles from './Navbar.module.css'

const Navbar = () => {
  const username = useAppSelector((state) => state.user.value.name)
  const clicksNumber = useAppSelector((state) => state.user.value.numberOfClicks);
  return (
    <>
    {username? (
      <div className={styles.container}>
      <div> clicked the button {clicksNumber} times</div>
      <div className={styles.profile}>
          <div className={styles.pic}>
            <div className={styles.head}></div>
            <div className={styles.body}></div>
           
          </div>
          <div>{username}</div>
      </div>
  </div>
    ):<><div className={styles.tips}>Submit A Name to see how many times you clicked on the button</div></>}
    </>
    
    
  )
}

export default Navbar