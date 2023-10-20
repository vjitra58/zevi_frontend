import React, { useState } from 'react'
import styles from "./styles.module.css"
import {AiFillStar} from "react-icons/ai";
import {PiHeartThin} from "react-icons/pi"
import {RiHeartFill} from "react-icons/ri"

const goldenStarStyle = {color: "#f2de05" , scale:"1"};

const ProductCard = ({imageSrc, product}) => {
    const [liked, setLiked] = useState(false);
    console.log(product);
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
            <img src={`\\images\\latest_img${product?.image}.jpeg`}></img>
            <p className={styles.viewProduct}>
                View Product
            </p>
        </div>
        <div className={styles.details}>
            <p className={styles.title}>{product?.name}</p>
            <div className={styles.price}>
                <span className={styles.originalPrice}>Rs. {product?.price}</span>
                {"  "}
                <span className={styles.discountPrice}>Rs. {Math.floor(product?.price * 0.9)}</span>
            </div>
            <div className={styles.starblock}>
                {[...Array(product?.rating)].map((x, i)=> <AiFillStar key={i} style={goldenStarStyle} />)}
                <p>({product?.review})</p>
          </div>
        </div>
    </div>
  )
}

export default ProductCard