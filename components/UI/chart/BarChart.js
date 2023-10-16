import React from "react";
import classes from "./LineChart.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: "Chart.js Bar Chart - Stacked",
        },
    },
    responsive: true,
};

const labels = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10"];

export const data = {
    labels,
    datasets: [
        {
            label: "بيع",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            backgroundColor: "#FF4747",
        },
        {
            label: "طلب",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            backgroundColor: "#FF6B6B",
        },
        {
            label: "استشاره",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            backgroundColor: "#FF8F8F",
        },
        {
            label: "متابعه",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            backgroundColor: "#FFB3B3",
        },
        {
            label: "تقيم",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            backgroundColor: "#FFD6D6",
        },
    ],
};
const BarChart = (props) => {
    return (
        <div className={classes.chart}>
            <div className={classes.title}>
                    <p>{props.title}</p>
                    <select name="" id="">
                        <option value="">اخر 7 ايام</option>
                        <option value="">اخر 12 اسبوع</option>
                    </select>
                </div>
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarChart;
