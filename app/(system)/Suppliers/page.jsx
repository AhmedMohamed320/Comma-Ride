import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
const page = () => {
    return (
        <section className="py-8 px-4">
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
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب عدد الاوردرات</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب التقيم </option>
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
                            <td className="underline underline-offset-8 cursor-pointer">الصعيدي</td>
                            <td>خضار وفاكهة</td>
                            <td>20 </td>
                            <td>20</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div className={classes.Suppliers}>
                <Supplier />
                <Supplier />
                <Supplier />
            </div> */}
        </section>
    );
};

export default page;
