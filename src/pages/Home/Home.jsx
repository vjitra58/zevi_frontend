import React, { useState } from 'react'
import styles from "./Home.module.css";
import Search from '../../components/Search/Search.jsx';

const Home = () => {
   
  return (
    <div className={styles.wrapper}>
    <div className={styles.logo}></div>
    <div className={styles.overlay}>
        <div className={styles.container}>
            
            <Search flag={false}/>

        </div>
    </div>
    </div>
  )
}

export default Home