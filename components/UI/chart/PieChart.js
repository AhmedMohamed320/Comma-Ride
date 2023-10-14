import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import classes from "./LineChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["خضار وفاكهه", "كافيه", "صيدليه", "اسماك", "دواجن", "مطعم"],
    datasets: [
        {
            label: "العدد",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

export function PieChart(props) {
    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <div className={`${classes.chart} ${classes.pie}`}>
            <div className={classes.title}>
                <p>{props.title}</p>
                <select name="" id="">
                    <option value="">اخر 7 ايام</option>
                    <option value="">اخر 12 اسبوع</option>
                </select>
            </div>
            <div className={classes.pieChart}>
                <Pie data={data} options={options}/>
            </div>
        </div>
    );
}
