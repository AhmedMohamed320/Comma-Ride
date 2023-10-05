import React from "react";
import classes from "./Orders.module.css";
const Orders = () => {
    return (
        <section className={classes.section}>
            <div className={classes.head}>
                <p>اوردرات يوم</p>
                <input type="date" />
                <p>العدد : 2</p>
            </div>
            <div className={classes.orders}>
                <div className={classes.order}>
                    <div className={classes.head}>
                        <p>
                            طلب رقم : <span>1542</span>
                        </p>
                        <p>
                            التقيم : <span>5 / -</span>
                        </p>
                        <div className={classes.pending}>
                            <p>جاري التوصيل</p>
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
                        </div>
                    </div>
                    <div className={classes.stateOrder}>
                        <div className={classes.ready}>
                            <p>جاهز</p>
                        </div>
                        <div className={classes.ready_for_pickup}>
                            <p>تم الاستلام</p>
                        </div>
                        <div className={classes.arrived}>
                            <p>وصلت</p>
                        </div>
                        <div className={classes.completed}>
                            <p>تم التسليم</p>
                        </div>
                        <div className={classes.back}>
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
                <div className={classes.order}>
                    <div className={classes.head}>
                        <p>
                            طلب رقم : <span>1542</span>
                        </p>
                        <p>
                            التقيم : <span>5 / 5</span>
                        </p>
                        <div className={classes.complete}>
                            <p>تم التوصيل</p>
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
                        </div>
                    </div>
                    <div className={classes.stateOrder}>
                        <div className={classes.ready}>
                            <p>جاهز</p>
                        </div>
                        <div className={classes.ready_for_pickup}>
                            <p>تم الاستلام</p>
                        </div>
                        <div className={classes.arrived}>
                            <p>وصلت</p>
                        </div>
                        <div className={classes.completed}>
                            <p>تم التسليم</p>
                        </div>
                        <div className={classes.back}>
                            <p>عدت</p>
                        </div>
                    </div>
                    <div className={classes.stateOrderTime}>
                        <div className={classes.ready}>
                            <p>01:00</p>
                        </div>
                        <div className={classes.ready_for_pickup}>
                            <p>01:20</p>
                        </div>
                        <div className={classes.arrived}>
                            <p>01:30</p>
                        </div>
                        <div className={classes.completed}>
                            <p>01:40</p>
                        </div>
                        <div className={classes.back}>
                            <p>01:42</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders;
