import React from "react";
import classes from "./Profile.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import Link from "next/link";
import LineCart from "@/components/UI/chart/LineChart";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: "Chart.js Line Chart",
        },
    },
};

const labels = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10"];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "عدد الاوردرات ",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
            pointBackgroundColor: "#D63236",
            borderColor: "#D63236",
            backgroundColor: "#D6323660",
            lineTension: 0.3,
        },
    ],
};

export const data2 = {
    labels,
    datasets: [
        {
            fill: true,
            label: " التكلفه ",
            data: labels.map(() =>
                faker.datatype.number({ min: -50, max: 100 })
            ),
            pointBackgroundColor: "#D63236",
            borderColor: "#D63236",
            backgroundColor: "#D6323660",
            lineTension: 0.3,
        },
    ],
};
const Profile = () => {
    return (
        <section className={classes.section}>
            <div className={classes.info}>
                <div className={classes.img}>
                    <img src="/image/person.jfif" alt="Delivery image" />
                </div>
                <div className={classes.details}>
                    <Link
                        href="/Delivery_men/Form_Delivery_men/edit"
                        className={classes.edit}
                    >
                        تعديل
                    </Link>
                    <p className="flex">
                        id : <span>1</span>
                    </p>
                    <p>
                        الاسم : <span>محمد على محمد</span>
                    </p>
                    <p>
                        رقم الهاتف : <span>01245788956</span>
                    </p>
                    <p>
                        الرقم القومي : <span>12457845784512 </span>
                    </p>
                    <p>
                        بدايه العمل : <span> 1/10/2023</span>
                    </p>
                    <p>
                        فتره العمل : <span> 11:00 - 07:00</span>
                    </p>
                    <p>
                        عدد الاوردات : <span> 150</span>
                    </p>
                    <p>
                        العهده : <span> 1000 ج.م</span>
                    </p>
                    <p>
                        يعمل بثابت : <span>2500 ج.م</span>
                    </p>
                    <p>
                        يعمل بنسبه : <span> 50%</span>
                    </p>
                    <p>
                        قيمه خصم الشهر : <span>0</span>
                    </p>
                    <div className="flex items-center">
                        <p>التقيم : </p>
                        <ul className="flex gap-1">
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                        </ul>
                    </div>
                    <p>
                        ملاحظات : <span>لا يوجد اي ملاحظات</span>
                    </p>
                </div>
            </div>
            <div className={classes.charts}>
                <div className={classes.chart}>
                    <LineCart title="الاوردات المنجزه" />
                </div>
                <div className={classes.chart}>
                    <LineCart title="التحصيل و التكلفه" />
                </div>
            </div>
        </section>
    );
};

export default Profile;
