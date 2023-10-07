import React from "react";
import classes from "./Supplier.module.css";
const Supplier = () => {
    return (
        <div className={classes.Supplier}>
            <div className={classes.head}>
                <p>
                    اسم المكان : <span>الصعيدي</span>{" "}
                    <span>(خضار و فاكهة)</span>
                </p>
            </div>
            <div className={classes.info}>
                <div className={classes.phone}>
                    <p>
                        رقم 1 : <span> 01245788956</span>
                    </p>
                </div>
                <div className={classes.address}>
                    <p>
                        الفرع الاول : <span>شارع مستشفى حمد السيد </span>
                    </p>
                </div>

                <div className={classes.statistics}>
                    <p>
                        عدد الاوردرات اليومي : <span>10</span>
                    </p>
                    <p>
                        المتوسط  اليومي : <span>10</span>
                    </p>
                    <p>
                        عدد الاوردرات الاسبوعي : <span>10</span>
                    </p>
                    <p>
                        المتوسط  الاسبوعي : <span>10</span>
                    </p>
                    <p>
                        عدد الاوردرات الشهري : <span>10</span>
                    </p>
                    <p>
                        المتوسط  الشهري : <span>10</span>
                    </p>
                </div>

                <div className={classes.contract}>
                    <p>
                        نوعه التعاقد : <span>20 اوردر</span>
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
                </div>
                <div className={classes.Notes}>
                    <p>متوسط ساعات الذروه : 
                        
                        <span> 05:00 م </span>
                        </p>
                    <span>لا يوجد تفاصيل اضافيه</span>
                </div>
            </div>
        </div>
    );
};

export default Supplier;
