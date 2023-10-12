import React from "react";
import classes from "./DeliveryCard.module.css";
import Link from "next/link";
const DeliveryCard = () => {
    return (
        <section className={classes.section}>
            <Link href="/Delivery_men/Profile" className={classes.img}>
                <img src="/image/person.jfif" alt="Delivery img" />
            </Link>
            <div className={classes.details}>
                <div>
                    <p>
                        الاسم : <span>محمد خالد السيد</span>
                    </p>
                    <p>
                        متاح <span className={classes.available}></span>{" "}
                    </p>
                </div>
                <div>
                    <p>
                        فتره العمل من <span>11:00 ص</span> الى{" "}
                        <span>6:00 م</span>
                    </p>
                </div>
                <div>
                    <p>
                        الرقم : <span>01248796524</span>
                    </p>
                </div>
                <div>
                    <p>
                        الاوردارت المنجزه : <span>9</span>
                    </p>
                    <p>
                        التحصيل : <span>100 ج.م</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DeliveryCard;
