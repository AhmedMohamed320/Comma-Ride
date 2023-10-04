import React from "react";
import classes from "./Order_statistics.module.css";
const Order_statistics = () => {
    return (
        <section className={classes.section}>
            <div className={classes.head}>
                <p>احصائيات اوردرات شهر </p>
                <select name="" id="">
                    <option value="">10</option>
                    <option value="">9</option>
                    <option value="">8</option>
                </select>
            </div>
            <div className={classes.weeks}>
                <div className={classes.week}>
                    <p className={classes.head}>
                        الاسبوع الاول <span>1/10 : 7/10</span>
                    </p>
                    <div>
                        <p>
                            متوسط الاوردارت اليومي : <span>5</span>
                        </p>
                        <p>
                            متوسط الاوردارت الاسبوعي : <span>25</span>
                        </p>
                        <p>
                            اجمالي الاوردارت المكتمله : <span>60</span>
                        </p>

                        <p>
                            متوسط التقيمات : <span> 4/5 </span> وعددهم{" "}
                            <span> 60 </span>
                        </p>
                        <p>
                            الراتب الاسبوعي : <span>500 ج.م</span>
                        </p>
                        <p>
                            الخصم : <span>0 ج.م</span>
                        </p>
                    </div>
                </div>
                <div className={classes.week}>
                    <p className={classes.head}>
                        الاسبوع الثاني <span>1/10 : 7/10</span>
                    </p>
                    <div>
                        <p>
                            متوسط الاوردارت اليومي : <span>5</span>
                        </p>
                        <p>
                            متوسط الاوردارت الاسبوعي : <span>25</span>
                        </p>
                        <p>
                            اجمالي الاوردارت المكتمله : <span>60</span>
                        </p>

                        <p>
                            متوسط التقيمات : <span> 4/5 </span> وعددهم{" "}
                            <span> 60 </span>
                        </p>
                        <p>
                            الراتب الاسبوعي : <span>500 ج.م</span>
                        </p>
                        <p>
                            الخصم : <span>0 ج.م</span>
                        </p>
                    </div>
                </div>
                <div className={classes.week}>
                    <p className={classes.head}>
                        الاسبوع الرابع <span>1/10 : 7/10</span>
                    </p>
                    <div>
                        <p>
                            متوسط الاوردارت اليومي : <span>5</span>
                        </p>
                        <p>
                            متوسط الاوردارت الاسبوعي : <span>25</span>
                        </p>
                        <p>
                            اجمالي الاوردارت المكتمله : <span>60</span>
                        </p>

                        <p>
                            متوسط التقيمات : <span> 4/5 </span> وعددهم{" "}
                            <span> 60 </span>
                        </p>
                        <p>
                            الراتب الاسبوعي : <span>500 ج.م</span>
                        </p>
                        <p>
                            الخصم : <span>0 ج.م</span>
                        </p>
                    </div>
                </div>
                <div className={classes.week}>
                    <p className={classes.head}>
                        الاسبوع الخامس <span>1/10 : 7/10</span>
                    </p>
                    <div>
                        <p>
                            متوسط الاوردارت اليومي : <span>5</span>
                        </p>
                        <p>
                            متوسط الاوردارت الاسبوعي : <span>25</span>
                        </p>
                        <p>
                            اجمالي الاوردارت المكتمله : <span>60</span>
                        </p>

                        <p>
                            متوسط التقيمات : <span> 4/5 </span> وعددهم{" "}
                            <span> 60 </span>
                        </p>
                        <p>
                            الراتب الاسبوعي : <span>500 ج.م</span>
                        </p>
                        <p>
                            الخصم : <span>0 ج.م</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={classes.month}>
                <p className={classes.head}>احصائيات شهر 10</p>
                <div>
                    <p>
                        متوسط الاوردارت الشهري : <span>5</span>
                    </p>

                    <p>
                        اجمالي الاوردارت المكتمله : <span>60</span>
                    </p>

                    <p>
                        متوسط التقيمات : <span> 4/5 </span> وعددهم{" "}
                        <span> 60 </span>
                    </p>
                    <p>
                        الراتب الشهري : <span>2500 ج.م</span>
                    </p>
                    <p>
                        الخصم : <span>0 ج.م</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Order_statistics;
