import React from "react";
import FormAddDelivery from "@/components/UI/Form/Add Delivery Suppliers/FormDelivery ";

const page = (props) => {
    return (
        <section className="mainContainer p-4 ">
            <p className="text-4xl pb-4 font-semibold ">
                {props.params.action == "add"
                    ? "اضافه طيار"
                    : "تعديل بيانات طيار"}
            </p>
            <FormAddDelivery action={props.params.action} />
        </section>
    );
};

export default page;
