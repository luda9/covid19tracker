import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { positive, negative, death, dateChecked }}) => {
  if(!positive && !negative){
    return "loading";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} className={styles.gridcontainer}>
        <Grid item component={Card} className={cx(styles.card, styles.positive)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Positive</Typography>
            <Typography variant="h5">
              <CountUp start={0}end={positive}duration={2.5}separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(dateChecked).toDateString()}</Typography>
            <Typography variant="body2">COVID-19 Statistics</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} className={cx(styles.card, styles.negative)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Negative</Typography>
            <Typography variant="h5">
            <CountUp start={0}end={negative}duration={2.5}separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(dateChecked).toDateString()}</Typography>
            <Typography variant="body2">COVID-19 Statistics</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
            <CountUp start={0}end={death}duration={2.5}separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(dateChecked).toDateString()}</Typography>
            <Typography variant="body2">COVID-19 Statistics</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;
