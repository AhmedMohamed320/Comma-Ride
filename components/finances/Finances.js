import React from "react";
import classes from "./Finances.module.css";
import Main from "./Expenses/Main";
import Assets from "./Assets/Assets";
const Finances = () => {
    return (
        <section className="flex flex-col gap-12">
            <div>
                <Main />
            </div>
            <hr />
            <div>
                <Assets />
            </div>
        </section>
    );
};

export default Finances;
