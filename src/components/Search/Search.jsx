import React, { useState } from 'react'
import styles from "./Search.module.css"
import {BsSearch} from "react-icons/bs";
// import { FaBeer } from 'react-icons/fa';
import LatestCard from '../LatestCard/LatestCard.jsx';
import img1 from "../../assets/images/latest_img1.jpeg"



const Search = ({flag}) => {
    const [text, setText] = useState("");
    const [isActive, setActive] = useState(false);
    const handleSearch = (e)=>{
        console.log(text);
    }
  return (
    <>
    <div style={{border: flag ? "1px solid black" : "none" , height: flag ? "3rem" : "5rem"}} className={styles.container}>
        <input type='text' value={text} placeholder='Serch' onChange={(e)=>setText(e.target.value)} 
            style={{fontSize: flag ? "1.2rem" : "1.5rem"}}
            onBlur={handleSearch}
            onKeyDown={(e)=>{
                if(e.key == "Enter"){
                    handleSearch(e)
                }
            }}
        />
        <BsSearch style={{scale : "1.5" ,color: "grey" }} />
    </div>
    { text.length > 0 &&
    <div className={styles.suggestion}>
        <p>Latest Trends</p>
        <div className={styles.latest_card}>
            <div className={styles.card_wrapper}><LatestCard imageSrc={img1} title="white formal shirt" /></div>
            <div  className={styles.card_wrapper}><LatestCard imageSrc={img1} title="white formal shirt" /></div>
            <div  className={styles.card_wrapper}><LatestCard imageSrc={img1} title="white formal shirt" /></div>
            <div  className={styles.card_wrapper}><LatestCard imageSrc={img1} title="white formal shirt" /></div> 
        </div>

        <p>Popular suggestions</p>
        <div className={styles.popular}>
            <p>stripped shirt</p>
            <p>Denim Jumpsuit</p>
            <p>black Trousers</p>
            <p>brown hoody jacket</p>
        </div>
    </div>
    }
    </>
  )
}

export default Search