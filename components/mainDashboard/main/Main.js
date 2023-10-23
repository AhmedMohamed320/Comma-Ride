import React from "react";
import classes from "../MainDashboard.module.css";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSolidWallet } from "react-icons/bi";
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
                            <FaMoneyBillTransfer />
                        </div>
                        <p className={classes.changeColor}>+500 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">
                        91500 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        المحصله الاجماليه
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <GiPayMoney />
                        </div>
                        <p className={classes.changeColor}>+500 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl pb-4 text-center">
                        500 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        اجمالى المصاريف
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <GiReceiveMoney />
                        </div>
                        <p className={classes.changeColor}>+100 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">
                        900 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        اجمالي الدخل
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <BiSolidWallet />
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
            <div className={classes.statistics}>
                <LineChart title="الدخل" />
                <LineChart title="المصاريف" />
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Main;
