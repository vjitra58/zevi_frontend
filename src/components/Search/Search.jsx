import React, { useState } from 'react'
import styles from "./Search.module.css"
import {BsSearch} from "react-icons/bs";
// import { FaBeer } from 'react-icons/fa';
import LatestCard from '../LatestCard/LatestCard.jsx';
import img1 from "../../assets/images/latest_img1.jpeg"
import { useNavigate } from 'react-router-dom';
import { getLatestTrends} from '../../api/getLatestTrends.js';
import {getPopularSuggestions} from "../../api/getPopularSuggestions.js";


const Search = ({flag}) => {
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const latestTrends = getLatestTrends();
    const popular = getPopularSuggestions();
    // console.log("from search" , latestTrends);
    const handleSearch = (e)=>{
        console.log(text);
        setText("");
        navigate("/products");
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
            {latestTrends?.map((product, ind)=>{
              return (
                <div key={ind} style={{ height: flag ? "180px" : "250px"}} className={styles.card_wrapper}><LatestCard product={product} imageSrc={img1} title="white formal shirt" /></div>
              )
            })}
        </div>

        <p>Popular suggestions</p>
        <div className={styles.popular}>
            {popular?.map((name, ind)=><p key={ind}>{name}</p>)}
        </div>
    </div>
    }
    </>
  )
}

export default Search