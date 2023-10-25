import React from "react";
import FormAddSuppliers from "@/components/UI/Form/Add Delivery Suppliers/FormSuppliers";
const page = (props) => {
    return (
        <section className="mainContainer text-center ">
            <p className="text-4xl pb-4 font-semibold ">
                {props.params.action == "add"
                    ? "اضافه مورد"
                    : "تعديل بيانات مورد"}
            </p>
            <FormAddSuppliers action={props.params.action}  />
        </section>
    );
};

export default page;
