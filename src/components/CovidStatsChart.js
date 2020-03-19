import React, {useEffect, useRef} from 'react';
import ApexCharts from 'apexcharts';
import Box from "@material-ui/core/Box";

export default function CovidStatsChart({data}) {
    const chartRef = useRef();

    const chartData = data.reduce((accumulator, value) => {
        accumulator.confirmed.push(value.confirmed);
        accumulator.recovered.push(value.recovered);
        accumulator.deaths.push(value.deaths);
        accumulator.dates.push(value.date);
        return accumulator;
    }, {confirmed: [], recovered: [], deaths: [], dates: []});

    const options = {
        series: [
            {
                name: 'Confirmed',
                data: chartData.confirmed
            },
            {
                name: 'Recovered',
                data: chartData.recovered
            },
            {
                name: 'Deaths',
                data: chartData.deaths
            }
        ],
        colors: ['#FF0000', '#00FF00', '#000000'],
        fill: {
            gradient: {
                opacityFrom: 0.8,
                opacityTo: 0,
            },
        },
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
            categories: chartData.dates,
        },
    };

    useEffect(() => {
        if (!chartRef || !chartRef.current) return;
        const chart = new ApexCharts(chartRef.current, options);
        chart.render().catch(console.log);
        return () => {
            chart.destroy();
        }
    }, [data]);

    return (
        <Box ref={chartRef}/>
    )
};
