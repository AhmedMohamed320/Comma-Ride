"use client";
import React from "react";
import classes from "./page.module.css";
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
import Link from "next/link";

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
            label: "عدد الاوردرات ",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
            pointBackgroundColor: "#D63236",
            borderColor: "#D63236",
            backgroundColor: "#D6323660",
            lineTension: 0.3,
        },
    ],
};

const page = () => {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <main className={classes.main}>
                <div className={classes.head}>
                    <p>
                        اسم المكان : <span>الصعيدي</span>{" "}
                        <span>(خضار و فاكهة)</span>
                    </p>
                    <Link href="/Suppliers/Form_Supplier/edit">تعديل</Link>
                </div>
                <div className={classes.part1}>
                    <div className={classes.info}>
                        <div className={classes.phone}>
                            <p>
                                رقم 1 : <span> 01245788956</span>
                            </p>
                        </div>
                        <div className={classes.address}>
                            <span>شارع حمدي السيد</span>
                        </div>

                        <div className={classes.statistics}>
                            <p>
                                عدد الاوردرات اليومي : <span>10</span>
                            </p>
                            <p>
                                المتوسط اليومي : <span>10</span>
                            </p>
                            <p>
                                عدد الاوردرات الاسبوعي : <span>10</span>
                            </p>
                            <p>
                                المتوسط الاسبوعي : <span>10</span>
                            </p>
                            <p>
                                عدد الاوردرات الشهري : <span>10</span>
                            </p>
                            <p>
                                المتوسط الشهري : <span>10</span>
                            </p>
                        </div>

                        <div className={classes.contract}>
                            <p>
                                نوعه التعاقد : <span>20 اوردر</span>
                            </p>
                            <div className={classes.rate}>
                                <p>التقيم :</p>
                                <ul className="flex gap-1">
                                    <li>
                                        <img src="/image/star.png" alt="star" />
                                    </li>
                                    <li>
                                        <img src="/image/star.png" alt="star" />
                                    </li>
                                    <li>
                                        <img src="/image/star.png" alt="star" />
                                    </li>
                                    <li>
                                        <img src="/image/star.png" alt="star" />
                                    </li>
                                    <li>
                                        <img src="/image/star.png" alt="star" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.Notes}>
                            <p>
                                متوسط ساعات الذروه :<span> 05:00 م </span>
                            </p>
                            <span>لا يوجد تفاصيل اضافيه</span>
                        </div>
                    </div>
                    <div className={classes.orderData}>
                        <div className={classes.chart}>
                            <Line options={options} data={data} />
                        </div>
                        <div className={classes.table}>
                            <table>
                                <tbody>
                                    <tr className={classes.head}>
                                        <td>رقم</td>
                                        <td>الطلبيه</td>
                                        <td>القيمه</td>
                                        <td>توقيت الطلب</td>
                                        <td>توقيت الاستلام</td>
                                    </tr>
                                    <tr>
                                        <td className="underline underline-offset-4 cursor-pointer">
                                            124
                                        </td>
                                        <td>2 كيلو تفاح و 2 كيلو منجا</td>
                                        <td>180 ج.م</td>
                                        <td>01:00 </td>
                                        <td>01:20</td>
                                    </tr>
                                    <tr>
                                        <td className="underline underline-offset-4 cursor-pointer">
                                            124
                                        </td>
                                        <td>2 كيلو تفاح و 2 كيلو منجا</td>
                                        <td>180 ج.م</td>
                                        <td>01:00 </td>
                                        <td>01:20</td>
                                    </tr>
                                    <tr>
                                        <td className="underline underline-offset-4 cursor-pointer">
                                            124
                                        </td>
                                        <td>2 كيلو تفاح و 2 كيلو منجا</td>
                                        <td>180 ج.م</td>
                                        <td>01:00 </td>
                                        <td>01:20</td>
                                    </tr>
                                    <tr>
                                        <td className="underline underline-offset-4 cursor-pointer">
                                            124
                                        </td>
                                        <td>2 كيلو تفاح و 2 كيلو منجا</td>
                                        <td>180 ج.م</td>
                                        <td>01:00 </td>
                                        <td>01:20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default page;
