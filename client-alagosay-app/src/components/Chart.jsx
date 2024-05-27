import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'],
    datasets: [
        {
            label: 'Dataset',
            data: [65, 59, 80, 81, 56, 55, 40, 70, 50, 88, 90, 84],
            fill: false,
            backgroundColor: 'rgb(9, 81, 148)',
            borderColor: 'rgba(9, 81, 148, 0.4)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Data Penjualan Moring',
        },
    },
};

const Chart = () => {
    return <Line data={data} options={options} />;
}

export default Chart
