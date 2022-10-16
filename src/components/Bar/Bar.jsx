import React from 'react'
import styles from "./Bar.module.css";
import logo1 from "./../../img/logo1.svg"
import logo2 from "./../../img/logo2.svg"
import logo3 from "./../../img/logo3.svg"


function Bar() {
  return (
    <div className={styles.bar}>
      <img src={logo1} alt="logo1" />
      <img src={logo2} alt="logo2" />
      <img src={logo3} alt="logo3" />
    </div>
  )
}

export default Bar
