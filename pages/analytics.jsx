import { useEffect } from 'react';
import Chart from 'chart.js';

const MyChart = () => {
  useEffect(() => {
    const colors = {
      purple: {
        default: 'rgba(149, 76, 233, 1)',
        half: 'rgba(149, 76, 233, 0.5)',
        quarter: 'rgba(149, 76, 233, 0.25)',
        zero: 'rgba(149, 76, 233, 0)'
      },
      indigo: {
        default: 'rgba(80, 102, 120, 1)',
        quarter: 'rgba(80, 102, 120, 0.25)'
      }
    };

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

    const labels = [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4',
      'Week 5',
      'Week 6',
      'Week 7',
      'Week 8',
      'Week 9',
      'Week 10'
    ];

    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.canvas.height = 100;

    const gradient = ctx.createLinearGradient(0, 25, 0, 300);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.35, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const options = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            fill: true,
            backgroundColor: gradient,
            pointBackgroundColor: colors.purple.default,
            borderColor: colors.purple.default,
            data: weight,
            lineTension: 0.2,
            borderWidth: 2,
            pointRadius: 3
          }
        ]
      },
      options: {
        layout: {
          padding: 10
        },
        responsive: true,
        legend: {
          display: false
        },

        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                padding: 10,
                autoSkip: false,
                maxRotation: 15,
                minRotation: 15
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Weight in KG',
                padding: 10
              },
              gridLines: {
                display: true,
                color: colors.indigo.quarter
              },
              ticks: {
                beginAtZero: false,
                max: 63,
                min: 57,
                padding: 10
              }
            }
          ]
        }
      }
    };

    window.myLine = new Chart(ctx, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    Chart.defaults.global.defaultFontFamily = 'Fira Sans';
  }, []);

  return (
    <div className="wrapper">
      <canvas id="canvas"></canvas>
      <div className="note">
        Made with{' '}
        <a href="https://www.chartjs.org" target="_blank" rel="external noopener">
          Chart.js
        </a>{' '}
        by{' '}
        <a href="https://hofmannsven.com" target="_blank" rel="external noopener">
          Sven Hofmann
        </a>
        .
      </div>

      <style jsx>{`
        body {
          font-family: 'Fira Sans', sans-serif;
          font-size: 1rem;
          background-color: #192027;
          color: #506678;
          padding: 15px;
        }

        .wrapper {
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
        }

        canvas {
          position: relative;
          width: 100%;
        }

        .note {
          width: 100%;
          float: left;
          text-align: center;
          padding: 15px 0;
        }

        a {
          text-decoration: none;
          color: #506678;
          border-bottom: 1px solid rgba(80, 102, 120, 0.25);
          transition: all 0.35s;
        }

        a:hover {
          color: #677f93;
          border-bottom: 1px solid rgba(149, 76, 233, 0.5);
        }

        @media (min-width: 960px) {
          body {
            padding: 25px;
          }

          .note {
            padding: 25px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MyChart;
