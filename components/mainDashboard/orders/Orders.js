import LineChart from "@/components/UI/chart/LineChart";
import { PieChart } from "@/components/UI/chart/PieChart";
import classes from "../MainDashboard.module.css";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { BiSolidWallet } from "react-icons/bi";
import { LuBoxes } from "react-icons/lu";

const Orders = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className={`${classes.static} ${classes.static3Div}`}>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <LuBoxes />
                        </div>
                        <p className={classes.changeColor}>+50 طلب اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">58900</p>
                    <p className={`text-center ${classes.changeColor}`}>
                        اجمالي الطلبات
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
                <PieChart title="انواع الطلبات" />
                <LineChart title="اعداد الطلبات" />
            </div>
        </div>
    );
};

export default Orders;
