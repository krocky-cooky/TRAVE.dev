import React from "react";
import { useRef } from "react";
// import { LineChart, Line, XAxis, YAxis } from 'recharts';
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
    // Title,
    // Tooltip,
    // Legend
  );

export interface lineChartDataFormat {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        pointRadius: number
    }[]
}

const chartOptions = {
    responsive: true,
    scales:{
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            }
        }
    }
}


export const PowerLineChart = (props: {
    data: lineChartDataFormat
}) => {
    const chartRef = useRef<ChartJS>();
    if(chartRef.current){
        chartRef.current.data = props.data;
        chartRef.current.update();
    }
    return (
        <div>
            <Line
                options={chartOptions}
                data={props.data}
                ref={chartRef}
            />
        </div>
    )
}

export default PowerLineChart;