"use client"
import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Profile from "@/components/Delivery_men/profile/Profile";
import Order_statistics from "@/components/Delivery_men/orderStatistics/Order_statistics";
import AttendanceAndDeparture from "@/components/Delivery_men/Attendance and Departure/AttendanceAndDeparture";
import Orders from "@/components/Delivery_men/orders/Orders";

const page = () => {
    const router = useSearchParams();
    const content = router.get("content") || "personal_information";
    return (
        <section className={`mainContainer ${classes.section}`}>
            <p className="text-center text-3xl py-4 font-semibold"> الطيار <span className="text-2xl">محمد على</span></p>
            <div className={classes.nav}>
                <ul>
                    <li>
                        <Link
                            href={{
                                pathname: "/Delivery_men/Profile",
                                query: { content: "personal_information" },
                            }}
                        >
                            المعلومات الشخصيه
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={{
                                pathname: "/Delivery_men/Profile",
                                query: { content: "orders" },
                            }}
                        >
                            اوردرات اليوم
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={{
                                pathname: "/Delivery_men/Profile",
                                query: { content: "Order_statistics" },
                            }}
                        >
                            احصائيات الاوردارت
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={{
                                pathname: "/Delivery_men/Profile",
                                query: { content: "Attendance_Departure" },
                            }}
                        >
                            {" "}
                            الحضور و الانصراف
                        </Link>
                    </li>
                </ul>
            </div>
            {content == "personal_information" && <Profile />}
            {content == "Order_statistics" && <Order_statistics />}
            {content == "Attendance_Departure" && <AttendanceAndDeparture/>}
            {content == "orders" && <Orders/>}

        </section>
    );
};

export default page;
