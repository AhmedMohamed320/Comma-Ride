import React from "react";
import classes from "./page.module.css";
import Supplier from "@/components/Suppliers/Supplier";
const page = () => {
    return (
        <section className="p-8">
            <div className={classes.head}>
                <p className="text-4xl px-2 font-semibold">الموردين</p>
                <select name="" id="">
                    <option value="">فلتر حسب نوع المكان</option>
                </select>
                <select name="" id="">
                    <option value="">فلتر حسب  وضع التعاقد</option>
                </select>
            </div>
            <div className={classes.Suppliers}>
                <Supplier/>
                <Supplier/>
                <Supplier/>
            </div>
        </section>
    );
};

export default page;
