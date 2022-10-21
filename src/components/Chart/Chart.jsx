import React, {useState, useEffect} from 'react'
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

import styles from './Chart.module.css'

import {Chart as ChartJS,  ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip,
  SubTitle} from 'chart.js';

ChartJS.register(  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle);

const Chart = ( {data: {positive, negative, death}, state}) => {
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

  console.log(positive, negative, death)

  const barChart = (
    (positive || negative)
      ? (
        <Bar
          data={{
            labels: ['Positive', 'Negative', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: ['#e63946', '#3a86ff', '#6c757d'],
              data:[positive, negative, death]
            }]
          }}
          options={{
            legend: {display: false},
            title: {display: true, text:`Current state ${state}`},
          }}
        />
      ) : null
  )

  return (
    <div className={styles.container}>
      {state ? barChart : lineChart}
    </div>
  )
}

export default Chart
