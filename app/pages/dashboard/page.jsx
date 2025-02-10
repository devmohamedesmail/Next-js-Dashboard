'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

import {
  Chart as
    ChartJS,
  
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);




export default function page() {

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'Sales Distribution',
        data: [30, 20, 15, 25, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div>
        <Doughnut data={data} />
      </div>
      <div>
        <Pie data={data} />
      </div>
      

    </div>
  )
}
