import React from 'react'
import styles from "./Products.module.css"

import ProductCard from '../ProductCard/ProductCard.jsx'
import img from "../../assets/images/latest_img3.jpeg";


const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.singleProduct}><ProductCard imageSrc={img} /></div>
      <div className={styles.singleProduct}><ProductCard imageSrc={img} /></div>
      <div className={styles.singleProduct}><ProductCard imageSrc={img} /></div>
      <div className={styles.singleProduct}><ProductCard imageSrc={img} /></div>
      <div className={styles.singleProduct}><ProductCard imageSrc={img} /></div>
      <div className={styles.singleProduct}><ProductCard imageSrc={img} /></div>
      <div className={styles.singleProduct}><ProductCard imageSrc={img} /></div>
    </div>
  )
}

export default Products

