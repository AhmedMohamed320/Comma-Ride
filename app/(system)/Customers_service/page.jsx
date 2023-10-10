"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import FormAddNewCustomers from "@/components/UI/Form/FormAddNewCustomers";
import {
    PiPhoneIncomingFill,
    PiPhoneOutgoingFill,
    PiPhonePlusFill,
} from "react-icons/pi";

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
            label: "بيع",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            borderColor: "#D63236",
            backgroundColor: "#D63236",
            lineTension: 0.2,
        },
        {
            label: "طلب",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235)",
            lineTension: 0.1,
        },
        {
            label: "استشاره",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            borderColor: "rgb(152, 76, 252)",
            backgroundColor: "rgb(152, 76, 252)",
            lineTension: 0.1,
        },
        {
            label: "متابعه",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            borderColor: "rgb(255, 217, 0)",
            backgroundColor: "rgb(255, 217, 0)",
            lineTension: 0.1,
        },
        {
            label: "تقيم",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            borderColor: "rgb(136, 255, 0)",
            backgroundColor: "rgb(136, 255, 0)",
            lineTension: 0.1,
        },
    ],
};
const page = () => {
    const [showPhoneType_1, setShowPhoneType_1] = useState(false);
    const [showPhoneType_2, setShowPhoneType_2] = useState(false);
    const [showForm, setShowForm] = useState(false);

    function handle_phoneType(e) {
        console.log(e.target.id);
        setShowPhoneType_1(false);
        setShowPhoneType_2(false);
        setShowForm(false);
    }
    return (
        <section className={`mainContainer ${classes.section}`}>
            <div>
                <p className="text-4xl py-4 font-semibold">خدمه العملاء</p>
            </div>
            <div className={classes.action}>
                <div
                    onClick={() => {
                        setShowPhoneType_1(!showPhoneType_1);
                        setShowPhoneType_2(false);
                        setShowForm(false);
                    }}
                >
                    <p>مكالمه الصادره</p>
                    <PiPhoneOutgoingFill className="text-4xl" />
                </div>
                <div
                    onClick={() => {
                        setShowPhoneType_2(!showPhoneType_2);
                        setShowPhoneType_1(false);
                        setShowForm(false);
                    }}
                >
                    <p>مكالمه وارده</p>
                    <PiPhoneIncomingFill className="text-4xl" />
                </div>
                <div
                    onClick={() => {
                        setShowPhoneType_1(false);
                        setShowPhoneType_2(false);
                        setShowForm(!showForm);
                    }}
                >
                    <p>اضافه عميل جديد</p>
                    <PiPhonePlusFill className="text-4xl" />
                </div>
            </div>
            {showPhoneType_1 && (
                <div className={classes.phoneType_1}>
                    <Link href="" id="a" onClick={handle_phoneType}>
                        بيع
                    </Link>
                    <div id="a2" onClick={handle_phoneType}>
                        تقيم
                    </div>
                    <div id="a2" onClick={handle_phoneType}>
                        متابعه
                    </div>
                </div>
            )}
            {showPhoneType_2 && (
                <div className={classes.phoneType_2}>
                    <div id="a5" onClick={handle_phoneType}>
                        طلب
                    </div>
                    <div id="a4" onClick={handle_phoneType}>
                        استشاره
                    </div>
                    <div id="a3" onClick={handle_phoneType}>
                        متابعه
                    </div>
                </div>
            )}
            {showForm && (
                <FormAddNewCustomers
                    hide={() => {
                        setShowForm(false);
                    }}
                />
            )}
            <div className={classes.call_statistics}>
                <div className=" flex items-center gap-4">
                    <p className="text-3xl">احصائيات يوم </p>
                    <input type="date" />
                </div>
                <div>
                    <div className={classes.part1}>
                        <div className={classes.totalInformation}>
                            <div>
                                <div>
                                    <p>50 مكالمه</p>
                                </div>
                                <div>
                                    <p>12 عميل جديد</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>الرقم</td>
                                        <td>نوع المكالمه</td>
                                        <td>توقيت المكالمه</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={classes.charts}>
                        <div className={classes.chart}>
                            <Line options={options} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
