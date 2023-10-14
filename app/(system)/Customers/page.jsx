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
                    <Search placeholder="ادخل رقم او كود العميل" />
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
