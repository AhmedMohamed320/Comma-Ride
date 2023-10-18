"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";
import { PiPhoneIncomingFill, PiPhoneOutgoingFill } from "react-icons/pi";
import BarChart from "@/components/UI/chart/BarChart";

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
    // ----------------------
    function handle_all_action(e, type) {
        if (type === 1) {
            if (Sales_call_status === "makeOrder") {
                router.push("/Customers/Form_Customer/add");
            }
            setSales_call_status("");
        }
        if (type === 4) {
            router.push("/Create_an_order");
        }

        if (type === 5) {
            if (
                consultation_2 === "edit_data" ||
                consultation_2 === "edit_order"
            ) {
                router.push("/Orders");
            }
            if (consultation_3 === "add") {
                router.push("/Customers/Form_Customer/add");
            }
            setConsultation_1("");
            setConsultation_2("");
            setConsultation_3("");
        }

        if (type === 6) {
            router.push("/Orders");
        }

        setShowPhoneType_1(false);
        setShowPhoneType_2(false);
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
                        <button
                            onClick={(e) => {
                                handle_all_action(e, 1);
                            }}
                        >
                            تاكيد
                        </button>
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
                    <div
                        onClick={(e) => {
                            handle_all_action(e, 4);
                        }}
                    >
                        <p> عمل طلب</p>
                    </div>

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
                                <option value="edit_data">
                                    تفير بيانات طلب
                                </option>
                                <option value="edit_order">تعديل الطلب</option>
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
                                    <option value="add">مهتم</option>
                                    <option value="2">غير مهتم</option>
                                </select>
                            )}
                        </div>
                        <button
                            onClick={(e) => {
                                handle_all_action(e, 5);
                            }}
                        >
                            تاكيد
                        </button>
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
                        <button
                            onClick={(event) => {
                                handle_all_action(event, 6);
                            }}
                        >
                            تاكيد
                        </button>
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
                        <BarChart title="المكالمات" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
