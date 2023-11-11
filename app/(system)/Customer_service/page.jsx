"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import BarChart from "@/components/UI/chart/BarChart";
import { IoMdClose } from "react-icons/io";
import Search from "@/components/UI/input/Search";

const page = () => {
    const [showFormSchedule, setShowFormSchedule] = useState(false);

    const alertClass = `${classes.pop}  ${
        showFormSchedule ? `${classes.show}` : ""
    }`;
    return (
        <section className={classes.section}>
            <div className={alertClass}>
                <div>
                    <div className={classes.close}>
                        <IoMdClose
                            onClick={() => {
                                setShowFormSchedule(false);
                            }}
                        />
                    </div>
                    <div>
                        <p className="mb-4 w-4/5 m-auto text-3xl font-semibold text-center">
                            جدوله مكالمه
                        </p>
                        <div className={classes.form}>
                            <div>
                                <Search placeholder="ابحث عن العميل" />
                            </div>
                            <div>
                                <label htmlFor="">الاسم</label>
                                <input
                                    type="number"
                                    placeholder="ادخل اسم العميل"
                                />
                            </div>
                            <div>
                                <label htmlFor="">رقم العميل</label>
                                <input
                                    type="number"
                                    placeholder="ادخل رقم العميل"
                                />
                            </div>
                            <div>
                                <label htmlFor="">التاريخ</label>
                                <input type="date" className="w-full" />
                            </div>
                            <div>
                                <label htmlFor="">الحاله</label>
                                <select name="" id="" className="w-full">
                                    <option value="">حدد الحاله</option>
                                    <option value="">مغلق</option>
                                    <option value="">لم نصل</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">ملاحظه</label>
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="ادخل اي ملاحظه"
                                ></textarea>
                            </div>
                            <button
                                onClick={() => {
                                    setShowFormSchedule(false);
                                }}
                            >
                                تاكيد
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-4xl pb-4 font-semibold">خدمه العملاء </p>
            </div>
            <div className={classes.call_statistics}>
                <div className=" flex items-center justify-between">
                    <div className=" flex items-center gap-4">
                        <p className="text-3xl">مكالمات يوم </p>
                        <input type="date" />
                        <span className="text-2xl">الاجمالى : 45</span>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setShowFormSchedule(true);
                            }}
                        >
                            جدوله مكالمه
                        </button>
                    </div>
                </div>
                <div className={classes.part2}>
                    <div>
                        <div className={classes.table}>
                            <table>
                                <tbody>
                                    <tr className="font-semibold">
                                        <td>الكود</td>
                                        <td>الاسم</td>
                                        <td>الارقام </td>
                                        <td>ملاحظه</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>احمد محمد</td>
                                        <td>
                                            <p>01280626320</p>
                                        </td>
                                        <td>لا يوجد</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>احمد محمد</td>
                                        <td>
                                            <p>01280626320</p>
                                        </td>
                                        <td>لا يوجد</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>احمد محمد</td>
                                        <td>
                                            <p>01280626320</p>
                                            <p>01254584854</p>
                                        </td>
                                        <td>لا يوجد</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={classes.table}>
                            <table>
                                <tbody>
                                    <tr className="font-semibold">
                                        <td>الكود</td>
                                        <td>الاسم</td>
                                        <td>الارقام </td>
                                        <td>ملاحظه</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>احمد محمد</td>
                                        <td>
                                            <p>01280626320</p>
                                        </td>
                                        <td>لا يوجد</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>احمد محمد</td>
                                        <td>
                                            <p>01280626320</p>
                                        </td>
                                        <td>لا يوجد</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>احمد محمد</td>
                                        <td>
                                            <p>01280626320</p>
                                            <p>01254584854</p>
                                        </td>
                                        <td>لا يوجد</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className={classes.table}>
                            <table>
                                <tbody>
                                    <tr className="font-semibold">
                                        <td>الرقم</td>
                                        <td>النوع</td>
                                        <td>التوقيت </td>
                                        <td>الموظف</td>
                                        <td>ملاحظه</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                        <td>محمد</td>
                                        <td>لا يوجود ملاحظات</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                        <td>محمد</td>
                                        <td>لا يوجود ملاحظات</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                        <td>محمد</td>
                                        <td>لا يوجود ملاحظات</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                        <td>محمد</td>
                                        <td>لا يوجود ملاحظات</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>طلب</td>
                                        <td>05:45</td>
                                        <td>محمد</td>
                                        <td>لا يوجود ملاحظات</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={classes.charts}>
                            <BarChart title="احصائيات المكالمات" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
