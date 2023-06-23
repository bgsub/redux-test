'use client'

import React from 'react'
import styles from './Footer.module.css'
import { useAppSelector } from '@/redux/store'
const Footer = () => {
  const clicksNumber = useAppSelector((state) => state.user.value.numberOfClicks);
  const username = useAppSelector((state) => state.user.value.name)
  return (
    <>
    {username?(
    <div className={styles.container}>
      You clicked on the button {clicksNumber} {clicksNumber > 1 ? (<span>&nbsp;times</span>): <span> &nbsp; time</span>}
      </div>
      ):(<></>)} </>
  )
}

export default Footer