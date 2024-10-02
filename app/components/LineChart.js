import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['', '', '', '', ''], // X-axis labels
        datasets: [
          {
            label: "",
            data: [0, 30, 40, 61, 56], // Y-axis data
            backgroundColor:'red',
            borderColor: 'rgba(220, 108, 162, 1)', // Line color
            pointBackgroundColor: 'rgba(220, 108, 162, 1)',  
            tension: 0.1, // Line tension
            fill: false, // Disable fill under the line  
          },
        ],
      },
      options: {
        plugins: { 
            legend: {
              display: false
            },
          },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
                display: false
              } 
          },
        },
      },
    });

    // Cleanup the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
