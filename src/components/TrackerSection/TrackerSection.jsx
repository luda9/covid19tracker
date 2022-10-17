import React from "react";
import { Link } from "react-router-dom";
import styles from "./TrackerSection.module.css"
import covidmap from "./../../img/covidmap.jpg"


function TrackerSection() {
  return (
    <div className={styles.trackerContainer}>
      <div className={styles.imagemap}>
        <img src={covidmap} alt="" />
      </div>
      <div className={styles.info}>
        <h2>COVID-19 Tracker</h2>
        <p>
          In this section, you will see all the information about COVID-19 in
          the United States. The data is displayed as the hole country or
          individually by each state. Statisctics of positive cases, negative
          and deaths, all of them in the present representend by charts with
          animations. The main chart that covers all the information of the
          country, displays the positive cases and deaths. You can interact with
          the main chart watching a linetime with all the numbers.
        </p>
        <Link to="/covid19tracker/statistics" className={styles.button}>Statistics</Link>
      </div>
    </div>
  );
}

export default TrackerSection;
