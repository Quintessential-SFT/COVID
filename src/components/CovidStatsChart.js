import React, {useEffect} from 'react';
import ApexCharts from 'apexcharts';

export default function CovidStatsChart({ data }) {
    const chartData = data.reduce((accumulator, value) => {
        accumulator.confirmed.push(value.confirmed);
        accumulator.recovered.push(value.recovered);
        accumulator.deaths.push(value.deaths);
        accumulator.dates.push(value.date);
        return accumulator;
    }, { confirmed: [], recovered: [], deaths: [], dates: [] });

    const options = {
        series: [
            {
                name: 'Recovered',
                data: chartData.recovered
            },
            {
                name: 'Confirmed',
                data: chartData.confirmed
            },
            {
                name: 'Deaths',
                data: chartData.deaths
            }
        ],
        chart: {
            height: 500,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: chartData.dates
        }
    };
    useEffect(() => {
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render().catch(console.log);
    }, []);

    return (
        <div id={'chart'}>

        </div>
    )
};
