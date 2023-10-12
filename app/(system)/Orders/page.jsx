import React from "react";
import classes from "./page.module.css";

const page = () => {
    return (
        <section className="mainContainer p-4">
            <div className={classes.head}>
                <p className="text-4xl py-4 font-semibold">طلبات يوم</p>
                <input type="date" />
                <p className="text-2xl">الاجمالي : 2</p>
            </div>
        </section>
    );
};

export default page;
