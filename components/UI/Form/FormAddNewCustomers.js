import React from "react";
import classes from "./Add Delivery Suppliers/FormAdd_Edit.module.css";
const FormAddNewCustomers = (props) => {
    return (
        <>
            <form action="" className={classes.form}>
                <div>
                    <div>
                        <label htmlFor="n1">اسم العميل</label>
                        <input
                            type="text"
                            id="n1"
                            placeholder="ادخل اسم العميل"
                        />
                    </div>
                    <div>
                        <label htmlFor="n2">رقم 1</label>
                        <input
                            type="number"
                            id="n2"
                            placeholder="ادخل رقم العميل الاول"
                        />
                    </div>
                    <div>
                        <label htmlFor="n3">رقم 2</label>
                        <input
                            type="number"
                            id="n3"
                            placeholder="ادخل رقم العميل الثاني اذا وجد"
                        />
                    </div>
                    <div>
                        <label htmlFor="n4">العنوان 1</label>
                        <input
                            type="text"
                            id="n4"
                            placeholder="ادخل عنوان العميل الاول"
                        />
                    </div>
                    <div>
                        <label htmlFor="n5">العنوان 2</label>
                        <input
                            type="text"
                            id="n5"
                            placeholder="ادخل عنوان العميل الثاني اذا وجد"
                        />
                    </div>
                    <div>
                        <label htmlFor="n5"> المنطقه</label>
                        <select id="n5">
                            <option value="">حى اول</option>
                            <option value="">حى اول</option>
                            <option value="">حى اول</option>
                            <option value="">حى اول</option>
                            <option value="">حى اول</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n6">محل الاقامه</label>
                        <input
                            type="text"
                            id="n6"
                            placeholder="ادخل محل  اقامه العميل"
                        />
                    </div>
                    <div>
                        <label htmlFor="n7">تاريخ الميلاد</label>
                        <input type="date" id="n7" />
                    </div>
                    <div>
                        <label htmlFor="n8">الوظيفه </label>
                        <input
                            type="text"
                            id="n8"
                            placeholder="ادخل وظيفه العميل"
                        />
                    </div>
                </div>
                <button className={classes.add} onClick={props.hide}>
                    {props.action === "add" ? "اضافه العميل" : "تاكيد البيانات"}
                </button>
            </form>
        </>
    );
};

export default FormAddNewCustomers;
