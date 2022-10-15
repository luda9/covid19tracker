import React, {useState, useEffect} from 'react'
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

import styles from './Chart.module.css'

import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js';

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length
    ? (
      <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ positive }) => positive),
          label: 'Positive',
          borderColor: '#e63946',
          fill: true,
        }, {
          data: dailyData.map(({ death }) => death),
          label: 'Deaths',
          borderColor: '#6c757d',
          fill: true,
        }],
      }}
    />) : null
  );
  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart
