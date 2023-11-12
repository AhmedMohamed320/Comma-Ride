"use client";
import { Fragment } from "react";
import classes from "./Home.module.css";
import Main from "@/components/mainDashboard/main/Main";

export default function Home() {
    return (
        <Fragment>
            <section className={`main ${classes.section}`}>
                <Main />
            </section>
        </Fragment>
    );
}
