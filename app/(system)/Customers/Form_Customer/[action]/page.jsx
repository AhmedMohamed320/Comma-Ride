import FormAddNewCustomers from "@/components/UI/Form/FormAddNewCustomers";
import React from "react";
const page = (props) => {
    return (
        <section className="mainContainer p-4 text-center">
            <p className="text-4xl pb-4 font-semibold ">
                {props.params.action == "add"
                    ? "اضافه العميل"
                    : "تعديل بيانات العميل"}
            </p>
            <FormAddNewCustomers action={props.params.action}  />
        </section>
    );
};

export default page;
