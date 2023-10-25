"use client";
import React from "react";
import classes from "./page.module.css";
import LineCart from "@/components/UI/chart/LineChart";
import Link from "next/link";

const page = () => {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <main className={classes.main}>
                <div className={classes.head}>
                    <p>
                        الاسم : <span>خالد السيد</span>{" "}
                    </p>
                    <Link href="/Customers/Form_Customer/edit">تعديل</Link>
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

                        <div className={classes.Notes}>
                            <span>لا يوجد تفاصيل اضافيه</span>
                        </div>
                    </div>
                    <div className={classes.orderData}>
                        <div className={classes.chart}>
                            <LineCart title="عدد الاوردرات" />
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
                <div className={classes.part2}>{/* map */}</div>
            </main>
        </section>
    );
};

export default page;
