"use client";

import classes from "./page.module.css";
import Link from "next/link";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

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

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: "Chart.js Line Chart",
        },
    },
};

const labels = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10"];

export const data = {
    labels,
    datasets: [
        {
            fill:true,
            label: "بيع",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            borderColor: "#D63236",
            backgroundColor: "#D6323660",
            lineTension: 0.2,
        },
    ],
};
const page = () => {
    return (
        <section className="py-8 px-4 mainContainer">
            <div className={classes.headPage}>
                <div>
                    <p className="text-4xl font-semibold">
                        العملاء <span className="text-2xl">950</span>
                    </p>
                    <Link href="/Customers/Form_Customer/add">اضافه عميل</Link>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">فلتر حسب المكان</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب الاوردرات</option>
                        <option value="">تصاعدي</option>
                        <option value="">تنازلي</option>
                    </select>
                </div>
            </div>
            <div className={classes.part2}>
                <div className={classes.table}>
                    <table>
                        <tbody>
                            <tr className={classes.head}>
                                <td>الكود</td>
                                <td>الاسم </td>
                                <td>المنطقه</td>
                                <td>اوردرات الاسبوع</td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>
                                    <Link href="/Customers/Profile">
                                        خالد السيد
                                    </Link>
                                </td>
                                <td>حي اول</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>
                                    <Link href="/Customers/Profile">
                                        خالد السيد
                                    </Link>
                                </td>
                                <td>حي اول</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>
                                    <Link href="/Customers/Profile">
                                        خالد السيد
                                    </Link>
                                </td>
                                <td>حي اول</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>
                                    <Link href="/Customers/Profile">
                                        خالد السيد
                                    </Link>
                                </td>
                                <td>حي اول</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>
                                    <Link href="/Customers/Profile">
                                        خالد السيد
                                    </Link>
                                </td>
                                <td>حي اول</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.charts}>
                    <div className={classes.chart}>
                        <Line options={options} data={data} />
                    </div>
                    <div className={classes.chart}>
                        <Line options={options} data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
