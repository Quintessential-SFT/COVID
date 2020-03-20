import React, {useEffect, useRef} from 'react';
import ApexCharts from 'apexcharts';
import Box from "@material-ui/core/Box";
import {useTheme} from "@material-ui/core";

export default function StatsAreaChart({data}) {
    const chartRef = useRef();
    const theme = useTheme();

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
                name: 'Σύνολο κρουσμάτων',
                data: chartData.confirmed
            },
            {
                name: 'Αναρρώσεις',
                data: chartData.recovered
            },
            {
                name: 'Απώλειες',
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
            height: 480,
            type: 'area',
            fontFamily: theme.typography.body1.fontFamily,
            toolbar: {
                tools: {
                    download: false,
                },
            },
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
