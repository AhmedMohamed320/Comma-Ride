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
            fill: true,
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
                        الموردين <span className="text-2xl">2</span>
                    </p>
                    <Link href="/Suppliers/Form_Supplier/add">اضافه مورد</Link>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">فلتر حسب فئه المكان</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب وضع التعاقد</option>
                        <option value="">عدد الاوردرات اليومي</option>
                        <option value="">اعلانات سوشيل</option>
                        <option value="">شريك</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب الاوردرات</option>
                        <option value="">تصاعدي</option>
                        <option value="">تنازلي</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب التقيم </option>
                        <option value="">تصاعدي</option>
                        <option value="">تنازلي</option>
                    </select>
                </div>
            </div>
            <div className={classes.table}>
                <table>
                    <tbody>
                        <tr className={classes.head}>
                            <td>الكود</td>
                            <td>اسم المورد</td>
                            <td>الفئه</td>
                            <td>نوع التعاقد</td>
                            <td>الاوردرات اليوم</td>
                            <td>التقيم</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <Link href="/Suppliers/Profile">الصعيدي</Link>
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20 </td>
                            <td>20</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                الصعيدي
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20 </td>
                            <td>20</td>
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
        </section>
    );
};

export default page;
