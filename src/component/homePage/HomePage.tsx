'use client'
import React, { useState } from 'react'
import { update, clear } from '@/redux/userSlice'
import {useDispatch} from 'react-redux'
import styles from './Homepage.module.css';
import { AppDispatch, useAppSelector } from '@/redux/store';

const HomePage = () => {
  const initialUser = {
    name: '',
    numberOfClicks: 0
  }
  const [name, setName] = useState('');
  const [numberOfClicks, setClicksNumber] = useState(0);
 
  const [user, setUser] = useState(initialUser)
  
  const dispatch = useDispatch<AppDispatch>();

  dispatch(update(user));
  
  const increaseNumber = () =>{
    setClicksNumber((prev) => prev +1)
  }
  const updateUser = () => {
    setUser((user) => ({...user, name:name, numberOfClicks: numberOfClicks}));
    dispatch(update(user))
  }
  const clearUser = () => {
    setUser(initialUser);
    dispatch(clear(user))
    setClicksNumber(0)
    setName('');
    
  }
  const username = useAppSelector((state) => state.user.value.name);
  return (
    <div className={styles.container}>
        { username && <div> <h1 className={styles.header}>WELCOME {username}!</h1></div>}
        <form className={styles.form}>
            <label> Name: </label>
            <input 
              className={styles.input} 
              type='text' name='name' 
              placeholder='Enter your name' value={name}
              onChange={(e) => setName(e.target.value)}
 
            />
            <input type='button' value="Click here!"  className={styles.button} onClick={increaseNumber}/>
            
        </form>
        <button className={styles.submit}  onClick={updateUser}> submit </button>
        <button className={styles.clear}  onClick={clearUser}> clear </button>
            
    </div>
  )
}

export default HomePage