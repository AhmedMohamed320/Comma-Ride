import React from "react";
import classes from "../MainDashboard.module.css";
import LineChart from "@/components/UI/chart/LineChart";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";

const Suppliers = () => {
    return (
        <div div className="flex flex-col gap-4">
            <div className={`${classes.static} ${classes.static3Div}`}>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <FaShop />
                        </div>
                        <p className={classes.changeColor}>
                            +50 مورد هذا الاسبوع
                        </p>
                    </div>
                    <p className="text-6xl py-4 text-center">989</p>
                    <p className={`text-center ${classes.changeColor}`}>
                        اجمالي الموردين
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
            </div>
            <div className={classes.statistics}>
                <LineChart title="نمو الموردين" />
                <LineChart title="نشاط الموردين" />
            </div>
        </div>
    );
};

export default Suppliers;
