import React from "react";
import classes from "./page.module.css";
import DeliveryCard from "@/components/Delivery_men/DeliveryCard";
const page = () => {
    return (
        <section className={classes.section}>
            <div className={classes.head}>
                <div>
                    <p className="text-4xl font-semibold">الطيارين</p>
                    <button>اضافه طيار</button>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">فلتر حسب عدد الاوردرات </option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب التقيم</option>
                    </select>
                </div>
            </div>
            <div className={classes.allDelivery}>
                <DeliveryCard />
                <DeliveryCard />
                <DeliveryCard />
            </div>
        </section>
    );
};

export default page;
