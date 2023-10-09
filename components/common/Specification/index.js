import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './styles.module.scss';
Chart.register(...registerables);

const RadarData = {
  labels: ['Finger Strength', 'Power', 'Endurance', 'Stability', 'Flexability'],
  datasets: [
    {
      label: 'March',
      backgroundColor: 'rgba(34, 202, 236, .2)',
      borderColor: 'rgba(34, 202, 236, 1)',
      pointBackgroundColor: 'rgba(34, 202, 236, 1)',
      poingBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
      data: [13, 10, 12, 6, 5],
    },
  ],
};
const RadarOptions = {
  scaleShowLabels: true,
  scaleBeginAtZero: true,
  scaleFontSize: 8,
  scaleFontColor: '#999',
  scaleOverride: true,
  scaleStartValue: 0,
  scaleStepWidth: 1,
  scaleSteps: 5,
  pointLabelFontSize: 12,
  pointLabelFontStyle: 'bold',
  responsive: true,
  legend: undefined,
  scale: {
    ticks: {
      max: 15,
      min: 0,
      stepSize: 2,
    },
  },
  tooltips: {
    enabled: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          max: 5,
          min: 0,
          stepSize: 0.5,
        },
      },
    ],
  },
};

const Specifiation = () => {
  return (
    <div className={styles['specification']}>
      <Radar data={RadarData} options={RadarOptions} />
    </div>
  );
};

export default Specifiation;
