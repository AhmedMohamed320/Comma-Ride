import React from "react";
import classes from "./page.module.css";
import DeliveryCard from "@/components/Delivery_men/DeliveryCard";
const page = () => {
    return (
        <section className={classes.section}>
            <div className={classes.head}>
                <div>
                    <p className="text-4xl font-semibold">
                        الطيارين <span className="text-2xl">3</span>
                    </p>
                    <button>اضافه طيار</button>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">فلتر حسب عدد الاوردرات </option>
                        <option value="">تصاعديا</option>
                        <option value="">تنازليا</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب التقيم</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
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
