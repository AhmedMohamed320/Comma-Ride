"use client";
import { useEffect, useState } from "react";
import classes from "./OrderCard.module.css";
import { usePathname } from "next/navigation";

const OrderCard = (props) => {
    const pathname = usePathname();

    function handle_alert(Text) {
        if (pathname != "/Orders") {
            props.alertText(Text);
            props.showAlertDiv(true);
        }
    }

    // const [location, setLocation] = useState(null);

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 const latitude = position.coords.latitude;
    //                 const longitude = position.coords.longitude;
    //                 setLocation([latitude, longitude]);
    //             },
    //             (error) => {
    //                 console.error("Error getting user location:", error);
    //             }
    //         );
    //     } else {
    //         console.error("Geolocation is not supported by this browser.");
    //     }
    // }, []);
    return (
        <div className={classes.order}>

            <div className={classes.head}>
                <p>
                    طلب رقم : <span>1542</span>
                </p>
                <div className={classes.rate}>
                    <p>التقيم :</p>
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
                <div className={classes.pending}>
                    {props.edit ? <p className="cursor-pointer" onClick={props.fromEdit}>تعديل</p> : <p>جاري التوصيل</p>}
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.data}>
                    <div>
                        <p>
                            اسم المورد : <span>مطعم ماك</span>
                        </p>
                        <p>
                            رقم المورد : <span>012854758524</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            اسم المستلم : <span>خالد على محمد</span>
                        </p>
                        <p>
                            رقم المستلم : <span>012895758431</span>
                        </p>
                    </div>
                </div>
                <div className={classes.address}>
                    <p>
                        من : <span>شارع مستشفى حمد السيد </span>
                    </p>
                    <p>
                        الى : <span>شارع مستشفى حمد السيد </span>
                    </p>
                </div>

                <div className={classes.moreInfo}>
                    <p>
                        نوع الطلب : <span> خضار </span>
                    </p>
                    <p>
                        يتم التوصيل في : <span>45 دقيقه</span>
                    </p>
                    <p>
                        يتم تحصيل : <span>30 ج.م</span>
                    </p>
                    <p>
                        الطيار : <span>محمد على</span>
                    </p>
                    <p>
                        خدمه العملاء : <span> على</span>
                    </p>
                </div>
                <div className={classes.Notes}>
                    <span>
                        تم ارسال الطلب الساعه 01:00
                    </span>
                    <span>لا يوجد تفاصيل اضافيه</span>
                </div>
            </div>
            <div className={classes.stateOrder}>
                <div
                    onClick={() => {
                        handle_alert(
                            `انت الان جاهز للتحرك لمكان استلام الاوردر`
                        );
                    }}
                    className={classes.completed}
                >
                    <p>جاهز</p>
                </div>
                <div
                    onClick={() => {
                        handle_alert(
                            `${location} لقد استلمت الاوردر الان من المورد`
                        );
                    }}
                    className={classes.pending}
                >
                    <p>تم الاستلام</p>
                </div>
                <div
                    onClick={() => {
                        handle_alert("وصلت مكان تسليم الاوردر");
                    }}
                    className={classes.pending}
                >
                    <p>وصلت</p>
                </div>
                <div
                    onClick={() => {
                        handle_alert("تمت عمليه التسليم للعميل");
                    }}
                    className={classes.pending}
                >
                    <p>تم التسليم</p>
                </div>
                <div
                    onClick={() => {
                        handle_alert("عدت لمقر الشركه");
                    }}
                    className={classes.pending}
                >
                    <p>عدت</p>
                </div>
            </div>
            <div className={classes.stateOrderTime}>
                <div className={classes.ready}>
                    <p>01:00</p>
                </div>
                <div className={classes.ready_for_pickup}>
                    <p>--:--</p>
                </div>
                <div className={classes.arrived}>
                    <p>--:--</p>
                </div>
                <div className={classes.completed}>
                    <p>--:--</p>
                </div>
                <div className={classes.back}>
                    <p>--:--</p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
