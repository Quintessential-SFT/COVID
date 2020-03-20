import React from 'react';
import loadable from "@loadable/component";

const Chart = loadable(() => import('react-apexcharts'));

const formatData = (rawData) => {
  const reduced = rawData.reduce((accumulator, value) => {
    accumulator.confirmed.push(value.confirmed);
    accumulator.recovered.push(value.recovered);
    accumulator.deaths.push(value.deaths);
    accumulator.dates.push(value.date);
    return accumulator;
  }, {confirmed: [], recovered: [], deaths: [], dates: []});
  return reduced;
};

export default function StatsColumnChart({data}) {

  const chartData = formatData(data);

  const options = {
    colors: ['#FF0000', '#00FF00', '#000000'],
    fill: {
      opacity: 1
    },
    chart: {
      toolbar: {
        tools: {
          download: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      type: 'datetime',
      categories: chartData.dates,
    },
  };

  const series = [
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
  ];

  return (
      <Chart options={options} series={series}
             height={'480px'} type={'bar'}/>
  )
};
