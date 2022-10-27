import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
    Filler,
    Legend
);

function StockPriceChart({ chartData }) {

    const [currentDates, setCurrentDates] = useState([]);
    const [currentPrices, setCurrentPrices] = useState([]);
    const { ticker, dates, prices } = chartData;


    useEffect(() => {
        fetch('https://stock28.onrender.com/stockhistory', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ticker: 'AAPL' })
        })
            .then(res => res.json())
            .then((data) => {
                const newDates = [];
                const newPrices = [];
                data.map((item) => {
                    newDates.unshift(item.date);
                    newPrices.unshift(item.price);
                    return 0;
                });
                setCurrentDates(newDates);
                setCurrentPrices(newPrices);
            });
    }, []);


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${ticker} 10-Day Stock Price Chart`,
            },
        },
    };

    const labels = dates;

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: `${ticker} Stock over Time`,
                data: prices,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (<Line
        options={options}
        data={data}
    />);
}

export default StockPriceChart;
