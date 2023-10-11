import React from "react";
import classes from "./FormAdd_Edit.module.css";
const FormAddSuppliers = (props) => {
    return (
        <>
            <form action="" className={classes.form}>
                <div>
                    <div>
                        <label htmlFor="n1">الاسم</label>
                        <input
                            type="text"
                            placeholder="ادخل اسم الطيار"
                            id="n1"
                        />
                    </div>

                    <div>
                        <label htmlFor="n2">رقم الهاتف الاول</label>
                        <input
                            type="number"
                            placeholder="ادخل الرقم "
                            id="n2"
                        />
                    </div>

                    <div>
                        <label htmlFor="n3">رقم الهاتف الثاني</label>
                        <input
                            type="number"
                            placeholder="ادخل الرقم اذا وجد  "
                            id="n3"
                        />
                    </div>

                    <div>
                        <label htmlFor="n4">نوع المكان</label>
                        <select name="" id="n4">
                            <option value="">خضار وفاكهه</option>
                            <option value="">كافيه</option>
                            <option value="">اسماك</option>
                            <option value="">لحوم</option>
                            <option value="">صيدليه</option>
                            <option value="">عطاره</option>
                            <option value="">دواجن</option>
                            <option value="">سوبر ماركت</option>
                            <option value="">ماركت</option>
                            <option value="">حرف وادوات</option>
                            <option value="">مطعم</option>
                            <option value="">ورقيات</option>
                            <option value="">اخرى</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="n6">وضع التعاقد</label>
                        <select id="n6">
                            <option value="">عدد الاوردرات اليومي</option>
                            <option value="">اعلانات سوشيل</option>
                            <option value="">شريك</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="n8">العنوان 1</label>
                        <input type="text" placeholder="الفرع الاول" id="n8" />
                    </div>
                    <div>
                        <label htmlFor="n9">العنوان 2</label>
                        <input type="text" placeholder="الفرع الثاني اذا وجد" />
                    </div>
                    <div>
                        <label htmlFor="n10">العنوان 3</label>
                        <input type="text" placeholder="الفرع الثالث اذا وجد" />
                    </div>
                </div>
                <button className={classes.add}>
                    {props.action === "add" ? "اضافه المورد" : "تاكيد البيانات"}
                </button>
            </form>
        </>
    );
};

export default FormAddSuppliers;
