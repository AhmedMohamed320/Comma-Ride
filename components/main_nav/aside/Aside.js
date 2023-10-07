"use client";
import React from "react";
import classes from "./Aside.module.css";
import { MdDeliveryDining, MdOutlineClose } from "react-icons/md";
import { AiFillShopping, AiOutlineBarChart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { BiLogOut, BiSolidReport } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Aside = (props) => {
    const pathname = usePathname();

    return (
        <section className={classes.section}>
            <aside className={classes.aside}>
                <div className={classes.close} onClick={props.onHideAside}>
                    <MdOutlineClose />
                </div>
                <div className={classes.head}>
                    <Link href="/" className={classes.logo}>
                        <img src="/image/dots_logo.png" alt="dots logo" />
                    </Link>
                </div>
                <ul className="flex gap-8 flex-col">
                    <li className={pathname == "/info" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <BsPersonFill />
                            حسابي
                        </Link>
                    </li>
                    <li
                        className={
                            pathname.includes("/Delivery_men") && classes.active
                        }
                    >
                        <span className={classes.border}></span>
                        <Link href="/Delivery_men" onClick={props.onHideAside}>
                            <MdDeliveryDining />
                            الطيارين
                        </Link>
                    </li>
                    <li className={pathname == "/My_booking" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Suppliers",
                            }}
                            onClick={props.onHideAside}
                        >
                            <AiFillShopping />
                            الموردين
                        </Link>
                    </li>
                    <li className={pathname == "/Doctory" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <BiSolidReport />
                            التقارير
                        </Link>
                    </li>
                    <li className={pathname == "/Doctory" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <AiOutlineBarChart />
                            احصائيات
                        </Link>
                    </li>
                </ul>
                <span className={classes.hr}></span>
                <div className="flex items-center  px-10  gap-4 cursor-pointer font-semibold">
                    <p>تسجيل الخروج</p>
                    <BiLogOut className="text-4xl" />
                </div>
            </aside>
        </section>
    );
};

export default Aside;
