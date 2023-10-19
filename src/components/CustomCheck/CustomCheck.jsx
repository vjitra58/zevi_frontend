import React from 'react'
import styles from "./styles.module.css";;


const CustomCheck = ({value}) => {
  return (
    <label class={styles.cont}>
        {value}
        <input type="checkbox" />
        <span class={styles.checkmark}></span>
    </label>
  )
}

export default CustomCheck