import React, {useState} from 'react'
import styles from "./Products.module.css"

import ProductCard from '../ProductCard/ProductCard.jsx'
import img from "../../assets/images/latest_img3.jpeg";
import {getProducts} from "../../api/getProducts.js";

const Products = () => {

    // const [products, setProducts] = useState(getProducts());
    const products = getProducts();
    console.log(products);

    return (
      <>
        {products?.length > 0 ? (
          <div className={styles.container}>
            {products.map((product, ind)=>{
              return (
                <div key={ind} className={styles.singleProduct}><ProductCard imageSrc={img} product={product} /></div>
              )
            })}
          </div>
          ) : (
            <div>Loading</div>
        )}
      </>
    );

}

export default Products

