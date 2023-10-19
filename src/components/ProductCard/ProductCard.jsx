import React, { useState } from 'react'
import styles from "./styles.module.css"
import {AiFillStar} from "react-icons/ai";
import {PiHeartThin} from "react-icons/pi"
import {RiHeartFill} from "react-icons/ri"

const goldenStarStyle = {color: "#f2de05" , scale:"1"};

const ProductCard = ({imageSrc}) => {
    const [liked, setLiked] = useState(false);
  return (
    <div className={styles.container}>
       
        <div className={styles.imageBox}>
            <div className={styles.heartIcon}
                onClick={()=>setLiked(!liked)}
            >
                {liked ? (
                    <RiHeartFill style={{color : "red", scale: "2"}} />
                ): (
                    <PiHeartThin style={{color : "white", scale: "2"}} />
                )}
            </div>
            <img src={imageSrc}></img>
            <p className={styles.viewProduct}>
                View Product
            </p>
        </div>
        <div className={styles.details}>
            <p className={styles.title}>Round Neck</p>
            <div className={styles.price}>
                <span className={styles.originalPrice}>Rs. 599 </span>
                {"  "}
                <span className={styles.discountPrice}>Rs. 499</span>
            </div>
            <div className={styles.starblock}>
                <AiFillStar style={goldenStarStyle} />
                <AiFillStar style={goldenStarStyle} />
                <AiFillStar style={goldenStarStyle} />
                <AiFillStar style={goldenStarStyle} />
                <AiFillStar style={goldenStarStyle} />
                <p>(200)</p>
          </div>
        </div>
    </div>
  )
}

export default ProductCard