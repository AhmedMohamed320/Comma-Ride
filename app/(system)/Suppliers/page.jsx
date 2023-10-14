"use client";
import LineCart from "@/components/UI/chart/LineCart";
import classes from "./page.module.css";
import Link from "next/link";

const page = () => {
    return (
        <section className="py-8 px-4 mainContainer">
            <div className={classes.headPage}>
                <div>
                    <p className="text-4xl font-semibold">
                        الموردين <span className="text-2xl">2</span>
                    </p>
                    <Link href="/Suppliers/Form_Supplier/add">اضافه مورد</Link>
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
                            <td>نوع التعاقد</td>
                            <td>الاوردرات اليوم</td>
                            <td>التقيم</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <Link href="/Suppliers/Profile">الصعيدي</Link>
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20 </td>
                            <td>20</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                الصعيدي
                            </td>
                            <td>خضار وفاكهة</td>
                            <td>20 </td>
                            <td>20</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.charts}>
                <div className={classes.chart}>
                    <LineCart title="نمو الموردين"/>
                </div>
                <div className={classes.chart}>
                    <LineCart title="نشاط الموردين"/>
                </div>
            </div>
        </section>
    );
};

export default page;
