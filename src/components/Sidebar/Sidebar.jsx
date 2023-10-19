import React, { useState } from 'react'
import styles from "./Sidebar.module.css"
import CustomCheck from '../CustomCheck/CustomCheck.jsx'
import {AiFillStar} from "react-icons/ai"


const goldenStarStyle = {color: "#f2de05" , scale:"1.5"};

const greyStarStyle = {color: "#ccccca" , scale:"1.5"};

const Sidebar = () => {
  const [showbrand, setshowbrand] = useState(true);
  const [showrating, setshowrating] = useState(true);
  const [showprice, setshowprice] = useState(true);

  

  return (
    <div className={styles.container}>
      {/* first filter start */}
      <h2 onClick={()=>setshowbrand(!showbrand)}>BRANDS</h2>
      { showbrand &&
        <div className={styles.filterBrand}>
          <label class={styles.cont}>
            Mango
            <input type="checkbox" value="Mango" />
            <span class={styles.checkmark}></span>
          </label>
          <label class={styles.cont}>
            H&M
            <input type="checkbox" value="H&M" />
            <span class={styles.checkmark}></span>
          </label>
          <label class={styles.cont}>
            Fashion
            <input type="checkbox" value="Fashion" />
            <span class={styles.checkmark}></span>
          </label>
        </div>
      }
      <div className={styles.divider}></div>
      {/* second filter starts  */}

      <h2 onClick={()=>setshowprice(!showprice)}>PRICE</h2>
      { showprice &&
        <div className={styles.filterBrand}>
        <label class={styles.cont}>
          Under 500
          <input type="checkbox" value="Mango" />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.cont}>
          1000 To 3000
          <input type="checkbox" value="H&M" />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.cont}>
          Above 3000
          <input type="checkbox" value="Fashion" />
          <span class={styles.checkmark}></span>
        </label>
      </div>
      }
      <div className={styles.divider}></div>
      {/* rating filter */}
      <h2 onClick={()=>setshowrating(!showrating)}>RATING</h2>
      { showrating &&
        <div className={styles.filterBrand}>
        <label class={styles.cont}>
          <div className={styles.starblock}>
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
          </div>
          <input type="checkbox" name="rating" value="5" />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.cont}>
        <div className={styles.starblock}>
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={greyStarStyle} />
          </div>
          <input type="checkbox" name="rating" value="4" />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.cont}>
        <div className={styles.starblock}>
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={greyStarStyle} />
            <AiFillStar style={greyStarStyle} />
          </div>
          <input type="checkbox" name="rating" value="3" />
          <span class={styles.checkmark}></span>
        </label>

        <label class={styles.cont}>
        <div className={styles.starblock}>
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={greyStarStyle} />
            <AiFillStar style={greyStarStyle} />
            <AiFillStar style={greyStarStyle} />
          </div>
          <input type="checkbox" name="rating" value="2" />
          <span class={styles.checkmark}></span>
        </label>

        <label class={styles.cont}>
        <div className={styles.starblock}>
            <AiFillStar style={goldenStarStyle} />
            <AiFillStar style={greyStarStyle} />
            <AiFillStar style={greyStarStyle} />
            <AiFillStar style={greyStarStyle} />
            <AiFillStar style={greyStarStyle} />
          </div>
          <input type="checkbox" name="rating" value="1" />
          <span class={styles.checkmark}></span>
        </label>
      </div>
      }
      
    </div>
  )
}

export default Sidebar