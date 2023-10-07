import React from "react";
import classes from "./page.module.css";
import DeliveryCard from "@/components/Delivery_men/DeliveryCard";
const page = () => {
    return (
        <section className={classes.section}>
            <p className="text-4xl pb-8 px-2 font-semibold ">جميع الطيارين العاملين معانا</p>
            <div>
                <DeliveryCard />
                <DeliveryCard />
                <DeliveryCard />
            </div>
        </section>
    );
};

export default page;
