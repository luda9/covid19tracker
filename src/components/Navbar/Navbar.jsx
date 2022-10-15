import * as React from 'react';
import { AppBar, Toolbar, Typography,  } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <AppBar className={styles.background}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COVID-19
          </Typography>
          <Typography variant="h6">
            <Link to="/" className={styles.navbutton}>Home</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/statistics" className={styles.navbutton}>Statistics</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
