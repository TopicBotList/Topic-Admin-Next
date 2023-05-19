import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2, 3, 9],
        borderColor: 'purple',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default LineChart;
