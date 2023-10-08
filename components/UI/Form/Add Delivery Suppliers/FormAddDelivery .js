import React from "react";
import classes from "./FormAdd.module.css";
const FormAddDelivery = () => {
    return (
        <>
        <form action="" className={classes.form}>
            <div>
                <label htmlFor="n1">الاسم</label>
                <input type="text" placeholder="ادخل اسم الطيار" id="n1" />
            </div>

            <div>
                <label htmlFor="n2">الرقم القومي</label>
                <input type="number" placeholder="ادخل الرقم القومي" id="n2" />
            </div>

            <div>
                <label htmlFor="n3">رقم الهاتف</label>
                <input type="number" placeholder="ادخل رقم الهاتف " id="n3" />
            </div>

            <div>
                <label htmlFor="n4">العمر</label>
                <input type="number" placeholder="ادخل عمر الطيار" id="n4" />
            </div>

            <div>
                <label htmlFor="n5">تاريخ بدايه العمل</label>
                <input type="date" placeholder="ادخل  التاريخ" id="n5" />
            </div>

            <div>
                <label htmlFor="n6">الشيفت</label>
                <select id="n6">
                    <option value="">11:00 - 07:00</option>
                    <option value="">11:00 - 07:00</option>
                    <option value="">11:00 - 07:00</option>
                </select>
            </div>
            <div>
                <label htmlFor="n7">الصوره الشخصيه</label>
                <input type="file"  id="n7" />
            </div>
            <div>
                <label htmlFor="n8">ملاحظات</label>
                <textarea type="number" placeholder="اكتب  " id="n8" />
            </div>
        </form>
        <button className={classes.add}>اضافه الطيار</button>
        </>

    );
};

export default FormAddDelivery;
