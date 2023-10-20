import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import Search from '../Search/Search.jsx'
import  {RxHamburgerMenu, RxCross1} from "react-icons/rx"
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div  className={styles.burger}>
          <RxHamburgerMenu onClick={()=>setOpen(!open)} />
        </div>
        <div className={styles.search}>
            <Search flag={true}/>
        </div>
        <div className={styles.logo}>

        </div>
    </div>

    <div className={styles.mobileSearch}>
      <Search flag={true}/>
    </div>

    {open && 
      <div className={styles.mobileSidebar}>
        <div className={styles.cross}>
          <RxCross1 style={{scale : "2"}} onClick={()=>setOpen(!open)} />
        </div>

        <Sidebar />

      </div>
    }

    </>
  );
}

export default Navbar