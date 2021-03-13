import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart =  ( dailyData.length ? (
    <Line
      data={{
        label: dailyData.map(({date}) => date),
        datasets: [{
            data: dailyData.map(({ confirmed}) => confirmed),
            label: 'Infected',
            borderColor: '#3333f',
            fill:true,
        }, {
            data: dailyData.map(({ confirmed}) => confirmed),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill:true,

        }],
      }}
    />
  ) : null);

  const barChart = {
    data.confirmed ? (
      <Bar />
    ) : null
  }

  return (
      <div className={styles.container}>
          {lineChart}
      </div>
  );
};

export default Chart;
