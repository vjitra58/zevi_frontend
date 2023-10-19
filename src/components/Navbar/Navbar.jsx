import React from 'react'
import styles from "./Navbar.module.css"
import Search from '../Search/Search.jsx'


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.search}>
            <Search flag={true}/>
        </div>
        <div className={styles.logo}>

        </div>
    </div>
  )
}

export default Navbar