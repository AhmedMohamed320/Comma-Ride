"use client";
import classes from "./page.module.css";
import OrderCard from "@/components/Delivery_men/orders/OrderCard";
import Search from "@/components/UI/input/Search";
import { PieChart } from "@/components/UI/chart/PieChart";
import LineChart from "@/components/UI/chart/LineChart";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import FormCreateOrder from "@/components/UI/Form/FormCreateOrder";


const page = () => {
    const [formEdit, setShowFormEdit] = useState(false);
    const alertClass2 = `${classes.pop}  ${formEdit ? `${classes.show}` : ""}`;

    return (
        <section className="mainContainer p-4">
            {formEdit && (
                <div className={alertClass2}>
                    <div>
                        <div className={classes.close}>
                            <p className="text-3xl">تعديل اوردر 1420</p>
                            <IoMdClose
                                onClick={() => {
                                    setShowFormEdit(false);
                                }}
                            />
                        </div>
                        <div>
                            <FormCreateOrder action="edit" />
                        </div>
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between">
                <div className={classes.head}>
                    <p className="text-4xl py-4 font-semibold">طلبات يوم</p>
                    <input type="date" />
                    <p className="text-2xl">الاجمالي : 1</p>
                </div>
                <div className="sm:flex hidden ">
                    <Search placeholder="ادخل رقم الطلب" />
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
            <div className={classes.statistics}>
                <PieChart title="انواع الطلبات" />
                <LineChart title="اعداد الطلبات" />
            </div>
            <div className={classes.orders}>
                <OrderCard edit={true} fromEdit={setShowFormEdit} />
            </div>
        </section>
    );
};

export default page;
