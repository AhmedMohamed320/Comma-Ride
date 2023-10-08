import React from "react";
import FormAddSuppliers from "@/components/UI/Form/Add Delivery Suppliers/FormAddSuppliers";
const page = () => {
    return (
        <section className="mainContainer p-4 ">
            <p className="text-4xl pb-4 font-semibold ">اضافه مورد معانا</p>
            <FormAddSuppliers/>
        </section>
    );
};

export default page;
