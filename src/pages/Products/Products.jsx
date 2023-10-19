import React from 'react'
import styles from "./Products.module.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import PorductList from "../../components/ProductList/ProductList.jsx";



const Products = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <h1>Search Results</h1>
            <div className={styles.content}>

                <div className={styles.sidebar}>
                  <Sidebar />
                </div>
                <div className={styles.productsList}>
                  <PorductList />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Products