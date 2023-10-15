"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { PiPhoneIncomingFill, PiPhoneOutgoingFill } from "react-icons/pi";

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
    const router = useRouter();

    const [showPhoneType_1, setShowPhoneType_1] = useState(false);
    const [showPhoneType_2, setShowPhoneType_2] = useState(false);
    // --------------------

    function handle_phoneType(e) {
        console.log(e.target.id);
        setShowPhoneType_1(false);
        setShowPhoneType_2(false);
    }

    // ----------------------
    const [Sales_call_status, setSales_call_status] = useState("");
    const [Followup_call_status, setFollowup_call_status] = useState("");
    const [Followup_call_status_Incoming, setFollowup_call_status_Incoming] =
        useState("");

    function handleSelectChange_Sales(event) {
        const selectedValue = event.target.value;
        setSales_call_status(selectedValue);
    }

    function handleSelectChange_FollowUp(event) {
        const selectedValue = event.target.value;
        setFollowup_call_status(selectedValue);
    }

    function handleSelectChange_FollowUp_Incoming(event) {
        const selectedValue = event.target.value;
        setFollowup_call_status_Incoming(selectedValue);
    }

    function goToOrdersPage() {
        router.push("/Orders");
    }
    // --------------------
    const [consultation_1, setConsultation_1] = useState("");
    const [consultation_2, setConsultation_2] = useState("");
    const [consultation_3, setConsultation_3] = useState("");

    function handleSelectChange_consultation(e, type) {
        if (type === 1) {
            setConsultation_1(e.target.value);
        }
        if (type === 2) {
            setConsultation_2(e.target.value);
        }
        if (type === 3) {
            setConsultation_3(e.target.value);
        }
    }
    return (
        <section className={`mainContainer p-4 ${classes.section}`}>
            <div>
                <p className="text-4xl py-4 font-semibold">خدمه العملاء</p>
            </div>
            <div className={classes.action}>
                <div
                    onClick={() => {
                        setShowPhoneType_1(!showPhoneType_1);
                        setShowPhoneType_2(false);
                    }}
                >
                    <p>مكالمه الصادره</p>
                    <PiPhoneOutgoingFill className="text-4xl" />
                </div>
                <div
                    onClick={() => {
                        setShowPhoneType_2(!showPhoneType_2);
                        setShowPhoneType_1(false);
                    }}
                >
                    <p>مكالمه وارده</p>
                    <PiPhoneIncomingFill className="text-4xl" />
                </div>
            </div>
            {showPhoneType_1 && (
                <div className={classes.phoneType_1}>
                    <div>
                        <p>بيع </p>
                        <select
                            name=""
                            id=""
                            value={Sales_call_status}
                            onChange={handleSelectChange_Sales}
                        >
                            <option value="" disabled>
                                اختار الحاله
                            </option>
                            <option value="makeOrder"> مهتم</option>
                            <option value="مغلق">مغلق</option>
                            <option value="لم نصل">لم نصل</option>
                            <option value="رافض">رافض</option>
                        </select>
                        <button onClick={handle_phoneType}>تاكيد</button>
                    </div>

                    <div id="a2">صفحه التقيمات</div>
                    <div>
                        <p>متابعه </p>
                        <select
                            name=""
                            id=""
                            value={Followup_call_status}
                            onChange={handleSelectChange_FollowUp}
                        >
                            <option value="" disabled>
                                اختار الحاله
                            </option>
                            <option value="اعتذار"> اعتذار</option>
                            <option value="متابعه مورد">متابعه مورد</option>
                        </select>
                        <button onClick={handle_phoneType}>تاكيد</button>
                    </div>
                </div>
            )}
            {showPhoneType_2 && (
                <div className={classes.phoneType_2}>
                    <Link href="/Create_an_order" id="a5">
                        عمل طلب
                    </Link>
                    <div>
                        <p>استشاره</p>
                        <div className={classes.groupSelect}>
                            <select
                                name=""
                                id=""
                                value={consultation_1}
                                onChange={(event) => {
                                    handleSelectChange_consultation(event, 1);
                                }}
                            >
                                <option value="" disabled>
                                    حدد النوع
                                </option>
                                <option value="عميل">عميل</option>
                                <option value="مورد">مورد</option>
                            </select>
                            <select
                                name=""
                                id=""
                                value={consultation_2}
                                onChange={(event) => {
                                    handleSelectChange_consultation(event, 2);
                                }}
                            >
                                <option value="" disabled>
                                    الاستشاره المطلوبه
                                </option>
                                <option value="1">تفير بيانات طلب</option>
                                <option value="2">تعديل الطلب</option>
                                <option value="Service_and_cost">
                                    خدمه وتكلفه
                                </option>
                            </select>
                            {consultation_2 === "Service_and_cost" && (
                                <select
                                    name=""
                                    id=""
                                    value={consultation_3}
                                    onChange={(event) => {
                                        handleSelectChange_consultation(
                                            event,
                                            3
                                        );
                                    }}
                                >
                                    <option value="" disabled>
                                        حدد الحاله
                                    </option>
                                    <option value="1">مهتم</option>
                                    <option value="2">غير مهتم</option>
                                </select>
                            )}
                        </div>
                        <button onClick={handle_phoneType}>تاكيد</button>
                    </div>
                    <div>
                        <p>متابعه </p>
                        <select
                            name=""
                            id=""
                            value={Followup_call_status_Incoming}
                            onChange={handleSelectChange_FollowUp_Incoming}
                        >
                            <option value="" disabled>
                                نوع الشخص
                            </option>
                            <option value="عميل"> عميل </option>
                            <option value="مورد">مورد</option>
                        </select>
                        <button onClick={goToOrdersPage}>تاكيد</button>
                    </div>
                </div>
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
