import React from 'react'
import styles from "./LatestCard.module.css";


const LatestCard = ({imageSrc, title}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageBox}>
            <img src={imageSrc}></img>
        </div>
        <p>{title}</p>
    </div>
  )
}

export default LatestCard