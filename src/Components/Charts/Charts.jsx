import React from "react";
import { Bar } from "react-chartjs-2";

import styles from './Charts.module.css';

const Charts = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {

  if (!confirmed) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Active", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba(0, 0, 250, 0.7)",
                  "rgba(0, 250, 0, 0.7)",
                  "rgba(250, 250, 0, 0.7)",
                  "rgba(250, 0, 0, 0.7)",
                ],
                data: [
                  confirmed.value,
                  recovered.value,
                  confirmed.value - recovered.value - deaths.value,
                  deaths.value,
                ],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text: `Current State In ${country ? country : "Whole Wolrd"}`,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Charts;