import React from "react";
import classes from "../MainDashboard.module.css";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiCoinStack, BiSolidWallet, BiWallet } from "react-icons/bi";
import LineChart from "@/components/UI/chart/LineChart";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";

const Main = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className={classes.MainHead}>
                <div className="flex justify-between items-center pt-4">
                    <div className={classes.part1}>
                        <p>
                            اهلا بك <span>محمد</span>
                        </p>
                        <p>يمكنك متابعه جميع احصائيات الشركه من هنا</p>
                    </div>
                    <div className={classes.part2}>
                        <div className="center gap-4">
                            {/* <div className="center gap-2">
                                            <label htmlFor="n1">عرض : </label>
                                            <select name="" id="n2">
                                                <option value="">2023</option>
                                                <option value="">2022</option>
                                                <option value="">2021</option>
                                            </select>
                                        </div> */}
                            <div>
                                <button className="center gap-2">
                                    تنزيل البيانات
                                    <BsFileEarmarkArrowDownFill />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.static}>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <BiCoinStack />
                        </div>
                        <p className={classes.changeColor}>+500 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">
                        91500 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        الخزنه
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <FaMoneyBillTransfer />
                        </div>
                        <p className={classes.changeColor}>+60 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">
                        <span className="text-4xl">+</span>
                        900 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        ميزان الشهر
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <GiTakeMyMoney />
                        </div>
                        <p className={classes.changeColor}>+500 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl pb-4 text-center">
                        500 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        العهده
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <BiWallet />
                        </div>
                        <p className={classes.changeColor}>+10 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">
                        100 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        المحفظه
                    </p>
                </div>
            </div>
            <div className={classes.part22}>
                <div>
                    <div className={classes.title}>
                        <p>الخارج</p>
                        <select name="" id="">
                            <option value="">اخر 7 ايام</option>
                            <option value="">اخر 12 اسبوع</option>
                        </select>
                    </div>
                    <div className={classes.Income}>
                        <table className={classes.table}>
                            <tbody>
                                <tr className={classes.head}>
                                    <td>التوقيت</td>
                                    <td>الوصف</td>
                                    <td>القيمه</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">11:30</p>
                                    </td>
                                    <td>
                                        <p>ايجار</p>
                                    </td>
                                    <td>
                                        <p>-3000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>مرتب</p>
                                    </td>
                                    <td>
                                        <p>-2000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>مرتب</p>
                                    </td>
                                    <td>
                                        <p>-2000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>اعلانات</p>
                                    </td>
                                    <td>
                                        <p>-200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>مرتب</p>
                                    </td>
                                    <td>
                                        <p>-2000</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={classes.chart}>
                            <LineChart />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.title}>
                        <p>الداخل</p>
                        <select name="" id="">
                            <option value="">اخر 7 ايام</option>
                            <option value="">اخر 12 اسبوع</option>
                        </select>
                    </div>
                    <div className={classes.outside}>
                        <table className={classes.table}>
                            <tbody>
                                <tr className={classes.head}>
                                    <td>التوقيت</td>
                                    <td>الوصف</td>
                                    <td>القيمه</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={classes.chart}>
                            <LineChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
