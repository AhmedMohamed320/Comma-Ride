import React from "react";
import classes from "./FormAdd.module.css";
const FormAddSuppliers = () => {
    return (
        <>
            <form action="" className={classes.form}>
                <div>
                    <label htmlFor="n1">الاسم</label>
                    <input type="text" placeholder="ادخل اسم الطيار" id="n1" />
                </div>

                <div>
                    <label htmlFor="n2">رقم الهاتف الاول</label>
                    <input type="number" placeholder="ادخل الرقم " id="n2" />
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
                        <option value="">خضار وفاكهه</option>
                        <option value="">خضار وفاكهه</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="n6">وضع التعاقد</label>
                    <select id="n6">
                        <option value="">لا يوجد</option>
                        <option value="">10 اوردرات</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="n8">العنوان</label>
                    <textarea
                        type="number"
                        placeholder=" اكتب العنوان  "
                        id="n8"
                    />
                </div>
            </form>
            <button className={classes.add}>اضافه المورد</button>
        </>
    );
};

export default FormAddSuppliers;
