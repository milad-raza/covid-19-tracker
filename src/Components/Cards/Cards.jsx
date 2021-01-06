import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {

  if (!confirmed) {
    return (
      <div className={styles.progress}>
        <CircularProgress />
      </div>
    );
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{country ? country : "Whole Wolrd"}</h1>
      <Grid container item xs={12} alignItems="center" justify="center">
        <Card className={`${styles.card} ${styles.confirmed}`}>
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.confirmedHeading}
            >
              Confirmed
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of casses caused from COVID-19
            </Typography>
          </CardContent>
        </Card>

        <Card className={`${styles.card} ${styles.recovered}`}>
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.recoveredHeading}
            >
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Card>

        <Card className={`${styles.card} ${styles.active}`}>
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.activeHeading}
            >
              Active
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={confirmed.value - recovered.value - deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases from COVID-19
            </Typography>
          </CardContent>
        </Card>

        <Card className={`${styles.card} ${styles.deaths}`}>
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.deathsHeading}
            >
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Cards;
