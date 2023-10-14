import React from "react";
import classes from "./page.module.css";
import OrderCard from "@/components/Delivery_men/orders/OrderCard";
import { BiSearchAlt } from "react-icons/bi";

const page = () => {
    return (
        <section className="mainContainer p-4">
            <div className="flex items-center justify-between">
                <div className={classes.head}>
                    <p className="text-4xl py-4 font-semibold">طلبات يوم</p>
                    <input type="date" />
                    <p className="text-2xl">الاجمالي : 1</p>
                </div>
                <div className={classes.input}>
                    <input type="search" placeholder="ادخل رقم الطلب" />
                    <BiSearchAlt className="text-4xl text-gray-400" />
                </div>
            </div>
            <div className={classes.filter}>
                <select name="" id="">
                    <option value="">فلتر حسب الطيار</option>
                </select>
                <select name="" id="">
                    <option value="">فلتر حسب نوع الطلب</option>
                </select>
                <select name="" id="">
                    <option value="">فلتر حسب قيمه التحصيل</option>
                    <option value="">تصاعدي</option>
                    <option value="">تنازلي</option>
                </select>
                <select name="" id="">
                    <option value="">فلتر حسب حاله الطلب </option>
                    <option value="">تم التوصيل</option>
                    <option value="">جاري التوصيل</option>
                </select>
            </div>
            <div className={classes.orders}>
                <OrderCard />
            </div>
        </section>
    );
};

export default page;
