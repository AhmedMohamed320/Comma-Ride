"use client";
import LineCart, { LineChart } from "@/components/UI/chart/LineChart";
import classes from "./page.module.css";
import Link from "next/link";
import Search from "@/components/UI/input/Search";

const page = () => {
    return (
        <section>
            <div className={classes.headPage}>
                <div>
                    <p className="text-4xl font-semibold">العملاء</p>
                    <Search placeholder="ادخل رقم او كود العميل" />
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
                    <select name="" id="">
                        <option value="">فلتر حسب تاريخ الانضمام</option>
                        <option value="تنازلي">تنازلي</option>
                        <option value="">تصاعدي</option>
                    </select>
                </div>
            </div>

            <div className={classes.table}>
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
                            <td className="underline underline-offset-8">
                                <Link href="/Customers/Profile">
                                    خالد السيد
                                </Link>
                            </td>
                            <td>0</td>
                            <td>5</td>
                            <td className="flex gap-4">
                                <Link href="/Customers/Form_Customer/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8">
                                <Link href="/Customers/Profile">
                                    خالد السيد
                                </Link>
                            </td>
                            <td>0</td>
                            <td>5</td>
                            <td className="flex gap-4">
                                <Link href="/Customers/Form_Customer/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8">
                                <Link href="/Customers/Profile">
                                    خالد السيد
                                </Link>
                            </td>
                            <td>0</td>
                            <td>5</td>
                            <td className="flex gap-4">
                                <Link href="/Customers/Form_Customer/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8">
                                <Link href="/Customers/Profile">
                                    خالد السيد
                                </Link>
                            </td>
                            <td>0</td>
                            <td>5</td>
                            <td className="flex gap-4">
                                <Link href="/Customers/Form_Customer/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8">
                                <Link href="/Customers/Profile">
                                    خالد السيد
                                </Link>
                            </td>
                            <td>0</td>
                            <td>5</td>
                            <td className="flex gap-4">
                                <Link href="/Customers/Form_Customer/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8">
                                <Link href="/Customers/Profile">
                                    خالد السيد
                                </Link>
                            </td>
                            <td>0</td>
                            <td>5</td>
                            <td className="flex gap-4">
                                <Link href="/Customers/Form_Customer/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="statisticsCharts mt-4">
                <LineChart title="نمو العملاء" />
                <LineChart title="نشاط العملاء" />
            </div>
        </section>
    );
};

export default page;
