"use client"
import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Profile from "@/components/Delivery_men/profile/Profile";
import Order_statistics from "@/components/Delivery_men/orderStatistics/Order_statistics";

const page = () => {
    const router = useSearchParams();
    const content = router.get("content") || "personal_information";
    return (
        <section className={`mainContainer ${classes.section}`}>
            <p className="text-center text-3xl py-4 font-semibold">صفحه الطيار <span className="text-2xl">محمد على</span></p>
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
                                query: { content: "info" },
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
                                query: { content: "info" },
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
        </section>
    );
};

export default page;
