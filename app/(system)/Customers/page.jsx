"use client";
import LineCart from "@/components/UI/chart/LineChart";
import classes from "./page.module.css";
import Link from "next/link";
import Search from "@/components/UI/input/Search";

const page = () => {
    return (
        <section className=" p-4 mainContainer">
            <div className={classes.headPage}>
                <div>
                    <p className="text-4xl font-semibold">
                        العملاء <span className="text-2xl">950</span>
                    </p>
                    <Link href="/Customers/Form_Customer/add">اضافه عميل</Link>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">فلتر حسب قيمه المحفظه</option>
                        <option value="تنازلي">تنازلي</option>
                        <option value="">تصاعدي</option>
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
                    <Search placeholder="ادخل رقم او كود العميل" />
                    <table>
                        <tbody>
                            <tr className={classes.head}>
                                <td>الكود</td>
                                <td>الاسم </td>
                                <td>المحغظه</td>
                                <td>اوردرات الاسبوع</td>
                                <td>تعديل</td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>خالد السيد</td>
                                <td>0</td>
                                <td>5</td>
                                <td>
                                    <Link href="/Customers/Form_Customer/edit">
                                        تعديل
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>خالد السيد</td>
                                <td>0</td>
                                <td>5</td>
                                <td>
                                    <Link href="/Customers/Form_Customer/edit">
                                        تعديل
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>خالد السيد</td>
                                <td>0</td>
                                <td>5</td>
                                <td>
                                    <Link href="/Customers/Form_Customer/edit">
                                        تعديل
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>خالد السيد</td>
                                <td>0</td>
                                <td>5</td>
                                <td>
                                    <Link href="/Customers/Form_Customer/edit">
                                        تعديل
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>124</td>
                                <td>خالد السيد</td>
                                <td>0</td>
                                <td>5</td>
                                <td>
                                    <Link href="/Customers/Form_Customer/edit">
                                        تعديل
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.charts}>
                    <div className={classes.chart}>
                        <LineCart title="نمو العملاء" />
                    </div>
                    <div className={classes.chart}>
                        <LineCart title="نشاط العملاء" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
