import React from "react";
import classes from "./page.module.css";
import Supplier from "@/components/Suppliers/Supplier";
const page = () => {
    return (
        <section className="p-8">
            <div className={classes.head}>
                <div>
                    <p className="text-4xl font-semibold">الموردين</p>
                    <button>اضافه مورد</button>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">فلتر حسب فئه المكان</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب وضع التعاقد</option>
                    </select>
                </div>
            </div>
            <div className={classes.Suppliers}>
                <Supplier />
                <Supplier />
                <Supplier />
            </div>
        </section>
    );
};

export default page;
