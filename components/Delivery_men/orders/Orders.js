import React from "react";
import classes from "./Orders.module.css";
const Orders = () => {
    return (
        <section className={classes.section}>
            <div className={classes.head}>
                <p>اوردرات يوم</p>
                <input type="date" />
            </div>
            <div className={classes.orders}>
                <div className={classes.order}>
                    <div className={classes.head}>
                        <p>
                            طلب رقم 1
                        </p>
                        <p>
                            التقيم : <span>5/5</span>
                        </p>
                        <div className={classes.pending}>
                            <p>جاري التوصيل</p>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.address}>
                            <p>
                                من : <span>شارع مستشفى حمد السيد </span>
                            </p>
                            <p>
                                الى : <span>شارع مستشفى حمد السيد </span>
                            </p>
                        </div>
                        <div className={classes.number}>
                            <p>
                                رقم المستلم منه : <span>012854758524</span>
                            </p>
                            <p>
                                رقم المستلم : <span>012895758431</span>
                            </p>
                        </div>
                        <div className={classes.moreInfo}>
                            <p>
                                نوع الطلب : <span> خضار  </span>
                            </p>
                            <p>
                                يتم التوصيل في : <span>45 دقيقه</span>
                            </p>
                        </div>
                        <div className={classes.stateOrder}>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders;
