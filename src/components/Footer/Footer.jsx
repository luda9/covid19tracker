import React from 'react'
import styles from "./Footer.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'




function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link to="/covid19tracker" className={styles.footerbutton}>Home</Link>
        <Link to="/covid19tracker/statistics" className={styles.footerbutton}>Statistics</Link>
      </div>
      <div className={styles.icons}>
        <a href="https://github.com/luda9"><FontAwesomeIcon className={styles.icon} icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/luda9/"><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></a>
        <a href="https://www.luda9.com"><FontAwesomeIcon className={styles.icon} icon={faGlobe} /></a>
      </div>
      <p>&copy; Luda9</p>
    </div>
  )
}

export default Footer
