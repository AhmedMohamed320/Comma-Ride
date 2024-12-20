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
                    <p className="text-4xl font-semibold">
                        الموردين <span className="text-2xl">2</span>
                    </p>
                    <div>
                        <Search placeholder="ادخل رقم او كود المورد" />
                    </div>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">فلتر حسب فئه المكان</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب وضع التعاقد</option>
                        <option value="">عدد الاوردرات اليومي</option>
                        <option value="">اعلانات سوشيل</option>
                        <option value="">شريك</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب الاوردرات</option>
                        <option value="">تصاعدي</option>
                        <option value="">تنازلي</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب التقيم </option>
                        <option value="">تصاعدي</option>
                        <option value="">تنازلي</option>
                    </select>
                </div>
            </div>
            <div className={classes.table}>
                <table>
                    <tbody>
                        <tr className={classes.head}>
                            <td>الكود</td>
                            <td>اسم المورد</td>
                            <td>الفئه</td>

                            <td>الاوردرات اليوم</td>
                            <td>التقيم</td>
                            <td>تغير</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <div>
                                    <Link href="/Suppliers/Profile">
                                        الصعيدي
                                    </Link>
                                </div>
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20</td>
                            <td>5</td>
                            <td>
                                <Link href="/Suppliers/Form_Supplier/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <div>
                                    <Link href="/Suppliers/Profile">
                                        الصعيدي
                                    </Link>
                                </div>
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20</td>
                            <td>5</td>
                            <td>
                                <Link href="/Suppliers/Form_Supplier/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <div>
                                    <Link href="/Suppliers/Profile">
                                        الصعيدي
                                    </Link>
                                </div>
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20</td>
                            <td>5</td>
                            <td>
                                <Link href="/Suppliers/Form_Supplier/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <div>
                                    <Link href="/Suppliers/Profile">
                                        الصعيدي
                                    </Link>
                                </div>
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20</td>
                            <td>5</td>
                            <td>
                                <Link href="/Suppliers/Form_Supplier/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <div>
                                    <Link href="/Suppliers/Profile">
                                        الصعيدي
                                    </Link>
                                </div>
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20</td>
                            <td>5</td>
                            <td>
                                <Link href="/Suppliers/Form_Supplier/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <div>
                                    <Link href="/Suppliers/Profile">
                                        الصعيدي
                                    </Link>
                                </div>
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20</td>
                            <td>5</td>
                            <td>
                                <Link href="/Suppliers/Form_Supplier/edit">
                                    تعديل
                                </Link>
                                <button>حذف</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="statisticsCharts mt-4">
                <LineChart title="نمو الموردين" />
                <LineChart title="نشاط الموردين" />
            </div>
        </section>
    );
};

export default page;
