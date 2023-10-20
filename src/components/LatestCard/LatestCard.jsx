import React from 'react'
import styles from "./LatestCard.module.css";


const LatestCard = ({product, imageSrc, title}) => {
  
  return (
    <div className={styles.container}>
        <div className={styles.imageBox}>
            <img src={`\\images\\latest_img${product?.image}.jpeg`}></img> 
        </div>
        <p>{product?.name}</p>
    </div>
  )
}

export default LatestCard